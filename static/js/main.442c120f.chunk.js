(this["webpackJsonpreact-online-shop"]=this["webpackJsonpreact-online-shop"]||[]).push([[0],{16:function(e){e.exports=JSON.parse('[{"id":"1","title":"Baby Yoda","image":"/assets/baby-yoda.svg","additionalImages":["https://placekitten.com/200/139","https://placekitten.com/200/139?2"],"description":"Baby Yoda sticker","price":49.99},{"id":"2","title":"Banana","image":"/assets/banana.svg","additionalImages":["https://placekitten.com/200/139","https://placekitten.com/200/139?2"],"description":"Banana sticker","price":19.99},{"id":"3","title":"Girl","image":"/assets/girl.svg","additionalImages":["https://placekitten.com/201/139","https://placekitten.com/201/139?2"],"description":"Girl sticker","price":24.99},{"id":"4","title":"Viking","image":"/assets/viking.svg","additionalImages":["https://placekitten.com/203/139","https://placekitten.com/204/139?2"],"description":"Viking sticker","price":34.99}]')},35:function(e,t,n){},36:function(e,t,n){},39:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n(14),s=n.n(i),r=n(3);n(35);var a=function(){var e=Object(c.useState)([0,0]),t=Object(r.a)(e,2),n=t[0],i=t[1];return Object(c.useLayoutEffect)((function(){function e(){i([window.innerWidth,window.innerHeight])}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),n},o=(n(36),n(0)),l=function(e){var t=e.className;return Object(o.jsxs)("ul",{className:t,children:[Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"#",children:"Home"})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"#",children:"Products"})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"#",children:"contacts"})}),Object(o.jsx)("li",{children:"Cart"})]})},j=function(){var e=Object(c.useState)(!1),t=Object(r.a)(e,2),n=t[0],i=t[1],s=a()[0];return Object(o.jsxs)("div",{className:"header-burger-nav",children:[Object(o.jsxs)("div",{className:"header",children:[Object(o.jsx)("h1",{children:"Stickerz"}),Object(o.jsxs)("nav",{children:[s>720?Object(o.jsx)(l,{className:"navbar-standart"}):null,Object(o.jsx)("div",{className:"box",onClick:function(){i(!n)},children:Object(o.jsx)("div",{className:"burger"})})]})]}),s<=720&&n?Object(o.jsx)(l,{className:"navbar-burger"}):null]})},u=(n(38),n(48)),d=(n(39),function(){var e=Object(c.useState)(0),t=Object(r.a)(e,2),n=t[0],i=t[1],s=[Object(o.jsxs)("div",{children:[Object(o.jsxs)("h2",{children:["Welcome to ",Object(o.jsx)("br",{})," Stickerz"]}),Object(o.jsx)("h3",{children:"Best sticker in world"}),Object(o.jsx)("hr",{}),Object(o.jsx)("p",{children:"Buy with discount today"}),Object(o.jsx)("button",{children:"Start shopping"})]}),Object(o.jsx)("img",{src:"/react-online-shop/assets/baby-yoda.svg"}),Object(o.jsx)("img",{src:"/react-online-shop/assets/girl.svg"})];return Object(c.useEffect)((function(){var e=setInterval((function(){n===s.length-1?i(0):i(n+1)}),5e3);return function(){return clearInterval(e)}})),Object(o.jsxs)("div",{className:"containerCarrousel",children:[Object(o.jsx)("button",{style:{border:"none",backgroundColor:"transparent"},onClick:function(){i(0===n?s.length-1:n-1)},children:Object(o.jsx)(u.a,{disabled:!0,size:"huge",style:{cursor:"pointer",float:"right"},name:"angle left"})}),s.map((function(e,t){return Object(o.jsx)("div",{className:t===n?"slide active":"slide",children:t===n&&e},t)})),Object(o.jsx)("button",{style:{border:"none",backgroundColor:"transparent"},onClick:function(){n===s.length-1?i(0):i(n+1)},children:Object(o.jsx)(u.a,{disabled:!0,size:"huge",style:{cursor:"pointer"},name:"angle right"})})]})}),b=n(18),h=(n(42),function(e){var t=e.product;return Object(o.jsxs)("div",{className:"product-card",children:[Object(o.jsx)("img",{src:"/react-online-shop"+t.image,alt:t.title}),Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{children:t.title}),Object(o.jsx)("p",{children:t.description}),Object(o.jsxs)("div",{className:"card-buttons",children:[Object(o.jsx)("button",{className:"button-info",children:"Info"}),Object(o.jsxs)("button",{className:"button-buy",children:["$",t.price," - buy"]})]})]})]},t.id)}),O=(n(43),n(16)),p=n(17),x=n.n(p),f=function(){var e=a()[0],t=Object(c.useState)(""),n=Object(r.a)(t,2),i=n[0],s=n[1],l=Object(c.useState)([]),j=Object(r.a)(l,2),u=j[0],d=j[1],p=Object(c.useState)([]),f=Object(r.a)(p,2),g=f[0],m=f[1];Object(c.useEffect)((function(){return d(Object(b.a)(O))}),[]);Object(c.useEffect)((function(){""!==i&&m(u.filter((function(e){return e.title.toLowerCase().includes(i.toLowerCase())})))}),[i]);var v=function(e){e.target.value.length>2&&s(e.target.value)},k=Object(c.useMemo)((function(){return x()(v,1e3)}),[]);Object(c.useEffect)((function(){return function(){k.cancel()}}),[]);return Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{children:"Products"}),Object(o.jsxs)("div",{children:[Object(o.jsx)("button",{onClick:function(){m(u.concat().sort((function(e,t){return e.price-t.price})))},children:"Ascending button"}),Object(o.jsx)("button",{onClick:function(){m(u.concat().sort((function(e,t){return t.price-e.price})))},children:"Descending button"}),Object(o.jsx)("input",{type:"text",onChange:k})]}),Object(o.jsx)("div",{className:"product-list".concat(e<=574?1:e>574&&e<=751?2:e>751&&e<=993?3:4),children:(g.length>0?g:u).map((function(e){return Object(o.jsx)(h,{product:e})}))})]})},g=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)(d,{}),Object(o.jsx)(f,{})]})};n(44);var m=function(){return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)(j,{}),Object(o.jsx)(g,{})]})};s.a.render(Object(o.jsx)(m,{}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.442c120f.chunk.js.map