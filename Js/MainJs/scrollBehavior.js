const basicAreas = document.querySelectorAll('.basicArea');
const arrows = document.querySelectorAll('.arrow');

let viewHeight = document.body.clientHeight / 3;
let position1 = 0;
let position2 = 0;
let timer = null; // 定时器
let down = true;
let cd = true;

let focus = 0;


// scroll监听
document.onscroll = () => {
    clearTimeout(timer);
    timer = setTimeout(isScrollEnd, 500);
    position1 = document.documentElement.scrollTop || document.body.scrollTop;
    down = position1 > position2;
};
// resize监听
window.onresize = () => {
    viewHeight = document.body.clientHeight / 3
    if(cd){ scrollBehavior(); }
}

arrows[1].addEventListener('click', () => {
    focus = (focus + 1) < basicAreas.length? (focus + 1) : (basicAreas.length - 1);
    if(cd){ scrollBehavior(); }
})

const isScrollEnd = () => {
  position2 = document.documentElement.scrollTop || document.body.scrollTop;
  if(position2 == position1){
    let index = Math.floor(position2 / viewHeight);
    if(cd){
        if(down){
            focus = index>1? 2 : (index + 1);
            scrollBehavior();
        } else {
            focus = index;
            scrollBehavior();
        }
    }
  }
}

const scrollBehavior = () => {
    cd = false;
    basicAreas[focus].scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => { cd = true; }, 2000);
}

