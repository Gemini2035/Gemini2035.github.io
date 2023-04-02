const animationLists = document.querySelectorAll('.arg-content.animation .scroll-container');

const createDiv = everyAnimation => {
    // 为每个动漫创建总的div并赋予类名
    const div =  document.createElement('div');
    div.setAttribute('class', 'scroll-item animation-and-reality');
    // 为每个动漫创建浏览图，设置图片并将其插入到总div后面
    const img = document.createElement('img');
    if(everyAnimation.img){
        url = '../Assets/PhotosAndIcons/AnimationImgs/' + everyAnimation.img
        img.setAttribute('src', url);
    } else {
        img.setAttribute('src', '../Assets/PhotosAndIcons/defaultPhoto.svg');
    }
    div.appendChild(img);
    // 创建描述div并设置类名
    const subDiv = document.createElement('div');
    subDiv.setAttribute('class', 'description');
    // 为div添加点击跳转时间
    div.addEventListener('click', () => {
        window.open(('https://zh.moegirl.org.cn/' + everyAnimation.name), '_blank');
    })
    // 创建标题和简述，设置内容后加入到subDiv中
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    h2.innerHTML = everyAnimation.name;
    p.innerHTML = everyAnimation.description;
    subDiv.appendChild(h2);
    subDiv.appendChild(p);
    // 将subDiv插入到总的div中
    div.appendChild(subDiv);
    return div;
}

fetch('../Json/ConfigJson/animationList.json')
.then(res => {res.json()
.then(animations => {
    animations.forEach(everyAnimation => {
        animationLists[1].insertBefore(createDiv(everyAnimation), animationLists[1].children[0]);
        if (everyAnimation.state == 'favor'){
            animationLists[0].insertBefore(createDiv(everyAnimation), animationLists[0].children[0]);
        }
    })
})})