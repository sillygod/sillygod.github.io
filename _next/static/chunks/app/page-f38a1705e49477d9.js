(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{3677:function(t,e,i){Promise.resolve().then(i.t.bind(i,8173,23)),Promise.resolve().then(i.t.bind(i,231,23)),Promise.resolve().then(i.bind(i,78)),Promise.resolve().then(i.bind(i,7409)),Promise.resolve().then(i.bind(i,6143))},78:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return l}});var n=i(7437),s=i(2265),r=i(4839),h=i(7138),a=i(6648),o=i(9354);function d(t){let{className:e,...i}=t;return(0,n.jsx)("div",{className:(0,o.cn)("animate-pulse rounded-md bg-muted",e),...i})}var l=t=>{let{title:e,src:i,slug:o,link:l}=t,[u,c]=(0,s.useState)(!1),f=(0,n.jsx)(a.default,{src:i,fill:!0,style:{objectFit:"cover"},alt:"Cover Image for ".concat(e),className:(0,r.Z)("opacity-0 shadow-sm w-full transition-opacity duration-500",{"hover:shadow-lg transition-shadow duration-200":o},{"opacity-100":u}),onLoad:t=>0!==t.target.naturalWidth&&c(!0)});return(0,n.jsx)("div",{className:"relative w-full aspect-[4/2] overflow-hidden sm:mx-0",children:l?(0,n.jsxs)(h.default,{href:"".concat(l),"aria-label":e,children:[!u&&(0,n.jsx)(d,{className:"w-full h-full"}),f]}):f})}},7409:function(t,e,i){"use strict";var n=i(7437),s=i(2265);e.default=()=>{let t=(0,s.useRef)(null),[e,i]=(0,s.useState)({width:800,height:600});class r{update(){this.x+=this.speedX,this.y+=this.speedY,this.brightness=.5*Math.sin(.001*performance.now()+.01*this.x)+.5,(this.x<0||this.x>e.width)&&(this.speedX*=-1),(this.y<0||this.y>e.height)&&(this.speedY*=-1)}draw(t){t.fillStyle="rgba(77, 149, 185, ".concat(this.brightness,")"),t.beginPath(),t.arc(this.x,this.y,this.size,0,2*Math.PI),t.fill()}constructor(){this.x=Math.random()*e.width,this.y=Math.random()*e.height,this.size=2*Math.random(),this.speedX=.5*Math.random()-.25,this.speedY=.5*Math.random()-.25,this.brightness=Math.random()}}return(0,s.useEffect)(()=>{let t=()=>{i({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",t),t(),()=>window.removeEventListener("resize",t)},[]),(0,s.useEffect)(()=>{let i=t.current,n=null==i?void 0:i.getContext("2d"),s=[];for(let t=0;t<200;t++)s.push(new r);let h=t=>{let i=t.createLinearGradient(0,0,e.width/2,e.height/2);i.addColorStop(0,"#2d7599"),i.addColorStop(1,"#18192b"),t.fillStyle=i,t.fillRect(0,0,e.width,e.height)},a=()=>{n&&(n.clearRect(0,0,e.width,e.height),h(n),s.forEach(t=>{t.update(),t.draw(n)}),requestAnimationFrame(a))};a()},[e]),(0,n.jsx)("canvas",{ref:t,width:e.width,height:e.height,style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:-1}})}},6143:function(t,e,i){"use strict";function n(t){let{src:e,width:i}=t;return"".concat(e)}i.r(e),i.d(e,{default:function(){return n}})},9354:function(t,e,i){"use strict";i.d(e,{cn:function(){return r}});var n=i(4839),s=i(6164);function r(){for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];return(0,s.m6)((0,n.W)(e))}i(5566)}},function(t){t.O(0,[30,981,971,23,744],function(){return t(t.s=3677)}),_N_E=t.O()}]);