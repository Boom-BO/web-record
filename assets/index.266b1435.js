import{_ as I,e as S,B as M,E as N,M as T,o as D,b as P,d as o,t as B,u as w,G as h,h as U,j as q,N as z,Y as L,Z as R,$ as V}from"./index.d5245e98.js";const f=u=>(R("data-v-ae4f4274"),u=u(),V(),u),G={class:"dashboard"},H=f(()=>o("canvas",{class:"bg"},null,-1)),W={class:"content"},O={class:"author"},Y={class:"maxim"},Z=f(()=>o("br",null,null,-1)),$=f(()=>o("br",null,null,-1)),J=S({__name:"index",setup(u){const k=M({author:"BommMax - Wu Bo",maxim:"\u5C11\u5E74\u4E0E\u7231\u6C38\u4E0D\u8001\u53BB\uFF0C\u5373\u4FBF\u62AB\u8346\u65A9\u68D8\uFF0C\u4E22\u5931\u6012\u9A6C\u9C9C\u8863\u3002",circleUrl:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",squareUrl:"https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",sizeList:["small","","large"]});function y(){document.addEventListener("touchmove",function(n){n.preventDefault()});let l=document.getElementsByTagName("canvas")[0],e=l.getContext("2d"),a=window.devicePixelRatio||1,d=window.innerWidth,i=window.innerHeight,c=90,s,_=Math,r=0,p=_.PI*2,m=_.cos,x=_.random;l.width=d*a,l.height=i*a,e.scale(a,a),e.globalAlpha=.6;function g(){for(e.clearRect(0,0,d,i),s=[{x:0,y:i*.7+c},{x:0,y:i*.7-c}];s[1].x<d+c;)A(s[0],s[1])}function A(n,t){e.beginPath(),e.moveTo(n.x,n.y),e.lineTo(t.x,t.y);var b=t.x+(x()*2-.25)*c,C=v(t.y);e.lineTo(b,C),e.closePath(),r-=p/-50,e.fillStyle="#"+(m(r)*127+128<<16|m(r+p/3)*127+128<<8|m(r+p/3*2)*127+128).toString(16),e.fill(),s[0]=s[1],s[1]={x:b,y:C}}function v(n){var t=n+(x()*2-1.1)*c;return t>i||t<0?v(n):t}document.onclick=g,g()}N(()=>{y()});const{author:E,maxim:F,circleUrl:K,squareUrl:Q,sizeList:X}=T(k);return(l,e)=>{const a=L("router-link");return D(),P("div",G,[H,o("div",W,[o("p",O,B(w(E)),1),o("p",Y,B(w(F)),1),o("a",{href:"https://boom-bo.github.io/web_accumulation",target:"_self",class:"link-text",onClick:e[0]||(e[0]=h(()=>{},["stop"]))},"\u535A\u5BA2"),Z,U(a,{tag:"span",to:"htmls",class:"link-text",onClick:e[1]||(e[1]=h(()=>{},["stop"]))},{default:q(()=>[z("\u4F5C\u54C1")]),_:1}),$,o("a",{href:"https://github.com/Boom-BO",target:"_self",class:"link-text",onClick:e[2]||(e[2]=h(()=>{},["stop"]))},"GitHub")])])}}});var ee=I(J,[["__scopeId","data-v-ae4f4274"]]);export{ee as default};
