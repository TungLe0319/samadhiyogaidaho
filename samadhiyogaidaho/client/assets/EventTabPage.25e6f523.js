import"./events.ef5b0c2a.js";import{_ as m,v as h,Q as y,x as o,q as g,j as v,A as s,l as b,c as a,F as w,B as C,k,a as n,b as _,o as r,r as E}from"./index.0787da94.js";import{e as i,E as x,a as D}from"./EventForm.2a2973f8.js";const S={setup(){h(()=>{l()}),y(()=>s.activeEvent=null);async function l(){try{await i.getEvents()}catch(e){o.error(e)}}const d=g(!1);return{events:v(()=>s.events),form:d,activeEvent:v(()=>s.activeEvent),async editEvent(e){try{e.startDate=new Date(e.startDate).toISOString().slice(0,-1),e.endDate=new Date(e.endDate).toISOString().slice(0,-1),s.activeEvent=e,b.log(e)}catch(t){o.error(t)}},async createEvent(){try{await i.createEvent()}catch(e){o.error(e,"[create Event]")}},async deleteEvent(e){try{if(!await o.confirm())return;await i.deleteEvent(e)}catch(t){o.error(t,"[create Event]")}}}},components:{EventForm:x,EventCard:D}},B={class:"container-fluid"},F={key:0,class:"row scrollable-y"},I={class:"col-12"},N={class:"position-relative"},P={class:"d-flex justify-content-center gap-2 position-absolute top-0 start-0"},V=["onClick"],j=["onClick"],A={class:"container-fluid"},L={class:"row"},O={class:"col-12"};function T(l,d,e,t,$,q){const u=E("EventCard"),f=E("EventForm");return r(),a("div",B,[t.activeEvent?k("",!0):(r(),a("div",F,[(r(!0),a(w,null,C(t.events,c=>(r(),a("div",I,[n("div",N,[_(u,{event:c},null,8,["event"]),n("div",P,[n("button",{class:"btn btn-outline-warning font-2 fs-3",onClick:p=>t.editEvent(c)}," edit event ",8,V),n("button",{class:"btn btn-outline-danger font-2 fs-3",onClick:p=>t.deleteEvent(c)}," delete event ",8,j)])])]))),256))])),n("div",A,[n("div",L,[n("div",O,[_(f)])])])])}const z=m(S,[["render",T],["__scopeId","data-v-7a61c7e2"]]);export{z as default};
