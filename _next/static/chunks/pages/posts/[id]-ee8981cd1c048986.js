(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[997],{5166:(t,e,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[id]",function(){return a(60)}])},2966:(t,e,a)=>{"use strict";a.d(e,{A:()=>_});var s=a(4848),n=a(9063),c=a.n(n),l=a(1106),i=a.n(l),o=a(6540),r=a(6715);function _(t){let{posts:e=[],children:a}=t,n=(0,r.useRouter)(),[l,_]=(0,o.useState)({}),[u,d]=(0,o.useState)(!1);(0,o.useEffect)(()=>{let t=localStorage.getItem("expandedItems");t&&_(JSON.parse(t))},[]),(0,o.useEffect)(()=>{localStorage.setItem("expandedItems",JSON.stringify(l))},[l]);let[h,m]=(0,o.useState)([{title:"首页",path:"/"}]);(0,o.useEffect)(()=>{let t=[{title:"首页",path:"/"}];e.forEach(e=>{var a;let s={title:e.title,path:"/posts/".concat(e.id)};(null===(a=e.h2Titles)||void 0===a?void 0:a.length)>0&&(s.subItems=e.h2Titles.map(t=>({title:t.title,path:"/posts/".concat(e.id,"#").concat(t.id)}))),t.push(s)}),m(t)},[e]);let p=t=>{_(e=>({...e,[t]:!e[t]}))},x=t=>"/"===t?"/"===n.pathname:n.asPath.startsWith(t);return(0,s.jsxs)("div",{className:c().container,children:[(0,s.jsx)("button",{className:c().menuButton,onClick:()=>{d(!u)},"aria-label":"Toggle menu",children:(0,s.jsx)("span",{className:c().menuIcon})}),u&&(0,s.jsx)("div",{className:"".concat(c().overlay," ").concat(c().active),onClick:()=>d(!1)}),(0,s.jsx)("aside",{className:"".concat(c().sidebar," ").concat(u?c().sidebarOpen:""),children:(0,s.jsxs)("nav",{children:[(0,s.jsx)("h2",{children:"笔记导航"}),(0,s.jsx)("ul",{children:h.map(t=>(0,s.jsxs)("li",{children:[(0,s.jsxs)("div",{className:"".concat(c().navItem," ").concat(t.subItems?c().hasChildren:""),onClick:()=>t.subItems&&p(t.path),children:[(0,s.jsx)(i(),{href:t.path,className:"".concat(c().link," ").concat(x(t.path)?c().active:""),onClick:t=>{t.stopPropagation(),d(!1)},children:t.title}),t.subItems&&(0,s.jsx)("span",{className:"".concat(c().arrow," ").concat(l[t.path]?c().expanded:"")})]}),t.subItems&&l[t.path]&&(0,s.jsx)("ul",{className:c().subNav,children:t.subItems.map(t=>{let e=decodeURIComponent(n.asPath)===t.path;return(0,s.jsx)("li",{children:(0,s.jsx)("p",{onClick:e=>{e.preventDefault(),n.push(t.path),d(!1)},className:"".concat(c().link," ").concat(e?c().active:""),children:t.title})},t.path)})})]},t.path))})]})}),(0,s.jsx)("main",{className:c().main,children:a})]})}},60:(t,e,a)=>{"use strict";a.r(e),a.d(e,{__N_SSG:()=>i,default:()=>o});var s=a(4848),n=a(2966),c=a(2297),l=a.n(c),i=!0;function o(t){let{postData:e,allPostsData:a}=t;return e?(0,s.jsxs)(n.A,{posts:a,children:[(0,s.jsxs)("article",{className:l().article,children:[(0,s.jsxs)("h1",{children:[" ",e.title," "]})," ",(0,s.jsxs)("div",{className:l().meta,children:[(0,s.jsxs)("time",{children:[" ",e.date," "]})," "]})," ",(0,s.jsx)("div",{className:l().content,dangerouslySetInnerHTML:{__html:e.contentHtml}})," "]})," "]}):(0,s.jsx)("div",{children:" 文章加载失败 "})}},9063:t=>{t.exports={container:"Layout_container__m5jTj",menuButton:"Layout_menuButton__e90nz",menuIcon:"Layout_menuIcon__7vs7l",sidebar:"Layout_sidebar__x3OPI",link:"Layout_link__nT2lh",active:"Layout_active___S4if",main:"Layout_main__bVVJR",navItem:"Layout_navItem__0Yvho",hasChildren:"Layout_hasChildren__U1nvC",arrow:"Layout_arrow__Bng9V",expanded:"Layout_expanded__EpSkz",subNav:"Layout_subNav__sjkqq",overlay:"Layout_overlay__aeEr9",sidebarOpen:"Layout_sidebarOpen__ASrQt"}},2297:t=>{t.exports={article:"Post_article__hxT42",meta:"Post_meta__s01mg",content:"Post_content__bOW5d"}}},t=>{var e=e=>t(t.s=e);t.O(0,[392,636,593,792],()=>e(5166)),_N_E=t.O()}]);