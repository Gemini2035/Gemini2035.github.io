const param = new URLSearchParams(window.location.search);
const targetUrl = '../MarkDown/' + param.get('id') + '.md';

const coreFunction = url => {
    fetch(url)
    .then(res => {
      res.text()
      .then(text => {
         const converter = new Markdown.Converter();
         const htmlContent = converter.makeHtml(text); 
         console.log(htmlContent)
         document.getElementById('markDownArea').innerHTML = htmlContent;
     })
    })
}

coreFunction(targetUrl);