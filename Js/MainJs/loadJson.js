fetch('../../HugeText/test.json')
.then(res => console.log(res.json))
.catch(err => console.log(err))