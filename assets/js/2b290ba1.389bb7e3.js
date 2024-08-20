"use strict";(self.webpackChunkhelp=self.webpackChunkhelp||[]).push([[7807],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=o,f=p["".concat(l,".").concat(d)]||p[d]||h[d]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},45:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:11},i="FAQ",s={unversionedId:"ChatGPT/advanced-setup/faq",id:"ChatGPT/advanced-setup/faq",title:"FAQ",description:"Something went wrong",source:"@site/docs/ChatGPT/advanced-setup/faq.mdx",sourceDirName:"ChatGPT/advanced-setup",slug:"/ChatGPT/advanced-setup/faq",permalink:"/docs/ChatGPT/advanced-setup/faq",draft:!1,editUrl:"https://github.com/aipowerorg/aipowerorg.github.io/edit/main/docs/ChatGPT/advanced-setup/faq.mdx",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Chat Logs",permalink:"/docs/ChatGPT/advanced-setup/logs"},next:{title:"AI Training",permalink:"/docs/embeddings"}},l={},c=[{value:"Something went wrong",id:"something-went-wrong",level:2},{value:"Nonce verification failed",id:"nonce-verification-failed",level:2}],u={toc:c},p="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"faq"},"FAQ"),(0,o.kt)("h2",{id:"something-went-wrong"},"Something went wrong"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Question"),":"),(0,o.kt)("p",null,'I\'ve installed the ChatGPT plugin on a WordPress website, but the frontend users encounter a "Something Went Wrong" message. However, the logs indicate that a complete response was generated for that query. How can I resolve this problem?'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Answer"),":"),(0,o.kt)("p",null,"If you're using Nginx as your web server, please add the following lines to your Nginx configuration file:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"fastcgi_buffers 16 16k;")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"fastcgi_buffer_size 32k;")),(0,o.kt)("p",null,"Here are a couple of guides to assist you:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.geekbits.io/nginx-configuration-guide/"},"How to edit Nginx configuration file")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://help.dreamhost.com/hc/en-us/articles/216455077-Nginx-configuration-file-locations"},"How to find the Nginx configuration file location")),(0,o.kt)("h2",{id:"nonce-verification-failed"},"Nonce verification failed"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Question"),":"),(0,o.kt)("p",null,'Why i am getting "Nonce verification failed" error in the chat bot?'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Answer"),":"),(0,o.kt)("p",null,"The invalid nonce error occurs when WordPress is unable to verify the security token, this can happen due to couple of reasons:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The chat bot is kept open for hours and then submitted which will invalidate the security token and won\u2019t let the submission to pass."),(0,o.kt)("li",{parentName:"ol"},"The user open the chat bot, then in another page they log in or log out of the site and then send a message before refreshing the page that has the chat bot. Logging in or logging out would also invalidate the wordpress security token which would also cause this message."),(0,o.kt)("li",{parentName:"ol"},"Your site is configured to have a very small lifespan for the security token which would make make users that don\u2019t submit their messages fast enough to experience this message."),(0,o.kt)("li",{parentName:"ol"},"You have a cache plugin that is caching the whole page for several days (including the js variables) which would cause the plugin to use an outdated nonce.")),(0,o.kt)("p",null,"So to fix it you could try:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Clear your cache. If you have a cache plugin please make sure to clear your cache from wp-admin dashboard. Disable any cache plugin that you have and see if the error goes away, it this is the case then the problem is that the cache plugin is also cacheing the security token. This means that whenever you update our plugin, you need to clear your cache at the backend as well."),(0,o.kt)("li",{parentName:"ul"},"Increase the life span of the nonces, you can add this filter in the wp-config file of your site apply_filters( \u2018nonce_life\u2019, $day_in_seconds ); replace $day_in_seconds with a number which should be the number of seconds that you want it to last (so for example 172800 would last 2 days).")),(0,o.kt)("p",null,"Please note that nonce errors do not originate from our plugin. They are a security standard by WordPress. "),(0,o.kt)("p",null,"Here are some more suggestions;"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://blog.hubspot.com/website/nonce-error"},"https://blog.hubspot.com/website/nonce-error")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://developer.wordpress.org/apis/security/nonces/#why-use-a-nonce"},"https://developer.wordpress.org/apis/security/nonces/#why-use-a-nonce")))}h.isMDXComponent=!0}}]);