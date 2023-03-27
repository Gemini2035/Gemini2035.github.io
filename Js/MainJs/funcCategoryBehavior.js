// 由于getElementsByTagName()返回的是HTMLCollection而不是Array，所以不能用forEach进行遍历处理
// const funces = document.querySelector('.func-category').getElementsByTagName('div');
const funces = document.querySelectorAll('.func-category div');
// let focus = 0;
// const basicAreas = document.querySelectorAll('.basicArea');

funces.forEach((everyFunc, index) => {
    everyFunc.addEventListener('click', () => {
        switch(index){
            case 0:
                window.location.href = 'selfIntroduction.html';
                break;
            case 1:
                window.location.href = 'siteIntroduction.html';
                break;
            case 2:
                focus = 1;
                if(cd){ scrollBehavior(); }
                break;
            case 3:
                focus = 2;
                if(cd){ scrollBehavior(); }
                break;
        }
    })
})
