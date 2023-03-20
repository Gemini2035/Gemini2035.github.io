const aHrefs = document.querySelectorAll('.tool-item a');

aHrefs.forEach(everyHref => {
    everyHref.addEventListener('click', () => {
        window.open(everyHref.innerHTML, '_blank');
    })
})