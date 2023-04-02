const realityLists = document.querySelectorAll('.arg-content.reality .scroll-container');

fetch('../Json/ConfigJson/realityList.json')
.then(res => { res.json()
.then(photos => {
    photos.forEach(everyPhoto => {
        // 为每个动漫创建总的div并赋予类名
        const div =  document.createElement('div');
        div.setAttribute('class', 'scroll-item animation-and-reality');
        // 为每个动漫创建浏览图，设置图片并将其插入到总div后面
        const img = document.createElement('img');
        if(everyPhoto.img){
            url = '../Assets/PhotosAndIcons/Photos/' + everyPhoto.img
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
            const url = ('photoView.html?name=' + everyPhoto.name +
                        '&img=' + (everyPhoto.img? everyPhoto.img : '../Assets/PhotosAndIcons/defaultPhoto.svg') +
                        '&details=' + everyPhoto.details +
                        '&shotDate=' + everyPhoto.shotDate +
                        '&classify=' + everyPhoto.classify);
            window.open(url, '_blank');
        })
        // 创建标题和简述，设置内容后加入到subDiv中
        const h2 = document.createElement('h2');
        const p = document.createElement('p');
        h2.innerHTML = everyPhoto.name;
        p.innerHTML = everyPhoto.breif;
        subDiv.appendChild(h2);
        subDiv.appendChild(p);
        // 将subDiv插入到总的div中
        div.appendChild(subDiv);
        // 根据不同的分类插入到不同的realityLists中
        if(everyPhoto.classify == 'school'){
            realityLists[0].insertBefore(div, realityLists[0].childern[0]);
        } else if(everyPhoto.classify == 'faraway'){
            realityLists[1].insertBefore(div, realityLists[1].children[0]);
        }
    })
})})