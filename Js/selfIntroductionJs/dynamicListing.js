const contents = document.querySelectorAll('.content-item');

contents.forEach(everyContent => {
    const listing = document.querySelector('.listing');
    let a = document.createElement("a");
    a.setAttribute('href', ('#' + everyContent.id));
    a.innerHTML = (everyContent.querySelector('h2').innerHTML);
    
    listing.appendChild(a);
})

