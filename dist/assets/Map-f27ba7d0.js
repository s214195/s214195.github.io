import{_ as n,o as r,c as p,a as s}from"./index-65eb66f1.js";const c={mounted(){this.showMap()},methods:{showMap(){this.map=L.map("mymap").setView([50.049683,19.944544],13),L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',maxZoom:18}).addTo(this.map)},locateMe(){navigator.geolocation?navigator.geolocation.getCurrentPosition(this.showPosition):alert("Geolocation is not supported by this browser.")},showPosition(o){const t=o.coords.latitude,e=o.coords.longitude;console.log("Latitude: "+t+", Longitude: "+e),this.map.setView([t,e],13),L.marker([t,e]).addTo(this.map)}}},l=s("div",{id:"mymap",class:"map"},null,-1);function d(o,t,e,m,u,a){return r(),p("div",null,[l,s("button",{onClick:t[0]||(t[0]=(...i)=>a.locateMe&&a.locateMe(...i))},"Locate Me")])}const _=n(c,[["render",d]]);export{_ as default};