"use strict";(self.webpackChunkhelp=self.webpackChunkhelp||[]).push([[8892],{8970:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"Chatbot/faq","title":"FAQ","description":"Something went wrong","source":"@site/docs/Chatbot/faq.mdx","sourceDirName":"Chatbot","slug":"/Chatbot/faq","permalink":"/docs/Chatbot/faq","draft":false,"unlisted":false,"editUrl":"https://github.com/aipowerorg/aipowerorg.github.io/edit/main/docs/Chatbot/faq.mdx","tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"sidebar_position":9},"sidebar":"tutorialSidebar","previous":{"title":"Token Management","permalink":"/docs/Chatbot/token-management"},"next":{"title":"AI Training","permalink":"/docs/embeddings"}}');var i=t(4848),s=t(8453);const r={sidebar_position:9},a="FAQ",h={},c=[{value:"Something went wrong",id:"something-went-wrong",level:2},{value:"Nonce verification failed",id:"nonce-verification-failed",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"faq",children:"FAQ"})}),"\n",(0,i.jsx)(n.h2,{id:"something-went-wrong",children:"Something went wrong"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Question"}),":"]}),"\n",(0,i.jsx)(n.p,{children:'I\'ve installed the AI Power plugin on a WordPress website, but the frontend users encounter a "Something Went Wrong" message. However, the logs indicate that a complete response was generated for that query. How can I resolve this problem?'}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Answer"}),":"]}),"\n",(0,i.jsx)(n.p,{children:"If you're using Nginx as your web server, please add the following lines to your Nginx configuration file:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"fastcgi_buffers 16 16k;"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"fastcgi_buffer_size 32k;"})}),"\n",(0,i.jsx)(n.p,{children:"Here are a couple of guides to assist you:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://www.geekbits.io/nginx-configuration-guide/",children:"How to edit Nginx configuration file"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://help.dreamhost.com/hc/en-us/articles/216455077-Nginx-configuration-file-locations",children:"How to find the Nginx configuration file location"})}),"\n",(0,i.jsx)(n.h2,{id:"nonce-verification-failed",children:"Nonce verification failed"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Question"}),":"]}),"\n",(0,i.jsx)(n.p,{children:'Why i am getting "Nonce verification failed" error in the chat bot?'}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Answer"}),":"]}),"\n",(0,i.jsx)(n.p,{children:"The invalid nonce error occurs when WordPress is unable to verify the security token, this can happen due to couple of reasons:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"The chat bot is kept open for hours and then submitted which will invalidate the security token and won\u2019t let the submission to pass."}),"\n",(0,i.jsx)(n.li,{children:"The user open the chat bot, then in another page they log in or log out of the site and then send a message before refreshing the page that has the chat bot. Logging in or logging out would also invalidate the wordpress security token which would also cause this message."}),"\n",(0,i.jsx)(n.li,{children:"Your site is configured to have a very small lifespan for the security token which would make make users that don\u2019t submit their messages fast enough to experience this message."}),"\n",(0,i.jsx)(n.li,{children:"You have a cache plugin that is caching the whole page for several days (including the js variables) which would cause the plugin to use an outdated nonce."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"So to fix it you could try:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Clear your cache. If you have a cache plugin please make sure to clear your cache from wp-admin dashboard. Disable any cache plugin that you have and see if the error goes away, it this is the case then the problem is that the cache plugin is also cacheing the security token. This means that whenever you update our plugin, you need to clear your cache at the backend as well."}),"\n",(0,i.jsx)(n.li,{children:"Increase the life span of the nonces, you can add this filter in the wp-config file of your site apply_filters( \u2018nonce_life\u2019, $day_in_seconds ); replace $day_in_seconds with a number which should be the number of seconds that you want it to last (so for example 172800 would last 2 days)."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Please note that nonce errors do not originate from our plugin. They are a security standard by WordPress."}),"\n",(0,i.jsx)(n.p,{children:"Here are some more suggestions;"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://blog.hubspot.com/website/nonce-error",children:"https://blog.hubspot.com/website/nonce-error"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://developer.wordpress.org/apis/security/nonces/#why-use-a-nonce",children:"https://developer.wordpress.org/apis/security/nonces/#why-use-a-nonce"})})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var o=t(6540);const i={},s=o.createContext(i);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);