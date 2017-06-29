/**
 * @file rubberBand.ts 橡皮筋效果的函数
 * 
 * @author: zhangbobell
 * @email: zhangbobell@163.com
 * 
 * @created: 2017.06.27
 */


import Easing from '../easing';

export default class RubberBand extends Easing {

    private _x: number;
    private coeff: number;
    private _isB: boolean = false;

    public ACompute(x: number): number {
        x = Math.abs(x);
        return -0.2 * x * (x - 2);
    }

    public BCompute(x: number): number {
        if (!this._isB) { 
            this._x = Math.abs(x);
            this.coeff = this.ACompute(this._x) / (this._x * this._x);
            this._isB = true;
        }

        return this.coeff * x * x * x;
    }

    public reset() {
        this._isB = false;
    }
}