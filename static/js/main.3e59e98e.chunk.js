(this.webpackJsonpcats4lyf=this.webpackJsonpcats4lyf||[]).push([[0],{1523:function(e,t,c){},1524:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c.n(n),r=c(25),s=c.n(r),i=(c(31),c(10)),l=c(6),o=c.n(l),d=c(9),j=c(3),b=(c(33),function(){var e=Object(d.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.thecatapi.com/v1/images/search?mime_types=jpg&limit=20&api_key=2ab73ab1-f5ca-4a8a-bf86-25e64a0f6abf");case 3:if(200===(t=e.sent).status){e.next=6;break}throw new Error("".concat(t.status," - ").concat(t.statusText));case 6:return e.next=8,t.json();case 8:return c=e.sent,e.abrupt("return",c);case 12:e.prev=12,e.t0=e.catch(0),console.error("\ud83d\udca5\ud83d\udca5 ".concat(e.t0.message));case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}()),u=b,h=c(4),O=c.n(h),m=function(){for(var e=[],t=0;t<20;t++){var c=O.a.random.arrayElement(["male","female"]),n=O.a.name.firstName(c),a=O.a.address.city(),r=O.a.animal.cat(),s=O.a.datatype.number(20),i=O.a.commerce.price(50,1e3);e.push({name:n,gender:c,city:a,breed:r,age:s,price:i})}return e},p=c(0),f=c(5),x=c(1),v=function(e){var t=e.handleOpen,c=e.cart;return Object(x.jsx)("div",{className:"shop-cart",children:Object(x.jsx)(p.b.Provider,{value:{color:"black",size:"25px",marginLeft:"100px"},children:Object(x.jsxs)("div",{onClick:t,className:"shop-cart",children:[Object(x.jsx)(f.b,{}),Object(x.jsx)("span",{children:c.length?c.length+" cats in basket":""})]})})})},y=c.p+"static/media/cat_cart.f7bae421.webp",g=function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("h2",{children:'"Cats choose us we don\'t own them"'}),Object(x.jsx)("img",{className:"main-img",alt:"",src:y}),Object(x.jsx)("p",{children:"Find Your Furry Friend!"})]})},C=function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("p",{style:{fontSize:"15px",fontWeight:400,display:"flex",justifyContent:"center",alignItems:"flex-end",marginBottom:20},children:"Copyright \xa9 2021 Cats4Lyf - All Rights Reserved."}),Object(x.jsx)("a",{href:"",style:{fontSize:"15px",fontWeight:400,display:"flex",justifyContent:"space-evenly",alignItems:"flex-end",marginBottom:10},children:"PRIVACY POLICY  "}),Object(x.jsx)("a",{href:"",style:{fontSize:"15px",fontWeight:400,display:"flex",justifyContent:"space-evenly",alignItems:"center",marginBottom:0},children:"TERMS AND CONDITIONS"})]})},N=c(26),S=(c(1523),function(e){var t=e.name,c=e.image,n=e.price,a=e.id,r=e.handleSetCart,s=e.handleOpenAbout;return Object(x.jsxs)("div",{className:"cat-tile",children:[Object(x.jsx)("a",{onClick:function(e){e.preventDefault(),s(a)},href:"./about",children:Object(x.jsx)("img",{src:c,alt:"",value:"About"})}),Object(x.jsx)("h2",{children:t}),Object(x.jsxs)("h4",{children:["\xa3",n]}),Object(x.jsx)("div",{children:Object(x.jsxs)("button",{"data-value":"add",onClick:function(e){r(e,{name:t,price:n,id:a,image:c})},className:"tile-cart",children:[Object(x.jsx)(N.a,{})," Add to cart"]})})]})}),w=function(e){var t=e.cart,c=e.setCart,a=e.isOpen,r=e.handleClose,s=e.top,l=Object(n.useState)(0),o=Object(j.a)(l,2),d=o[0],b=o[1];Object(n.useEffect)((function(){u()}),[t]);var u=function(){for(var e=0,c=0;c<t.length;c++)e+=+t[c].price;b(e)},h=t.map((function(e){return Object(x.jsxs)("div",{children:["".concat(e.name,": \xa3").concat(e.price),Object(x.jsx)("input",{type:"submit",value:"remove",onClick:function(){return function(e){var n=Object(i.a)(t);n=n.filter((function(t){return t.id!==e.id})),c(n)}(e)}})]},e.id)}));return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:"modal-background ".concat(a?"":"hidden"," "),style:{top:s},children:"\xa0"}),Object(x.jsxs)("div",{className:"modal-cart ".concat(a?"":"hidden"," "),style:{top:s,transform:"translate(-50%, calc(100vh / 2 - 50%))"},children:["Shopping Cart",Object(x.jsx)("div",{children:"Cart"}),Object(x.jsx)("div",{children:h}),Object(x.jsxs)("div",{style:{border:"1px solid red",color:"blue",fontSize:"25px",display:"flex",justifyContent:"center",position:"absolute"},children:["Total: \xa3",d]}),Object(x.jsx)(p.b.Provider,{value:{color:"black",size:"15px"},children:Object(x.jsx)("button",{className:"modal-close",onClick:r,children:Object(x.jsx)(f.a,{})})})]})]})},k=function(e){var t=e.isOpen,c=e.handleClose,n=e.cat,a=n.name,r=n.price,s=n.url,i=n.breed,l=n.city,o=n.age,d=n.gender,j=n.style;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:"modal-background ".concat(t?"":"hidden"," "),style:{top:null===j||void 0===j?void 0:j.top},children:"\xa0"}),Object(x.jsxs)("div",{className:"modal-cart ".concat(t?"":"hidden"," "),style:{top:null===j||void 0===j?void 0:j.top,transform:"translate(-50%, calc(100vh / 2 - 50%))"},children:[Object(x.jsx)("h3",{children:a}),Object(x.jsx)("h3",{children:r}),Object(x.jsx)("img",{className:"about-img",src:s,alt:""}),Object(x.jsx)("p",{children:i}),Object(x.jsx)("p",{children:l}),Object(x.jsx)("p",{children:o}),Object(x.jsx)("p",{children:d}),Object(x.jsx)(p.b.Provider,{value:{color:"black",size:"15px"},children:Object(x.jsx)("button",{className:"modal-close",onClick:c,children:Object(x.jsx)(f.a,{})})})]})]})},I=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)([]),s=Object(j.a)(r,2),l=s[0],b=s[1],h=Object(n.useState)([]),O=Object(j.a)(h,2),p=O[0],f=O[1],y=Object(n.useState)(!1),N=Object(j.a)(y,2),I=N[0],F=N[1],z=Object(n.useState)(!1),A=Object(j.a)(z,2),E=A[0],P=A[1],Y=Object(n.useState)({}),q=Object(j.a)(Y,2),B=q[0],L=q[1],R=Object(n.useState)(),T=Object(j.a)(R,2),D=T[0],W=T[1];Object(n.useEffect)((function(){Object(d.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=m(),e.next=3,u();case 3:c=e.sent,b(t),a(c);case 6:case"end":return e.stop()}}),e)})))()}),[]);var _=function(e,t){"add"===e.target.dataset.value&&f([].concat(Object(i.a)(p),[t]))},J=function(e){P(!0);var t=c.findIndex((function(t){return t.id===e})),n=window.scrollY;document.querySelector("body").style="overflow: hidden; height: 100%";var a={url:c[t].url,name:l[t].name,price:l[t].price,breed:l[t].breed,city:l[t].city,age:l[t].age,gender:l[t].gender,style:{top:n}};L(a)};return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{className:"app-container",children:[Object(x.jsx)("nav",{className:"nav-bar",children:Object(x.jsx)(v,{handleOpen:function(){F(!0),W(window.scrollY),document.querySelector("body").style="overflow: hidden; height: 100%"},cart:p})}),Object(x.jsxs)("div",{className:"hero",children:[Object(x.jsx)("h1",{children:"Cats4Lyf"}),Object(x.jsx)(g,{})]}),Object(x.jsx)("h3",{children:"Cats for Sale"}),Object(x.jsx)("div",{className:"gallery",children:c.map((function(e,t){var c;return Object(x.jsx)(S,{name:null===(c=l[t])||void 0===c?void 0:c.name,image:e.url,price:l[t].price,id:e.id,setCart:f,cart:p,handleSetCart:_,handleOpenAbout:J},e.id)}))}),Object(x.jsx)("div",{className:"footer",children:Object(x.jsx)(C,{})}),Object(x.jsx)("div",{className:"shop",children:Object(x.jsx)(w,{isOpen:I,handleClose:function(){F(!1),document.querySelector("body").style="overflow: unset; height: unset"},cart:p,setCart:f,top:D})}),Object(x.jsx)("div",{className:"about",children:Object(x.jsx)(k,{cat:B,isOpen:E,handleClose:function(){P(!1),document.querySelector("body").style="overflow: unset; height: unset"}})})]})})};s.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(I,{})}),document.getElementById("root"))},31:function(e,t,c){},33:function(e,t,c){}},[[1524,1,2]]]);
//# sourceMappingURL=main.3e59e98e.chunk.js.map