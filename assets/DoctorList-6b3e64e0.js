import{_ as d,d as _,a as p}from"./firebaseInit-07883893.js";import{_ as u,r as m,f,o as n,c as i,F as g,e as h,h as v,i as b,a as s,t as c}from"./index-cc870c15.js";const k={class:"doctors-list"},y=["src"],D={class:"doctor-info"},x={class:"rating"},C={__name:"DoctorList",setup(L){const r=m([]);(async()=>{const e=d(p,"doctors"),a=await _(e);r.value=a.docs.map(t=>({id:t.id,...t.data()}))})();function l(e){return console.log(e.reduce((a,t)=>a+t,0)/e.length),e.reduce((a,t)=>a+t,0)/e.length}return(e,a)=>{const t=f("router-link");return n(),i("div",k,[(n(!0),i(g,null,h(r.value,o=>(n(),i("div",{key:o.id,class:"doctor-card"},[v(t,{to:{name:"DoctorDetail",params:{id:o.id}},class:"card-link"},{default:b(()=>[s("img",{src:"https://firebasestorage.googleapis.com/v0/b/e-doctor-923d0.appspot.com/o/logo.png?alt=media&token=81045d1f-6fd9-43bf-b15f-7e7fb5c3c286",alt:"Doctor Image",class:"doctor-image"},null,8,y),s("div",D,[s("h2",null,c(o.name)+" "+c(o.Surname),1),s("p",null,"City: "+c(o.city),1),s("p",null,"Specialization: "+c(o.specialization),1)]),s("div",x,[s("span",null,"Rating: ("+c(l(o.rating).toFixed(2))+")",1)])]),_:2},1032,["to"])]))),128))])}}},F=u(C,[["__scopeId","data-v-9a3bd2d1"]]);export{F as default};
