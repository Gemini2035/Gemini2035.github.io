const selectors = document.querySelectorAll('.aside-menu ul li');
const verifyBox = document.querySelector('.verify-box');
const verifyItems = document.querySelectorAll('.verify-item');
const categoriesDic = ['error', 'web', 'py', 'c&cpp', 'swiftUI', 'others'];

selectors.forEach((everySelector, index) => {
    everySelector.addEventListener('click', () => {
        selectors.forEach(item => item.classList.remove('active'))
        everySelector.classList.add('active');
        if (index == 0){
            restoreStyle(index);
        } else {
            restoreStyle(index);
            setStyle(categoriesDic[index]);
        }
    })
})

const restoreStyle = (index) => {
    verifyItems.forEach(everyItem => {
        everyItem.style.display = 'block';
        if(index == 0){
            if(everyItem.classList.contains('hidden')){
                setTimeout(() => {
                    everyItem.classList.remove('hidden');
                }, 10);
            }
        } else {
            everyItem.classList.remove('hidden');
        }
    })
}

const setStyle = (letter) => {
    verifyItems.forEach(everyItem => {
        if (!everyItem.classList.contains(letter)){
            everyItem.classList.add('hidden');
            setTimeout(() => {
                everyItem.style.display = 'none';
            }, 590);
        }
    })
}

