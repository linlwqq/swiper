/**
 * @file fade.ts 演示稿翻页效果（默认）
 * 
 * @author: zhangbobell
 * @email: zhangbobell@163.com
 * 
 * @created: 2017.06.27
 */


import Render from '../render';

type Sign = 0 | -1 | 1;

export default class Slide extends Render {

    doRender(swiper:any) {
        const axis = swiper.axis;
        const sideOffset: number = swiper.sideOffset;
        const sideLength = swiper.sideLength;
        const sign: Sign = this.sign(sideOffset);

        return {
            currentPage: `-webkit-transform: translateZ(0) translate${axis}(${sideOffset}px)`,
            activePage: `-webkit-transform: translateZ(0) translate${axis}(${sideOffset - sign * sideLength}px)`
        };
    }
}
