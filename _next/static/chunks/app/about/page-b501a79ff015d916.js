(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[301],{2732:function(t,e,r){Promise.resolve().then(r.bind(r,4300)),Promise.resolve().then(r.t.bind(r,231,23))},4300:function(t,e,r){"use strict";var n=r(6648),i=r(2265);let o=t=>{var e;let{filePath:r}=t,n=(null===(e=r.split("\\").pop())||void 0===e?void 0:e.split("/").pop())||"",i=r.split(n).shift(),o=r.split(".").pop();return{path:i,filename:n.substring(0,n.lastIndexOf("."))||n,extension:o||""}},l=function(t,e,r){let n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],{filename:i,path:l,extension:s}=o({filePath:t});if(!["JPG","JPEG","WEBP","PNG","AVIF","GIF"].includes(s.toUpperCase()))return t;let a=s;["JPG","JPEG","PNG","GIF"].includes(s.toUpperCase())&&(a="WEBP");let u=l;"/"!=(null==u?void 0:u.substr(-1))&&(u+="/");let c=t.includes("_next/static/media");r&&(u=r.endsWith("/")&&u&&u.startsWith("/")?r+u.slice(1):r.endsWith("/")||!u||u.startsWith("/")?r+u:r+"/"+u);let h="".concat(c?r?r+"/":"":u).concat("op","/").concat(i,"-opt-").concat(e,".").concat(a.toUpperCase());return n||"/"===h.charAt(0)||(h="/"+h),h},s=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=3735928559^e,n=1103547991^e;for(let e=0,i;e<t.length;e++)r=Math.imul(r^(i=t.charCodeAt(e)),2654435761),n=Math.imul(n^i,1597334677);return r=Math.imul(r^r>>>16,2246822507)^Math.imul(n^n>>>13,3266489909),4294967296*(2097151&(n=Math.imul(n^n>>>16,2246822507)^Math.imul(r^r>>>13,3266489909)))+(r>>>0)},a=t=>{let{src:e,width:r,basePath:n}=t;return l(function(t){try{let e=new URL(t).pathname.split(".").pop();if(e)return s(t).toString().concat(".",e)}catch(e){console.error("Error parsing URL",t,e)}return s(t).toString()}(e),r,n,!0)},u=t=>{let{src:e,width:r,basePath:n}=t,i="object"==typeof e,o=i?e.src:e,s=i&&e.width||void 0;if(i&&s&&r>s){let t=[...[320,640,1080,1200].map(Number),...[10,64,128,256].map(Number)];(t=t.filter((t,e,r)=>r.indexOf(t)===e)).sort((t,e)=>t-e);let e=null;for(let r=0;r<t.length;r++)Number(t[r])>=s&&(null===e||Number(t[r])<e)&&(e=Number(t[r]));if(null!==e)return l(o,e,n)}return o.startsWith("http")?a({src:o,width:r,basePath:n}):l(o,r,n)},c=t=>{let{src:e}=t,r="object"==typeof e?e.src:e;return r.startsWith("http")||"/"===r.charAt(0)||(r="/"+r),r},h=(0,i.forwardRef)((t,e)=>{let{src:r,priority:o=!1,loading:s,className:h,width:p,height:d,onLoad:f,unoptimized:b,placeholder:m="blur",basePath:g="",alt:v="",blurDataURL:W,style:P,onError:E,overrideSrc:N,...y}=t,[k,w]=(0,i.useState)(!1),G=(0,i.useMemo)(()=>{if(W)return W;let t="object"==typeof r?r.src:r;return!0===b?t:t.startsWith("http")?a({src:t,width:10,basePath:g}):l(t,10,g)},[W,r,b,g]),j="object"==typeof r?r.src.endsWith(".svg"):r.endsWith(".svg"),[M,_]=(0,i.useState)(!1),C="blur"===m&&!j&&G&&G.startsWith("/")&&!M?{backgroundSize:(null==P?void 0:P.objectFit)||"cover",backgroundPosition:(null==P?void 0:P.objectPosition)||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("'.concat(G,'")')}:void 0,I="object"==typeof r,U=I?r.src:r;return g&&!I&&U.startsWith("/")&&(U=g+U),!g||I||U.startsWith("/")||(U=g+"/"+U),i.createElement(n.default,{ref:e,alt:v,...y,...p&&{width:p},...d&&{height:d},...s&&{loading:s},...h&&{className:h},...f&&{onLoad:f},...N&&{overrideSrc:N},...m&&{placeholder:C||M?"empty":m},...b&&{unoptimized:b},...o&&{priority:o},...j&&{unoptimized:!0},style:{...P,...C},loader:k||!0===b?()=>c({src:N||r}):t=>u({src:r,width:t.width,basePath:g}),blurDataURL:G,onError:t=>{w(!0),_(!0),E&&E(t)},onLoad:t=>{0===t.target.naturalWidth&&w(!0),_(!0),f&&f(t)},src:I?r:U})});h.displayName="ExportedImage",e.default=h}},function(t){t.O(0,[159,971,23,744],function(){return t(t.s=2732)}),_N_E=t.O()}]);