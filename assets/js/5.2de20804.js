(window.webpackJsonp=window.webpackJsonp||[]).push([[5,6,7,8,9,10,11,12,15,16,17],{309:function(e,t,r){},310:function(e,t,r){},311:function(e,t,r){},312:function(e,t,r){},313:function(e,t,r){},314:function(e,t,r){},315:function(e,t,r){},337:function(e,t,r){"use strict";var n=r(309);r.n(n).a},338:function(e,t,r){"use strict";var n=r(310);r.n(n).a},339:function(e,t,r){"use strict";var n=r(311);r.n(n).a},340:function(e,t,r){"use strict";var n=r(312);r.n(n).a},341:function(e,t,r){"use strict";var n=r(313);r.n(n).a},342:function(e,t,r){"use strict";var n=r(314);r.n(n).a},343:function(e,t,r){"use strict";var n=r(315);r.n(n).a},344:function(e,t,r){},353:function(e,t,r){"use strict";r.r(t);r(98),r(182),r(99);var n={components:{QrcodeStream:r(307).c},data:function(){var e=[{text:"None",value:!1},{text:"Red square (default)",value:!0},{text:"Green text",value:this.paintGreenText},{text:"Blue dots",value:this.paintBlueDots}];return{selected:e[2],options:e,result:null}},methods:{paintBlueDots:function(e,t){var r=[e.topLeftFinderPattern,e.topRightFinderPattern,e.bottomLeftFinderPattern];t.fillStyle="#007bff",r.forEach((function(e){var r=e.x,n=e.y;t.fillRect(r-5,n-5,10,10)}))},paintGreenText:function(e,t){var r=[e.topLeftCorner,e.topRightCorner,e.bottomLeftCorner,e.bottomRightCorner],n=r.reduce((function(e,t){return t.x+e}),0)/4,o=r.reduce((function(e,t){return t.y+e}),0)/4;t.font="bold 24px sans-serif",t.textAlign="center",t.lineWidth=3,t.strokeStyle="#35495e",t.strokeText(this.result,n,o),t.fillStyle="#5cb984",t.fillText(this.result,n,o)},onDecode:function(e){this.result=e},logErrors:function(e){e.catch(console.error)}}},o=r(41),a=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("p",[e._v("\n    Track function:\n    "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.selected,expression:"selected"}],on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.selected=t.target.multiple?r:r[0]}}},e._l(e.options,(function(t){return r("option",{domProps:{value:t}},[e._v("\n        "+e._s(t.text)+"\n      ")])})),0)]),e._v(" "),r("p",{staticClass:"decode-result"},[e._v("\n    Last result: "),r("b",[e._v(e._s(e.result))])]),e._v(" "),r("qrcode-stream",{key:e._uid,attrs:{track:e.selected.value},on:{decode:e.onDecode,init:e.logErrors}})],1)}),[],!1,null,null,null);t.default=a.exports},354:function(e,t,r){"use strict";r.r(t);r(68),r(97);var n=r(42),o={components:{QrcodeStream:r(307).c},data:function(){return{result:"",error:""}},methods:{onDecode:function(e){this.result=e},onInit:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,e;case 3:r.next=8;break;case 5:r.prev=5,r.t0=r.catch(0),"NotAllowedError"===r.t0.name?t.error="ERROR: you need to grant camera access permisson":"NotFoundError"===r.t0.name?t.error="ERROR: no camera on this device":"NotSupportedError"===r.t0.name?t.error="ERROR: secure context required (HTTPS, localhost)":"NotReadableError"===r.t0.name?t.error="ERROR: is the camera already in use?":"OverconstrainedError"===r.t0.name?t.error="ERROR: installed cameras are not suitable":"StreamApiNotSupportedError"===r.t0.name&&(t.error="ERROR: Stream API is not supported in this browser");case 8:case"end":return r.stop()}}),r,null,[[0,5]])})))()}}},a=(r(337),r(41)),c=Object(a.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("p",{staticClass:"error"},[e._v(e._s(e.error))]),e._v(" "),r("p",{staticClass:"decode-result"},[e._v("Last result: "),r("b",[e._v(e._s(e.result))])]),e._v(" "),r("qrcode-stream",{on:{decode:e.onDecode,init:e.onInit}})],1)}),[],!1,null,"18b412d2",null);t.default=c.exports},355:function(e,t,r){"use strict";r.r(t);r(68),r(97);var n=r(42),o={components:{QrcodeStream:r(307).c},data:function(){return{camera:"rear",noRearCamera:!1,noFrontCamera:!1}},methods:{switchCamera:function(){switch(this.camera){case"front":this.camera="rear";break;case"rear":this.camera="front"}},onInit:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o,a;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,e;case 3:r.next=13;break;case 5:r.prev=5,r.t0=r.catch(0),n="front"===t.camera,o="rear"===t.camera,a="OverconstrainedError"===r.t0.name,o&&a&&(t.noRearCamera=!0),n&&a&&(t.noFrontCamera=!0),console.error(r.t0);case 13:case"end":return r.stop()}}),r,null,[[0,5]])})))()}}},a=(r(338),r(41)),c=Object(a.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.noFrontCamera?r("p",{staticClass:"error"},[e._v("\n    You don't seem to have a front camera on your device\n  ")]):e._e(),e._v(" "),e.noRearCamera?r("p",{staticClass:"error"},[e._v("\n    You don't seem to have a rear camera on your device\n  ")]):e._e(),e._v(" "),r("qrcode-stream",{attrs:{camera:e.camera},on:{init:e.onInit}},[r("button",{on:{click:e.switchCamera}},[r("img",{attrs:{src:e.$withBase("/camera-switch.svg"),alt:"switch camera"}})])])],1)}),[],!1,null,"7f62d3b6",null);t.default=c.exports},356:function(e,t,r){"use strict";r.r(t);r(68),r(97);var n=r(42),o={components:{QrcodeDropZone:r(307).b},data:function(){return{result:null,error:null,dragover:!1}},methods:{onDetect:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,e;case 3:n=r.sent,o=n.content,t.result=o,t.error=null,r.next=12;break;case 9:r.prev=9,r.t0=r.catch(0),"DropImageFetchError"===r.t0.name?t.error="Sorry, you can't load cross-origin images :/":"DropImageDecodeError"===r.t0.name?t.error="Ok, that's not an image. That can't be decoded.":t.error="Ups, what kind of error is this?! "+r.t0.message;case 12:case"end":return r.stop()}}),r,null,[[0,9]])})))()},logErrors:function(e){e.catch(console.error)},onDragOver:function(e){this.dragover=e}}},a=(r(339),r(41)),c=Object(a.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("p",{staticClass:"decode-result"},[e._v("Last result: "),r("b",[e._v(e._s(e.result))])]),e._v(" "),null!==e.error?r("p",{staticClass:"drop-error"},[e._v("\n    "+e._s(e.error)+"\n  ")]):e._e(),e._v(" "),r("qrcode-drop-zone",{on:{detect:e.onDetect,dragover:e.onDragOver,init:e.logErrors}},[r("div",{staticClass:"drop-area",class:{dragover:e.dragover}},[e._v("\n      DROP SOME IMAGES HERE\n    ")])])],1)}),[],!1,null,null,null);t.default=c.exports},357:function(e,t,r){"use strict";r.r(t);var n={components:{QrcodeCapture:r(307).a},data:function(){return{result:""}},methods:{onDecode:function(e){this.result=e}}},o=r(41),a=Object(o.a)(n,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("p",{staticClass:"decode-result"},[this._v("Last result: "),t("b",[this._v(this._s(this.result))])]),this._v(" "),t("qrcode-capture",{on:{decode:this.onDecode}})],1)}),[],!1,null,null,null);t.default=a.exports},358:function(e,t,r){"use strict";r.r(t);r(68),r(97);var n=r(42),o=r(307),a={components:{QrcodeStream:o.c,QrcodeDropZone:o.b,QrcodeCapture:o.a},data:function(){return{result:"",noStreamApiSupport:!1}},methods:{onDecode:function(e){this.result=e},logErrors:function(e){e.catch(console.error)},onInit:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,e;case 3:r.next=8;break;case 5:r.prev=5,r.t0=r.catch(0),"StreamApiNotSupportedError"===r.t0.name&&(t.noStreamApiSupport=!0);case 8:case"end":return r.stop()}}),r,null,[[0,5]])})))()}}},c=r(41),s=Object(c.a)(a,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("p",{staticClass:"decode-result"},[e._v("Last result: "),r("b",[e._v(e._s(e.result))])]),e._v(" "),r("qrcode-drop-zone",{on:{decode:e.onDecode,init:e.logErrors}},[r("qrcode-stream",{on:{decode:e.onDecode,init:e.onInit}})],1),e._v(" "),e.noStreamApiSupport?r("qrcode-capture",{on:{decode:e.onDecode}}):e._e()],1)}),[],!1,null,null,null);t.default=s.exports},359:function(e,t,r){"use strict";r.r(t);var n={components:{QrcodeStream:r(307).c},data:function(){return{fullscreen:!1}},computed:{fullscreenIcon:function(){return this.fullscreen?"/fullscreen-exit.svg":"/fullscreen.svg"}},watch:{fullscreen:function(e){e?this.requestFullscreen():this.exitFullscreen()}},methods:{onFullscreenChange:function(e){this.fullscreen=null!==document.fullscreenElement},requestFullscreen:function(){var e=this.$refs.wrapper;e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen()},exitFullscreen:function(){document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen()},logErrors:function(e){e.catch(console.error)}}},o=(r(340),r(41)),a=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{ref:"wrapper",class:{fullscreen:e.fullscreen},on:{fullscreenchange:e.onFullscreenChange}},[r("qrcode-stream",{on:{init:e.logErrors}},[r("button",{staticClass:"fullscreen-button",on:{click:function(t){e.fullscreen=!e.fullscreen}}},[r("img",{attrs:{src:e.$withBase(e.fullscreenIcon),alt:"toggle fullscreen"}})])])],1)}),[],!1,null,"01e794aa",null);t.default=a.exports},360:function(e,t,r){"use strict";r.r(t);r(97);var n=r(42),o={components:{QrcodeStream:r(307).c},data:function(){return{loading:!1,destroyed:!1}},methods:{onInit:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.loading=!0,r.prev=1,r.next=4,e;case 4:r.next=9;break;case 6:r.prev=6,r.t0=r.catch(1),console.error(r.t0);case 9:return r.prev=9,t.loading=!1,r.finish(9);case 12:case"end":return r.stop()}}),r,null,[[1,6,9,12]])})))()},reload:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.destroyed=!0,t.next=3,e.$nextTick();case 3:e.destroyed=!1;case 4:case"end":return t.stop()}}),t)})))()}}},a=(r(341),r(41)),c=Object(a.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("button",{on:{click:e.reload}},[e._v("Destroy And Re-Create Component")]),e._v(" "),e.destroyed?e._e():r("qrcode-stream",{on:{init:e.onInit}},[e.loading?r("div",{staticClass:"loading-indicator"},[e._v("\n      Loading...\n    ")]):e._e()])],1)}),[],!1,null,"74036290",null);t.default=c.exports},361:function(e,t,r){"use strict";r.r(t);r(97);var n=r(42),o={components:{QrcodeStream:r(307).c},data:function(){return{torchActive:!1,torchNotSupported:!1}},computed:{icon:function(){return this.torchActive?"/flash-off.svg":"/flash-on.svg"}},methods:{onInit:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,e;case 3:n=r.sent,o=n.capabilities,console.log(o),t.torchNotSupported=!o.torch,r.next=12;break;case 9:r.prev=9,r.t0=r.catch(0),console.error(r.t0);case 12:case"end":return r.stop()}}),r,null,[[0,9]])})))()}}},a=(r(342),r(41)),c=Object(a.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.torchNotSupported?r("p",{staticClass:"error"},[e._v("\n    Torch not supported for active camera\n  ")]):e._e(),e._v(" "),r("qrcode-stream",{attrs:{torch:e.torchActive},on:{init:e.onInit}},[r("button",{attrs:{disabled:e.torchNotSupported},on:{click:function(t){e.torchActive=!e.torchActive}}},[r("img",{attrs:{src:e.$withBase(e.icon),alt:"toggle torch"}})])])],1)}),[],!1,null,"11199bde",null);t.default=c.exports},362:function(e,t,r){"use strict";r.r(t);r(9),r(174),r(97);var n=r(42),o={components:{QrcodeStream:r(307).c},data:function(){return{isValid:void 0,camera:"auto",result:null}},computed:{validationPending:function(){return void 0===this.isValid&&"off"===this.camera},validationSuccess:function(){return!0===this.isValid},validationFailure:function(){return!1===this.isValid}},methods:{onInit:function(e){e.catch(console.error).then(this.resetValidationState)},resetValidationState:function(){this.isValid=void 0},onDecode:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.result=e,t.turnCameraOff(),r.next=4,t.timeout(3e3);case 4:return t.isValid=e.startsWith("http"),r.next=7,t.timeout(2e3);case 7:t.turnCameraOn();case 8:case"end":return r.stop()}}),r)})))()},turnCameraOn:function(){this.camera="auto"},turnCameraOff:function(){this.camera="off"},timeout:function(e){return new Promise((function(t){window.setTimeout(t,e)}))}}},a=(r(343),r(41)),c=Object(a.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("p",{staticClass:"decode-result"},[e._v("Last result: "),r("b",[e._v(e._s(e.result))])]),e._v(" "),r("qrcode-stream",{attrs:{camera:e.camera},on:{decode:e.onDecode,init:e.onInit}},[e.validationSuccess?r("div",{staticClass:"validation-success"},[e._v("\n      This is a URL\n    ")]):e._e(),e._v(" "),e.validationFailure?r("div",{staticClass:"validation-failure"},[e._v("\n      This is NOT a URL!\n    ")]):e._e(),e._v(" "),e.validationPending?r("div",{staticClass:"validation-pending"},[e._v("\n      Long validation in progress...\n    ")]):e._e()])],1)}),[],!1,null,"7ed9dbb2",null);t.default=c.exports},391:function(e,t,r){"use strict";var n=r(344);r.n(n).a},399:function(e,t,r){"use strict";r.r(t);var n=r(353),o=r(354),a=r(355),c=r(356),s=r(357),i=r(358),u=r(359),l=r(360),d=r(361),f=r(362),m={components:{DecodeAll:o.default,CustomTracking:n.default,SwitchCamera:a.default,DragDrop:c.default,Upload:s.default,Fallback:i.default,Fullscreen:u.default,LoadingIndicator:l.default,Torch:d.default,Validate:f.default},props:{component:String},data:function(){return{currentDemo:null}},mounted:function(){this.currentDemo=this.component}},v=(r(391),r(41)),p=Object(v.a)(m,(function(){var e=this.$createElement;return(this._self._c||e)(this.currentDemo,{tag:"component"})}),[],!1,null,null,null);t.default=p.exports}}]);