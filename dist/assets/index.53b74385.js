const he=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const p of o.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&l(p)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}};he();function E(){}function re(e){return e()}function X(){return Object.create(null)}function L(e){e.forEach(re)}function ge(e){return typeof e=="function"}function ie(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let B;function Y(e,t){return B||(B=document.createElement("a")),B.href=t,e===B.href}function pe(e){return Object.keys(e).length===0}function c(e,t){e.appendChild(t)}function se(e,t,n){e.insertBefore(t,n||null)}function G(e){e.parentNode.removeChild(e)}function _e(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function g(e){return document.createElement(e)}function H(e){return document.createTextNode(e)}function b(){return H(" ")}function s(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function me(e){return Array.from(e.childNodes)}function ve(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}let K;function A(e){K=e}const q=[],Z=[],M=[],ee=[],be=Promise.resolve();let C=!1;function ye(){C||(C=!0,be.then(oe))}function V(e){M.push(e)}const D=new Set;let N=0;function oe(){const e=K;do{for(;N<q.length;){const t=q[N];N++,A(t),$e(t.$$)}for(A(null),q.length=0,N=0;Z.length;)Z.pop()();for(let t=0;t<M.length;t+=1){const n=M[t];D.has(n)||(D.add(n),n())}M.length=0}while(q.length);for(;ee.length;)ee.pop()();C=!1,D.clear(),A(e)}function $e(e){if(e.fragment!==null){e.update(),L(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(V)}}const W=new Set;let k;function ke(){k={r:0,c:[],p:k}}function we(){k.r||L(k.c),k=k.p}function S(e,t){e&&e.i&&(W.delete(e),e.i(t))}function F(e,t,n,l){if(e&&e.o){if(W.has(e))return;W.add(e),k.c.push(()=>{W.delete(e),l&&(n&&e.d(1),l())}),e.o(t)}}function je(e){e&&e.c()}function ce(e,t,n,l){const{fragment:r,on_mount:o,on_destroy:p,after_update:h}=e.$$;r&&r.m(t,n),l||V(()=>{const m=o.map(re).filter(ge);p?p.push(...m):L(m),e.$$.on_mount=[]}),h.forEach(V)}function ae(e,t){const n=e.$$;n.fragment!==null&&(L(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function xe(e,t){e.$$.dirty[0]===-1&&(q.push(e),ye(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function fe(e,t,n,l,r,o,p,h=[-1]){const m=K;A(e);const i=e.$$={fragment:null,ctx:null,props:o,update:E,not_equal:r,bound:X(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(m?m.$$.context:[])),callbacks:X(),dirty:h,skip_bound:!1,root:t.target||m.$$.root};p&&p(i.root);let _=!1;if(i.ctx=n?n(e,t.props||{},(a,j,...x)=>{const y=x.length?x[0]:j;return i.ctx&&r(i.ctx[a],i.ctx[a]=y)&&(!i.skip_bound&&i.bound[a]&&i.bound[a](y),_&&xe(e,a)),j}):[],i.update(),_=!0,L(i.before_update),i.fragment=l?l(i.ctx):!1,t.target){if(t.hydrate){const a=me(t.target);i.fragment&&i.fragment.l(a),a.forEach(G)}else i.fragment&&i.fragment.c();t.intro&&S(e.$$.fragment),ce(e,t.target,t.anchor,t.customElement),oe()}A(m)}class ue{$destroy(){ae(this,1),this.$destroy=E}$on(t,n){const l=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return l.push(n),()=>{const r=l.indexOf(n);r!==-1&&l.splice(r,1)}}$set(t){this.$$set&&!pe(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}var te=[{name:"Hostel Allocation Portal",link:"https://swdservices.bits-pilani.ac.in/hostelallocator"},{name:"Vaccination Portal",link:"https://swdservices.bits-pilani.ac.in/rejoining"},{name:"Leave Portal",link:"https://swdservices.bits-pilani.ac.in/leave"},{name:"Time Table",link:"https://timetable.bits-dvm.org"}];function qe(e){let t,n,l=e[0].name+"",r,o,p,h,m,i;return{c(){t=g("div"),n=g("a"),r=H(l),p=b(),h=g("a"),m=H("Go Here"),s(n,"href",o=e[0].link),s(n,"target","_blank"),s(n,"class","svelte-dyjrp8"),s(h,"href",i=e[0].link),s(h,"target","_blank"),s(h,"class","btn svelte-dyjrp8"),s(t,"class","Website svelte-dyjrp8")},m(_,a){se(_,t,a),c(t,n),c(n,r),c(t,p),c(t,h),c(h,m)},p(_,[a]){a&1&&l!==(l=_[0].name+"")&&ve(r,l),a&1&&o!==(o=_[0].link)&&s(n,"href",o),a&1&&i!==(i=_[0].link)&&s(h,"href",i)},i:E,o:E,d(_){_&&G(t)}}}function Ae(e,t,n){let{website:l}=t;return e.$$set=r=>{"website"in r&&n(0,l=r.website)},[l]}class Se extends ue{constructor(t){super(),fe(this,t,Ae,qe,ie,{website:0})}}var Ee="./assets/BITS-logo.a8539cd7.png",Le="./assets/right.bac4579f.png";function ne(e,t,n){const l=e.slice();return l[0]=t[n],l}function le(e){let t,n;return t=new Se({props:{website:e[0]}}),{c(){je(t.$$.fragment)},m(l,r){ce(t,l,r),n=!0},p:E,i(l){n||(S(t.$$.fragment,l),n=!0)},o(l){F(t.$$.fragment,l),n=!1},d(l){ae(t,l)}}}function Te(e){let t,n,l,r,o,p,h,m,i,_,a,j,x,y,R,T,z,I,J,O,w,Q,P,$=te,f=[];for(let u=0;u<$.length;u+=1)f[u]=le(ne(e,$,u));const de=u=>F(f[u],1,1,()=>{f[u]=null});return{c(){t=g("div"),n=g("div"),l=g("div"),l.innerHTML='<h1 class="svelte-kjqf2s">SWD Services</h1>',r=b(),o=g("div");for(let u=0;u<f.length;u+=1)f[u].c();p=b(),h=g("div"),h.innerHTML=`<strong><a href="https://swdservices.bits-pilani.ac.in/Developers">Developers</a></strong>
      | <a href="https://bits-dvm.org">DVM, BITS Pilani</a>`,m=b(),i=g("div"),_=g("div"),a=g("img"),x=b(),y=g("div"),R=b(),T=g("div"),z=b(),I=g("div"),J=b(),O=g("div"),w=g("img"),s(l,"class","App-header"),s(o,"class","Websites-cont svelte-kjqf2s"),s(h,"class","developer svelte-kjqf2s"),s(n,"class","App-left svelte-kjqf2s"),Y(a.src,j=Le)||s(a,"src",j),s(a,"alt","Right section"),s(a,"class","rightImg svelte-kjqf2s"),s(_,"class","rightImg-cont svelte-kjqf2s"),s(y,"class","triangle"),s(y,"id","triangle-1"),s(T,"class","triangle"),s(T,"id","triangle-2"),s(I,"class","triangle"),s(I,"id","triangle-3"),s(i,"class","App-right svelte-kjqf2s"),Y(w.src,Q=Ee)||s(w,"src",Q),s(w,"alt","BITS Logo"),s(w,"class","svelte-kjqf2s"),s(O,"class","logo svelte-kjqf2s"),s(t,"class","App svelte-kjqf2s")},m(u,v){se(u,t,v),c(t,n),c(n,l),c(n,r),c(n,o);for(let d=0;d<f.length;d+=1)f[d].m(o,null);c(n,p),c(n,h),c(t,m),c(t,i),c(i,_),c(_,a),c(i,x),c(i,y),c(i,R),c(i,T),c(i,z),c(i,I),c(t,J),c(t,O),c(O,w),P=!0},p(u,[v]){if(v&0){$=te;let d;for(d=0;d<$.length;d+=1){const U=ne(u,$,d);f[d]?(f[d].p(U,v),S(f[d],1)):(f[d]=le(U),f[d].c(),S(f[d],1),f[d].m(o,null))}for(ke(),d=$.length;d<f.length;d+=1)de(d);we()}},i(u){if(!P){for(let v=0;v<$.length;v+=1)S(f[v]);P=!0}},o(u){f=f.filter(Boolean);for(let v=0;v<f.length;v+=1)F(f[v]);P=!1},d(u){u&&G(t),_e(f,u)}}}class Ie extends ue{constructor(t){super(),fe(this,t,null,Te,ie,{})}}new Ie({target:document.getElementById("app")});
