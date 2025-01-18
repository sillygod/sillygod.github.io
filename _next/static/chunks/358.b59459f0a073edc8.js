"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[358],{358:function(e,t,r){r.r(t);var n=r(7437),s=r(2265),a=r(8185),i=r(9733),o=r(4697),l=r(2513),c=r(8002),d=r(6673),u=r(3353),f=r(2356),x=r(9359),h=r(7937),g=r(9016),m=r(3854);let p=e=>{let{node:t,position:r,onClose:a,connectedNodes:l,onPositionChange:c}=e,[d,u]=(0,s.useState)(!1),[f,x]=(0,s.useState)({x:0,y:0});if(!t)return null;let h=()=>{u(!1)};return(0,n.jsxs)("div",{className:"absolute bg-gray-800 border border-gray-600 rounded-lg shadow-lg z-50",style:{left:"".concat(r.x,"px"),top:"".concat(r.y,"px"),maxWidth:"250px",userSelect:"none"},onMouseMove:e=>{d&&c({x:e.clientX-f.x,y:e.clientY-f.y})},onMouseUp:h,onMouseLeave:h,children:[(0,n.jsxs)("div",{className:"flex justify-between items-center p-4 border-b border-gray-600 cursor-grab active:cursor-grabbing",onMouseDown:e=>{u(!0),x({x:e.clientX-r.x,y:e.clientY-r.y})},children:[(0,n.jsx)("h3",{className:"text-white font-medium truncate max-w-[180px]",title:t.id,children:t.id}),(0,n.jsx)(i.z,{variant:"ghost",size:"icon",onClick:a,className:"h-6 w-6 shrink-0 ml-2",children:(0,n.jsx)(o.Z,{className:"h-4 w-4"})})]}),(0,n.jsxs)("div",{className:"p-4 space-y-2 text-sm",children:[(0,n.jsx)("p",{className:"text-gray-300",children:(0,n.jsx)("a",{"aria-label":t.id,href:"/blog/".concat(t.id),className:"text-blue-400 hover:underline",children:"View the post"})}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:"text-gray-300 mb-1",children:"Connected to:"}),(0,n.jsx)("div",{className:"flex flex-wrap gap-1 max-h-[120px] scrollbar-track-transparent scrollbar-thin scrollbar-thumb-slate-400 overflow-y-auto",children:Array.from(l).map(e=>(0,n.jsx)("span",{className:"bg-gray-700 text-gray-300 px-2 py-1 rounded-md text-xs max-w-full",title:e,children:(0,n.jsx)("span",{className:"block truncate",children:e})},e))})]})]})]})};t.default=e=>{let{blinks:t}=e,[r,o]=(0,s.useState)(1),[b,y]=(0,s.useState)({x:0,y:0}),v=Object.keys(t).map(e=>{let r=Array.from(t[e]).length,n=Object.entries(t).filter(t=>{let[r,n]=t;return n instanceof Set?n.has(e):n.includes(e)}).length;return{id:e,x:200*Math.random()+50,y:200*Math.random()+50,connections:r+n}}),[j,w]=(0,s.useState)(v),[k,N]=(0,s.useState)([]),[z,M]=(0,s.useState)("0 0 400 400"),[S,C]=(0,s.useState)(null),[E,Y]=(0,s.useState)(null),Z=(0,s.useRef)(null),B=(0,s.useRef)(null),L=(0,s.useRef)(null),R=e=>{let t=new Set;return k.forEach(r=>{let n="string"==typeof r.source?r.source:r.source.id,s="string"==typeof r.target?r.target:r.target.id;n===e&&t.add(s),s===e&&t.add(n)}),t},W=e=>m.BYU().domain([1,Math.max(...j.map(e=>e.connections))]).range([6,12])(e),X=(e,t)=>{var r;e.stopPropagation();let n=null===(r=Z.current)||void 0===r?void 0:r.getBoundingClientRect();n&&y({x:e.clientX-n.left+20,y:e.clientY-n.top+20}),Y(e=>e===t?null:t)},A=e=>{let t=Math.max(e*r,4);return t>8?8:t},H=e=>{if(!Z.current||!L.current)return;let t=m.Ys(Z.current),r=m.P2S(Z.current),n=r.k;switch(e){case"in":n*=1.5;break;case"out":n/=1.5;break;case"reset":n=1}let s=m.CRH.scale(n).translate(r.x,r.y);t.transition().duration(300).call(L.current.transform,s)};return(0,s.useEffect)(()=>{window.innerHeight>window.innerWidth?M("0 0 400 900"):M("0 0 400 400");let e=[];Object.entries(t).forEach(t=>{let[r,n]=t;n.forEach(t=>{j.some(e=>e.id===t)&&j.some(e=>e.id===r)&&e.push({source:t,target:r})})}),N(e);let r=(0,u.Z)(j).force("link",(0,f.Z)(e).id(e=>e.id).distance(40)).force("charge",(0,x.Z)().strength(-200)).force("center",(0,h.Z)(150,150)).force("collision",(0,g.Z)().radius(e=>W(e.connections)+10)).on("tick",()=>{w([...r.nodes()])}),n=m.ohM().on("start",(e,t)=>{e.active||r.alphaTarget(.3).restart(),e.subject.fx=e.subject.x,e.subject.fy=e.subject.y}).on("drag",(e,t)=>{e.subject.fx=e.x,e.subject.fy=e.y}).on("end",(e,t)=>{e.active||r.alphaTarget(0),e.subject.fx=null,e.subject.fy=null});B.current&&m.Ys(B.current).selectAll("circle").data(j).join("circle").call(n);let s=m.sPX().scaleExtent([.3,5]).on("zoom",e=>{B.current&&(o(e.transform.k),m.Ys(B.current).attr("transform",e.transform))});return L.current=s,Z.current&&m.Ys(Z.current).call(s),()=>{r.stop()}},[t]),(0,n.jsxs)(a.Zb,{className:"w-full mx-auto bg-transparent border-transparent relative",children:[(0,n.jsxs)("div",{className:"absolute top-4 right-4 flex flex-col gap-2 z-10",children:[(0,n.jsx)(i.z,{"aria-label":"zoom in",className:"bg-transparent",variant:"outline",size:"icon",onClick:()=>H("in"),children:(0,n.jsx)(l.Z,{className:"h-4 w-4"})}),(0,n.jsx)(i.z,{"aria-label":"zoom out",className:"bg-transparent",variant:"outline",size:"icon",onClick:()=>H("out"),children:(0,n.jsx)(c.Z,{className:"h-4 w-4"})}),(0,n.jsx)(i.z,{"aria-label":"zoom reset",className:"bg-transparent",variant:"outline",size:"icon",onClick:()=>H("reset"),children:(0,n.jsx)(d.Z,{className:"h-4 w-4"})})]}),E&&(0,n.jsx)(p,{node:j.find(e=>e.id===E)||null,position:b,onClose:()=>Y(null),connectedNodes:R(E),onPositionChange:y}),(0,n.jsxs)("svg",{ref:Z,className:"w-full h-full",viewBox:z,style:{overflow:"hidden"},children:[(0,n.jsxs)("defs",{children:[(0,n.jsx)("marker",{id:"arrow-normal",viewBox:"0 0 10 10",refX:"8",refY:"5",markerWidth:"6",markerHeight:"3",orient:"auto",children:(0,n.jsx)("path",{d:"M 0 0 L 10 5 L 0 10 z",fill:"#24bde3"})}),(0,n.jsx)("marker",{id:"arrow-highlighted",viewBox:"0 0 10 10",refX:"8",refY:"5",markerWidth:"6",markerHeight:"3",orient:"auto",children:(0,n.jsx)("path",{d:"M 0 0 L 10 5 L 0 10 z",fill:"#3b82f6"})})]}),(0,n.jsxs)("g",{ref:B,children:[k.map((e,t)=>{let r="string"==typeof e.source?j.find(t=>t.id===e.source):e.source,s="string"==typeof e.target?j.find(t=>t.id===e.target):e.target;if(!r||!s)return null;let a=W(r.connections),i=W(s.connections),o=s.x-r.x,l=s.y-r.y,c=Math.sqrt(o*o+l*l),d="string"==typeof e.source?e.source:e.source.id,u="string"==typeof e.target?e.target:e.target.id,f=E||S,x=f&&(d===f||u===f);return(0,n.jsx)("line",{x1:r.x+o/c*(a+2),y1:r.y+l/c*(a+2),x2:s.x-o/c*(i+2),y2:s.y-l/c*(i+2),stroke:x?"#3b82f6":"#4b5563",strokeWidth:x?"1.5":"0.5",markerEnd:x?"url(#arrow-highlighted)":"url(#arrow-normal)",opacity:x?1:.5,style:{transition:"stroke 0.2s ease-in-out, stroke-width 0.2s ease-in-out, opacity 0.2s ease-in-out"}},"edge-".concat(t))}),j.map(e=>{let t=E===e.id||S===e.id,r=E||S,s=r&&R(r).has(e.id),a=W(e.connections);return(0,n.jsxs)("g",{onClick:t=>X(t,e.id),onMouseEnter:()=>C(e.id),onMouseLeave:()=>C(null),className:"cursor-pointer",children:[(0,n.jsx)("circle",{cx:e.x,cy:e.y,r:a,fill:"transparent",stroke:t?"#3b82f6":s?"#60a5fa":"#9ca3af",strokeWidth:t||s?"2":"1",style:{filter:t?"drop-shadow(0 0 6px #3b82f6)":s?"drop-shadow(0 0 5px #60a5fa)":"drop-shadow(0 0 4px #3b82f6)",transition:"stroke 0.2s ease-in-out, stroke-width 0.2s ease-in-out, filter 0.2s ease-in-out"}}),(0,n.jsx)("text",{x:e.x,y:e.y+a+12,textAnchor:"middle",dominantBaseline:"middle",fill:t||s?"#ffffff":"#e5e7eb",style:{fontSize:"".concat(A(4),"px"),pointerEvents:"none",transition:"fill 0.2s ease-in-out"},children:e.id})]},e.id)})]})]})]})}},9733:function(e,t,r){r.d(t,{z:function(){return c}});var n=r(7437),s=r(2265),a=r(1538),i=r(2218),o=r(9354);let l=(0,i.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),c=s.forwardRef((e,t)=>{let{className:r,variant:s,size:i,asChild:c=!1,...d}=e,u=c?a.g7:"button";return(0,n.jsx)(u,{className:(0,o.cn)(l({variant:s,size:i,className:r})),ref:t,...d})});c.displayName="Button"}}]);