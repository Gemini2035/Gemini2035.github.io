const gameLists = document.querySelectorAll('.arg-content.game .scroll-container');

fetch('../Json/ConfigJson/gameList.json')
.then(res => { res.json()
.then(games => {
    games.forEach(everyGame => {
        // 为每个游戏创建总div，赋予类名
        const div = document.createElement('div');
        div.setAttribute('class', 'scroll-item game');
        // 为每个游戏创建img并设置icon，后将其插入div中
        const img = document.createElement('img');
        if(everyGame.img){
            img.setAttribute('src', everyGame.img);
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
        hr.setAttribute('width', '100%');
        h3.innerHTML = everyGame.description;
        subDiv.appendChild(h2);
        subDiv.appendChild(hr);
        subDiv.appendChild(h3);
        // 将subDiv插入div中
        div.appendChild(subDiv);
        // 根据分类将其插入对应gameLists中
        if(everyGame.classify == 'mobile'){
            gameLists[0].appendChild(div);
        } else if(everyGame.classify == 'pc'){
            gameLists[1].appendChild(div);
        } else if(everyGame.classify == 'master'){
            gameLists[2].appendChild(div);
        }
    })
})})