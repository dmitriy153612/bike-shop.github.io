import{d as p,f as b,o as r,c,a as t,F as f,j as g,g as i,w as d,t as u,I as m,_,O as y,k as v,z as h,i as V,h as k,l as N}from"./index-DtM1jsSZ.js";import{A as B}from"./AppTitle-CV5mu-GZ.js";import{f as x}from"./AppPrice-BY-B-5cy.js";const A={class:"breadcrumbs"},C={class:"breadcrumbs__list"},$={class:"breadcrumbs__link-text"},S=p({__name:"AppBreadcrumbs",props:{breadcrumbs:{type:Array,required:!0}},setup(e){return(a,s)=>{const o=b("router-link");return r(),c("nav",A,[t("ul",C,[(r(!0),c(f,null,g(e.breadcrumbs,(n,l)=>(r(),c("li",{class:"breadcrumbs__item",key:l},[i(o,{to:{name:n.pageName,params:n.params,query:n.query},class:m([{"breadcrumbs__link--last":l+1===e.breadcrumbs.length},"breadcrumbs__link"]),tabindex:l+1===e.breadcrumbs.length?-1:0},{default:d(()=>[t("span",$,u(n.linkName),1),s[0]||(s[0]=t("svg",{class:"breadcrumbs__svg"},[t("use",{"xlink:href":"#breadcrumbs"})],-1))]),_:2},1032,["to","class","tabindex"])]))),128))])])}}}),q=_(S,[["__scopeId","data-v-39ad5731"]]),O={class:"page"},I={class:"page__main"},D=p({__name:"PageStructure",props:{title:String,breadcrumbs:{type:Array,required:!0}},setup(e){return(a,s)=>(r(),c("div",O,[i(y,{class:"page__top-container"},{default:d(()=>[i(q,{class:"page__breadcrumbs",breadcrumbs:e.breadcrumbs},null,8,["breadcrumbs"]),e.title?(r(),h(B,{key:0,class:"page__title"},{default:d(()=>[V(u(e.title),1)]),_:1})):k("",!0)]),_:1}),t("main",I,[v(a.$slots,"default",{},void 0,!0)])]))}}),E=_(D,[["__scopeId","data-v-7223d8a0"]]),P={class:"option-descr"},w={class:"option-descr__name"},z=p({__name:"OptionDescr",props:{optionName:{type:String,required:!0},optionValue:{type:[String,Number],required:!0},currency:{type:Boolean,default:!1},negative:{type:Boolean,default:!1},redValue:{type:Boolean,default:!1}},setup(e){const a=e,s=N(()=>{if(typeof Number(a.optionValue)=="number"&&a.currency){const o=x(a.optionValue);return a.negative?`- ${o}`:o}else return typeof a.optionValue=="string"?a.optionValue.charAt(0).toUpperCase()+a.optionValue.slice(1):a.optionValue});return(o,n)=>(r(),c("div",P,[t("span",w,u(e.optionName)+": ",1),t("span",{class:m(["option-descr__value",{"option-descr__value--red":e.redValue}])},u(s.value),3)]))}}),L=_(z,[["__scopeId","data-v-39de81d2"]]);export{L as O,E as P};