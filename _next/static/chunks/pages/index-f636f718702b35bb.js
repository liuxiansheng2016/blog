(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[332],{7276:(e,t,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(1731)}])},2966:(e,t,a)=>{"use strict";a.d(t,{A:()=>h});var s=a(4848),n=a(9063),i=a.n(n),c=a(1106),l=a.n(c),r=a(6540),o=a(6715);function h(e){let{posts:t=[],children:a}=e,n=(0,o.useRouter)(),[c,h]=(0,r.useState)({});(0,r.useEffect)(()=>{let e=localStorage.getItem("expandedItems");e&&h(JSON.parse(e))},[]),(0,r.useEffect)(()=>{localStorage.setItem("expandedItems",JSON.stringify(c))},[c]);let[d,_]=(0,r.useState)([{title:"首页",path:"/"}]);(0,r.useEffect)(()=>{let e=[{title:"首页",path:"/"}];t.forEach(t=>{var a;let s={title:t.title,path:"/posts/".concat(t.id)};(null===(a=t.h2Titles)||void 0===a?void 0:a.length)>0&&(s.subItems=t.h2Titles.map(e=>({title:e.title,path:"/posts/".concat(t.id,"#").concat(e.id)}))),e.push(s)}),_(e)},[t]);let u=e=>{h(t=>({...t,[e]:!t[e]}))},p=e=>"/"===e?"/"===n.pathname:n.asPath.startsWith(e);return(0,s.jsxs)("div",{className:i().container,children:[(0,s.jsx)("aside",{className:i().sidebar,children:(0,s.jsxs)("nav",{children:[(0,s.jsx)("h2",{children:"博客导航"}),(0,s.jsx)("ul",{children:d.map(e=>(0,s.jsxs)("li",{children:[(0,s.jsxs)("div",{className:"".concat(i().navItem," ").concat(e.subItems?i().hasChildren:""),onClick:()=>e.subItems&&u(e.path),children:[(0,s.jsx)(l(),{href:e.path,className:"".concat(i().link," ").concat(p(e.path)?i().active:""),onClick:e=>e.stopPropagation(),children:e.title}),e.subItems&&(0,s.jsx)("span",{className:"".concat(i().arrow," ").concat(c[e.path]?i().expanded:"")})]}),e.subItems&&c[e.path]&&(0,s.jsx)("ul",{className:i().subNav,children:e.subItems.map(e=>{let t=decodeURIComponent(n.asPath)===e.path;return(0,s.jsx)("li",{children:(0,s.jsx)("p",{onClick:t=>{t.preventDefault(),n.push(e.path)},className:"".concat(i().link," ").concat(t?i().active:""),children:e.title})},e.path)})})]},e.path))})]})}),(0,s.jsx)("main",{className:i().main,children:a})]})}},1731:(e,t,a)=>{"use strict";a.r(t),a.d(t,{__N_SSG:()=>_,default:()=>u});var s=a(4848),n=a(2966),i=a(1106),c=a.n(i),l=a(7035),r=a.n(l);function o(e){let{text:t}=e;return(0,s.jsx)("div",{className:r().description,dangerouslySetInnerHTML:{__html:t}})}var h=a(9159),d=a.n(h),_=!0;function u(e){let{allPostsData:t}=e;return(0,s.jsxs)(n.A,{posts:t,children:[(0,s.jsx)("h1",{children:" 这是我的学习笔记， 仅作参考 "})," ",(0,s.jsxs)("div",{children:[(0,s.jsx)("h2",{children:" 最新笔记 "})," ",t.map(e=>{let{id:t,date:a,title:n,description:i}=e;return(0,s.jsxs)("article",{className:d().article,children:[(0,s.jsxs)("h3",{children:[(0,s.jsxs)(c(),{href:"/posts/".concat(t),children:[" ",n," "]})," "]})," ",(0,s.jsxs)("time",{dateTime:a,children:[" ",a," "]})," ",(0,s.jsx)(o,{text:i})," "]},t)})," "]})," "]})}},7035:e=>{e.exports={description:"Description_description__L1dr5"}},9063:e=>{e.exports={container:"Layout_container__m5jTj",sidebar:"Layout_sidebar__x3OPI",link:"Layout_link__nT2lh",active:"Layout_active___S4if",main:"Layout_main__bVVJR",navItem:"Layout_navItem__0Yvho",hasChildren:"Layout_hasChildren__U1nvC",arrow:"Layout_arrow__Bng9V",expanded:"Layout_expanded__EpSkz",subNav:"Layout_subNav__sjkqq"}},9159:e=>{e.exports={article:"index_article__5qiRx"}}},e=>{var t=t=>e(e.s=t);e.O(0,[392,636,593,792],()=>t(7276)),_N_E=e.O()}]);