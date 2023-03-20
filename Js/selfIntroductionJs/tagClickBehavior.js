const contentTags = document.querySelectorAll('#tags-box span');

contentTags.forEach(everyTags => {
    everyTags.addEventListener('click', () => {
        window.open('https://baike.baidu.com/item/' + everyTags.innerHTML + '?fromModule=lemma_search-box', '_blank');
    })
})