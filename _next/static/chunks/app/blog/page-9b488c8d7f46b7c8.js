(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[404],{5789:function(){},1763:function(e,t,r){Promise.resolve().then(r.bind(r,212)),Promise.resolve().then(r.t.bind(r,231,23)),Promise.resolve().then(r.bind(r,912)),Promise.resolve().then(r.bind(r,1481)),Promise.resolve().then(r.bind(r,5433)),Promise.resolve().then(r.bind(r,559)),Promise.resolve().then(r.bind(r,3738)),Promise.resolve().then(r.bind(r,94)),Promise.resolve().then(r.bind(r,9018)),Promise.resolve().then(r.bind(r,2330)),Promise.resolve().then(r.bind(r,9197)),Promise.resolve().then(r.bind(r,4662))},4330:function(e,t,r){"use strict";r.d(t,{default:function(){return u}});var a=r(7437),n=r(2265),s=r(212),i=r(7138),l=r(9354);function o(e){let{className:t,...r}=e;return(0,a.jsx)("div",{className:(0,l.cn)("animate-pulse rounded-md bg-muted",t),...r})}let c=e=>{var t;let{filePath:r}=e,a=(null===(t=r.split("\\").pop())||void 0===t?void 0:t.split("/").pop())||"",n=r.split(a).shift(),s=r.split(".").pop();return{path:n,filename:a.substring(0,a.lastIndexOf("."))||a,extension:s||""}},d={};var u=e=>{var t;let{title:r,src:u,slug:h,link:f,blurDataURL:m}=e,[x,p]=(0,n.useState)(!1),g=(0,a.jsx)(s.default,{src:u,blurDataURL:m||d["public"+function(e,t,r){let a=arguments.length>3&&void 0!==arguments[3]&&arguments[3],{filename:n,path:s,extension:i}=c({filePath:e});if(!["JPG","JPEG","WEBP","PNG","AVIF","GIF"].includes(i.toUpperCase()))return e;let l=i;["JPG","JPEG","PNG","GIF"].includes(i.toUpperCase())&&(l="WEBP");let o=s;"/"!==(null==o?void 0:o.substr(-1))&&(o+="/");let d=e.includes("_next/static/media");r&&(o=r.endsWith("/")&&o&&o.startsWith("/")?r+o.slice(1):r.endsWith("/")||!o||o.startsWith("/")?r+o:r+"/"+o);let u="".concat(d?r?r+"/":"":o).concat("op","/").concat(n,"-opt-").concat(t,".").concat(l.toUpperCase());return a||"/"===u.charAt(0)||(u="/"+u),u}(u,10,"")]||"",fill:!0,style:{objectFit:"cover"},alt:"Cover Image for ".concat(r),className:(0,l.cn)("opacity-0 shadow-sm w-full transition-opacity duration-500",{"hover:shadow-lg transition-shadow duration-200":h},{"opacity-100":x}),onLoad:e=>0!==e.target.naturalWidth&&p(!0)});return(0,a.jsx)("div",{className:"relative w-full aspect-[4/2] overflow-hidden sm:mx-0",children:f?(0,a.jsxs)(i.default,{href:"".concat(f),"aria-label":r,children:[!x&&(0,a.jsx)(o,{className:"w-full h-full"}),g]}):g})}},5433:function(e,t,r){"use strict";r.r(t);var a=r(7437),n=r(2265),s=r(4184),i=r(7138);t.default=e=>{let{data:t,idField:r,searchFields:l,storeFields:o}=e,[c,d]=(0,n.useState)(""),[u,h]=(0,n.useState)([]),f=new s.Z.Document({tokenize:"forward",preset:"match",context:!0,document:{id:r,index:l,store:o}});return t.forEach(e=>f.add(e)),(0,a.jsxs)("div",{className:"max-w-full py-6 rounded-lg",children:[(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)("input",{type:"text",value:c,onChange:e=>{let t=e.target.value;if(d(t),f&&t){let e=f.search(t,{limit:50,enrich:!0}).flatMap(e=>e.result),r=new Set;h(e.filter(e=>{let t=r.has(e.id);return r.add(e.id),!t}))}else h([])},placeholder:"Search...",className:"w-full p-2 pl-8 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"}),(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 absolute left-2 top-3 text-gray-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})]}),u.length>0&&(0,a.jsx)("ul",{className:"w-[100%] h-[50vh] overflow-auto inline-block scrollbar-track-transparent scrollbar-thin scrollbar-thumb-slate-400 mt-4 space-y-2",children:u.map(e=>(0,a.jsx)(i.default,{className:"inline-block w-full",href:"/blog/".concat(e.id),children:(0,a.jsxs)("li",{className:"break-all p-3 bg-gray-700 rounded hover:bg-gray-600 transition-colors",children:[(0,a.jsx)("h3",{className:"text-sm md:text-lg font-semibold text-white",children:e.doc.title}),(0,a.jsx)("div",{className:"text-gray-300 text-xs md:text-base max-h-7 mt-1 overflow-hidden text-ellipsis",children:e.doc.content})]},e.id)},e.id))})]})}},559:function(e,t,r){"use strict";var a=r(7437),n=r(2265);class s{update(e){this.x+=this.speedX,this.y+=this.speedY,(this.x<0||this.x>e.width)&&(this.speedX*=-1),(this.y<0||this.y>e.height)&&(this.speedY*=-1)}draw(e){e.fillStyle=this.color,e.beginPath(),e.arc(this.x,this.y,this.size,0,2*Math.PI),e.fill()}constructor(e){this.x=Math.random()*e.width,this.y=Math.random()*e.height,this.size=2*Math.random()+.5,this.speedX=.5*Math.random()-.25,this.speedY=.5*Math.random()-.25,this.color="rgba(255, 255, 255, ".concat(.3*Math.random()+.1,")")}}t.default=e=>{let{count:t=100,connectionDistance:r=100}=e,i=(0,n.useRef)(null),l=(0,n.useRef)([]);return(0,n.useEffect)(()=>{let e,a=window.innerWidth<768?50:t,n=i.current,o=null==n?void 0:n.getContext("2d"),c=()=>{n&&(n.width=window.innerWidth,n.height=window.innerHeight,a=window.innerWidth<768?50:t,l.current=[])},d=()=>{l.current=[];for(let e=0;e<a;e++)l.current.push(new s(n))},u=()=>{l.current.forEach((e,t)=>{for(let a=t+1;a<l.current.length;a++){let t=e.x-l.current[a].x,n=e.y-l.current[a].y,s=Math.sqrt(t*t+n*n);s<r&&o&&(o.strokeStyle="rgba(0, 255, 255, ".concat(1-s/r,")"),o.lineWidth=.5,o.beginPath(),o.moveTo(e.x,e.y),o.lineTo(l.current[a].x,l.current[a].y),o.stroke())}})},h=()=>{o&&n&&(o.clearRect(0,0,n.width,n.height),u(),l.current.forEach(e=>{e.update(n),e.draw(o)}),e=requestAnimationFrame(h))};return c(),d(),h(),window.addEventListener("resize",()=>{n&&n.width===window.innerWidth||(c(),d())}),()=>{cancelAnimationFrame(e),window.removeEventListener("resize",c)}},[]),(0,a.jsx)("canvas",{ref:i,style:{position:"fixed",top:0,left:0,width:"100%",height:"100vh",zIndex:-1}})}},3738:function(e,t,r){"use strict";r.d(t,{PostPreview:function(){return f}});var a=r(7437),n=r(8185),s=r(7138),i=r(4330),l=r(624),o=r(8665),c=e=>{let{dateString:t}=e;if(!t)return null;let r=(0,l.D)(t);return(0,a.jsx)("time",{dateTime:t,children:(0,o.WU)(r,"LLLL	d, yyyy")})},d=r(7245),u=r(2265),h=r(9354);function f(e){let{title:t,coverImage:r,blurCoverImage:l,date:o,excerpt:f,slug:m,link:x}=e,p=(0,u.useRef)(null),[g,v]=(0,u.useState)(!1);return(0,u.useEffect)(()=>{(0,d.j)(p.current,()=>{v(!0)})}),(0,a.jsxs)(n.Zb,{ref:p,className:(0,h.cn)("opacity-0 bg-transparent border-image-fancy",{"animate-fade animate-delay-200 ":g}),children:[(0,a.jsx)(n.Ol,{children:(0,a.jsx)(s.default,{href:"".concat(x),className:"text-xl leading-snug hover:underline",children:t})}),(0,a.jsxs)(n.aY,{children:[(0,a.jsx)("div",{className:"mb-2",children:(0,a.jsx)(i.default,{slug:m,title:t,src:r||"/jbassets/post-preview.jpeg",blurDataURL:l,link:x})}),(0,a.jsx)("div",{className:"text-cool_gray-400 text-lg",children:(0,a.jsx)(c,{dateString:o})}),(0,a.jsx)("span",{className:"break-all inline-block h-[12vh] md:h-[10vh] md:overflow-hidden overflow-ellipsis text-sub_gray text-sm",dangerouslySetInnerHTML:{__html:f}})]})]})}},94:function(e,t,r){"use strict";r.d(t,{default:function(){return i}});var a=r(7437),n=r(6463),s=r(7138);function i(e){let{tags:t}=e,r=(0,n.useSearchParams)().get("tag");return(0,a.jsxs)("div",{className:"mr-2 overflow-auto scrollbar-none text-base md:text-xl items-center flex flex-row space-x-4 md:space-x-6 ",children:[(0,a.jsx)(s.default,{className:"hover:underline ".concat(r?"":"underline"),scroll:!1,href:"/blog",children:"all"}),t.map(e=>(0,a.jsx)(s.default,{className:"hover:underline ".concat(r===e?"underline":""),href:"/blog/?tag=".concat(e),scroll:!1,children:e},e))]})}},9018:function(e,t,r){"use strict";r.d(t,{TagsStories:function(){return o}});var a=r(7437),n=r(3738),s=r(6463),i=r(7245),l=r(2265);function o(e){let{posts:t}=e,r=t.length,o=(0,s.useSearchParams)().get("tag"),[c,d]=(0,l.useState)(10),u=(0,l.useRef)([]);return o&&(t=t.filter(e=>{var t;return null===(t=e.filetags)||void 0===t?void 0:t.includes(o)})),(0,l.useEffect)(()=>{u.current.forEach((e,t)=>{e&&t>=c-5&&(0,i.j)(e,()=>{c<r&&t>=c-5&&d(c+10)})})},[c,t,r]),(0,a.jsx)(l.Fragment,{children:t.slice(0,c).map((e,t)=>(0,a.jsx)("div",{ref:function(e){u.current[t]=e},children:(0,a.jsx)(n.PostPreview,{title:e.title,coverImage:e.cover_image,date:e.date,slug:e.slug,link:"/blog/"+e.slug,excerpt:e.excerpt},e.slug)},t))})}},2330:function(e,t,r){"use strict";r.d(t,{LazyTechExpansion:function(){return l}});var a=r(7437),n=r(4839),s=r(2265),i=r(7818);let l=e=>{let{blinks:t}=e;return(0,a.jsx)(c,{ContentComponent:(0,a.jsx)(o,{blinks:t})})},o=(0,i.default)(()=>Promise.all([r.e(969),r.e(358)]).then(r.bind(r,358)),{loadableGenerated:{webpack:()=>[358]},loading:()=>(0,a.jsx)("p",{children:"Loading..."}),ssr:!1}),c=e=>{let{ContentComponent:t}=e,[r,i]=(0,s.useState)(!1),[l,o]=(0,s.useState)(!1),c=(0,s.useRef)(null),d=(0,s.useRef)(null);(0,s.useEffect)(()=>{let e=e=>{r&&c.current&&d.current&&!c.current.contains(e.target)&&!d.current.contains(e.target)&&(u(),setTimeout(()=>{var e;null===(e=d.current)||void 0===e||e.scrollIntoView({behavior:"smooth",block:"center",inline:"center"})},100))};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[r]);let u=()=>{i(!1),setTimeout(()=>{o(!1)},300)};return(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:"text-center text-lg md:text-xl tracking-normal",children:"click to see it"}),(0,a.jsxs)("div",{className:(0,n.Z)("w-full relative overflow-hidden flex-col flex items-center justify-center",{"h-screen ":r},{"h-22 ":!r}),children:[(0,a.jsx)("div",{ref:d,onClick:()=>{r?u():(o(!0),setTimeout(()=>{i(!0),setTimeout(()=>{var e;null===(e=c.current)||void 0===e||e.scrollIntoView({behavior:"smooth",block:"center",inline:"center"})},100)},600))},className:"\n          relative w-16 h-16 cursor-pointer\n          ".concat(r?"opacity-50":"","\n        "),style:{animation:r?"none":"spin 12s linear infinite"},children:(0,a.jsx)("div",{className:"absolute inset-0",children:(0,a.jsxs)("svg",{viewBox:"0 0 100 100",children:[(0,a.jsx)("circle",{cx:"50",cy:"50",r:"48",fill:"none",stroke:"#0ea5e9",strokeWidth:"0.5",strokeDasharray:"1,3"}),(0,a.jsx)("circle",{cx:"50",cy:"50",r:"42",fill:"none",stroke:"#0ea5e9",strokeWidth:"0.5",strokeDasharray:"2,2"}),[0,45,90,135,180,225,270,315].map(e=>(0,a.jsxs)("g",{transform:"rotate(".concat(e," 50 50)"),children:[(0,a.jsx)("line",{x1:"50",y1:"25",x2:"50",y2:"42",stroke:"#0ea5e9",strokeWidth:"0.5",strokeDasharray:"1,2"}),(0,a.jsx)("circle",{cx:"50",cy:"33.5",r:"1",fill:"#0ea5e9",children:(0,a.jsx)("animate",{attributeName:"cy",values:"25;42;25",dur:"1.5s",repeatCount:"indefinite"})})]},"line-".concat(e))),[...Array(12)].map((e,t)=>{let r=30*t*(Math.PI/180);return(0,a.jsx)("circle",{cx:50+35*Math.cos(r),cy:50+35*Math.sin(r),r:"1",fill:"#0ea5e9",children:(0,a.jsx)("animate",{attributeName:"r",values:"0.5;1.5;0.5",dur:"".concat(1+.2*t,"s"),repeatCount:"indefinite"})},"point-".concat(t))}),(0,a.jsx)("circle",{cx:"50",cy:"50",r:"24",fill:"#0ea5e9",className:"opacity-10"}),(0,a.jsx)("circle",{cx:"50",cy:"50",r:"20",fill:"#0ea5e9",className:"opacity-20"}),(0,a.jsx)("circle",{cx:"50",cy:"50",r:"16",fill:"#0ea5e9",className:"opacity-30"}),(0,a.jsx)("circle",{cx:"50",cy:"50",r:"12",fill:"#0ea5e9",className:"opacity-90"}),[...Array(8)].map((e,t)=>{let r=45*t*(Math.PI/180);return(0,a.jsx)("circle",{cx:50+20*Math.cos(r),cy:50+20*Math.sin(r),r:"1.5",fill:"#0ea5e9",children:(0,a.jsx)("animate",{attributeName:"opacity",values:"1;0.5;1",dur:"".concat(1+.3*t,"s"),repeatCount:"indefinite"})},"inner-point-".concat(t))})]})})}),(0,a.jsx)("div",{className:(0,n.Z)("absolute h-0.5 bg-sky-400 transition-all duration-500 ease-out",{"opacity-100 w-[90%]":l&&!r},{"opacity-0 w-[60%]":!l},{"opacity-0":r}),style:{boxShadow:"0 0 10px #0ea5e9, 0 0 20px #0ea5e9",top:"50%",transform:"translateY(-50%)"}}),(0,a.jsx)("div",{ref:c,className:(0,n.Z)("\n          absolute bg-sky-950/90 backdrop-blur-sm overflow-hidden\n          transition-all duration-500 ease-out\n        ",{"h-[90%] opacity-100":r},{"h-0 opacity-0":!r}),style:{left:"5%",right:"5%",top:"50%",transform:"translateY(-50%)",border:"1px solid #0ea5e9",boxShadow:"0 0 20px rgba(14, 165, 233, 0.2)"},children:t})]})]})}},9197:function(e,t,r){"use strict";var a=r(7437),n=r(2265);t.default=e=>{let{content:t}=e,[r,s]=(0,n.useState)(""),[i,l]=(0,n.useState)(0);return(0,n.useEffect)(()=>{if(i<t.length){let e=setTimeout(()=>{s(e=>e+t[i]),l(e=>e+1)},150);return()=>clearTimeout(e)}},[i]),(0,a.jsxs)("div",{children:[r,(0,a.jsx)("span",{className:"animate-pulse",children:"|"})]})}},8185:function(e,t,r){"use strict";r.d(t,{Ol:function(){return l},Zb:function(){return i},aY:function(){return o},eW:function(){return c}});var a=r(7437),n=r(2265),s=r(9354);let i=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)("div",{ref:t,className:(0,s.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",r),...n})});i.displayName="Card";let l=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)("div",{ref:t,className:(0,s.cn)("flex flex-col space-y-1.5 p-6",r),...n})});l.displayName="CardHeader",n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)("h3",{ref:t,className:(0,s.cn)("text-2xl font-semibold leading-none tracking-tight",r),...n})}).displayName="CardTitle",n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)("p",{ref:t,className:(0,s.cn)("text-sm text-muted-foreground",r),...n})}).displayName="CardDescription";let o=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)("div",{ref:t,className:(0,s.cn)("p-6 pt-0",r),...n})});o.displayName="CardContent";let c=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)("div",{ref:t,className:(0,s.cn)("flex items-center p-6 pt-0",r),...n})});c.displayName="CardFooter"},4662:function(e,t,r){"use strict";r.d(t,{Dialog:function(){return o},DialogContent:function(){return h},DialogTrigger:function(){return c}});var a=r(7437),n=r(2265),s=r(6286),i=r(4697),l=r(9354);let o=s.fC,c=s.xz,d=s.h_;s.x8;let u=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)(s.aV,{ref:t,className:(0,l.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",r),...n})});u.displayName=s.aV.displayName;let h=n.forwardRef((e,t)=>{let{className:r,children:n,...o}=e;return(0,a.jsxs)(d,{children:[(0,a.jsx)(u,{}),(0,a.jsxs)(s.VY,{ref:t,className:(0,l.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",r),...o,children:[n,(0,a.jsxs)(s.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[(0,a.jsx)(i.Z,{className:"h-4 w-4"}),(0,a.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});h.displayName=s.VY.displayName,n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)(s.Dx,{ref:t,className:(0,l.cn)("text-lg font-semibold leading-none tracking-tight",r),...n})}).displayName=s.Dx.displayName,n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)(s.dk,{ref:t,className:(0,l.cn)("text-sm text-muted-foreground",r),...n})}).displayName=s.dk.displayName},9354:function(e,t,r){"use strict";r.d(t,{cn:function(){return s}});var a=r(4839),n=r(6164);function s(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.m6)((0,a.W)(t))}r(5566)}},function(e){e.O(0,[212,231,590,779,664,971,23,744],function(){return e(e.s=1763)}),_N_E=e.O()}]);