!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function n(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{ckxJ:function(e,o,i){"use strict";i.r(o),i.d(o,"TabataPageModule",function(){return T});var s,r,c,a,l=i("ofXK"),u=i("3Pt+"),b=i("TEn/"),d=i("tyNb"),p=i("mrSG"),f=i("l5mm"),h=i("vkgz"),m=i("fXoL"),y=((s=function(){function e(n){t(this,e),this.modalCtrl=n}return n(e,[{key:"onDismiss",value:function(){this.modalCtrl.dismiss()}}]),e}()).\u0275fac=function(t){return new(t||s)(m.Jb(b.w))},s.\u0275cmp=m.Db({type:s,selectors:[["ng-component"]],decls:8,vars:1,consts:[["slot","primary"],[3,"click"],["name","close","slot","icon-only"],[3,"fullscreen"]],template:function(t,e){1&t&&(m.Ob(0,"ion-header"),m.Ob(1,"ion-toolbar"),m.Ob(2,"ion-title"),m.lc(3,"New Tabata"),m.Nb(),m.Ob(4,"ion-buttons",0),m.Ob(5,"ion-button",1),m.Wb("click",function(){return e.onDismiss()}),m.Kb(6,"ion-icon",2),m.Nb(),m.Nb(),m.Nb(),m.Nb(),m.Kb(7,"ion-content",3)),2&t&&(m.yb(7),m.ec("fullscreen",!0))},directives:[b.h,b.t,b.s,b.c,b.b,b.i,b.e],encapsulation:2}),s),g=function(t){return t.getReady="Get ready",t.work="Work",t.rest="Rest",t.done="Done",t}({}),O=function(t){return t[t.getReady=0]="getReady",t[t.work=1]="work",t[t.rest=2]="rest",t}({}),k=i("mlae"),v=i("dDfN"),w=[{path:"",component:(r=function(){function e(n){t(this,e),this.modalCtrl=n,this.round=1,this.clock=10,this.timeElapsed=0,this.pause=!0,this.isBlocked=!1,this.initialRounds=8,this.isDone=!1,this.intervalTypeTextColor="warning-color",this._initialClock=this.clock,this.TAP_SOUND="../../assets/sounds/button-50.mp3"}return n(e,[{key:"ngOnInit",value:function(){this._audio=new Audio(this.TAP_SOUND),this.textInfo=g.getReady,this.intervalType=O.getReady}},{key:"ionViewDidLeave",value:function(){this.onReset()}},{key:"ngOnDestroy",value:function(){this.onReset()}},{key:"onCreateTabata",value:function(){var t=this;this.onReset(),this.modalCtrl.create({keyboardClose:!0,component:y,id:"createTimer"}).then(function(e){return Object(p.a)(t,void 0,void 0,regeneratorRuntime.mark(function t(){var n,o;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.present(),this.pause=!0,t.next=3,e.onWillDismiss();case 3:n=t.sent,(o=n.data)&&(console.log("data: ",o),this._initialClock=o.timer,this.initialRounds=o.rounds,this.clock=o.timer);case 6:case"end":return t.stop()}},t,this)}))})}},{key:"onToggle",value:function(t){var e=this;this.pause=t,t?this.intervalObs$.unsubscribe():this.intervalObs$=Object(f.a)(1e3).pipe(Object(h.a)(function(){e.clock--,e.timeElapsed++,e.clock>=1&&e.clock<=3&&e._playSound(),e.clock<1&&e.intervalType===O.rest&&e._roundsCount(),(e.intervalType===O.getReady||e.intervalType===O.rest)&&e.clock<1?(e.textInfo=g.work,e.intervalType=O.work,e.clock=20,e.intervalTypeTextColor="primary-color"):e.intervalType===O.work&&e.clock<1&&(e.textInfo=g.rest,e.intervalType=O.rest,e.clock=10,e.intervalTypeTextColor="success-color"),console.log(e.clock)})).subscribe(function(){})}},{key:"onReset",value:function(){this.intervalObs$&&this.intervalObs$.unsubscribe(),this.pause=!0,this.isBlocked=!1,this.clock=this._initialClock,this.round=1,this.timeElapsed=0,this.intervalType=O.getReady,this.textInfo=g.getReady,this.intervalTypeTextColor="warning-color"}},{key:"_playSound",value:function(){this._audio.play()}},{key:"_roundsCount",value:function(){this.round<this.initialRounds?this.round++:(this.intervalObs$.unsubscribe(),this.textInfo=g.done,this.pause=!0,this.isBlocked=!0)}}]),e}(),r.\u0275fac=function(t){return new(t||r)(m.Jb(b.w))},r.\u0275cmp=m.Db({type:r,selectors:[["app-tabata"]],decls:31,vars:13,consts:[[3,"fullscreen"],[1,"grid","ion-text-center","grid"],[1,"row","ion-align-items-center"],["size","12","size-sm","6","offset-sm","3"],[1,"text"],[1,"text__sm"],[1,"text",3,"ngClass"],["size","12","size-sm","6","offset-sm","3",1,"ion-padding-vertical"],[3,"isBlocked","pause","toggle","reset"]],template:function(t,e){1&t&&(m.Ob(0,"ion-header"),m.Ob(1,"ion-toolbar"),m.Ob(2,"ion-title"),m.lc(3,"Tabata"),m.Nb(),m.Nb(),m.Nb(),m.Ob(4,"ion-content",0),m.Ob(5,"ion-grid",1),m.Ob(6,"ion-row",2),m.Ob(7,"ion-col",3),m.Ob(8,"p",4),m.lc(9),m.ac(10,"timeFormat"),m.Nb(),m.Nb(),m.Nb(),m.Ob(11,"ion-row",2),m.Ob(12,"ion-col",3),m.Ob(13,"p",5),m.lc(14),m.ac(15,"timeFormat"),m.Nb(),m.Nb(),m.Nb(),m.Ob(16,"ion-row",2),m.Ob(17,"ion-col",3),m.Ob(18,"p",6),m.lc(19),m.Nb(),m.Nb(),m.Nb(),m.Ob(20,"ion-row",2),m.Ob(21,"ion-col",3),m.Ob(22,"p",4),m.lc(23,"Round"),m.Nb(),m.Ob(24,"p",4),m.lc(25),m.Ob(26,"span"),m.lc(27),m.Nb(),m.Nb(),m.Nb(),m.Nb(),m.Ob(28,"ion-row"),m.Ob(29,"ion-col",7),m.Ob(30,"player-controls",8),m.Wb("toggle",function(t){return e.onToggle(t)})("reset",function(){return e.onReset()}),m.Nb(),m.Nb(),m.Nb(),m.Nb(),m.Nb()),2&t&&(m.yb(4),m.ec("fullscreen",!0),m.yb(5),m.mc(m.bc(10,9,e.clock)),m.yb(5),m.mc(m.bc(15,11,e.timeElapsed)),m.yb(4),m.ec("ngClass",e.intervalTypeTextColor),m.yb(1),m.mc(e.textInfo),m.yb(6),m.mc(e.round),m.yb(2),m.nc("/",e.initialRounds,""),m.yb(3),m.ec("isBlocked",e.isBlocked)("pause",e.pause))},directives:[b.h,b.t,b.s,b.e,b.g,b.n,b.d,l.h,k.a],pipes:[v.a],styles:[".grid[_ngcontent-%COMP%]{display:flex;flex-flow:column;height:100%}.row[_ngcontent-%COMP%]{flex:1 1 auto}.text[_ngcontent-%COMP%]{font-size:4rem}@media (min-width:540px){.text[_ngcontent-%COMP%]{font-size:5rem}}.text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:3rem;color:var(--ion-color-medium)}.text__sm[_ngcontent-%COMP%]{font-size:2rem}@media (min-width:540px){.text__sm[_ngcontent-%COMP%]{font-size:3rem}}p[_ngcontent-%COMP%]{margin:0}"]}),r)}],N=((c=function e(){t(this,e)}).\u0275mod=m.Hb({type:c}),c.\u0275inj=m.Gb({factory:function(t){return new(t||c)},imports:[[d.i.forChild(w)],d.i]}),c),C=i("PCNd"),T=((a=function e(){t(this,e)}).\u0275mod=m.Hb({type:a}),a.\u0275inj=m.Gb({factory:function(t){return new(t||a)},imports:[[l.b,u.a,b.u,N,C.a]]}),a)}}])}();