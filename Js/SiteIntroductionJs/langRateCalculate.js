// 后期通过读取json文件来动态监控代码量

const langInfo = [
    {
        langName: 'HTML',
        percentage: 42.7,
        color: '#f00'
    },
    {
        langName: 'CSS',
        percentage: 33.0,
        color: '#00f'
    },
    {
        langName: 'JavaScript',
        percentage: 24,
        color: '#ff0'
    },
    {
        langName: 'Others',
        percentage: 0.3,
        color: '#808080'
    }
];

langInfo.forEach(everyLang => {
    // 创建百分比span
    const langRateItem = document.querySelector('.lang-rate-box');
    let newSpan = document.createElement('span');
    newSpan.style.width = everyLang.percentage + '%';
    newSpan.style.backgroundColor = everyLang.color;
    langRateItem.appendChild(newSpan);
    // 创建解释div
    const explanationItem = document.querySelector('.lang-explanation-box');
    let explanationDiv = document.createElement('div');
    let circleDiv = document.createElement('div');
    let explanationSpan = document.createElement('span');
    circleDiv.style.backgroundColor = everyLang.color;
    explanationSpan.innerHTML = everyLang.langName + ' ' + everyLang.percentage + '%';
    explanationDiv.appendChild(circleDiv);
    explanationDiv.appendChild(explanationSpan);
    explanationItem.appendChild(explanationDiv);
})
