const img = document.getElementById('photo');

img.addEventListener('click', () => {
    const pc = img.parentElement;
    if(pc.classList.contains('focus')){
        pc.classList.remove('focus');
    } else {
        pc.classList.add('focus');
    }
})