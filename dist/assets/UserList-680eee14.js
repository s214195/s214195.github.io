import{_ as i,d as c,a as d}from"./firebaseInit-c135b685.js";import{f as m,o as a,c as t,a as p,F as l,k as s,t as n}from"./index-b6739f5d.js";const y={__name:"UserList",setup(_){const r=m([]);return(async()=>{const u=i(d,"users"),o=await c(u);r.value=o.docs.map(e=>e.data())})(),(u,o)=>(a(),t("div",null,[p("ul",null,[(a(!0),t(l,null,s(r.value,e=>(a(),t("li",{key:e.id},n(e.name),1))),128)),(a(!0),t(l,null,s(r.value,e=>(a(),t("li",{key:e.id},n(e.city),1))),128)),(a(!0),t(l,null,s(r.value,e=>(a(),t("li",{key:e.id},n(e.surname),1))),128)),(a(!0),t(l,null,s(r.value,e=>(a(),t("li",{key:e.id},n(e.age),1))),128))])]))}};export{y as default};
