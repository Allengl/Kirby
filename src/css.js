const string = `
/*
 *大家好，我是小邓，今天给大家画一只可爱的星之卡比
 */
/*
 *首先，卡比有一个圆圆的脑袋
 */
.head {
  width: 400px;
  height: 400px;
  background-color: var(--body-color);
  border-radius: 50%;
  box-shadow: inset 10px -35px 60px 0 var(--body-shadow-color), 40px 20px 64px 0 rgba(0, 0, 0, 0.2);
  z-index: 1;
}
/*
 *接下来，我们画的一双小手
 */
 .hand-left {
  position: absolute;
  width: 150px;
  height: 250px;
  background-color: var(--body-color);
  border-radius: 100% 100% 0 40%/100% 100% 0 100%;
  box-shadow: inset 0px -35px 60px 0 var(--body-shadow-color), 40px 20px 64px 0 rgba(0, 0, 0, 0.2);
  z-index: -1;
  transform: rotate(15deg);
  top: -90px;
  left: 50px;
}

.hand-right {
  position: absolute;
  width: 150px;
  height: 250px;
  background-color: var(--right-hand-color);
  top: 61px;
  left: 254px;
  z-index: -1;
  transform: rotate(90deg);
  border-radius: 100% 100% 0 40%/100% 100% 0 100%;
  box-shadow: inset 0px -45px 25px -5px var(--white-color), 40px 20px 64px 0 rgb(0 0 0 / 20%);
}
/*
 *然后是两只大大的眼睛
 */
 .eye {
  position: absolute;
  width:35px;
  height:91px;
  background-color: var(--black-color);
  border-radius: 50px/100px;
  transform: rotate(17deg);
  box-shadow: 0 0 3px var(--black-color);
}

.eye-left{
  top:70px;
  left: 200px;
}
.eye-right {
  top:87px;
  left:275px;
}
/*
 *眼睛里的珠子
 */
 
.eye-inner {
  background-color: var(--white-color);
  width:22px;
  height:30px;
  border-radius: 70px/100px;
  box-shadow: 0 0 3px var(--white-color);
  position: absolute;
  left: 7px;
  top:4.2px;
}

.eye-inner::before{
  content: '';
  position: absolute;
  width:22px;
  height:35px;
  background-color: var(--blue-color);
  border-radius: 70px/100px;
  left: 0;
  top: 47px;
  box-shadow: 0 0 3px var(--black-color);
}

.eye-inner::after{
  content: '';
  position: absolute;
  width:16px;
  height:16px;
  background-color: var(--black-color);
  border-radius: 70px/100px;
  left: 3px;
  top:46px;
  box-shadow: 0 0 9px 8px var(--black-color);
}
/*
 *卡比有两个红红的脸蛋
 */
 .cheek {
  width:60px;
  height: 30px;
  background-color: var(--cheek-color);
  border-radius: 50%;
  position: absolute;
  transform: rotate(20deg);
  box-shadow: 0 0 3px var(--cheek-color);
}

.cheek-left {
  top: 125px;
  left: 110px;
}

.cheek-right{
  top:185px;
  left:308px;
}
/*
 *然后，我们画卡比的嘴巴
 */
 .mouth {
  width:70px;
  height: 50px;
  background-color: var(--mouth-up-color);
  border-radius: 50px 50px 150px 150px;
  transform: rotate(15deg);
  position: absolute;
  left: 195px;
  top:187px
}

.mouth:before{
  content: '';
  position: absolute;
  width: 57px;
  height:35px;
  background-color: var(--mouth-down-color);
  border-radius: 48px 50px 150px 150px;
  box-shadow: inset 1px 2px 11px 1px var(--mouth-up-color);
  top: 12px;
  left: 5px;
}
/*
 *最后，是卡比是双脚
 */
 .foot-left{
  position: absolute;
  width:150px;
  height: 232px;
  background-color: var(--foot-color);
  top: 239px;
  left: 32px;
  z-index: -1;
  transform: rotate(-7deg);
  border-radius: 50% 50% 60% 60%/40% 40% 80% 80%;
  box-shadow: inset -15px -2px 50px 4px var(--mouth-up-color);
}

.foot-right{
  position: absolute;
  width: 150px;
  height:200px;
  background-color: var(--foot-color);
  top: 219px;
  left:239px;
  z-index: 1;
  transform: rotate(53deg);
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
  box-shadow: inset 0 -2px 51px -4px var(--mouth-up-color);
}
/*
 *好啦，画完啦，星之卡比送给你！
 */
  `
export default string;