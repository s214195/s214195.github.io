if(!self.define){let s,e={};const i=(i,r)=>(i=new URL(i+".js",r).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(r,l)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let t={};const o=s=>i(s,n),u={module:{uri:n},exports:t,require:o};e[n]=Promise.all(r.map((s=>u[s]||o(s)))).then((s=>(l(...s),t)))}}define(["./workbox-3625d7b0"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/Camera-251769e0.css",revision:null},{url:"assets/Camera-a65e99b0.js",revision:null},{url:"assets/DoctorDetail-71e67810.css",revision:null},{url:"assets/DoctorDetail-f98ee29f.js",revision:null},{url:"assets/DoctorList-24739d7b.css",revision:null},{url:"assets/DoctorList-d155983b.js",revision:null},{url:"assets/firebaseInit-30f44ec3.js",revision:null},{url:"assets/index-bfb62780.js",revision:null},{url:"assets/index-e0998cc2.css",revision:null},{url:"assets/Map-32060c1d.js",revision:null},{url:"assets/Map-ba8ab292.css",revision:null},{url:"assets/Register-69526eea.js",revision:null},{url:"assets/Register-c7080065.css",revision:null},{url:"assets/SignIn-b6a99a38.js",revision:null},{url:"assets/UserList-b3e8ca4e.js",revision:null},{url:"index.html",revision:"ab038c6f3d0b9b4375a3109f572f97d3"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"manifest.webmanifest",revision:"608404bfe77921ad00dfe67a568911c5"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
