"use strict";window.g_aBi=class{constructor(c,a){this.g_alR=c,this.g_aBj=a,this.g_aBk=!1,this.g_akW=()=>this.g_JS()}g_aBl(){}g_aBm(e,a,b,c){this.g_alR.g_aBn(this.g_aBj,e,a,b,c)}g_aBo(e,a,b,c){return this.g_alR.g_aBp(this.g_aBj,e,a,b,c)}g_aBq(d,a,b){this.g_alR.g_aBr()?this.g_aBm(d,a,b):this.g_alR.g_aBs()._OnMessageFromDOM({type:"event",component:this.g_aBj,handler:d,dispatchOpts:b||null,data:a,responseId:null})}g_aBt(c,a){this.g_alR.g_aBu(this.g_aBj,c,a)}g_aBv(d){for(const[a,b]of d)this.g_aBt(a,b)}g_aBw(){return this.g_alR}g_aBx(){return this.g_aBj}g_$t(){this.g_aBk||(this.g_alR.g_aBy(this.g_akW),this.g_aBk=!0)}g_$g(){this.g_aBk&&(this.g_alR.g_aBz(this.g_akW),this.g_aBk=!1)}g_JS(){}},"use strict",window.g_aBA=class extends g_aBi{constructor(c,a){super(c,a),this.g_aBB=new Map,this.g_aBC=!0,this.g_aBt("create",b=>this.g_aBD(b)),this.g_aBt("destroy",b=>this.g_aBE(b)),this.g_aBt("set-visible",b=>this.g_aBF(b)),this.g_aBt("update-position",b=>this.g_aBG(b)),this.g_aBt("update-state",b=>this.g_aBH(b)),this.g_aBt("focus",b=>this.g_aBI(b)),this.g_aBt("set-css-style",b=>this.g_aBJ(b))}g_aBK(b){this.g_aBC=!!b}g_aBL(c,e){this.g_aBt(c,b=>{const a=b.elementId,c=this.g_aBB.get(a);return e(c,b)})}g_aBD(d){const a=d.elementId,b=this.g_$T(a,d);this.g_aBB.set(a,b),d.isVisible||(b.style.display="none"),this.g_aBC&&document.body.appendChild(b)}g_$T(){throw new Error("required override")}g_aBM(){}g_aBE(d){const a=d.elementId,b=this.g_aBB.get(a);this.g_aBM(b),this.g_aBC&&b.parentElement.removeChild(b),this.g_aBB.delete(a)}g_aBN(d,a,b){b||(b={}),b.elementId=a,this.g_aBm(d,b)}g_aBO(d,a,b){b||(b={}),b.elementId=a,this.g_aBq(d,b)}g_aBF(c){if(this.g_aBC){const a=this.g_aBB.get(c.elementId);a.style.display=c.isVisible?"":"none"}}g_aBG(d){if(this.g_aBC){const a=this.g_aBB.get(d.elementId);a.style.left=d.left+"px",a.style.top=d.top+"px",a.style.width=d.width+"px",a.style.height=d.height+"px";const b=d.fontSize;null!==b&&(a.style.fontSize=b+"em")}}g_aBH(c){const a=this.g_aBB.get(c.elementId);this.g_aBP(a,c)}g_aBP(){throw new Error("required override")}g_aBI(c){const a=this.g_aBB.get(c.elementId);c.focus?a.focus():a.blur()}g_aBJ(c){const a=this.g_aBB.get(c.elementId);a.style[c.prop]=c.val}g_aBQ(b){return this.g_aBB.get(b)}},"use strict";{function n(e){return new Promise((a,b)=>{const c=document.createElement("script");c.onload=a,c.onerror=b,c.async=!1,c.src=e,document.head.appendChild(c)})}async function o(c){const a=await p(c),b=new TextDecoder("utf-8");return b.decode(a)}function p(e){return new Promise((f,b)=>{const a=new FileReader;a.onload=b=>f(b.target.result),a.onerror=c=>b(c),a.readAsArrayBuffer(e)})}const a=/(iphone|ipod|ipad)/i.test(navigator.userAgent);let b=new Audio;const c={"audio/webm; codecs=opus":!!b.canPlayType("audio/webm; codecs=opus"),"audio/ogg; codecs=opus":!!b.canPlayType("audio/ogg; codecs=opus"),"audio/webm; codecs=vorbis":!!b.canPlayType("audio/webm; codecs=vorbis"),"audio/ogg; codecs=vorbis":!!b.canPlayType("audio/ogg; codecs=vorbis"),"audio/mp4":!!b.canPlayType("audio/mp4"),"audio/mpeg":!!b.canPlayType("audio/mpeg")};b=null;const d=[];let e=0;window.RealFile=window.File;const f=[],i=new Map,g=new Map;let h=0;const j=[];self.g_aBR=function(b){if("function"!=typeof b)throw new Error("runOnStartup called without a function");j.push(b)},window.g_aBS=class b{constructor(b){this.g_aBT=b.g_aBU,this.g_aBV=null,this.g_ajX="",this.g_aBW=b.g_aBX,this.g_aBY={},this.g_aBZ=null,this.g_aB_=null,this.g_aB$=[],this.g_aCa=null,this.g_ahY=null,this.g_alL=null,this.g_aiF=-1,this.g_aCb=()=>this.g_aCc(),this.g_aCd=[],this.g_aka=b.g_aCe,"cordova"===this.g_aka&&this.g_aBT&&(console.warn("[C3 runtime] Worker mode is enabled and supported, but is disabled in Cordova due to crbug.com/939775. Reverting to DOM mode."),this.g_aBT=!1),this.g_aCf=!1,this.g_aCg=null,("html5"===this.g_aka||"playable-ad"===this.g_aka)&&"file"===location.protocol.substr(0,4)&&alert("Exported games won't work until you upload them. (When running on the file: protocol, browsers block many features from working for security reasons.)"),this.g_aBu("runtime","cordova-fetch-local-file",b=>this.g_aCh(b)),this.g_aBu("runtime","create-job-worker",b=>this.g_aCi(b)),"cordova"===this.g_aka?document.addEventListener("deviceready",()=>this.g__j(b)):this.g__j(b)}g_em(){this.g_aCj(),this.g_aBV&&(this.g_aBV.onmessage=null,this.g_aBV=null),this.g_aBZ&&(this.g_aBZ.terminate(),this.g_aBZ=null),this.g_aB_&&(this.g_aB_.g_em(),this.g_aB_=null),this.g_ahY&&(this.g_ahY.parentElement.removeChild(this.g_ahY),this.g_ahY=null)}g_aCk(){return this.g_ahY}g_fg(){return this.g_ajX}g_aBr(){return this.g_aBT}g_ann(){return this.g_aka}g_amg(){return"cordova"===this.g_aka&&a}g_aCl(){return"cordova"===this.g_aka&&!1===a}async g__j(d){if("playable-ad"===this.g_aka){this.g_aCg=self.c3_base64files,await this.g_aCm();for(let a=0,b=d.g_aCn.length;a<b;++a){const b=d.g_aCn[a].toLowerCase();this.g_aCg.hasOwnProperty(b)&&(d.g_aCn[a]=URL.createObjectURL(this.g_aCg[b]))}}if(d.g_aCo)this.g_ajX=d.g_aCo;else{const c=location.origin;this.g_ajX=("null"===c?"file:///":c)+location.pathname;const a=this.g_ajX.lastIndexOf("/");-1!==a&&(this.g_ajX=this.g_ajX.substr(0,a+1))}if(d.g_aCp)for(const[a,b]of Object.entries(d.g_aCp))this.g_aBY[a]=URL.createObjectURL(b);const a=new MessageChannel;this.g_aBV=a.port1,this.g_aBV.onmessage=b=>this._OnMessageFromRuntime(b.data),window.c3_addPortMessageHandler&&window.c3_addPortMessageHandler(b=>this.g_aCq(b)),this.g_alL=new self.g_aCr(this),await this.g_alL.g_ae_(),this.g_aCs(),"object"==typeof window.StatusBar&&window.StatusBar.hide(),"object"==typeof window.AndroidFullScreen&&window.AndroidFullScreen.immersiveMode(),await this.g_aCt(),this.g_aBT?await this.g_aCu(d,a.port2):await this.g_aCv(d,a.port2)}g_aCw(b){return this.g_aBY.hasOwnProperty(b)?this.g_aBY[b]:b.endsWith("/workermain.js")&&this.g_aBY.hasOwnProperty("workermain.js")?this.g_aBY["workermain.js"]:"playable-ad"===this.g_aka&&this.g_aCg.hasOwnProperty(b.toLowerCase())?URL.createObjectURL(this.g_aCg[b.toLowerCase()]):b}async g_aCx(f,a,g){if(f.startsWith("blob:"))return new Worker(f,g);if(this.g_amg()){const a=await this.g_Aj(this.g_aBW+f),b=new Blob([a],{type:"application/javascript"});return new Worker(URL.createObjectURL(b),g)}const c=new URL(f,a),b=location.origin!==c.origin;if(b){const d=await fetch(c);if(!d.ok)throw new Error("failed to fetch worker script");const a=await d.blob();return new Worker(URL.createObjectURL(a),g)}return new Worker(c,g)}g_aCs(){if(this.g_amg()){const f=document.documentElement.style,a=document.body.style,b=window.innerWidth<window.innerHeight,c=b?window.screen.width:window.screen.height,d=b?window.screen.height:window.screen.width;a.height=f.height=d+"px",a.width=f.width=c+"px"}}g_aCy(d){return{baseUrl:this.g_ajX,windowInnerWidth:window.innerWidth,windowInnerHeight:window.innerHeight,devicePixelRatio:window.devicePixelRatio,isFullscreen:b.g_ajh(),projectData:d.g_aCz,previewImageBlobs:window.cr_previewImageBlobs||this.g_aCg,previewProjectFileBlobs:window.cr_previewProjectFileBlobs,exportType:d.g_aCe,isDebug:-1<self.location.search.indexOf("debug"),ife:!!self.g_aCA,jobScheduler:this.g_alL.g_aCB(),supportedAudioFormats:c,opusWasmScriptUrl:window.cr_opusWasmScriptUrl||this.g_aBW+"opus.wasm.js",opusWasmBinaryUrl:window.cr_opusWasmBinaryUrl||this.g_aBW+"opus.wasm.wasm",isWKWebView:this.g_amg(),isFBInstantAvailable:"undefined"!=typeof self.FBInstant}}async g_aCu(e,a){const b=this.g_aCw(e.g_aCC);this.g_aBZ=await this.g_aCx(b,this.g_ajX,{name:"Runtime"}),this.g_ahY=document.createElement("canvas"),this.g_ahY.style.display="none";const c=this.g_ahY.transferControlToOffscreen();document.body.appendChild(this.g_ahY),window.c3canvas=this.g_ahY,this.g_aBZ.postMessage(Object.assign(this.g_aCy(e),{type:"init-runtime",isInWorker:!0,messagePort:a,canvas:c,workerDependencyScripts:e.g_aCD||[],engineScripts:e.g_aCn,projectScripts:window.g_aCE,projectScriptsStatus:self.C3_ProjectScriptsStatus}),[a,c,...this.g_alL.g_aCF()]),this.g_aB$=f.map(b=>new b(this)),this.g_aCG(),self.c3_callFunction=(c,a)=>this.g_aCa.g_QP(c,a),"preview"===this.g_aka&&(self.goToLastErrorScript=()=>this.g_aBn("runtime","go-to-last-error-script"))}async g_aCv(a,b){this.g_ahY=document.createElement("canvas"),this.g_ahY.style.display="none",document.body.appendChild(this.g_ahY),window.c3canvas=this.g_ahY,this.g_aB$=f.map(b=>new b(this)),this.g_aCG();const c=a.g_aCn.map(b=>new URL(b,this.g_ajX).toString());if(await Promise.all(c.map(a=>n(a))),a.g_aCH&&0<a.g_aCH.length){const b=self.C3_ProjectScriptsStatus;try{if(await Promise.all(a.g_aCH.map(a=>n(a[1]))),Object.values(b).some(b=>!b))return void self.setTimeout(()=>this.g_aCI(b),100)}catch(c){return console.error("[Preview] Error loading project scripts: ",c),void self.setTimeout(()=>this.g_aCI(b),100)}}if("preview"===this.g_aka&&"object"!=typeof self.g_aQ.g_aBh)return console.error("[C3 runtime] Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax."),void alert("Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax.");const d=Object.assign(this.g_aCy(a),{isInWorker:!1,messagePort:b,canvas:this.g_ahY,runOnStartupFunctions:j});this.g_aB_=self.C3_CreateRuntime(d),await self.C3_InitRuntime(this.g_aB_,d)}g_aCI(d){const a=Object.entries(d).filter(b=>!b[1]).map(b=>b[0]),b=`Failed to load project script '${a[0]}'. Check all your JavaScript code has valid syntax.`;console.error("[Preview] "+b),alert(b)}async g_aCi(){const b=await this.g_alL.g_aCJ();return{outputPort:b,transferables:[b]}}g_aBs(){if(this.g_aBT)throw new Error("not available in worker mode");return this.g_aB_}g_aBn(f,a,b,c,d){this.g_aBV.postMessage({type:"event",component:f,handler:a,dispatchOpts:c||null,data:b,responseId:null},this.g_aCf?void 0:d)}g_aBp(i,a,b,c,d){const e=h++,f=new Promise((c,a)=>{g.set(e,{resolve:c,reject:a})});return this.g_aBV.postMessage({type:"event",component:i,handler:a,dispatchOpts:c||null,data:b,responseId:e},this.g_aCf?void 0:d),f}["_OnMessageFromRuntime"](c){const a=c.type;if("event"===a)this.g_aCK(c);else if("result"===a)this.g_aCL(c);else if("runtime-ready"===a)this.g_aCM();else if("alert"===a)alert(c.message);else throw new Error(`unknown message '${a}'`)}g_aCK(j){const k=j.component,b=j.handler,a=j.data,c=j.responseId,d=i.get(k);if(!d)return void console.warn(`[DOM] No event handlers for component '${k}'`);const e=d.get(b);if(!e)return void console.warn(`[DOM] No handler '${b}' for component '${k}'`);let f=null;try{f=e(a)}catch(d){return console.error(`Exception in '${k}' handler '${b}':`,d),void(null!==c&&this.g_aCN(c,!1,d.toString()))}null!==c&&(f&&f.then?f.then(b=>this.g_aCN(c,!0,b)).catch(d=>{console.error(`Rejection from '${k}' handler '${b}':`,d),this.g_aCN(c,!1,d.toString())}):this.g_aCN(c,!0,f))}g_aCN(e,a,b){let c;b&&b.transferables&&(c=b.transferables),this.g_aBV.postMessage({type:"result",responseId:e,isOk:a,result:b},c)}g_aCL(f){const a=f.responseId,b=f.isOk,c=f.result,d=g.get(a);b?d.resolve(c):d.reject(c),g.delete(a)}g_aBu(e,a,b){let c=i.get(e);if(c||(c=new Map,i.set(e,c)),c.has(a))throw new Error(`[DOM] Component '${e}' already has handler '${a}'`);c.set(a,b)}static g_aCO(b){if(f.includes(b))throw new Error("DOM handler already added");f.push(b)}g_aCG(){for(const b of this.g_aB$)if("runtime"===b.g_aBx())return void(this.g_aCa=b);throw new Error("cannot find runtime DOM handler")}g_aCq(b){this.g_aBn("debugger","message",b)}g_aCM(){for(const b of this.g_aB$)b.g_aBl()}static g_ajh(){return!!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement)}async g_aCP(){return await this.g_aBp("runtime","get-remote-preview-status-info")}g_aBy(b){this.g_aCd.push(b),this.g_aCQ()}g_aBz(c){const a=this.g_aCd.indexOf(c);if(-1===a)throw new Error("invalid callback");this.g_aCd.splice(a,1),this.g_aCd.length||this.g_aCj()}g_aCQ(){-1===this.g_aiF&&this.g_aCd.length&&(this.g_aiF=requestAnimationFrame(this.g_aCb))}g_aCj(){-1!==this.g_aiF&&(cancelAnimationFrame(this.g_aiF),this.g_aiF=-1)}g_aCc(){this.g_aiF=-1;for(const b of this.g_aCd)b();this.g_aCQ()}g_aCR(b){this.g_aCa.g_aCR(b)}g_aCS(b){this.g_aCa.g_aCS(b)}g_aCT(){this.g_aCa.g_aCT()}g_aCU(b){this.g_aCa.g_aCU(b)}g_AG(b){return!!c[b]}async g_abh(c){const a=await this.g_aBp("runtime","opus-decode",{arrayBuffer:c},null,[c]);return new Float32Array(a)}g_fS(b){return /^(?:[a-z]+:)?\/\//.test(b)||"data:"===b.substr(0,5)||"blob:"===b.substr(0,5)}g_fT(b){return!this.g_fS(b)}async g_aCh(c){const a=c.filename;switch(c.as){case"text":return await this.g_Ak(a);case"buffer":return await this.g_Aj(a);default:throw new Error("unsupported type");}}g_aCV(c){const d=window.cordova.file.applicationDirectory+"www/"+c.toLowerCase();return new Promise((e,a)=>{window.resolveLocalFileSystemURL(d,c=>{c.file(e,a)},a)})}async g_Ak(b){const a=await this.g_aCV(b);return await o(a)}g_aCW(){if(d.length&&!(8<=e)){e++;const b=d.shift();this.g_aCX(b.filename,b.g_aCY,b.g_aCZ)}}g_Aj(f){return new Promise((g,b)=>{d.push({filename:f,g_aCY:b=>{e--,this.g_aCW(),g(b)},g_aCZ:c=>{e--,this.g_aCW(),b(c)}}),this.g_aCW()})}async g_aCX(c,a,b){try{const b=await this.g_aCV(c),d=await p(b);a(d)}catch(c){b(c)}}async g_aCm(){const d=[];for(const[a,b]of Object.entries(this.g_aCg))d.push(this.g_aC_(a,b));await Promise.all(d)}async g_aC_(e,a){if("object"==typeof a)this.g_aCg[e]=new Blob([a.str],{type:a.type});else{const b=await fetch(a),c=await b.blob();this.g_aCg[e]=c}}g_aCt(){let e=null;const f=new Promise(a=>e=a),b=new ArrayBuffer(1),c=new MessageChannel;return c.port2.onmessage=a=>{a.data&&a.data.arrayBuffer||(this.g_aCf=!0,console.warn("MessageChannel transfers determined to be broken. Disabling transferables.")),e()},c.port1.postMessage({arrayBuffer:b},[b]),f}}}{function k(b){return b.sourceCapabilities&&b.sourceCapabilities.firesTouchEvents||b.originalEvent&&b.originalEvent.sourceCapabilities&&b.originalEvent.sourceCapabilities.firesTouchEvents}function a(e){return new Promise((a,b)=>{const c=new Image;c.onload=()=>a(c),c.onerror=c=>b(c),c.src=e})}async function l(b){const d=URL.createObjectURL(b);try{return await a(d)}finally{URL.revokeObjectURL(d)}}function m(b){do{if(b.parentNode&&b.hasAttribute("contenteditable"))return!0;b=b.parentNode}while(b);return!1}function c(b){(b.metaKey||b.ctrlKey)&&b.preventDefault()}function b(){try{return window.parent&&window.parent.document.hasFocus()}catch(b){return!1}}const e={dispatchRuntimeEvent:!0,dispatchUserScriptEvent:!0},d={dispatchUserScriptEvent:!0};self.C3_RasterSvgImage=async function(f,a,b){const c=document.createElement("canvas");c.width=a,c.height=b;const d=c.getContext("2d");return d.drawImage(f,0,0,a,b),c};let f=!1;document.addEventListener("pause",()=>f=!0),document.addEventListener("resume",()=>f=!1);const g=class extends g_aBi{constructor(d){super(d,"runtime"),this.g_aC$=!0,this.g_aDa=-1,this.g_aDb="any",this.g_aDc=!1,this.g_aDd=!1,this.g_aDe=null,d.g_aBu("canvas","update-size",b=>this.g_aDf(b)),d.g_aBu("runtime","invoke-download",b=>this.g_aDg(b)),d.g_aBu("runtime","raster-svg-image",b=>this.g_aDh(b)),d.g_aBu("runtime","set-target-orientation",b=>this.g_aDi(b)),d.g_aBu("runtime","register-sw",()=>this.g_aDj()),d.g_aBu("runtime","post-to-debugger",b=>this.g_aDk(b)),d.g_aBu("runtime","go-to-script",b=>this.g_aDk(b)),d.g_aBu("runtime","before-start-ticking",()=>this.g_aDl()),d.g_aBu("runtime","debug-highlight",b=>this.g_aDm(b)),d.g_aBu("runtime","enable-device-orientation",()=>this.g_aDn()),d.g_aBu("runtime","enable-device-motion",()=>this.g_aDo());const f=new Set(["input","textarea","datalist"]);window.addEventListener("contextmenu",b=>{const a=b.target,c=a.tagName.toLowerCase();f.has(c)||m(a)||b.preventDefault()}),window.addEventListener("selectstart",b=>b.preventDefault()),window.addEventListener("gesturehold",b=>b.preventDefault()),window.addEventListener("touchstart",b=>b.preventDefault(),{passive:!1}),this.g_aDp=0,window.addEventListener("mousedown",b=>{1===b.button&&b.preventDefault()}),window.addEventListener("mousewheel",c,{passive:!1}),window.addEventListener("wheel",c,{passive:!1}),window.addEventListener("resize",()=>this.g_aiW()),this.g_aDq=new Set,this.g_aDr=new WeakSet,this.g_aDs=!1}g_aDl(){return document.addEventListener("visibilitychange",()=>this.g_alN(document.hidden)),document.addEventListener("pause",()=>this.g_alN(!0)),document.addEventListener("resume",()=>this.g_alN(!1)),{isSuspended:!!(document.hidden||f)}}g_aBl(){window.addEventListener("focus",()=>this.g_aDt("window-focus")),window.addEventListener("blur",()=>{this.g_aDt("window-blur",{parentHasFocus:b()}),this.g_aDp=0}),window.addEventListener("fullscreenchange",()=>this.g_aiX()),window.addEventListener("webkitfullscreenchange",()=>this.g_aiX()),window.addEventListener("mozfullscreenchange",()=>this.g_aiX()),window.addEventListener("fullscreenerror",b=>this.g_aiY(b)),window.addEventListener("webkitfullscreenerror",b=>this.g_aiY(b)),window.addEventListener("mozfullscreenerror",b=>this.g_aiY(b)),window.addEventListener("keydown",b=>this.g_aDu("keydown",b)),window.addEventListener("keyup",b=>this.g_aDu("keyup",b)),window.addEventListener("dblclick",b=>this.g_aDv("dblclick",b,e)),window.addEventListener("wheel",b=>this.g_aDw("wheel",b)),"undefined"==typeof PointerEvent?(window.addEventListener("mousedown",b=>this.g_aDx("pointerdown",b)),window.addEventListener("mousemove",b=>this.g_aDx("pointermove",b)),window.addEventListener("mouseup",b=>this.g_aDx("pointerup",b)),window.addEventListener("touchstart",b=>this.g_aDy("pointerdown",b)),window.addEventListener("touchmove",b=>this.g_aDy("pointermove",b)),window.addEventListener("touchend",b=>this.g_aDy("pointerup",b)),window.addEventListener("touchcancel",b=>this.g_aDy("pointercancel",b))):(window.addEventListener("pointerdown",b=>this.g_aDz("pointerdown",b)),window.addEventListener("pointermove",b=>this.g_aDz("pointermove",b)),window.addEventListener("pointerup",b=>this.g_aDz("pointerup",b)),window.addEventListener("pointercancel",b=>this.g_aDz("pointercancel",b))),window.addEventListener("mousedown",b=>this.g_aDv("mousedown",b,d)),window.addEventListener("mousemove",b=>this.g_aDv("mousemove",b,d)),window.addEventListener("mouseup",b=>this.g_aDv("mouseup",b,d));const c=()=>this.g_aCT();window.addEventListener("pointerup",c,!0),window.addEventListener("touchend",c,!0),window.addEventListener("click",c,!0),window.addEventListener("keydown",c,!0),window.addEventListener("gamepadconnected",c,!0)}g_aDn(){this.g_aDc||(this.g_aDc=!0,window.addEventListener("deviceorientation",b=>this.g_atL(b)))}g_aDo(){this.g_aDd||(this.g_aDd=!0,window.addEventListener("devicemotion",b=>this.g_atM(b)))}g_aDt(c,a){this.g_aBm(c,a||null,{dispatchRuntimeEvent:!0})}g_aiW(){const c=window.innerWidth,a=window.innerHeight;this.g_aDt("window-resize",{innerWidth:c,innerHeight:a,devicePixelRatio:window.devicePixelRatio}),this.g_alR.g_amg()&&(-1!==this.g_aDa&&clearTimeout(this.g_aDa),this.g_aDA(c,a,0))}g_aDB(d,a,b){-1!==this.g_aDa&&clearTimeout(this.g_aDa),this.g_aDa=setTimeout(()=>this.g_aDA(d,a,b),48)}g_aDA(f,a,b){const c=window.innerWidth,d=window.innerHeight;this.g_aDa=-1,c!=f||d!=a?this.g_aDt("window-resize",{innerWidth:c,innerHeight:d,devicePixelRatio:window.devicePixelRatio}):10>b&&this.g_aDB(c,d,b+1)}g_aDi(b){this.g_aDb=b.targetOrientation}g_aDC(){const c=this.g_aDb;if(screen.orientation&&screen.orientation.lock)screen.orientation.lock(c).catch(b=>console.warn("[Construct 3] Failed to lock orientation: ",b));else try{let a=!1;screen.lockOrientation?a=screen.lockOrientation(c):screen.webkitLockOrientation?a=screen.webkitLockOrientation(c):screen.mozLockOrientation?a=screen.mozLockOrientation(c):screen.msLockOrientation&&(a=screen.msLockOrientation(c)),a||console.warn("[Construct 3] Failed to lock orientation")}catch(b){console.warn("[Construct 3] Failed to lock orientation: ",b)}}g_aiX(){const b=g_aBS.g_ajh();b&&"any"!==this.g_aDb&&this.g_aDC(),this.g_aBm("fullscreenchange",{isFullscreen:b,innerWidth:window.innerWidth,innerHeight:window.innerHeight})}g_aiY(b){console.warn("[Construct 3] Fullscreen request failed: ",b),this.g_aBm("fullscreenerror",{isFullscreen:g_aBS.g_ajh(),innerWidth:window.innerWidth,innerHeight:window.innerHeight})}g_alN(b){b?this.g_alR.g_aCj():this.g_alR.g_aCQ(),this.g_aBm("visibilitychange",{hidden:b})}g_aDu(c,a){this.g_aBq(c,{code:a.code,key:a.key,which:a.which,repeat:a.repeat,altKey:a.altKey,ctrlKey:a.ctrlKey,metaKey:a.metaKey,shiftKey:a.shiftKey,timeStamp:a.timeStamp},e)}g_aDw(c,a){this.g_aBm(c,{clientX:a.clientX,clientY:a.clientY,deltaX:a.deltaX,deltaY:a.deltaY,deltaZ:a.deltaZ,deltaMode:a.deltaMode,timeStamp:a.timeStamp},e)}g_aDv(a,b,c){k(b)||("mousedown"===a&&window!==window.top&&window.focus(),this.g_aBq(a,{button:b.button,buttons:b.buttons,clientX:b.clientX,clientY:b.clientY,timeStamp:b.timeStamp},c))}g_aDx(a,f){if(!k(f)){"pointerdown"===a&&window!==window.top&&window.focus();const b=this.g_aDp;"pointerdown"===a&&0!==b?a="pointermove":"pointerup"==a&&0!==f.buttons&&(a="pointermove"),this.g_aBq(a,{pointerId:1,pointerType:"mouse",button:f.button,buttons:f.buttons,lastButtons:b,clientX:f.clientX,clientY:f.clientY,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,timeStamp:f.timeStamp},e),this.g_aDp=f.buttons}}g_aDz(d,a){"pointerdown"===d&&window!==window.top&&window.focus();let b=0;"mouse"===a.pointerType&&(b=this.g_aDp),this.g_aBq(d,{pointerId:a.pointerId,pointerType:a.pointerType,button:a.button,buttons:a.buttons,lastButtons:b,clientX:a.clientX,clientY:a.clientY,width:a.width||0,height:a.height||0,pressure:a.pressure||0,tangentialPressure:a.tangentialPressure||0,tiltX:a.tiltX||0,tiltY:a.tiltY||0,twist:a.twist||0,timeStamp:a.timeStamp},e),"mouse"===a.pointerType&&(this.g_aDp=a.buttons)}g_aDy(f,a){"pointerdown"===f&&window!==window.top&&window.focus();for(let b=0,c=a.changedTouches.length;b<c;++b){const c=a.changedTouches[b];this.g_aBq(f,{pointerId:c.identifier,pointerType:"touch",button:0,buttons:0,lastButtons:0,clientX:c.clientX,clientY:c.clientY,width:2*(c.radiusX||c.webkitRadiusX||0),height:2*(c.radiusY||c.webkitRadiusY||0),pressure:c.force||c.webkitForce||0,tangentialPressure:0,tiltX:0,tiltY:0,twist:c.rotationAngle||0,timeStamp:a.timeStamp},e)}}g_atL(b){this.g_aDt("deviceorientation",{alpha:b.alpha||0,beta:b.beta||0,gamma:b.gamma||0,timeStamp:b.timeStamp})}g_atM(j){let a=0,k=0,l=0,m=0,n=0,o=0;const p=j.accelerationIncludingGravity;p&&(a=p.x||0,k=p.y||0,l=p.z||0);const h=j.acceleration;h&&(m=h.x||0,n=h.y||0,o=h.z||0),this.g_aDt("devicemotion",{acceleration:{x:m,y:n,z:o},accelerationWithG:{x:a,y:k,z:l},timeStamp:j.timeStamp})}g_aDf(d){const a=this.g_aBw(),b=a.g_aCk();b.style.width=d.styleWidth+"px",b.style.height=d.styleHeight+"px",b.style.marginLeft=d.marginLeft+"px",b.style.marginTop=d.marginTop+"px",a.g_aCs(),this.g_aC$&&(b.style.display="",this.g_aC$=!1)}g_aDg(f){const b=f.url,c=f.filename,d=document.createElement("a"),e=document.body;d.textContent=c,d.href=b,d.download=c,e.appendChild(d),d.click(),e.removeChild(d)}async g_aDh(c){const a=c.blob,b=c.width,d=c.height,e=await l(a),f=await self.C3_RasterSvgImage(e,b,d);return await createImageBitmap(f)}g_aCT(){const c=[...this.g_aDq];if(this.g_aDq.clear(),!this.g_aDs)for(const d of c){const b=d.play();b&&b.catch(()=>{this.g_aDr.has(d)||this.g_aDq.add(d)})}}g_aCR(c){if("function"!=typeof c.play)throw new Error("missing play function");this.g_aDr.delete(c);let a;try{a=c.play()}catch(a){return void this.g_aDq.add(c)}a&&a.catch(()=>{this.g_aDr.has(c)||this.g_aDq.add(c)})}g_aCS(b){this.g_aDq.delete(b),this.g_aDr.add(b)}g_aCU(b){this.g_aDs=!!b}g_aDm(d){const a=d.show;if(!a)return void(this.g_aDe&&(this.g_aDe.style.display="none"));this.g_aDe||(this.g_aDe=document.createElement("div"),this.g_aDe.id="inspectOutline",document.body.appendChild(this.g_aDe));const b=this.g_aDe;b.style.display="",b.style.left=d.left-1+"px",b.style.top=d.top-1+"px",b.style.width=d.width+2+"px",b.style.height=d.height+2+"px",b.textContent=d.name}g_aDj(){window.C3_RegisterSW&&window.C3_RegisterSW()}g_aDk(b){window.c3_postToMessagePort&&(b.from="runtime",window.c3_postToMessagePort(b))}g_QP(c,a){return this.g_aBo("js-invoke-function",{name:c,params:a})}};g_aBS.g_aCO(g)}{const c=document.currentScript.src;self.g_aCr=class{constructor(a){this.g_aDD=a,this.g_ajX=c?c.substr(0,c.lastIndexOf("/")+1):a.g_fg(),this.g_anV=Math.min(navigator.hardwareConcurrency||2,16),this.g_aDE=null,this.g_aDF=[],this.g_anT=null,this.g_aDG=null}async g_ae_(){if(this.g_aDH)throw new Error("already initialised");this.g_aDH=!0;const c=this.g_aDD.g_aCw("dispatchworker.js");this.g_aDE=await this.g_aDD.g_aCx(c,this.g_ajX,{name:"DispatchWorker"});const a=new MessageChannel;this.g_anT=a.port1,this.g_aDE.postMessage({type:"_init","in-port":a.port2},[a.port2]),this.g_aDG=await this.g_aCJ()}async g_aCJ(){const f=this.g_aDF.length,a=this.g_aDD.g_aCw("jobworker.js"),b=await this.g_aDD.g_aCx(a,this.g_ajX,{name:"JobWorker"+f}),c=new MessageChannel,d=new MessageChannel;return this.g_aDE.postMessage({type:"_addJobWorker",port:c.port1},[c.port1]),b.postMessage({type:"init",number:f,"dispatch-port":c.port2,"output-port":d.port2},[c.port2,d.port2]),this.g_aDF.push(b),d.port1}g_aCB(){return{inputPort:this.g_anT,outputPort:this.g_aDG,maxNumWorkers:this.g_anV}}g_aCF(){return[this.g_anT,this.g_aDG]}}}if("use strict",window.C3_IsSupported){"undefined"!=typeof OffscreenCanvas;window.c3_runtimeInterface=new g_aBS({g_aBU:!1,g_aCC:"workermain.js",g_aCn:["scripts/c3runtime.js"],g_aBX:"scripts/",g_aCD:[],g_aCe:"html5"})}{function g(b){b.stopPropagation()}const a=class extends g_aBA{constructor(b){super(b,"button")}g_$T(a,b){const c=document.createElement("input"),d=b.isCheckbox;let e=c;if(d){c.type="checkbox";const b=document.createElement("label");b.appendChild(c),b.appendChild(document.createTextNode("")),b.style.fontFamily="sans-serif",b.style.userSelect="none",b.style.webkitUserSelect="none",b.style.display="inline-block",b.style.color="black",e=b}else c.type="button";return e.style.position="absolute",e.addEventListener("touchstart",g),e.addEventListener("touchmove",g),e.addEventListener("touchend",g),e.addEventListener("mousedown",g),e.addEventListener("mouseup",g),e.addEventListener("keydown",g),e.addEventListener("keyup",g),c.addEventListener("click",()=>this.g_aBO("click",a,{isChecked:c.checked})),c.id=b.id,this.g_aBP(e,b),e}g_aDJ(b){return"input"===b.tagName.toLowerCase()?b:b.firstChild}g_aBP(d,a){const b=this.g_aDJ(d);b.checked=a.isChecked,b.disabled=!a.isEnabled,d.title=a.title,d===b?b.value=a.text:d.lastChild.textContent=a.text}};g_aBS.g_aCO(a)}{const b=class extends g_aBi{constructor(b){super(b,"mouse"),this.g_aBt("cursor",b=>this.g_aDY(b))}g_aDY(b){document.body.style.cursor=b}};g_aBS.g_aCO(b)}{const b=class extends g_aBi{constructor(b){super(b,"browser"),this.g_aka="",this.g_aBt("get-initial-state",b=>this.g_aDK(b)),this.g_aBt("ready-for-sw-messages",()=>this.g_aDL()),this.g_aBt("alert",b=>this.g_aDM(b)),this.g_aBt("close",()=>this.g_aDN()),this.g_aBt("set-focus",b=>this.g_aBI(b)),this.g_aBt("vibrate",b=>this.g_aDO(b)),this.g_aBt("lock-orientation",b=>this.g_aDP(b)),this.g_aBt("unlock-orientation",()=>this.g_aDQ()),this.g_aBt("navigate",b=>this.g_aDR(b)),this.g_aBt("request-fullscreen",b=>this.g_aDS(b)),this.g_aBt("exit-fullscreen",()=>this.g_aDT()),window.addEventListener("online",()=>this.g_awB(!0)),window.addEventListener("offline",()=>this.g_awB(!1)),document.addEventListener("backbutton",()=>this.g_aDU()),"undefined"!=typeof Windows&&Windows.UI.Core.SystemNavigationManager.getForCurrentView().addEventListener("backrequested",b=>this.g_aDV(b))}g_aDK(b){return this.g_aka=b.exportType,{location:location.toString(),isOnline:!!navigator.onLine,referrer:document.referrer,title:document.title,isCookieEnabled:!!navigator.cookieEnabled,screenWidth:screen.width,screenHeight:screen.height,windowOuterWidth:window.outerWidth,windowOuterHeight:window.outerHeight,isScirraArcade:"undefined"!=typeof window.is_scirra_arcade}}g_aDL(){window.C3_RegisterSW&&window.OfflineClientInfo&&window.OfflineClientInfo.SetMessageCallback(b=>this.g_aBm("sw-message",b.data))}g_awB(b){this.g_aBm("online-state",{isOnline:b})}g_aDU(){this.g_aBm("backbutton")}g_aDV(b){b.handled=!0,this.g_aBm("backbutton")}g_aDW(){return"nwjs"===this.g_aka?nw.Window.get():null}g_aDM(b){alert(b.message)}g_aDN(){navigator.app&&navigator.app.exitApp?navigator.app.exitApp():navigator.device&&navigator.device.exitApp?navigator.device.exitApp():window.close()}g_aBI(c){const d=c.isFocus;if("nwjs"===this.g_aka){const b=this.g_aDW();d?b.focus():b.blur()}else d?window.focus():window.blur()}g_aDO(b){navigator.vibrate&&navigator.vibrate(b.pattern)}g_aDP(c){const d=c.orientation;if(screen.orientation&&screen.orientation.lock)screen.orientation.lock(d).catch(b=>console.warn("[Construct 3] Failed to lock orientation: ",b));else try{let b=!1;screen.lockOrientation?b=screen.lockOrientation(d):screen.webkitLockOrientation?b=screen.webkitLockOrientation(d):screen.mozLockOrientation?b=screen.mozLockOrientation(d):screen.msLockOrientation&&(b=screen.msLockOrientation(d)),b||console.warn("[Construct 3] Failed to lock orientation")}catch(b){console.warn("[Construct 3] Failed to lock orientation: ",b)}}g_aDQ(){try{screen.orientation&&screen.orientation.unlock?screen.orientation.unlock():screen.unlockOrientation?screen.unlockOrientation():screen.webkitUnlockOrientation?screen.webkitUnlockOrientation():screen.mozUnlockOrientation?screen.mozUnlockOrientation():screen.msUnlockOrientation&&screen.msUnlockOrientation()}catch(b){}}g_aDR(e){const a=e.type;if("back"===a)navigator.app&&navigator.app.backHistory?navigator.app.backHistory():window.back();else if("forward"===a)window.forward();else if("home"===a)window.g_aDX();else if("reload"===a)location.reload();else if("url"===a){const a=e.url,b=e.target,c=e.exportType;"windows-uwp"===c&&"undefined"!=typeof Windows?Windows.System.Launcher.launchUriAsync(new Windows.Foundation.Uri(a)):navigator.app&&navigator.app.loadUrl?navigator.app.loadUrl(a,{openExternal:!0}):"cordova"===c?window.open(a,"_system"):"preview"===c?window.open(a,"_blank"):!this.g_awA&&(2===b?window.top.location=a:1===b?window.parent.location=a:window.location=a)}else if("new-window"===a){const a=e.url,b=e.tag,c=e.exportType;"windows-uwp"===c&&"undefined"!=typeof Windows?Windows.System.Launcher.launchUriAsync(new Windows.Foundation.Uri(a)):navigator.app&&navigator.app.loadUrl?navigator.app.loadUrl(a,{openExternal:!0}):"cordova"===c?window.open(a,"_system"):window.open(a,b)}}g_aDS(e){const a={navigationUI:"auto"},b=e.navUI;1===b?a.navigationUI="hide":2===b&&(a.navigationUI="show");const c=document.documentElement;c.requestFullscreen?c.requestFullscreen(a):c.mozRequestFullScreen?c.mozRequestFullScreen(a):c.msRequestFullscreen?c.msRequestFullscreen(a):c.webkitRequestFullScreen&&("undefined"==typeof Element.ALLOW_KEYBOARD_INPUT?c.webkitRequestFullScreen():c.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT))}g_aDT(){document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen?document.msExitFullscreen():document.webkitCancelFullScreen&&document.webkitCancelFullScreen()}};g_aBS.g_aCO(b)}{function g(b){b.stopPropagation()}function a(b){13!==b.which&&27!==b.which&&b.stopPropagation()}const b=class extends g_aBA{constructor(b){super(b,"text-input"),this.g_aBL("scroll-to-bottom",b=>this.g_aDI(b))}g_$T(b,c){let d;const h=c.type;return"textarea"===h?(d=document.createElement("textarea"),d.style.resize="none"):(d=document.createElement("input"),d.type=h),d.style.position="absolute",d.autocomplete="off",d.addEventListener("touchstart",g),d.addEventListener("touchmove",g),d.addEventListener("touchend",g),d.addEventListener("mousedown",g),d.addEventListener("mouseup",g),d.addEventListener("keydown",a),d.addEventListener("keyup",a),d.addEventListener("click",c=>{c.stopPropagation(),this.g_aBO("click",b)}),d.addEventListener("dblclick",c=>{c.stopPropagation(),this.g_aBO("dblclick",b)}),d.addEventListener("input",()=>this.g_aBN("change",b,{text:d.value})),d.id=c.id,this.g_aBP(d,c),d}g_aBP(c,a){c.value=a.text,c.placeholder=a.placeholder,c.title=a.title,c.disabled=!a.isEnabled,c.readOnly=a.isReadOnly,c.spellcheck=a.spellCheck}g_aDI(b){b.scrollTop=b.scrollHeight}};g_aBS.g_aCO(b)}