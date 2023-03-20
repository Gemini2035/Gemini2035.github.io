// TODO: 后期加上后端后使用JSON修改

const textContent = document.querySelector('#text-content');

// const apiKey = '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'; // 替换成你的OpenAI API密钥
// const prompt = 'hello';
// const model = 'text-davinci-002'; // 替换成你要使用的GPT模型

// openai.apiKey = apiKey;

// openai.complete({
//   engine: model,
//   prompt: prompt,
//   maxTokens: 100
// }).then(response => {
//   console.log(response.choices[0].text);
// }).catch(error => {
//   console.log(error);
// });


// fetch('../../HugeText/test.json')
// .then(res => {
//     content = res.json
//     console.log(res.json())
// })
// .catch(e => {
//     console.log(content)
// })

const data = '大家好，我是Gemini2035，来自成都理工大学宜宾校区，是一名大三年级本科生。我非常热爱编程，并对前端工程师这个职业充满热情。我一直认为，一个优秀的前端工程师应该拥有深厚的技术功底和创新思维，同时也需要具备良好的沟通和团队合作能力。因此，在我的学习和实践过程中，我一直致力于提升自己的技术能力和软实力。在技术方面，我熟练掌握HTML、CSS、JavaScript等前端技术，并且了解React、Vue等前端框架的使用。我还参加了多次编程竞赛，并获得了不错的成绩。通过这些经历，我深刻认识到编程技能的重要性，并且坚信只有不断学习和实践，才能不断提升自己的水平。在软实力方面，我也积极参与各种团队活动和项目实践。我曾经担任过班级学习委员和校学生会成员，组织过多次班级活动和学生会活动，锻炼了自己的组织和协调能力。同时，在参与团队项目时，我也能够积极沟通和协作，与团队成员合作完成了多个项目。作为一个寻找暑期实习的大学生，我非常希望能够有机会加入一家优秀的公司，参与前端工程师的实践工作。我相信，通过实践，我能够更好地了解前端工程师的职业要求和工作内容，并且锻炼自己的实践能力和团队协作能力。总的来说，我是一个充满热情和求知欲的人，对于未来的前端工程师这个职业充满热情和憧憬。我期待着与大家一起工作，共同创造更好的未来。';
const tags = ['活泼', '阳光', '帅气'];

textContent.innerHTML = data;
for (const iterator of tags) {
    const tagsBox = document.querySelector('#tags-box');
    let span = document.createElement("span");
    span.innerHTML = iterator;
    tagsBox.appendChild(span);
}