(this["webpackJsonpjohnleo-space"]=this["webpackJsonpjohnleo-space"]||[]).push([[0],{20:function(e,t,i){},25:function(e,t,i){"use strict";i.r(t);var n,o,r,c,s,a,l,h,d,g,b,x,j,p,m,u,O,f,v=i(2),w=i.n(v),y=i(11),z=i.n(y),M=(i(20),i(5)),Y=i(6),k=i(1),S=i(4),L=i(3),T=i(0),C=L.c.span(n||(n=Object(S.a)(["\n    font-weight: ",";\n    font-size: ","px;\n    line-height: ","px;\n    color: ",";\n    ",";\n    ",";\n    flex: ",";\n    font-family: ",";\n    ",";\n    ",";\n    ",";\n"])),(function(e){return e.weight}),(function(e){return e.size?e.size:15}),(function(e){return e.lh}),(function(e){return e.color}),(function(e){return e.margin}),(function(e){return e.padding}),(function(e){return e.flex}),(function(e){return e.ff}),(function(e){return e.to?"cursor: pointer;":null}),(function(e){return e.to?":hover { opacity: 0.85 }":null}),(function(e){return"none"===e.us?"user-select: none":null})),_=L.c.div(o||(o=Object(S.a)(["\n    display: flex;\n    align-items: ",";\n    justify-content: ",";\n    ",";\n    width: ",";\n    height: ",";\n    background-color: ",";\n    ",";\n    border-radius: ",";\n    flex: ",";\n    z-index: ",";\n    ",";\n    ",";\n    ",";\n    opacity: ",";\n    position: ",";\n"])),(function(e){return e.align}),(function(e){return e.justify}),(function(e){return e.margin}),(function(e){return e.size?e.size:e.width}),(function(e){return e.size?e.size:e.height}),(function(e){return e.bg}),(function(e){return e.padding}),(function(e){return e.circle?"50%":e.br}),(function(e){return e.flex}),(function(e){return e.zIndex}),(function(e){return e.to?"cursor: pointer;":null}),(function(e){return e.to?":hover { opacity: 0.85 }":null}),(function(e){return"none"===e.us?"user-select: none":null}),(function(e){return e.opacity}),(function(e){return e.position})),F=Object(L.c)(_)(r||(r=Object(S.a)(["\n    flex-direction: row;\n"]))),I=Object(L.c)(_)(c||(c=Object(S.a)(["\n    flex-direction: column;\n"]))),P=(L.c.div(s||(s=Object(S.a)(["\n    svg {\n        opacity: 0.85;\n        :hover {\n            opacity: 1;\n        };\n    };\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    z-index: ",";\n    justify-content: center;\n    ",";\n    flex: ",";\n"])),(function(e){return e.zIndex}),(function(e){return e.margin}),(function(e){return e.flex})),L.c.img(a||(a=Object(S.a)(["\n    object-fit: ",";\n    ",";\n    width: ",";\n    height: ",";\n    opacity: ",";\n"])),(function(e){return e.of}),(function(e){return e.margin}),(function(e){return e.width}),(function(e){return e.height}),(function(e){return e.opacity}))),D=(Object(L.c)(_)(l||(l=Object(S.a)(["\n    align-items: center;\n    justify-content: center;\n    border-radius: 50%;\n    overflow: hidden;\n"]))),window.outerHeight),R=window.outerWidth,B=D,A=function(e,t,i){var n=window.outerWidth;return{width:n*e/100,height:n*e/100/t*i}}(10,1,1).width,E=Object(L.c)(_)(h||(h=Object(S.a)(["\n    position: absolute;\n    right: ","px;\n    top: ","px;\n    transition: right ","ms, top ","ms, opacity 1000ms;\n    opacity: ",";\n    :hover {\n        background-color: ",";\n        z-index: 10;\n        span {\n            font-size: 25px;\n            color: ",";\n            transition: all 300ms;\n        };\n    };\n"])),(function(e){return e.position.X}),(function(e){return e.position.Y}),(function(e){return e.speed}),(function(e){return e.speed}),(function(e){return e.opacity}),(function(e){return e.hovercolor?e.hovercolor:"black"}),(function(e){return e.hovertextcolor?e.hovertextcolor:"black"})),X=function(e){var t=e.hoverFunc,i=e.index,n=e.page,o=e.x,r=e.y,c=e.left,s=void 0===c||c,a=e.top,l=void 0===a||a,h=e.initX,d=e.initY,g=e.text,b=e.speed,x=void 0===b?"500":b,j=e.textsize,p=e.size,m=void 0===p?A:p,u=e.bg,O=void 0===u?"rgb(17,17,17)":u,f=e.weight,w=void 0===f?"500":f,y=e.textcolor,z=void 0===y?"white":y,Y=e.hovercolor,k=e.hovertextcolor,S=Object(v.useState)({X:h||o-3*m,Y:d||r-3*m}),L=Object(M.a)(S,2),_=L[0],F=L[1],I=Object(v.useState)(0),P=Object(M.a)(I,2),D=P[0],R=P[1];return Object(v.useEffect)((function(){1===n&&(F({X:o,Y:r}),R(1),setTimeout((function(){F({X:o,Y:l?r+m/7:r-m/7})}),300),setTimeout((function(){F({X:s?o+m/8:o-m/8,Y:r})}),500),setTimeout((function(){F({X:o,Y:l?r-m/9:r+m/9})}),600),setTimeout((function(){F({X:s?o-m/10:o+m/10,Y:r})}),700),setTimeout((function(){F({X:o,Y:r})}),750))}),[m,s,l,o,r,n]),Object(T.jsx)(E,{onMouseOver:function(){return t&&t(i,!0)},onMouseOut:function(){return t&&t(i,!1)},position:_,opacity:D,speed:x,circle:!0,to:!0,bg:O,align:"center",justify:"center",size:m+"px",hovercolor:Y,hovertextcolor:k,children:Object(T.jsx)(C,{size:j,style:{textAlign:"center"},weight:w,color:z,children:g})})},N=function(e){var t=e.page,i=e.width,n=void 0===i?"100%":i,o=e.height,r=e.bg,c=void 0===r?"rgba(0,0,0,0)":r,s=e.circles,a=e.initX,l=e.initY;return Object(T.jsx)(_,{position:"relative",width:n,height:o,bg:c,children:s.map((function(e,i){return Object(T.jsx)(X,{page:t,hoverFunc:e.hoverFunc,size:e.size,x:e.x,y:e.y,left:e.left,top:e.top,initX:a,index:i,initY:l,speed:e.speed,bg:e.bg,text:e.text,weight:e.weight,hovercolor:e.hovercolor,hovertextcolor:e.hovertextcolor,textsize:e.textsize,textcolor:e.textcolor},i)}))})},W=k.isMobile?R/2-90:R/2-115,G=k.isMobile?B/2-120:B/2-180,J=function(e){var t=e.hover,i=e.index,n=e.content,o=e.x,r=e.y;return Object(T.jsx)(_,{style:{opacity:t===i?1:0,transition:"all 300ms",position:"absolute",left:o,top:r},children:n})},V=function(e){var t=e.page,i=e.setPage,n=Object(v.useState)(B),o=Object(M.a)(n,2),r=o[0],c=o[1],s=Object(v.useState)(null),a=Object(M.a)(s,2),l=a[0],h=a[1],d=Object(v.useState)(!1),g=Object(M.a)(d,2),b=g[0],x=g[1];Object(v.useEffect)((function(){1===t&&!b&&setTimeout((function(){x(!0)}),5e3)})),Object(v.useEffect)((function(){c(1===t?0:B)}),[t]);var j=function(e,t){h(t?e:null)},p=[{text:"Design & Develop",x:k.isMobile?W+80:W+100,y:k.isMobile?G+80:G+100,size:k.isMobile?180:230,left:!1,textsize:k.isMobile?15:20,textcolor:"white",hovertextcolor:"white",weight:"700",bg:"rgba(75,75,75,0.85)",hovercolor:"rgba(20,20,20,0.75)",hoverFunc:j},{text:"Artificial Intelligence",x:W,y:k.isMobile?G-50:G-70,size:k.isMobile?180:230,textsize:k.isMobile?15:20,textcolor:"white",hovertextcolor:"white",weight:"700",bg:"rgba(75,75,75,0.85)",hovercolor:"rgba(20,20,20,0.75)",hoverFunc:j},{text:"Blockchain",x:k.isMobile?W-80:W-100,y:k.isMobile?G+80:G+100,size:k.isMobile?180:230,top:!1,textsize:k.isMobile?15:20,textcolor:"white",hovertextcolor:"white",weight:"700",bg:"rgba(75,75,75,0.85)",hovercolor:"rgba(20,20,20,0.75)",hoverFunc:j}];return Object(T.jsxs)(_,{style:{width:"100vw",height:k.isMobileSafari?"80vh":"100vh",position:"fixed",overflow:"hidden",opacity:1===t?1:0,transition:"opacity 1s",top:r},children:[Object(T.jsx)(N,{page:t,circles:p,height:"100%"}),Object(T.jsx)(J,{hover:l,index:1,x:R/1.4,y:B/4,content:Object(T.jsxs)(I,{children:[Object(T.jsx)(C,{weight:"700",size:"25",margin:"margin-bottom: 20px;",children:"Artificial Intelligence"}),Object(T.jsx)(C,{weight:"500",size:"18",margin:"margin-left: 10px; margin-bottom: 10px;",children:"Deep Learning"}),Object(T.jsx)(C,{weight:"500",size:"18",margin:"margin-left: 10px; margin-bottom: 10px;",children:"Reinforcement Learning"}),Object(T.jsx)(C,{weight:"500",size:"18",margin:"margin-left: 10px;",children:"Computer Vision with CNN"}),Object(T.jsx)(C,{weight:"700",size:"18",margin:"margin: 20px 0px;",children:"Mainly Stack to use"}),Object(T.jsx)(C,{weight:"500",size:"18",margin:"margin-left: 10px; margin-bottom: 10px;",children:"TensorFlow, Pytorch with Python"}),Object(T.jsx)(C,{weight:"500",size:"18",margin:"margin-left: 10px; margin-bottom: 10px;",children:"Open A.I"})]})}),Object(T.jsx)(J,{hover:l,index:0,x:R/10,y:B/3,content:Object(T.jsxs)(I,{children:[Object(T.jsx)(C,{weight:"700",size:"25",margin:"margin-bottom: 20px;",children:"Service Design & Develop"}),Object(T.jsx)(C,{weight:"500",size:"18",margin:"margin-left: 10px;",children:"Web, iOS, Android (Cross Platform)"}),Object(T.jsx)(C,{weight:"700",size:"18",margin:"margin: 20px 0px;",children:"Mainly Stack to use"}),Object(T.jsx)(C,{weight:"700",size:"18",margin:"margin-bottom: 10px; margin-left: 10px;",children:"FrontEnd"}),Object(T.jsx)(C,{weight:"500",size:"18",margin:"margin-left: 20px; margin-bottom: 10px;",children:"React.js, React Native, JS"}),Object(T.jsx)(C,{weight:"700",size:"18",margin:"margin-bottom: 10px; margin-left: 10px;",children:"BackEnd"}),Object(T.jsx)(C,{weight:"500",size:"18",margin:"margin-left: 20px; margin-bottom: 10px;",children:"Node.js, SQL, GraphQL"})]})}),Object(T.jsx)(J,{hover:l,index:2,x:R/1.4,y:B/2,content:Object(T.jsxs)(I,{children:[Object(T.jsx)(C,{weight:"700",size:"25",margin:"margin-bottom: 20px;",children:"Blockchain"}),Object(T.jsx)(C,{weight:"500",size:"18",margin:"margin-left: 10px; margin-bottom: 5px;",children:"Mission to Create"}),Object(T.jsx)(C,{weight:"500",size:"18",margin:"margin-left 10px;",children:'"Zero Marginal Cost Society"'}),Object(T.jsx)(C,{weight:"700",size:"18",margin:"margin: 20px 0px;",children:"Mainly Stack to use"}),Object(T.jsx)(C,{weight:"500",size:"18",margin:"margin-left: 10px; margin-bottom: 10px;",children:"Ethereum Solidity"})]})}),Object(T.jsx)(_,{to:!0,style:{opacity:b?1:0,transition:"all 500ms",position:"absolute",bottom:38,right:38},children:Object(T.jsx)(C,{weight:"600",onClick:function(){return i(2)},children:"Next >"})})]})},H=Object(L.c)(_)(d||(d=Object(S.a)(["\n    position: relative;\n    align-items: center;\n    justify-content: center;\n    opacity: ",";\n    transition: right 1s ease-in-out, opacity 1s ease-in-out;\n    right: ","px;\n"])),(function(e){return e.sideOn===e.index?1:0}),(function(e){return t=e.sideOn,i=e.index,t<i?-R:t===i?0:t>i?R:void 0;var t,i})),Q=Object(L.c)(I)(g||(g=Object(S.a)(["\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n    align-items: center;\n    justify-content: center;\n    opacity: ",";\n    transition: bottom 1s ease-in-out, opacity 1.5s ease-in-out;\n    bottom: ","px;\n"])),(function(e){return e.on===e.index?1:0}),(function(e){return t=e.on,i=e.index,t<i?-B:t===i?0:t>i?B:void 0;var t,i})),U=Object(L.c)(C)(b||(b=Object(S.a)(["\n    font-size: ","px;\n    line-height: ","px;\n    font-weight: 700;\n    color: white;\n    margin-bottom: ","px;\n    display: block;\n    align-items: center;\n    text-align: ",";\n"])),k.isMobile?35:55,k.isMobile?40:55,(function(e){return e.siderText?0:18}),(function(e){return e.service&&"center"})),Z=Object(L.c)(C)(x||(x=Object(S.a)(["\n    font-size: ","px;\n    font-weight: 700;\n    color: white;\n    text-align: center;\n    line-height: ","px;\n"])),k.isMobile?25:45,k.isMobile?25:50),q=function(e){var t=e.on,i=e.siderOn,n=e.headerText,o=e.siderText,r=e.index;return Object(T.jsxs)(Q,{on:t,index:r,children:[Object(T.jsx)(U,{siderText:o,children:n}),Object(T.jsx)(H,{sideOn:i,index:r,children:o})]})},K=function(e){var t=e.page,i=e.setPage,n=Object(v.useState)(0),o=Object(M.a)(n,2),r=o[0],c=o[1],s=Object(v.useState)(0),a=Object(M.a)(s,2),l=a[0],h=a[1],d=Object(v.useState)(0),g=Object(M.a)(d,2),b=g[0],x=g[1];Object(v.useEffect)((function(){if(0!==t)return setTimeout((function(){x(B)}),1e3);x(0);0===r&&setTimeout((function(){c(1)}),300),1===r&&setTimeout((function(){c(2)}),3e3),2===r&&setTimeout((function(){h(3),c(3)}),3e3),3===r&&setTimeout((function(){h(4),c(4)}),3e3),4===r&&setTimeout((function(){h(5),c(5)}),3e3),5===r&&setTimeout((function(){return h(6),c(6),setTimeout((function(){i(1)}),3e3)}),3e3)}),[r,t,i]);var j=[{header:Object(T.jsxs)(U,{mobile:k.isMobile,children:["Hello! ",k.isMobile&&Object(T.jsx)("br",{})," My name is John Leo"]})},{header:Object(T.jsxs)(U,{children:["Welcome to ",k.isMobile&&Object(T.jsx)("br",{}),"John Leo's Space."]})},{header:Object(T.jsx)(U,{children:"I'm interested In..."})},{header:Object(T.jsx)(U,{children:"Artificial Intelligence"}),sider:Object(T.jsxs)(Z,{children:["Deep Learning, ",k.isMobile&&Object(T.jsx)("br",{}),"Reinforcement Learning"]})},{header:Object(T.jsxs)(U,{service:!0,children:["Service ",k.isMobile&&Object(T.jsx)("br",{})," Design & Develop"]}),sider:Object(T.jsx)(Z,{children:"Full Stack Engineering"})},{header:Object(T.jsx)(U,{children:"Blockchain"}),sider:Object(T.jsxs)(Z,{children:['"Zero Marginal Cost Society"',Object(T.jsx)("br",{}),"Decentralized Protocal"]})}];return Object(T.jsx)(_,{width:"100%",height:k.isMobileSafari?"90vh":"100vh",align:"center",justify:"center",style:{position:"fixed",top:b,opacity:0===t?1:0,overflow:"hidden",transition:"opacity 1s"},children:j.map((function(e,t){return Object(T.jsx)(q,{on:r,siderOn:l,index:t+1,bottom:-B,headerText:e.header,siderText:e.sider},t)}))})},$=function(e){var t=e.page,i=e.setPage;return Object(T.jsxs)("div",{style:{width:"100wh",height:"100vh",overflow:"hidden"},children:[Object(T.jsx)(K,{page:t,setPage:i}),Object(T.jsx)(V,{page:t,setPage:i})]})},ee=Object(L.c)(I)(j||(j=Object(S.a)(["\n    width: ",";\n    height: ",";\n    position: fixed;\n    background-color: rgba(244, 226, 198, 0.75);\n    background-color: rgb(23,23,23);\n    transition: left 300ms ease-in-out;\n    left: ",";\n    top: ","px;\n    padding: 30px;\n    z-index: 1000;\n    padding-top: 50px;\n    overflow: ",";\n"])),k.isMobile?"100vw":R/5.5+"px",k.isMobile?"100vh":B-180+"px",(function(e){return e.categoryOn?0:k.isMobile?"-100%":-R/5+"px"}),k.isMobile?0:110,k.isMobile?"hidden":"scroll"),te=function(e){var t=e.categoryOn;e.setCategoryOn;return Object(T.jsxs)(ee,{categoryOn:t,children:[Object(T.jsxs)(I,{margin:"margin-bottom: 20px;",children:[Object(T.jsx)(C,{size:"20",weight:"700",to:!0,margin:"margin-bottom: 10px;",children:"Lab"}),Object(T.jsx)(C,{size:"15",margin:"margin: 5px 10px;",weight:"500",to:!0,children:"Artificial Intelligence"}),Object(T.jsx)(C,{size:"15",margin:"margin: 5px 10px;",weight:"500",to:!0,children:"Service & Design"}),Object(T.jsx)(C,{size:"15",margin:"margin: 5px 10px;",weight:"500",to:!0,children:"Blockchain"})]}),Object(T.jsxs)(I,{margin:"margin-bottom: 20px;",children:[Object(T.jsx)(C,{size:"20",weight:"700",to:!0,margin:"margin-bottom: 10px;",children:"Physics"}),Object(T.jsx)(C,{size:"15",margin:"margin: 5px 10px;",weight:"500",to:!0,children:"Quantam Physics"}),Object(T.jsx)(C,{size:"15",margin:"margin: 5px 10px;",weight:"500",to:!0,children:"Relativity Theory"}),Object(T.jsx)(C,{size:"15",margin:"margin: 5px 10px;",weight:"500",to:!0,children:"Leo's Theory"})]}),Object(T.jsxs)(I,{margin:"margin-bottom: 20px;",children:[Object(T.jsx)(C,{size:"20",weight:"700",to:!0,margin:"margin-bottom: 10px;",children:"Buddhism"}),Object(T.jsx)(C,{size:"15",margin:"margin: 5px 10px;",weight:"500",to:!0,children:"Mindfulness"}),Object(T.jsx)(C,{size:"15",margin:"margin: 5px 10px;",weight:"500",lh:20,to:!0,children:"Physics with Buddhism"}),Object(T.jsx)(C,{size:"15",margin:"margin: 5px 10px;",weight:"500",to:!0,children:"Buddha's Saying"})]}),Object(T.jsxs)(I,{margin:"margin-bottom: 20px;",children:[Object(T.jsx)(C,{size:"20",weight:"700",to:!0,margin:"margin-bottom: 10px;",children:"Philosophy"}),Object(T.jsx)(C,{size:"15",margin:"margin: 5px 10px;",weight:"500",to:!0,children:"Life"}),Object(T.jsx)(C,{size:"15",margin:"margin: 5px 10px;",weight:"500",lh:20,to:!0,children:"Cross of Literature and Technology"}),Object(T.jsx)(C,{size:"15",margin:"margin: 5px 10px;",weight:"500",to:!0,children:"Design"})]}),Object(T.jsxs)(I,{margin:"margin-bottom: 20px;",children:[Object(T.jsx)(C,{size:"20",weight:"700",to:!0,margin:"margin-bottom: 10px;",children:"Daily Concern"}),Object(T.jsx)(C,{size:"15",margin:"margin: 5px 10px;",weight:"500",to:!0,children:"Daily Writes"})]}),Object(T.jsx)(C,{size:"15",weight:"700",to:!0,margin:"margin-bottom: 10px;",children:"Contact Me"})]})},ie=Object(L.c)(F)(p||(p=Object(S.a)(["\n    a {\n        border-right: solid 0.5px black;\n        span {\n            color: white;\n        }\n    };\n    margin-top: 15px;\n    padding-left: 32px;\n    height: 50px;\n    align-items: center;\n    background-color: rgba(75,75,75, 0.75);\n"]))),ne=function(e){var t=e.setCategoryOn,i=e.categoryOn;return Object(T.jsx)(_,{us:"none",to:!0,style:{position:"fixed",top:k.isMobile?15:17,zIndex:1e3,right:k.isMobile?30:20},onClick:function(){return t(!i)},children:Object(T.jsx)(re,{})})},oe=Object(L.c)(_)(m||(m=Object(S.a)(["\n    display: inline-block;\n    cursor: pointer;\n\n    .bar1, .bar2, .bar3 {\n        width: 24px;\n        height: 2px;\n        background-color: white;\n        margin: 6px 0;\n        transition: 0.4s;\n    }\n\n    /* Rotate first bar */\n    .bar1 {\n        ",";\n    }\n\n    /* Fade out the second bar */\n    .bar2 {\n        ",";\n    }\n\n    /* Rotate last bar */\n    .bar3 {\n        ","\n    }\n"])),(function(e){return e.press?"-webkit-transform: rotate(-45deg) translate(-7px, 6px) ;\n        transform: rotate(-45deg) translate(-7px, 6px) ;":null}),(function(e){return e.press?"opacity: 0":null}),(function(e){return e.press?"\n        -webkit-transform: rotate(45deg) translate(-5px, -5px) ;\n        transform: rotate(45deg) translate(-5px, -5px) ;":null})),re=function(e){Object(Y.a)(e);var t=Object(v.useState)(!1),i=Object(M.a)(t,2),n=i[0],o=i[1];return Object(T.jsxs)(oe,{class:"container",press:n,onClick:function(){return o(!n)},children:[Object(T.jsx)("div",{class:"bar1"}),Object(T.jsx)("div",{class:"bar2"}),Object(T.jsx)("div",{class:"bar3"})]})},ce=function(e){e.categoryOn,e.setCategoryOn;var t=e.route,i=void 0===t?"Lab":t;return Object(T.jsxs)(I,{justify:"center",style:{position:"fixed",top:0,overflow:"hidden",width:"100vw",padding:20,paddingLeft:0,paddingRight:0,zIndex:100},bg:"black",zIndex:100,children:[Object(T.jsx)(F,{padding:"padding-left: ".concat(k.isMobile?20:30,"px"),justify:"space-between",align:"center",children:Object(T.jsx)("a",{href:"/",children:Object(T.jsx)(C,{us:"none",style:{fontFamily:"Geometos",color:"white",fontSize:25,fontWeight:"500"},children:"John Leo's Space"})})}),i&&Object(T.jsxs)(ie,{children:[Object(T.jsx)("a",{children:Object(T.jsx)(C,{margin:"margin-right: 20px;",weight:"500",size:"22",children:"Lab"})}),Object(T.jsx)("a",{children:Object(T.jsx)(C,{margin:"margin: 0px 20px;",weight:"500",size:"22",children:"A.I"})})]})]})},se=R/2,ae=B/10,le=function(e,t){return e?se+1.5*t:ae+1.5*t},he=function(e){var t=e.categoryOn,i=e.page,n=[{text:"#Blockchain",x:k.isMobile?le(!0,R/8):se+R/5,y:k.isMobile?le(!1,B/20):ae+B/20,size:180,left:!1,textsize:20,weight:"700",hovertextcolor:"white",hovercolor:"rgb(20,20,20,0.75)",textcolor:"white",bg:"rgba(75,75,75,0.75)"},{text:"#Ethereum",x:k.isMobile?le(!0,-R/8):se+R/8,y:k.isMobile?le(!1,-B/8):ae+B/8,size:150,textsize:20,weight:"700",hovertextcolor:"white",hovercolor:"rgb(20,20,20,0.75)",textcolor:"white",bg:"rgba(75,75,75,0.75)"},{text:"#Deep Learning",x:k.isMobile?le(!0,R/10):se+R/10,y:k.isMobile?le(!1,-B/10):ae-B/20,size:175,top:!1,textsize:20,weight:"700",hovertextcolor:"white",hovercolor:"rgb(20,20,20,0.75)",textcolor:"white",bg:"rgba(75,75,75,0.75)"},{text:"#CNN",x:k.isMobile?le(!0,-R/5):se-R/8,y:k.isMobile?le(!1,B/9):ae+B/9,size:180,top:!1,textsize:20,weight:"700",hovertextcolor:"white",hovercolor:"rgb(20,20,20,0.75)",textcolor:"white",bg:"rgba(75,75,75,0.75)"},{text:"#YOLO",x:k.isMobile?le(!0,-R/3):se-R/5,y:k.isMobile?le(!1,B/20):ae+B/8,size:130,top:!1,textsize:20,weight:"700",hovertextcolor:"white",hovercolor:"rgb(20,20,20,0.75)",textcolor:"white",bg:"rgba(75,75,75,0.75)"},{text:"#React.js",x:k.isMobile?le(!0,-R/2):se-R/3,y:k.isMobile?le(!1,B/12):ae+B/12,size:170,top:!1,textsize:20,weight:"700",hovertextcolor:"white",hovercolor:"rgb(20,20,20,0.75)",textcolor:"white",bg:"rgba(75,75,75,0.75)"},{text:"#RNN",x:k.isMobile?le(!0,-R/2):se-R/3.8,y:k.isMobile?le(!1,-B/12):ae-B/20,size:150,top:!1,textsize:20,weight:"700",hovertextcolor:"white",hovercolor:"rgb(20,20,20,0.75)",textcolor:"white",bg:"rgba(75,75,75,0.75)"},{text:"#Reinforcement Learning",x:k.isMobile?le(!0,0):se,y:k.isMobile?le(!1,B/7):ae+B/7,size:170,top:!1,textsize:20,weight:"700",hovertextcolor:"white",hovercolor:"rgb(20,20,20,0.75)",textcolor:"white",bg:"rgba(75,75,75,0.75)"},{text:"#Artificial Intelligence",x:k.isMobile?le(!0,-R/10):se-R/20,y:k.isMobile?le(!1,-B/25):ae-B/25,size:200,top:!1,textsize:20,weight:"700",hovertextcolor:"white",hovercolor:"rgb(20,20,20,0.75)",textcolor:"white",bg:"rgba(75,75,75,0.75)"},{text:"#GraphQL",x:k.isMobile?le(!0,-R/3):se-R/7,y:k.isMobile?le(!1,-B/17):ae-B/20,size:150,top:!1,textsize:20,weight:"700",hovertextcolor:"white",hovercolor:"rgb(20,20,20,0.75)",textcolor:"white",bg:"rgba(75,75,75,0.75)"}];return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(k.BrowserView,{children:Object(T.jsxs)(I,{width:"100%",height:"450px",children:[Object(T.jsx)(C,{weight:"700",size:"30",style:{position:"relative",left:R/20},children:"Contribute Map"}),Object(T.jsxs)(F,{align:"center",style:{left:t?"15%":"10.8%",position:"relative",width:"100%",transform:t&&"scale(0.8)",transition:"all 300ms"},children:[Object(T.jsx)(N,{page:2===i?1:0,circles:n,height:"100%"}),Object(T.jsx)(P,{style:{width:"25%",position:"relative",right:"15%",top:"25%"},src:"https://github-readme-stats.vercel.app/api/top-langs/?username=johnsteve108&theme=dark&langs_count=8)](https://github.com/johnsteve108/github-readme-stats)"})]})]})}),Object(T.jsxs)(k.MobileView,{children:[Object(T.jsx)(C,{weight:"700",size:"30",style:{position:"relative"},children:"Contribute Map"}),Object(T.jsxs)(I,{width:"100%",height:"700px",children:[Object(T.jsx)(_,{style:{padding:15,position:"relative",width:"100%",height:"55%",transform:"scale(0.6)"},children:Object(T.jsx)(N,{page:2===i?1:0,circles:n})}),Object(T.jsx)(P,{style:{width:"100%",position:"relative"},src:"https://github-readme-stats.vercel.app/api/top-langs/?username=johnsteve108&theme=dark&langs_count=8)](https://github.com/johnsteve108/github-readme-stats)"})]})]})]})},de=Object(L.c)(_)(u||(u=Object(S.a)(["\n    border-radius: 20px;\n    width: ",";\n    height: 180px;\n    background-color: rgb(23,23,23);\n    margin-right: 15px;\n    :hover {\n        cursor: pointer;\n        opacity: 0.85;\n    };\n    overflow: hidden;\n    position: relative;\n    margin-bottom: 20px;\n"])),k.isMobile?"100%":"300px"),ge=function(e){var t=e.title,i=e.description,n=e.imgsrc,o=e.date;return Object(T.jsxs)(de,{children:[Object(T.jsxs)(_,{padding:"padding: 10px;",style:{position:"absolute",width:"65%",right:0,top:0,height:"100%",flexDirection:"column"},bg:"rgba(23,23,23, 0.85)",children:[Object(T.jsx)(C,{lh:"25",weight:"700",size:"20",margin:"margin-bottom: 8px;",children:t}),Object(T.jsx)(C,{lh:"20",style:{maxHeight:80,overflow:"hidden"},weight:"400",children:i}),Object(T.jsx)(C,{weight:"300",color:"rgb(180,180,180)",margin:"margin-top: 8px;",children:o})]}),Object(T.jsx)(P,{src:n,width:"100%",height:"100%",of:"cover"})]})},be=function(e){return Object(Y.a)(e),Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(k.BrowserView,{children:Object(T.jsxs)(I,{padding:"padding: 0px 60px;",children:[Object(T.jsxs)(F,{align:"center",width:"100%",margin:"margin-bottom: 50px;",justify:"space-between",children:[Object(T.jsx)(C,{size:"30",weight:"700",children:"Recent Work"}),Object(T.jsx)(C,{size:"18",weight:"500",to:!0,us:"none",color:"rgb(180,180,180)",margin:"margin-right: 20px; padding-top: 10px;",children:"See All"})]}),Object(T.jsxs)(F,{align:"center",justify:"center",children:[Object(T.jsx)(ge,{title:"YOLOv3 implement",description:"Yolov3 is the real time object detection model that is the most fastest model ever since the deep learning introduced.",date:"2020-12-21",imgsrc:"https://cdn.pixabay.com/photo/2021/02/07/09/11/sunset-5990540_1280.jpg"}),Object(T.jsx)(ge,{title:"YOLOv3 implement",description:"Yolov3 is the real time object detection model that is the most fastest model ever since the deep learning introduced.",date:"2020-12-21",imgsrc:"https://cdn.pixabay.com/photo/2021/02/07/09/11/sunset-5990540_1280.jpg"}),Object(T.jsx)(ge,{title:"YOLOv3 implement",description:"Yolov3 is the real time object detection model that is the most fastest model ever since the deep learning introduced.",date:"2020-12-21",imgsrc:"https://cdn.pixabay.com/photo/2021/02/07/09/11/sunset-5990540_1280.jpg"}),Object(T.jsx)(ge,{title:"YOLOv3 implement",description:"Yolov3 is the real time object detection model that is the most fastest model ever since the deep learning introduced.",date:"2020-12-21",imgsrc:"https://cdn.pixabay.com/photo/2021/02/07/09/11/sunset-5990540_1280.jpg"})]}),Object(T.jsxs)(F,{align:"center",justify:"center",children:[Object(T.jsx)(ge,{title:"YOLOv3 implement",description:"Yolov3 is the real time object detection model that is the most fastest model ever since the deep learning introduced.",date:"2020-12-21",imgsrc:"https://cdn.pixabay.com/photo/2021/02/07/09/11/sunset-5990540_1280.jpg"}),Object(T.jsx)(ge,{title:"YOLOv3 implement",description:"Yolov3 is the real time object detection model that is the most fastest model ever since the deep learning introduced.",date:"2020-12-21",imgsrc:"https://cdn.pixabay.com/photo/2021/02/07/09/11/sunset-5990540_1280.jpg"}),Object(T.jsx)(ge,{title:"YOLOv3 implement",description:"Yolov3 is the real time object detection model that is the most fastest model ever since the deep learning introduced.",date:"2020-12-21",imgsrc:"https://cdn.pixabay.com/photo/2021/02/07/09/11/sunset-5990540_1280.jpg"}),Object(T.jsx)(ge,{title:"YOLOv3 implement",description:"Yolov3 is the real time object detection model that is the most fastest model ever since the deep learning introduced.",date:"2020-12-21",imgsrc:"https://cdn.pixabay.com/photo/2021/02/07/09/11/sunset-5990540_1280.jpg"})]}),Object(T.jsxs)(F,{align:"center",justify:"center",children:[Object(T.jsx)(ge,{title:"YOLOv3 implement",description:"Yolov3 is the real time object detection model that is the most fastest model ever since the deep learning introduced.",date:"2020-12-21",imgsrc:"https://cdn.pixabay.com/photo/2021/02/07/09/11/sunset-5990540_1280.jpg"}),Object(T.jsx)(ge,{title:"YOLOv3 implement",description:"Yolov3 is the real time object detection model that is the most fastest model ever since the deep learning introduced.",date:"2020-12-21",imgsrc:"https://cdn.pixabay.com/photo/2021/02/07/09/11/sunset-5990540_1280.jpg"}),Object(T.jsx)(ge,{title:"YOLOv3 implement",description:"Yolov3 is the real time object detection model that is the most fastest model ever since the deep learning introduced.",date:"2020-12-21",imgsrc:"https://cdn.pixabay.com/photo/2021/02/07/09/11/sunset-5990540_1280.jpg"}),Object(T.jsx)(ge,{title:"YOLOv3 implement",description:"Yolov3 is the real time object detection model that is the most fastest model ever since the deep learning introduced.",date:"2020-12-21",imgsrc:"https://cdn.pixabay.com/photo/2021/02/07/09/11/sunset-5990540_1280.jpg"})]})]})}),Object(T.jsxs)(k.MobileView,{children:[Object(T.jsxs)(F,{align:"center",width:"100%",justify:"space-between",margin:"margin-bottom: 30px;",children:[Object(T.jsx)(C,{size:"30",weight:"700",children:"Recent Work"}),Object(T.jsx)(C,{size:"18",weight:"500",to:!0,us:"none",color:"rgb(180,180,180)",margin:"margin-right: 20px;",children:"See All"})]}),Object(T.jsx)(ge,{title:"YOLOv3 implement",description:"Yolov3 is the real time object detection model that is the most fastest model ever since the deep learning introduced.",date:"2020-12-21",imgsrc:"https://cdn.pixabay.com/photo/2021/02/07/09/11/sunset-5990540_1280.jpg"}),Object(T.jsx)(ge,{title:"YOLOv3 implement",description:"Yolov3 is the real time object detection model that is the most fastest model ever since the deep learning introduced.",date:"2020-12-21",imgsrc:"https://cdn.pixabay.com/photo/2021/02/07/09/11/sunset-5990540_1280.jpg"}),Object(T.jsx)(ge,{title:"YOLOv3 implement",description:"Yolov3 is the real time object detection model that is the most fastest model ever since the deep learning introduced.",date:"2020-12-21",imgsrc:"https://cdn.pixabay.com/photo/2021/02/07/09/11/sunset-5990540_1280.jpg"}),Object(T.jsx)(ge,{title:"YOLOv3 implement",description:"Yolov3 is the real time object detection model that is the most fastest model ever since the deep learning introduced.",date:"2020-12-21",imgsrc:"https://cdn.pixabay.com/photo/2021/02/07/09/11/sunset-5990540_1280.jpg"}),Object(T.jsx)(ge,{title:"YOLOv3 implement",description:"Yolov3 is the real time object detection model that is the most fastest model ever since the deep learning introduced.",date:"2020-12-21",imgsrc:"https://cdn.pixabay.com/photo/2021/02/07/09/11/sunset-5990540_1280.jpg"})]})]})},xe=function(e){return Object(Y.a)(e),Object(T.jsx)(T.Fragment,{})},je=Object(L.c)(_)(O||(O=Object(S.a)(["\n    height: 100vh;\n    width: 100vw;\n    top: 0;\n    position: fixed;\n    overflow: hidden;\n    overflow-y: scroll;\n    left: 0;\n"]))),pe=function(e){var t=e.page,i=e.categoryOn,n=e.setCategoryOn;return Object(T.jsxs)(je,{children:[Object(T.jsx)(ce,{categoryOn:i,setCategoryOn:n}),Object(T.jsxs)(I,{padding:"padding: ".concat(k.isMobile?15:0,"px; padding-top: 50px;"),width:"100%",margin:"margin-top: 80px;",height:B+"px",children:[Object(T.jsx)(he,{categoryOn:i,page:t}),Object(T.jsx)(be,{}),Object(T.jsx)(xe,{})]})]})},me=function(e){var t=e.page,i=(e.setPage,Object(v.useState)(!1)),n=Object(M.a)(i,2),o=n[0],r=n[1],c=Object(v.useState)(0),s=Object(M.a)(c,2),a=s[0],l=s[1];return Object(v.useEffect)((function(){2===t&&setTimeout((function(){l(1)}),300)})),Object(T.jsxs)(F,{style:{width:"100vw",height:"100vh",overflow:"hidden",opacity:a,transition:"opacity 800ms ease-in-out"},children:[Object(T.jsx)(pe,{page:t,categoryOn:o,setCategoryOn:r}),Object(T.jsx)(te,{categoryOn:o,setCategoryOn:r}),Object(T.jsx)(ne,{categoryOn:o,setCategoryOn:r})]})},ue=i(15),Oe=Object(L.a)(f||(f=Object(S.a)(["\n    ",";\n    @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700');\n    * {\n        box-sizing: border-box;\n    }\n    @font-face {\n        font-family: 'Geometos';\n        font-style: normal;\n        font-weight: normal;\n        src: local('Geometos'), url('./Geometos.ttf') format('ttf');\n    }\n    body {\n        font-family:-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, 'telegrafico';\n        .mapboxgl-ctrl-bottom-left {\n            opacity: 0.7;\n        };\n        color: white;\n        background-color: rgb(3,3,3);\n    }\n    a {\n        text-decoration: none;\n        color: black;\n    }\n    input {\n        border: 0;\n    }\n    input:focus {\n        outline: none;\n    }\n    .mapboxgl-canvas {\n        outline: none;\n    }\n    ::-webkit-scrollbar {\n        width: 0px;\n    }\n    ::-webkit-scrollbar-track {\n        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); \n        border-radius: 10px;\n    }\n    ::-webkit-scrollbar-thumb {\n        border-radius: 10px;\n        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); \n    }\n"])),ue.a),fe=function(e){Object(Y.a)(e);var t=Object(v.useState)(0),i=Object(M.a)(t,2),n=i[0],o=i[1];return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(Oe,{}),Object(T.jsxs)("div",{style:{width:"100vw",height:"100vh",overflow:"hidden",overflowY:"scroll"},children:[Object(T.jsx)($,{page:n,setPage:o}),2===n&&Object(T.jsx)(me,{page:n,setPage:o})]})]})};z.a.render(Object(T.jsx)(w.a.StrictMode,{children:Object(T.jsx)(fe,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.1e0fd6ae.chunk.js.map