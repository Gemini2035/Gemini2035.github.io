import{S as o}from"./selfIntroController-54be88d4.js";import{d as p,b as s,c as n,e as t,F as i,x as _,y as h,u as l,v as d,_ as f,I,A as y,B as x,m as C,C as k,H as $}from"./index-820cf90b.js";const L={class:"info-content"},S={class:"info-list"},V={class:"title-text"},w={class:"titleEn-text"},B={class:"content-text"},T={class:"img-container"},M=["href"],E=["src"],A=p({__name:"info_content",setup(c){return(a,r)=>(s(),n("div",L,[t("div",S,[(s(!0),n(i,null,_(l(o).getInfoList(),e=>(s(),n("div",{class:"info-item",key:e.key},[t("div",{class:h(["content-box",{small:e.key+1===l(o).getInfoList().length}])},[t("p",V,d(e.title),1),t("p",w,d(e.titleEn),1),t("p",B,d(e.content),1)],2)]))),128))]),t("div",T,[(s(!0),n(i,null,_(l(o).getInfoImgList(),e=>(s(),n("a",{key:e.href,href:e.href,target:"_blank"},[t("img",{src:e.imgUrl,alt:"placeholder img",title:"显示源网站"},null,8,E)],8,M))),128))])]))}});const N=f(A,[["__scopeId","data-v-ef17c678"]]),R=""+new URL("contactImg-2f512436.jpg",import.meta.url).href,u=c=>(y("data-v-d7bd3fb8"),c=c(),x(),c),j={class:"contact-content"},D=u(()=>t("div",{class:"img-container"},[t("a",{href:"https://apod.nasa.gov/apod/ap230910.html",target:"_blank"},[t("img",{src:R,alt:"placehold img",title:"显示源地址"})])],-1)),F={class:"maintain-container"},U=u(()=>t("div",{class:"title-content"},[t("p",null,"联系我"),t("p",null,"Contact With ME"),t("p")],-1)),z={class:"contact-list"},H=["href"],W={class:"icon-container"},q=["src","title"],G=I('<div class="self-intro" data-v-d7bd3fb8><p class="divider" data-v-d7bd3fb8></p><p class="title" data-v-d7bd3fb8>我的博客 My Blog</p><p class="intro-content" data-v-d7bd3fb8>旨在展示自己、记录个人学习历程、同时展示博主的设计感</p><p class="intro-content-en" data-v-d7bd3fb8>Intended to showcase oneself, document personal learning journey, and showcase the blogger&#39;s sense of design at the same time</p><p class="notice" data-v-d7bd3fb8>All Rights Reserved. All Lefts Too.</p><p class="time-info" data-v-d7bd3fb8>© 2023 Blog of Carloss2035</p></div>',1),J=p({__name:"contact_content",setup(c){return(a,r)=>(s(),n("div",j,[D,t("div",F,[U,t("div",z,[(s(!0),n(i,null,_(l(o).getContactList(),e=>(s(),n("div",{key:e.icon,class:"list-item"},[t("a",{href:e.href,target:"_blank"},[t("div",W,[t("img",{src:e.icon,alt:"图标加载错误",class:"icon",title:e.title},null,8,q)])],8,H)]))),128))]),G])]))}});const K=f(J,[["__scopeId","data-v-d7bd3fb8"]]),O={class:"content-box"},P=p({__name:"self_part",setup(c){let a=!1;const r=C(()=>o.getTitleIsVertical()?"more-content":""),e=()=>{a||o.setTitleIsVertical(!0)},v=()=>{o.getTitleIsVertical()&&(a=!0,o.setTitleIsVertical(!1),window.setTimeout(()=>a=!1,2e3))},m=[N,K];return(Q,X)=>(s(),n("div",{class:h(["self-container",l(r)])},[t("div",{class:"title-box",onMouseover:e},[t("p",{class:"title",onClick:v},"Carloss")],32),t("div",O,[(s(),n(i,null,_(m,(g,b)=>k($(g),{key:b})),64))])],2))}});const tt=f(P,[["__scopeId","data-v-9c7fb7b2"]]);export{tt as default};
