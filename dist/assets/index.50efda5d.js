const Ee=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const m of o.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&r(m)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}};Ee();function O(){}function ge(e){return e()}function re(){return Object.create(null)}function Q(e){e.forEach(ge)}function we(e){return typeof e=="function"}function de(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let N;function M(e,t){return N||(N=document.createElement("a")),N.href=t,e===N.href}function Ie(e){return Object.keys(e).length===0}function s(e,t){e.appendChild(t)}function me(e,t,n){e.insertBefore(t,n||null)}function X(e){e.parentNode.removeChild(e)}function Re(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function a(e){return document.createElement(e)}function he(e){return document.createTextNode(e)}function k(){return he(" ")}function l(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Be(e){return Array.from(e.childNodes)}function xe(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}let Z;function P(e){Z=e}const x=[],se=[],K=[],oe=[],Me=Promise.resolve();let F=!1;function Pe(){F||(F=!0,Me.then(ve))}function G(e){K.push(e)}const z=new Set;let Y=0;function ve(){const e=Z;do{for(;Y<x.length;){const t=x[Y];Y++,P(t),ye(t.$$)}for(P(null),x.length=0,Y=0;se.length;)se.pop()();for(let t=0;t<K.length;t+=1){const n=K[t];z.has(n)||(z.add(n),n())}K.length=0}while(x.length);for(;oe.length;)oe.pop()();F=!1,z.clear(),P(e)}function ye(e){if(e.fragment!==null){e.update(),Q(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(G)}}const _=new Set;let w;function Oe(){w={r:0,c:[],p:w}}function Qe(){w.r||Q(w.c),w=w.p}function y(e,t){e&&e.i&&(_.delete(e),e.i(t))}function J(e,t,n,r){if(e&&e.o){if(_.has(e))return;_.add(e),w.c.push(()=>{_.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}}function Te(e){e&&e.c()}function pe(e,t,n,r){const{fragment:i,on_mount:o,on_destroy:m,after_update:b}=e.$$;i&&i.m(t,n),r||G(()=>{const A=o.map(ge).filter(we);m?m.push(...A):Q(A),e.$$.on_mount=[]}),b.forEach(G)}function be(e,t){const n=e.$$;n.fragment!==null&&(Q(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function He(e,t){e.$$.dirty[0]===-1&&(x.push(e),Pe(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ke(e,t,n,r,i,o,m,b=[-1]){const A=Z;P(e);const c=e.$$={fragment:null,ctx:null,props:o,update:O,not_equal:i,bound:re(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(A?A.$$.context:[])),callbacks:re(),dirty:b,skip_bound:!1,root:t.target||A.$$.root};m&&m(c.root);let S=!1;if(c.ctx=n?n(e,t.props||{},(g,h,...v)=>{const B=v.length?v[0]:h;return c.ctx&&i(c.ctx[g],c.ctx[g]=B)&&(!c.skip_bound&&c.bound[g]&&c.bound[g](B),S&&He(e,g)),h}):[],c.update(),S=!0,Q(c.before_update),c.fragment=r?r(c.ctx):!1,t.target){if(t.hydrate){const g=Be(t.target);c.fragment&&c.fragment.l(g),g.forEach(X)}else c.fragment&&c.fragment.c();t.intro&&y(e.$$.fragment),pe(e,t.target,t.anchor,t.customElement),ve()}P(A)}class Se{$destroy(){be(this,1),this.$destroy=O}$on(t,n){const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const i=r.indexOf(n);i!==-1&&r.splice(i,1)}}$set(t){this.$$set&&!Ie(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}var ce=[{name:"Hostel Allocation",link:"https://swdservices.bits-pilani.ac.in/hostelallocation",icon:1},{name:"Leave Application",link:"https://swdservices.bits-pilani.ac.in/leave/login.html",icon:2},{name:"RAF Ticketing System",link:"https://swdservices.bits-pilani.ac.in/raf",icon:3},{name:"Hostel Details",link:"https://swdservices.bits-pilani.ac.in/#",icon:4}],ae="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAzCAYAAADl70o1AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOPSURBVHgB7VlNctMwFH7PSdhiToA7cRh2TRfMNC0zuDcIJwBOADdoegLgBPQG0BO0HdoOu6Y7hriDeoJ6yUx+Hk+KFSQnthO7tF7km/FY8ifJnyzp048RGJ4XuPX6nzZUCKMRCCF+CHzubXvjmnMMiB5UCxEg7TmjOnYrKE7CJYKuA4AuVBgOVBxrgWVRz01BJNQdVV9N9teI+eiOueUFItDRr+uLro63/N1bXSAB9MPwfMvgLvmmvTQajhobQpxEMXfMt2Ah19w95Be9SdOQ2cSEeJt41DfCUYKLjJpFWsC0oMlNGkcYt1ARgXcFruhjKIjsPshG6fs7ce3VSwJNIYdbrd0vRHST5DifZ3KYyjFL3LwIBQVyf0PAfUivwFtMK31ZLkOcxNoHyyJ7FPOoZUt4MgjPsTYab4A5UgmExZE1GtlKxhuSk2k4fmKWqzl5EdA3KCoQEfraEn7y2gwMmyGU6zWDQxT/MkorUelBpbFtRmguxhUUFVgF5NpMq7VzqoJEcgYJNMWDr+37nQ+IOG32CXnyk8f5XJuDV0aZ3jN/pydbIOYybQbZ53qZVvKA4P55sLaZssgWyFYyIec1Ae7JCxI2k8pxOMGZiwzI4pKo58g/uR58n/kUL5tkYYHSx538OlzMSZuxuGbnCtBpx5yVj8fAEY+BdrqEiiP7C04g8P3tQAaJ1Op3VtOpzRgcJW3GzIeWzTSbnS4iqS5RbjWD4CHUjlVwvhC3IAcOOl+Nd2RibTNlkTfVCXDoQAV5qkNw5IzjJrlpHD+CuUNDejcLT2DfPF5hezlAnIhF3GoC2WYGg4tDHWUrkbuv9lQPiHCeC6biQFj5mh1+HotQ+c56mmOb4X4O++kSVkME94y8JuYNzov2cFiLGo2xa65YpM1obprWthmLQ2fTKNPi+AttUmGBssno0WVDpqJa0hLcGTePpbkscRJrmymLvCaOeNH4WQb4tNN1EN/DXQDh0N64owdFBPLh0ekgvOjpOFuJnFPLHbYrCzqfeSTbDBS2mQWHR/duM3kLVk8H5a8KZSVlwV3F4z8LOoqET7OS59oMN2vsBEOwfEZu3MeNLeuYbQFkxRr1oVy9BPEjjtd+c7mwDAqPYnPjnoW5jfuKWPtgWawFlkVhgZjz+8DE/zujzkY7/vWQN5Kt3eCqKCMQoOy0twQcolofKgpeSAg1NTSbLz/xRnoTKgU8DcOz3l/awatDq1ZOeQAAAABJRU5ErkJggg==",Ue="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAA5CAYAAAB0+HhyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAXMSURBVHgBzVpNTxtHGH7fXZvSS8pHVEWKkizCTnsLPVQiUAlz7I3c0lPgF4T8AuAXFH4B+NaeIL8AIxVSqYeSW1QbsRE95BLq3lK8u9P3HX9gvLM7M/5Y8kggez0ezzPvzDPP++4i3AKKxe/nhMiVEJ0nQkBdiOjo7OzNAQwAhAzheaWJsdzVrgBciX0owKd/W9Wzkz3oAy5kBCaRd6/+BMR5ZQOECfps5e7UA/h4eXEElnAgI+Tdxs80UE/XjqK1WSj8UAJLZELkW2/eoxlfNW2PKF6AJTIh0nDzc1ZfELAClsiECGJoRwRov1gioz0i6jBiZETEPbVpLQAqYIlMiNRqv1XAYnAoRBkskZn80uhe0X/tEkMQB/0cipkRqVZPTonMMgjhJzYSUL4KxtagD2RqURh8pjRcZx0Rl2gJSXUSCLSHnJ3WEuwLmRNhzM4+XSHDuNR8F71HDCrV6h9WgtCLTIkUiwtzEMG+0qog7DUa4Zbv/+5DH8iMyOPZxRe0hLYh7bBjB+yIZ3I/WSIT9ysjAfgL6E5sdsCAz+9OPvzw8Z+Lt2CBkRPhzS0c5w2Y245xImRt50dKhEmErnNIe+IeWANL09MPvTt37r+t1//Wnj8jPUfCnLtvkoMkQsBq3nUPWeV0TUcWkceFhQ1e7zAoaN/QmfNcF52RqBZt7lU65XZhFCCZjqLodRh+UfH9Sv368pDRtS88GD1O2Zv9VTvZGvrSmpx+xLl5CQYDnyPjrb803GNRmJp6gEPd7HJJKXJzKihsgQ3Ie7lB+B2bSJPmRGJuuKoVwUbvJUqSTskMbqa6XgXekVWpnh2v0iQs6wiFwvFzMCSwStGPer3XgyB8Jl8gGqe7VH302q/bSRnVxdZdNyzRsKlCiU/IOcs2AtEPw9zmUIjIDU6a3ysdvKTaJlCA8BHQqAiBeE2kjZZCHbT+YhjK0grzTimmUmQAgyC33RmcEP+CKcRtVVEUe4PruN06H4H50oLbKAc1q4jo3bhI0ejNu6l66IMFZmYWHtm0H5jIJxjnme6ZbRGTW0SriFhjYCK8fGgjVzoXSCpVVZAocj9vIry0sH2/Q4g11n5Vu3zYsMr6zs9P3tu0H5gIWXVpDoWmHvWuKcMVMIC1EwADInyDhg67/eIs2Y8eSEsCUOLXQRC90vVlOkAygl+BJbRE+AaNvFWGuFucXTy/Qagtu2StTaofdJaY3vdYt73Zk2rj5Ymdc88VH1Wg6VDXWWobYbisI1IozJcQ3EMwR6VaO142bZwaEZlXqFECJiEhtsyi4dgmWiWbqCQSaVpy9CANioPPuq8UZ0tL0Zh8ckSUtiM2CjN1SeiLLT7LdSRwR/k9Mo/fFJ6ugwGURGThQBMNYVj+T48sSqVjGw4JtxwicDZYOUGDWKrLGzxyHO1TCCS3P+rqTbI4R2pHROIDIaWr1Y5lJOp1/xOlq1/SwVpSdDPuOOF/l5cXFUhBLCKh6+qXlKHckuK9TIoGF6y73wfBGFv+hFIPvtRF5QYRo/vhLLc9g1BB9tVRttjIYhPR8mw7Cd1N5HJXqXvlBhFZGdSAlkrZKBopkU2aiEGi0iHSshvpqShFQxYSNEiNbMqyHCQq1xEZoty2jaQKumXZb1QkEZPDr6n5hnLbMpKKkWhFot+oOHIZGESjU9bRIaUvE5Fo/lZ6VFTXHfnAi86KGMptWmS7S0M66KKiSimcMHQrmkpe3XQmE6MhS0PBHlggLSo0WbF0wGH27Heo1jqjegaEZnJn4GgYSnY3NFGJOeOOanEqWmP/zzVamkH2Us1PIjCCQHXSZCjZKqRFRYjI634fN43kiwSKcq12wpubkidcAhOIKKFYYOiQFUiPys1Hp1Tu9xRpdovFRT4L5oyf1HEwPnuG+UoalFGhfnsfr42536/v3D+i28m8XzyKRrl2drwNBiB3+oG++6tAZ1Ig/zCWgzC/xs4WBgB/v7tfIcTrIBz7qbff/wHeMb+C6TJZggAAAABJRU5ErkJggg==",Ve="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAvCAYAAAClgknJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAL7SURBVHgB1Zk9b9NAGMef86WMbpKGSiiQWiJCbMCGBEO6MYYNJjqyMrLBR+ATlH4CxCdoIkDq2GwVKpWhDAxQzIbU2A/3OHGaF9u5O/uO5i/lxfHZ/v3iy138mIHl3Pbue2GF74q3HfE4PB+Gj33/wAfNMLCYGJ47+8CYN/kQwT8Pw21dCWsCqfBJCkhYEciFT6Ip4YDhSMFTGHhrnO+DYowKSMOPgwx8UIwxAVX4UbAPijEikDXaILBtQPSztkOEKiimdIG8ofL4+GOPh1GmhMPYHVBMqQIy4/yReM2R6LTbDzugkNIEVCapPAmGuOuJfYFkOJQQGXhqU2tsvXPdZj8Ivgc/xWNzvfkeGeuK7S76PoMqZ053o37jj7veDKit53Wqjca15657/QctTx+78EQmCz9pk7duWVLOaCEBZXiVNpIS2gKFwUqS0BIo7VstLLF2T1nAdJdQ2RYheqE0jJYOTxn/iUuGziXzxOymyAJpASPwUEAiPnbUk+pCRuEXoCT2OdVu6RmwBi8blWHUKrzG/JErsArwmQKrAp8qsErwCwKrBj8jsIrwlErmDoAu8aI30zsYVnhXGHtwSeApPO9bRWCPGrWW/+v36YCWz85OD+r1LcZGdc3/Dh8L1K62uqIn7WS2YNCdlfjW05IwAE9xEHFpKUMUnN7euvngWbIsqguvxNl5DbIxBE/hrts+4ix8MnNdmhbdM2EQPhYIAv9v6sV1GRKG4WMBesqsEBSRsAA/EShdwhL8jMC0ROTA1+HwytOTkw8vN93mHnI2EAe8O1e/SZdA8GzBjzAkkzVfCOCdz18+7SXLVITy/V6QuU2J8PHxVRpT3ZIBLtyEmJeg2ICnKJUWRTfxN+qtDsz/nZjrTrbgKRXF9hAhDkQZvDP/+XiyAycM+7bgKcoCYqgJstaRhLgHTOsvfuwG4Sk65fVlNyGswVOUBRgNpzKxAE9RFpCqmlmCpygNo0lM3XXXiZYAxeZQmRfte2RJ/RIBDmlZvPZsw1P+AbQrO0XU79E2AAAAAElFTkSuQmCC",We="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAArCAYAAADczxCmAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAL7SURBVHgB7ZpPbtNAFMa/5zjdEiGxQ6orHIkdYVdSpLo3KCegnAB6grY3SE8ANyBdsUyRIKrEgnaHSFBdiS3g7lA69ut7TVNFVZzYbv5a/S1sqzNS5vPMvDffcwnXOI5Xsu3/FcDysIAw83EY8rHvH/m9v5FeyuVqBRE+gsjBgkPg3Z/t5p4+F546qw4TfcqDsC7kPXr4+PzP399HVlgo7ORHWJcI1o7eLZnHCvJHaWWlumzJTiwhp9hMvC/33AlkXjrHPQsKue6Ld3LL3bI0ZqlG5SfV07ylAsWE7FjIMffiFpVci7ORnUCObnWxGmfMKBHRuliMTEc5Bg7l+hkpISZHxvA6rj2LuIBB+8bYNd8/DPobXPelRxy9Txt9iTrbrda3Y2RAov163O+lF0e80W59HTiQdvvLoViojbBgNdIINKb4DxMglTiZsb04YT1+iBOWGXwjprGBhBQLqLlu9QSpoQdycWJb0yTxCxOu9Nv4YZTdNRXnYUakSuK66ZMK6/aPDjBjEi9LIvhIgUTPQN9IEmYfLTl+bQ/sLiaYuvWnkUwqWqZJ4hUt/yXvTutJe85DtJS6ZkfsEXZHddSKWgjaRELmIlri6lTCG61WM3YJ6ewWC53vs7ZRWSxPCUwNeSFbgxpdd9Ur2heNWQvrkd2sMnyWs6U8nOvyuD5XesjAJKKlztx8OHHqPL9DtBw4/rlx4jOPlrp0JHedSDIPNMzToCXI7EfAQbcPnkme0z4j08ekouVIcSqKiLfbtyJk95OXufFvxhj/9vFMU4Kx7S05RO8M/w3alJeVOHUkZeiek0HV5XPQK9wRcQm7owSOm+F7TqJhx0TbGAPi81RcHVPGGtKSygWMQj4r7WPKxIrT2gjGCFEUYMrEBhSJdG/L5bXlsYmMJNkmMwljY1i0lKMWtmhcI5qyMCXfRVlNusgbEulPT5tnVjGMagCmvtknC1/9q4alpTj1aHp0Qg7Q8mPrV/ODPt9s8yv3XLQ8TlkrmR84MIbr/bn5Eil4OVxTYQ2BAAAAAElFTkSuQmCC";function Le(e){let t,n,r,i,o,m,b,A=e[0].name+"",c,S,g;return{c(){t=a("a"),n=a("a"),r=a("div"),i=a("img"),m=k(),b=a("div"),c=he(A),M(i.src,o=e[1])||l(i,"src",o),l(i,"class","webImage svelte-1crceo3"),l(i,"alt","imageHere"),l(r,"class","imageCont svelte-1crceo3"),l(b,"class","name svelte-1crceo3"),l(n,"class","website-cont svelte-1crceo3"),l(n,"href",S=e[0].link),l(n,"target","_blank"),l(t,"class","Website svelte-1crceo3"),l(t,"href",g=e[0].link),l(t,"target","_blank")},m(h,v){me(h,t,v),s(t,n),s(n,r),s(r,i),s(n,m),s(n,b),s(b,c)},p(h,[v]){v&2&&!M(i.src,o=h[1])&&l(i,"src",o),v&1&&A!==(A=h[0].name+"")&&xe(c,A),v&1&&S!==(S=h[0].link)&&l(n,"href",S),v&1&&g!==(g=h[0].link)&&l(t,"href",g)},i:O,o:O,d(h){h&&X(t)}}}function je(e,t,n){let{website:r}=t,i=ae;switch(r.icon){case 1:i=ae;break;case 2:i=Ue;break;case 3:i=Ve;break;case 4:i=We;break}return e.$$set=o=>{"website"in o&&n(0,r=o.website)},[r,i]}class Ne extends Se{constructor(t){super(),ke(this,t,je,Le,de,{website:0})}}var Ye="./assets/BITS-logo.a8539cd7.png",Ae="./assets/right.14faa155.svg";function ue(e,t,n){const r=e.slice();return r[0]=t[n],r}function fe(e){let t,n;return t=new Ne({props:{website:e[0]}}),{c(){Te(t.$$.fragment)},m(r,i){pe(t,r,i),n=!0},p:O,i(r){n||(y(t.$$.fragment,r),n=!0)},o(r){J(t.$$.fragment,r),n=!1},d(r){be(t,r)}}}function Ke(e){let t,n,r,i,o,m,b,A,c,S,g,h,v,B,C,T,I,D,q,H,$,U,ee,V,te,W,R,ne,ie,L,j,E=ce,u=[];for(let f=0;f<E.length;f+=1)u[f]=fe(ue(e,E,f));const Ce=f=>J(u[f],1,1,()=>{u[f]=null});return{c(){t=a("div"),n=a("div"),n.innerHTML="Student Welfare Division <br/> Services",r=k(),i=a("div"),o=a("img"),b=k(),A=a("div"),c=a("div"),c.textContent="Student Welfare Division Services",S=k(),g=a("div");for(let f=0;f<u.length;f+=1)u[f].c();h=k(),v=a("div"),v.innerHTML='<a href="https://bits-dvm.org">DVM, BITS Pilani</a>',B=k(),C=a("div"),T=a("div"),I=a("img"),q=k(),H=a("div"),$=k(),U=a("div"),ee=k(),V=a("div"),te=k(),W=a("div"),R=a("img"),ie=k(),L=a("div"),L.innerHTML='<a href="https://bits-dvm.org">DVM, BITS Pilani</a>',l(n,"class","App-header-mobile svelte-1kxm50p"),M(o.src,m=Ae)||l(o,"src",m),l(o,"alt","Right section"),l(o,"class","rightImg svelte-1kxm50p"),l(i,"class","rightImg-cont-mobile svelte-1kxm50p"),l(c,"class","App-header svelte-1kxm50p"),l(g,"class","Websites-cont svelte-1kxm50p"),l(v,"class","developer svelte-1kxm50p"),l(A,"class","App-left svelte-1kxm50p"),M(I.src,D=Ae)||l(I,"src",D),l(I,"alt","Right section"),l(I,"class","rightImg svelte-1kxm50p"),l(T,"class","rightImg-cont svelte-1kxm50p"),l(H,"class","triangle"),l(H,"id","triangle-1"),l(U,"class","triangle"),l(U,"id","triangle-2"),l(V,"class","triangle"),l(V,"id","triangle-3"),l(C,"class","App-right svelte-1kxm50p"),M(R.src,ne=Ye)||l(R,"src",ne),l(R,"alt","BITS Logo"),l(R,"class","svelte-1kxm50p"),l(W,"class","logo svelte-1kxm50p"),l(L,"class","developer-mobile svelte-1kxm50p"),l(t,"class","App svelte-1kxm50p")},m(f,p){me(f,t,p),s(t,n),s(t,r),s(t,i),s(i,o),s(t,b),s(t,A),s(A,c),s(A,S),s(A,g);for(let d=0;d<u.length;d+=1)u[d].m(g,null);s(A,h),s(A,v),s(t,B),s(t,C),s(C,T),s(T,I),s(C,q),s(C,H),s(C,$),s(C,U),s(C,ee),s(C,V),s(t,te),s(t,W),s(W,R),s(t,ie),s(t,L),j=!0},p(f,[p]){if(p&0){E=ce;let d;for(d=0;d<E.length;d+=1){const le=ue(f,E,d);u[d]?(u[d].p(le,p),y(u[d],1)):(u[d]=fe(le),u[d].c(),y(u[d],1),u[d].m(g,null))}for(Oe(),d=E.length;d<u.length;d+=1)Ce(d);Qe()}},i(f){if(!j){for(let p=0;p<E.length;p+=1)y(u[p]);j=!0}},o(f){u=u.filter(Boolean);for(let p=0;p<u.length;p+=1)J(u[p]);j=!1},d(f){f&&X(t),Re(u,f)}}}class _e extends Se{constructor(t){super(),ke(this,t,null,Ke,de,{})}}new _e({target:document.getElementById("app")});