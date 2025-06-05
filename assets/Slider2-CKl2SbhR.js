import{r as Q,g as U,j as _}from"./index-H_PIXf7D.js";var y={},B;function V(){if(B)return y;B=1;function w(a){if(typeof window>"u")return;const l=document.createElement("style");return l.setAttribute("type","text/css"),l.innerHTML=a,document.head.appendChild(l),a}Object.defineProperty(y,"__esModule",{value:!0});var e=Q();function x(a){return a&&typeof a=="object"&&"default"in a?a:{default:a}}var r=x(e);w(`.rfm-marquee-container {
  overflow-x: hidden;
  display: flex;
  flex-direction: row;
  position: relative;
  width: var(--width);
  transform: var(--transform);
}
.rfm-marquee-container:hover div {
  animation-play-state: var(--pause-on-hover);
}
.rfm-marquee-container:active div {
  animation-play-state: var(--pause-on-click);
}

.rfm-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
}
.rfm-overlay::before, .rfm-overlay::after {
  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));
  content: "";
  height: 100%;
  position: absolute;
  width: var(--gradient-width);
  z-index: 2;
  pointer-events: none;
  touch-action: none;
}
.rfm-overlay::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}
.rfm-overlay::before {
  left: 0;
  top: 0;
}

.rfm-marquee {
  flex: 0 0 auto;
  min-width: var(--min-width);
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);
  animation-play-state: var(--play);
  animation-delay: var(--delay);
  animation-direction: var(--direction);
}
@keyframes scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.rfm-initial-child-container {
  flex: 0 0 auto;
  display: flex;
  min-width: auto;
  flex-direction: row;
  align-items: center;
}

.rfm-child {
  transform: var(--transform);
}`);const b=e.forwardRef(function({style:l={},className:I="",autoFill:u=!1,play:c=!0,pauseOnHover:j=!1,pauseOnClick:q=!1,direction:t="left",speed:m=50,delay:C=0,loop:E=0,gradient:L=!1,gradientColor:k="white",gradientWidth:h=200,onFinish:O,onCycleComplete:X,onMount:z,children:p},P){const[R,T]=e.useState(0),[g,Z]=e.useState(0),[v,$]=e.useState(1),[M,G]=e.useState(!1),H=e.useRef(null),i=P||H,f=e.useRef(null),d=e.useCallback(()=>{if(f.current&&i.current){const n=i.current.getBoundingClientRect(),S=f.current.getBoundingClientRect();let o=n.width,s=S.width;(t==="up"||t==="down")&&(o=n.height,s=S.height),$(u&&o&&s&&s<o?Math.ceil(o/s):1),T(o),Z(s)}},[u,i,t]);e.useEffect(()=>{if(M&&(d(),f.current&&i.current)){const n=new ResizeObserver(()=>d());return n.observe(i.current),n.observe(f.current),()=>{n&&n.disconnect()}}},[d,i,M]),e.useEffect(()=>{d()},[d,p]),e.useEffect(()=>{G(!0)},[]),e.useEffect(()=>{typeof z=="function"&&z()},[]);const A=e.useMemo(()=>u?g*v/m:g<R?R/m:g/m,[u,R,g,v,m]),J=e.useMemo(()=>Object.assign(Object.assign({},l),{"--pause-on-hover":!c||j?"paused":"running","--pause-on-click":!c||j&&!q||q?"paused":"running","--width":t==="up"||t==="down"?"100vh":"100%","--transform":t==="up"?"rotate(-90deg)":t==="down"?"rotate(90deg)":"none"}),[l,c,j,q,t]),K=e.useMemo(()=>({"--gradient-color":k,"--gradient-width":typeof h=="number"?`${h}px`:h}),[k,h]),D=e.useMemo(()=>({"--play":c?"running":"paused","--direction":t==="left"?"normal":"reverse","--duration":`${A}s`,"--delay":`${C}s`,"--iteration-count":E?`${E}`:"infinite","--min-width":u?"auto":"100%"}),[c,t,A,C,E,u]),N=e.useMemo(()=>({"--transform":t==="up"?"rotate(90deg)":t==="down"?"rotate(-90deg)":"none"}),[t]),W=e.useCallback(n=>[...Array(Number.isFinite(n)&&n>=0?n:0)].map((S,o)=>r.default.createElement(e.Fragment,{key:o},e.Children.map(p,s=>r.default.createElement("div",{style:N,className:"rfm-child"},s)))),[N,p]);return M?r.default.createElement("div",{ref:i,style:J,className:"rfm-marquee-container "+I},L&&r.default.createElement("div",{style:K,className:"rfm-overlay"}),r.default.createElement("div",{className:"rfm-marquee",style:D,onAnimationIteration:X,onAnimationEnd:O},r.default.createElement("div",{className:"rfm-initial-child-container",ref:f},e.Children.map(p,n=>r.default.createElement("div",{style:N,className:"rfm-child"},n))),W(v-1)),r.default.createElement("div",{className:"rfm-marquee",style:D},W(v))):null});return y.default=b,y}var Y=V();const F=U(Y),te=()=>{const w=["./1.jpg","./2.jpg","./3.jpg","./4.jpg","./5.jpg","./6.jpg","./7.jpg","./8.jpg","./9.jpg","./10.jpg","./11.jpg"],e={width:"320px",height:"220px",objectFit:"fill"};return _.jsx("div",{className:"md:top-auto",children:_.jsx(F,{pauseOnHover:!0,speed:100,direction:"right",className:"rounded-xl border-[2px] group border-neutral-600 overflow-clip",children:w.map((x,r)=>_.jsx("img",{className:"hover:scale-110 transition-all ease-in-out duration-400 group-hover:brightness-[60%] hover:brightness-100",loading:"lazy",src:x,alt:"",style:e,onError:b=>{b.target.style.display="none"}},r))})})};export{te as default};
