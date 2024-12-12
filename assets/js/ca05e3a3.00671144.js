"use strict";(self.webpackChunkhelp=self.webpackChunkhelp||[]).push([[3858],{7657:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"ai-engine/openai/presence-penalty","title":"Presence Penalty","description":"What is Presence Penalty?","source":"@site/docs/ai-engine/openai/presence-penalty.mdx","sourceDirName":"ai-engine/openai","slug":"/ai-engine/openai/presence-penalty","permalink":"/docs/ai-engine/openai/presence-penalty","draft":false,"unlisted":false,"editUrl":"https://github.com/aipowerorg/aipowerorg.github.io/edit/main/docs/ai-engine/openai/presence-penalty.mdx","tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"sidebar_position":8},"sidebar":"tutorialSidebar","previous":{"title":"Frequency Penalty","permalink":"/docs/ai-engine/openai/frequency-penalty"},"next":{"title":"Top_P","permalink":"/docs/ai-engine/openai/top-p"}}');var i=t(4848),r=t(8453);const a=t.p+"assets/images/pp-8e607514e7d769f5aaf96cc009ad6234.png",l={sidebar_position:8},o="Presence Penalty",c={},d=[{value:"What is Presence Penalty?",id:"what-is-presence-penalty",level:2},{value:"Adjusting the Presence Penalty",id:"adjusting-the-presence-penalty",level:2},{value:"Differences Between Frequency and Presence Penalty",id:"differences-between-frequency-and-presence-penalty",level:2}];function h(e){const n={h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"presence-penalty",children:"Presence Penalty"})}),"\n",(0,i.jsx)(n.h2,{id:"what-is-presence-penalty",children:"What is Presence Penalty?"}),"\n",(0,i.jsxs)(n.p,{children:["Presence Penalty ranges from ",(0,i.jsx)(n.strong,{children:"-2.0"})," to ",(0,i.jsx)(n.strong,{children:"2.0"})," and affects how the model penalizes new tokens based on their presence in the text so far."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Positive values"}),": Increase the likelihood of discussing new topics by penalizing tokens that have already been used."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Presence Penalty applies once to all tokens that have been sampled at least once, while Frequency Penalty depends on how often a token has been sampled."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Default value"}),": 0 (uses words from the input prompt)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Higher values"}),": Encourage generating new words not present in the input, creating more diverse and creative output."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"adjusting-the-presence-penalty",children:"Adjusting the Presence Penalty"}),"\n",(0,i.jsxs)(n.p,{children:["The default Presence Penalty is ",(0,i.jsx)(n.strong,{children:"0.01"}),". You can change it in the ",(0,i.jsx)(n.strong,{children:"AI Settings"})," tab."]}),"\n",(0,i.jsx)(n.p,{children:"Steps to change the Presence Penalty:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Go to the plugin menu on your WordPress dashboard."}),"\n",(0,i.jsxs)(n.li,{children:["Click on the ",(0,i.jsx)(n.strong,{children:"Dashboard"})," page and find the ",(0,i.jsx)(n.strong,{children:"AI Settings"})," tab."]}),"\n",(0,i.jsxs)(n.li,{children:["Enter a new value in the ",(0,i.jsx)(n.strong,{children:"Presence Penalty"})," field."]}),"\n"]}),"\n",(0,i.jsx)("img",{src:a}),"\n",(0,i.jsx)(n.h2,{id:"differences-between-frequency-and-presence-penalty",children:"Differences Between Frequency and Presence Penalty"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Frequency Penalty"}),": Penalizes words seen frequently during training. Encourages generating novel or less common words."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Presence Penalty"}),": Penalizes words present in the input prompt. Encourages generating words not in the input."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Frequency Penalty"}),": Modifies the probability of words seen frequently during training, making them less likely."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Presence Penalty"}),": Modifies the probability of words in the input text, making them less likely to repeat in the output."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Both parameters can increase text diversity and encourage generating more novel or unexpected words, but they do so in different ways. Depending on your needs, you might use one or both."}),"\n",(0,i.jsx)(n.p,{children:"Use Frequency Penalty for generating text less like training data and Presence Penalty for generating text less like the input text."})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>l});var s=t(6540);const i={},r=s.createContext(i);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);