if(!self.define){let s,e={};const i=(i,r)=>(i=new URL(i+".js",r).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(r,l)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let t={};const o=s=>i(s,n),u={module:{uri:n},exports:t,require:o};e[n]=Promise.all(r.map((s=>u[s]||o(s)))).then((s=>(l(...s),t)))}}define(["./workbox-3625d7b0"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/Camera-251769e0.css",revision:null},{url:"assets/Camera-bbee891b.js",revision:null},{url:"assets/DoctorDetail-5941b34e.js",revision:null},{url:"assets/DoctorDetail-71e67810.css",revision:null},{url:"assets/DoctorList-24739d7b.css",revision:null},{url:"assets/DoctorList-3b1c7dce.js",revision:null},{url:"assets/firebaseInit-c67bae67.js",revision:null},{url:"assets/index-5417e877.css",revision:null},{url:"assets/index-c13aaebf.js",revision:null},{url:"assets/Map-6cd53007.js",revision:null},{url:"assets/Map-ba8ab292.css",revision:null},{url:"assets/Register-14202994.js",revision:null},{url:"assets/Register-c7080065.css",revision:null},{url:"assets/SignIn-182c8bd7.js",revision:null},{url:"assets/UserList-8b3055a0.js",revision:null},{url:"index.html",revision:"5f1f3f591bc6fc147dc2ffdee251a15e"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"manifest.webmanifest",revision:"608404bfe77921ad00dfe67a568911c5"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
