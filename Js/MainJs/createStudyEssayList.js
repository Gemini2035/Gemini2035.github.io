// 本文件负责生成学习区笔记概要点

const verifyBox = document.querySelector('#verifyBox');
const selectors = document.querySelectorAll('.aside-menu ul li');
const categoriesDic = ['error', 'web', 'py', 'c&cpp', 'swiftUI', 'others'];

fetch('../Json/ConfigJson/studyEssayList.json')
 .then(res => res.json()
 .then(essays => {
    // 为每一篇文章创建概括图
    essays.forEach(everyEssay => {
        // 创建总div并赋予属性
        const div = document.createElement('div');
        div.setAttribute('class', ('verify-item ' + everyEssay.classify));
        // 创建图片、赋予属性并将其加入div
        const img = document.createElement('img');
        img.setAttribute('src', '../Assets/defaultImg.svg');
        div.appendChild(img);
        // 创建h1写入标题并将其加入div
        const h = document.createElement('h1');
        h.innerHTML = everyEssay.title;
        div.appendChild(h);
        // 创建子div以存放两个p元素
        const subDiv = document.createElement('div');
        // 创建两个p元素，写入文字内容并将其加入到subDiv中
        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        p1.innerHTML = '发表时间：' + everyEssay.pubdate;
        p2.innerHTML = '文章分类：' + everyEssay.classify;
        subDiv.appendChild(p1);
        subDiv.appendChild(p2);
        // 将构建好的subDiv放入div中
        div.appendChild(subDiv);
        // 为每个div设置跳转行为
        div.addEventListener('click', () => {
            const targetUrl = ('essayDetails.html?title=' + everyEssay.title
                                + '&pubdate=' + everyEssay.pubdate
                                + '&classify=' + everyEssay.classify
                                + '&id=' + everyEssay.id);
            window.open(targetUrl, '_blank');
        })
        // 将构建好的div放入box中
        // verifyBox.appendChild(div);
        verifyBox.insertBefore(div, verifyBox.children[0]);
    })

    // 设置文章分类行为
    const verifyItems = verifyBox.querySelectorAll('.verify-item');
    selectors.forEach((everySelector, index) => {
        everySelector.addEventListener('click', () => {
            selectors.forEach(item => item.classList.remove('active'))
            everySelector.classList.add('active');
            if (index == 0){
                restoreStyle(index, verifyItems);
            } else {
                restoreStyle(index, verifyItems);
                setStyle(categoriesDic[index], verifyItems);
            }
        })
    })
}))

// 优化建议，尽量想办法优化为Css样式调整

const restoreStyle = (index, verifyItems) => {
    console.log(verifyItems)
    verifyItems.forEach(everyItem => {
        everyItem.style.display = 'block';
        if(index == 0){
            if(everyItem.classList.contains('hidden')){
                setTimeout(() => {
                    everyItem.classList.remove('hidden');
                }, 10);
            }
        } else {
            everyItem.classList.remove('hidden');
        }
    })
}

const setStyle = (letter, verifyItems) => {
    verifyItems.forEach(everyItem => {
        if (!everyItem.classList.contains(letter)){
            everyItem.classList.add('hidden');
            setTimeout(() => {
                everyItem.style.display = 'none';
            }, 590);
        }
    })
}