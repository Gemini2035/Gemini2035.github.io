const title = document.querySelector('.title');
// const arrows = document.querySelectorAll('.arrow');

window.addEventListener('scroll', () => { combineEvent(); });

arrows[0].addEventListener('click', () => { combineEvent(); });

title.addEventListener('click', () => { combineEvent(); });

const combineEvent = () => {
    title.classList.remove('active');
    arrows[0].style.opacity = 0;
    setTimeout(() => {arrows[0].style.display = 'none'}, 1010);
    if((focus + 1) < basicAreas.length){
        arrows[1].classList.add('active');
    } else {
        arrows[1].classList.remove('active');
    }
}