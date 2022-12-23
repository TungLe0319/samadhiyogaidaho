import{O as F,l as G,_ as B,j as M,x as D,c as J,a as T,A as $,o as H}from"./index.121bd88c.js";var k=function(r,i){return k=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},k(r,i)};function h(r,i){if(typeof i!="function"&&i!==null)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");function t(){this.constructor=r}k(r,i),r.prototype=i===null?Object.create(i):(t.prototype=i.prototype,new t)}var j=function(){return j=Object.assign||function(r){for(var i,t=1,e=arguments.length;t<e;t++)for(var n in i=arguments[t])Object.prototype.hasOwnProperty.call(i,n)&&(r[n]=i[n]);return r},j.apply(this,arguments)};function p(r,i,t,e){return new(t||(t=Promise))(function(n,o){function s(d){try{c(e.next(d))}catch(u){o(u)}}function a(d){try{c(e.throw(d))}catch(u){o(u)}}function c(d){var u;d.done?n(d.value):(u=d.value,u instanceof t?u:new t(function(l){l(u)})).then(s,a)}c((e=e.apply(r,i||[])).next())})}function f(r,i){var t,e,n,o,s={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(c){return function(d){return function(u){if(t)throw new TypeError("Generator is already executing.");for(;s;)try{if(t=1,e&&(n=2&u[0]?e.return:u[0]?e.throw||((n=e.return)&&n.call(e),0):e.next)&&!(n=n.call(e,u[1])).done)return n;switch(e=0,n&&(u=[2&u[0],n.value]),u[0]){case 0:case 1:n=u;break;case 4:return s.label++,{value:u[1],done:!1};case 5:s.label++,e=u[1],u=[0];continue;case 7:u=s.ops.pop(),s.trys.pop();continue;default:if(n=s.trys,!((n=n.length>0&&n[n.length-1])||u[0]!==6&&u[0]!==2)){s=0;continue}if(u[0]===3&&(!n||u[1]>n[0]&&u[1]<n[3])){s.label=u[1];break}if(u[0]===6&&s.label<n[1]){s.label=n[1],n=u;break}if(n&&s.label<n[2]){s.label=n[2],s.ops.push(u);break}n[2]&&s.ops.pop(),s.trys.pop();continue}u=i.call(r,s)}catch(l){u=[6,l],e=0}finally{t=n=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([c,d])}}}var N,S=function(r){function i(t){var e,n=this;return(n=r.call(this,"ClientResponseError")||this).url="",n.status=0,n.data={},n.isAbort=!1,n.originalError=null,Object.setPrototypeOf(n,i.prototype),t instanceof i||(n.originalError=t),t!==null&&typeof t=="object"&&(n.url=typeof t.url=="string"?t.url:"",n.status=typeof t.status=="number"?t.status:0,n.data=t.data!==null&&typeof t.data=="object"?t.data:{}),typeof DOMException<"u"&&t instanceof DOMException&&(n.isAbort=!0),n.name="ClientResponseError "+n.status,n.message=(e=n.data)===null||e===void 0?void 0:e.message,n.message||(n.message=n.isAbort?"The request was autocancelled. More info you could find in https://github.com/pocketbase/js-sdk#auto-cancellation.":"Something went wrong while processing your request."),n}return h(i,r),i.prototype.toJSON=function(){return j({},this)},i}(Error),P=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function _(r,i,t){var e=Object.assign({},t||{}),n=e.encode||z;if(!P.test(r))throw new TypeError("argument name is invalid");var o=n(i);if(o&&!P.test(o))throw new TypeError("argument val is invalid");var s=r+"="+o;if(e.maxAge!=null){var a=e.maxAge-0;if(isNaN(a)||!isFinite(a))throw new TypeError("option maxAge is invalid");s+="; Max-Age="+Math.floor(a)}if(e.domain){if(!P.test(e.domain))throw new TypeError("option domain is invalid");s+="; Domain="+e.domain}if(e.path){if(!P.test(e.path))throw new TypeError("option path is invalid");s+="; Path="+e.path}if(e.expires){if(!function(c){return Object.prototype.toString.call(c)==="[object Date]"||c instanceof Date}(e.expires)||isNaN(e.expires.valueOf()))throw new TypeError("option expires is invalid");s+="; Expires="+e.expires.toUTCString()}if(e.httpOnly&&(s+="; HttpOnly"),e.secure&&(s+="; Secure"),e.priority)switch(typeof e.priority=="string"?e.priority.toLowerCase():e.priority){case"low":s+="; Priority=Low";break;case"medium":s+="; Priority=Medium";break;case"high":s+="; Priority=High";break;default:throw new TypeError("option priority is invalid")}if(e.sameSite)switch(typeof e.sameSite=="string"?e.sameSite.toLowerCase():e.sameSite){case!0:s+="; SameSite=Strict";break;case"lax":s+="; SameSite=Lax";break;case"strict":s+="; SameSite=Strict";break;case"none":s+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return s}function K(r){return r.indexOf("%")!==-1?decodeURIComponent(r):r}function z(r){return encodeURIComponent(r)}function x(r){if(r)try{var i=decodeURIComponent(N(r.split(".")[1]).split("").map(function(t){return"%"+("00"+t.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(i)||{}}catch{}return{}}N=typeof atob=="function"?atob:function(r){var i=String(r).replace(/=+$/,"");if(i.length%4==1)throw new Error("'atob' failed: The string to be decoded is not correctly encoded.");for(var t,e,n=0,o=0,s="";e=i.charAt(o++);~e&&(t=n%4?64*t+e:e,n++%4)?s+=String.fromCharCode(255&t>>(-2*n&6)):0)e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(e);return s};var C=function(){function r(i){i===void 0&&(i={}),this.load(i||{})}return r.prototype.load=function(i){for(var t=0,e=Object.entries(i);t<e.length;t++){var n=e[t],o=n[0],s=n[1];this[o]=s}this.id=i.id!==void 0?i.id:"",this.created=i.created!==void 0?i.created:"",this.updated=i.updated!==void 0?i.updated:""},Object.defineProperty(r.prototype,"isNew",{get:function(){return!this.id},enumerable:!1,configurable:!0}),r.prototype.clone=function(){return new this.constructor(JSON.parse(JSON.stringify(this)))},r.prototype.export=function(){return Object.assign({},this)},r}(),I=function(r){function i(){return r!==null&&r.apply(this,arguments)||this}return h(i,r),i.prototype.load=function(t){r.prototype.load.call(this,t),this.collectionId=typeof t.collectionId=="string"?t.collectionId:"",this.collectionName=typeof t.collectionName=="string"?t.collectionName:"",this.expand=typeof t.expand=="object"&&t.expand!==null?t.expand:{}},i}(C),E=function(r){function i(){return r!==null&&r.apply(this,arguments)||this}return h(i,r),i.prototype.load=function(t){r.prototype.load.call(this,t),this.avatar=typeof t.avatar=="number"?t.avatar:0,this.email=typeof t.email=="string"?t.email:""},i}(C),W=function(){function r(){this.baseToken="",this.baseModel=null,this._onChangeCallbacks=[]}return Object.defineProperty(r.prototype,"token",{get:function(){return this.baseToken},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"model",{get:function(){return this.baseModel},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"isValid",{get:function(){return!function(i,t){t===void 0&&(t=0);var e=x(i);return!(Object.keys(e).length>0&&(!e.exp||e.exp-t>Date.now()/1e3))}(this.token)},enumerable:!1,configurable:!0}),r.prototype.save=function(i,t){this.baseToken=i||"",this.baseModel=t!==null&&typeof t=="object"?t.collectionId!==void 0?new I(t):new E(t):null,this.triggerChange()},r.prototype.clear=function(){this.baseToken="",this.baseModel=null,this.triggerChange()},r.prototype.loadFromCookie=function(i,t){t===void 0&&(t="pb_auth");var e=function(o,s){var a={};if(typeof o!="string")return a;for(var c=Object.assign({},s||{}).decode||K,d=0;d<o.length;){var u=o.indexOf("=",d);if(u===-1)break;var l=o.indexOf(";",d);if(l===-1)l=o.length;else if(l<u){d=o.lastIndexOf(";",u-1)+1;continue}var m=o.slice(d,u).trim();if(a[m]===void 0){var v=o.slice(u+1,l).trim();v.charCodeAt(0)===34&&(v=v.slice(1,-1));try{a[m]=c(v)}catch{a[m]=v}}d=l+1}return a}(i||"")[t]||"",n={};try{(typeof(n=JSON.parse(e))===null||typeof n!="object"||Array.isArray(n))&&(n={})}catch{}this.save(n.token||"",n.model||null)},r.prototype.exportToCookie=function(i,t){var e,n,o;t===void 0&&(t="pb_auth");var s={secure:!0,sameSite:!0,httpOnly:!0,path:"/"},a=x(this.token);a!=null&&a.exp?s.expires=new Date(1e3*a.exp):s.expires=new Date("1970-01-01"),i=Object.assign({},s,i);var c={token:this.token,model:((e=this.model)===null||e===void 0?void 0:e.export())||null},d=_(t,JSON.stringify(c),i),u=typeof Blob<"u"?new Blob([d]).size:d.length;return c.model&&u>4096&&(c.model={id:(n=c==null?void 0:c.model)===null||n===void 0?void 0:n.id,email:(o=c==null?void 0:c.model)===null||o===void 0?void 0:o.email},this.model instanceof I&&(c.model.username=this.model.username,c.model.verified=this.model.verified,c.model.collectionId=this.model.collectionId),d=_(t,JSON.stringify(c),i)),d},r.prototype.onChange=function(i,t){var e=this;return t===void 0&&(t=!1),this._onChangeCallbacks.push(i),t&&i(this.token,this.model),function(){for(var n=e._onChangeCallbacks.length-1;n>=0;n--)if(e._onChangeCallbacks[n]==i)return delete e._onChangeCallbacks[n],void e._onChangeCallbacks.splice(n,1)}},r.prototype.triggerChange=function(){for(var i=0,t=this._onChangeCallbacks;i<t.length;i++){var e=t[i];e&&e(this.token,this.model)}},r}(),V=function(r){function i(t){t===void 0&&(t="pocketbase_auth");var e=r.call(this)||this;return e.storageFallback={},e.storageKey=t,e}return h(i,r),Object.defineProperty(i.prototype,"token",{get:function(){return(this._storageGet(this.storageKey)||{}).token||""},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"model",{get:function(){var t,e=this._storageGet(this.storageKey)||{};return e===null||typeof e!="object"||e.model===null||typeof e.model!="object"?null:((t=e.model)===null||t===void 0?void 0:t.collectionId)===void 0?new E(e.model):new I(e.model)},enumerable:!1,configurable:!0}),i.prototype.save=function(t,e){this._storageSet(this.storageKey,{token:t,model:e}),r.prototype.save.call(this,t,e)},i.prototype.clear=function(){this._storageRemove(this.storageKey),r.prototype.clear.call(this)},i.prototype._storageGet=function(t){if(typeof window<"u"&&(window==null?void 0:window.localStorage)){var e=window.localStorage.getItem(t)||"";try{return JSON.parse(e)}catch{return e}}return this.storageFallback[t]},i.prototype._storageSet=function(t,e){if(typeof window<"u"&&(window==null?void 0:window.localStorage)){var n=e;typeof e!="string"&&(n=JSON.stringify(e)),window.localStorage.setItem(t,n)}else this.storageFallback[t]=e},i.prototype._storageRemove=function(t){var e;typeof window<"u"&&(window==null?void 0:window.localStorage)&&((e=window.localStorage)===null||e===void 0||e.removeItem(t)),delete this.storageFallback[t]},i}(W),O=function(r){this.client=r},Q=function(r){function i(){return r!==null&&r.apply(this,arguments)||this}return h(i,r),i.prototype.getAll=function(t){return t===void 0&&(t={}),this.client.send("/api/settings",{method:"GET",params:t}).then(function(e){return e||{}})},i.prototype.update=function(t,e){return t===void 0&&(t={}),e===void 0&&(e={}),this.client.send("/api/settings",{method:"PATCH",params:e,body:t}).then(function(n){return n||{}})},i.prototype.testS3=function(t){return t===void 0&&(t={}),this.client.send("/api/settings/test/s3",{method:"POST",params:t}).then(function(){return!0})},i.prototype.testEmail=function(t,e,n){n===void 0&&(n={});var o={email:t,template:e};return this.client.send("/api/settings/test/email",{method:"POST",params:n,body:o}).then(function(){return!0})},i}(O),U=function(r,i,t,e,n){this.page=r>0?r:1,this.perPage=i>=0?i:0,this.totalItems=t>=0?t:0,this.totalPages=e>=0?e:0,this.items=n||[]},A=function(r){function i(){return r!==null&&r.apply(this,arguments)||this}return h(i,r),i.prototype.getFullList=function(t,e){return t===void 0&&(t=200),e===void 0&&(e={}),this._getFullList(this.baseCrudPath,t,e)},i.prototype.getList=function(t,e,n){return t===void 0&&(t=1),e===void 0&&(e=30),n===void 0&&(n={}),this._getList(this.baseCrudPath,t,e,n)},i.prototype.getFirstListItem=function(t,e){return e===void 0&&(e={}),this._getFirstListItem(this.baseCrudPath,t,e)},i.prototype.getOne=function(t,e){return e===void 0&&(e={}),this._getOne(this.baseCrudPath,t,e)},i.prototype.create=function(t,e){return t===void 0&&(t={}),e===void 0&&(e={}),this._create(this.baseCrudPath,t,e)},i.prototype.update=function(t,e,n){return e===void 0&&(e={}),n===void 0&&(n={}),this._update(this.baseCrudPath,t,e,n)},i.prototype.delete=function(t,e){return e===void 0&&(e={}),this._delete(this.baseCrudPath,t,e)},i}(function(r){function i(){return r!==null&&r.apply(this,arguments)||this}return h(i,r),i.prototype._getFullList=function(t,e,n){var o=this;e===void 0&&(e=100),n===void 0&&(n={});var s=[],a=function(c){return p(o,void 0,void 0,function(){return f(this,function(d){return[2,this._getList(t,c,e,n).then(function(u){var l=u,m=l.items,v=l.totalItems;return s=s.concat(m),m.length&&v>s.length?a(c+1):s})]})})};return a(1)},i.prototype._getList=function(t,e,n,o){var s=this;return e===void 0&&(e=1),n===void 0&&(n=30),o===void 0&&(o={}),o=Object.assign({page:e,perPage:n},o),this.client.send(t,{method:"GET",params:o}).then(function(a){var c=[];if(a!=null&&a.items){a.items=a.items||[];for(var d=0,u=a.items;d<u.length;d++){var l=u[d];c.push(s.decode(l))}}return new U((a==null?void 0:a.page)||1,(a==null?void 0:a.perPage)||0,(a==null?void 0:a.totalItems)||0,(a==null?void 0:a.totalPages)||0,c)})},i.prototype._getOne=function(t,e,n){var o=this;return n===void 0&&(n={}),this.client.send(t+"/"+encodeURIComponent(e),{method:"GET",params:n}).then(function(s){return o.decode(s)})},i.prototype._getFirstListItem=function(t,e,n){return n===void 0&&(n={}),n=Object.assign({filter:e,$cancelKey:"one_by_filter_"+t+"_"+e},n),this._getList(t,1,1,n).then(function(o){var s;if(!(!((s=o==null?void 0:o.items)===null||s===void 0)&&s.length))throw new S({status:404,data:{code:404,message:"The requested resource wasn't found.",data:{}}});return o.items[0]})},i.prototype._create=function(t,e,n){var o=this;return e===void 0&&(e={}),n===void 0&&(n={}),this.client.send(t,{method:"POST",params:n,body:e}).then(function(s){return o.decode(s)})},i.prototype._update=function(t,e,n,o){var s=this;return n===void 0&&(n={}),o===void 0&&(o={}),this.client.send(t+"/"+encodeURIComponent(e),{method:"PATCH",params:o,body:n}).then(function(a){return s.decode(a)})},i.prototype._delete=function(t,e,n){return n===void 0&&(n={}),this.client.send(t+"/"+encodeURIComponent(e),{method:"DELETE",params:n}).then(function(){return!0})},i}(O)),X=function(r){function i(){return r!==null&&r.apply(this,arguments)||this}return h(i,r),i.prototype.decode=function(t){return new E(t)},Object.defineProperty(i.prototype,"baseCrudPath",{get:function(){return"/api/admins"},enumerable:!1,configurable:!0}),i.prototype.update=function(t,e,n){var o=this;return e===void 0&&(e={}),n===void 0&&(n={}),r.prototype.update.call(this,t,e,n).then(function(s){var a,c;return o.client.authStore.model&&((a=o.client.authStore.model)===null||a===void 0?void 0:a.collectionId)===void 0&&((c=o.client.authStore.model)===null||c===void 0?void 0:c.id)===(s==null?void 0:s.id)&&o.client.authStore.save(o.client.authStore.token,s),s})},i.prototype.delete=function(t,e){var n=this;return e===void 0&&(e={}),r.prototype.delete.call(this,t,e).then(function(o){var s,a;return o&&n.client.authStore.model&&((s=n.client.authStore.model)===null||s===void 0?void 0:s.collectionId)===void 0&&((a=n.client.authStore.model)===null||a===void 0?void 0:a.id)===t&&n.client.authStore.clear(),o})},i.prototype.authResponse=function(t){var e=this.decode((t==null?void 0:t.admin)||{});return(t==null?void 0:t.token)&&(t==null?void 0:t.admin)&&this.client.authStore.save(t.token,e),Object.assign({},t,{token:(t==null?void 0:t.token)||"",admin:e})},i.prototype.authWithPassword=function(t,e,n,o){return n===void 0&&(n={}),o===void 0&&(o={}),n=Object.assign({identity:t,password:e},n),this.client.send(this.baseCrudPath+"/auth-with-password",{method:"POST",params:o,body:n,headers:{Authorization:""}}).then(this.authResponse.bind(this))},i.prototype.authRefresh=function(t,e){return t===void 0&&(t={}),e===void 0&&(e={}),this.client.send(this.baseCrudPath+"/auth-refresh",{method:"POST",params:e,body:t}).then(this.authResponse.bind(this))},i.prototype.requestPasswordReset=function(t,e,n){return e===void 0&&(e={}),n===void 0&&(n={}),e=Object.assign({email:t},e),this.client.send(this.baseCrudPath+"/request-password-reset",{method:"POST",params:n,body:e}).then(function(){return!0})},i.prototype.confirmPasswordReset=function(t,e,n,o,s){return o===void 0&&(o={}),s===void 0&&(s={}),o=Object.assign({token:t,password:e,passwordConfirm:n},o),this.client.send(this.baseCrudPath+"/confirm-password-reset",{method:"POST",params:s,body:o}).then(function(){return!0})},i}(A),Y=function(r){function i(){return r!==null&&r.apply(this,arguments)||this}return h(i,r),i.prototype.load=function(t){r.prototype.load.call(this,t),this.recordId=typeof t.recordId=="string"?t.recordId:"",this.collectionId=typeof t.collectionId=="string"?t.collectionId:"",this.provider=typeof t.provider=="string"?t.provider:"",this.providerId=typeof t.providerId=="string"?t.providerId:""},i}(C),Z=function(r){function i(t,e){var n=r.call(this,t)||this;return n.collectionIdOrName=e,n}return h(i,r),i.prototype.decode=function(t){return new I(t)},Object.defineProperty(i.prototype,"baseCrudPath",{get:function(){return this.baseCollectionPath+"/records"},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"baseCollectionPath",{get:function(){return"/api/collections/"+encodeURIComponent(this.collectionIdOrName)},enumerable:!1,configurable:!0}),i.prototype.subscribeOne=function(t,e){return p(this,void 0,void 0,function(){return f(this,function(n){return console.warn("PocketBase: subscribeOne(recordId, callback) is deprecated. Please replace it with subscribe(recordId, callback)."),[2,this.client.realtime.subscribe(this.collectionIdOrName+"/"+t,e)]})})},i.prototype.subscribe=function(t,e){return p(this,void 0,void 0,function(){var n;return f(this,function(o){if(typeof t=="function")return console.warn("PocketBase: subscribe(callback) is deprecated. Please replace it with subscribe('*', callback)."),[2,this.client.realtime.subscribe(this.collectionIdOrName,t)];if(!e)throw new Error("Missing subscription callback.");if(t==="")throw new Error("Missing topic.");return n=this.collectionIdOrName,t!=="*"&&(n+="/"+t),[2,this.client.realtime.subscribe(n,e)]})})},i.prototype.unsubscribe=function(t){return p(this,void 0,void 0,function(){return f(this,function(e){return t==="*"?[2,this.client.realtime.unsubscribe(this.collectionIdOrName)]:t?[2,this.client.realtime.unsubscribe(this.collectionIdOrName+"/"+t)]:[2,this.client.realtime.unsubscribeByPrefix(this.collectionIdOrName)]})})},i.prototype.getFullList=function(t,e){return t===void 0&&(t=200),e===void 0&&(e={}),r.prototype.getFullList.call(this,t,e)},i.prototype.getList=function(t,e,n){return t===void 0&&(t=1),e===void 0&&(e=30),n===void 0&&(n={}),r.prototype.getList.call(this,t,e,n)},i.prototype.getFirstListItem=function(t,e){return e===void 0&&(e={}),r.prototype.getFirstListItem.call(this,t,e)},i.prototype.getOne=function(t,e){return e===void 0&&(e={}),r.prototype.getOne.call(this,t,e)},i.prototype.create=function(t,e){return t===void 0&&(t={}),e===void 0&&(e={}),r.prototype.create.call(this,t,e)},i.prototype.update=function(t,e,n){var o=this;return e===void 0&&(e={}),n===void 0&&(n={}),r.prototype.update.call(this,t,e,n).then(function(s){var a,c;return((a=o.client.authStore.model)===null||a===void 0?void 0:a.collectionId)!==void 0&&((c=o.client.authStore.model)===null||c===void 0?void 0:c.id)===(s==null?void 0:s.id)&&o.client.authStore.save(o.client.authStore.token,s),s})},i.prototype.delete=function(t,e){var n=this;return e===void 0&&(e={}),r.prototype.delete.call(this,t,e).then(function(o){var s,a;return o&&((s=n.client.authStore.model)===null||s===void 0?void 0:s.collectionId)!==void 0&&((a=n.client.authStore.model)===null||a===void 0?void 0:a.id)===t&&n.client.authStore.clear(),o})},i.prototype.authResponse=function(t){var e=this.decode((t==null?void 0:t.record)||{});return this.client.authStore.save(t==null?void 0:t.token,e),Object.assign({},t,{token:(t==null?void 0:t.token)||"",record:e})},i.prototype.listAuthMethods=function(t){return t===void 0&&(t={}),this.client.send(this.baseCollectionPath+"/auth-methods",{method:"GET",params:t}).then(function(e){return Object.assign({},e,{usernamePassword:!!(e!=null&&e.usernamePassword),emailPassword:!!(e!=null&&e.emailPassword),authProviders:Array.isArray(e==null?void 0:e.authProviders)?e==null?void 0:e.authProviders:[]})})},i.prototype.authWithPassword=function(t,e,n,o){var s=this;return n===void 0&&(n={}),o===void 0&&(o={}),n=Object.assign({identity:t,password:e},n),this.client.send(this.baseCollectionPath+"/auth-with-password",{method:"POST",params:o,body:n,headers:{Authorization:""}}).then(function(a){return s.authResponse(a)})},i.prototype.authWithOAuth2=function(t,e,n,o,s,a,c){var d=this;return s===void 0&&(s={}),a===void 0&&(a={}),c===void 0&&(c={}),a=Object.assign({provider:t,code:e,codeVerifier:n,redirectUrl:o,createData:s},a),this.client.send(this.baseCollectionPath+"/auth-with-oauth2",{method:"POST",params:c,body:a}).then(function(u){return d.authResponse(u)})},i.prototype.authRefresh=function(t,e){var n=this;return t===void 0&&(t={}),e===void 0&&(e={}),this.client.send(this.baseCollectionPath+"/auth-refresh",{method:"POST",params:e,body:t}).then(function(o){return n.authResponse(o)})},i.prototype.requestPasswordReset=function(t,e,n){return e===void 0&&(e={}),n===void 0&&(n={}),e=Object.assign({email:t},e),this.client.send(this.baseCollectionPath+"/request-password-reset",{method:"POST",params:n,body:e}).then(function(){return!0})},i.prototype.confirmPasswordReset=function(t,e,n,o,s){return o===void 0&&(o={}),s===void 0&&(s={}),o=Object.assign({token:t,password:e,passwordConfirm:n},o),this.client.send(this.baseCollectionPath+"/confirm-password-reset",{method:"POST",params:s,body:o}).then(function(){return!0})},i.prototype.requestVerification=function(t,e,n){return e===void 0&&(e={}),n===void 0&&(n={}),e=Object.assign({email:t},e),this.client.send(this.baseCollectionPath+"/request-verification",{method:"POST",params:n,body:e}).then(function(){return!0})},i.prototype.confirmVerification=function(t,e,n){return e===void 0&&(e={}),n===void 0&&(n={}),e=Object.assign({token:t},e),this.client.send(this.baseCollectionPath+"/confirm-verification",{method:"POST",params:n,body:e}).then(function(){return!0})},i.prototype.requestEmailChange=function(t,e,n){return e===void 0&&(e={}),n===void 0&&(n={}),e=Object.assign({newEmail:t},e),this.client.send(this.baseCollectionPath+"/request-email-change",{method:"POST",params:n,body:e}).then(function(){return!0})},i.prototype.confirmEmailChange=function(t,e,n,o){return n===void 0&&(n={}),o===void 0&&(o={}),n=Object.assign({token:t,password:e},n),this.client.send(this.baseCollectionPath+"/confirm-email-change",{method:"POST",params:o,body:n}).then(function(){return!0})},i.prototype.listExternalAuths=function(t,e){return e===void 0&&(e={}),this.client.send(this.baseCrudPath+"/"+encodeURIComponent(t)+"/external-auths",{method:"GET",params:e}).then(function(n){var o=[];if(Array.isArray(n))for(var s=0,a=n;s<a.length;s++){var c=a[s];o.push(new Y(c))}return o})},i.prototype.unlinkExternalAuth=function(t,e,n){return n===void 0&&(n={}),this.client.send(this.baseCrudPath+"/"+encodeURIComponent(t)+"/external-auths/"+encodeURIComponent(e),{method:"DELETE",params:n}).then(function(){return!0})},i}(A),tt=function(){function r(i){i===void 0&&(i={}),this.load(i||{})}return r.prototype.load=function(i){this.id=i.id!==void 0?i.id:"",this.name=i.name!==void 0?i.name:"",this.type=i.type!==void 0?i.type:"text",this.system=!!i.system,this.required=!!i.required,this.unique=!!i.unique,this.options=typeof i.options=="object"&&i.options!==null?i.options:{}},r}(),et=function(r){function i(){return r!==null&&r.apply(this,arguments)||this}return h(i,r),i.prototype.load=function(t){r.prototype.load.call(this,t),this.system=!!t.system,this.name=typeof t.name=="string"?t.name:"",this.type=typeof t.type=="string"?t.type:"base",this.options=t.options!==void 0?t.options:{},this.listRule=typeof t.listRule=="string"?t.listRule:null,this.viewRule=typeof t.viewRule=="string"?t.viewRule:null,this.createRule=typeof t.createRule=="string"?t.createRule:null,this.updateRule=typeof t.updateRule=="string"?t.updateRule:null,this.deleteRule=typeof t.deleteRule=="string"?t.deleteRule:null,t.schema=Array.isArray(t.schema)?t.schema:[],this.schema=[];for(var e=0,n=t.schema;e<n.length;e++){var o=n[e];this.schema.push(new tt(o))}},Object.defineProperty(i.prototype,"isBase",{get:function(){return this.type==="base"},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"isAuth",{get:function(){return this.type==="auth"},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"isSingle",{get:function(){return this.type==="single"},enumerable:!1,configurable:!0}),i}(C),nt=function(r){function i(){return r!==null&&r.apply(this,arguments)||this}return h(i,r),i.prototype.decode=function(t){return new et(t)},Object.defineProperty(i.prototype,"baseCrudPath",{get:function(){return"/api/collections"},enumerable:!1,configurable:!0}),i.prototype.import=function(t,e,n){return e===void 0&&(e=!1),n===void 0&&(n={}),p(this,void 0,void 0,function(){return f(this,function(o){return[2,this.client.send(this.baseCrudPath+"/import",{method:"PUT",params:n,body:{collections:t,deleteMissing:e}}).then(function(){return!0})]})})},i}(A),L=function(r){function i(){return r!==null&&r.apply(this,arguments)||this}return h(i,r),i.prototype.load=function(t){r.prototype.load.call(this,t),t.remoteIp=t.remoteIp||t.ip,this.url=typeof t.url=="string"?t.url:"",this.method=typeof t.method=="string"?t.method:"GET",this.status=typeof t.status=="number"?t.status:200,this.auth=typeof t.auth=="string"?t.auth:"guest",this.remoteIp=typeof t.remoteIp=="string"?t.remoteIp:"",this.userIp=typeof t.userIp=="string"?t.userIp:"",this.referer=typeof t.referer=="string"?t.referer:"",this.userAgent=typeof t.userAgent=="string"?t.userAgent:"",this.meta=typeof t.meta=="object"&&t.meta!==null?t.meta:{}},i}(C),it=function(r){function i(){return r!==null&&r.apply(this,arguments)||this}return h(i,r),i.prototype.getRequestsList=function(t,e,n){return t===void 0&&(t=1),e===void 0&&(e=30),n===void 0&&(n={}),n=Object.assign({page:t,perPage:e},n),this.client.send("/api/logs/requests",{method:"GET",params:n}).then(function(o){var s=[];if(o!=null&&o.items){o.items=(o==null?void 0:o.items)||[];for(var a=0,c=o.items;a<c.length;a++){var d=c[a];s.push(new L(d))}}return new U((o==null?void 0:o.page)||1,(o==null?void 0:o.perPage)||0,(o==null?void 0:o.totalItems)||0,(o==null?void 0:o.totalPages)||0,s)})},i.prototype.getRequest=function(t,e){return e===void 0&&(e={}),this.client.send("/api/logs/requests/"+encodeURIComponent(t),{method:"GET",params:e}).then(function(n){return new L(n)})},i.prototype.getRequestsStats=function(t){return t===void 0&&(t={}),this.client.send("/api/logs/requests/stats",{method:"GET",params:t}).then(function(e){return e})},i}(O),ot=function(r){function i(){var t=r!==null&&r.apply(this,arguments)||this;return t.clientId="",t.eventSource=null,t.subscriptions={},t.lastSentTopics=[],t.maxConnectTimeout=1e4,t.reconnectAttempts=0,t.maxReconnectAttempts=1/0,t.predefinedReconnectIntervals=[200,300,500,1e3,1200,1500,2e3],t.pendingConnects=[],t}return h(i,r),Object.defineProperty(i.prototype,"isConnected",{get:function(){return!!this.eventSource&&!!this.clientId&&!this.pendingConnects.length},enumerable:!1,configurable:!0}),i.prototype.subscribe=function(t,e){var n;return p(this,void 0,void 0,function(){var o,s=this;return f(this,function(a){switch(a.label){case 0:if(!t)throw new Error("topic must be set.");return o=function(c){var d,u=c;try{d=JSON.parse(u==null?void 0:u.data)}catch{}e(d||{})},this.subscriptions[t]||(this.subscriptions[t]=[]),this.subscriptions[t].push(o),this.isConnected?[3,2]:[4,this.connect()];case 1:return a.sent(),[3,5];case 2:return this.subscriptions[t].length!==1?[3,4]:[4,this.submitSubscriptions()];case 3:return a.sent(),[3,5];case 4:(n=this.eventSource)===null||n===void 0||n.addEventListener(t,o),a.label=5;case 5:return[2,function(){return p(s,void 0,void 0,function(){return f(this,function(c){return[2,this.unsubscribeByTopicAndListener(t,o)]})})}]}})})},i.prototype.unsubscribe=function(t){var e;return p(this,void 0,void 0,function(){var n,o,s;return f(this,function(a){switch(a.label){case 0:if(!this.hasSubscriptionListeners(t))return[2];if(t){for(n=0,o=this.subscriptions[t];n<o.length;n++)s=o[n],(e=this.eventSource)===null||e===void 0||e.removeEventListener(t,s);delete this.subscriptions[t]}else this.subscriptions={};return this.hasSubscriptionListeners()?[3,1]:(this.disconnect(),[3,3]);case 1:return this.hasSubscriptionListeners(t)?[3,3]:[4,this.submitSubscriptions()];case 2:a.sent(),a.label=3;case 3:return[2]}})})},i.prototype.unsubscribeByPrefix=function(t){var e;return p(this,void 0,void 0,function(){var n,o,s,a,c;return f(this,function(d){switch(d.label){case 0:for(o in n=!1,this.subscriptions)if(o.startsWith(t)){for(n=!0,s=0,a=this.subscriptions[o];s<a.length;s++)c=a[s],(e=this.eventSource)===null||e===void 0||e.removeEventListener(o,c);delete this.subscriptions[o]}return n?this.hasSubscriptionListeners()?[4,this.submitSubscriptions()]:[3,2]:[2];case 1:return d.sent(),[3,3];case 2:this.disconnect(),d.label=3;case 3:return[2]}})})},i.prototype.unsubscribeByTopicAndListener=function(t,e){var n;return p(this,void 0,void 0,function(){var o,s;return f(this,function(a){switch(a.label){case 0:if(!Array.isArray(this.subscriptions[t])||!this.subscriptions[t].length)return[2];for(o=!1,s=this.subscriptions[t].length-1;s>=0;s--)this.subscriptions[t][s]===e&&(o=!0,delete this.subscriptions[t][s],this.subscriptions[t].splice(s,1),(n=this.eventSource)===null||n===void 0||n.removeEventListener(t,e));return o?(this.subscriptions[t].length||delete this.subscriptions[t],this.hasSubscriptionListeners()?[3,1]:(this.disconnect(),[3,3])):[2];case 1:return this.hasSubscriptionListeners(t)?[3,3]:[4,this.submitSubscriptions()];case 2:a.sent(),a.label=3;case 3:return[2]}})})},i.prototype.hasSubscriptionListeners=function(t){var e,n;if(this.subscriptions=this.subscriptions||{},t)return!!(!((e=this.subscriptions[t])===null||e===void 0)&&e.length);for(var o in this.subscriptions)if(!((n=this.subscriptions[o])===null||n===void 0)&&n.length)return!0;return!1},i.prototype.submitSubscriptions=function(){return p(this,void 0,void 0,function(){return f(this,function(t){return this.clientId?(this.addAllSubscriptionListeners(),this.lastSentTopics=this.getNonEmptySubscriptionTopics(),[2,this.client.send("/api/realtime",{method:"POST",body:{clientId:this.clientId,subscriptions:this.lastSentTopics},params:{$cancelKey:"realtime_"+this.clientId}}).catch(function(e){if(!(e!=null&&e.isAbort))throw e})]):[2]})})},i.prototype.getNonEmptySubscriptionTopics=function(){var t=[];for(var e in this.subscriptions)this.subscriptions[e].length&&t.push(e);return t},i.prototype.addAllSubscriptionListeners=function(){if(this.eventSource)for(var t in this.removeAllSubscriptionListeners(),this.subscriptions)for(var e=0,n=this.subscriptions[t];e<n.length;e++){var o=n[e];this.eventSource.addEventListener(t,o)}},i.prototype.removeAllSubscriptionListeners=function(){if(this.eventSource)for(var t in this.subscriptions)for(var e=0,n=this.subscriptions[t];e<n.length;e++){var o=n[e];this.eventSource.removeEventListener(t,o)}},i.prototype.connect=function(){return p(this,void 0,void 0,function(){var t=this;return f(this,function(e){return this.reconnectAttempts>0?[2]:[2,new Promise(function(n,o){t.pendingConnects.push({resolve:n,reject:o}),t.pendingConnects.length>1||t.initConnect()})]})})},i.prototype.initConnect=function(){var t=this;this.disconnect(!0),clearTimeout(this.connectTimeoutId),this.connectTimeoutId=setTimeout(function(){t.connectErrorHandler(new Error("EventSource connect took too long."))},this.maxConnectTimeout),this.eventSource=new EventSource(this.client.buildUrl("/api/realtime")),this.eventSource.onerror=function(e){t.connectErrorHandler(new Error("Failed to establish realtime connection."))},this.eventSource.addEventListener("PB_CONNECT",function(e){var n=e;t.clientId=n==null?void 0:n.lastEventId,t.submitSubscriptions().then(function(){return p(t,void 0,void 0,function(){var o;return f(this,function(s){switch(s.label){case 0:o=3,s.label=1;case 1:return this.hasUnsentSubscriptions()&&o>0?(o--,[4,this.submitSubscriptions()]):[3,3];case 2:return s.sent(),[3,1];case 3:return[2]}})})}).then(function(){for(var o=0,s=t.pendingConnects;o<s.length;o++)s[o].resolve();t.pendingConnects=[],t.reconnectAttempts=0,clearTimeout(t.reconnectTimeoutId),clearTimeout(t.connectTimeoutId)}).catch(function(o){t.clientId="",t.connectErrorHandler(o)})})},i.prototype.hasUnsentSubscriptions=function(){var t=this.getNonEmptySubscriptionTopics();if(t.length!=this.lastSentTopics.length)return!0;for(var e=0,n=t;e<n.length;e++){var o=n[e];if(!this.lastSentTopics.includes(o))return!0}return!1},i.prototype.connectErrorHandler=function(t){var e=this;if(clearTimeout(this.connectTimeoutId),clearTimeout(this.reconnectTimeoutId),!this.clientId&&!this.reconnectAttempts||this.reconnectAttempts>this.maxReconnectAttempts){for(var n=0,o=this.pendingConnects;n<o.length;n++)o[n].reject(new S(t));this.disconnect()}else{this.disconnect(!0);var s=this.predefinedReconnectIntervals[this.reconnectAttempts]||this.predefinedReconnectIntervals[this.predefinedReconnectIntervals.length-1];this.reconnectAttempts++,this.reconnectTimeoutId=setTimeout(function(){e.initConnect()},s)}},i.prototype.disconnect=function(t){var e;if(t===void 0&&(t=!1),clearTimeout(this.connectTimeoutId),clearTimeout(this.reconnectTimeoutId),this.removeAllSubscriptionListeners(),(e=this.eventSource)===null||e===void 0||e.close(),this.eventSource=null,this.clientId="",!t){this.reconnectAttempts=0;for(var n=new S(new Error("Realtime disconnected.")),o=0,s=this.pendingConnects;o<s.length;o++)s[o].reject(n);this.pendingConnects=[]}},i}(O),rt=function(r){function i(){return r!==null&&r.apply(this,arguments)||this}return h(i,r),i.prototype.check=function(t){return t===void 0&&(t={}),this.client.send("/api/health",{method:"GET",params:t})},i}(O),st=function(){function r(i,t,e){i===void 0&&(i="/"),e===void 0&&(e="en-US"),this.cancelControllers={},this.recordServices={},this.enableAutoCancellation=!0,this.baseUrl=i,this.lang=e,this.authStore=t||new V,this.admins=new X(this),this.collections=new nt(this),this.logs=new it(this),this.settings=new Q(this),this.realtime=new ot(this),this.health=new rt(this)}return r.prototype.collection=function(i){return this.recordServices[i]||(this.recordServices[i]=new Z(this,i)),this.recordServices[i]},r.prototype.autoCancellation=function(i){return this.enableAutoCancellation=!!i,this},r.prototype.cancelRequest=function(i){return this.cancelControllers[i]&&(this.cancelControllers[i].abort(),delete this.cancelControllers[i]),this},r.prototype.cancelAllRequests=function(){for(var i in this.cancelControllers)this.cancelControllers[i].abort();return this.cancelControllers={},this},r.prototype.send=function(i,t){var e,n,o,s,a,c,d,u;return p(this,void 0,void 0,function(){var l,m,v,b,R,q=this;return f(this,function(vt){return(l=Object.assign({method:"GET"},t)).body&&l.body.constructor.name!=="FormData"&&(typeof l.body!="string"&&(l.body=JSON.stringify(l.body)),((e=l==null?void 0:l.headers)===null||e===void 0?void 0:e["Content-Type"])===void 0&&(l.headers=Object.assign({},l.headers,{"Content-Type":"application/json"}))),((n=l==null?void 0:l.headers)===null||n===void 0?void 0:n["Accept-Language"])===void 0&&(l.headers=Object.assign({},l.headers,{"Accept-Language":this.lang})),((o=this.authStore)===null||o===void 0?void 0:o.token)&&((s=l==null?void 0:l.headers)===null||s===void 0?void 0:s.Authorization)===void 0&&(l.headers=Object.assign({},l.headers,{Authorization:this.authStore.token})),this.enableAutoCancellation&&((a=l.params)===null||a===void 0?void 0:a.$autoCancel)!==!1&&(m=((c=l.params)===null||c===void 0?void 0:c.$cancelKey)||(l.method||"GET")+i,this.cancelRequest(m),v=new AbortController,this.cancelControllers[m]=v,l.signal=v.signal),(d=l.params)===null||d===void 0||delete d.$autoCancel,(u=l.params)===null||u===void 0||delete u.$cancelKey,b=this.buildUrl(i),l.params!==void 0&&((R=this.serializeQueryParams(l.params))&&(b+=(b.includes("?")?"&":"?")+R),delete l.params),this.beforeSend&&(l=Object.assign({},this.beforeSend(b,l))),[2,fetch(b,l).then(function(y){return p(q,void 0,void 0,function(){var g;return f(this,function(w){switch(w.label){case 0:g={},w.label=1;case 1:return w.trys.push([1,3,,4]),[4,y.json()];case 2:return g=w.sent(),[3,4];case 3:return w.sent(),[3,4];case 4:if(this.afterSend&&(g=this.afterSend(y,g)),y.status>=400)throw new S({url:y.url,status:y.status,data:g});return[2,g]}})})}).catch(function(y){throw new S(y)})]})})},r.prototype.getFileUrl=function(i,t,e){e===void 0&&(e={});var n=[];n.push("api"),n.push("files"),n.push(encodeURIComponent(i.collectionId||i.collectionName)),n.push(encodeURIComponent(i.id)),n.push(encodeURIComponent(t));var o=this.buildUrl(n.join("/"));if(Object.keys(e).length){var s=new URLSearchParams(e);o+=(o.includes("?")?"&":"?")+s}return o},r.prototype.buildUrl=function(i){var t=this.baseUrl+(this.baseUrl.endsWith("/")?"":"/");return i&&(t+=i.startsWith("/")?i.substring(1):i),t},r.prototype.serializeQueryParams=function(i){var t=[];for(var e in i)if(i[e]!==null){var n=i[e],o=encodeURIComponent(e);if(Array.isArray(n))for(var s=0,a=n;s<a.length;s++){var c=a[s];t.push(o+"="+encodeURIComponent(c))}else n instanceof Date?t.push(o+"="+encodeURIComponent(n.toISOString())):typeof n!==null&&typeof n=="object"?t.push(o+"="+encodeURIComponent(JSON.stringify(n))):t.push(o+"="+encodeURIComponent(n))}return t.join("&")},r}();const at=new st(F);class ct{async getFiles(){const i=await at.collection("images").getFullList();G.log(i)}}const ut=new ct,lt={setup(){return{stats:M(()=>$.fakeStats),async getPocket(){try{await ut.getFiles()}catch(r){D.error(r)}}}},components:{}},dt={class:"container-fluid"},ht={class:"row"},pt={class:"col-12"};function ft(r,i,t,e,n,o){return H(),J("div",dt,[T("div",ht,[T("div",pt,[T("button",{class:"btn btn-primary",onClick:i[0]||(i[0]=s=>e.getPocket())},"pocket")])])])}const yt=B(lt,[["render",ft]]);export{yt as default};
