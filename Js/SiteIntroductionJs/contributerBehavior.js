const contributors = document.querySelectorAll('.contributor-item');

contributors.forEach(everyContributor => {
    everyContributor.addEventListener('click', () => {
        let name = everyContributor.querySelector('div h2').innerHTML;
        window.open(('https://github.com/' + name), '_blank');
    })
})