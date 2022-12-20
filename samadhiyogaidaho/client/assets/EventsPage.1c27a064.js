import{_ as p,q as u,s as f,u as g,w as E,o as a,c as l,a as e,t as n,f as c,g as C,l as S,j as $,b as m,n as k,F as h,D as B,A as D,r as d,h as F,p as I,e as j}from"./index.d58f363f.js";import{a as N,e as V,E as q}from"./EventForm.27e91e70.js";import{C as A}from"./CommentBox.8c3a5747.js";const M={props:{event:{type:N,required:!0}},setup(s){const o=u({});return f(()=>{}),g(()=>{}),{editable:o}}},P={class:"row my-5",delay:200},G={class:"col-md-6 d-flex align-items-center justify-content-center"},J=["src"],L={class:"col-md-6 text-start"},O={class:"underline fs-1 font-1 border-2 border-bottom text-start text-pink darken-20"},T={class:"d-flex"},z={class:"me-3"},H={class:"text-start"},K={class:"text-start"},Q={class:"text-start"},R={class:"fs-2 font-2"},U=e("img",{src:"https://cdn-icons-png.flaticon.com/512/8927/8927683.png",alt:"",class:"img-fluid",width:"80",height:"80"},null,-1),W={class:"fs-4 text-start"};function X(s,o,t,_,x,b){const r=C("motion-slide-visible-bottom");return E((a(),l("div",P,[e("div",G,[e("img",{src:t.event.img,alt:"",class:"img-fluid rounded elevation-6 hover-image w-75"},null,8,J)]),e("div",L,[e("p",O,n(t.event.title),1),e("div",T,[e("div",z,[e("p",H,n(t.event.startDate)+" - "+n(t.event.endDate),1),e("p",K,n(t.event.location.place),1),e("p",Q,n(t.event.location.address),1)]),e("div",R,[c(" $"+n(t.event.cost)+" per ",1),U])]),e("p",W,n(t.event.description),1)])])),[[r]])}const Y=p(M,[["render",X]]);const Z={setup(){const s=u({});f(()=>{o()}),g(()=>{});async function o(){try{await V.getEvents()}catch(t){S.error(t,"[getEvents]")}}return{editable:s,events:$(()=>D.events)}},components:{CommentBox:A,EventForm:q,EventCard:Y}},i=s=>(I("data-v-c7b9d30f"),s=s(),j(),s),ee=i(()=>e("div",{class:"hero-image d-flex flex-column justify-content-center align-items-center"},[e("h1",{class:"display-1 text-light text-shadow font-1 text-wrap"},"Join our Events "),e("p",{class:"font-1 text-light text-shadow display-6"},"Enjoy an enriching and memorable experience")],-1)),te={class:"container my-5"},se={class:"row"},ne=i(()=>e("p",{class:"fs-4 text-start"},[c("I have been working hard behind the scenes getting several classes and events set up for 2023! "),e("br"),c(" Space will be extremely limited at each event, So please DM us today or call the Grove Fitness Club & Spa to sign up. "),e("br"),c(" Our pop up schedule for 2023 will be posted soon so you can have an idea and plan for events you\u2019d like to attend next year. ")],-1)),oe=i(()=>e("hr",{class:"mt-4"},null,-1)),ae={class:"row"},ce=i(()=>e("hr",{class:"mt-4"},null,-1));function ie(s,o,t,_,x,b){const r=d("CommentBox"),y=d("EventForm"),w=d("EventCard");return a(),l(h,null,[ee,e("div",te,[e("div",se,[m(r,null,{default:k(()=>[ne]),_:1})]),oe,e("div",ae,[m(y)]),ce,(a(!0),l(h,null,B(_.events,v=>(a(),F(w,{event:v,key:v.id},null,8,["event"]))),128))])],64)}const _e=p(Z,[["render",ie],["__scopeId","data-v-c7b9d30f"]]);export{_e as default};
