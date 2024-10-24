"use strict";(self.webpackChunkhelp=self.webpackChunkhelp||[]).push([[6154],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),h=o,d=c["".concat(l,".").concat(h)]||c[h]||m[h]||a;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7214:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a=n.p+"assets/images/token-508cd7d6cdf770c56df207e8af80cc22.png",i={sidebar_position:7},s="Token Management",l={unversionedId:"Chatbot/token-handling",id:"Chatbot/token-handling",title:"Token Management",description:"Our plugin provides a robust token handling feature that allows you to control and limit the usage of the chat bots based on user roles and registration status.",source:"@site/docs/Chatbot/token-handling.mdx",sourceDirName:"Chatbot",slug:"/Chatbot/token-handling",permalink:"/docs/Chatbot/token-handling",draft:!1,editUrl:"https://github.com/aipowerorg/aipowerorg.github.io/edit/main/docs/Chatbot/token-handling.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Security",permalink:"/docs/Chatbot/security"},next:{title:"FAQ",permalink:"/docs/Chatbot/faq"}},u={},p=[{value:"Token Sale",id:"token-sale",level:2}],c={toc:p},m="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"token-management"},"Token Management"),(0,o.kt)("p",null,"Our plugin provides a robust token handling feature that allows you to control and limit the usage of the chat bots based on ",(0,o.kt)("strong",{parentName:"p"},"user roles")," and ",(0,o.kt)("strong",{parentName:"p"},"registration status"),"."),(0,o.kt)("p",null,"This can be found under the ",(0,o.kt)("strong",{parentName:"p"},"Token Handling")," tab in the ",(0,o.kt)("strong",{parentName:"p"},"Settings"),"."),(0,o.kt)("img",{src:a,width:"300"}),(0,o.kt)("p",null,"Here's a step-by-step guide on how to use this feature."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Limit Registered User"),": This setting allows you to decide whether to place a limit on registered users. To enable this feature, check the corresponding box. If you don't want to limit registered users, leave the checkbox unmarked."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Token Limit for Registered Users"),": This is where you define token limit for registered users. Enter the maximum amount you want each registered user to be able to spend on."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Role-based Limit"),": This feature allows you to set individual token limits for ",(0,o.kt)("strong",{parentName:"li"},"different user roles")," on your Wordpress site. Clicking on ",(0,o.kt)("strong",{parentName:"li"},"Set Limit")," will open a modal window displaying all the user roles in your Wordpress site. Here, you can assign a specific limit for each role."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Limit Non-Registered User"),": This setting is similar to ",(0,o.kt)("strong",{parentName:"li"},"Limit Registered User"),", but it applies to non-registered users. To enable this feature, check the corresponding box. If you don't want to limit non-registered users, leave the checkbox unmarked."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Token Limit for Non-Registered Users"),": This setting allows you to define token limit for non-registered users. Enter the maximum amount you want each non-registered user to be able to spend on."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Notice"),": Here, you can customize the message that users will see when they reach their limit. For example, ",(0,o.kt)("em",{parentName:"li"},'"You have reached your limit"'),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Reset Limit"),": This setting defines the interval at which the limit will reset. You can choose from ",(0,o.kt)("strong",{parentName:"li"},"Never"),", ",(0,o.kt)("strong",{parentName:"li"},"1 day"),", ",(0,o.kt)("strong",{parentName:"li"},"3 days"),", ",(0,o.kt)("strong",{parentName:"li"},"1 week"),", ",(0,o.kt)("strong",{parentName:"li"},"2 weeks"),", ",(0,o.kt)("strong",{parentName:"li"},"1 month"),", ",(0,o.kt)("strong",{parentName:"li"},"2 months"),", ",(0,o.kt)("strong",{parentName:"li"},"3 months")," or ",(0,o.kt)("strong",{parentName:"li"},"6 months"),". Selecting ",(0,o.kt)("strong",{parentName:"li"},"Never")," will mean that the limit does not reset, and users will have to wait until the next reset interval if they reach their limit.")),(0,o.kt)("p",null,"Remember to click ",(0,o.kt)("strong",{parentName:"p"},"Save")," once you're done adjusting these settings to ensure all changes are applied."),(0,o.kt)("p",null,"This feature gives you great flexibility in managing usage and costs associated with the chat bots on your site."),(0,o.kt)("h2",{id:"token-sale"},"Token Sale"),(0,o.kt)("p",null,"You can charge your users for their use of your chat bots."),(0,o.kt)("p",null,"Our integration with WooCommerce allows you to sell tokens, which users can purchase and utilize to access and enjoy the chat bot features on your site."),(0,o.kt)("p",null,"Dive into a new revenue stream while providing value to your users."),(0,o.kt)("p",null,"Learn more about it here: ",(0,o.kt)("a",{parentName:"p",href:"/docs/user-management-token-sale"},"User Account Management & Token Sale")))}h.isMDXComponent=!0}}]);