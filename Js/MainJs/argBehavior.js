const argItems = document.querySelectorAll('.arg-item');
const styleBox = [];
const placeholder = document.querySelector('.placeholder');
const textChooserContent = document.querySelectorAll('.text-chooser p');
const textChooser = document.querySelector('.text-chooser');

argItems.forEach((item, index) => {
    // 初始样式
    let offset = (95 - index * 5);
    let beforeStyle = 'translateX(-' + offset + '%)';
    styleBox[index] = beforeStyle;
    item.style.transform = beforeStyle;
    item.style.zIndex = 4 - index;
    
    item.addEventListener('click', () => {
        argItems.forEach((everyItem, i) => {
            everyItem.style.transform = styleBox[i];
            everyItem.classList.add('aside');
        })
        item.style.transform = 'translateX(18%)';
        item.classList.remove('aside');
        textChooser.style.opacity = '0';
    })
})

placeholder.addEventListener('click', () => {
    argItems.forEach((everyItem, i) => {
        everyItem.style.transform = styleBox[i];
        everyItem.classList.add('aside');
    })
    textChooser.style.opacity = '1';
})

textChooserContent.forEach((everyContent, index) => {
    everyContent.addEventListener('click', () => {
        index = Math.floor(index / 2);
        textChooser.style.opacity = '0';
        argItems[index].style.transform = 'translateX(18%)';
        argItems[index].classList.remove('aside');
    })
})