if(!self.define){let e,t={};const i=(i,n)=>(i=new URL(i+".js",n).href,t[i]||new Promise((t=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=t,document.head.appendChild(e)}else e=i,importScripts(i),t()})).then((()=>{let e=t[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(t[o])return;let s={};const c=e=>i(e,o),d={module:{uri:o},exports:s,require:c};t[o]=Promise.all(n.map((e=>d[e]||c(e)))).then((e=>(r(...e),s)))}}define(["./workbox-1c3383c2"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"bundle.js",revision:"32772e2f30d3538f068c299823de4ef7"},{url:"bundle.js.LICENSE.txt",revision:"60f6bf9e100e456690e9ab6c9a37bfc2"},{url:"index.html",revision:"7d1ccdf5f7ad2a6eb1a7bd09656815a0"}],{})}));
