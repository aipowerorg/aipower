"use strict";(self.webpackChunkhelp=self.webpackChunkhelp||[]).push([[9207],{2282:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>j,contentTitle:()=>x,default:()=>f,frontMatter:()=>p,metadata:()=>o,toc:()=>m});const o=JSON.parse('{"id":"AutoGPT/auto-content-writer/bulk-editor","title":"Bulk Editor","description":"The Bulk Editor is a robust tool that enables you to produce multiple articles simultaneously, saving you valuable time and energy.","source":"@site/docs/AutoGPT/auto-content-writer/bulk-editor.mdx","sourceDirName":"AutoGPT/auto-content-writer","slug":"/AutoGPT/auto-content-writer/bulk-editor","permalink":"/docs/AutoGPT/auto-content-writer/bulk-editor","draft":false,"unlisted":false,"editUrl":"https://github.com/aipowerorg/aipowerorg.github.io/edit/main/docs/AutoGPT/auto-content-writer/bulk-editor.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Auto Content Writer","permalink":"/docs/category/auto-content-writer"},"next":{"title":"CSV Import","permalink":"/docs/AutoGPT/auto-content-writer/csv-import"}}');var s=n(4848),r=n(8453);const i=n.p+"assets/images/bulk-editor-1c762162486d53c0cbe974cff78f488d.png",a=n.p+"assets/images/bulk-editor2-bd1e3c8e05f994274f0fc13ddf27c035.png",d=n.p+"assets/images/more-details-941fff734f79906266f3512de84ce85e.png";var l=n(8714),c=n(339),h=n(7270),u=n(4857);const p={sidebar_position:1},x="Bulk Editor",j={},m=[{value:"How It Works?",id:"how-it-works",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Setup",id:"setup",level:2},{value:"Using Custom Prompt",id:"using-custom-prompt",level:2},{value:"Best Practices and Tips",id:"best-practices-and-tips",level:4},{value:"Auto Restart Failed Jobs",id:"auto-restart-failed-jobs",level:2},{value:"Monitoring",id:"monitoring",level:2}];function g(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"bulk-editor",children:"Bulk Editor"})}),"\n",(0,s.jsx)(t.p,{children:"The Bulk Editor is a robust tool that enables you to produce multiple articles simultaneously, saving you valuable time and energy."}),"\n",(0,s.jsx)("iframe",{width:"100%",height:"450",src:"https://www.youtube.com/embed/VkYLOtD6Wps",title:"Auto Content Writer - Cron Setup",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0}),"\n",(0,s.jsx)(t.h2,{id:"how-it-works",children:"How It Works?"}),"\n",(0,s.jsxs)(t.p,{children:["Once you enter your desired titles and hit the generate button in the Bulk Editor, our plugin takes those titles and uses default content settings from the ",(0,s.jsx)(t.strong,{children:"Settings - Content"})," tab to generate the content. The content generation process is triggered by the Cron Job that you have set up."]}),"\n",(0,s.jsx)(t.p,{children:"Please note that the time it takes to generate the content depends on the availability of the OpenAI API and the number of articles you have requested. Generating a single article can take around 3 to 5 minutes, which means that if you have entered five titles, it might take around 20-25 minutes to generate all of them."}),"\n",(0,s.jsx)(t.p,{children:"It's important to keep in mind that if your Cron Job is set to run every minute, it means that the generation process will be triggered every minute. However, if the previous job has not yet completed, the new job will be added to the queue and will be processed after the current job is completed."}),"\n",(0,s.jsxs)(t.admonition,{type:"info",children:[(0,s.jsxs)(t.p,{children:["The Bulk Editor retrieves its default values from the ",(0,s.jsx)(t.strong,{children:"Settings - Content"})," tab. Before running a job, please ensure that you have adjusted your content settings in the Content tab to match your desired output and preferences."]}),(0,s.jsxs)(t.p,{children:["Learn more about content settings ",(0,s.jsx)(t.a,{href:"/docs/category/express-mode",children:"here"}),"."]})]}),"\n",(0,s.jsx)(t.p,{children:"Once you hit generate, that batch of titles will be added to the queue and wait to be processed."}),"\n",(0,s.jsx)(t.p,{children:"You don't need to wait until that batch is completed before adding more batches to the queue."}),"\n",(0,s.jsx)(t.p,{children:"Free plan users can add up to 5 titles per batch, while Pro plan users can add up to 100 titles per batch."}),"\n",(0,s.jsx)(t.p,{children:"You can continue to add batches to the queue until you reach the maximum limit allowed by your plan."}),"\n",(0,s.jsx)(t.p,{children:"If you have multiple batches in the queue, the content generation process may take some time."}),"\n",(0,s.jsx)(t.p,{children:"However, you can monitor the progress of each batch in the Queue tab and cancel a batch if it's taking longer than expected or if you no longer need the content."}),"\n",(0,s.jsx)(t.h2,{id:"requirements",children:"Requirements"}),"\n",(0,s.jsx)(t.p,{children:"For the Bulk Editor module, you need to set up only one cron job for processing the queue."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Queue Processor"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"* * * * * php /var/www/html/index.php -- wpaicg_cron=yes \n"})}),"\n",(0,s.jsxs)(t.p,{children:["Learn how to setup a cron job ",(0,s.jsx)(t.a,{href:"/docs/AutoGPT/gpt-agents#cron-job-setup",children:"here"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"setup",children:"Setup"}),"\n",(0,s.jsx)(t.p,{children:"To use this feature, simply follow these steps:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Navigate to the ",(0,s.jsx)(t.strong,{children:"AutoGPT - Bulk Editor"}),", and ensure that you have completed the ",(0,s.jsx)(t.a,{href:"/docs/AutoGPT/gpt-agents#cron-job-setup",children:"Cron Job setup"}),", which is essential for the Bulk Editor to operate efficiently."]}),"\n"]}),"\n",(0,s.jsx)("img",{src:i,width:"700"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Once you are in the Bulk Editor tab, input your desired title, choose whether to save the content as a draft or publish it immediately, select the post category, author and enter tags, anchor text, target url, call to action link and click the ",(0,s.jsx)(t.strong,{children:"Generate"})," button. Learn more about content settings ",(0,s.jsx)(t.a,{href:"/docs/category/express-mode",children:"here"}),"."]}),"\n"]}),"\n",(0,s.jsx)("img",{src:a,width:"700"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["You can also click on ",(0,s.jsx)(t.strong,{children:"+More"})," link to enrich your content with keywords and links. Learn more about content settings ",(0,s.jsx)(t.a,{href:"/docs/category/express-mode",children:"here"}),"."]}),"\n"]}),"\n",(0,s.jsx)("img",{src:d,width:"700"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["You can monitor the progress of your content creation in the ",(0,s.jsx)(t.strong,{children:"Queue"})," tab."]}),"\n",(0,s.jsx)(t.li,{children:"If the content generation process is taking longer than expected, you have the option to cancel it."}),"\n"]}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsx)(t.p,{children:"Free plan users are limited to generating only 5 pieces of content per batch. In contrast, Pro plan users have the advantage of generating up to 100 pieces of content per batch. Additionally, Pro plan users can schedule their posts and have the ability to add keywords, avoid keywords, and include FAQ sections in their generated content. This offers a more flexible and enhanced experience for Pro plan users."})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Feature"}),(0,s.jsx)(t.th,{children:"Free Plan"}),(0,s.jsx)(t.th,{children:"Pro Plan"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Content Generation Limit per Batch"}),(0,s.jsx)(t.td,{children:"5"}),(0,s.jsx)(t.td,{children:"100"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Scheduled Posts"}),(0,s.jsx)(t.td,{children:"\u274c"}),(0,s.jsx)(t.td,{children:"\u2705"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Keywords"}),(0,s.jsx)(t.td,{children:"\u274c"}),(0,s.jsx)(t.td,{children:"\u2705"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Avoid Keywords"}),(0,s.jsx)(t.td,{children:"\u274c"}),(0,s.jsx)(t.td,{children:"\u2705"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"FAQ Sections"}),(0,s.jsx)(t.td,{children:"\u274c"}),(0,s.jsx)(t.td,{children:"\u2705"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"using-custom-prompt",children:"Using Custom Prompt"}),"\n",(0,s.jsxs)(t.p,{children:["If you don't want to use the built-in prompts that come with the plugin and prefer to use your own, you can go to ",(0,s.jsx)(t.strong,{children:"AutoGPT - Settings"})," and enable the custom prompt option."]}),"\n",(0,s.jsx)("img",{src:c.A,width:"700"}),"\n",(0,s.jsx)(t.h4,{id:"best-practices-and-tips",children:"Best Practices and Tips"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Make sure to include ",(0,s.jsx)(t.code,{children:"[title]"})," in your prompt. If you are in a Pro Plan you can also add ",(0,s.jsx)(t.code,{children:"[keywords_to_include]"})," and ",(0,s.jsx)(t.code,{children:"[keywords_to_avoid]"})," to further customize your prompt."]}),"\n",(0,s.jsx)(t.li,{children:'You can add your language to the prompt. Just replace "in English" with your language.'}),"\n",(0,s.jsx)(t.li,{children:"This works best with gpt-4 and gpt-3.5-turbo."}),"\n",(0,s.jsx)(t.li,{children:"Please note that if the custom prompt is enabled, the plugin will bypass language, style, tone, etc., settings. You need to specify them in your prompt."}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"auto-restart-failed-jobs",children:"Auto Restart Failed Jobs"}),"\n",(0,s.jsx)(t.p,{children:"You can choose to automatically restart failed jobs after a specific amount of time or after a certain number of attempts."}),"\n",(0,s.jsxs)(t.p,{children:["To enable the restart feature, go to the ",(0,s.jsx)(t.strong,{children:"AutoGPT - Settings"})," tab."]}),"\n",(0,s.jsx)("img",{src:l.A,width:"700"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Restart Failed Jobs After"}),": Set the amount of time after which the tool should attempt to restart a failed job. Available options: Do not restart, 20, 30, 40, 50 and 60 minutes."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Attempt up to a Maximum of"}),": Define the maximum number of times the tool should try to restart a failed job before giving up. Available options: 1 to 10 times."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"By configuring these settings, you can ensure that your content generation process continues smoothly even if there are temporary issues with the OpenAI servers or if you run out of quota."}),"\n",(0,s.jsx)(t.p,{children:"For example, if a bulk job fails due to unforeseen circumstances such as OpenAI servers being down or you are out of quota, the tool will automatically attempt to restart the failed job based on the settings you have selected."}),"\n",(0,s.jsx)(t.h2,{id:"monitoring",children:"Monitoring"}),"\n",(0,s.jsx)(t.p,{children:"The queue feature in Auto Content Writer is a helpful tool that allows users to keep track of the progress of their content creation."}),"\n",(0,s.jsx)(t.p,{children:"When you generate multiple articles at once using the GPT agents, they are added to a queue, and you can monitor the status of each batch in the Queue tab."}),"\n",(0,s.jsx)("img",{src:h.A}),"\n",(0,s.jsx)(t.p,{children:"There are seven fields in the Queue tab that give you information about each batch of content."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ID"}),(0,s.jsx)(t.td,{children:"The ID field shows the unique identifier for each batch."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Batch"}),(0,s.jsx)(t.td,{children:"The Batch field shows you the list of titles in that batch. It is clickable, and once you click on it, you can see the list of titles in that batch."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Status"}),(0,s.jsx)(t.td,{children:"The Status field shows whether the batch is pending, cancelled, in progress, or completed."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Source"}),(0,s.jsx)(t.td,{children:"The Source field shows where the batch was created, whether in the Bulk Editor, CSV, Copy-Paste, RSS or Google Sheets feature."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Duration"}),(0,s.jsx)(t.td,{children:"The Duration field shows how long it took to generate all the contents in that batch."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Token"}),(0,s.jsx)(t.td,{children:"Token field shows how many tokens were spent to generate the content."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Word Count"}),(0,s.jsx)(t.td,{children:"The Word Count field shows how many words are in that batch."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Action"}),(0,s.jsx)(t.td,{children:"The Action field provides a delete button to delete the batch if you no longer need it. Please note that deleting a batch will not delete the content that was generated."})]})]})]}),"\n",(0,s.jsx)(t.p,{children:"In addition to the monitoring capabilities, you can also filter batches based on their status."}),"\n",(0,s.jsx)(t.p,{children:"This allows you to quickly view batches that are completed, pending, or in other states, enhancing your ability to manage the content creation process."}),"\n",(0,s.jsx)(t.p,{children:"Furthermore, the Queue tab provides a summary of the total number of batches, as well as the number of pending and completed batches. This gives you a quick overview of your content generation activities."}),"\n",(0,s.jsx)("img",{src:u.A}),"\n",(0,s.jsx)(t.p,{children:"With the Queue feature, you can easily keep track of the progress of your content creation and stay organized. You can also cancel a batch if it is taking longer than expected or if you no longer need the content."}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsx)(t.p,{children:"Deleting a job from the queue will only remove the job from the queue and will not delete the content that was generated."})})]})}function f(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(g,{...e})}):g(e)}},339:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/custom-prompt-459527abaf2f01a3978f2bef7fe905dc.png"},4857:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/filtering-77949057cef29dc6f888405a3f2efa9c.png"},7270:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/queue-6f56344f29ae363c8355bebab8121f3d.png"},8714:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/restart-5ccd4f9784a566a959095458cc31db5b.png"},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var o=n(6540);const s={},r=o.createContext(s);function i(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);