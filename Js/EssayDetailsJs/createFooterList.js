const footerList = document.querySelectorAll('#footerArea ul');
const inverseDic = {
    "web": 0,
    "py": 1,
    "c&cpp": 2,
    "swiftUI": 3,
    "others": 4
};

// const categoriesDic = ['error', 'web', 'py', 'c&cpp', 'swiftUI', 'others'];

// fetch文件后生成li
fetch('../Json/ConfigJson/studyEssayList.json')
.then(res => {res.json()
.then(essays => {
    essays.forEach(everyEssay => {
        // 构建li并写入内容
        li = document.createElement('li');
        li.innerHTML = everyEssay.title;
        // 给li赋予跳转行为
        li.addEventListener('click', () => {
            const targetUrl = ('essayDetails.html?title=' + everyEssay.title
            + '&pubdate=' + everyEssay.pubdate
            + '&classify=' + everyEssay.classify
            + '&id=' + everyEssay.id)
            window.open(targetUrl, '_blank');
        });
        // 将li插入对应的分类当中
        footerList[inverseDic[everyEssay.classify]].insertBefore(li, footerList[inverseDic[everyEssay.classify]].children[0]);
    })
})})