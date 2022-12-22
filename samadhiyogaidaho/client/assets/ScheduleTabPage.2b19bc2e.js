import"./events.ef5b0c2a.js";import{l as v,u as i,A as n,_ as E,v as g,Q as b,x as _,q as C,j as p,c as a,a as c,F as k,B as x,b as f,o as d,r as m,p as B,e as F}from"./index.0787da94.js";import{E as I,a as $}from"./EventForm.2a2973f8.js";class r{constructor(e){this.id=e.id,this.title=e.title,this.location=e.location,this.time=e.time,this.address=e.address,this.description=e.description,this.cost=e.cost}}class j{async createSchedule(e){v.log(e);const t=await i.post("api/schedules",e);let o=new r(t.data);v.log(o),n.schedules.push(o)}async getSchedule(){const e=await i.get("api/schedules");n.schedules=e.data.map(t=>new r(t))}async updateSchedule(e){const t=await i.put("api/schedules",e);let o=new r(t.data),u=n.schedules.findIndex(h=>{h.id==e.id});n.schedules.splice(u,1,o)}async deleteSchedule(e){await i.delete(`api/schedules/${e}`),n.schedules=n.schedules.filter(t=>t.id!=e)}}const S=new j;const P={setup(){g(()=>{s()}),b(()=>n.activeEvent=null);async function s(){try{await S.getSchedule()}catch(t){_.error(t)}}const e=C(!1);return{events:p(()=>n.events),form:e,activeEvent:p(()=>n.activeEvent),async editSchedule(t){},async createSchedule(){try{await S.createSchedule()}catch(t){_.error(t,"[create Event]")}}}},components:{EventForm:I,EventCard:$}},A=s=>(B("data-v-83ee3ecd"),s=s(),F(),s),L={class:"container-fluid"},N={class:"row"},T={class:"col-md-12 my-2"},V={class:"d-flex justify-content-center"},q={key:0,class:"row scrollable-y"},M={class:"col-12"},Q={class:"position-relative"},R={class:"d-flex justify-content-center gap-2 position-absolute top-0 start-0"},z=["onClick"],G=A(()=>c("button",{class:"btn btn-outline-danger font-2 fs-3"},"delete event",-1)),H={key:1,class:"container-fluid"},J={class:"row"},K={class:"col-12"};function O(s,e,t,o,u,h){const y=m("EventCard"),w=m("EventForm");return d(),a("div",L,[c("div",N,[c("div",T,[c("div",V,[c("button",{class:"btn btn-outline-success font-2 fs-3",onClick:e[0]||(e[0]=l=>s.createEvent())}," Create Event ")])])]),o.activeEvent?(d(),a("div",H,[c("div",J,[c("div",K,[f(w)])])])):(d(),a("div",q,[(d(!0),a(k,null,x(o.events,l=>(d(),a("div",M,[c("div",Q,[f(y,{event:l},null,8,["event"]),c("div",R,[c("button",{class:"btn btn-outline-warning font-2 fs-3",onClick:U=>s.editEvent(l)}," edit event ",8,z),G])])]))),256))]))])}const Z=E(P,[["render",O],["__scopeId","data-v-83ee3ecd"]]);export{Z as default};
