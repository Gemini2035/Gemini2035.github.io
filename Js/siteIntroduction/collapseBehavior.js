const collapseButtons = document.querySelectorAll('.content-item.content-item>h1>img');
// const backButton = document.querySelector('.back-to');
let clickCount = [1, 1, 1, 1];

collapseButtons.forEach((everyButton, index) => {
    everyButton.addEventListener('click', () => {
        if(clickCount[index] == 0){
            const content = everyButton.parentNode.parentNode;
            content.classList.add('hidden');
            everyButton.classList.remove('rotate')
        } else {
            const content = everyButton.parentNode.parentNode;
            content.classList.remove('hidden');
            everyButton.classList.add('rotate');
        }
        clickCount[index] = (clickCount[index] + 1) % 2;
        backButton.classList.add('desalination');
    })
})