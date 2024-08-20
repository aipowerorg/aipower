"use strict";(self.webpackChunkhelp=self.webpackChunkhelp||[]).push([[5278],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=i,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,r[1]=s;for(var u=2;u<o;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},836:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=n(7462),i=(n(7294),n(3905));const o={sidebar_position:13},r="FAQ",s={unversionedId:"content-writer/express-mode/faq",id:"content-writer/express-mode/faq",title:"FAQ",description:"This is a list of frequently asked questions about Express Mode.",source:"@site/docs/content-writer/express-mode/faq.mdx",sourceDirName:"content-writer/express-mode",slug:"/content-writer/express-mode/faq",permalink:"/docs/content-writer/express-mode/faq",draft:!1,editUrl:"https://github.com/aipowerorg/aipowerorg.github.io/edit/main/docs/content-writer/express-mode/faq.mdx",tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13},sidebar:"tutorialSidebar",previous:{title:"Custom Prompt",permalink:"/docs/content-writer/express-mode/custom-prompt"},next:{title:"Custom Mode",permalink:"/docs/content-writer/custom-mode"}},l={},u=[{value:"You exceeded your current quota",id:"you-exceeded-your-current-quota",level:2},{value:"Timeout issue",id:"timeout-issue",level:2},{value:"Rate Limiting",id:"rate-limiting",level:3},{value:"Server-Specific Timeouts",id:"server-specific-timeouts",level:3},{value:"Apache",id:"apache",level:4},{value:"Nginx",id:"nginx",level:4},{value:"php.ini",id:"phpini",level:4},{value:"cPanel",id:"cpanel",level:4},{value:"Plesk",id:"plesk",level:4},{value:"CloudFlare",id:"cloudflare",level:4},{value:".htaccess File",id:"htaccess-file",level:4}],c={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"faq"},"FAQ"),(0,i.kt)("p",null,"This is a list of frequently asked questions about Express Mode."),(0,i.kt)("h2",{id:"you-exceeded-your-current-quota"},"You exceeded your current quota"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Q"),": I am getting ",(0,i.kt)("em",{parentName:"p"},"\u201cYou exceeded your current quota, please check your plan and billing details.\u201d")," What should I do?"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"A"),": This message coming from OpenAI and it\u2019s not related with the plugin. It means that you have consumed all the credits or units allocated to your plan and have reached the limit of your billing cycle."),(0,i.kt)("p",null,"Please note that having ChatGPT Plus subscription and having OpenAI API credits are two different things. The API usage comes with its own charges."),(0,i.kt)("p",null,"To resolve this issue, you need to add more credits to your OpenAI account. "),(0,i.kt)("p",null,"Please follow below steps: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Go to ",(0,i.kt)("a",{parentName:"li",href:"https://platform.openai.com/account/billing/payment-methods"},"https://platform.openai.com/account/billing/payment-methods")," and add a new payment method."),(0,i.kt)("li",{parentName:"ul"},"Once payment method is added, please go to ",(0,i.kt)("a",{parentName:"li",href:"https://platform.openai.com/account/api-keys"},"https://platform.openai.com/account/api-keys")," and generate new api keys."),(0,i.kt)("li",{parentName:"ul"},"Now paste this new api key under the plugin Settings - AI engine tab.")),(0,i.kt)("p",null,"You can check your current usage at ",(0,i.kt)("a",{parentName:"p",href:"https://platform.openai.com/account/usage"},"https://platform.openai.com/account/usage"),"."),(0,i.kt)("h2",{id:"timeout-issue"},"Timeout issue"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Q"),": I am getting ",(0,i.kt)("em",{parentName:"p"},"\u201cIt appears that your web server has some kind of timeout limit. This can also occur if you are using a VPS, CDN, proxy, firewall, or Cloudflare. To resolve this issue, please contact your hosting provider and request an increase in the timeout limit.\u201d")," message. What should I do?"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"A"),": It means that your server have timeout limitation or your organization is being rate limited by OpenAI."),(0,i.kt)("h3",{id:"rate-limiting"},"Rate Limiting"),(0,i.kt)("p",null,"OpenAI's new ",(0,i.kt)("a",{parentName:"p",href:"https://platform.openai.com/docs/guides/rate-limits/usage-tiers"},"rate limit documentation")," may provide indirect hints about the issues many accounts face."),(0,i.kt)("p",null,"Is your GPT models running slow? Consider the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Are you currently on a prepay plan?"),(0,i.kt)("li",{parentName:"ul"},"Have you paid OpenAI over $50 in prepaid credits, over a week ago?")),(0,i.kt)("p",null,"Reaching new \u201ctiers\u201d for prepay credit users seems to be related to these criteria. The quality of service you receive might be tied to the non-refundable money you've given to OpenAI. They \u201cmay\u201d move you to a lower latency depending on this."),(0,i.kt)("p",null,"What to do next:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Visit your account's ",(0,i.kt)("a",{parentName:"li",href:"https://platform.openai.com/account/rate-limits"},"rate limits")," page."),(0,i.kt)("li",{parentName:"ul"},"Check if you've been assigned one of the new unique rate limits of 20000 or 40000 tokens per minute. If you have, it indicates you're in a lower \u201ctier\u201d."),(0,i.kt)("li",{parentName:"ul"},"Remember, OpenAI has mentioned they wouldn't consider any rate request form for an increase of the GPT-4 TPM rate of 10000 that's been allocated to new users. If you're wondering about the criteria, it's made clear on that page: ",(0,i.kt)("strong",{parentName:"li"},"PAY UP"),"."),(0,i.kt)("li",{parentName:"ul"},"Go to ",(0,i.kt)("a",{parentName:"li",href:"https://platform.openai.com/account/billing/payment-methods"},"https://platform.openai.com/account/billing/payment-methods")," and add a new payment method."),(0,i.kt)("li",{parentName:"ul"},"Once payment method is added, please go to ",(0,i.kt)("a",{parentName:"li",href:"https://platform.openai.com/account/api-keys"},"https://platform.openai.com/account/api-keys")," and generate new api keys."),(0,i.kt)("li",{parentName:"ul"},"Now paste this new api key under the plugin Settings - AI engine tab.")),(0,i.kt)("p",null,"So, in summary, if you are experiencing timeouts, it likely means you are in a lower tier either because you haven't added your credit card or your credit is below $100, resulting in OpenAI rate limiting your requests."),(0,i.kt)("h3",{id:"server-specific-timeouts"},"Server-Specific Timeouts"),(0,i.kt)("p",null,"If you've already added your credit card to OpenAI, ensured you're not in a lower tier, and you're still experiencing timeouts, this indicates server restrictions or configurations that might be affecting your connection."),(0,i.kt)("h4",{id:"apache"},"Apache"),(0,i.kt)("p",null,"If you are using Apache:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The timeout value can be found in the ",(0,i.kt)("inlineCode",{parentName:"li"},"httpd.conf")," file. You might need to search for the Timeout directive in this file."),(0,i.kt)("li",{parentName:"ul"},"Increase the value as required to give your scripts or processes more time to complete."),(0,i.kt)("li",{parentName:"ul"},"If you don't have the necessary permissions to edit this file or aren't comfortable making changes, please contact your hosting provider for assistance.")),(0,i.kt)("h4",{id:"nginx"},"Nginx"),(0,i.kt)("p",null,"If you are using Nginx:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The timeout values are often found in the ",(0,i.kt)("inlineCode",{parentName:"li"},"nginx.conf")," file."),(0,i.kt)("li",{parentName:"ul"},"You can adjust the ",(0,i.kt)("inlineCode",{parentName:"li"},"fastcgi_read_timeout")," value in the location block that handles PHP requests:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"location ~* /MAMP([^-].*)$ {\n    root             /Applications/MAMP/bin;\n    index            index.php;\n\n    location ~ \\.php$ {\n        try_files        $uri =404;\n        fastcgi_pass     unix:/Applications/MAMP/Library/logs/fastcgi/nginxFastCGI.sock;\n        fastcgi_param    SCRIPT_FILENAME $document_root$fastcgi_script_name;\n        include          fastcgi_params;\n        fastcgi_read_timeout 600;  # Adjust this value based on your needs\n    }\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You can also append below values in /etc/nginx/conf.d/timeout.conf file.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"proxy_connect_timeout 600;\nproxy_send_timeout 600;\nproxy_read_timeout 600;\n")),(0,i.kt)("h4",{id:"phpini"},"php.ini"),(0,i.kt)("p",null,"Regardless of the web server you are using, PHP has its own execution timeout setting which might be causing the issue:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Locate your ",(0,i.kt)("inlineCode",{parentName:"li"},"php.ini")," file. Its location can vary based on your server setup and PHP installation."),(0,i.kt)("li",{parentName:"ul"},"Find the ",(0,i.kt)("inlineCode",{parentName:"li"},"max_execution_time")," directive and adjust the value. For instance:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"max_execution_time = 1000  ; Adjust to the number of seconds you need\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Save the php.ini file and restart your web server and PHP service for the changes to take effect.")),(0,i.kt)("p",null,"Always remember to backup configuration files before making changes. If you're on shared hosting or don't have access to server configurations, please contact your hosting provider."),(0,i.kt)("h4",{id:"cpanel"},"cPanel"),(0,i.kt)("p",null,"If you are using cPanel, there might be an issue with PHP-FPM configurations. You can refer to the official cPanel documentation or ",(0,i.kt)("a",{parentName:"p",href:"https://support.cpanel.net/hc/en-us/articles/360057903134-proxy-fcgi-error-errors-when-using-PHP-FPM"},"this link")," for troubleshooting and guidance."),(0,i.kt)("h4",{id:"plesk"},"Plesk"),(0,i.kt)("p",null,"For those using Plesk, the timeout settings can be adjusted through the Service Plans or Subscriptions settings. Navigate to the PHP settings section and adjust the ",(0,i.kt)("inlineCode",{parentName:"p"},"max_execution_time")," value as needed.\nIf you don't have administrative access, please contact your hosting provider for assistance."),(0,i.kt)("p",null,"You can find more information in ",(0,i.kt)("a",{parentName:"p",href:"https://support.plesk.com/hc/en-us/articles/12377347905815-How-to-define-PHP-limit-max-execution-time-for-a-domain-in-Plesk-"},"this link"),"."),(0,i.kt)("h4",{id:"cloudflare"},"CloudFlare"),(0,i.kt)("p",null,"If you are using ",(0,i.kt)("strong",{parentName:"p"},"CloudFlare"),", their default timeout limit is 100 seconds. Which means you won\u2019t be able to generate content if content generation exceed 100 seconds. You can upgrade your plan with CloudFlare or disable their service or you can reduce number of headings for content generation."),(0,i.kt)("h4",{id:"htaccess-file"},".htaccess File"),(0,i.kt)("p",null,"You can learn how you can edit max execution value using .htaccess file in ",(0,i.kt)("a",{parentName:"p",href:"https://www.hostinger.com/tutorials/how-to-fix-maximum-execution-time-exceeded-error-wordpress"},"this link"),"."))}d.isMDXComponent=!0}}]);