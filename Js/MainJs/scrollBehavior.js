const basicAreas = document.querySelectorAll('.basicArea');
const arrows = document.querySelectorAll('.arrow');

let viewHeight = document.body.clientHeight / 3;
let position1 = 0;
let position2 = 0;
let timer = null; // 定时器
let down = true;

let focus = 0;

// scroll监听
document.onscroll = function() {
    clearTimeout(timer);
    timer = setTimeout(isScrollEnd, 50);
    position1 = document.documentElement.scrollTop || document.body.scrollTop;
    down = position1 > position2
}

// 初始化监听
// window.onload = () => {
//     if(!(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement)){
//         alert("在全屏模式下体验最佳！");
//     }
// }

// resize监听
window.onresize = () => {
    viewHeight = document.body.clientHeight / 3
    basicAreas[focus].scrollIntoView({ behavior: 'smooth' });
}

arrows[1].addEventListener('click', () => {
    focus = (focus + 1) < basicAreas.length? (focus + 1) : (basicAreas.length - 1);
    basicAreas[focus].scrollIntoView( { behavior: 'smooth' } );
})

const isScrollEnd = () => {
  position2 = document.documentElement.scrollTop || document.body.scrollTop;
  if(position2 == position1){
    let index = Math.floor(position2 / viewHeight);
    if((position2 % viewHeight) > (viewHeight * 0.2)){
        if(down){
            focus += 1;
            basicAreas[focus].scrollIntoView({ behavior: 'smooth' });
        } else {
            focus = index
            basicAreas[focus].scrollIntoView({ behavior: 'smooth' });
        }
    } else {
        focus = index
        basicAreas[focus].scrollIntoView({ behavior: 'smooth'});
    }
  }
}

