"use strict";(self.webpackChunkhelp=self.webpackChunkhelp||[]).push([[6162],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7229:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var r=n(7462),o=(n(7294),n(3905));const a=n.p+"assets/images/add-qa-c859233eb229a1d1b8ac649f8592b55b.png",i=n.p+"assets/images/qa-sample-833e1aaf4b1e0097b45105e234806e4e.png",s={sidebar_position:9},l="Questions and Answers",p={unversionedId:"content-writer/express-mode/qa",id:"content-writer/express-mode/qa",title:"Questions and Answers",description:"The Questions and Answers feature is a feature that, when enabled, adds questions and answers related to the title of your content.",source:"@site/docs/content-writer/express-mode/qa.mdx",sourceDirName:"content-writer/express-mode",slug:"/content-writer/express-mode/qa",permalink:"/docs/content-writer/express-mode/qa",draft:!1,editUrl:"https://github.com/aipowerorg/aipowerorg.github.io/edit/main/docs/content-writer/express-mode/qa.mdx",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Links",permalink:"/docs/content-writer/express-mode/links"},next:{title:"Table of Contents (ToC)",permalink:"/docs/content-writer/express-mode/table-of-contents"}},c={},d=[{value:"Enable or Disable Q&amp;A",id:"enable-or-disable-qa",level:2}],u={toc:d},m="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"questions-and-answers"},"Questions and Answers"),(0,o.kt)("p",null,"The Questions and Answers feature is a feature that, when enabled, adds questions and answers related to the title of your content."),(0,o.kt)("p",null,"This helps to provide more in-depth information and address common queries that readers may have about the topic."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"This is a Pro feature and requires an upgrade to access.")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Number of Q&A is dependent on selected ",(0,o.kt)("strong",{parentName:"p"},"Number of Headings"),". For example, if your number of headings value is 5, then total of 5 Q&A will be generated.")),(0,o.kt)("h2",{id:"enable-or-disable-qa"},"Enable or Disable Q&A"),(0,o.kt)("p",null,"To enable or disable the Questions and Answers feature in your content:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Go to ",(0,o.kt)("strong",{parentName:"li"},"Settings - Content")," in the plugin menu and find the ",(0,o.kt)("strong",{parentName:"li"},"Questions and Answers")," section."),(0,o.kt)("li",{parentName:"ul"},"Enable or disable the ",(0,o.kt)("strong",{parentName:"li"},"Add Q&A")," feature by checking or unchecking the box next to it."),(0,o.kt)("li",{parentName:"ul"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Save")," to apply your choice.")),(0,o.kt)("img",{src:a,width:"700"}),(0,o.kt)("p",null,"From now on, whenever you generate content, questions and answers related to the title will be inserted at the end of your content if the option is enabled, or they won't be included if the option is disabled."),(0,o.kt)("img",{src:i,width:"700"}))}f.isMDXComponent=!0}}]);