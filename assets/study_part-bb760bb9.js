import{d as T,b as l,c as d,e as s,F as C,x as L,y as N,u as r,v as x,L as H,A as P,B as A,_ as J,r as m,w as Q,o as E,a as R,J as D,M as V,K as B,N as F,m as b,C as S,D as q,E as z,O as U,P as G,Q as K}from"./index-a017375d.js";import{S as e,C as $,N as j}from"./click_class-9131577a.js";import{E as W,T as X}from"./toTop-0b2a61fe.js";import"./selfIntroController-5df0a3e1.js";const O=c=>(P("data-v-30814a2e"),c=c(),A(),c),Y=["onClick"],Z={class:"title-content"},ee=["clickInfo"],te=O(()=>s("div",{class:"btn-left btn-item"},null,-1)),se=O(()=>s("div",{class:"btn-right btn-item"},null,-1)),ne=[te,se],oe=O(()=>s("p",{class:"title-text"},"文章分类",-1)),ce={class:"menu-content"},ae=["clickInfo"],ie=T({__name:"aside_navi",setup(c){const v=(_,a)=>new $(_,a).stringify(),f=(_,a)=>new $(_,a).stringify(),h=_=>{for(let a of _.composedPath())try{const i=a.getAttribute("clickInfo");if(!i)continue;const y=JSON.parse(i);y.clickType==="close"?e.setSideNaviState(!1):y.clickType==="classify"&&(e.setIsLoading(!1),e.setQueryData(0),e.setMenuNum(y.clickParm));break}catch{continue}};return(_,a)=>(l(),d("div",{class:N(["aside-navi",{hide:!r(e).getSideNaviState()}]),onClick:a[0]||(a[0]=i=>r(e).setSideNaviState(!1))},[s("div",{class:"maintain-container",onClick:H(h,["stop"])},[s("div",Z,[s("div",{class:"close-btn",clickInfo:v("close")},ne,8,ee),oe]),s("div",ce,[(l(!0),d(C,null,L(r(e).getMenuData(),i=>(l(),d("div",{key:i.key,class:N(["menu-item",{active:r(e).getMenuNum()===i.key}]),clickInfo:f("classify",i.key)},[s("p",null,x(i.title),1),s("p",null,x(i.titleEn),1)],10,ae))),128))])],8,Y)],2))}});const le=J(ie,[["__scopeId","data-v-30814a2e"]]),M=c=>(P("data-v-0b7951d9"),c=c(),A(),c),re=M(()=>s("div",{class:"search-icon"},null,-1)),ue=M(()=>s("p",{class:"title-text"},"搜索",-1)),de=[re,ue],_e={class:"input-content"},pe=M(()=>s("button",{class:"input-btn"},"开始",-1)),fe=["clickInfo"],he=M(()=>s("div",{class:"arrow"},[s("div",{class:"horizontal"}),s("div",{class:"left-arrow"})],-1)),ve={class:"content"},ke={key:1,class:"empty"},ye=T({__name:"search_part",setup(c){const v=()=>{e.getSearchState()||e.setSearchState(!0)},f=m(""),h=m(null),_=()=>{window.setTimeout(()=>{var n;return(n=h.value)==null?void 0:n.focus()},10)},a=()=>{e.setSearchResult(f.value)};Q(()=>f.value,()=>a());const i=()=>{var n;return(n=h.value)==null?void 0:n.blur()},y=(n,u)=>new $(n,u).stringify(),I=F(),g=n=>{for(let u of n.composedPath())try{const t=u.getAttribute("clickInfo");if(!t)continue;const o=JSON.parse(t);o.clickType==="detail"&&I.push({name:"essayDetail",query:JSON.parse(o.clickParm)});break}catch{continue}},w=n=>{if(!e.getSearchState())return;const u=n.code;u==="Slash"?_():u==="Enter"&&i()};return E(()=>{window.addEventListener("keydown",w,!1)}),R(()=>{window.removeEventListener("keydown",w,!1)}),(n,u)=>(l(),d("div",{class:N(["search-container",{close:!r(e).getSearchState(),hidden:r(j).getNaviState()}])},[s("div",{class:"search-title",onClick:v},de),s("div",_e,[D(s("input",{class:"search-input",ref_key:"input",ref:h,"onUpdate:modelValue":u[0]||(u[0]=t=>f.value=t)},null,512),[[V,f.value]]),pe]),s("div",{class:"search-answer",onClick:g},[r(e).getSearchResult().length?(l(),d(C,{key:0},[(l(!0),d(C,null,L(r(e).getSearchResult(),(t,o)=>(l(),d("div",{key:o,class:"result-item",clickInfo:y("detail",JSON.stringify(t))},[he,s("p",ve,x(t.title),1)],8,fe))),128)),D(s("p",{class:"show-more",onClick:a}," 换一批 ",512),[[B,r(e).getShowMoreResult()]])],64)):(l(),d("p",ke,"暂无更多"))])],2))}});const ge=J(ye,[["__scopeId","data-v-0b7951d9"]]),me=c=>(P("data-v-41de4c8b"),c=c(),A(),c),Se=["clickInfo"],Ie={class:"is-loading"},we={key:0,class:"no-more"},be=me(()=>s("span",null,"没有更多了",-1)),Ce=["clickInfo"],Ne=T({__name:"article_part",setup(c){const v=m();E(async()=>v.value=await e.getPassageMenu());const f=b(()=>{var o;const t=e.getMenuNum();return t===-1?v.value:((o=v.value)==null?void 0:o.filter(p=>p.classify===t))||[]}),h=m(null),_=b(()=>e.getQueryData()),a=b(()=>{var t;return(t=f.value)==null?void 0:t.slice(0,(_.value.page+1)*_.value.size)}),i=b(()=>{var t,o;return((t=a.value)==null?void 0:t.length)===((o=f.value)==null?void 0:o.length)}),y=()=>{e.setIsLoading(!0),window.setTimeout(()=>{e.setQueryData(),e.setIsLoading(!1)},600),n.value=!0},I=t=>{const o=document.body.clientHeight||document.documentElement.clientHeight,p=h.value.scrollHeight||1;if(t.target.scrollTop+o>p-10){if(e.getIsLoading()||i.value)return;y()}};E(()=>{window.addEventListener("scroll",I,!0)}),R(()=>{window.removeEventListener("scroll",I,!0)});const g=(t,o)=>new $(t,o).stringify(),w=t=>{for(let o of t.composedPath())try{const p=o.getAttribute("clickInfo");if(!p)continue;const k=JSON.parse(p);k.clickType==="close"?e.setSearchState(!1):k.clickType==="detail"?K.push({name:"essayDetail",query:JSON.parse(k.clickParm)}):k.clickType==="eclipse"&&(e.setQueryData(0),n.value=!1,u());break}catch{continue}},n=m(!1),u=()=>{var t;(t=h.value)==null||t.scrollIntoView({behavior:"smooth"}),n.value=!1};return(t,o)=>(l(),d("div",{class:N(["article-container",{little:r(e).getSearchState()}]),onClick:w,clickInfo:g("close"),ref_key:"ArticleContainerRef",ref:h},[S(U,{name:"list-animate"},{default:q(()=>[(l(!0),d(C,null,L(r(a),(p,k)=>(l(),z(W,{key:k,clickInfo:g("detail",JSON.stringify(p)),index:k,title:p.title,titleEn:p.titleEn,pubdate:p.pubdate},null,8,["clickInfo","index","title","titleEn","pubdate"]))),128))]),_:1}),D(s("div",Ie,"加载中......",512),[[B,r(e).getIsLoading()]]),r(i)?(l(),d("div",we,[be,s("span",{class:"eclipse",clickInfo:g("eclipse")},"收起",8,Ce)])):G("",!0),S(X,{show:n.value,onClick:u},null,8,["show"])],10,Se))}});const $e=J(Ne,[["__scopeId","data-v-41de4c8b"]]),Te={class:"study-container"},Le=T({__name:"study_part",setup(c){return(v,f)=>(l(),d("div",Te,[S(le),S(ge),S($e)]))}});export{Le as default};
