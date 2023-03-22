const param = new URLSearchParams(window.location.search);

// 设置文章概要部分

const asideContent = document.getElementById('asideContent');
asideContent.querySelector('h1').innerHTML = param.get('title');
const h = asideContent.querySelectorAll('h2');
h[0].innerHTML = '发表时间：' + param.get('pubdate');
h[1].innerHTML = '文章分类： ' + param.get('classify');