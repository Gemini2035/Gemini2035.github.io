const param = new URLSearchParams(window.location.search);

const photo = document.getElementById('photo');
const description = document.getElementById('description');

const header = description.querySelector('h1');
const details = description.querySelector('.details');
const ps = description.querySelectorAll('footer p');

photo.setAttribute('src', param.get('img'));

header.innerHTML = param.get('name');
ps[0].innerHTML = '上传时间：' + param.get('shotDate');
ps[1].innerHTML = '图片分类：' + param.get('classify');

fetch(param.get('details'))
.then(res => {res.json()
.then(texts => {
    let structText = "";
    texts.forEach(everypha => { structText += (everypha + '<br>'); })
    details.innerHTML = structText;
})})