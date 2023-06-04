import{_ as O,y as N,r as l,g as T,m as B,x as R,z as j,o as _,c as g,b as e,t as i,h as Y,A as E,w as p,v as m,F,k as P,q as Q,p as q,i as G}from"./index-41b9bd8d.js";import{g as A,a as H,_ as Z,p as J,c as K,Q as W}from"./index.esm2017-95bb9d13.js";import{d as w}from"./firebaseInit-5a5e73f0.js";const c=v=>(q("data-v-efe111ed"),v=v(),G(),v),X={class:"doctor-detail"},$={class:"card mb-3"},ee={class:"row g-0"},oe={class:"col-md-4"},te=["src"],ae={class:"col-md-8"},se={class:"card-body"},ne={class:"card-title"},le={class:"card-text"},ie={class:"text-muted"},ce={class:"card-text"},re={class:"card-text"},de={class:"card-text"},ue=["href"],pe=c(()=>e("div",{class:"modal-background"},null,-1)),me={class:"modal-content"},ve={class:"box"},fe=c(()=>e("h1",{class:"title"},"Make an appointment",-1)),_e={class:"field form-group"},ge=c(()=>e("label",{class:"label form-label"},"Date and Time",-1)),be={class:"field form-group"},he=c(()=>e("label",{class:"label form-label"},"Name",-1)),ye={class:"field form-group"},xe=c(()=>e("label",{class:"label form-label"},"Surname",-1)),we={class:"field form-group"},ke=c(()=>e("label",{class:"label form-label"},"Age",-1)),Ae={class:"field form-group"},Se=c(()=>e("label",{class:"label form-label"},"Brief Description of Disease",-1)),De={class:"card-text"},Ce={key:0},Me=c(()=>e("div",{id:"mymap",class:"map"},null,-1)),Le={__name:"DoctorDetail",setup(v){const k=N(),o=l({}),f=l(!1),r=l(""),d=l(null),s=l({name:"",surname:"",age:null,diseaseDescription:"",number:"",email:""}),b=l(!1),h=l(""),u=l(null),S=T();B(u,n=>{console.log(n?"User is signed in!":"No user signed in!")}),R(S,n=>{n?u.value=n:u.value=null});function D(){u.value?b.value=!0:alert("You need to sign in to make an appointment!")}function y(){b.value=!1}async function C(){if(!u.value){alert("You need to sign in to make an appointment!");return}console.log(o.value.Surname),console.log(o.Surname),console.log(o.name),console.log("Appointment");const n=Z(w,"appointments");await J(n,{userId:u.value.uid,date:h.value,doctorName:o.value.name,doctorLoc:o.value.city,doctorSurname:o.value.Surname,patientName:s.value.name,patientSurname:s.value.surname,patientAge:s.value.age,diseaseDescription:s.value.diseaseDescription,patientAge:s.value.number,patientAge:s.value.email}),y()}function M(){f.value=!f.value}async function z(){if(o.value.opinions&&r.value.trim()!==""){o.value.opinions.push(r.value);const n=k.params.id,t=A(w,"doctors",n);await K(t,{opinions:W(r.value)}),r.value=""}}function U(){d.value=L.map("mymap").setView([50.049683,19.944544],13),L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',maxZoom:18}).addTo(d.value),L.marker([o.value.localization.latitude,o.value.localization.longitude]).addTo(d.value)}function V(){navigator.geolocation?navigator.geolocation.getCurrentPosition(I):alert("Geolocation is not supported by this browser.")}function I(n){const t=n.coords.latitude,a=n.coords.longitude;console.log("Latitude: "+t+", Longitude: "+a),d.value.setView([t,a],13);var x=L.icon({iconUrl:"https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",shadowUrl:"https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",iconSize:[25,41],shadowSize:[41,41],iconAnchor:[12,41],shadowAnchor:[4,62],popupAnchor:[1,-34]});L.marker([t,a],{icon:x}).addTo(d.value),L.polyline([[o.value.localization.latitude,o.value.localization.longitude],[t,a]],{color:"red"}).addTo(d.value)}return j(async()=>{const n=k.params.id,t=A(w,"doctors",n),a=await H(t);a.exists()?(o.value=a.data(),o.value.Calendar||(o.value.Calendar=Array(30).fill(!1)),U()):console.log("No such document!")}),(n,t)=>(_(),g("div",X,[e("div",$,[e("div",ee,[e("div",oe,[e("img",{src:o.value.imageUrl||"https://firebasestorage.googleapis.com/v0/b/e-doctor-923d0.appspot.com/o/logo.png?alt=media&token=81045d1f-6fd9-43bf-b15f-7e7fb5c3c286",alt:"Doctor Image",class:"card-img-top"},null,8,te)]),e("div",ae,[e("div",se,[e("h5",ne,i(o.value.name)+" "+i(o.value.Surname),1),e("p",le,[e("small",ie,"Cabinet adress: "+i(o.value.adress),1)]),e("p",ce,"Specialization: "+i(o.value.specialization),1),e("p",re,"Experience: "+i(o.value.experience)+" years",1),e("p",de,[Y("Call doctor: "),e("a",{href:"tel:"+o.value.number},i(o.value.number),9,ue)]),e("button",{class:"btn btn-primary",onClick:D},"Make Appointment"),e("div",{class:E(["modal",{"is-active":b.value}])},[pe,e("div",me,[e("div",ve,[fe,e("div",_e,[ge,p(e("input",{class:"input form-control",type:"datetime-local","onUpdate:modelValue":t[0]||(t[0]=a=>h.value=a)},null,512),[[m,h.value]])]),e("div",be,[he,p(e("input",{class:"input form-control",type:"text","onUpdate:modelValue":t[1]||(t[1]=a=>s.value.name=a)},null,512),[[m,s.value.name]])]),e("div",ye,[xe,p(e("input",{class:"input form-control",type:"text","onUpdate:modelValue":t[2]||(t[2]=a=>s.value.surname=a)},null,512),[[m,s.value.surname]])]),e("div",we,[ke,p(e("input",{class:"input form-control",type:"number","onUpdate:modelValue":t[3]||(t[3]=a=>s.value.age=a)},null,512),[[m,s.value.age]])]),e("div",Ae,[Se,p(e("textarea",{class:"textarea form-control","onUpdate:modelValue":t[4]||(t[4]=a=>s.value.diseaseDescription=a)},null,512),[[m,s.value.diseaseDescription]])]),e("div",{class:"buttons form-group d-flex justify-content-center"},[e("button",{class:"button btn btn-primary",onClick:C},"Submit"),e("button",{class:"button btn btn-secondary",onClick:y},"Cancel")])])]),e("button",{class:"modal-close is-large",onClick:y})],2),e("p",De,[e("button",{class:"btn btn-primary",onClick:M},i(f.value?"Hide Opinions":"Show Opinions"),1)]),f.value?(_(),g("div",Ce,[(_(!0),g(F,null,P(o.value.opinions,(a,x)=>(_(),g("div",{class:"opinion",key:x},i(a),1))),128)),p(e("input",{"onUpdate:modelValue":t[5]||(t[5]=a=>r.value=a),type:"text",placeholder:"Add your opinion",class:"form-control mb-3"},null,512),[[m,r.value]]),e("button",{class:"btn btn-primary",onClick:z},"Add Opinion")])):Q("",!0)])])])]),e("div",{class:"col-md-4"},[Me,e("button",{class:"btn btn-primary",onClick:V},"Locate Me")])]))}},Ie=O(Le,[["__scopeId","data-v-efe111ed"]]);export{Ie as default};