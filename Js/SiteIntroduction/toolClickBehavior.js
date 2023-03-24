const clickLink = document.querySelectorAll('.tool-item');

clickLink.forEach(everyLink => {
    let h3 = everyLink.querySelector('div h3');
    everyLink.querySelector('img').addEventListener('click', () => {
        window.open(h3.innerHTML, '_blank');
    });
    h3.addEventListener('click', () => {
        window.open(h3.innerHTML, '_blank');
    })
})
