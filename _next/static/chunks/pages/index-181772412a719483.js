(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[332],{7276:(e,t,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(1731)}])},2966:(e,t,a)=>{"use strict";a.d(t,{A:()=>u});var s=a(4848),n=a(9063),c=a.n(n),i=a(1106),l=a.n(i),r=a(6540),o=a(6715);function u(e){let{posts:t=[],children:a}=e,n=(0,o.useRouter)(),[i,u]=(0,r.useState)({}),[_,d]=(0,r.useState)(!1);(0,r.useEffect)(()=>{let e=localStorage.getItem("expandedItems");e&&u(JSON.parse(e))},[]),(0,r.useEffect)(()=>{localStorage.setItem("expandedItems",JSON.stringify(i))},[i]);let[h,p]=(0,r.useState)([{title:"首页",path:"/"}]);(0,r.useEffect)(()=>{let e=[{title:"首页",path:"/"}];t.forEach(t=>{var a;let s={title:t.title,path:"/posts/".concat(t.id)};(null===(a=t.h2Titles)||void 0===a?void 0:a.length)>0&&(s.subItems=t.h2Titles.map(e=>({title:e.title,path:"/posts/".concat(t.id,"#").concat(e.id)}))),e.push(s)}),p(e)},[t]);let m=e=>{u(t=>({...t,[e]:!t[e]}))},x=e=>"/"===e?"/"===n.pathname:n.asPath.startsWith(e);return(0,s.jsxs)("div",{className:c().container,children:[(0,s.jsx)("button",{className:c().menuButton,onClick:()=>{d(!_)},"aria-label":"Toggle menu",children:(0,s.jsx)("span",{className:c().menuIcon})}),_&&(0,s.jsx)("div",{className:"".concat(c().overlay," ").concat(c().active),onClick:()=>d(!1)}),(0,s.jsx)("aside",{className:"".concat(c().sidebar," ").concat(_?c().sidebarOpen:""),children:(0,s.jsxs)("nav",{children:[(0,s.jsx)("h2",{children:"笔记导航"}),(0,s.jsx)("ul",{children:h.map(e=>(0,s.jsxs)("li",{children:[(0,s.jsxs)("div",{className:"".concat(c().navItem," ").concat(e.subItems?c().hasChildren:""),onClick:()=>e.subItems&&m(e.path),children:[(0,s.jsx)(l(),{href:e.path,className:"".concat(c().link," ").concat(x(e.path)?c().active:""),onClick:e=>{e.stopPropagation(),d(!1)},children:e.title}),e.subItems&&(0,s.jsx)("span",{className:"".concat(c().arrow," ").concat(i[e.path]?c().expanded:"")})]}),e.subItems&&i[e.path]&&(0,s.jsx)("ul",{className:c().subNav,children:e.subItems.map(e=>{let t=decodeURIComponent(n.asPath)===e.path;return(0,s.jsx)("li",{children:(0,s.jsx)("p",{onClick:t=>{t.preventDefault(),n.push(e.path),d(!1)},className:"".concat(c().link," ").concat(t?c().active:""),children:e.title})},e.path)})})]},e.path))})]})}),(0,s.jsx)("main",{className:c().main,children:a})]})}},1731:(e,t,a)=>{"use strict";a.r(t),a.d(t,{__N_SSG:()=>d,default:()=>h});var s=a(4848),n=a(2966),c=a(1106),i=a.n(c),l=a(7035),r=a.n(l);function o(e){let{text:t}=e;return(0,s.jsx)("div",{className:r().description,dangerouslySetInnerHTML:{__html:t}})}var u=a(9159),_=a.n(u),d=!0;function h(e){let{allPostsData:t}=e;return(0,s.jsxs)(n.A,{posts:t,children:[(0,s.jsx)("h1",{children:" 这是我的学习笔记，仅作参考，因为还有一些代码截图没有导入进来，所以内容并不完整 "})," ",(0,s.jsxs)("div",{children:[(0,s.jsx)("h2",{children:" 最新笔记 "})," ",t.map(e=>{let{id:t,date:a,title:n,description:c}=e;return(0,s.jsxs)("article",{className:_().article,children:[(0,s.jsxs)("h3",{children:[(0,s.jsxs)(i(),{href:"/posts/".concat(t),children:[" ",n," "]})," "]})," ",(0,s.jsxs)("time",{dateTime:a,children:[" ",a," "]})," ",(0,s.jsx)(o,{text:c})," "]},t)})," "]})," "]})}},7035:e=>{e.exports={description:"Description_description__L1dr5"}},9063:e=>{e.exports={container:"Layout_container__m5jTj",menuButton:"Layout_menuButton__e90nz",menuIcon:"Layout_menuIcon__7vs7l",sidebar:"Layout_sidebar__x3OPI",link:"Layout_link__nT2lh",active:"Layout_active___S4if",main:"Layout_main__bVVJR",navItem:"Layout_navItem__0Yvho",hasChildren:"Layout_hasChildren__U1nvC",arrow:"Layout_arrow__Bng9V",expanded:"Layout_expanded__EpSkz",subNav:"Layout_subNav__sjkqq",overlay:"Layout_overlay__aeEr9",sidebarOpen:"Layout_sidebarOpen__ASrQt"}},9159:e=>{e.exports={article:"index_article__5qiRx"}}},e=>{var t=t=>e(e.s=t);e.O(0,[392,636,593,792],()=>t(7276)),_N_E=e.O()}]);