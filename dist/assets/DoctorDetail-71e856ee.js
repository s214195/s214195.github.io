import{g as h,b as v,_ as f,d as g,a as r}from"./firebaseInit-07883893.js";import{_ as x,r as _,k as b,l as y,o as a,c,a as s,t as o,F as k,e as D,j as w,n as B}from"./index-cc870c15.js";const C={class:"doctor-detail"},S={class:"card mb-3",style:{"max-width":"540px"}},z={class:"row g-0"},I={class:"col-md-4"},N=["src"],E={class:"col-md-8"},F={class:"card-body"},R={class:"card-title"},V={class:"card-text"},j={class:"text-muted"},J={class:"card-text"},L={class:"card-text"},M={class:"card-text"},O={key:0,class:"row"},q={__name:"DoctorDetail",setup(A){const e=_({}),d=_([]);return b(async()=>{const i=y().params.id,t=h(r,"doctors",i),l=await v(t);l.exists()?e.value=l.data():console.log("No such document!");const u=f(r,"calendar"),m=await g(u);d.value=m.docs.map(n=>({id:n.id,...n.data()}))}),(p,i)=>(a(),c("div",C,[s("div",S,[s("div",z,[s("div",I,[s("img",{src:"https://firebasestorage.googleapis.com/v0/b/e-doctor-923d0.appspot.com/o/logo.png?alt=media&token=81045d1f-6fd9-43bf-b15f-7e7fb5c3c286",alt:"Doctor Image",class:"img-fluid rounded-circle"},null,8,N)]),s("div",E,[s("div",F,[s("h5",R,o(e.value.name)+" "+o(e.value.surname),1),s("p",V,[s("small",j,"City: "+o(e.value.city),1)]),s("p",J,"Specialization: "+o(e.value.specialization),1),s("p",L,"Experience: "+o(e.value.experience)+" years",1),s("p",M,"Opinions: "+o(e.value.opinions),1)]),d.value.length?(a(),c("div",O,[(a(!0),c(k,null,D(d.value,t=>(a(),c("div",{key:t.id,class:"col-4"},[s("div",{class:B(["day",{booked:t.isBooked}])}," June "+o(t.id),3)]))),128))])):w("",!0)])])])]))}},K=x(q,[["__scopeId","data-v-392046b0"]]);export{K as default};
