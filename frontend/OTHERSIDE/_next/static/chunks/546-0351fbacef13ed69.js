(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[546],{56546:function(e,t){!function(e){"use strict";function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function n(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}var r,i,o,a,s,l,c,u,f,d,p,h,g=function(){return r||"undefined"!==typeof window&&(r=window.gsap)&&r.registerPlugin&&r},v=1,m=[],y=[],b=[],x=Date.now,w=function(e,t){return t},k=function(){var e=f.core,t=e.bridge||{},n=e._scrollers,r=e._proxies;n.push.apply(n,y),r.push.apply(r,b),y=n,b=r,w=function(e,n){return t[e](n)}},_=function(e,t){return~b.indexOf(e)&&b[b.indexOf(e)+1][t]},S=function(e){return!!~d.indexOf(e)},T=function(e,t,n,r,i){return e.addEventListener(t,n,{passive:!r,capture:!!i})},M=function(e,t,n){return e.removeEventListener(t,n)},C="scrollLeft",E="scrollTop",P=function(){return p&&p.isPressed||y.cache++},O=function(e){return function(t){return t||0===t?(v&&(o.history.scrollRestoration="manual"),e(t),e.v=t,e.c=y.cache,p&&p.isPressed&&w("ss",t)):(y.cache!==e.c||w("ref"))&&(e.c=y.cache,e.v=e()),e.v}},A={s:C,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:O((function(e){return arguments.length?o.scrollTo(e,D.sc()):o.pageXOffset||a[C]||s[C]||l[C]||0}))},D={s:E,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:A,sc:O((function(e){return arguments.length?o.scrollTo(A.sc(),e):o.pageYOffset||a[E]||s[E]||l[E]||0}))},R=function(e){return r.utils.toArray(e)[0]||("string"===typeof e&&!1!==r.config().nullTargetWarn?console.warn("Element not found:",e):null)},Y=function(e,t){var n=t.s,r=t.sc,i=y.indexOf(e),o=r===D.sc?1:2;return!~i&&(i=y.push(e)-1),y[i+o]||(y[i+o]=_(e,n)||(S(e)?r:O((function(t){return arguments.length?e[n]=t:e[n]}))))},X=function(e,t,n){var r=e,i=e,o=x(),a=o,s=t||50,l=Math.max(500,3*s),c=function(e,t){var l=x();t||l-o>s?(i=r,r=e,a=o,o=l):n?r+=e:r=i+(e-i)/(l-a)*(o-a)},u=function(e){var t=a,s=i,u=x();return(e||0===e)&&e!==r&&c(e),o===a||u-a>l?0:(r+(n?s:-s))/((n?u:o)-t)*1e3};return{update:c,reset:function(){i=r=n?0:r,a=o=0},getVelocity:u}},z=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},N=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},B=function(){(f=r.core.globals().ScrollTrigger)&&f.core&&k()},L=function(e){return(r=e||g())&&"undefined"!==typeof document&&document.body&&(o=window,a=document,s=a.documentElement,l=a.body,d=[o,a,s,l],r.utils.clamp,u="onpointerenter"in l?"pointer":"mouse",c=I.isTouch=o.matchMedia&&o.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in o||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,h=I.eventTypes=("ontouchstart"in s?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in s?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout((function(){return v=0}),500),B(),i=1),i};A.op=D,y.cache=0;var I=function(){function e(e){this.init(e)}return e.prototype.init=function(e){i||L(r)||console.warn("Please gsap.registerPlugin(Observer)"),f||B();var t=e.tolerance,n=e.dragMinimum,d=e.type,g=e.target,v=e.lineHeight,y=e.debounce,b=e.preventDefault,w=e.onStop,k=e.onStopDelay,_=e.ignore,C=e.wheelSpeed,E=e.event,O=e.onDragStart,I=e.onDragEnd,H=e.onDrag,F=e.onPress,W=e.onRelease,V=e.onRight,q=e.onLeft,G=e.onUp,U=e.onDown,j=e.onChangeX,K=e.onChangeY,Z=e.onChange,$=e.onToggleX,J=e.onToggleY,Q=e.onHover,ee=e.onHoverEnd,te=e.onMove,ne=e.ignoreCheck,re=e.isNormalizer,ie=e.onGestureStart,oe=e.onGestureEnd,ae=e.onWheel,se=e.onEnable,le=e.onDisable,ce=e.onClick,ue=e.scrollSpeed,fe=e.capture,de=e.allowClicks,pe=e.lockAxis,he=e.onLockAxis;this.target=g=R(g)||s,this.vars=e,_&&(_=r.utils.toArray(_)),t=t||0,n=n||0,C=C||1,ue=ue||1,d=d||"wheel,touch,pointer",y=!1!==y,v||(v=parseFloat(o.getComputedStyle(l).lineHeight)||22);var ge,ve,me,ye,be,xe,we,ke=this,_e=0,Se=0,Te=Y(g,A),Me=Y(g,D),Ce=Te(),Ee=Me(),Pe=~d.indexOf("touch")&&!~d.indexOf("pointer")&&"pointerdown"===h[0],Oe=S(g),Ae=g.ownerDocument||a,De=[0,0,0],Re=[0,0,0],Ye=0,Xe=function(){return Ye=x()},ze=function(e,t){return(ke.event=e)&&_&&~_.indexOf(e.target)||t&&Pe&&"touch"!==e.pointerType||ne&&ne(e,t)},Ne=function(){ke._vx.reset(),ke._vy.reset(),ve.pause(),w&&w(ke)},Be=function(){var e=ke.deltaX=N(De),n=ke.deltaY=N(Re),r=Math.abs(e)>=t,i=Math.abs(n)>=t;Z&&(r||i)&&Z(ke,e,n,De,Re),r&&(V&&ke.deltaX>0&&V(ke),q&&ke.deltaX<0&&q(ke),j&&j(ke),$&&ke.deltaX<0!==_e<0&&$(ke),_e=ke.deltaX,De[0]=De[1]=De[2]=0),i&&(U&&ke.deltaY>0&&U(ke),G&&ke.deltaY<0&&G(ke),K&&K(ke),J&&ke.deltaY<0!==Se<0&&J(ke),Se=ke.deltaY,Re[0]=Re[1]=Re[2]=0),(ye||me)&&(te&&te(ke),he&&xe&&he(ke),me&&(H(ke),me=!1),ye=xe=!1),be&&(ae(ke),be=!1),ge=0},Le=function(e,t,n){De[n]+=e,Re[n]+=t,ke._vx.update(e),ke._vy.update(t),y?ge||(ge=requestAnimationFrame(Be)):Be()},Ie=function(e,t){"y"!==we&&(De[2]+=e,ke._vx.update(e,!0)),"x"!==we&&(Re[2]+=t,ke._vy.update(t,!0)),pe&&!we&&(ke.axis=we=Math.abs(e)>Math.abs(t)?"x":"y",xe=!0),y?ge||(ge=requestAnimationFrame(Be)):Be()},He=function(e){if(!ze(e,1)){var t=(e=z(e,b)).clientX,r=e.clientY,i=t-ke.x,o=r-ke.y,a=ke.isDragging;ke.x=t,ke.y=r,(a||Math.abs(ke.startX-t)>=n||Math.abs(ke.startY-r)>=n)&&(H&&(me=!0),a||(ke.isDragging=!0),Ie(i,o),a||O&&O(ke))}},Fe=ke.onPress=function(e){ze(e,1)||(ke.axis=we=null,ve.pause(),ke.isPressed=!0,e=z(e),_e=Se=0,ke.startX=ke.x=e.clientX,ke.startY=ke.y=e.clientY,ke._vx.reset(),ke._vy.reset(),T(re?g:Ae,h[1],He,b,fe),ke.deltaX=ke.deltaY=0,F&&F(ke))},We=function(e){if(!ze(e,1)){M(re?g:Ae,h[1],He);var t=ke.isDragging&&(Math.abs(ke.x-ke.startX)>3||Math.abs(ke.y-ke.startY)>3),n=z(e);t||(ke._vx.reset(),ke._vy.reset(),b&&de&&r.delayedCall(.05,(function(){if(x()-Ye>300&&!e.defaultPrevented)if(e.target.click)e.target.click();else if(Ae.createEvent){var t=Ae.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,o,1,n.screenX,n.screenY,n.clientX,n.clientY,!1,!1,!1,!1,0,null),e.target.dispatchEvent(t)}}))),ke.isDragging=ke.isGesturing=ke.isPressed=!1,w&&!re&&ve.restart(!0),I&&t&&I(ke),W&&W(ke,t)}},Ve=function(e){return e.touches&&e.touches.length>1&&(ke.isGesturing=!0)&&ie(e,ke.isDragging)},qe=function(){return(ke.isGesturing=!1)||oe(ke)},Ge=function(e){if(!ze(e)){var t=Te(),n=Me();Le((t-Ce)*ue,(n-Ee)*ue,1),Ce=t,Ee=n,w&&ve.restart(!0)}},Ue=function(e){if(!ze(e)){e=z(e,b),ae&&(be=!0);var t=(1===e.deltaMode?v:2===e.deltaMode?o.innerHeight:1)*C;Le(e.deltaX*t,e.deltaY*t,0),w&&!re&&ve.restart(!0)}},je=function(e){if(!ze(e)){var t=e.clientX,n=e.clientY,r=t-ke.x,i=n-ke.y;ke.x=t,ke.y=n,ye=!0,(r||i)&&Ie(r,i)}},Ke=function(e){ke.event=e,Q(ke)},Ze=function(e){ke.event=e,ee(ke)},$e=function(e){return ze(e)||z(e,b)&&ce(ke)};ve=ke._dc=r.delayedCall(k||.25,Ne).pause(),ke.deltaX=ke.deltaY=0,ke._vx=X(0,50,!0),ke._vy=X(0,50,!0),ke.scrollX=Te,ke.scrollY=Me,ke.isDragging=ke.isGesturing=ke.isPressed=!1,ke.enable=function(e){return ke.isEnabled||(T(Oe?Ae:g,"scroll",P),d.indexOf("scroll")>=0&&T(Oe?Ae:g,"scroll",Ge,b,fe),d.indexOf("wheel")>=0&&T(g,"wheel",Ue,b,fe),(d.indexOf("touch")>=0&&c||d.indexOf("pointer")>=0)&&(T(g,h[0],Fe,b,fe),T(Ae,h[2],We),T(Ae,h[3],We),de&&T(g,"click",Xe,!1,!0),ce&&T(g,"click",$e),ie&&T(Ae,"gesturestart",Ve),oe&&T(Ae,"gestureend",qe),Q&&T(g,u+"enter",Ke),ee&&T(g,u+"leave",Ze),te&&T(g,u+"move",je)),ke.isEnabled=!0,e&&e.type&&Fe(e),se&&se(ke)),ke},ke.disable=function(){ke.isEnabled&&(m.filter((function(e){return e!==ke&&S(e.target)})).length||M(Oe?Ae:g,"scroll",P),ke.isPressed&&(ke._vx.reset(),ke._vy.reset(),M(re?g:Ae,h[1],He)),M(Oe?Ae:g,"scroll",Ge),M(g,"wheel",Ue),M(g,h[0],Fe),M(Ae,h[2],We),M(Ae,h[3],We),M(g,"click",Xe),M(g,"click",$e),M(Ae,"gesturestart",Ve),M(Ae,"gestureend",qe),M(g,u+"enter",Ke),M(g,u+"leave",Ze),M(g,u+"move",je),ke.isEnabled=ke.isPressed=ke.isDragging=!1,le&&le(ke))},ke.kill=function(){ke.disable();var e=m.indexOf(ke);e>=0&&m.splice(e,1),p===ke&&(p=0)},m.push(ke),re&&S(g)&&(p=ke),ke.enable(E)},n(e,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),e}();I.version="3.10.3",I.create=function(e){return new I(e)},I.register=L,I.getAll=function(){return m.slice()},I.getById=function(e){return m.filter((function(t){return t.vars.id===e}))[0]},g()&&r.registerPlugin(I);var H,F,W,V,q,G,U,j,K,Z,$,J,Q,ee,te,ne,re,ie,oe,ae,se,le,ce,ue,fe,de,pe,he,ge,ve,me,ye,be=1,xe=Date.now,we=xe(),ke=0,_e=0,Se=function(){return ee=1},Te=function(){return ee=0},Me=function(e){return e},Ce=function(e){return Math.round(1e5*e)/1e5||0},Ee=function(){return"undefined"!==typeof window},Pe=function(){return H||Ee()&&(H=window.gsap)&&H.registerPlugin&&H},Oe=function(e){return!!~U.indexOf(e)},Ae=function(e){return _(e,"getBoundingClientRect")||(Oe(e)?function(){return en.width=W.innerWidth,en.height=W.innerHeight,en}:function(){return ct(e)})},De=function(e,t,n){var r=n.d,i=n.d2,o=n.a;return(o=_(e,"getBoundingClientRect"))?function(){return o()[r]}:function(){return(t?W["inner"+i]:e["client"+i])||0}},Re=function(e,t){return!t||~b.indexOf(e)?Ae(e):function(){return en}},Ye=function(e,t){var n=t.s,r=t.d2,i=t.d,o=t.a;return(n="scroll"+r)&&(o=_(e,n))?o()-Ae(e)()[i]:Oe(e)?(q[n]||G[n])-(W["inner"+r]||q["client"+r]||G["client"+r]):e[n]-e["offset"+r]},Xe=function(e,t){for(var n=0;n<oe.length;n+=3)(!t||~t.indexOf(oe[n+1]))&&e(oe[n],oe[n+1],oe[n+2])},ze=function(e){return"string"===typeof e},Ne=function(e){return"function"===typeof e},Be=function(e){return"number"===typeof e},Le=function(e){return"object"===typeof e},Ie=function(e){return Ne(e)&&e()},He=function(e,t){return function(){var n=Ie(e),r=Ie(t);return function(){Ie(n),Ie(r)}}},Fe=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},We=function(e,t){if(e.enabled){var n=t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},Ve=Math.abs,qe="left",Ge="top",Ue="right",je="bottom",Ke="width",Ze="height",$e="Right",Je="Left",Qe="Top",et="Bottom",tt="padding",nt="margin",rt="Width",it="Height",ot="px",at=function(e){return W.getComputedStyle(e)},st=function(e){var t=at(e).position;e.style.position="absolute"===t||"fixed"===t?t:"relative"},lt=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},ct=function(e,t){var n=t&&"matrix(1, 0, 0, 1, 0, 0)"!==at(e)[te]&&H.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect();return n&&n.progress(0).kill(),r},ut=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},ft=function(e){var t,n=[],r=e.labels,i=e.duration();for(t in r)n.push(r[t]/i);return n},dt=function(e){return function(t){return H.utils.snap(ft(e),t)}},pt=function(e){var t=H.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort((function(e,t){return e-t}));return n?function(e,r,i){var o;if(void 0===i&&(i=.001),!r)return t(e);if(r>0){for(e-=i,o=0;o<n.length;o++)if(n[o]>=e)return n[o];return n[o-1]}for(o=n.length,e+=i;o--;)if(n[o]<=e)return n[o];return n[0]}:function(n,r,i){void 0===i&&(i=.001);var o=t(n);return!r||Math.abs(o-n)<i||o-n<0===r<0?o:t(r<0?n-e:n+e)}},ht=function(e){return function(t,n){return pt(ft(e))(t,n.direction)}},gt=function(e,t,n,r){return n.split(",").forEach((function(n){return e(t,n,r)}))},vt=function(e,t,n,r,i){return e.addEventListener(t,n,{passive:!r,capture:!!i})},mt=function(e,t,n){return e.removeEventListener(t,n)},yt=function(e,t,n){return n&&n.wheelHandler&&e(t,"wheel",n)},bt={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},xt={toggleActions:"play",anticipatePin:0},wt={top:0,left:0,center:.5,bottom:1,right:1},kt=function(e,t){if(ze(e)){var n=e.indexOf("="),r=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(r*=t/100),e=e.substr(0,n-1)),e=r+(e in wt?wt[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},_t=function(e,t,n,r,i,o,a,s){var l=i.startColor,c=i.endColor,u=i.fontSize,f=i.indent,d=i.fontWeight,p=V.createElement("div"),h=Oe(n)||"fixed"===_(n,"pinType"),g=-1!==e.indexOf("scroller"),v=h?G:n,m=-1!==e.indexOf("start"),y=m?l:c,b="border-color:"+y+";font-size:"+u+";color:"+y+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return b+="position:"+((g||s)&&h?"fixed;":"absolute;"),(g||s||!h)&&(b+=(r===D?Ue:je)+":"+(o+parseFloat(f))+"px;"),a&&(b+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),p._isStart=m,p.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),p.style.cssText=b,p.innerText=t||0===t?e+"-"+t:e,v.children[0]?v.insertBefore(p,v.children[0]):v.appendChild(p),p._offset=p["offset"+r.op.d2],St(p,0,r,m),p},St=function(e,t,n,r){var i={display:"block"},o=n[r?"os2":"p2"],a=n[r?"p2":"os2"];e._isFlipped=r,i[n.a+"Percent"]=r?-100:0,i[n.a]=r?"1px":0,i["border"+o+rt]=1,i["border"+a+rt]=0,i[n.p]=t+"px",H.set(e,i)},Tt=[],Mt={},Ct=function(){return xe()-ke>34&&qt()},Et=function(){ce&&ce.isPressed||(y.cache++,he||(he=requestAnimationFrame(qt)),ke||zt("scrollStart"),ke=xe())},Pt=function(){de=W.innerWidth,fe=W.innerHeight},Ot=function(){y.cache++,!Q&&!le&&!V.fullscreenElement&&(!ue||de!==W.innerWidth||Math.abs(W.innerHeight-fe)>.25*W.innerHeight)&&j.restart(!0)},At={},Dt=[],Rt=[],Yt=function(e){var t,n=H.ticker.frame,r=[],i=0;if(ve!==n||be){for(Lt();i<Rt.length;i+=4)(t=W.matchMedia(Rt[i]).matches)!==Rt[i+3]&&(Rt[i+3]=t,t?r.push(i):Lt(1,Rt[i])||Ne(Rt[i+2])&&Rt[i+2]());for(Bt(),i=0;i<r.length;i++)t=r[i],ge=Rt[t],Rt[t+2]=Rt[t+1](e);ge=0,F&&Ft(0,1),ve=n,zt("matchMedia")}},Xt=function e(){return mt(an,"scrollEnd",e)||Ft(!0)},zt=function(e){return At[e]&&At[e].map((function(e){return e()}))||Dt},Nt=[],Bt=function(e){for(var t=0;t<Nt.length;t+=5)e&&Nt[t+4]!==e||(Nt[t].style.cssText=Nt[t+1],Nt[t].getBBox&&Nt[t].setAttribute("transform",Nt[t+2]||""),Nt[t+3].uncache=1)},Lt=function(e,t){var n;for(ne=0;ne<Tt.length;ne++)n=Tt[ne],t&&n.media!==t||(e?n.kill(1):n.revert());t&&Bt(t),t||zt("revert")},It=function(){return y.cache++&&y.forEach((function(e){return"function"===typeof e&&(e.rec=0)}))},Ht=0,Ft=function(e,t){if(!ke||e){me=!0;var n=zt("refreshInit");ae&&an.sort(),t||Lt(),Tt.slice(0).forEach((function(e){return e.refresh()})),Tt.forEach((function(e){return"max"===e.vars.end&&e.setPositions(e.start,Ye(e.scroller,e._dir))})),n.forEach((function(e){return e&&e.render&&e.render(-1)})),It(),j.pause(),Ht++,me=!1,zt("refresh")}else vt(an,"scrollEnd",Xt)},Wt=0,Vt=1,qt=function(){if(!me){ye&&ye.update(0),an.isUpdating=!0;var e=Tt.length,t=xe(),n=t-we>=50,r=e&&Tt[0].scroll();if(Vt=Wt>r?-1:1,Wt=r,n&&(ke&&!ee&&t-ke>200&&(ke=0,zt("scrollEnd")),$=we,we=t),Vt<0){for(ne=e;ne-- >0;)Tt[ne]&&Tt[ne].update(0,n);Vt=1}else for(ne=0;ne<e;ne++)Tt[ne]&&Tt[ne].update(0,n);an.isUpdating=!1}he=0},Gt=[qe,Ge,je,Ue,nt+et,nt+$e,nt+Qe,nt+Je,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Ut=Gt.concat([Ke,Ze,"boxSizing","max"+rt,"max"+it,"position",nt,tt,tt+Qe,tt+$e,tt+et,tt+Je]),jt=function(e,t,n){$t(n);var r=e._gsap;if(r.spacerIsNative)$t(r.spacerState);else if(e.parentNode===t){var i=t.parentNode;i&&(i.insertBefore(e,t),i.removeChild(t))}},Kt=function(e,t,n,r){if(e.parentNode!==t){for(var i,o=Gt.length,a=t.style,s=e.style;o--;)a[i=Gt[o]]=n[i];a.position="absolute"===n.position?"absolute":"relative","inline"===n.display&&(a.display="inline-block"),s[je]=s[Ue]=a.flexBasis="auto",a.overflow="visible",a.boxSizing="border-box",a[Ke]=ut(e,A)+ot,a[Ze]=ut(e,D)+ot,a[tt]=s[nt]=s[Ge]=s[qe]="0",$t(r),s[Ke]=s["max"+rt]=n[Ke],s[Ze]=s["max"+it]=n[Ze],s[tt]=n[tt],e.parentNode.insertBefore(t,e),t.appendChild(e)}},Zt=/([A-Z])/g,$t=function(e){if(e){var t,n,r=e.t.style,i=e.length,o=0;for((e.t._gsap||H.core.getCache(e.t)).uncache=1;o<i;o+=2)n=e[o+1],t=e[o],n?r[t]=n:r[t]&&r.removeProperty(t.replace(Zt,"-$1").toLowerCase())}},Jt=function(e){for(var t=Ut.length,n=e.style,r=[],i=0;i<t;i++)r.push(Ut[i],n[Ut[i]]);return r.t=e,r},Qt=function(e,t,n){for(var r,i=[],o=e.length,a=n?8:0;a<o;a+=2)r=e[a],i.push(r,r in t?t[r]:e[a+1]);return i.t=e.t,i},en={left:0,top:0},tn=function(e,t,n,r,i,o,a,s,l,c,u,f,d){Ne(e)&&(e=e(s)),ze(e)&&"max"===e.substr(0,3)&&(e=f+("="===e.charAt(4)?kt("0"+e.substr(3),n):0));var p,h,g,v=d?d.time():0;if(d&&d.seek(0),Be(e))a&&St(a,n,r,!0);else{Ne(t)&&(t=t(s));var m,y,b,x,w=e.split(" ");g=R(t)||G,(m=ct(g)||{})&&(m.left||m.top)||"none"!==at(g).display||(x=g.style.display,g.style.display="block",m=ct(g),x?g.style.display=x:g.style.removeProperty("display")),y=kt(w[0],m[r.d]),b=kt(w[1]||"0",n),e=m[r.p]-l[r.p]-c+y+i-b,a&&St(a,b,r,n-b<20||a._isStart&&b>20),n-=n-b}if(o){var k=e+n,_=o._isStart;p="scroll"+r.d2,St(o,k,r,_&&k>20||!_&&(u?Math.max(G[p],q[p]):o.parentNode[p])<=k+1),u&&(l=ct(a),u&&(o.style[r.op.p]=l[r.op.p]-r.op.m-o._offset+ot))}return d&&g&&(p=ct(g),d.seek(f),h=ct(g),d._caScrollDist=p[r.p]-h[r.p],e=e/d._caScrollDist*f),d&&d.seek(v),d?e:Math.round(e)},nn=/(webkit|moz|length|cssText|inset)/i,rn=function(e,t,n,r){if(e.parentNode!==t){var i,o,a=e.style;if(t===G){for(i in e._stOrig=a.cssText,o=at(e))+i||nn.test(i)||!o[i]||"string"!==typeof a[i]||"0"===i||(a[i]=o[i]);a.top=n,a.left=r}else a.cssText=e._stOrig;H.core.getCache(e).uncache=1,t.appendChild(e)}},on=function(e,t){var n,r,i=Y(e,t),o="_scroll"+t.p2,a=function t(a,s,l,c,u){var f=t.tween,d=s.onComplete,p={};return l=l||i(),u=c&&u||0,c=c||a-l,f&&f.kill(),n=Math.round(l),s[o]=a,s.modifiers=p,p[o]=function(e){return(e=Ce(i()))!==n&&e!==r&&Math.abs(e-n)>2&&Math.abs(e-r)>2?(f.kill(),t.tween=0):e=l+c*f.ratio+u*f.ratio*f.ratio,r=n,n=Ce(e)},s.onComplete=function(){t.tween=0,d&&d.call(f)},f=t.tween=H.to(e,s)};return e[o]=i,i.wheelHandler=function(){return a.tween&&a.tween.kill()&&(a.tween=0)},vt(e,"wheel",i.wheelHandler),a},an=function(){function e(t,n){F||e.register(H)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),this.init(t,n)}return e.prototype.init=function(t,n){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),_e){var r,i,o,a,s,l,c,u,f,d,p,h,g,v,m,y,x,w,k,S,T,M,C,E,P,O,X,z,N,B,L,I,F,U,j,J,te,re,ie=t=lt(ze(t)||Be(t)||t.nodeType?{trigger:t}:t,xt),oe=ie.onUpdate,le=ie.toggleClass,ce=ie.id,ue=ie.onToggle,fe=ie.onRefresh,de=ie.scrub,he=ie.trigger,ve=ie.pin,we=ie.pinSpacing,Se=ie.invalidateOnRefresh,Te=ie.anticipatePin,Ee=ie.onScrubComplete,Pe=ie.onSnapComplete,Ae=ie.once,Xe=ie.snap,Ie=ie.pinReparent,He=ie.pinSpacer,qe=ie.containerAnimation,Ge=ie.fastScrollEnd,Ue=ie.preventOverlaps,je=t.horizontal||t.containerAnimation&&!1!==t.horizontal?A:D,ft=!de&&0!==de,gt=R(t.scroller||W),yt=H.core.getCache(gt),wt=Oe(gt),St="fixed"===("pinType"in t?t.pinType:_(gt,"pinType")||wt&&"fixed"),Ct=[t.onEnter,t.onLeave,t.onEnterBack,t.onLeaveBack],Pt=ft&&t.toggleActions.split(" "),At="markers"in t?t.markers:xt.markers,Dt=wt?0:parseFloat(at(gt)["border"+je.p2+rt])||0,Rt=this,Yt=t.onRefreshInit&&function(){return t.onRefreshInit(Rt)},zt=De(gt,wt,je),Nt=Re(gt,wt),Bt=0,Lt=0,It=Y(gt,je);if(Rt.media=ge,Rt._dir=je,Te*=45,Rt.scroller=gt,Rt.scroll=qe?qe.time.bind(qe):It,a=It(),Rt.vars=t,n=n||t.animation,"refreshPriority"in t&&(ae=1,-9999===t.refreshPriority&&(ye=Rt)),yt.tweenScroll=yt.tweenScroll||{top:on(gt,D),left:on(gt,A)},Rt.tweenTo=r=yt.tweenScroll[je.p],Rt.scrubDuration=function(e){(L=Be(e)&&e)?B?B.duration(e):B=H.to(n,{ease:"expo",totalProgress:"+=0.001",duration:L,paused:!0,onComplete:function(){return Ee&&Ee(Rt)}}):(B&&B.progress(1).kill(),B=0)},n&&(n.vars.lazy=!1,n._initted||!1!==n.vars.immediateRender&&!1!==t.immediateRender&&n.render(0,!0,!0),Rt.animation=n.pause(),n.scrollTrigger=Rt,Rt.scrubDuration(de),z=0,ce||(ce=n.vars.id)),Tt.push(Rt),Xe&&(Le(Xe)&&!Xe.push||(Xe={snapTo:Xe}),"scrollBehavior"in G.style&&H.set(wt?[G,q]:gt,{scrollBehavior:"auto"}),o=Ne(Xe.snapTo)?Xe.snapTo:"labels"===Xe.snapTo?dt(n):"labelsDirectional"===Xe.snapTo?ht(n):!1!==Xe.directional?function(e,t){return pt(Xe.snapTo)(e,xe()-Lt<500?0:t.direction)}:H.utils.snap(Xe.snapTo),I=Xe.duration||{min:.1,max:2},I=Le(I)?Z(I.min,I.max):Z(I,I),F=H.delayedCall(Xe.delay||L/2||.1,(function(){var e=It(),t=xe()-Lt<500,i=r.tween;if(!(t||Math.abs(Rt.getVelocity())<10)||i||ee||Bt===e)Rt.isActive&&Bt!==e&&F.restart(!0);else{var a=(e-l)/g,s=n&&!ft?n.totalProgress():a,u=t?0:(s-N)/(xe()-$)*1e3||0,f=H.utils.clamp(-a,1-a,Ve(u/2)*u/.185),d=a+(!1===Xe.inertia?0:f),p=Z(0,1,o(d,Rt)),h=Math.round(l+p*g),v=Xe,m=v.onStart,y=v.onInterrupt,b=v.onComplete;if(e<=c&&e>=l&&h!==e){if(i&&!i._initted&&i.data<=Ve(h-e))return;!1===Xe.inertia&&(f=p-a),r(h,{duration:I(Ve(.185*Math.max(Ve(d-s),Ve(p-s))/u/.05||0)),ease:Xe.ease||"power3",data:Ve(h-e),onInterrupt:function(){return F.restart(!0)&&y&&y(Rt)},onComplete:function(){Rt.update(),Bt=It(),z=N=n&&!ft?n.totalProgress():Rt.progress,Pe&&Pe(Rt),b&&b(Rt)}},e,f*g,h-e-f*g),m&&m(Rt,r.tween)}}})).pause()),ce&&(Mt[ce]=Rt),(re=(he=Rt.trigger=R(he||ve))&&he._gsap&&he._gsap.stRevert)&&(re=re(Rt)),ve=!0===ve?he:R(ve),ze(le)&&(le={targets:he,className:le}),ve&&(!1===we||we===nt||(we=!(!we&&"flex"===at(ve.parentNode).display)&&tt),Rt.pin=ve,!1!==t.force3D&&H.set(ve,{force3D:!0}),(i=H.core.getCache(ve)).spacer?v=i.pinState:(He&&((He=R(He))&&!He.nodeType&&(He=He.current||He.nativeElement),i.spacerIsNative=!!He,He&&(i.spacerState=Jt(He))),i.spacer=x=He||V.createElement("div"),x.classList.add("pin-spacer"),ce&&x.classList.add("pin-spacer-"+ce),i.pinState=v=Jt(ve)),Rt.spacer=x=i.spacer,X=at(ve),C=X[we+je.os2],k=H.getProperty(ve),S=H.quickSetter(ve,je.a,ot),Kt(ve,x,X),y=Jt(ve)),At){h=Le(At)?lt(At,bt):bt,d=_t("scroller-start",ce,gt,je,h,0),p=_t("scroller-end",ce,gt,je,h,0,d),w=d["offset"+je.op.d2];var Ht=R(_(gt,"content")||gt);u=this.markerStart=_t("start",ce,Ht,je,h,w,0,qe),f=this.markerEnd=_t("end",ce,Ht,je,h,w,0,qe),qe&&(te=H.quickSetter([u,f],je.a,ot)),St||b.length&&!0===_(gt,"fixedMarkers")||(st(wt?G:gt),H.set([d,p],{force3D:!0}),P=H.quickSetter(d,je.a,ot),O=H.quickSetter(p,je.a,ot))}if(qe){var Ft=qe.vars.onUpdate,Wt=qe.vars.onUpdateParams;qe.eventCallback("onUpdate",(function(){Rt.update(0,0,1),Ft&&Ft.apply(Wt||[])}))}Rt.previous=function(){return Tt[Tt.indexOf(Rt)-1]},Rt.next=function(){return Tt[Tt.indexOf(Rt)+1]},Rt.revert=function(e){var t=!1!==e||!Rt.enabled,r=Q;t!==Rt.isReverted&&(t&&(Rt.scroll.rec||!Q||!me||(Rt.scroll.rec=It()),j=Math.max(It(),Rt.scroll.rec||0),U=Rt.progress,J=n&&n.progress()),u&&[u,f,d,p].forEach((function(e){return e.style.display=t?"none":"block"})),t&&(Q=1),Rt.update(t),Q=r,ve&&(t?jt(ve,x,v):(!Ie||!Rt.isActive)&&Kt(ve,x,at(ve),E)),Rt.isReverted=t)},Rt.refresh=function(i,o){if(!Q&&Rt.enabled||o)if(ve&&i&&ke)vt(e,"scrollEnd",Xt);else{!me&&Yt&&Yt(Rt),Q=1,Lt=xe(),r.tween&&(r.tween.kill(),r.tween=0),B&&B.pause(),Se&&n&&n.time(-.01,!0).invalidate(),Rt.isReverted||Rt.revert();for(var h,b,w,_,S,C,P,O,X,z,N=zt(),L=Nt(),I=qe?qe.duration():Ye(gt,je),W=0,V=0,q=t.end,K=t.endTrigger||he,Z=t.start||(0!==t.start&&he?ve?"0 0":"0 100%":0),$=Rt.pinnedContainer=t.pinnedContainer&&R(t.pinnedContainer),ee=he&&Math.max(0,Tt.indexOf(Rt))||0,te=ee;te--;)(C=Tt[te]).end||C.refresh(0,1)||(Q=1),!(P=C.pin)||P!==he&&P!==ve||C.isReverted||(z||(z=[]),z.unshift(C),C.revert()),C!==Tt[te]&&(ee--,te--);for(Ne(Z)&&(Z=Z(Rt)),l=tn(Z,he,N,je,It(),u,d,Rt,L,Dt,St,I,qe)||(ve?-.001:0),Ne(q)&&(q=q(Rt)),ze(q)&&!q.indexOf("+=")&&(~q.indexOf(" ")?q=(ze(Z)?Z.split(" ")[0]:"")+q:(W=kt(q.substr(2),N),q=ze(Z)?Z:l+W,K=he)),c=Math.max(l,tn(q||(K?"100% 0":I),K,N,je,It()+W,f,p,Rt,L,Dt,St,I,qe))||-.001,g=c-l||(l-=.01)&&.001,W=0,te=ee;te--;)(P=(C=Tt[te]).pin)&&C.start-C._pinPush<l&&!qe&&C.end>0&&(h=C.end-C.start,P!==he&&P!==$||Be(Z)||(W+=h*(1-C.progress)),P===ve&&(V+=h));if(l+=W,c+=W,Rt._pinPush=V,u&&W&&((h={})[je.a]="+="+W,$&&(h[je.p]="-="+It()),H.set([u,f],h)),ve)h=at(ve),_=je===D,w=It(),T=parseFloat(k(je.a))+V,!I&&c>1&&((wt?G:gt).style["overflow-"+je.a]="scroll"),Kt(ve,x,h),y=Jt(ve),b=ct(ve,!0),O=St&&Y(gt,_?A:D)(),we&&((E=[we+je.os2,g+V+ot]).t=x,(te=we===tt?ut(ve,je)+g+V:0)&&E.push(je.d,te+ot),$t(E),St&&It(j)),St&&((S={top:b.top+(_?w-l:O)+ot,left:b.left+(_?O:w-l)+ot,boxSizing:"border-box",position:"fixed"})[Ke]=S["max"+rt]=Math.ceil(b.width)+ot,S[Ze]=S["max"+it]=Math.ceil(b.height)+ot,S[nt]=S[nt+Qe]=S[nt+$e]=S[nt+et]=S[nt+Je]="0",S[tt]=h[tt],S[tt+Qe]=h[tt+Qe],S[tt+$e]=h[tt+$e],S[tt+et]=h[tt+et],S[tt+Je]=h[tt+Je],m=Qt(v,S,Ie)),n?(X=n._initted,se(1),n.render(n.duration(),!0,!0),M=k(je.a)-T+g+V,g!==M&&m.splice(m.length-2,2),n.render(0,!0,!0),X||n.invalidate(),se(0)):M=g;else if(he&&It()&&!qe)for(b=he.parentNode;b&&b!==G;)b._pinOffset&&(l-=b._pinOffset,c-=b._pinOffset),b=b.parentNode;z&&z.forEach((function(e){return e.revert(!1)})),Rt.start=l,Rt.end=c,a=s=It(),qe||(a<j&&It(j),Rt.scroll.rec=0),Rt.revert(!1),F&&(Bt=-1,Rt.isActive&&It(l+g*U),F.restart(!0)),Q=0,n&&ft&&(n._initted||J)&&n.progress()!==J&&n.progress(J,!0).render(n.time(),!0,!0),(U!==Rt.progress||qe)&&(n&&!ft&&n.totalProgress(U,!0),Rt.progress=U,Rt.update(0,0,1)),ve&&we&&(x._pinOffset=Math.round(Rt.progress*M)),fe&&fe(Rt)}},Rt.getVelocity=function(){return(It()-s)/(xe()-$)*1e3||0},Rt.endAnimation=function(){Fe(Rt.callbackAnimation),n&&(B?B.progress(1):n.paused()?ft||Fe(n,Rt.direction<0,1):Fe(n,n.reversed()))},Rt.labelToScroll=function(e){return n&&n.labels&&(l||Rt.refresh()||l)+n.labels[e]/n.duration()*g||0},Rt.getTrailing=function(e){var t=Tt.indexOf(Rt),n=Rt.direction>0?Tt.slice(0,t).reverse():Tt.slice(t+1);return(ze(e)?n.filter((function(t){return t.vars.preventOverlaps===e})):n).filter((function(e){return Rt.direction>0?e.end<=l:e.start>=c}))},Rt.update=function(e,t,i){if(!qe||i||e){var o,u,f,p,h,v,b,w=Rt.scroll(),k=e?0:(w-l)/g,_=k<0?0:k>1?1:k||0,E=Rt.progress;if(t&&(s=a,a=qe?It():w,Xe&&(N=z,z=n&&!ft?n.totalProgress():_)),Te&&!_&&ve&&!Q&&!be&&ke&&l<w+(w-s)/(xe()-$)*Te&&(_=1e-4),_!==E&&Rt.enabled){if(p=(h=(o=Rt.isActive=!!_&&_<1)!==(!!E&&E<1))||!!_!==!!E,Rt.direction=_>E?1:-1,Rt.progress=_,p&&!Q&&(u=_&&!E?0:1===_?1:1===E?2:3,ft&&(f=!h&&"none"!==Pt[u+1]&&Pt[u+1]||Pt[u],b=n&&("complete"===f||"reset"===f||f in n))),Ue&&(h||b)&&(b||de||!n)&&(Ne(Ue)?Ue(Rt):Rt.getTrailing(Ue).forEach((function(e){return e.endAnimation()}))),ft||(!B||Q||be?n&&n.totalProgress(_,!!Q):((qe||ye&&ye!==Rt)&&B.render(B._dp._time-B._start),B.resetTo?B.resetTo("totalProgress",_,n._tTime/n._tDur):(B.vars.totalProgress=_,B.invalidate().restart()))),ve)if(e&&we&&(x.style[we+je.os2]=C),St){if(p){if(v=!e&&_>E&&c+1>w&&w+1>=Ye(gt,je),Ie)if(e||!o&&!v)rn(ve,x);else{var A=ct(ve,!0),R=w-l;rn(ve,G,A.top+(je===D?R:0)+ot,A.left+(je===D?0:R)+ot)}$t(o||v?m:y),M!==g&&_<1&&o||S(T+(1!==_||v?0:M))}}else S(Ce(T+M*_));Xe&&!r.tween&&!Q&&!be&&F.restart(!0),le&&(h||Ae&&_&&(_<1||!pe))&&K(le.targets).forEach((function(e){return e.classList[o||Ae?"add":"remove"](le.className)})),oe&&!ft&&!e&&oe(Rt),p&&!Q?(ft&&(b&&("complete"===f?n.pause().totalProgress(1):"reset"===f?n.restart(!0).pause():"restart"===f?n.restart(!0):n[f]()),oe&&oe(Rt)),!h&&pe||(ue&&h&&We(Rt,ue),Ct[u]&&We(Rt,Ct[u]),Ae&&(1===_?Rt.kill(!1,1):Ct[u]=0),h||Ct[u=1===_?1:3]&&We(Rt,Ct[u])),Ge&&!o&&Math.abs(Rt.getVelocity())>(Be(Ge)?Ge:2500)&&(Fe(Rt.callbackAnimation),B?B.progress(1):Fe(n,!_,1))):ft&&oe&&!Q&&oe(Rt)}if(O){var Y=qe?w/qe.duration()*(qe._caScrollDist||0):w;P(Y+(d._isFlipped?1:0)),O(Y)}te&&te(-w/qe.duration()*(qe._caScrollDist||0))}},Rt.enable=function(t,n){Rt.enabled||(Rt.enabled=!0,vt(gt,"resize",Ot),vt(wt?V:gt,"scroll",Et),Yt&&vt(e,"refreshInit",Yt),!1!==t&&(Rt.progress=U=0,a=s=Bt=It()),!1!==n&&Rt.refresh())},Rt.getTween=function(e){return e&&r?r.tween:B},Rt.setPositions=function(e,t){ve&&(T+=e-l,M+=t-e-g),Rt.start=l=e,Rt.end=c=t,g=t-e,Rt.update()},Rt.disable=function(t,n){if(Rt.enabled&&(!1!==t&&Rt.revert(),Rt.enabled=Rt.isActive=!1,n||B&&B.pause(),j=0,i&&(i.uncache=1),Yt&&mt(e,"refreshInit",Yt),F&&(F.pause(),r.tween&&r.tween.kill()&&(r.tween=0)),!wt)){for(var o=Tt.length;o--;)if(Tt[o].scroller===gt&&Tt[o]!==Rt)return;mt(gt,"resize",Ot),mt(gt,"scroll",Et)}},Rt.kill=function(e,r){Rt.disable(e,r),B&&!r&&B.kill(),ce&&delete Mt[ce];var o=Tt.indexOf(Rt);o>=0&&Tt.splice(o,1),o===ne&&Vt>0&&ne--,o=0,Tt.forEach((function(e){return e.scroller===Rt.scroller&&(o=1)})),o||(Rt.scroll.rec=0),n&&(n.scrollTrigger=null,e&&n.render(-1),r||n.kill()),u&&[u,f,d,p].forEach((function(e){return e.parentNode&&e.parentNode.removeChild(e)})),ye===Rt&&(ye=0),ve&&(i&&(i.uncache=1),o=0,Tt.forEach((function(e){return e.pin===ve&&o++})),o||(i.spacer=0)),t.onKill&&t.onKill(Rt)},Rt.enable(!1,!1),re&&re(Rt),n&&n.add&&!g?H.delayedCall(.01,(function(){return l||c||Rt.refresh()}))&&(g=.01)&&(l=c=0):Rt.refresh()}else this.update=this.refresh=this.kill=Me},e.register=function(t){return F||(H=t||Pe(),Ee()&&window.document&&e.enable(),F=_e),F},e.defaults=function(e){if(e)for(var t in e)xt[t]=e[t];return xt},e.disable=function(e,t){_e=0,Tt.forEach((function(n){return n[t?"kill":"disable"](e)})),mt(W,"wheel",Et),mt(V,"scroll",Et),clearInterval(J),mt(V,"touchcancel",Me),mt(G,"touchstart",Me),gt(mt,V,"pointerdown,touchstart,mousedown",Se),gt(mt,V,"pointerup,touchend,mouseup",Te),j.kill(),Xe(mt);for(var n=0;n<y.length;n+=3)yt(mt,y[n],y[n+1]),yt(mt,y[n],y[n+2])},e.enable=function(){if(W=window,V=document,q=V.documentElement,G=V.body,H&&(K=H.utils.toArray,Z=H.utils.clamp,se=H.core.suppressOverwrites||Me,H.core.globals("ScrollTrigger",e),G)){_e=1,I.register(H),e.isTouch=I.isTouch,vt(W,"wheel",Et),U=[W,V,q,G],e.matchMedia({"(orientation: portrait)":function(){return Pt(),Pt}}),vt(V,"scroll",Et);var t,n,r=G.style,i=r.borderTopStyle;for(r.borderTopStyle="solid",t=ct(G),D.m=Math.round(t.top+D.sc())||0,A.m=Math.round(t.left+A.sc())||0,i?r.borderTopStyle=i:r.removeProperty("border-top-style"),J=setInterval(Ct,250),H.delayedCall(.5,(function(){return be=0})),vt(V,"touchcancel",Me),vt(G,"touchstart",Me),gt(vt,V,"pointerdown,touchstart,mousedown",Se),gt(vt,V,"pointerup,touchend,mouseup",Te),te=H.utils.checkPrefix("transform"),Ut.push(te),F=xe(),j=H.delayedCall(.2,Ft).pause(),oe=[V,"visibilitychange",function(){var e=W.innerWidth,t=W.innerHeight;V.hidden?(re=e,ie=t):re===e&&ie===t||Ot()},V,"DOMContentLoaded",Ft,W,"load",Ft,W,"resize",Ot],Xe(vt),Tt.forEach((function(e){return e.enable(0,1)})),n=0;n<y.length;n+=3)yt(mt,y[n],y[n+1]),yt(mt,y[n],y[n+2])}},e.config=function(t){"limitCallbacks"in t&&(pe=!!t.limitCallbacks);var n=t.syncInterval;n&&clearInterval(J)||(J=n)&&setInterval(Ct,n),"ignoreMobileResize"in t&&(ue=1===e.isTouch&&t.ignoreMobileResize),"autoRefreshEvents"in t&&(Xe(mt)||Xe(vt,t.autoRefreshEvents||"none"),le=-1===(t.autoRefreshEvents+"").indexOf("resize"))},e.scrollerProxy=function(e,t){var n=R(e),r=y.indexOf(n),i=Oe(n);~r&&y.splice(r,i?6:2),t&&(i?b.unshift(W,t,G,t,q,t):b.unshift(n,t))},e.matchMedia=function(e){var t,n,r,i,o;for(n in e)r=Rt.indexOf(n),i=e[n],ge=n,"all"===n?i():(t=W.matchMedia(n))&&(t.matches&&(o=i()),~r?(Rt[r+1]=He(Rt[r+1],i),Rt[r+2]=He(Rt[r+2],o)):(r=Rt.length,Rt.push(n,i,o),t.addListener?t.addListener(Yt):t.addEventListener("change",Yt)),Rt[r+3]=t.matches),ge=0;return Rt},e.clearMatchMedia=function(e){e||(Rt.length=0),(e=Rt.indexOf(e))>=0&&Rt.splice(e,4)},e.isInViewport=function(e,t,n){var r=(ze(e)?R(e):e).getBoundingClientRect(),i=r[n?Ke:Ze]*t||0;return n?r.right-i>0&&r.left+i<W.innerWidth:r.bottom-i>0&&r.top+i<W.innerHeight},e.positionInViewport=function(e,t,n){ze(e)&&(e=R(e));var r=e.getBoundingClientRect(),i=r[n?Ke:Ze],o=null==t?i/2:t in wt?wt[t]*i:~t.indexOf("%")?parseFloat(t)*i/100:parseFloat(t)||0;return n?(r.left+o)/W.innerWidth:(r.top+o)/W.innerHeight},e}();an.version="3.10.3",an.saveStyles=function(e){return e?K(e).forEach((function(e){if(e&&e.style){var t=Nt.indexOf(e);t>=0&&Nt.splice(t,5),Nt.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),H.core.getCache(e),ge)}})):Nt},an.revert=function(e,t){return Lt(!e,t)},an.create=function(e,t){return new an(e,t)},an.refresh=function(e){return e?Ot():(F||an.register())&&Ft(!0)},an.update=qt,an.clearScrollMemory=It,an.maxScroll=function(e,t){return Ye(e,t?A:D)},an.getScrollFunc=function(e,t){return Y(R(e),t?A:D)},an.getById=function(e){return Mt[e]},an.getAll=function(){return Tt.filter((function(e){return"ScrollSmoother"!==e.vars.id}))},an.isScrolling=function(){return!!ke},an.snapDirectional=pt,an.addEventListener=function(e,t){var n=At[e]||(At[e]=[]);~n.indexOf(t)||n.push(t)},an.removeEventListener=function(e,t){var n=At[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},an.batch=function(e,t){var n,r=[],i={},o=t.interval||.016,a=t.batchMax||1e9,s=function(e,t){var n=[],r=[],i=H.delayedCall(o,(function(){t(n,r),n=[],r=[]})).pause();return function(e){n.length||i.restart(!0),n.push(e.trigger),r.push(e),a<=n.length&&i.progress(1)}};for(n in t)i[n]="on"===n.substr(0,2)&&Ne(t[n])&&"onRefreshInit"!==n?s(n,t[n]):t[n];return Ne(a)&&(a=a(),vt(an,"refresh",(function(){return a=t.batchMax()}))),K(e).forEach((function(e){var t={};for(n in i)t[n]=i[n];t.trigger=e,r.push(an.create(t))})),r};var sn,ln=function(e,t,n,r){return t>r?e(r):t<0&&e(0),n>r?(r-t)/(n-t):n<0?t/(t-n):1},cn=function e(t,n){!0===n?t.style.removeProperty("touch-action"):t.style.touchAction=n?"pan-"+n:"none",t===q&&e(G)},un={auto:1,scroll:1},fn=function(e){var t,n=e.event,r=e.target,i=e.axis,o=(n.changedTouches?n.changedTouches[0]:n).target,a=o._gsap||H.core.getCache(o),s=xe();if(!a._isScrollT||s-a._isScrollT>2e3){for(;o&&o.scrollHeight<=o.clientHeight;)o=o.parentNode;a._isScroll=o&&!Oe(o)&&o!==r&&(un[(t=at(o)).overflowY]||un[t.overflowX]),a._isScrollT=s}(a._isScroll||"x"===i)&&(n._gsapAllow=!0)},dn=function(e,t,n,r){return I.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&fn,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return n&&vt(V,I.eventTypes[0],hn,!1,!0)},onDisable:function(){return mt(V,I.eventTypes[0],hn)}})},pn=/(input|label|select|textarea)/i,hn=function(e){var t=pn.test(e.target.tagName);(t||sn)&&(e._gsapAllow=!0,sn=t)},gn=function(e){Le(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t,n,r,i,o,a,s,l,c=e,u=c.normalizeScrollX,f=c.momentum,d=c.allowNestedScroll,p=R(e.target)||q,h=Y(p,D),g=Y(p,A),v=1,m=0,y=Ne(f)?function(){return f(t)}:function(){return f||2.8},b=dn(p,e.type,!0,d),x=function(){return r=!1},w=Me,k=Me,_=function(){n=Ye(p,D),k=Z(0,n),u&&(w=Z(0,Ye(p,A))),i=Ht},S=an.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),T=function(){if(r)return requestAnimationFrame(x),!0;r=!0},M=function(){_(),o.isActive()&&o.vars.scrollY>n&&o.resetTo("scrollY",Ye(p,D))};return e.ignoreCheck=function(e){return S&&"touchmove"===e.type&&T()||v>1||t.isGesturing||e.touches&&e.touches.length>1},e.onPress=function(){var e=v;v=W.visualViewport&&W.visualViewport.scale||1,o.pause(),e!==v&&cn(p,v>1||!u&&"x"),r=!1,a=g(),s=h(),_(),i=Ht},e.onRelease=e.onGestureStart=function(e,t){if(t){var n,r,i=y();u&&(r=(n=g())+.05*i*-e.velocityX/.227/v,i*=ln(g,n,r,Ye(p,A)),o.vars.scrollX=w(r)),r=(n=h())+.05*i*-e.velocityY/.227/v,i*=ln(h,n,r,Ye(p,D)),o.vars.scrollY=k(r),o.invalidate().duration(i).play(.01)}else l.restart(!0)},e.onWheel=function(){o._ts&&o.pause(),xe()-m>1e3&&(i=0,m=xe())},e.onChange=function(e,t,n,r,o){Ht!==i&&_(),t&&u&&g(w(r[2]===t?a+(e.startX-e.x)/v:g()+t-r[1])),n&&h(k(o[2]===n?s+(e.startY-e.y)/v:h()+n-o[1])),qt()},e.onEnable=function(){cn(p,!u&&"x"),vt(W,"resize",M),b.enable()},e.onDisable=function(){cn(p,!0),mt(W,"resize",M),b.kill()},t=new I(e),l=t._dc,o=H.to(t,{ease:"power4",paused:!0,scrollX:u?"+=0.1":"+=0",scrollY:"+=0.1",onComplete:l.vars.onComplete}),t};an.sort=function(e){return Tt.sort(e||function(e,t){return-1e6*(e.vars.refreshPriority||0)+e.start-(t.start+-1e6*(t.vars.refreshPriority||0))})},an.observe=function(e){return new I(e)},an.normalizeScroll=function(e){if("undefined"===typeof e)return ce;if(!0===e&&ce)return ce.enable();if(!1===e)return ce&&ce.kill();var t=e instanceof I?e:gn(e);return ce&&ce.target===t.target&&ce.kill(),Oe(t.target)&&(ce=t),t},an.core={_getVelocityProp:X,_inputObserver:dn,_scrollers:y,_proxies:b,bridge:{ss:function(){ke||zt("scrollStart"),ke=xe()},ref:function(){return Q}}},Pe()&&H.registerPlugin(an),e.ScrollTrigger=an,e.default=an,"undefined"===typeof window||window!==e?Object.defineProperty(e,"__esModule",{value:!0}):delete window.default}(t)}}]);