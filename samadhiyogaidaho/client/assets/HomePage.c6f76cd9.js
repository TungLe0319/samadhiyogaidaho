import{_ as R,j as ft,x as X,q as ut,o as v,c as y,D as K,s as Y,v as Z,A as H,l as ct,e as O,h as st,w as nt,C as ot,a as s,F as lt,t as it,g as D,r as L,f as z,p as w,d as tt,P as mt,H as q,I as pt,b as F,E as G}from"./index.530ad9e5.js";import{_ as _t}from"./ParticleComponent.989dba75.js";import{$ as N,c as ht,g as Q,n as gt,e as dt,a as rt,b as U,d as vt,S as yt,f as bt,N as $t}from"./swiper.min.85bd64df.js";import{s as xt}from"./ScheduleService.8764e40a.js";import"./compressor.esm.c5cb867f.js";const Ct={props:{},setup(t){const d=ft({});return X(()=>{}),ut(()=>{}),{editable:d}}},Et={class:"editorial mb-0",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 24 150 28 ",preserveAspectRatio:"none"},St=K(`<defs data-v-87286174><path id="gentle-wave" d="M-160 44c30 0 \r
    58-18 88-18s\r
    58 18 88 18 \r
    58-18 88-18 \r
    58 18 88 18\r
    v44h-352z" data-v-87286174></path></defs><g class="parallax1" data-v-87286174><use xlink:href="#gentle-wave" x="50" y="3" fill="#ffc1a5" data-v-87286174></use></g><g class="parallax2" data-v-87286174><use xlink:href="#gentle-wave" x="50" y="0" fill="#f68b59" data-v-87286174></use></g><g class="parallax3" data-v-87286174><use xlink:href="#gentle-wave" x="50" y="9" fill="#f9ad8a" data-v-87286174></use></g><g class="parallax4" data-v-87286174><use xlink:href="#gentle-wave" x="50" y="6" fill="#fff" data-v-87286174></use></g>`,5),Mt=[St];function Tt(t,d,c,r,u,_){return v(),y("svg",Et,Mt)}const At=R(Ct,[["render",Tt],["__scopeId","data-v-87286174"]]);function j(t=""){return`.${t.trim().replace(/([\.:!\/])/g,"\\$1").replace(/ /g,".")}`}function Pt({swiper:t,extendParams:d,on:c,emit:r}){const u="swiper-pagination";d({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:e=>e,formatFractionTotal:e=>e,bulletClass:`${u}-bullet`,bulletActiveClass:`${u}-bullet-active`,modifierClass:`${u}-`,currentClass:`${u}-current`,totalClass:`${u}-total`,hiddenClass:`${u}-hidden`,progressbarFillClass:`${u}-progressbar-fill`,progressbarOppositeClass:`${u}-progressbar-opposite`,clickableClass:`${u}-clickable`,lockClass:`${u}-lock`,horizontalClass:`${u}-horizontal`,verticalClass:`${u}-vertical`,paginationDisabledClass:`${u}-disabled`}}),t.pagination={el:null,$el:null,bullets:[]};let _,l=0;function h(){return!t.params.pagination.el||!t.pagination.el||!t.pagination.$el||t.pagination.$el.length===0}function g(e,a){const{bulletActiveClass:i}=t.params.pagination;e[a]().addClass(`${i}-${a}`)[a]().addClass(`${i}-${a}-${a}`)}function n(){const e=t.rtl,a=t.params.pagination;if(h())return;const i=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,f=t.pagination.$el;let m;const b=t.params.loop?Math.ceil((i-t.loopedSlides*2)/t.params.slidesPerGroup):t.snapGrid.length;if(t.params.loop?(m=Math.ceil((t.activeIndex-t.loopedSlides)/t.params.slidesPerGroup),m>i-1-t.loopedSlides*2&&(m-=i-t.loopedSlides*2),m>b-1&&(m-=b),m<0&&t.params.paginationType!=="bullets"&&(m=b+m)):typeof t.snapIndex<"u"?m=t.snapIndex:m=t.activeIndex||0,a.type==="bullets"&&t.pagination.bullets&&t.pagination.bullets.length>0){const o=t.pagination.bullets;let S,T,B;if(a.dynamicBullets&&(_=o.eq(0)[t.isHorizontal()?"outerWidth":"outerHeight"](!0),f.css(t.isHorizontal()?"width":"height",`${_*(a.dynamicMainBullets+4)}px`),a.dynamicMainBullets>1&&t.previousIndex!==void 0&&(l+=m-(t.previousIndex-t.loopedSlides||0),l>a.dynamicMainBullets-1?l=a.dynamicMainBullets-1:l<0&&(l=0)),S=Math.max(m-l,0),T=S+(Math.min(o.length,a.dynamicMainBullets)-1),B=(T+S)/2),o.removeClass(["","-next","-next-next","-prev","-prev-prev","-main"].map(M=>`${a.bulletActiveClass}${M}`).join(" ")),f.length>1)o.each(M=>{const A=N(M),x=A.index();x===m&&A.addClass(a.bulletActiveClass),a.dynamicBullets&&(x>=S&&x<=T&&A.addClass(`${a.bulletActiveClass}-main`),x===S&&g(A,"prev"),x===T&&g(A,"next"))});else{const M=o.eq(m),A=M.index();if(M.addClass(a.bulletActiveClass),a.dynamicBullets){const x=o.eq(S),I=o.eq(T);for(let C=S;C<=T;C+=1)o.eq(C).addClass(`${a.bulletActiveClass}-main`);if(t.params.loop)if(A>=o.length){for(let C=a.dynamicMainBullets;C>=0;C-=1)o.eq(o.length-C).addClass(`${a.bulletActiveClass}-main`);o.eq(o.length-a.dynamicMainBullets-1).addClass(`${a.bulletActiveClass}-prev`)}else g(x,"prev"),g(I,"next");else g(x,"prev"),g(I,"next")}}if(a.dynamicBullets){const M=Math.min(o.length,a.dynamicMainBullets+4),A=(_*M-_)/2-B*_,x=e?"right":"left";o.css(t.isHorizontal()?x:"top",`${A}px`)}}if(a.type==="fraction"&&(f.find(j(a.currentClass)).text(a.formatFractionCurrent(m+1)),f.find(j(a.totalClass)).text(a.formatFractionTotal(b))),a.type==="progressbar"){let o;a.progressbarOpposite?o=t.isHorizontal()?"vertical":"horizontal":o=t.isHorizontal()?"horizontal":"vertical";const S=(m+1)/b;let T=1,B=1;o==="horizontal"?T=S:B=S,f.find(j(a.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${T}) scaleY(${B})`).transition(t.params.speed)}a.type==="custom"&&a.renderCustom?(f.html(a.renderCustom(t,m+1,b)),r("paginationRender",f[0])):r("paginationUpdate",f[0]),t.params.watchOverflow&&t.enabled&&f[t.isLocked?"addClass":"removeClass"](a.lockClass)}function p(){const e=t.params.pagination;if(h())return;const a=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,i=t.pagination.$el;let f="";if(e.type==="bullets"){let m=t.params.loop?Math.ceil((a-t.loopedSlides*2)/t.params.slidesPerGroup):t.snapGrid.length;t.params.freeMode&&t.params.freeMode.enabled&&!t.params.loop&&m>a&&(m=a);for(let b=0;b<m;b+=1)e.renderBullet?f+=e.renderBullet.call(t,b,e.bulletClass):f+=`<${e.bulletElement} class="${e.bulletClass}"></${e.bulletElement}>`;i.html(f),t.pagination.bullets=i.find(j(e.bulletClass))}e.type==="fraction"&&(e.renderFraction?f=e.renderFraction.call(t,e.currentClass,e.totalClass):f=`<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`,i.html(f)),e.type==="progressbar"&&(e.renderProgressbar?f=e.renderProgressbar.call(t,e.progressbarFillClass):f=`<span class="${e.progressbarFillClass}"></span>`,i.html(f)),e.type!=="custom"&&r("paginationRender",t.pagination.$el[0])}function P(){t.params.pagination=ht(t,t.originalParams.pagination,t.params.pagination,{el:"swiper-pagination"});const e=t.params.pagination;if(!e.el)return;let a=N(e.el);a.length!==0&&(t.params.uniqueNavElements&&typeof e.el=="string"&&a.length>1&&(a=t.$el.find(e.el),a.length>1&&(a=a.filter(i=>N(i).parents(".swiper")[0]===t.el))),e.type==="bullets"&&e.clickable&&a.addClass(e.clickableClass),a.addClass(e.modifierClass+e.type),a.addClass(t.isHorizontal()?e.horizontalClass:e.verticalClass),e.type==="bullets"&&e.dynamicBullets&&(a.addClass(`${e.modifierClass}${e.type}-dynamic`),l=0,e.dynamicMainBullets<1&&(e.dynamicMainBullets=1)),e.type==="progressbar"&&e.progressbarOpposite&&a.addClass(e.progressbarOppositeClass),e.clickable&&a.on("click",j(e.bulletClass),function(f){f.preventDefault();let m=N(this).index()*t.params.slidesPerGroup;t.params.loop&&(m+=t.loopedSlides),t.slideTo(m)}),Object.assign(t.pagination,{$el:a,el:a[0]}),t.enabled||a.addClass(e.lockClass))}function E(){const e=t.params.pagination;if(h())return;const a=t.pagination.$el;a.removeClass(e.hiddenClass),a.removeClass(e.modifierClass+e.type),a.removeClass(t.isHorizontal()?e.horizontalClass:e.verticalClass),t.pagination.bullets&&t.pagination.bullets.removeClass&&t.pagination.bullets.removeClass(e.bulletActiveClass),e.clickable&&a.off("click",j(e.bulletClass))}c("init",()=>{t.params.pagination.enabled===!1?k():(P(),p(),n())}),c("activeIndexChange",()=>{(t.params.loop||typeof t.snapIndex>"u")&&n()}),c("snapIndexChange",()=>{t.params.loop||n()}),c("slidesLengthChange",()=>{t.params.loop&&(p(),n())}),c("snapGridLengthChange",()=>{t.params.loop||(p(),n())}),c("destroy",()=>{E()}),c("enable disable",()=>{const{$el:e}=t.pagination;e&&e[t.enabled?"removeClass":"addClass"](t.params.pagination.lockClass)}),c("lock unlock",()=>{n()}),c("click",(e,a)=>{const i=a.target,{$el:f}=t.pagination;if(t.params.pagination.el&&t.params.pagination.hideOnClick&&f&&f.length>0&&!N(i).hasClass(t.params.pagination.bulletClass)){if(t.navigation&&(t.navigation.nextEl&&i===t.navigation.nextEl||t.navigation.prevEl&&i===t.navigation.prevEl))return;const m=f.hasClass(t.params.pagination.hiddenClass);r(m===!0?"paginationShow":"paginationHide"),f.toggleClass(t.params.pagination.hiddenClass)}});const $=()=>{t.$el.removeClass(t.params.pagination.paginationDisabledClass),t.pagination.$el&&t.pagination.$el.removeClass(t.params.pagination.paginationDisabledClass),P(),p(),n()},k=()=>{t.$el.addClass(t.params.pagination.paginationDisabledClass),t.pagination.$el&&t.pagination.$el.addClass(t.params.pagination.paginationDisabledClass),E()};Object.assign(t.pagination,{enable:$,disable:k,render:p,update:n,init:P,destroy:E})}function It({swiper:t,extendParams:d,on:c,emit:r}){let u;t.autoplay={running:!1,paused:!1},d({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});function _(){if(!t.size){t.autoplay.running=!1,t.autoplay.paused=!1;return}const e=t.slides.eq(t.activeIndex);let a=t.params.autoplay.delay;e.attr("data-swiper-autoplay")&&(a=e.attr("data-swiper-autoplay")||t.params.autoplay.delay),clearTimeout(u),u=gt(()=>{let i;t.params.autoplay.reverseDirection?t.params.loop?(t.loopFix(),i=t.slidePrev(t.params.speed,!0,!0),r("autoplay")):t.isBeginning?t.params.autoplay.stopOnLastSlide?h():(i=t.slideTo(t.slides.length-1,t.params.speed,!0,!0),r("autoplay")):(i=t.slidePrev(t.params.speed,!0,!0),r("autoplay")):t.params.loop?(t.loopFix(),i=t.slideNext(t.params.speed,!0,!0),r("autoplay")):t.isEnd?t.params.autoplay.stopOnLastSlide?h():(i=t.slideTo(0,t.params.speed,!0,!0),r("autoplay")):(i=t.slideNext(t.params.speed,!0,!0),r("autoplay")),(t.params.cssMode&&t.autoplay.running||i===!1)&&_()},a)}function l(){return typeof u<"u"||t.autoplay.running?!1:(t.autoplay.running=!0,r("autoplayStart"),_(),!0)}function h(){return!t.autoplay.running||typeof u>"u"?!1:(u&&(clearTimeout(u),u=void 0),t.autoplay.running=!1,r("autoplayStop"),!0)}function g(e){!t.autoplay.running||t.autoplay.paused||(u&&clearTimeout(u),t.autoplay.paused=!0,e===0||!t.params.autoplay.waitForTransition?(t.autoplay.paused=!1,_()):["transitionend","webkitTransitionEnd"].forEach(a=>{t.$wrapperEl[0].addEventListener(a,p)}))}function n(){const e=Q();e.visibilityState==="hidden"&&t.autoplay.running&&g(),e.visibilityState==="visible"&&t.autoplay.paused&&(_(),t.autoplay.paused=!1)}function p(e){!t||t.destroyed||!t.$wrapperEl||e.target===t.$wrapperEl[0]&&(["transitionend","webkitTransitionEnd"].forEach(a=>{t.$wrapperEl[0].removeEventListener(a,p)}),t.autoplay.paused=!1,t.autoplay.running?_():h())}function P(){t.params.autoplay.disableOnInteraction?h():(r("autoplayPause"),g()),["transitionend","webkitTransitionEnd"].forEach(e=>{t.$wrapperEl[0].removeEventListener(e,p)})}function E(){t.params.autoplay.disableOnInteraction||(t.autoplay.paused=!1,r("autoplayResume"),_())}function $(){t.params.autoplay.pauseOnMouseEnter&&(t.$el.on("mouseenter",P),t.$el.on("mouseleave",E))}function k(){t.$el.off("mouseenter",P),t.$el.off("mouseleave",E)}c("init",()=>{t.params.autoplay.enabled&&(l(),Q().addEventListener("visibilitychange",n),$())}),c("beforeTransitionStart",(e,a,i)=>{t.autoplay.running&&(i||!t.params.autoplay.disableOnInteraction?t.autoplay.pause(a):h())}),c("sliderFirstMove",()=>{t.autoplay.running&&(t.params.autoplay.disableOnInteraction?h():g())}),c("touchEnd",()=>{t.params.cssMode&&t.autoplay.paused&&!t.params.autoplay.disableOnInteraction&&_()}),c("destroy",()=>{k(),t.autoplay.running&&h(),Q().removeEventListener("visibilitychange",n)}),Object.assign(t.autoplay,{pause:g,run:_,start:l,stop:h})}function Ot({swiper:t,extendParams:d,on:c}){d({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0,transformEl:null}}),dt({effect:"coverflow",swiper:t,on:c,setTranslate:()=>{const{width:_,height:l,slides:h,slidesSizesGrid:g}=t,n=t.params.coverflowEffect,p=t.isHorizontal(),P=t.translate,E=p?-P+_/2:-P+l/2,$=p?n.rotate:-n.rotate,k=n.depth;for(let e=0,a=h.length;e<a;e+=1){const i=h.eq(e),f=g[e],m=i[0].swiperSlideOffset,b=(E-m-f/2)/f,o=typeof n.modifier=="function"?n.modifier(b):b*n.modifier;let S=p?$*o:0,T=p?0:$*o,B=-k*Math.abs(o),M=n.stretch;typeof M=="string"&&M.indexOf("%")!==-1&&(M=parseFloat(n.stretch)/100*f);let A=p?0:M*o,x=p?M*o:0,I=1-(1-n.scale)*Math.abs(o);Math.abs(x)<.001&&(x=0),Math.abs(A)<.001&&(A=0),Math.abs(B)<.001&&(B=0),Math.abs(S)<.001&&(S=0),Math.abs(T)<.001&&(T=0),Math.abs(I)<.001&&(I=0);const C=`translate3d(${x}px,${A}px,${B}px)  rotateX(${T}deg) rotateY(${S}deg) scale(${I})`;if(rt(n,i).transform(C),i[0].style.zIndex=-Math.abs(Math.round(o))+1,n.slideShadows){let V=p?i.find(".swiper-slide-shadow-left"):i.find(".swiper-slide-shadow-top"),W=p?i.find(".swiper-slide-shadow-right"):i.find(".swiper-slide-shadow-bottom");V.length===0&&(V=U(n,i,p?"left":"top")),W.length===0&&(W=U(n,i,p?"right":"bottom")),V.length&&(V[0].style.opacity=o>0?o:0),W.length&&(W[0].style.opacity=-o>0?-o:0)}}},setTransition:_=>{const{transformEl:l}=t.params.coverflowEffect;(l?t.slides.find(l):t.slides).transition(_).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(_)},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0})})}function kt({swiper:t,extendParams:d,on:c}){d({creativeEffect:{transformEl:null,limitProgress:1,shadowPerProgress:!1,progressMultiplier:1,perspective:!0,prev:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1},next:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1}}});const r=l=>typeof l=="string"?l:`${l}px`;dt({effect:"creative",swiper:t,on:c,setTranslate:()=>{const{slides:l,$wrapperEl:h,slidesSizesGrid:g}=t,n=t.params.creativeEffect,{progressMultiplier:p}=n,P=t.params.centeredSlides;if(P){const E=g[0]/2-t.params.slidesOffsetBefore||0;h.transform(`translateX(calc(50% - ${E}px))`)}for(let E=0;E<l.length;E+=1){const $=l.eq(E),k=$[0].progress,e=Math.min(Math.max($[0].progress,-n.limitProgress),n.limitProgress);let a=e;P||(a=Math.min(Math.max($[0].originalProgress,-n.limitProgress),n.limitProgress));const i=$[0].swiperSlideOffset,f=[t.params.cssMode?-i-t.translate:-i,0,0],m=[0,0,0];let b=!1;t.isHorizontal()||(f[1]=f[0],f[0]=0);let o={translate:[0,0,0],rotate:[0,0,0],scale:1,opacity:1};e<0?(o=n.next,b=!0):e>0&&(o=n.prev,b=!0),f.forEach((I,C)=>{f[C]=`calc(${I}px + (${r(o.translate[C])} * ${Math.abs(e*p)}))`}),m.forEach((I,C)=>{m[C]=o.rotate[C]*Math.abs(e*p)}),$[0].style.zIndex=-Math.abs(Math.round(k))+l.length;const S=f.join(", "),T=`rotateX(${m[0]}deg) rotateY(${m[1]}deg) rotateZ(${m[2]}deg)`,B=a<0?`scale(${1+(1-o.scale)*a*p})`:`scale(${1-(1-o.scale)*a*p})`,M=a<0?1+(1-o.opacity)*a*p:1-(1-o.opacity)*a*p,A=`translate3d(${S}) ${T} ${B}`;if(b&&o.shadow||!b){let I=$.children(".swiper-slide-shadow");if(I.length===0&&o.shadow&&(I=U(n,$)),I.length){const C=n.shadowPerProgress?e*(1/n.limitProgress):e;I[0].style.opacity=Math.min(Math.max(Math.abs(C),0),1)}}const x=rt(n,$);x.transform(A).css({opacity:M}),o.origin&&x.css("transform-origin",o.origin)}},setTransition:l=>{const{transformEl:h}=t.params.creativeEffect;(h?t.slides.find(h):t.slides).transition(l).find(".swiper-slide-shadow").transition(l),vt({swiper:t,duration:l,transformEl:h,allSlides:!0})},perspective:()=>t.params.creativeEffect.perspective,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!t.params.cssMode})})}class J{constructor(d){this.id=d.id,this.name=d.name,this.rating=d.rating,this.text=d.text}}class Bt{async createTestimonial(d){const c=await Y.post("api/testimonials",d);Z.log(c.data);let r=new J(c.data);H.testimonials.push(r)}async getTestimonials(){const d=await Y.get("api/testimonials");Z.log(d.data),H.testimonials=d.data.map(c=>new J(c))}async updateTestimonial(d){let c=d.id;const r=await Y.put(`api/testimonials/${c}`,d);Z.log(r.data);let u=new J(r.data),_=H.testimonials.findIndex(l=>l.id==u.id);H.testimonials[_]=u}async deleteTestimonial(d){await Y.delete(`api/testimonials/${d}`),H.testimonials=H.testimonials.filter(c=>c.id!=d)}}const Dt=new Bt;const Lt={components:{Swiper:yt,SwiperSlide:bt},setup(){X(()=>{t()});async function t(){try{await Dt.getTestimonials()}catch(d){Pop.error(d,"[getTestimonials]")}}return{testimonials:ct(()=>H.testimonials),modules:[Ot,Pt,kt,$t,It]}}},et=t=>(w("data-v-f49cd398"),t=t(),tt(),t),Ft={class:"testimonial-card card bg-transparent border-0 position-relative"},Ht={class:""},jt=et(()=>s("div",{class:"justify-content-center d-flex flex-column align-items-center mt-5"},[s("img",{src:"https://images.unsplash.com/photo-1542596768-5d1d21f1cf98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",alt:"",class:"elevation-6 img-fluid forcedImg"})],-1)),zt={class:"d-flex justify-content-center mt-2"},Rt={class:"mdi mdi-star stars text-warning text-shadow"},qt={class:"text-center px-5 pb-3 d-flex flex-column align-items-center justify-content-center"},Gt={class:"mb-0 fs-4 fw-bold mt-3"},Nt={class:"text-center fs-4"},Vt=et(()=>s("i",{class:"mdi mdi-format-quote-open text-dark fs-3"},null,-1)),Wt=et(()=>s("i",{class:"mdi mdi-format-quote-close text-dark fs-4"},null,-1));function Yt(t,d,c,r,u,_){const l=L("swiper-slide"),h=L("swiper"),g=z("motion-pop-visible-once");return O((v(),st(h,{autoplay:{delay:2500,disableOnInteraction:!1},grabCursor:!0,pagination:!0,modules:r.modules,class:"mySwiper fluid bg-transparent"},{default:nt(()=>[(v(!0),y(lt,null,ot(r.testimonials,n=>(v(),st(l,{class:"fluid"},{default:nt(()=>[s("div",Ft,[s("div",Ht,[jt,s("div",zt,[(v(!0),y(lt,null,ot(n.rating,p=>(v(),y("i",Rt))),256))]),s("div",qt,[s("h1",Gt,it(n.name),1),s("p",Nt,[Vt,D(" "+it(n.text)+" ",1),Wt])])])])]),_:2},1024))),256))]),_:1},8,["modules"])),[[g]])}const Xt=R(Lt,[["render",Yt],["__scopeId","data-v-f49cd398"]]),Zt={setup(){return{}}},Qt={class:"container bg-white mt-4"},Jt={class:"row justify-content-center"},Ut={class:"col-md-12 text-center"},Kt={delay:300,class:"display-1 font-1 underline text-center text-dark mt-md-5"},wt=D(" Welcome Beautiful Soul "),te=[wt],ee=s("br",null,null,-1),ae={delay:300,class:"display-6 font-2 underline text-lightPink darken-20 mb-4"},se=D(" Our Core Belief "),ne=[se],oe={class:"col-md-8 text-center"},le={delay:300,class:"fs-4 px-md-5"},ie=D(" Is based on the idea that people want to be at peace with who they truly are, and that at every moment is an opportunity where they can be authentic with themselves in everyday life. "),ce=[ie],de={delay:300,class:"fs-4 px-md-5"},re=K("<b> SamadhiYogaIdaho </b> is a holistic approach in using pranayama, asana, journaling, and meditation practices to increase our knowledge of <em>self</em>, <em>life</em>, <em>mobility</em> and to help every person recognize their <em>worthiness</em> , <em>beauty</em>, and <em>uniqueness</em>. ",14),fe=[re],ue={class:"fs-4",delay:300},me=D(" Escape with us and learn how to see yourself without judgment "),pe=[me],_e={delay:300,href:"#newsletter",class:"btn bg-warning selectable fs-3 px-4"},he=D(" Begin Your Journey"),ge=[he],ve=s("hr",{class:"my-5"},null,-1),ye={class:"row g-3"},be={class:"col-md-4 mb-3 mb-md-0"},$e={class:"card border-0 elevation-7 bg-pink p-2",delay:600},xe=s("div",{class:"card-title font-2 fs-3 text-center"},"Vinyasa",-1),Ce=s("div",{class:"card-body text-center font-2 fs-5"}," Vinyasa (Flow) is a flowing of postures executed in succession, often timed with the breath to attain balance in the mind and body. Classes build heat, endurance, flexibility, strength and conscious breathing. ",-1),Ee=[xe,Ce],Se={class:"col-md-4 mb-3 mb-md-0"},Me={class:"card border-0 elevation-7 bg-pink p-2",delay:800},Te=s("div",{class:"card-title font-2 fs-3 text-center"}," Pranayama & Meditation ",-1),Ae=s("div",{class:"card-body text-center font-2 fs-5"}," Pranayama (Breath control) an ancient tradition, is the conscious awareness of breath using specific rhythms & techniques to bring us to the present moment increasing our self-awareness. ",-1),Pe=[Te,Ae],Ie={class:"col-md-4"},Oe={class:"card border-0 elevation-7 bg-pink p-2",delay:600},ke=s("div",{class:"card-title font-2 fs-3 text-center"},"Journaling",-1),Be=s("div",{class:"card-body text-center font-2 fs-5"}," Keeping a yoga journal leads to more mindful yoga practice. You notice the sensations of each of your movements, drawing your mind into the present moment, so you can really appreciate the process of your yoga practice. ",-1),De=[ke,Be];function Le(t,d,c,r,u,_){const l=z("motion-slide-visible-once-bottom"),h=z("motion-slide-visible-once-left"),g=z("motion-slide-visible-once-right");return v(),y("div",Qt,[s("div",Jt,[s("div",Ut,[O((v(),y("h1",Kt,te)),[[l]]),ee,O((v(),y("h2",ae,ne)),[[l]])]),s("div",oe,[O((v(),y("p",le,ce)),[[l]]),O((v(),y("p",de,fe)),[[l]]),O((v(),y("p",ue,pe)),[[l]]),s("p",null,[O((v(),y("a",_e,ge)),[[l]])])])]),ve,s("div",ye,[s("div",be,[O((v(),y("div",$e,Ee)),[[h]])]),s("div",Se,[O((v(),y("div",Me,Pe)),[[l]])]),s("div",Ie,[O((v(),y("div",Oe,De)),[[g]])])])])}const Fe=R(Zt,[["render",Le]]);const He={setup(){return{}}},je=t=>(w("data-v-1da1733c"),t=t(),tt(),t),ze={class:"container-fluid",style:{"margin-bottom":"300px"}},Re={class:"container p-5 mt-5"},qe={class:"row"},Ge={class:"col-md-12"},Ne={class:"display-1 font-1 underline text-start"},Ve=D(" My Offerings "),We=[Ve],Ye=je(()=>s("br",null,null,-1)),Xe=K('<div class="container" data-v-1da1733c><div class="row" data-v-1da1733c><div class="col-md-3" data-v-1da1733c><div class="card border-0 service-card hover-image" data-v-1da1733c><img src="https://scontent-fml2-1.xx.fbcdn.net/v/t39.30808-6/287422540_121522807237476_598088348287290457_n.jpg?_nc_cat=103&amp;ccb=1-7&amp;_nc_sid=a26aad&amp;_nc_ohc=WQDZLsPbT7cAX8Li9RC&amp;tn=elLHl9auDysCO0fM&amp;_nc_ht=scontent-fml2-1.xx&amp;oh=00_AfA4OiNAOA9uyJm0q19BSSf3QrU0I5h27ZErm1REPEm86w&amp;oe=639FDFFA" alt="" class="img-fluid rounded elevation-6" data-v-1da1733c><div class="card-img-overlay d-flex justify-content-center align-items-center" data-v-1da1733c><p class="mb-0 display-4 font-1 text-light text-shadow" data-v-1da1733c> Pop-Up <br data-v-1da1733c> Events </p></div></div></div><div class="col-md-3" data-v-1da1733c><div class="card border-0 service-card hover-image" data-v-1da1733c><img src="https://scontent-fml2-1.xx.fbcdn.net/v/t39.30808-6/287422540_121522807237476_598088348287290457_n.jpg?_nc_cat=103&amp;ccb=1-7&amp;_nc_sid=a26aad&amp;_nc_ohc=WQDZLsPbT7cAX8Li9RC&amp;tn=elLHl9auDysCO0fM&amp;_nc_ht=scontent-fml2-1.xx&amp;oh=00_AfA4OiNAOA9uyJm0q19BSSf3QrU0I5h27ZErm1REPEm86w&amp;oe=639FDFFA" alt="" class="img-fluid rounded elevation-6" data-v-1da1733c><div class="card-img-overlay d-flex justify-content-center align-items-center" data-v-1da1733c><p class="mb-0 display-4 font-1 text-light text-shadow" data-v-1da1733c> Workshops </p></div></div></div><div class="col-md-3" data-v-1da1733c><div class="card border-0 service-card hover-image" data-v-1da1733c><img src="https://scontent-fml2-1.xx.fbcdn.net/v/t39.30808-6/287422540_121522807237476_598088348287290457_n.jpg?_nc_cat=103&amp;ccb=1-7&amp;_nc_sid=a26aad&amp;_nc_ohc=WQDZLsPbT7cAX8Li9RC&amp;tn=elLHl9auDysCO0fM&amp;_nc_ht=scontent-fml2-1.xx&amp;oh=00_AfA4OiNAOA9uyJm0q19BSSf3QrU0I5h27ZErm1REPEm86w&amp;oe=639FDFFA" alt="" class="img-fluid rounded elevation-6" data-v-1da1733c><div class="card-img-overlay d-flex justify-content-center align-items-center" data-v-1da1733c><p class="mb-0 display-4 font-1 text-light text-shadow" data-v-1da1733c> Private <br data-v-1da1733c> Lessons </p></div></div></div><div class="col-md-3" data-v-1da1733c><div class="card border-0 service-card hover-image" data-v-1da1733c><img src="https://scontent-fml2-1.xx.fbcdn.net/v/t39.30808-6/287422540_121522807237476_598088348287290457_n.jpg?_nc_cat=103&amp;ccb=1-7&amp;_nc_sid=a26aad&amp;_nc_ohc=WQDZLsPbT7cAX8Li9RC&amp;tn=elLHl9auDysCO0fM&amp;_nc_ht=scontent-fml2-1.xx&amp;oh=00_AfA4OiNAOA9uyJm0q19BSSf3QrU0I5h27ZErm1REPEm86w&amp;oe=639FDFFA" alt="" class="img-fluid rounded elevation-6" data-v-1da1733c><div class="card-img-overlay d-flex justify-content-center align-items-center" data-v-1da1733c><p class="mb-0 display-4 font-1 text-light text-shadow" data-v-1da1733c> Inclusive <br data-v-1da1733c> Retreats </p></div></div></div></div></div>',1);function Ze(t,d,c,r,u,_){const l=z("motion-slide-visible-once-left");return v(),y("div",ze,[s("div",Re,[s("div",qe,[s("div",Ge,[O((v(),y("h1",Ne,We)),[[l]]),Ye])])]),Xe])}const Qe=R(He,[["render",Ze],["__scopeId","data-v-1da1733c"]]),Je={setup(){return X(()=>{(function(t,d,c){var r;t.getElementById(c)||(r=t.createElement(d),r.id=c,r.src="https://embedsocial.com/cdn/ht.js",t.getElementsByTagName("head")[0].appendChild(r))})(document,"script","EmbedSocialHashtagScript")}),{}}},Ue={class:"embedsocial-hashtag","data-ref":"2c9ce6b3a2e0d81146c6745ef0afd0f5b73d82c6"},Ke=s("a",{class:"feed-powered-by-es feed-powered-by-es-feed-new",href:"https://embedsocial.com/social-media-aggregator/",target:"_blank",title:"Widget by EmbedSocial"},null,-1),we=[Ke];function ta(t,d,c,r,u,_){return v(),y("div",Ue,we)}const ea=R(Je,[["render",ta]]);const aa={setup(){X(()=>{d()});let t=!0;async function d(){try{await xt.getSchedules()}catch(c){mt.error(c,"[getYogaSchedules]")}}return{rest:t,schedules:ct(()=>H.schedules)}},components:{SwiperComponent2:Xt,ParticleComponent:_t,GentleWave:At,CallToAction:Fe,TestimonialSection:q(()=>G(()=>import("./TestimonialSection.21094c94.js"),["assets/TestimonialSection.21094c94.js","assets/index.530ad9e5.js","assets/index.a47b8cb3.css","assets/ParticleComponent.989dba75.js","assets/swiper.min.85bd64df.js","assets/swiper.1f7d1e38.css","assets/ScheduleService.8764e40a.js","assets/compressor.esm.c5cb867f.js"])),YouTubeSection:q(()=>G(()=>import("./YouTubeSection.dc5c1dd4.js"),["assets/YouTubeSection.dc5c1dd4.js","assets/index.530ad9e5.js","assets/index.a47b8cb3.css"])),RetreatAndEvents:q(()=>G(()=>import("./RetreatAndEvents.e3e94e98.js"),["assets/RetreatAndEvents.e3e94e98.js","assets/RetreatAndEvents.c713b4c8.css","assets/index.530ad9e5.js","assets/index.a47b8cb3.css","assets/RetreatCard.478d53b5.js","assets/RetreatCard.ea2d2769.css"])),ScheduleSection:q(()=>G(()=>import("./ScheduleSection.bba635f8.js"),["assets/ScheduleSection.bba635f8.js","assets/index.530ad9e5.js","assets/index.a47b8cb3.css","assets/ScheduleCard.2af3f7b2.js","assets/ScheduleService.8764e40a.js"])),ServicesSection:Qe,AboutSection:q(()=>G(()=>import("./AboutSection.dff147c7.js"),["assets/AboutSection.dff147c7.js","assets/AboutSection.04789595.css","assets/KatiePortrait.ae9fb285.js","assets/KatiePortrait.32f30948.css","assets/index.530ad9e5.js","assets/index.a47b8cb3.css"])),InstagramFeed:ea,LoadingComponent:pt}},at=t=>(w("data-v-cfc03179"),t=t(),tt(),t),sa={id:"Hero-Section"},na={class:"position-relative px-0"},oa={class:"tsparticles"},la={class:"hero-image d-flex flex-column justify-content-center align-items-center"},ia={style:{"margin-top":"80px"},class:"text-shadow container"},ca={delay:200,class:"display-2 text-light font-1 text-center"},da=D(" SAMADHI YOGA IDAHO "),ra=[da],fa={delay:400,class:"fs-2 font-2 text-light text-uppercase text-center"},ua=at(()=>s("br",null,null,-1)),ma=D(" Become aware of your capacity to create "),pa=at(()=>s("br",null,null,-1)),_a=D(" to be authentic in every day life "),ha=at(()=>s("br",null,null,-1)),ga=D(" to transform & to love "),va=[ua,ma,pa,_a,ha,ga],ya={id:"Call-To-Action-Section",class:"my-5"},ba={id:"About-Katie-Section",class:"bg-pink about-section"},$a={id:"Retreat-Section"},xa={id:"Testimonials-Section ",class:"mb-5 bg-pink py-5"},Ca={class:"container"};function Ea(t,d,c,r,u,_){const l=L("ParticleComponent"),h=L("GentleWave"),g=L("CallToAction"),n=L("AboutSection"),p=L("ScheduleSection"),P=L("RetreatAndEvents"),E=L("TestimonialSection"),$=L("InstagramFeed"),k=z("motion-slide-top");return v(),y("div",null,[s("section",sa,[s("div",na,[s("div",oa,[F(l)]),s("div",la,[s("div",ia,[O((v(),y("h1",ca,ra)),[[k]]),O((v(),y("h5",fa,va)),[[k]])])])]),F(h)]),s("section",ya,[F(g)]),s("section",ba,[F(n)]),s("section",null,[F(p)]),s("section",$a,[F(P)]),s("section",xa,[F(E)]),s("section",null,[s("div",Ca,[F($)])])])}const Sa=R(aa,[["render",Ea],["__scopeId","data-v-cfc03179"]]),ka=Object.freeze(Object.defineProperty({__proto__:null,default:Sa},Symbol.toStringTag,{value:"Module"}));export{ka as H,Xt as T};
