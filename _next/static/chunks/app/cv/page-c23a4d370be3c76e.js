(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[349],{7728:function(e,t,n){Promise.resolve().then(n.bind(n,7055))},7245:function(e,t,n){"use strict";n.d(t,{j:function(){return s}});let r=e=>"function"==typeof e,a={any:0,all:1};function s(e,t,{root:n,margin:s,amount:i="any"}={}){var c;if("undefined"==typeof IntersectionObserver)return()=>{};let o=("string"==typeof(c=e)?c=document.querySelectorAll(c):c instanceof Element&&(c=[c]),Array.from(c||[])),l=new WeakMap,u=new IntersectionObserver(e=>{e.forEach(e=>{let n=l.get(e.target);if(!!n!==e.isIntersecting){if(e.isIntersecting){let n=t(e);r(n)?l.set(e.target,n):u.unobserve(e.target)}else n&&(n(e),l.delete(e.target))}})},{root:n,rootMargin:s,threshold:"number"==typeof i?i:a[i]});return o.forEach(e=>u.observe(e)),()=>u.disconnect()}},7055:function(e,t,n){"use strict";n.d(t,{ScrollIntro:function(){return m}});var r=n(7437),a=n(2265),s=[{company:"Unnotech",position:"Senior Backend Engineer(team lead)",projects:[{name:"killer",description:"WIP...",technical_solution:{core_architecture:"",design_decisions:""},impact_result:"WIP...",tech_stacks:["Python","Django","Golang","PostgreSQL","AWS","Terraform"]},{name:"celerybolt",description:"WIP...",technical_solution:{core_architecture:"",design_decisions:""},impact_result:"WIP...",tech_stacks:["Python","Celery","htmx","DuckDB","Helm"]},{name:"arcadia",description:"WIP...",technical_solution:{core_architecture:"",design_decisions:""},impact_result:"WIP...",tech_stacks:["Python","Celery","Prometheus","Postgresql","Helm"]}]},{company:"Sensestar",position:"Senior Backend Engineer",projects:[{name:"...",description:"",technical_solution:{core_architecture:"",design_decisions:""},impact_result:"",tech_stacks:["Golang","PostgreSQL","GCP","Terraform"]}]}],i=e=>{let{position:t=50}=e;return(0,r.jsxs)("div",{className:"relative h-72 flex items-center justify-center",children:[(0,r.jsx)("div",{className:"absolute left-1/2 -translate-x-1/2 w-px bg-gradient-to-t from-[#47c8fde3]/80 via-[#47c8fde3]/40",style:{top:"0",height:"".concat(t,"%"),transition:"all 0.3s ease-in-out"}}),(0,r.jsx)("div",{className:"absolute left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-[#47c8fde3]/80 via-[#47c8fde3]/40",style:{top:"".concat(t,"%"),height:"".concat(100-t,"%"),transition:"all 0.3s ease-in-out"}}),(0,r.jsx)("div",{className:"absolute",style:{top:"".concat(t,"%"),transition:"top 0.3s ease-in-out"},children:(0,r.jsxs)("div",{className:"w-2 h-2 rounded-full bg-[#47c8fde3] relative z-10",children:[(0,r.jsx)("div",{className:"absolute inset-0 rounded-full bg-[#47c8fde3] opacity-40 blur-sm"}),(0,r.jsx)("div",{className:"absolute inset-0 rounded-full bg-[#47c8fde3] blur-md"})]})})]})},c=n(4839),o=n(7245);let l=e=>{let{project:t}=e,n=(0,a.useRef)([]),[s,i]=(0,a.useState)([]);return(0,a.useEffect)(()=>{n.current.forEach((e,t)=>{e&&(0,o.j)(e,()=>(i(e=>{let n=[...e];return n[t]=!0,n}),()=>{i(e=>{let n=[...e];return n[t]=!1,n})}),{margin:"-150px -150px -150px -150px"})})},[]),(0,r.jsx)("section",{ref:function(e){n.current.push(e)},className:(0,c.Z)("md:p-8 h-screen w-full snap-start flex items-center justify-center",{"opacity-100":s[0]},{"opacity-0":!s[0]}),style:{transition:"all 0.5s ease-in-out"},children:(0,r.jsxs)("div",{className:(0,c.Z)("min-h-[50vh] max-w-80 md:max-w-4xl w-full backdrop-blur-sm rounded-lg p-8",{"opacity-0":!s[0]},{"opacity-100 top-0":s[0]}),style:{transition:"all 0.4s ease-in-out",boxShadow:"0 0 20px rgba(14, 165, 233, 0.2)",border:"1px solid rgba(14, 165, 233, 0.4)"},children:[(0,r.jsx)("h2",{className:(0,c.Z)("opacity-0 text-4xl font-bold text-white mb-6 text-fancy-shadow",{"opacity-100":s[0],"translate-y-0":s[0],"translate-y-10":!s[0]}),style:{transition:"all 0.4s 0.2s ease-in-out"},children:t.name}),(0,r.jsx)("div",{className:(0,c.Z)("flex flex-wrap gap-2 mb-6 opacity-0",{"opacity-0":!s[0],"opacity-100":s[0],"translate-y-0":s[0],"translate-y-10":!s[0]}),style:{transition:"all 0.5s 0.2s ease-in-out"},children:t.tech_stacks.map((e,t)=>(0,r.jsx)("span",{className:"text-xs border-[1px] border-[#0ea5e9b3] px-4 py-2 rounded-full text-white",children:e},t))}),(0,r.jsx)("p",{className:(0,c.Z)("text-lg text-white/90 mb-6",{"opacity-0":!s[0],"opacity-100":s[0],"translate-y-0":s[0],"translate-y-10":!s[0]}),style:{transition:"all 0.6s 0.4s ease-in-out"},children:t.description}),(0,r.jsx)("p",{className:(0,c.Z)("text-lg text-white/90 mb-6",{"opacity-0":!s[0],"opacity-100":s[0],"translate-y-0":s[0],"translate-y-10":!s[0]}),style:{transition:"all 0.7s 0.4s ease-in-out"},children:t.impact_result})]})},t.name)},u=e=>{let{title:t}=e,[n,s]=(0,a.useState)(!1),[i,o]=(0,a.useState)(t);return(0,a.useEffect)(()=>{let e=setTimeout(()=>{o(t),s(!0)},500);return()=>{s(!1),clearTimeout(e)}},[t]),(0,r.jsx)("h2",{className:(0,c.Z)("text-lg font-bold text-white/90 mb-6 transition-all duration-1000",{"opacity-0 blur-xl":!n},{"opacity-100 blur-none":n}),children:i})},d=e=>{let{scrollingDownRef:t}=e,n=(0,a.useRef)({}),[c,d]=(0,a.useState)(0),[p,m]=(0,a.useState)("");return(0,a.useEffect)(()=>(Object.keys(n.current).forEach(e=>{n.current[e]&&(0,o.j)(n.current[e],()=>{var r,a;let s=Object.keys(n.current).indexOf(e),i=Object.keys(n.current).length,c=s>0?s/(i-1)*100:0;return m("".concat(null===(r=n.current[e])||void 0===r?void 0:r.getAttribute("data-company")," - ").concat(null===(a=n.current[e])||void 0===a?void 0:a.getAttribute("data-position"))),d(e=>(c>e&&(t.current.setScrollingDown(!0),setTimeout(()=>{t.current.setScrollingDown(!1)},500)),c)),()=>{}},{margin:"-100px -100px -100px -100px"})}),()=>{}),[]),(0,r.jsxs)("div",{id:"fancycv",className:"h-screen overflow-y-scroll snap-y snap-mandatory",children:[(0,r.jsx)("div",{className:"absolute top-20 left-10 text-lg font-bold",children:(0,r.jsx)(u,{title:p})}),(0,r.jsx)("div",{className:"h-screen content-center absolute",children:(0,r.jsx)(i,{position:c})}),(0,r.jsx)("style",{children:"\n      /* Scoped scrollbar styles for this specific section */\n      #fancycv::-webkit-scrollbar {\n        display: none; /* Hide scrollbar only for this element */\n      }\n    "}),s.map(e=>(0,r.jsx)("div",{className:"relative",children:e.projects.map((t,a)=>(0,r.jsx)("div",{"data-company":e.company,"data-position":e.position,"data-mykey":t.name,ref:function(e){e&&(n.current[t.name]=e)},children:(0,r.jsx)(l,{project:t})},t.name))},e.company))]})},p=(0,a.forwardRef)((e,t)=>{let[n,s]=(0,a.useState)([]),i=(0,a.useRef)(),c=(0,a.useRef)(!1);(0,a.useImperativeHandle)(t,()=>({setScrollingDown:e=>{c.current=e}})),(0,a.useEffect)(()=>{s([...Array(30)].map(()=>({id:Math.random(),x:Math.random()*window.innerWidth,y:Math.random()*window.innerHeight,size:1.5*Math.random()+.5,color:"hsl(".concat(20*Math.random()+180,", 98%, ").concat(20*Math.random()+50,"%)"),intensity:.5*Math.random()+.5,speedY:-((.5*Math.random()+.2)*1),speedX:.4*Math.random()-.2,trail:[]})))},[]);let o=()=>{s(e=>e.map(e=>{let t=e.y+e.speedY-(c.current?10:0),n=e.x+(c.current?0:e.speedX);t<0&&(t=window.innerHeight),n<0&&(n=window.innerWidth),n>window.innerWidth&&(n=0);let r=c.current?[{x:e.x,y:e.y},...e.trail.splice(.5)]:[];return{...e,x:n,y:t,trail:r}})),i.current=requestAnimationFrame(o)};return(0,a.useEffect)(()=>(i.current=requestAnimationFrame(o),()=>{cancelAnimationFrame(i.current)}),[]),(0,r.jsx)("div",{className:"min-h-screen fixed inset-0 pointer-events-none",children:n.map(e=>(0,r.jsxs)(a.Fragment,{children:[(0,r.jsx)("div",{className:"absolute rounded-full",style:{left:"".concat(e.x,"px"),top:"".concat(e.y,"px"),width:"".concat(e.size,"px"),height:"".concat(e.size,"px"),backgroundColor:e.color,boxShadow:"0 0 ".concat(e.size,"px ").concat(e.size,"px rgba(71, 200, 253, ").concat(e.intensity,")")}}),e.trail.map((t,n)=>(0,r.jsx)("div",{className:"absolute",style:{left:"".concat(t.x,"px"),top:"".concat(t.y,"px"),width:"".concat(e.size*((5-n)/80),"px"),height:"".concat(e.size*(1-n/10)+(c.current?6:0),"px"),backgroundColor:e.color,borderRadius:"50%",opacity:(10-n)/20,filter:"blur(".concat(n/1,"px)"),transform:c.current?"scaleY(2.5)":"scaleY(1)",transition:"transform 0.2s ease-out"}},"".concat(e.id,"-trail-").concat(n)))]},e.id))})});p.displayName="BlowUPParticleEffect";let m=()=>{let e=(0,a.useRef)(!1);return(0,r.jsxs)("div",{children:[(0,r.jsx)(p,{ref:e}),(0,r.jsx)("div",{className:"relative",children:(0,r.jsx)(d,{scrollingDownRef:e})})]})}},4839:function(e,t,n){"use strict";function r(){for(var e,t,n=0,r="",a=arguments.length;n<a;n++)(e=arguments[n])&&(t=function e(t){var n,r,a="";if("string"==typeof t||"number"==typeof t)a+=t;else if("object"==typeof t){if(Array.isArray(t)){var s=t.length;for(n=0;n<s;n++)t[n]&&(r=e(t[n]))&&(a&&(a+=" "),a+=r)}else for(r in t)t[r]&&(a&&(a+=" "),a+=r)}return a}(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{W:function(){return r}}),t.Z=r}},function(e){e.O(0,[971,23,744],function(){return e(e.s=7728)}),_N_E=e.O()}]);