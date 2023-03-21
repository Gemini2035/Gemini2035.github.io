const param = new URLSearchParams(window.location.search);
const targetUrl = '../MarkDown/' + param.get('id') + '.md';

const coreFunction = url => {
    fetch(url)
    .then(res => {
      res.text()
      .then(text => {
         const converter = new Markdown.Converter();
         const html = converter.makeHtml(text); 
         console.log(html)
         document.getElementById('markDownArea').innerHTML = html;
     })
    })
}

coreFunction(targetUrl);