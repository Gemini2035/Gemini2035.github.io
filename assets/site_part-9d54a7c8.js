var C=Object.defineProperty;var E=(s,t,n)=>t in s?C(s,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[t]=n;var p=(s,t,n)=>(E(s,typeof t!="symbol"?t+"":t,n),n);import{q as M,d as h,r as y,o as k,a as I,b as a,c as i,e,F as f,x as b,E as N,D as U,J as H,v as l,K as A,T as B,u as g,n as S,A as L,B as w,_ as v,m as V,y as T,I as D,C as $,H as j}from"./index-a017375d.js";class G{constructor(){p(this,"globalScrollTop",0);p(this,"languageData",[{name:"HTML",percentage:"2.4",key:0},{name:"Vue",percentage:"70.1",key:1},{name:"TypeScript",percentage:"26.8",key:2},{name:"CSS",percentage:"0.7",key:3}]);p(this,"tipsList",[{key:0,tipsEn:"The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It defines the meaning and structure of web content. It is often assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript."},{key:1,tipsEn:'Vue.js (commonly referred to as Vue; pronounced "view") is an open-source model–view–viewmodel front end JavaScript library for building user interfaces and single-page applications. It was created by Evan You, and is maintained by him and the rest of the active core team members.'},{key:2,tipsEn:"TypeScript is a free and open-source high-level programming language developed by Microsoft that adds static typing with optional type annotations to JavaScript. It is designed for the development of large applications and transpiles to JavaScript."},{key:3,tipsEn:"Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML (including XML dialects such as SVG, MathML or XHTML)."}]);p(this,"timeLineList",[{time:"March 20,2023",status:"done",content:"新建文件夹",contentEn:"Create the new folder"},{time:"May 29,2023",status:"done",content:"初版博客上线",contentEn:"Initial blog launch"},{time:"May 30,2023",status:"done",content:"第一篇博客文章发布，Css随记",contentEn:"The first blog article was published as Css Notes"},{time:"October 27,2023",status:"done",content:"项目向Vue3转移",contentEn:"Project transfer to Vue3.js"},{time:"November 15,2023",status:"dealing",content:"使用Node.js为个人博客搭建后端",contentEn:"Building a backend for personal blogs using Node.js"},{time:"November 29,2023",status:"dealing",content:"个人博客后端搭建完成",contentEn:"Personal blog backend setup completed"},{time:"November 30,2023",status:"future",content:"第二版博客上线",contentEn:"The second version of the blog was launched"},{time:"December 1,2023",status:"future",content:"第二版第一篇博客文章发布，Ts独特类型",contentEn:"The first blog article in the second edition was published titled Unique Types of Ts"},{time:"Later in 2023",status:"future",content:"丰富站点图片库，持续优化UI",contentEn:"Rich website image library, continuously optimizing UI"},{time:"2024",status:"future",content:"为站点接入OpenAi",contentEn:"Connect the site to OpenAi"}]);p(this,"buildToolList",[{imgUrl:"src/assets/site/viteLogo.svg",name:"Vite",href:"https://vitejs.dev/"},{imgUrl:"src/assets/site/vue3Logo.svg",name:"Vue3",href:"https://vuejs.org/"},{imgUrl:"src/assets/site/typeScriptLogo.svg",name:"TypeScript",href:"https://www.typescriptlang.org/"}]);p(this,"aidList",[{imgUrl:"src/assets/self/github.svg",title:"GitHub",content:"提供代码托管服务",href:"https://github.com/"},{imgUrl:"src/assets/site/gptLogo.svg",title:"ChatGPT",content:"部分代码咨询与参考",href:"https://chat.openai.com/"},{imgUrl:"src/assets/site/vscodeLogo.svg",title:"VS Code",content:"代码编辑器及相关调试(插件)",href:"https://code.visualstudio.com/"},{imgUrl:"src/assets/site/nasaLogo.svg",title:"NASA",content:"提供网站背景图片",href:"https://www.nasa.gov/"},{imgUrl:"src/assets/site/appleLogo.svg",title:"Apple",content:"提供开发硬件支持",href:"https://www.apple.com/"},{imgUrl:"src/assets/site/wikiLogo.svg",title:"维基百科",content:"提供词条解释",href:"https://www.wikipedia.org/"}]);p(this,"contributorList",[{avatar:"https://avatars.githubusercontent.com/u/76091679?v=4",nickName:"Gemini2035",percentage:"100%",href:"https://github.com/Gemini2035"}])}getGlobalScrollTop(){return this.globalScrollTop}setGlobalScrollTop(t){this.globalScrollTop=t}getLanguageData(){return this.languageData.sort((t,n)=>Number(n.percentage)-Number(t.percentage))}getTipsList(){return this.tipsList}getTimeLineList(){return this.timeLineList}getTimeLinePercentage(){const t=this.timeLineList.length;return[Math.floor(this.timeLineList.filter(n=>n.status==="done").length/t*100),Math.floor(this.timeLineList.filter(n=>n.status==="dealing").length/t*100),Math.floor(this.timeLineList.filter(n=>n.status==="future").length/t*100)]}getBuildToolList(){return this.buildToolList}getAidList(){return this.aidList}getContributorList(){return this.contributorList}getContributorNameString(){return this.contributorList.map(t=>t.nickName).join("")}}const u=M(new G),z=s=>(L("data-v-246b7ae6"),s=s(),w(),s),P={class:"percentage-container"},J={class:"bar-content"},O={class:"tips-content"},W={class:"bar-skeleton"},X={class:"bar-box"},q=["onMouseenter"],F={class:"bar-container"},K={class:"percentage"},R={class:"identify"},Y=z(()=>e("p",{class:"title"},"Language percentage 语言占比",-1)),Q=h({__name:"language_percentage",setup(s){const t=y(0);let n;const o=()=>{n=window.setInterval(()=>{t.value=(t.value+1)%u.getLanguageData().length},3e3)},d=c=>{clearInterval(n),t.value=c};return k(()=>{o()}),I(()=>{clearInterval(n)}),(c,r)=>(a(),i("div",P,[e("div",J,[e("div",O,[(a(!0),i(f,null,b(g(u).getTipsList(),_=>(a(),N(B,{key:_.tipsEn,mode:"out-in",name:"fade"},{default:U(()=>[H(e("p",null,l(_.tipsEn),513),[[A,_.key===t.value]])]),_:2},1024))),128))]),e("div",W,[e("div",X,[(a(!0),i(f,null,b(g(u).getLanguageData(),_=>(a(),i("div",{key:_.key,class:"bar-item",onMouseenter:m=>d(_.key),onMouseleave:o},[e("div",F,[e("div",{style:S({height:_.percentage+"%"}),class:"bar"},null,4),e("p",K,l(_.percentage+"%"),1)]),e("p",R,l(_.name),1)],40,q))),128))])])]),Y]))}});const Z=v(Q,[["__scopeId","data-v-246b7ae6"]]),ee=s=>(L("data-v-8892c951"),s=s(),w(),s),te={class:"timeline-box"},se=ee(()=>e("p",{class:"title"},"Time Keeper 时间管理者",-1)),ne={class:"maintain-container"},ae={class:"explanation-container"},oe=D('<div class="explanation-item" data-v-8892c951><p class="dot done" data-v-8892c951></p><p class="explanation-content" data-v-8892c951>已完成</p></div><div class="explanation-item" data-v-8892c951><p class="dot" data-v-8892c951></p><p class="explanation-content" data-v-8892c951>进行中</p></div><div class="explanation-item" data-v-8892c951><p class="dot future" data-v-8892c951></p><p class="explanation-content" data-v-8892c951>展望未来</p></div>',3),ie={class:"item-title"},ce={class:"title-content"},re={class:"item-content"},le={class:"content"},_e={class:"content-en"},de=h({__name:"timeline",setup(s){const t=y(0),n=y(null),o=u.getTimeLinePercentage(),d=V(()=>t.value<o[0]?"green":t.value<o[0]+o[1]?"black":"brown"),c=()=>{const r=n.value.clientHeight,_=n.value.scrollHeight,x=n.value.scrollTop/(_-r)*100;t.value=Math.floor(x)};return(r,_)=>(a(),i("div",te,[se,e("div",ne,[e("div",ae,[oe,e("div",{class:T(["timeline-scrollbar",g(d)])},[e("div",{class:"bar-block",style:S({willChange:"height",height:`${t.value}%`})},null,4),e("p",{style:S({willChange:"transform",transform:`translate3d(0, calc(${t.value}% - 15px), 0)`})},l(t.value)+"%",5)],2)]),e("div",{class:"timeline-content",ref_key:"timelineContent",ref:n,onScroll:c},[(a(!0),i(f,null,b(g(u).getTimeLineList(),m=>(a(),i("div",{class:"timeline-item",key:m.time},[e("div",ie,[e("p",{class:T(["dot",m.status])},null,2),e("p",ce,l(m.time),1)]),e("div",re,[e("p",le,l(m.content),1),e("p",_e,l(m.contentEn),1)])]))),128))],544)])]))}});const ue=v(de,[["__scopeId","data-v-8892c951"]]),pe=s=>(L("data-v-78bfa0f2"),s=s(),w(),s),ge={class:"structure-container"},he=pe(()=>e("p",{class:"title"},"Build Tools 构建工具",-1)),ve={class:"tool-container"},me=["href"],fe=["src","alt"],be=h({__name:"structure",setup(s){return(t,n)=>(a(),i("div",ge,[he,e("div",ve,[(a(!0),i(f,null,b(g(u).getBuildToolList(),o=>(a(),i("div",{key:o.href,class:"tool-item"},[e("a",{href:o.href,target:"_blank"},[e("img",{src:o.imgUrl,alt:o.name,title:"前往官网"},null,8,fe),e("p",null,l(o.name),1)],8,me)]))),128))])]))}});const ye=v(be,[["__scopeId","data-v-78bfa0f2"]]),Le={class:"basic-container"},we={class:"left-part"},$e={class:"time-content"},Se={class:"structure-content"},Te={class:"right-part"},ke=h({__name:"basic_info",setup(s){return(t,n)=>(a(),i("div",Le,[e("div",we,[e("div",$e,[$(Z)]),e("div",Se,[$(ye)])]),e("div",Te,[$(ue)])]))}});const Ie=v(ke,[["__scopeId","data-v-0a8688d2"]]),xe=s=>(L("data-v-e1f438f8"),s=s(),w(),s),Ce={class:"tool-container"},Ee=xe(()=>e("p",{class:"title"},"主要援助者 Main Aid",-1)),Me={class:"main-container"},Ne=["href"],Ue=["src","alt"],He={class:"item-title"},Ae={class:"item-content"},Be=h({__name:"tool_info",setup(s){const t=["left","middle","right"],n=o=>t[o%3];return(o,d)=>(a(),i("div",Ce,[Ee,e("div",Me,[(a(!0),i(f,null,b(g(u).getAidList(),(c,r)=>(a(),i("div",{class:T(["aid-item",n(r)]),key:c.href},[e("a",{href:c.href,target:"_blank"},[e("img",{src:c.imgUrl,alt:c.content,title:"前往官网"},null,8,Ue),e("p",He,l(c.title),1),e("p",Ae,l(c.content),1)],8,Ne)],2))),128))])]))}});const Ve=v(Be,[["__scopeId","data-v-e1f438f8"]]),De=s=>(L("data-v-1f7c6cce"),s=s(),w(),s),je={class:"contributor-container"},Ge=De(()=>e("p",{class:"title"},"贡献者 Contributor",-1)),ze={class:"contributor-wrapper"},Pe=["href"],Je=["src"],Oe=h({__name:"contributor_info",setup(s){const t=y(null),n=y(0),o=()=>{var d;return n.value=((d=t.value)==null?void 0:d.clientHeight)||0};return k(()=>{o(),window.addEventListener("resize",()=>o())}),I(()=>window.removeEventListener("resize",()=>o())),(d,c)=>(a(),i("div",je,[e("div",{class:"top-area",ref_key:"topArea",ref:t},[Ge,e("div",ze,[(a(!0),i(f,null,b(g(u).getContributorList(),r=>(a(),i("div",{class:"contributor-item",key:r.avatar},[e("a",{href:r.href,target:"_blank"},[e("img",{alt:"用户头像",src:r.avatar},null,8,Je),e("div",null,[e("h2",null,l(r.nickName),1),e("p",null," 代码贡献量: "+l(r.percentage),1)])],8,Pe)]))),128))])],512)]))}});const We=v(Oe,[["__scopeId","data-v-1f7c6cce"]]),Xe={class:"name-wall"},qe={class:"text"},Fe=h({__name:"name_wall",setup(s){return(t,n)=>(a(),i("div",Xe,[e("p",qe,l(Array(10).fill(g(u).getContributorNameString()).join(" ")),1)]))}});const Ke=v(Fe,[["__scopeId","data-v-e86e24d3"]]),Re=h({__name:"site_part",setup(s){const t=[{component:Ie,name:"basicInfo"},{component:Ve,name:"toolInfo"},{component:We,name:"contributorInfo"},{component:Ke,name:"nameWall"}],n=y(null);return(o,d)=>(a(),i("div",{class:"site-container",ref_key:"siteContainer",ref:n},[(a(),i(f,null,b(t,(c,r)=>$(j(c.component),{key:r,id:c.name},null,8,["id"])),64))],512))}});const Ze=v(Re,[["__scopeId","data-v-c9baf6e6"]]);export{Ze as default};
