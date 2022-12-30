import{s as h,v as p,A as d,_ as S,x as q,y as $,c as o,a as t,b as A,e as i,F as k,C,o as a,g as r,t as b,G as I,r as w,f as F,p as P,d as D}from"./index.478af692.js";import{_ as H}from"./ParticleComponent.a086615c.js";import{H as j}from"./HeroImageDivider.acfff18f.js";class g{constructor(e){this.id=e.id,this.q=e.q,this.a=e.a}}class B{async createFAQ(e){const s=await h.post("api/faqs",e);p.log(s.data);let l=new g(s.data);d.FAQS.push(l)}async getFAQs(){const e=await h.get("api/faqs");p.log(e.data),d.FAQS=e.data.map(s=>new g(s))}async updateFAQ(e){let s=e.id;const l=await h.put(`api/faqs/${s}`,e);p.log(l.data);let m=new g(l.data),f=d.faqs.findIndex(u=>u.id==m.id);d.FAQS[f]=m}async deleteFAQ(e){await h.delete(`api/faqs/${e}`),d.FAQS=d.faqs.filter(s=>s.id!=e)}}const M=new B,G="/assets/FAQ.8366069f.svg";const N={setup(){q(()=>{n()});async function n(){try{await M.getFAQs()}catch(e){p.error(e,"GetFAQS")}}return{QA:$(()=>d.FAQS)}},components:{ParticleComponent:H,HeroImageDivider:j}},Q=n=>(P("data-v-da9c51e6"),n=n(),D(),n),V={id:"hero-section"},O={class:"container-fluid"},z={class:"row"},E={class:"col-md-12 p-0"},L={class:"hero-image d-flex flex-column align-items-center justify-content-center"},T={class:"tsparticles"},W={class:"text-center container"},Y={delay:200,id:"shadow1",class:"font-1 text-shadow page-title text-light"},J=r(" Frequently Asked Questions "),K=[J],R={delay:400,class:"font-2 text-light text-shadow display-6"},U=r(" How can we help you? "),X=[U],Z={id:"accordion-faq",class:"container my-5"},tt={class:"row my-5 justify-content-center"},et={class:"col-md-8 d-flex justify-content-center flex-column align-content-center align-items-center"},st={delay:300,class:"font-1 quote text-center"},ot=r(" On an inhale, think of the things that are no longer serving you, whatever that may be. Maybe it\u2019s a thought Maybe it\u2019s a feeling Maybe it\u2019s a person Or an experience But taking it, And on an exhale, choosing consciously to let it go. "),at=[ot],nt={delay:300},it=r("- SamadhiYogaIdaho"),ct=[it],dt={class:"row my-5"},rt={class:"col-md-6"},lt={delay:300,class:"fs-2 text-center"},_t=r(" Frequently Asked Questions "),ht=[_t],pt={class:"col-md-6"},mt={delay:300,class:"fs-5 text-center"},ut=r(" Got a question? We're here to answer! if you don't see your question here, drop us a line on our "),gt=Q(()=>t("a",{href:"/contact",class:"text-pink darken-20"},"Connect Page.",-1)),ft=[ut,gt],yt={class:"col-md-12 text-center"},vt={delay:300,src:G,alt:"",class:"w-50"},At={class:"row justify-content-center"},bt={class:"col-md-12"},wt={class:"accordion",id:"faqAccordion"},Ft={delay:300,class:"accordion-item border-0"},Qt=["id"],xt=["data-bs-target","aria-expanded","aria-controls"],St=Q(()=>t("i",{class:"mdi mdi-help-circle me-3"},null,-1)),qt=["id","aria-labelledby"],$t={class:"accordion-body"},kt={class:"fs-5"};function Ct(n,e,s,l,m,f){const u=w("ParticleComponent"),x=w("HeroImageDivider"),y=F("motion-slide-top"),_=F("motion-slide-visible-once-bottom");return a(),o("div",null,[t("section",V,[t("div",O,[t("div",z,[t("div",E,[t("div",L,[t("div",T,[A(u)]),t("div",W,[i((a(),o("h1",Y,K)),[[y]]),i((a(),o("p",R,X)),[[y]])]),A(x)])])])])]),t("section",Z,[t("div",tt,[t("div",et,[i((a(),o("blockquote",st,at)),[[_]]),i((a(),o("cite",nt,ct)),[[_]])])]),t("div",dt,[t("div",rt,[i((a(),o("p",lt,ht)),[[_]])]),t("div",pt,[i((a(),o("p",mt,ft)),[[_]])]),t("div",yt,[i(t("img",vt,null,512),[[_]])])]),t("div",At,[t("div",bt,[t("div",wt,[(a(!0),o(k,null,C(l.QA,(v,c)=>i((a(),o("div",Ft,[t("h2",{class:"accordion-header border-0",id:`heading${c.toString()}`},[t("button",{class:"accordion-button text-dark font-2 fs-3 bg-transparent",type:"button","data-bs-toggle":"collapse","data-bs-target":`#Collapse${c.toString()}`,"aria-expanded":c==0,"aria-controls":`Collapse${c.toString()}`},[St,r(" "+b(v.q),1)],8,xt)],8,Qt),t("div",{class:I([(c==0,""),"accordion-collapse collapse"]),id:`Collapse${c.toString()}`,"aria-labelledby":`heading${c.toString()}`,"data-bs-parent":"#faqAccordion"},[t("div",$t,[t("p",kt,b(v.a),1)])],10,qt)])),[[_]])),256))])])])])])}const Ht=S(N,[["render",Ct],["__scopeId","data-v-da9c51e6"]]);export{Ht as default};