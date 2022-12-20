import{_ as st}from"./ParticleComponent.f15b36e9.js";import{_ as H,q as at,s as ot,u as nt,o as d,c as r,d as L,w as f,h as it,n as Y,b as B,a as e,D as J,F as V,r as P,g as A,p as X,e as Z,f as p}from"./index.d58f363f.js";import{$ as W,c as lt,e as U,a as tt,b as Q,d as ct,S as dt,f as rt,N as mt}from"./swiper.min.9161ff8a.js";import{C as et}from"./CommentBox.8c3a5747.js";const _t={props:{},setup(t){const b=at({});return ot(()=>{}),nt(()=>{}),{editable:b}}},ft={class:"editorial mb-0",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 24 150 28 ",preserveAspectRatio:"none"},pt=L(`<defs data-v-584d1a5f><path id="gentle-wave" d="M-160 44c30 0 \r
    58-18 88-18s\r
    58 18 88 18 \r
    58-18 88-18 \r
    58 18 88 18\r
    v44h-352z" data-v-584d1a5f></path></defs><g class="parallax1" data-v-584d1a5f><use xlink:href="#gentle-wave" x="50" y="3" fill="#ffc1a5" data-v-584d1a5f></use></g><g class="parallax2" data-v-584d1a5f><use xlink:href="#gentle-wave" x="50" y="0" fill="#f68b59" data-v-584d1a5f></use></g><g class="parallax3" data-v-584d1a5f><use xlink:href="#gentle-wave" x="50" y="9" fill="#f9ad8a" data-v-584d1a5f></use></g><g class="parallax4" data-v-584d1a5f><use xlink:href="#gentle-wave" x="50" y="6" fill="#fff" data-v-584d1a5f></use></g>`,5),ht=[pt];function ut(t,b,g,x,u,$){return d(),r("svg",ft,ht)}const vt=H(_t,[["render",ut],["__scopeId","data-v-584d1a5f"]]);function F(t=""){return`.${t.trim().replace(/([\.:!\/])/g,"\\$1").replace(/ /g,".")}`}function gt({swiper:t,extendParams:b,on:g,emit:x}){const u="swiper-pagination";b({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:s=>s,formatFractionTotal:s=>s,bulletClass:`${u}-bullet`,bulletActiveClass:`${u}-bullet-active`,modifierClass:`${u}-`,currentClass:`${u}-current`,totalClass:`${u}-total`,hiddenClass:`${u}-hidden`,progressbarFillClass:`${u}-progressbar-fill`,progressbarOppositeClass:`${u}-progressbar-opposite`,clickableClass:`${u}-clickable`,lockClass:`${u}-lock`,horizontalClass:`${u}-horizontal`,verticalClass:`${u}-vertical`,paginationDisabledClass:`${u}-disabled`}}),t.pagination={el:null,$el:null,bullets:[]};let $,o=0;function _(){return!t.params.pagination.el||!t.pagination.el||!t.pagination.$el||t.pagination.$el.length===0}function v(s,a){const{bulletActiveClass:c}=t.params.pagination;s[a]().addClass(`${c}-${a}`)[a]().addClass(`${c}-${a}-${a}`)}function i(){const s=t.rtl,a=t.params.pagination;if(_())return;const c=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,l=t.pagination.$el;let m;const y=t.params.loop?Math.ceil((c-t.loopedSlides*2)/t.params.slidesPerGroup):t.snapGrid.length;if(t.params.loop?(m=Math.ceil((t.activeIndex-t.loopedSlides)/t.params.slidesPerGroup),m>c-1-t.loopedSlides*2&&(m-=c-t.loopedSlides*2),m>y-1&&(m-=y),m<0&&t.params.paginationType!=="bullets"&&(m=y+m)):typeof t.snapIndex<"u"?m=t.snapIndex:m=t.activeIndex||0,a.type==="bullets"&&t.pagination.bullets&&t.pagination.bullets.length>0){const n=t.pagination.bullets;let k,E,q;if(a.dynamicBullets&&($=n.eq(0)[t.isHorizontal()?"outerWidth":"outerHeight"](!0),l.css(t.isHorizontal()?"width":"height",`${$*(a.dynamicMainBullets+4)}px`),a.dynamicMainBullets>1&&t.previousIndex!==void 0&&(o+=m-(t.previousIndex-t.loopedSlides||0),o>a.dynamicMainBullets-1?o=a.dynamicMainBullets-1:o<0&&(o=0)),k=Math.max(m-o,0),E=k+(Math.min(n.length,a.dynamicMainBullets)-1),q=(E+k)/2),n.removeClass(["","-next","-next-next","-prev","-prev-prev","-main"].map(S=>`${a.bulletActiveClass}${S}`).join(" ")),l.length>1)n.each(S=>{const T=W(S),C=T.index();C===m&&T.addClass(a.bulletActiveClass),a.dynamicBullets&&(C>=k&&C<=E&&T.addClass(`${a.bulletActiveClass}-main`),C===k&&v(T,"prev"),C===E&&v(T,"next"))});else{const S=n.eq(m),T=S.index();if(S.addClass(a.bulletActiveClass),a.dynamicBullets){const C=n.eq(k),I=n.eq(E);for(let w=k;w<=E;w+=1)n.eq(w).addClass(`${a.bulletActiveClass}-main`);if(t.params.loop)if(T>=n.length){for(let w=a.dynamicMainBullets;w>=0;w-=1)n.eq(n.length-w).addClass(`${a.bulletActiveClass}-main`);n.eq(n.length-a.dynamicMainBullets-1).addClass(`${a.bulletActiveClass}-prev`)}else v(C,"prev"),v(I,"next");else v(C,"prev"),v(I,"next")}}if(a.dynamicBullets){const S=Math.min(n.length,a.dynamicMainBullets+4),T=($*S-$)/2-q*$,C=s?"right":"left";n.css(t.isHorizontal()?C:"top",`${T}px`)}}if(a.type==="fraction"&&(l.find(F(a.currentClass)).text(a.formatFractionCurrent(m+1)),l.find(F(a.totalClass)).text(a.formatFractionTotal(y))),a.type==="progressbar"){let n;a.progressbarOpposite?n=t.isHorizontal()?"vertical":"horizontal":n=t.isHorizontal()?"horizontal":"vertical";const k=(m+1)/y;let E=1,q=1;n==="horizontal"?E=k:q=k,l.find(F(a.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${E}) scaleY(${q})`).transition(t.params.speed)}a.type==="custom"&&a.renderCustom?(l.html(a.renderCustom(t,m+1,y)),x("paginationRender",l[0])):x("paginationUpdate",l[0]),t.params.watchOverflow&&t.enabled&&l[t.isLocked?"addClass":"removeClass"](a.lockClass)}function h(){const s=t.params.pagination;if(_())return;const a=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,c=t.pagination.$el;let l="";if(s.type==="bullets"){let m=t.params.loop?Math.ceil((a-t.loopedSlides*2)/t.params.slidesPerGroup):t.snapGrid.length;t.params.freeMode&&t.params.freeMode.enabled&&!t.params.loop&&m>a&&(m=a);for(let y=0;y<m;y+=1)s.renderBullet?l+=s.renderBullet.call(t,y,s.bulletClass):l+=`<${s.bulletElement} class="${s.bulletClass}"></${s.bulletElement}>`;c.html(l),t.pagination.bullets=c.find(F(s.bulletClass))}s.type==="fraction"&&(s.renderFraction?l=s.renderFraction.call(t,s.currentClass,s.totalClass):l=`<span class="${s.currentClass}"></span> / <span class="${s.totalClass}"></span>`,c.html(l)),s.type==="progressbar"&&(s.renderProgressbar?l=s.renderProgressbar.call(t,s.progressbarFillClass):l=`<span class="${s.progressbarFillClass}"></span>`,c.html(l)),s.type!=="custom"&&x("paginationRender",t.pagination.$el[0])}function D(){t.params.pagination=lt(t,t.originalParams.pagination,t.params.pagination,{el:"swiper-pagination"});const s=t.params.pagination;if(!s.el)return;let a=W(s.el);a.length!==0&&(t.params.uniqueNavElements&&typeof s.el=="string"&&a.length>1&&(a=t.$el.find(s.el),a.length>1&&(a=a.filter(c=>W(c).parents(".swiper")[0]===t.el))),s.type==="bullets"&&s.clickable&&a.addClass(s.clickableClass),a.addClass(s.modifierClass+s.type),a.addClass(t.isHorizontal()?s.horizontalClass:s.verticalClass),s.type==="bullets"&&s.dynamicBullets&&(a.addClass(`${s.modifierClass}${s.type}-dynamic`),o=0,s.dynamicMainBullets<1&&(s.dynamicMainBullets=1)),s.type==="progressbar"&&s.progressbarOpposite&&a.addClass(s.progressbarOppositeClass),s.clickable&&a.on("click",F(s.bulletClass),function(l){l.preventDefault();let m=W(this).index()*t.params.slidesPerGroup;t.params.loop&&(m+=t.loopedSlides),t.slideTo(m)}),Object.assign(t.pagination,{$el:a,el:a[0]}),t.enabled||a.addClass(s.lockClass))}function O(){const s=t.params.pagination;if(_())return;const a=t.pagination.$el;a.removeClass(s.hiddenClass),a.removeClass(s.modifierClass+s.type),a.removeClass(t.isHorizontal()?s.horizontalClass:s.verticalClass),t.pagination.bullets&&t.pagination.bullets.removeClass&&t.pagination.bullets.removeClass(s.bulletActiveClass),s.clickable&&a.off("click",F(s.bulletClass))}g("init",()=>{t.params.pagination.enabled===!1?j():(D(),h(),i())}),g("activeIndexChange",()=>{(t.params.loop||typeof t.snapIndex>"u")&&i()}),g("snapIndexChange",()=>{t.params.loop||i()}),g("slidesLengthChange",()=>{t.params.loop&&(h(),i())}),g("snapGridLengthChange",()=>{t.params.loop||(h(),i())}),g("destroy",()=>{O()}),g("enable disable",()=>{const{$el:s}=t.pagination;s&&s[t.enabled?"removeClass":"addClass"](t.params.pagination.lockClass)}),g("lock unlock",()=>{i()}),g("click",(s,a)=>{const c=a.target,{$el:l}=t.pagination;if(t.params.pagination.el&&t.params.pagination.hideOnClick&&l&&l.length>0&&!W(c).hasClass(t.params.pagination.bulletClass)){if(t.navigation&&(t.navigation.nextEl&&c===t.navigation.nextEl||t.navigation.prevEl&&c===t.navigation.prevEl))return;const m=l.hasClass(t.params.pagination.hiddenClass);x(m===!0?"paginationShow":"paginationHide"),l.toggleClass(t.params.pagination.hiddenClass)}});const M=()=>{t.$el.removeClass(t.params.pagination.paginationDisabledClass),t.pagination.$el&&t.pagination.$el.removeClass(t.params.pagination.paginationDisabledClass),D(),h(),i()},j=()=>{t.$el.addClass(t.params.pagination.paginationDisabledClass),t.pagination.$el&&t.pagination.$el.addClass(t.params.pagination.paginationDisabledClass),O()};Object.assign(t.pagination,{enable:M,disable:j,render:h,update:i,init:D,destroy:O})}function bt({swiper:t,extendParams:b,on:g}){b({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0,transformEl:null}}),U({effect:"coverflow",swiper:t,on:g,setTranslate:()=>{const{width:$,height:o,slides:_,slidesSizesGrid:v}=t,i=t.params.coverflowEffect,h=t.isHorizontal(),D=t.translate,O=h?-D+$/2:-D+o/2,M=h?i.rotate:-i.rotate,j=i.depth;for(let s=0,a=_.length;s<a;s+=1){const c=_.eq(s),l=v[s],m=c[0].swiperSlideOffset,y=(O-m-l/2)/l,n=typeof i.modifier=="function"?i.modifier(y):y*i.modifier;let k=h?M*n:0,E=h?0:M*n,q=-j*Math.abs(n),S=i.stretch;typeof S=="string"&&S.indexOf("%")!==-1&&(S=parseFloat(i.stretch)/100*l);let T=h?0:S*n,C=h?S*n:0,I=1-(1-i.scale)*Math.abs(n);Math.abs(C)<.001&&(C=0),Math.abs(T)<.001&&(T=0),Math.abs(q)<.001&&(q=0),Math.abs(k)<.001&&(k=0),Math.abs(E)<.001&&(E=0),Math.abs(I)<.001&&(I=0);const w=`translate3d(${C}px,${T}px,${q}px)  rotateX(${E}deg) rotateY(${k}deg) scale(${I})`;if(tt(i,c).transform(w),c[0].style.zIndex=-Math.abs(Math.round(n))+1,i.slideShadows){let G=h?c.find(".swiper-slide-shadow-left"):c.find(".swiper-slide-shadow-top"),N=h?c.find(".swiper-slide-shadow-right"):c.find(".swiper-slide-shadow-bottom");G.length===0&&(G=Q(i,c,h?"left":"top")),N.length===0&&(N=Q(i,c,h?"right":"bottom")),G.length&&(G[0].style.opacity=n>0?n:0),N.length&&(N[0].style.opacity=-n>0?-n:0)}}},setTransition:$=>{const{transformEl:o}=t.params.coverflowEffect;(o?t.slides.find(o):t.slides).transition($).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition($)},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0})})}function xt({swiper:t,extendParams:b,on:g}){b({creativeEffect:{transformEl:null,limitProgress:1,shadowPerProgress:!1,progressMultiplier:1,perspective:!0,prev:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1},next:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1}}});const x=o=>typeof o=="string"?o:`${o}px`;U({effect:"creative",swiper:t,on:g,setTranslate:()=>{const{slides:o,$wrapperEl:_,slidesSizesGrid:v}=t,i=t.params.creativeEffect,{progressMultiplier:h}=i,D=t.params.centeredSlides;if(D){const O=v[0]/2-t.params.slidesOffsetBefore||0;_.transform(`translateX(calc(50% - ${O}px))`)}for(let O=0;O<o.length;O+=1){const M=o.eq(O),j=M[0].progress,s=Math.min(Math.max(M[0].progress,-i.limitProgress),i.limitProgress);let a=s;D||(a=Math.min(Math.max(M[0].originalProgress,-i.limitProgress),i.limitProgress));const c=M[0].swiperSlideOffset,l=[t.params.cssMode?-c-t.translate:-c,0,0],m=[0,0,0];let y=!1;t.isHorizontal()||(l[1]=l[0],l[0]=0);let n={translate:[0,0,0],rotate:[0,0,0],scale:1,opacity:1};s<0?(n=i.next,y=!0):s>0&&(n=i.prev,y=!0),l.forEach((I,w)=>{l[w]=`calc(${I}px + (${x(n.translate[w])} * ${Math.abs(s*h)}))`}),m.forEach((I,w)=>{m[w]=n.rotate[w]*Math.abs(s*h)}),M[0].style.zIndex=-Math.abs(Math.round(j))+o.length;const k=l.join(", "),E=`rotateX(${m[0]}deg) rotateY(${m[1]}deg) rotateZ(${m[2]}deg)`,q=a<0?`scale(${1+(1-n.scale)*a*h})`:`scale(${1-(1-n.scale)*a*h})`,S=a<0?1+(1-n.opacity)*a*h:1-(1-n.opacity)*a*h,T=`translate3d(${k}) ${E} ${q}`;if(y&&n.shadow||!y){let I=M.children(".swiper-slide-shadow");if(I.length===0&&n.shadow&&(I=Q(i,M)),I.length){const w=i.shadowPerProgress?s*(1/i.limitProgress):s;I[0].style.opacity=Math.min(Math.max(Math.abs(w),0),1)}}const C=tt(i,M);C.transform(T).css({opacity:S}),n.origin&&C.css("transform-origin",n.origin)}},setTransition:o=>{const{transformEl:_}=t.params.creativeEffect;(_?t.slides.find(_):t.slides).transition(o).find(".swiper-slide-shadow").transition(o),ct({swiper:t,duration:o,transformEl:_,allSlides:!0})},perspective:()=>t.params.creativeEffect.perspective,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!t.params.cssMode})})}const $t={components:{Swiper:dt,SwiperSlide:rt},setup(){return{modules:[bt,gt,xt,mt]}}},z=t=>(X("data-v-07dfe746"),t=t(),Z(),t),yt={class:"testimonial-card card border-0 position-relative elevation-6"},Ct={class:""},wt=z(()=>e("div",{class:"justify-content-center d-flex flex-column align-items-center mt-5"},[e("img",{src:"https://images.unsplash.com/photo-1542596768-5d1d21f1cf98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",alt:"",class:"elevation-6 img-fluid forcedImg"}),e("h1",{class:"mb-0 fs-4 fw-bold mt-3"},"Jane Doe")],-1)),kt={class:"d-flex justify-content-center mt-2"},St={class:"mdi mdi-star fs-1 text-warning text-shadow"},At=z(()=>e("div",{class:"text-center p-5 d-flex flex-column align-items-center justify-content-center"},[e("p",{class:"text-center fs-4"},[e("i",{class:"mdi mdi-format-quote-open text-dark fs-3"}),p(" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur autem debitis dolorum maiores. Veniam nisi facere obcaecati commodi similique nemo hic culpa, rem repellendus. Minus, quas? Dolorem, nihil cupiditate praesentium quas labore, "),e("i",{class:"mdi mdi-format-quote-close text-dark fs-4"})])],-1)),Mt={class:"testimonial-card card border-0 position-relative elevation-6"},Et={class:""},Tt=z(()=>e("div",{class:"justify-content-center d-flex flex-column align-items-center mt-5"},[e("img",{src:"https://images.unsplash.com/photo-1620862657760-72a639a2daef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",alt:"",class:"elevation-6 img-fluid forcedImg"}),e("h1",{class:"mb-0 fs-4 fw-bold mt-3"},"Jane Doe")],-1)),Bt={class:"d-flex justify-content-center mt-2"},It={class:"mdi mdi-star fs-1 text-warning text-shadow"},Pt=z(()=>e("div",{class:"text-center p-5 d-flex flex-column align-items-center justify-content-center"},[e("p",{class:"text-center fs-4"},[e("i",{class:"mdi mdi-format-quote-open text-dark fs-3"}),p(" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur autem debitis dolorum maiores. Veniam nisi facere obcaecati commodi similique nemo hic culpa, rem repellendus. Minus, quas? Dolorem, nihil cupiditate praesentium quas labore, "),e("i",{class:"mdi mdi-format-quote-close text-dark fs-4"})])],-1)),Ot={class:"testimonial-card card border-0 position-relative elevation-6"},Dt={class:""},qt=z(()=>e("div",{class:"justify-content-center d-flex flex-column align-items-center mt-5"},[e("img",{src:"https://images.unsplash.com/photo-1544507888-56d73eb6046e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",alt:"",class:"elevation-6 img-fluid forcedImg"}),e("h1",{class:"mb-0 fs-4 fw-bold mt-3"},"Jane Doe")],-1)),Ht={class:"d-flex justify-content-center mt-2"},jt={class:"mdi mdi-star fs-1 text-warning text-shadow"},Lt=z(()=>e("div",{class:"text-center p-5 d-flex flex-column align-items-center justify-content-center"},[e("p",{class:"text-center fs-4"},[e("i",{class:"mdi mdi-format-quote-open text-dark fs-3"}),p(" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur autem debitis dolorum maiores. Veniam nisi facere obcaecati commodi similique nemo hic culpa, rem repellendus. Minus, quas? Dolorem, nihil cupiditate praesentium quas labore, "),e("i",{class:"mdi mdi-format-quote-close text-dark fs-4"})])],-1));function Yt(t,b,g,x,u,$){const o=P("swiper-slide"),_=P("swiper"),v=A("motion-pop-visible");return f((d(),it(_,{grabCursor:!0,navigation:!0,pagination:{dynamicBullets:!0},effect:"creative",loop:!0,creativeEffect:{prev:{shadow:!0,origin:"left center",translate:["-5%",0,-200],rotate:[0,100,0]},next:{origin:"right center",translate:["5%",0,-200],rotate:[0,-100,0]}},modules:x.modules,class:"mySwiper6 rounded"},{default:Y(()=>[B(o,null,{default:Y(()=>[e("div",yt,[e("div",Ct,[wt,e("div",kt,[(d(),r(V,null,J(5,i=>e("i",St)),64))]),At])])]),_:1}),B(o,null,{default:Y(()=>[e("div",Mt,[e("div",Et,[Tt,e("div",Bt,[(d(),r(V,null,J(5,i=>e("i",It)),64))]),Pt])])]),_:1}),B(o,null,{default:Y(()=>[e("div",Ot,[e("div",Dt,[qt,e("div",Ht,[(d(),r(V,null,J(5,i=>e("i",jt)),64))]),Lt])])]),_:1})]),_:1},8,["modules"])),[[v]])}const K=H($t,[["render",Yt],["__scopeId","data-v-07dfe746"]]),Ft={setup(){return{}}},zt={class:"component"},Rt={class:"container p-5 bg-white"},Wt={class:"row justify-content-center"},Gt={class:"col-md-12 text-center"},Nt={class:"display-1 font-1 underline text-center text-dark mt-5 mt-md-0"},Vt=p(" Welcome Beautiful Soul "),Jt=[Vt],Qt=e("br",null,null,-1),Xt={class:"display-6 font-2 underline text-lightPink darken-20 mb-4"},Zt=p(" Our Core Belief "),Kt=[Zt],Ut={class:"col-md-6 text-center"},te={class:"fs-4 px-md-5"},ee=p(" Is based on the idea that people want to be at peace with who they truly are, and that at every moment is an opportunity where they can be authentic with themselves in everyday life. "),se=[ee],ae={class:"fs-4 px-md-5"},oe=L("<b> SamadhiYogaIdaho </b> is a holistic approach in using pranayama, asana, journaling, and meditation practices to increase our knowledge of <em>self</em>, <em>life</em>, <em>mobility</em> and to help every person recognize their <em>worthiness</em> , <em>beauty</em>, and <em>uniqueness</em>. ",14),ne=[oe],ie=e("p",{class:"fs-4"}," Escape with us and learn how to see yourself without judgment",-1),le=e("p",null,[e("a",{href:"#newsletter",class:"btn bg-warning selectable fs-3 px-4"}," Begin Your Journey")],-1),ce={class:"container mb-3"},de={class:"row g-2"},re={class:"col-md-4"},me=L('<div class="card elevation-6 border-0"><div class="image-box"><img src="https://scontent-fml2-1.xx.fbcdn.net/v/t39.30808-6/298219507_139281102128313_1469716182377953759_n.jpg?_nc_cat=106&amp;ccb=1-7&amp;_nc_sid=a26aad&amp;_nc_ohc=To8CopedlNEAX-AiRAt&amp;_nc_ht=scontent-fml2-1.xx&amp;oh=00_AfBkKQpI-3LdHaQxQf9C3A89NYIMt4ZN2Uf9O4B4qT4d4g&amp;oe=63A04441" alt="" class="img-fluid rounded"><div class="text-box"><p class="title">Learn to delve into the slowness of breath work with Yin Yoga</p><p class="content"></p></div></div></div>',1),_e=[me],fe={class:"col-md-4"},pe=L('<div class="card elevation-6 border-0"><div class="image-box"><img src="https://scontent-fml2-1.xx.fbcdn.net/v/t39.30808-6/291518073_128132356576521_7530546115358918920_n.jpg?_nc_cat=107&amp;ccb=1-7&amp;_nc_sid=a26aad&amp;_nc_ohc=bHJ0OcW_2gAAX-7oHpz&amp;_nc_ht=scontent-fml2-1.xx&amp;oh=00_AfAdzk-xLbVt1NsLbKqNuJJt5uo2-tJWeJrYyzXmfxQR9Q&amp;oe=63A11BE8" alt="" class="img-fluid rounded"><div class="text-box"><p class="title">Awaken True WellBeing</p><p class="content"></p></div></div></div>',1),he=[pe],ue={class:"col-md-4"},ve=L('<div class="card elevation-6 border-0"><div class="image-box"><img src="https://scontent-fml2-1.xx.fbcdn.net/v/t39.30808-6/299321126_140398988683191_5641334468471087586_n.jpg?_nc_cat=101&amp;ccb=1-7&amp;_nc_sid=a26aad&amp;_nc_ohc=Uvb2uQ-INDUAX8lC2qW&amp;tn=elLHl9auDysCO0fM&amp;_nc_ht=scontent-fml2-1.xx&amp;oh=00_AfBODjVEBO-DnbDH_WWDhSYDxRgHaMhu1L1yN_3Hp6REQw&amp;oe=639FF51A" alt="" class="img-fluid rounded"><div class="text-box"><p class="title">Find Your Flow </p><p class="content"></p></div></div></div>',1),ge=[ve];function be(t,b,g,x,u,$){const o=A("motion-slide-visible-left"),_=A("motion-fade-visible"),v=A("motion-pop-visible");return d(),r("div",zt,[e("div",Rt,[e("div",Wt,[e("div",Gt,[f((d(),r("h1",Nt,Jt)),[[o]]),Qt,f((d(),r("h2",Xt,Kt)),[[o]])]),e("div",Ut,[f((d(),r("p",te,se)),[[_]]),f((d(),r("p",ae,ne)),[[_]]),ie,le])])]),e("div",ce,[e("div",de,[f((d(),r("div",re,_e)),[[v]]),f((d(),r("div",fe,he)),[[v]]),f((d(),r("div",ue,ge)),[[v]])])])])}const xe=H(Ft,[["render",be]]),$e={setup(){return{}},components:{TestimonialSwiper:K}},ye={class:"container p-5"},Ce={class:"row"},we={class:"col-md-8 mt-2"},ke={class:"display-1 font-1 text-start underline"},Se=p(" Testimonials "),Ae=[Se],Me={class:"display-6 courgette text-lightPink darken-20 font-2 underline"},Ee=p(" Kind words from clients "),Te=[Ee],Be={class:"container mt-5 mt-md-0"},Ie={class:"row justify-content-center"},Pe={class:"col-md-12"};function Oe(t,b,g,x,u,$){const o=P("TestimonialSwiper"),_=A("motion-slide-visible-left");return d(),r(V,null,[e("div",ye,[e("div",Ce,[e("div",we,[f((d(),r("h1",ke,Ae)),[[_]]),f((d(),r("h2",Me,Te)),[[_]])])])]),e("div",Be,[e("div",Ie,[e("div",Pe,[B(o)])])])],64)}const De=H($e,[["render",Oe]]),qe={setup(){return{}},components:{CommentBox:et}},He={class:"container my-5"},je={class:"row"},Le=e("p",{class:"fs-4 text-start"},[p(" Bend so you don\u2019t break. Breathe so you don\u2019t die. Meditate so you learn to feel. Learn to just be. "),e("br"),p(" To release the anticipation and anxiety and expectations. To be compassionate with yourself. "),e("br"),p(" Know that you are enough, just as you are. Don\u2019t break. Just be. Just breathe. Just love. Just live. "),e("br"),e("b",null,"It\u2019s that simple.")],-1),Ye={class:"col-md-12 d-flex justify-content-center mb-5"},Fe={delay:100,width:"950",height:"544",src:"https://www.youtube.com/embed/BYTDS1hw9kg",title:"Gentle morning stretch and flow",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"",class:"rounded elevation-6"},ze={class:"col-md-6"},Re={width:"550",height:"344",src:"https://www.youtube.com/embed/a8pro3zdh44",title:"Gentle Thanksgiving Flow",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"",class:"rounded elevation-6"},We={class:"col-md-6"},Ge={width:"550",height:"344",src:"https://www.youtube.com/embed/wSV2Vtf9318",title:"Heart opening Beginners Flow",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"",class:"rounded elevation-6"};function Ne(t,b,g,x,u,$){const o=P("CommentBox"),_=A("motion-slide-visible-bottom"),v=A("motion-slide-visible-left"),i=A("motion-slide-visible-right");return d(),r("div",He,[e("div",je,[B(o,null,{default:Y(()=>[Le]),_:1}),e("div",Ye,[f(e("iframe",Fe,null,512),[[_]])]),e("div",ze,[f(e("iframe",Re,null,512),[[v]])]),e("div",We,[f(e("iframe",Ge,null,512),[[i]])])])])}const Ve=H(qe,[["render",Ne]]),Je="/assets/retreatCoverImage.179532fb.png",Qe={setup(){return{scrollToTop(){window.scrollTo(0,0)}}}},Xe={class:"container p-5"},Ze={class:"row justify-content-center"},Ke={class:"col-md-12"},Ue={class:"display-1 font-1 text-start underline"},ts=p(" MY Offerings To You "),es=[ts],ss={class:"display-6 courgette text-lightPink darken-20 font-2 underline"},as=p(" COUPLES REJUVENATION YOGA RETREAT "),os=[as],ns=e("br",null,null,-1),is={class:"fs-4 font-2 text-lightPink darken-30 underline"},ls=p(" NOW BOOKING FOR 2023 "),cs=[ls],ds={class:"col-md-4"},rs={class:"mb-5 mb-md-0"},ms=e("img",{src:Je,alt:"",class:"img-fluid rounded-1 elevation-6"},null,-1),_s={class:"card-body"},fs=e("div",{class:"text-pink darken-30 font-2 fs-5 my-3"},"Our Retreats",-1),ps={class:""},hs=e("p",{class:"font-2 fs-4 text-start",style:{"z-index":"99999"}}," Starting in 2022 I began recording a mix of Online class series, and recorded content that can be accessed on your own time. Our online offerings are to meant to help you experience the beauty and art of transformation that takes place within yoga from the comfort of your own home and integrate it into your daily life ",-1),us=e("button",{class:"btn btn-dark display-1 fs-1 font-2"}," More Information ",-1);function vs(t,b,g,x,u,$){const o=P("router-link"),_=A("motion-slide-visible-left"),v=A("motion-pop-visible");return d(),r("div",Xe,[e("div",Ze,[e("div",Ke,[f((d(),r("h1",Ue,es)),[[_]]),f((d(),r("h2",ss,os)),[[_]]),ns,f((d(),r("h3",is,cs)),[[_]])]),e("div",ds,[f((d(),r("div",rs,[ms,e("div",_s,[fs,e("div",ps,[hs,B(o,{to:{name:"Retreat",params:{}},onClick:b[0]||(b[0]=i=>x.scrollToTop())},{default:Y(()=>[us]),_:1})])])])),[[v]])])])])}const gs=H(Qe,[["render",vs]]),bs={setup(){return{}},components:{TestimonialSwiper:K}},xs={class:"container p-5",style:{"margin-bottom":"300px"}},$s={class:"row"},ys={class:"col-md-8 mt-2"},Cs={class:"display-1 font-1 text-start underline"},ws=p(" Schedule "),ks=[ws],Ss={class:"display-6 courgette text-lightPink darken-20 font-2 underline"},As=p(" Current Layed Out Schedule "),Ms=[As],Es=L('<div class="row my-4"><div class="col-12 d-flex"><div class="elevation-6 p-2 rounded bg-pink"><p class="font-2 fs-3">Monday 6AM Level 1-2 Vinyasa Style Yoga at Hollywood Market</p></div><div class="elevation-6 p-2 rounded mx-3 bg-pink"><p class="font-2 fs-3">Wednesday 6AM Level 1-2 Vinyasa Style Yoga at Hollywood Market</p></div><div class="elevation-6 p-2 rounded bg-pink"><p class="font-2 fs-3">Saturday 9:30AM authentic series class Level 1-2 at Authentic Yoga</p></div></div></div><div class="row"><div class="d-flex"><span><p> I&#39;m also excited to be posting new </p></span><span><i class="mdi mdi-youtube fs-1 hover-image rounded-5"></i></span><span><p> videos every two weeks</p></span></div></div>',2);function Ts(t,b,g,x,u,$){const o=A("motion-slide-visible-left");return d(),r("div",xs,[e("div",$s,[e("div",ys,[f((d(),r("h1",Cs,ks)),[[o]]),f((d(),r("h2",Ss,Ms)),[[o]])])]),Es])}const Bs=H(bs,[["render",Ts]]);const Is={setup(){return{}}},Ps=t=>(X("data-v-200118e5"),t=t(),Z(),t),Os={class:"container-fluid",style:{"margin-bottom":"300px"}},Ds={class:"container p-5 mt-5"},qs={class:"row"},Hs={class:"col-md-12"},js={class:"display-1 font-1 underline text-start"},Ls=p(" My Offerings "),Ys=[Ls],Fs=Ps(()=>e("br",null,null,-1)),zs=L('<div class="container" data-v-200118e5><div class="row" data-v-200118e5><div class="col-md-3" data-v-200118e5><div class="card border-0 service-card hover-image" data-v-200118e5><img src="https://scontent-fml2-1.xx.fbcdn.net/v/t39.30808-6/287422540_121522807237476_598088348287290457_n.jpg?_nc_cat=103&amp;ccb=1-7&amp;_nc_sid=a26aad&amp;_nc_ohc=WQDZLsPbT7cAX8Li9RC&amp;tn=elLHl9auDysCO0fM&amp;_nc_ht=scontent-fml2-1.xx&amp;oh=00_AfA4OiNAOA9uyJm0q19BSSf3QrU0I5h27ZErm1REPEm86w&amp;oe=639FDFFA" alt="" class="img-fluid rounded elevation-6" data-v-200118e5><div class="card-img-overlay d-flex justify-content-center align-items-center" data-v-200118e5><p class="mb-0 display-4 font-1 text-light text-shadow" data-v-200118e5> Pop-Up <br data-v-200118e5> Events </p></div></div></div><div class="col-md-3" data-v-200118e5><div class="card border-0 service-card hover-image" data-v-200118e5><img src="https://scontent-fml2-1.xx.fbcdn.net/v/t39.30808-6/287422540_121522807237476_598088348287290457_n.jpg?_nc_cat=103&amp;ccb=1-7&amp;_nc_sid=a26aad&amp;_nc_ohc=WQDZLsPbT7cAX8Li9RC&amp;tn=elLHl9auDysCO0fM&amp;_nc_ht=scontent-fml2-1.xx&amp;oh=00_AfA4OiNAOA9uyJm0q19BSSf3QrU0I5h27ZErm1REPEm86w&amp;oe=639FDFFA" alt="" class="img-fluid rounded elevation-6" data-v-200118e5><div class="card-img-overlay d-flex justify-content-center align-items-center" data-v-200118e5><p class="mb-0 display-4 font-1 text-light text-shadow" data-v-200118e5> Workshops </p></div></div></div><div class="col-md-3" data-v-200118e5><div class="card border-0 service-card hover-image" data-v-200118e5><img src="https://scontent-fml2-1.xx.fbcdn.net/v/t39.30808-6/287422540_121522807237476_598088348287290457_n.jpg?_nc_cat=103&amp;ccb=1-7&amp;_nc_sid=a26aad&amp;_nc_ohc=WQDZLsPbT7cAX8Li9RC&amp;tn=elLHl9auDysCO0fM&amp;_nc_ht=scontent-fml2-1.xx&amp;oh=00_AfA4OiNAOA9uyJm0q19BSSf3QrU0I5h27ZErm1REPEm86w&amp;oe=639FDFFA" alt="" class="img-fluid rounded elevation-6" data-v-200118e5><div class="card-img-overlay d-flex justify-content-center align-items-center" data-v-200118e5><p class="mb-0 display-4 font-1 text-light text-shadow" data-v-200118e5> Private <br data-v-200118e5> Lessons </p></div></div></div><div class="col-md-3" data-v-200118e5><div class="card border-0 service-card hover-image" data-v-200118e5><img src="https://scontent-fml2-1.xx.fbcdn.net/v/t39.30808-6/287422540_121522807237476_598088348287290457_n.jpg?_nc_cat=103&amp;ccb=1-7&amp;_nc_sid=a26aad&amp;_nc_ohc=WQDZLsPbT7cAX8Li9RC&amp;tn=elLHl9auDysCO0fM&amp;_nc_ht=scontent-fml2-1.xx&amp;oh=00_AfA4OiNAOA9uyJm0q19BSSf3QrU0I5h27ZErm1REPEm86w&amp;oe=639FDFFA" alt="" class="img-fluid rounded elevation-6" data-v-200118e5><div class="card-img-overlay d-flex justify-content-center align-items-center" data-v-200118e5><p class="mb-0 display-4 font-1 text-light text-shadow" data-v-200118e5> Inclusive <br data-v-200118e5> Retreats </p></div></div></div></div></div>',1);function Rs(t,b,g,x,u,$){const o=A("motion-slide-visible-left");return d(),r("div",Os,[e("div",Ds,[e("div",qs,[e("div",Hs,[f((d(),r("h1",js,Ys)),[[o]]),Fs])])]),zs])}const Ws=H(Is,[["render",Rs],["__scopeId","data-v-200118e5"]]);const Gs={setup(){return{scrollToTop(){window.scrollTo(0,0)}}},components:{SwiperComponent2:K,ParticleComponent:st,GentleWave:vt,CallToAction:xe,TestimonialSection:De,YouTubeSection:Ve,RetreatAndEvents:gs,CommentBox:et,ScheduleSection:Bs,ServicesSection:Ws}},R=t=>(X("data-v-92d9026c"),t=t(),Z(),t),Ns={id:"Hero-Section"},Vs={class:"position-relative px-0"},Js={class:"tsparticles"},Qs={class:"hero-image d-flex flex-column justify-content-center align-items-center"},Xs={style:{"margin-top":"80px"},class:"text-shadow container"},Zs={delay:600,class:"fs-2 font-2 text-light text-uppercase"},Ks=R(()=>e("br",null,null,-1)),Us=p(" Become aware of your capacity to create, "),ta=R(()=>e("br",null,null,-1)),ea=p(" to be authentic in every day life, "),sa=R(()=>e("br",null,null,-1)),aa=p(" to transform & to love "),oa=[Ks,Us,ta,ea,sa,aa],na=["enter"],ia=p(" WONDER WITH SAMADHI YOGA IDAHO "),la=[ia],ca={class:"join-newsletter-button flex-column d-flex"},da=R(()=>e("a",{href:"#newsletter",class:"btn bg-dark selectable text-light fs-3 px-4 mb-3"}," Join Our NewsLetter",-1)),ra=[da],ma={id:"Call-To-Action-Section"},_a={id:"YinYoga-Section",class:"bg-pink my-5"},fa={class:"container p-5 mt-5"},pa={class:"row"},ha={class:"col-md-12"},ua={class:"display-1 font-1 underline text-start"},va=p(" What Is Yin Yoga? "),ga=[va],ba=L('<div class="row mt-3" data-v-92d9026c><div class="col-md-4" data-v-92d9026c><div class="card bg-dark border-0 elevation-6 p-2" data-v-92d9026c><p class="fs-4 text-warning" data-v-92d9026c> Yin yoga is a quiet contemplative practice that involves working with deeper, passive, and longer held poses. It targets the deepest tissues of the body, our connective tissues,ligaments,joints,bones, the deep fascia networks of the body and the meridians. This is contract to a Yang Yoga practice such as Vinyasa Yoga which targets the muscles </p></div></div><div class="col-md-4" data-v-92d9026c><div class="card bg-dark border-0 elevation-6 p-2" data-v-92d9026c><p class="fs-4 text-warning" data-v-92d9026c> A Yin yoga class usually consists of a series of long-held, passive floor poses that mainly work the lower part of the body - the hips, pelvis, inner thighs, and the lower spine which are especially rich in connective tissues. The poses are held for up to five minutes sometimes longer. Although almost entirely passive some Yin asanas contain Yang elements, During the asanas the muscles are relaxed to avoid muscle spasm which could result from engaging muscles for long periods. </p></div></div><div class="col-md-4" data-v-92d9026c><div class="card bg-dark border-0 elevation-6 p-2" data-v-92d9026c><ul data-v-92d9026c><li class="text-warning" data-v-92d9026c><p class="fs-4 text-warning" data-v-92d9026c> Increases circulation &amp; improves flexibility </p></li><li class="text-warning" data-v-92d9026c><p class="fs-4 text-warning" data-v-92d9026c> Calms and balances the mind &amp; body </p></li><li class="text-warning" data-v-92d9026c><p class="fs-4 text-warning" data-v-92d9026c>Reduces stress &amp; anxiety</p></li><li class="text-warning" data-v-92d9026c><p class="fs-4 text-warning" data-v-92d9026c>Releases fascia</p></li><li class="text-warning" data-v-92d9026c><p class="fs-4 text-warning" data-v-92d9026c> Encourages deeper relaxation </p></li><li class="text-warning" data-v-92d9026c><p class="fs-4 text-warning" data-v-92d9026c>Improves Joint mobility</p></li><li class="text-warning" data-v-92d9026c><p class="fs-4 text-warning" data-v-92d9026c> Balance to the organs through meridian stimulation </p></li><li class="text-warning" data-v-92d9026c><p class="fs-4 text-warning" data-v-92d9026c> improved pranayama(breath work &amp; life energy) </p></li></ul></div></div></div>',1),xa={id:"About-Katie-Section",class:"bg-pink"},$a={class:"container p-5 position-relative"},ya={class:"floating-image-1"},Ca={class:"row"},wa={class:"col-md-8 team-section-title"},ka={class:"display-1 font-1 underline text-start"},Sa=p(" Katie Alverson "),Aa=[Sa],Ma={class:"display-6 font-2 underline text-lightPink darken-20 mb-md-2"},Ea=p(" Experienced, "),Ta=[Ea],Ba={class:"display-6 font-2 underline text-lightPink darken-20 mb-md-2 me-md-2"},Ia=p(" Qualified, "),Pa=[Ia],Oa={class:"display-6 font-2 underline text-lightPink darken-20 mb-md-2"},Da=p(" Passionate "),qa=[Da],Ha={class:"container-fluid"},ja={class:"row g-5 justify-content-center"},La={class:"col-md-6"},Ya=R(()=>e("img",{src:"https://scontent.fboi1-1.fna.fbcdn.net/v/t39.30808-6/306519061_129159436532870_6494007048333346057_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=ZyXKoZ6J5CIAX-iRhfY&_nc_ht=scontent.fboi1-1.fna&oh=00_AfCPQrcs1-iLVW0CLPjhl0-intGdQOE1_KoCweThnqKaAg&oe=639D65A6",alt:"Katie Alverson",class:"img-fluid elevation-6 rounded"},null,-1)),Fa=[Ya],za=R(()=>e("div",{class:"col-md-6"},[e("h6",{class:"mb-0 fs-4 fw-bold text-center"},"Founder, Owner, Teacher"),e("p",{class:"text-start fs-4 font-2"},"I believe that to question, to inquire, to seek understanding is a core part of what it means to be human. Whether its at home or away on a retreat, they are always inspired by the experiences of life. the core of a healthy person is in the wellbeing of their body, mind, and soul.")],-1)),Ra={class:"d-flex justify-content-end"},Wa=p(" Learn More "),Ga={id:"Testimonials-Section ",class:"mb-5"},Na={id:"Retreat-Section",class:"bg-pink"},Va={id:"Video-Section"};function Ja(t,b,g,x,u,$){const o=P("ParticleComponent"),_=P("GentleWave"),v=P("CallToAction"),i=P("ScheduleSection"),h=P("PersonComponent"),D=P("router-link"),O=P("TestimonialSection"),M=P("RetreatAndEvents"),j=P("YouTubeSection"),s=A("motion-slide-top"),a=A("motion"),c=A("motion-slide-visible-left"),l=A("motion-pop-visible");return d(),r("div",null,[e("section",Ns,[e("div",Vs,[e("div",Js,[B(o)]),e("div",Qs,[e("div",Xs,[f((d(),r("h5",Zs,oa)),[[s]]),f((d(),r("h1",{initial:{y:-100,opacity:0},enter:{y:0,opacity:1,transition:{type:"spring",stiffness:250,damping:25,mass:2.5}},delay:1e3,class:"display-2 text-light font-1"},la,8,na)),[[a]])]),f((d(),r("div",ca,ra)),[[s]])])]),B(_)]),e("section",ma,[B(v)]),e("section",_a,[e("div",fa,[e("div",pa,[e("div",ha,[f((d(),r("h1",ua,ga)),[[c]])]),ba])])]),e("section",null,[B(i)]),e("section",xa,[e("div",$a,[e("div",ya,[B(h)]),e("div",Ca,[e("div",wa,[f((d(),r("h1",ka,Aa)),[[c]]),f((d(),r("h2",Ma,Ta)),[[c]]),f((d(),r("h2",Ba,Pa)),[[c]]),f((d(),r("h2",Oa,qa)),[[c]])])])]),e("div",Ha,[e("div",ja,[f((d(),r("div",La,Fa)),[[l]]),za]),e("div",Ra,[B(D,{onClick:b[0]||(b[0]=m=>x.scrollToTop()),to:{name:"About"},class:"fs-3 btn bg-dark font-2 my-4"},{default:Y(()=>[Wa]),_:1})])])]),e("section",Ga,[B(O)]),e("section",Na,[B(M)]),e("section",Va,[B(j)])])}const to=H(Gs,[["render",Ja],["__scopeId","data-v-92d9026c"]]);export{to as default};
