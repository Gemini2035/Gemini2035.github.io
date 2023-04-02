const gameLists = document.querySelectorAll('.arg-content.game .scroll-container');

fetch('../Json/ConfigJson/gameList.json')
.then(res => { res.json()
.then(games => {
    games.forEach(everyGame => {
        // 为每个游戏创建总div，赋予类名
        const div = document.createElement('div');
        div.setAttribute('class', 'scroll-item game');
        // 为每个游戏div创建监听事件
        div.addEventListener('click', () => {
            url = (everyGame['webUrl']? everyGame['webUrl'] : ('https://zh.moegirl.org.cn/index.php?title=' + everyGame['name']));
            window.open(url, '_blank');
        })
        // 为每个游戏创建img并设置icon，后将其插入div中
        const img = document.createElement('img');
        if(everyGame.img){
            url = '../Assets/PhotosAndIcons/GameIcons/' + everyGame.img
            img.setAttribute('src', url);
        } else {
            img.setAttribute('src', '../Assets/PhotosAndIcons/defaultPhoto.svg');
        }
        div.appendChild(img)
        // 为每个游戏创建描述div，并赋予类名
        const subDiv = document.createElement('div');
        subDiv.setAttribute('class', 'description');
        // 为每个游戏创建标题和一句话描述、分割线， 并将其插入subDiv
        const h2 = document.createElement('h2');
        const hr = document.createElement('hr');
        const h3 = document.createElement('h3');
        h2.innerHTML = everyGame.name;
        // 如果游戏标题过长，使用小号字体
        if((everyGame.name).length > 5){ h2.classList.add('smaller'); }
        hr.setAttribute('width', '100%');
        h3.innerHTML = everyGame.description;
        subDiv.appendChild(h2);
        subDiv.appendChild(hr);
        subDiv.appendChild(h3);
        // 将subDiv插入div中
        div.appendChild(subDiv);
        // 根据分类将其插入对应gameLists中
        if(everyGame.classify == 'mobile'){
            gameLists[0].insertBefore(div, gameLists[0].children[0]);
        } else if(everyGame.classify == 'pc'){
            gameLists[1].insertBefore(div, gameLists[1].children[0]);
        } else if(everyGame.classify == 'master'){
            gameLists[2].insertBefore(div, gameLists[2].children[0]);
        }
    })
})})