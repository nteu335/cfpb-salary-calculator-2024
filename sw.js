if(!self.define){let e,s={};const r=(r,i)=>(r=new URL(r+".js",i).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(i,n)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let o={};const l=e=>r(e,t),f={module:{uri:t},exports:o,require:l};s[t]=Promise.all(i.map((e=>f[e]||l(e)))).then((e=>(n(...e),o)))}}define(["./workbox-3625d7b0"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/Calculator.6c777b81.js",revision:null},{url:"assets/index.358167cc.js",revision:null},{url:"assets/index.5997690f.css",revision:null},{url:"index.html",revision:"64196b55babde8f247b7ef6a9f7461fc"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"robots.txt",revision:"9152d7f1724ed8fbcd2e0c87029f193c"},{url:"fonts/Inter-Bold.woff2",revision:"444a7284663a3bc886683eb81450b294"},{url:"fonts/Inter-Medium.woff2",revision:"75db5319e7e87c587019a5df08d7272c"},{url:"fonts/Inter-Regular.woff2",revision:"dc131113894217b5031000575d9de002"},{url:"manifest.webmanifest",revision:"83b0474916417650e8b4f4440cca9d15"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
