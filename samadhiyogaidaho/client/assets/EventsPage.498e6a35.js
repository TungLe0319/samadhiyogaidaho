import{_ as g,x as b,v as x,l as y,c as t,a as e,b as c,e as n,F as E,C as w,A as C,o as s,g as a,r,f as p,p as S,d as I}from"./index.784b6449.js";import{e as k,E as D,a as P}from"./EventForm.3bb90b2a.js";import{_ as F}from"./ParticleComponent.798efa96.js";import{H}from"./HeroImageDivider.3a6254b2.js";const N={setup(){b(()=>{o()});async function o(){try{await k.getEvents()}catch(_){x.error(_,"[getEvents]")}}return{events:y(()=>C.events)}},components:{EventForm:D,EventCard:P,ParticleComponent:F,HeroImageDivider:H}},v=o=>(S("data-v-f645bbef"),o=o(),I(),o),V={class:"hero-image d-flex flex-column justify-content-center align-items-center"},$={class:"tsparticles"},j={delay:200,class:"display-1 text-light text-shadow font-1 text-wrap page-title text-center"},B=a(" EVENTS "),A=[B],M={delay:400,class:"font-2 text-light text-shadow display-6"},T=a(" Enjoy an enriching and memorable experience "),G=[T],L={class:"container mt-5"},O={class:"row justify-content-center"},W={class:"col-md-10 text-center"},q={delay:300,class:"fs-4"},z=a(" We have been working hard behind the scenes getting several classes and events set up for 2023! "),J=v(()=>e("br",null,null,-1)),K=a(" Space will be extremely limited at each event, So please DM us today or call the Grove Fitness Club & Spa to sign up. "),Q=v(()=>e("br",null,null,-1)),R=[z,J,K,Q],U={delay:300,class:"fs-4 text-pink darken-20"},X=a(" Our pop up schedule for 2023 will be posted soon."),Y=[X],Z={class:"container my-5"};function ee(o,_,te,m,se,oe){const h=r("ParticleComponent"),u=r("HeroImageDivider"),f=r("EventCard"),d=p("motion-slide-top"),i=p("motion-slide-visible-once-bottom");return s(),t("div",null,[e("div",V,[e("div",$,[c(h)]),n((s(),t("h1",j,A)),[[d]]),n((s(),t("p",M,G)),[[d]]),c(u)]),e("div",L,[e("div",O,[e("div",W,[n((s(),t("p",q,R)),[[i]]),n((s(),t("p",U,Y)),[[i]])])])]),e("div",Z,[(s(!0),t(E,null,w(m.events,l=>n((s(),t("div",{delay:200,key:l.id},[c(f,{event:l},null,8,["event"])])),[[i]])),128))])])}const re=g(N,[["render",ee],["__scopeId","data-v-f645bbef"]]);export{re as default};
