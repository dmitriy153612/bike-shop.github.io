import{d as q,r as y,y as V,o,c as b,a as s,t as L,z as p,h as g,_ as z,u as T,l as v,f as ee,g as u,w as _,a3 as te,T as G,b as ae,P as F,D as re,a4 as ne,F as x,j as oe,B as le,Q as ce,Z as M,$,O as ue}from"./index-DtM1jsSZ.js";import{O,P as se}from"./OptionDescr-BGm6GqG_.js";import{A as U}from"./AppCheckbox-Bs3yFKsy.js";import{P as ie,C as de}from"./CartOrderForm-CPJMJMLj.js";import{A as me}from"./AppPrice-BY-B-5cy.js";import"./AppTitle-CV5mu-GZ.js";const pe={class:"counter"},fe=["aria-valuenow","aria-label"],ve=q({__name:"AppCounter",props:{amount:{type:Number,required:!0},priceForOne:{type:Number,required:!0}},emits:["amount"],setup(e,{emit:h}){const r=h,n=y(e.amount);function d(){n.value+=1}function C(){n.value<=1||(n.value-=1)}return V(()=>n.value,l=>{r("amount",l)}),(l,c)=>(o(),b("div",pe,[s("button",{class:"counter__btn","aria-label":"уменьшить количество товара",onClick:C},c[0]||(c[0]=[s("span",{class:"counter__symbol"},null,-1)])),s("div",{class:"counter__amount-screen",role:"spinbutton","aria-valuemin":1,"aria-valuenow":n.value,"aria-valuemax":99,"aria-label":`количество товара ${n.value}`},L(e.amount),9,fe),s("button",{class:"counter__btn counter__btn--plus","aria-label":"увеличить количество товара",onClick:d},c[1]||(c[1]=[s("span",{class:"counter__symbol"},null,-1),s("span",{class:"counter__symbol"},null,-1)])),e.amount>1?(o(),p(ie,{key:0,class:"counter__price-for-one","price-for-one":e.priceForOne},null,8,["price-for-one"])):g("",!0)]))}}),_e=z(ve,[["__scopeId","data-v-411a8faa"]]);function E(e,h=100){let r;return function(...i){clearTimeout(r),r=setTimeout(()=>{e(...i)},h)}}const ge={class:"cart-product order"},Ce=["src","alt"],he={class:"cart-product__title"},Ie={class:"cart-product__attrs"},ye=q({__name:"CartProduct",props:{modelValue:{type:Boolean,required:!0},productCartId:{type:String,required:!0},productId:{type:String,required:!0},sizeId:{type:String,required:!0},pictureSrc:{type:String,required:!0},title:{type:String,required:!0},colorName:{type:String,required:!0},sizeName:{type:String,required:!0},price:{type:Number,required:!0},priceForOne:{type:Number,required:!0},amount:{type:Number,required:!0},oldPrice:{type:Number,default:null},priceDifference:{type:Number,default:null},orderType:{type:Boolean,default:!1},selected:{type:Boolean,required:!0}},emits:["update:modelValue"],setup(e,{emit:h}){const r=h,i=e,n=T(),d=y(!1),C=v({get:()=>i.modelValue,set:f=>r("update:modelValue",f)}),l=E(m,250);function c(f){d.value||(n.updateCartItemAmount(i.productCartId,f),l(f))}async function m(){try{n.updateIsCartItemAmountChanging(1),i.selected&&n.updateIsSelectedCartItemAmountChanging(1),d.value=!0,await n.fetchChangeCartItemAmount()}catch(f){console.error(f)}finally{d.value=!1,i.selected&&n.updateIsSelectedCartItemAmountChanging(-1),n.updateIsCartItemAmountChanging(-1)}}return(f,S)=>{const k=ee("router-link");return o(),b("div",ge,[u(U,{modelValue:C.value,"onUpdate:modelValue":S[0]||(S[0]=P=>C.value=P),class:"cart-product__checkbox",value:e.productCartId},null,8,["modelValue","value"]),u(k,{class:"cart-product__link",to:{name:"product",params:{id:e.productId},query:{sizeId:e.sizeId}}},{default:_(()=>[s("img",{class:"cart-product__img",loading:"lazy",src:e.pictureSrc,alt:e.title},null,8,Ce)]),_:1},8,["to"]),s("h2",he,L(e.title),1),s("div",Ie,[u(O,{"option-name":"Размер","option-value":e.sizeName},null,8,["option-value"]),u(O,{"option-name":"Цвет","option-value":e.colorName},null,8,["option-value"])]),u(_e,{class:"cart-product__counter","price-for-one":e.priceForOne,amount:e.amount,onAmount:c},null,8,["price-for-one","amount"]),u(me,{class:"cart-product__price",price:e.price,"old-price":e.oldPrice},null,8,["price","old-price"]),e.priceDifference?(o(),p(O,{key:0,class:"cart-product__discount","option-name":"Скидка",currency:!0,negative:!0,"red-value":!0,"option-value":e.priceDifference},null,8,["option-value"])):g("",!0),u(G,{name:"appear"},{default:_(()=>[d.value?(o(),p(te,{key:0,class:"cart-product__spinner",type:"card"})):g("",!0)]),_:1})])}}}),be=z(ye,[["__scopeId","data-v-7d8e7c1e"]]),Se={class:"cart-page"},ke={class:"cart-page__sec"},Pe={key:0,class:"cart-page__message"},Ae={class:"cart-page__selection"},Ne={class:"cart-page__right"},Oe=q({__name:"CartPage",setup(e){const h=y([{linkName:"Каталог",pageName:"catalog"},{linkName:"Корзина",pageName:"cart"}]),r=T(),i=ae(),n=y(!0),d=y(!1),C=y(!1),l=y([]),c=v(()=>r.cartList),m=v(()=>r.cartConfig),f=v(()=>m.value?m.value.selectedAmount:0),S=v(()=>m.value?m.value.totalPriceDifference:void 0),k=v(()=>m.value?m.value.totalOldPrice:void 0),P=v(()=>m.value?m.value.totalPrice:0),I=v(()=>l.value.filter(t=>t.selected).map(t=>t.cartItemId)),R=v(()=>r.isSelectCartProductLoading>0||r.isSelectedCartItemAmountChanging>0||r.isCartRemoveLoading),j=E(({cartItemIds:t})=>{r.fetchSelectCartProducts(t)});function D(){l.value=Z(),V(l.value,t=>{j({cartItemIds:t})})}async function Q(){await r.fetchGetCart(),D()}Q();function Z(){return c.value.map(t=>({cartItemId:t.cartItemId,selected:t.selected}))}function A(){d.value=!1}function H(t){d.value=!0,i.setBtnOpenModal(t)}function w(){C.value=!1}function J(t){l.value.some(a=>a.selected)||(C.value=!0,i.setBtnOpenModal(t))}function K(){I.value.length<c.value.length?l.value.forEach(t=>{t.selected=!0}):I.value.length===c.value.length&&l.value.forEach(t=>{t.selected=!1})}function W(t){t.length===c.value.length?n.value=!0:n.value=!1}async function X(){A(),r.removeCartItems(I.value),await r.fetchRemoveCart(I.value),D()}return V(()=>I.value,t=>{W(t)}),(t,N)=>(o(),p(se,{title:"Корзина",breadcrumbs:h.value},{default:_(()=>[s("div",Se,[s("section",ke,[u(ue,{class:"cart-page__container"},{default:_(()=>[!c.value.length&&!F(r).isGetCartLoading?(o(),b("p",Pe,"Корзина пуста")):g("",!0),c.value.length?(o(),b(x,{key:1},[s("div",Ae,[u(U,{modelValue:n.value,"onUpdate:modelValue":N[0]||(N[0]=a=>n.value=a),name:"Выбрать всё",value:!0,onInputClick:K},null,8,["modelValue"]),I.value.length?(o(),p(re,{key:0,class:"cart-page__btn-cross",name:"Удалить выделенное",onClick:H})):g("",!0)]),l.value.length?(o(),p(ne,{key:0,name:"list",tag:"ul",class:"cart-page__list"},{default:_(()=>[(o(!0),b(x,null,oe(c.value,(a,B)=>(o(),b("li",{key:a.cartItemId,class:"cart-list__item"},[u(be,{modelValue:l.value[B].selected,"onUpdate:modelValue":Y=>l.value[B].selected=Y,"product-cart-id":a.cartItemId,"product-id":a.productId,"picture-src":a.picture,title:a.title,"color-name":a.color.name,"size-id":a.size._id,"size-name":a.size.name,price:a.price,"price-for-one":a.priceForOne,"old-price":a==null?void 0:a.oldPrice,"price-difference":a==null?void 0:a.priceDifference,amount:a.amount,selected:a.selected},null,8,["modelValue","onUpdate:modelValue","product-cart-id","product-id","picture-src","title","color-name","size-id","size-name","price","price-for-one","old-price","price-difference","amount","selected"])]))),128))]),_:1})):g("",!0),s("div",Ne,[F(r).isGetCartLoading?g("",!0):(o(),p(de,{key:0,class:"cart-page__order-form",amount:f.value,"price-difference":S.value,"old-price":k.value,price:P.value,"show-spinner":R.value},{default:_(()=>[u(le,{class:"cart-page__btn-submit","element-type":"router-link","btn-name":"Оформить",to:{name:I.value.length?"order":null},onClick:J},null,8,["to"])]),_:1},8,["amount","price-difference","old-price","price","show-spinner"]))]),(o(),p(ce,{to:"body"},[u(G,{name:"appear"},{default:_(()=>[d.value?(o(),p(M,{key:0,onClose:A},{default:_(()=>[u($,{"confirm-name":"Удалить","cancel-name":"Отмена",message:"Удалить выбранные товары?",onClose:A,onAction:X})]),_:1})):C.value?(o(),p(M,{key:1,onClose:w},{default:_(()=>[u($,{"confirm-name":"Ок",message:"Выберите товары для оформления",onAction:w})]),_:1})):g("",!0)]),_:1})]))],64)):g("",!0)]),_:1})])])]),_:1},8,["breadcrumbs"]))}}),Fe=z(Oe,[["__scopeId","data-v-fe7bf58a"]]);export{Fe as default};