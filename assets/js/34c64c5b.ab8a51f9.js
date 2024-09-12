"use strict";(self.webpackChunkhelp=self.webpackChunkhelp||[]).push([[2497],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=u(a),m=o,h=c["".concat(s,".").concat(m)]||c[m]||p[m]||r;return a?n.createElement(h,l(l({ref:t},d),{},{components:a})):n.createElement(h,l({ref:t},d))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<r;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),o=a(6010);const r={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(r.tabItem,l),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(7462),o=a(7294),r=a(6010),l=a(2466),i=a(6550),s=a(1980),u=a(7392),d=a(12);function c(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:o}}=e;return{value:t,label:a,attributes:n,default:o}}))}function p(e){const{values:t,children:a}=e;return(0,o.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(r),(0,o.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=p(e),[l,i]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[s,u]=h({queryString:a,groupId:n}),[c,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,d.Nk)(a);return[n,(0,o.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),b=(()=>{const e=s??c;return m({value:e,tabValues:r})?e:null})();(0,o.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:l,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),f(e)}),[u,f,r]),tabValues:r}}var b=a(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),p=e=>{const t=e.currentTarget,a=d.indexOf(t),n=u[a].value;n!==i&&(c(t),s(n))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=d.indexOf(e.currentTarget)+1;t=d[a]??d[0];break}case"ArrowLeft":{const a=d.indexOf(e.currentTarget)-1;t=d[a]??d[d.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:l}=e;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:p},l,{className:(0,r.Z)("tabs__item",g.tabItem,l?.className,{"tabs__item--active":i===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===n));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=f(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",g.tabList)},o.createElement(k,(0,n.Z)({},e,t)),o.createElement(v,(0,n.Z)({},e,t)))}function w(e){const t=(0,b.Z)();return o.createElement(y,(0,n.Z)({key:String(t)},e))}},2080:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>f,contentTitle:()=>m,default:()=>v,frontMatter:()=>p,metadata:()=>h,toc:()=>b});var n=a(7462),o=(a(7294),a(3905)),r=a(4866),l=a(5162);const i=a.p+"assets/images/shortcode-moderation-411044b2f4d8557c7103e0959a0e8e94.png",s=a.p+"assets/images/widget-moderation-96fd42063ccca58a87ee7063f0640d8f.png",u=a.p+"assets/images/moderation-25114ac0a977594c9acd480c2de7aaef.png",d=a.p+"assets/images/mod-log-f0a039c00f84b75978cbbbe9c2e96afe.png",c=a.p+"assets/images/mod-log-view-3d85ef6a308791f37fdf694869f8fc93.png",p={sidebar_position:8},m="Moderation",h={unversionedId:"ChatGPT/advanced-setup/moderation",id:"ChatGPT/advanced-setup/moderation",title:"Moderation",description:"To ensure a safe and respectful conversation environment, it's essential to have robust moderation features in place.",source:"@site/docs/ChatGPT/advanced-setup/moderation.mdx",sourceDirName:"ChatGPT/advanced-setup",slug:"/ChatGPT/advanced-setup/moderation",permalink:"/docs/ChatGPT/advanced-setup/moderation",draft:!1,editUrl:"https://github.com/aipowerorg/aipowerorg.github.io/edit/main/docs/ChatGPT/advanced-setup/moderation.mdx",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Feedback Collection",permalink:"/docs/ChatGPT/advanced-setup/feedback-collection"},next:{title:"Security",permalink:"/docs/ChatGPT/advanced-setup/security"}},f={},b=[{value:"Benefits",id:"benefits",level:2},{value:"Enabling Moderation",id:"enabling-moderation",level:2},{value:"Moderation Log",id:"moderation-log",level:2}],g={toc:b},k="wrapper";function v(e){let{components:t,...a}=e;return(0,o.kt)(k,(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"moderation"},"Moderation"),(0,o.kt)("p",null,"To ensure a safe and respectful conversation environment, it's essential to have robust moderation features in place."),(0,o.kt)("p",null,"This is where the Moderation comes into play."),(0,o.kt)("p",null,"The Moderation feature in ChatGPT provides a powerful tool for moderating user messages."),(0,o.kt)("p",null,"It can identify and filter out offensive or inappropriate content, ensuring that your chatbot maintains a respectful, safe, and productive conversation environment."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Moderation feature is available only in the Pro plan.")),(0,o.kt)("p",null,"Moderation feature classifies the following categories:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"CATEGORY"),(0,o.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"hate"),(0,o.kt)("td",{parentName:"tr",align:null},"Content that expresses, incites, or promotes hate based on race, gender, ethnicity, religion, nationality, sexual orientation, disability status, or caste.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"hate/threatening"),(0,o.kt)("td",{parentName:"tr",align:null},"Hateful content that also includes violence or serious harm towards the targeted group.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"self-harm"),(0,o.kt)("td",{parentName:"tr",align:null},"Content that promotes, encourages, or depicts acts of self-harm, such as suicide, cutting, and eating disorders.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"sexual"),(0,o.kt)("td",{parentName:"tr",align:null},"Content meant to arouse sexual excitement, such as the description of sexual activity, or that promotes sexual services (excluding sex education and wellness).")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"sexual/minors"),(0,o.kt)("td",{parentName:"tr",align:null},"Sexual content that includes an individual who is under 18 years old.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"violence"),(0,o.kt)("td",{parentName:"tr",align:null},"Content that promotes or glorifies violence or celebrates the suffering or humiliation of others.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"violence/graphic"),(0,o.kt)("td",{parentName:"tr",align:null},"Violent content that depicts death, violence, or serious physical injury in extreme graphic detail.")))),(0,o.kt)("h2",{id:"benefits"},"Benefits"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Improved User Experience"),": By ensuring that all interactions are respectful and positive, you can provide a better user experience, which can lead to increased customer satisfaction and loyalty."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Automated Content Moderation"),": The feature uses OpenAI's cutting-edge models to automatically moderate content, relieving you from the need to manually monitor and manage inappropriate user inputs."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Customizable Response"),": You can customize the message that users receive when their content is flagged, allowing you to tailor your brand's communication style."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Flexible Model Selection"),": Choose between the 'text-moderation-stable' and 'text-moderation-latest' models based on your needs. The latter ensures you're always using the most accurate and up-to-date model."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Compliance With Policies"),": By filtering out content that doesn't comply with OpenAI's usage policies, you can ensure the respect and safety of all users."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Transparency and Control"),": The feature provides a log of all moderated content, giving you transparency and control over the chatbot's interactions.")),(0,o.kt)("p",null,"By enabling the Moderation feature, you can make your ChatGPT a safer, more respectful, and user-friendly tool for your customers or audience."),(0,o.kt)("h2",{id:"enabling-moderation"},"Enabling Moderation"),(0,o.kt)("p",null,"This guide will walk you through the steps to enable and configure the Moderation feature in your chatbot."),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"shortcode",label:"Shortcode",default:!0,mdxType:"TabItem"},(0,o.kt)("ul",null,(0,o.kt)("li",null,"Navigate to the ",(0,o.kt)("b",null,"ChatGPT - Shortcode")," tab in your dashboard."),(0,o.kt)("li",null,"Click on the ",(0,o.kt)("b",null,"Moderation")," tab located on the right side of your screen."),(0,o.kt)("img",{src:i,width:"700"}),(0,o.kt)("li",null,"Look for the ",(0,o.kt)("b",null,"Enable Moderation")," and ",(0,o.kt)("b",null,"Model")," options:"),(0,o.kt)("ul",null,(0,o.kt)("li",null,(0,o.kt)("b",null,"Enable Moderation"),": Toggle this switch to enable the chatbot to moderate user messages to detect any offensive words or content."),(0,o.kt)("li",null,(0,o.kt)("b",null,"Model"),": Choose the content moderation model you wish to use. Two options are available: ",(0,o.kt)("b",null,"text-moderation-stable")," and ",(0,o.kt)("b",null,"text-moderation-latest"),". The default is text-moderation-latest, which automatically upgrades over time."),(0,o.kt)("li",null,(0,o.kt)("b",null,"Notice"),': Customize the notice message that will be displayed when offensive content is detected. The default message is "Your message has been flagged as potentially harmful or inappropriate..."')),(0,o.kt)("img",{src:u,width:"300"}),(0,o.kt)("li",null,"After adjusting the settings, click on the ",(0,o.kt)("b",null,"Save")," button to apply the changes."))),(0,o.kt)(l.Z,{value:"widget",label:"Widget",mdxType:"TabItem"},(0,o.kt)("ul",null,(0,o.kt)("li",null,"Navigate to the ",(0,o.kt)("b",null,"ChatGPT - Widget")," tab in your dashboard."),(0,o.kt)("li",null,"Click on the ",(0,o.kt)("b",null,"Moderation")," tab located on the right side of your screen."),(0,o.kt)("img",{src:s,width:"700"}),(0,o.kt)("li",null,"Look for the ",(0,o.kt)("b",null,"Enable Moderation")," and ",(0,o.kt)("b",null,"Model")," options:"),(0,o.kt)("ul",null,(0,o.kt)("li",null,(0,o.kt)("b",null,"Enable Moderation"),": Toggle this switch to enable the chatbot to moderate user messages to detect any offensive words or content."),(0,o.kt)("li",null,(0,o.kt)("b",null,"Model"),": Choose the content moderation model you wish to use. Two options are available: text-moderation-stable and text-moderation-latest. The default is text-moderation-latest, which automatically upgrades over time."),(0,o.kt)("li",null,(0,o.kt)("b",null,"Notice"),': Customize the notice message that will be displayed when offensive content is detected. The default message is "Your message has been flagged as potentially harmful or inappropriate..."')),(0,o.kt)("img",{src:u,width:"300"}),(0,o.kt)("li",null,"After adjusting the settings, click on the ",(0,o.kt)("b",null,"Save")," button to apply the changes.")))),"Note: If a message is flagged as potentially harmful or inappropriate, the chatbot will not respond to the user. You can view the logs of the moderation in the Logs tab.",(0,o.kt)("h2",{id:"moderation-log"},"Moderation Log"),(0,o.kt)("p",null,"To monitor the effectiveness of the Moderation feature and to review flagged content, a Moderation Log is available."),(0,o.kt)("p",null,"To access this:"),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"shortcode",label:"Shortcode",default:!0,mdxType:"TabItem"},(0,o.kt)("ul",null,(0,o.kt)("li",null,"Navigate to the ",(0,o.kt)("b",null,"ChatGPT - Shortcode")," tab in your dashboard."),(0,o.kt)("li",null,"Click on the ",(0,o.kt)("b",null,"Logs")," tab located on the top of your screen."),(0,o.kt)("li",null,'Here, you will find a column labeled "Moderation". In this column, each conversation is labeled either as ',(0,o.kt)("b",null,"Passed")," or ",(0,o.kt)("b",null,"Flagged"),"."),(0,o.kt)("img",{src:d,width:"700"}),(0,o.kt)("li",null,"To see more details about why a conversation was flagged, click the ",(0,o.kt)("b",null,"View")," button next to each conversation. This will take you to a detailed view of the conversation."),(0,o.kt)("li",null,'In the detailed view, flagged content will be marked with a red label, specifying the reason for the flag (for example, "Flagged as Violence").'),(0,o.kt)("img",{src:c,width:"700"}),(0,o.kt)("li",null,"This log allows you to review moderated content and better understand how the Moderation feature is working to maintain a respectful and safe conversation environment."))),(0,o.kt)(l.Z,{value:"widget",label:"Widget",mdxType:"TabItem"},(0,o.kt)("ul",null,(0,o.kt)("li",null,"Navigate to the ",(0,o.kt)("b",null,"ChatGPT - Widget")," tab in your dashboard."),(0,o.kt)("li",null,"Click on the ",(0,o.kt)("b",null,"Logs")," tab located on the top of your screen."),(0,o.kt)("li",null,'Here, you will find a column labeled "Moderation". In this column, each conversation is labeled either as ',(0,o.kt)("b",null,"Passed")," or ",(0,o.kt)("b",null,"Flagged"),"."),(0,o.kt)("img",{src:d,width:"700"}),(0,o.kt)("li",null,"To see more details about why a conversation was flagged, click the ",(0,o.kt)("b",null,"View")," button next to each conversation. This will take you to a detailed view of the conversation."),(0,o.kt)("li",null,'In the detailed view, flagged content will be marked with a red label, specifying the reason for the flag (for example, "Flagged as Violence").'),(0,o.kt)("img",{src:c,width:"700"}),(0,o.kt)("li",null,"This log allows you to review moderated content and better understand how the Moderation feature is working to maintain a respectful and safe conversation environment.")))))}v.isMDXComponent=!0}}]);