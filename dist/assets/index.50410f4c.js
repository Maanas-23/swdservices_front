const we=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const h of o.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}};we();function V(){}function ge(e){return e()}function re(){return Object.create(null)}function x(e){e.forEach(ge)}function Se(e){return typeof e=="function"}function de(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let N;function H(e,t){return N||(N=document.createElement("a")),N.href=t,e===N.href}function Ie(e){return Object.keys(e).length===0}function r(e,t){e.appendChild(t)}function he(e,t,n){e.insertBefore(t,n||null)}function Y(e){e.parentNode.removeChild(e)}function ye(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function a(e){return document.createElement(e)}function me(e){return document.createTextNode(e)}function k(){return me(" ")}function l(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Be(e){return Array.from(e.childNodes)}function je(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}let X;function Q(e){X=e}const j=[],oe=[],F=[],ce=[],He=Promise.resolve();let Z=!1;function Qe(){Z||(Z=!0,He.then(pe))}function q(e){F.push(e)}const T=new Set;let K=0;function pe(){const e=X;do{for(;K<j.length;){const t=j[K];K++,Q(t),Re(t.$$)}for(Q(null),j.length=0,K=0;oe.length;)oe.pop()();for(let t=0;t<F.length;t+=1){const n=F[t];T.has(n)||(T.add(n),n())}F.length=0}while(j.length);for(;ce.length;)ce.pop()();Z=!1,T.clear(),Q(e)}function Re(e){if(e.fragment!==null){e.update(),x(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(q)}}const J=new Set;let S;function Ve(){S={r:0,c:[],p:S}}function xe(){S.r||x(S.c),S=S.p}function R(e,t){e&&e.i&&(J.delete(e),e.i(t))}function D(e,t,n,s){if(e&&e.o){if(J.has(e))return;J.add(e),S.c.push(()=>{J.delete(e),s&&(n&&e.d(1),s())}),e.o(t)}}function _e(e){e&&e.c()}function ve(e,t,n,s){const{fragment:i,on_mount:o,on_destroy:h,after_update:b}=e.$$;i&&i.m(t,n),s||q(()=>{const u=o.map(ge).filter(Se);h?h.push(...u):x(u),e.$$.on_mount=[]}),b.forEach(q)}function be(e,t){const n=e.$$;n.fragment!==null&&(x(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Le(e,t){e.$$.dirty[0]===-1&&(j.push(e),Qe(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ke(e,t,n,s,i,o,h,b=[-1]){const u=X;Q(e);const c=e.$$={fragment:null,ctx:null,props:o,update:V,not_equal:i,bound:re(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(u?u.$$.context:[])),callbacks:re(),dirty:b,skip_bound:!1,root:t.target||u.$$.root};h&&h(c.root);let E=!1;if(c.ctx=n?n(e,t.props||{},(g,m,...p)=>{const B=p.length?p[0]:m;return c.ctx&&i(c.ctx[g],c.ctx[g]=B)&&(!c.skip_bound&&c.bound[g]&&c.bound[g](B),E&&Le(e,g)),m}):[],c.update(),E=!0,x(c.before_update),c.fragment=s?s(c.ctx):!1,t.target){if(t.hydrate){const g=Be(t.target);c.fragment&&c.fragment.l(g),g.forEach(Y)}else c.fragment&&c.fragment.c();t.intro&&R(e.$$.fragment),ve(e,t.target,t.anchor,t.customElement),pe()}Q(u)}class Ee{$destroy(){be(this,1),this.$destroy=V}$on(t,n){const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(n),()=>{const i=s.indexOf(n);i!==-1&&s.splice(i,1)}}$set(t){this.$$set&&!Ie(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}var ae=[{name:"Hostel Allocation",link:"https://swdservices.bits-pilani.ac.in/hostelallocation",icon:1},{name:"Leave Application",link:"https://swdservices.bits-pilani.ac.in/leave/login.html",icon:2},{name:"Vaccination Portal",link:"https://swdservices.bits-pilani.ac.in/rejoining",icon:3},{name:"Hostel Details",link:"https://swdservices.bits-pilani.ac.in/#",icon:4}],O="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAzCAYAAADl70o1AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOPSURBVHgB7VlNctMwFH7PSdhiToA7cRh2TRfMNC0zuDcIJwBOADdoegLgBPQG0BO0HdoOu6Y7hriDeoJ6yUx+Hk+KFSQnthO7tF7km/FY8ifJnyzp048RGJ4XuPX6nzZUCKMRCCF+CHzubXvjmnMMiB5UCxEg7TmjOnYrKE7CJYKuA4AuVBgOVBxrgWVRz01BJNQdVV9N9teI+eiOueUFItDRr+uLro63/N1bXSAB9MPwfMvgLvmmvTQajhobQpxEMXfMt2Ah19w95Be9SdOQ2cSEeJt41DfCUYKLjJpFWsC0oMlNGkcYt1ARgXcFruhjKIjsPshG6fs7ce3VSwJNIYdbrd0vRHST5DifZ3KYyjFL3LwIBQVyf0PAfUivwFtMK31ZLkOcxNoHyyJ7FPOoZUt4MgjPsTYab4A5UgmExZE1GtlKxhuSk2k4fmKWqzl5EdA3KCoQEfraEn7y2gwMmyGU6zWDQxT/MkorUelBpbFtRmguxhUUFVgF5NpMq7VzqoJEcgYJNMWDr+37nQ+IOG32CXnyk8f5XJuDV0aZ3jN/pydbIOYybQbZ53qZVvKA4P55sLaZssgWyFYyIec1Ae7JCxI2k8pxOMGZiwzI4pKo58g/uR58n/kUL5tkYYHSx538OlzMSZuxuGbnCtBpx5yVj8fAEY+BdrqEiiP7C04g8P3tQAaJ1Op3VtOpzRgcJW3GzIeWzTSbnS4iqS5RbjWD4CHUjlVwvhC3IAcOOl+Nd2RibTNlkTfVCXDoQAV5qkNw5IzjJrlpHD+CuUNDejcLT2DfPF5hezlAnIhF3GoC2WYGg4tDHWUrkbuv9lQPiHCeC6biQFj5mh1+HotQ+c56mmOb4X4O++kSVkME94y8JuYNzov2cFiLGo2xa65YpM1obprWthmLQ2fTKNPi+AttUmGBssno0WVDpqJa0hLcGTePpbkscRJrmymLvCaOeNH4WQb4tNN1EN/DXQDh0N64owdFBPLh0ekgvOjpOFuJnFPLHbYrCzqfeSTbDBS2mQWHR/duM3kLVk8H5a8KZSVlwV3F4z8LOoqET7OS59oMN2vsBEOwfEZu3MeNLeuYbQFkxRr1oVy9BPEjjtd+c7mwDAqPYnPjnoW5jfuKWPtgWawFlkVhgZjz+8DE/zujzkY7/vWQN5Kt3eCqKCMQoOy0twQcolofKgpeSAg1NTSbLz/xRnoTKgU8DcOz3l/awatDq1ZOeQAAAABJRU5ErkJggg==",Pe="data:image/png;base64,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",Ue="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAxCAYAAAClOZt5AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQKSURBVHgB1ZnBbtpAEIZnbZJjREIOrdSkloAoR3KolBJVIm+QPEHg1mNzam+lTxDyBJAnID32FKqGNDc4VgVUS6mq9ELcWxXA2xmDXTsYbGzWIr+UGG/Wzuf17M4/iwwLIkXJxdfXn75eWXl2q2k/Na/+EiyIluTeCQPpZCkmN9LpbMar/8KA68D/jD7GgbMLL3ih4NvKrpJKvXyj4NGr79JALwHn6ug0DjqrTrtOKPggJleN1y/LF17w39RrlTOpYjUwUKZdF02oWBC5+KQuW8m9Iwa86H7dOLxYcMYL+FuzIGI9V3iKZ86gYl0G/NxxnctDCwVvta6aCL9vQQBkEL4KD6BpMtqamvf95YLjOpeHFh4qBjznx7amXDq5V6YPNHlH0EMgDmqvv7SvqjXN9tCmHA8tQwTq3t00V1c3Vhlju0YDg8z62kZGZ+wdMPbEgh4MEPry1rwusbb5Fg+7tlspidVNBe/3kUEEsoWD++S0oK9Vs2krlX3PgRXdu+vHwkPFExrj2AsaP3+gH/OccabFQKAohgc6VDE04lO6xZdj0hEeDTA36Hb70jjHQVA55/F252tFaKikUllMQOzAT18JXz+tgzqXSmabHfqhhIIbIy5LFzgBFZhVHM5anXp+0p/nDk6wf/FoxmwQeEpA39tXh9P6zHVyUoIgf2JP0yMPUpjlPjpIp1595gpO2Q0PmYdpmjHdszCwC0e8Gqmt1Tn7bPvvCN9r4AQtAq0ss8nT1s49xjGdV/CuRzAPuSQmU6FHnNZdsqTm+WglqEEYmQWFKFtrJgu0pCVHTDJ+BkHFeUEe6E5n6GJrA4fKKJU3bE0aubleb1ldjt2Xuc/E42AGOG636yXb/f9bBfTrrVbdWp0Cj/jIrtqXOSpyG7iy3AWDpixZLznu7/TyDs1sa9PpF5lu95dhPcmurq09Z/jachBCk1J7t3tzm0hsfMI38bvf10/t+y0zhUoy+epAYnqVakPMbJZbm8WT+IX2ku9QoZhD6PLonxVpYkJI4bp/GgSa5HvE08nsjzG/QQWubhzzMKs8TJSXfIHjaOdx4pVhfmq22vUdCCF/ocLZfDLhUE0qiCGk/FZAnpuQvjRM4YeqWp/JdLnJ7+SMQ1hN8R1BFM0W3JyhSeLBBUCTRINrIqBJIsEN0yUCmiQMHLcZCoZREiRP8G0f3yaMCV1jp/PlHARqKri1teBT6OJq6GP2W52rCgjWxJQ/th+CqwOfWNlwTChyEw1TDSKSK7gbtKjVIajGwKm2s/ZHhtJ6/cHOIkGTHDHuBi1ySQsjBzh9uws2QyV6SQsjC9z4XsZeEESwpIWRAW6UYTZoqgOjWNLCiJkFsNkQtHiNWo4YfyzQlqimxGI4D49I/wDWvf5YQBh+dAAAAABJRU5ErkJggg==";function We(e){let t,n,s,i,o,h,b,u=e[0].name+"",c,E,g;return{c(){t=a("a"),n=a("a"),s=a("div"),i=a("img"),h=k(),b=a("div"),c=me(u),H(i.src,o=e[1])||l(i,"src",o),l(i,"class","webImage svelte-17u2h0n"),l(i,"alt","imageHere"),l(s,"class","imageCont svelte-17u2h0n"),l(b,"class","name svelte-17u2h0n"),l(n,"class","website-cont svelte-17u2h0n"),l(n,"href",E=e[0].link),l(n,"target","_blank"),l(t,"class","Website svelte-17u2h0n"),l(t,"href",g=e[0].link),l(t,"target","_blank")},m(m,p){he(m,t,p),r(t,n),r(n,s),r(s,i),r(n,h),r(n,b),r(b,c)},p(m,[p]){p&2&&!H(i.src,o=m[1])&&l(i,"src",o),p&1&&u!==(u=m[0].name+"")&&je(c,u),p&1&&E!==(E=m[0].link)&&l(n,"href",E),p&1&&g!==(g=m[0].link)&&l(t,"href",g)},i:V,o:V,d(m){m&&Y(t)}}}function Me(e,t,n){let{website:s}=t,i=O;switch(s.icon){case 1:i=O;break;case 2:i=Pe;break;case 3:i=Ue;break;case 4:i=O;break}return e.$$set=o=>{"website"in o&&n(0,s=o.website)},[s,i]}class ze extends Ee{constructor(t){super(),ke(this,t,Me,We,de,{website:0})}}var Ne="./assets/BITS-logo.a8539cd7.png",ue="./assets/right.14faa155.svg";function fe(e,t,n){const s=e.slice();return s[0]=t[n],s}function Ae(e){let t,n;return t=new ze({props:{website:e[0]}}),{c(){_e(t.$$.fragment)},m(s,i){ve(t,s,i),n=!0},p:V,i(s){n||(R(t.$$.fragment,s),n=!0)},o(s){D(t.$$.fragment,s),n=!1},d(s){be(t,s)}}}function Ke(e){let t,n,s,i,o,h,b,u,c,E,g,m,p,B,C,_,I,G,$,L,ee,P,te,U,ne,W,y,ie,le,M,z,w=ae,f=[];for(let A=0;A<w.length;A+=1)f[A]=Ae(fe(e,w,A));const Ce=A=>D(f[A],1,1,()=>{f[A]=null});return{c(){t=a("div"),n=a("div"),n.innerHTML="Student Welfare Division <br/> Services",s=k(),i=a("div"),o=a("img"),b=k(),u=a("div"),c=a("div"),c.textContent="Student Welfare Division Services",E=k(),g=a("div");for(let A=0;A<f.length;A+=1)f[A].c();m=k(),p=a("div"),p.innerHTML='<a href="https://bits-dvm.org">DVM, BITS Pilani</a>',B=k(),C=a("div"),_=a("div"),I=a("img"),$=k(),L=a("div"),ee=k(),P=a("div"),te=k(),U=a("div"),ne=k(),W=a("div"),y=a("img"),le=k(),M=a("div"),M.innerHTML='<a href="https://bits-dvm.org">DVM, BITS Pilani</a>',l(n,"class","App-header-mobile svelte-1kxm50p"),H(o.src,h=ue)||l(o,"src",h),l(o,"alt","Right section"),l(o,"class","rightImg svelte-1kxm50p"),l(i,"class","rightImg-cont-mobile svelte-1kxm50p"),l(c,"class","App-header svelte-1kxm50p"),l(g,"class","Websites-cont svelte-1kxm50p"),l(p,"class","developer svelte-1kxm50p"),l(u,"class","App-left svelte-1kxm50p"),H(I.src,G=ue)||l(I,"src",G),l(I,"alt","Right section"),l(I,"class","rightImg svelte-1kxm50p"),l(_,"class","rightImg-cont svelte-1kxm50p"),l(L,"class","triangle"),l(L,"id","triangle-1"),l(P,"class","triangle"),l(P,"id","triangle-2"),l(U,"class","triangle"),l(U,"id","triangle-3"),l(C,"class","App-right svelte-1kxm50p"),H(y.src,ie=Ne)||l(y,"src",ie),l(y,"alt","BITS Logo"),l(y,"class","svelte-1kxm50p"),l(W,"class","logo svelte-1kxm50p"),l(M,"class","developer-mobile svelte-1kxm50p"),l(t,"class","App svelte-1kxm50p")},m(A,v){he(A,t,v),r(t,n),r(t,s),r(t,i),r(i,o),r(t,b),r(t,u),r(u,c),r(u,E),r(u,g);for(let d=0;d<f.length;d+=1)f[d].m(g,null);r(u,m),r(u,p),r(t,B),r(t,C),r(C,_),r(_,I),r(C,$),r(C,L),r(C,ee),r(C,P),r(C,te),r(C,U),r(t,ne),r(t,W),r(W,y),r(t,le),r(t,M),z=!0},p(A,[v]){if(v&0){w=ae;let d;for(d=0;d<w.length;d+=1){const se=fe(A,w,d);f[d]?(f[d].p(se,v),R(f[d],1)):(f[d]=Ae(se),f[d].c(),R(f[d],1),f[d].m(g,null))}for(Ve(),d=w.length;d<f.length;d+=1)Ce(d);xe()}},i(A){if(!z){for(let v=0;v<w.length;v+=1)R(f[v]);z=!0}},o(A){f=f.filter(Boolean);for(let v=0;v<f.length;v+=1)D(f[v]);z=!1},d(A){A&&Y(t),ye(f,A)}}}class Fe extends Ee{constructor(t){super(),ke(this,t,null,Ke,de,{})}}new Fe({target:document.getElementById("app")});