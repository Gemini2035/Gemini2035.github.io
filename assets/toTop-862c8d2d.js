import{d,c as n,v as a,P as _,e as t,b as o,_ as i,R as r,E as u,D as h,T as v,u as m,A as f,B as y}from"./index-99ddde66.js";const x={class:"menu-item"},b={key:0,class:"number"},T={key:1,class:"divider"},k={class:"title"},B={class:"title-en"},E={class:"date"},I=d({__name:"essay_info",props:{index:null,title:null,titleEn:null,pubdate:null},setup(s){const e=s;return(c,l)=>(o(),n("div",x,[e.index!==void 0?(o(),n("p",b,"Passage "+a(e.index+1),1)):_("",!0),e.index!==void 0?(o(),n("div",T)):_("",!0),t("p",k,a(e.title),1),t("p",B,a(e.titleEn),1),t("p",E,a(e.pubdate),1)]))}});const P=i(I,[["__scopeId","data-v-3724f52a"]]),p=s=>(f("data-v-acd71b00"),s=s(),y(),s),$={key:0,class:"to-top"},g=p(()=>t("div",{class:"top"},null,-1)),w=p(()=>t("p",null,"Top",-1)),S=[g,w],C=d({__name:"toTop",props:{show:{type:Boolean}},setup(s){const e=s,{show:c}=r(e);return(l,D)=>(o(),u(v,{name:"top-button"},{default:h(()=>[m(c)?(o(),n("div",$,S)):_("",!0)]),_:1}))}});const R=i(C,[["__scopeId","data-v-acd71b00"]]);export{P as E,R as T};