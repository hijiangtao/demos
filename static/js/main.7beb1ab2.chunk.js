(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,n){},134:function(e,n){},135:function(e,n){},182:function(e,n,t){"use strict";t.r(n);var o=t(7),i=t.n(o),a=t(80),r=t.n(a),c=(t(92),t(81)),l=t(82),s=t(85),d=t(83),u=t(86),f=(t(94),t(84)),h=(t(5),window.innerWidth-20),g=window.innerHeight-110,v=function(e){function n(){var e,t;Object(c.a)(this,n);for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return(t=Object(s.a)(this,(e=Object(d.a)(n)).call.apply(e,[this].concat(i)))).detectFrame=function(e,n){n.detect(e).then(function(o){t.renderPredictions(o),requestAnimationFrame(function(){t.detectFrame(e,n)})})},t.renderPredictions=function(e){var n=document.getElementById("canvas").getContext("2d");n.clearRect(0,0,n.canvas.width,n.canvas.height);var t="16px sans-serif";n.font=t,n.textBaseline="top",e.forEach(function(e){var o=e.bbox[0],i=e.bbox[1],a=e.bbox[2],r=e.bbox[3];n.strokeStyle="#00FFFF",n.lineWidth=4,n.strokeRect(o,i,a,r),n.fillStyle="#00FFFF";var c=n.measureText(e.class).width,l=parseInt(t,10);n.fillRect(o,i,c+4,l+4)}),e.forEach(function(e){var t=e.bbox[0],o=e.bbox[1];n.fillStyle="#000000",n.fillText(e.class,t,o)})},t}return Object(u.a)(n,e),Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this,n=document.getElementById("video"),t=navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:"user",width:h,height:g}}).then(function(e){return n.srcObject=e,new Promise(function(e,t){n.onloadedmetadata=function(){n.play(),e()}})}),o=f.a();Promise.all([o,t]).then(function(t){console.log("Model Loaded."),e.detectFrame(n,t[0])})}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h3",null,"Tnesorflow.js \u5b9e\u65f6\u7269\u4f53\u68c0\u6d4b Demo"),i.a.createElement("p",null,"\u5b8c\u6574 demo \u89c1 ",i.a.createElement("a",{href:"https://hijiangtao.github.io/slides/s-Fliggy/1221-5min.html#/"},"Slides"),"\u3002"),i.a.createElement("small",{style:{position:"fixed",right:"5px",cursor:"pointer",bottom:"5px"}},i.a.createElement("a",{href:"https://hijiangtao.js.org/"},"hijiangtao.js.org")),i.a.createElement("video",{id:"video",width:h,height:g}),i.a.createElement("canvas",{id:"canvas",width:h,height:g}))}}]),n}(o.Component),m=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function w(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(i.a.createElement(v,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("","/service-worker.js");m?(function(e,n){fetch(e).then(function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):w(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):w(n,e)})}}()},87:function(e,n,t){e.exports=t(182)},92:function(e,n,t){},94:function(e,n,t){},99:function(e,n){}},[[87,2,1]]]);
//# sourceMappingURL=main.7beb1ab2.chunk.js.map