(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{3677:function(t,e,i){Promise.resolve().then(i.t.bind(i,8173,23)),Promise.resolve().then(i.t.bind(i,231,23)),Promise.resolve().then(i.bind(i,78)),Promise.resolve().then(i.bind(i,7409)),Promise.resolve().then(i.bind(i,6143))},78:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return l}});var n=i(7437),r=i(2265),s=i(4839),a=i(7138),h=i(6648),o=i(9354);function d(t){let{className:e,...i}=t;return(0,n.jsx)("div",{className:(0,o.cn)("animate-pulse rounded-md bg-muted",e),...i})}var l=t=>{let{title:e,src:i,slug:o,link:l}=t,[u,c]=(0,r.useState)(!1),f=(0,n.jsx)(h.default,{src:i,fill:!0,style:{objectFit:"cover"},alt:"Cover Image for ".concat(e),className:(0,s.Z)("opacity-0 shadow-sm w-full transition-opacity duration-500",{"hover:shadow-lg transition-shadow duration-200":o},{"opacity-100":u}),onLoad:t=>0!==t.target.naturalWidth&&c(!0)});return(0,n.jsx)("div",{className:"relative w-full aspect-[4/2] overflow-hidden sm:mx-0",children:l?(0,n.jsxs)(a.default,{href:"".concat(l),"aria-label":e,children:[!u&&(0,n.jsx)(d,{className:"w-full h-full"}),f]}):f})}},7409:function(t,e,i){"use strict";var n=i(7437),r=i(2265);class s{update(t){this.x+=this.speedX,this.y+=this.speedY,this.brightness=.5*Math.sin(.001*performance.now()+.01*this.x)+.5,(this.x<0||this.x>t.width)&&(this.speedX*=-1),(this.y<0||this.y>t.height)&&(this.speedY*=-1)}draw(t){t.fillStyle="rgba(77, 149, 185, ".concat(this.brightness,")"),t.beginPath(),t.arc(this.x,this.y,this.size,0,2*Math.PI),t.fill()}constructor(t){this.x=Math.random()*t.width,this.y=Math.random()*t.height,this.size=2*Math.random(),this.speedX=.5*Math.random()-.25,this.speedY=.5*Math.random()-.25,this.brightness=Math.random()}}e.default=()=>{let t=(0,r.useRef)(null),e=(0,r.useRef)([]);return(0,r.useEffect)(()=>{let i;let n=t.current,r=null==n?void 0:n.getContext("2d"),a=()=>{n&&(n.width=window.innerWidth,n.height=window.innerHeight,e.current=[])};window.addEventListener("resize",()=>{n&&n.width===window.innerWidth||(a(),h())});let h=()=>{for(let t=0;t<200;t++)e.current.push(new s(n))},o=t=>{if(!n)return;let e=t.createLinearGradient(0,0,n.width/2,n.height/2);e.addColorStop(0,"#2d7599"),e.addColorStop(1,"#18192b"),t.fillStyle=e,t.fillRect(0,0,n.width,n.height)},d=()=>{r&&n&&(r.clearRect(0,0,n.width,n.height),o(r),e.current.forEach(t=>{t.update(n),t.draw(r)}),i=requestAnimationFrame(d))};return a(),h(),d(),()=>{cancelAnimationFrame(i),window.removeEventListener("resize",a)}},[]),(0,n.jsx)("canvas",{ref:t,style:{position:"fixed",top:0,left:0,width:"100%",height:"100vh",zIndex:-1}})}},6143:function(t,e,i){"use strict";function n(t){let{src:e,width:i}=t;return"".concat(e)}i.r(e),i.d(e,{default:function(){return n}})},9354:function(t,e,i){"use strict";i.d(e,{cn:function(){return s}});var n=i(4839),r=i(6164);function s(){for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];return(0,r.m6)((0,n.W)(e))}i(5566)}},function(t){t.O(0,[30,981,971,23,744],function(){return t(t.s=3677)}),_N_E=t.O()}]);