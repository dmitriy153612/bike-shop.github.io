import{d as s,o as r,c,a as n,t,P as a,h as i,I as d,_ as p}from"./index-DtM1jsSZ.js";function o(e){return Number(e).toLocaleString("ru-RU",{style:"currency",currency:"RUB",maximumFractionDigits:0})}const l={class:"price__current-price"},u={key:0,class:"price__old-price"},m=s({__name:"AppPrice",props:{price:{type:Number,required:!0},oldPrice:{type:Number,default:null},orderItemType:{type:Boolean,default:!1}},setup(e){return(_,f)=>(r(),c("div",{class:d(["price",{"price--order":e.orderItemType}])},[n("span",l,t(a(o)(e.price)),1),e.oldPrice?(r(),c("span",u,t(a(o)(e.oldPrice)),1)):i("",!0)],2))}}),P=p(m,[["__scopeId","data-v-bded46dd"]]);export{P as A,o as f};
