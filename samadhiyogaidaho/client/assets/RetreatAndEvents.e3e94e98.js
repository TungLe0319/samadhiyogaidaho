import{_ as c,l as d,A as i,r as _,f as l,o as e,c as t,a as m,e as p,F as v,C as f,b as u,m as h,g as y}from"./index.530ad9e5.js";import{R as b}from"./RetreatCard.478d53b5.js";const x={setup(){return{retreats:d(()=>i.retreats.filter(s=>!s.archived))}},components:{RetreatCard:b}},R={class:"container-md container-fluid py-5"},C={class:"mb-5 text-center"},k={delay:300,class:"display-1 font-1 text-start text-dark underline"},g=y(" Our Retreats "),A=[g],N={key:0,class:"row justify-content-center gy-5"};function V(s,B,E,r,w,D){const a=_("RetreatCard"),n=l("motion-slide-visible-once-bottom");return e(),t("div",R,[m("div",C,[p((e(),t("h1",k,A)),[[n]])]),r.retreats?(e(),t("div",N,[(e(!0),t(v,null,f(r.retreats,o=>(e(),t("div",{class:"col-md-10",key:o.id},[u(a,{retreat:o},null,8,["retreat"])]))),128))])):h("",!0)])}const j=c(x,[["render",V],["__scopeId","data-v-1fbf9479"]]);export{j as default};
