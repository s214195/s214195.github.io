import{_ as b,r as c,u as f,o as u,c as p,b as s,w as g,v,t as w,q as I,g as _,P as S,G as x,s as y,p as k,i as E}from"./index-b41826f9.js";const r=a=>(k("data-v-03a89bf0"),a=a(),E(),a),P={class:"container vh-100 d-flex flex-column justify-content-center"},W=r(()=>s("h1",{class:"text-center mb-4"},"Sign In",-1)),D={class:"form-floating mb-3"},G=r(()=>s("label",{for:"emailInput"},"Email",-1)),V={class:"form-floating mb-3"},A=r(()=>s("label",{for:"passwordInput"},"Password",-1)),B={key:0,class:"text-danger"},C={__name:"SignIn",setup(a){const n=c(""),l=c(""),e=c(),d=f(),m=()=>{const t=_();S(t,n.value,l.value).then(o=>{console.log("Successfully signed in!"),console.log(t.currentUser),d.push("/DoctorList")}).catch(o=>{switch("vibrate"in navigator&&(console.log("vibration also HERE"),navigator.vibrate(2e3)),console.log(o.code),o.code){case"auth/invalid-email":e.value="Invalid email";break;case"auth/user-not-found":e.value="No account with that email was found";break;case"auth/wrong-password":e.value="Wrong Password";break;default:e.value="Email or password was incorrect";break}})},h=()=>{const t=new x;y(_(),t).then(o=>{console.log(o.user),d.push("/DoctorList")}).catch(o=>{console.log(o.code),alert(o.message)})};return(t,o)=>(u(),p("div",P,[W,s("div",D,[g(s("input",{type:"text",placeholder:"Email","onUpdate:modelValue":o[0]||(o[0]=i=>n.value=i),class:"form-control",id:"emailInput"},null,512),[[v,n.value]]),G]),s("div",V,[g(s("input",{type:"password",placeholder:"Password","onUpdate:modelValue":o[1]||(o[1]=i=>l.value=i),class:"form-control",id:"passwordInput"},null,512),[[v,l.value]]),A]),e.value?(u(),p("p",B,w(e.value),1)):I("",!0),s("div",{class:"d-grid mb-3"},[s("button",{class:"btn btn-primary",onClick:m},"Submit")]),s("div",{class:"d-grid"},[s("button",{class:"btn btn-secondary",onClick:h},"Sign In With Google")])]))}},U=b(C,[["__scopeId","data-v-03a89bf0"]]);export{U as default};
