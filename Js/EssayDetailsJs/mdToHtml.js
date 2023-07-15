// const param = new URLSearchParams(window.location.search);
const targetUrl = '../MarkDown/' + param.get('id') + '.md';

const coreFunction = url => {
    fetch(url)
    .then(res => {
      res.text()
      .then(text => {
        const htmlContent = marked.parse(text); 
         console.log(htmlContent)
         document.getElementById('markdownArea').innerHTML = htmlContent;
     })
    })
    .catch(() => {
        document.getElementById('markdownArea').innerHTML = '啊啦～文章内容获取失败了！';
    })
}

coreFunction(targetUrl);