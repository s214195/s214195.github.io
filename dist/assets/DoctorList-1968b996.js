import{_ as p,d as u,a as f}from"./firebaseInit-c135b685.js";import{_ as m,f as g,o,c as e,F as i,k as l,a,t as n}from"./index-b6739f5d.js";const h={class:"doctors-list"},v=["src"],y={class:"doctor-info"},b={class:"rating"},k={__name:"DoctorList",setup(D){const r=g([]);(async()=>{const s=p(f,"doctors"),c=await u(s);r.value=c.docs.map(t=>t.data())})();function d(s){return s.reduce((c,t)=>c+t,0)/s.length}return(s,c)=>(o(),e("div",h,[(o(!0),e(i,null,l(r.value,t=>(o(),e("div",{key:t.id,class:"doctor-card"},[a("img",{src:"https://firebasestorage.googleapis.com/v0/b/e-doctor-923d0.appspot.com/o/logo.png?alt=media&token=81045d1f-6fd9-43bf-b15f-7e7fb5c3c286",alt:"Doctor Image",class:"doctor-image"},null,8,v),a("div",y,[a("h2",null,n(t.name)+" "+n(t.Surname),1),a("p",null,"City: "+n(t.city),1),a("p",null,"Specialization: "+n(t.specialization),1)]),a("div",b,[(o(!0),e(i,null,l(Math.round(d(t.rating)),_=>(o(),e("i",{class:"fa fa-star",key:_}))),128))])]))),128))]))}},S=m(k,[["__scopeId","data-v-347faa56"]]);export{S as default};
