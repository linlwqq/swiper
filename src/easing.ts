/**
 * @file easing.ts 抽象类，滑动函数
 * 
 * @author: zhangbobell
 * @email: zhangbobell@163.com
 * 
 * @created: 2017.06.29
 */

interface EasingInterface {
    [key: string]: any;
}


export default abstract class Easing {

    static _easings: EasingInterface = {};

    static register(name: string, EasingClass: any) {
        Easing._easings[name] = EasingClass;
    }

    static getEasingInstance(name) {
        let EasingClass = Easing._easings[name];
        if (!EasingClass) {
            throw new Error(`Missing easing : ${ name }`);
        }

        return new EasingClass();
    }

    abstract ACompute(x: number): number;

    abstract BCompute(x: number): number;

    abstract reset(): void;
}