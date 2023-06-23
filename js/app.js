(function(){"use strict";var t={8:function(t,e,n){var r=n(144),o=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("nav",[e("router-link",{attrs:{to:"/"}},[t._v("home")]),e("span",{staticClass:"pipe"},[t._v("|")]),e("router-link",{attrs:{to:"/portfolio"}},[t._v("portfolio")])],1),e("router-view",{staticClass:"body"}),e("footer-component",{staticClass:"footer"})],1)},s=[],i=function(){var t=this;t._self._c;return t._m(0)},a=[function(){var t=this,e=t._self._c;return e("footer",[e("div",{staticClass:"social-media"},[e("a",{attrs:{href:"https://www.linkedin.com/in/alexhstone/",target:"_blank"}},[t._v("LinkedIn")]),e("a",{attrs:{href:"https://github.com/alexhstone",target:"_blank"}},[t._v("GitHub")]),e("a",{attrs:{href:"https://github.com/alexhstone/alexstone-portfolio-site",target:"_blank"}},[t._v("See The Code...")])])])}],c={},l=c,u=n(1),p=(0,u.Z)(l,i,a,!1,null,"dad4ff50",null),f=p.exports,h={name:"app",components:{FooterComponent:f}},v=h,_=(0,u.Z)(v,o,s,!1,null,null,null),d=_.exports,m=n(345),g=function(){var t=this,e=t._self._c;return e("div",{staticClass:"home"},[e("home-page")],1)},b=[],C=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("image-card",{staticClass:"image"}),e("blurb-component",{staticClass:"blurb"})],1)},x=[],j=function(){var t=this;t._self._c;return t._m(0)},w=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"blurb"},[e("h1",[t._v("Alex Stone")]),e("h2",[t._v("software developer")]),e("p",[t._v("solving complex problems with creativity and curiosity")])])}],k={name:"blurb-component"},y=k,Z=(0,u.Z)(y,j,w,!1,null,"155645a2",null),P=Z.exports,O=function(){var t=this;t._self._c;return t._m(0)},T=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"img"},[e("img",{attrs:{src:n(694),alt:""}})])}],H={name:"image-card"},F=H,I=(0,u.Z)(F,O,T,!1,null,"615ba50a",null),S=I.exports,A={name:"home-page",components:{ImageCard:S,BlurbComponent:P}},B=A,E=(0,u.Z)(B,C,x,!1,null,"0438c223",null),G=E.exports,L={name:"HomeView",components:{HomePage:G}},U=L,V=(0,u.Z)(U,g,b,!1,null,null,null),$=V.exports,q=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[t._m(0),e("portfolio-container",{staticClass:"portfolio"})],1)},z=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"heading"},[e("h1",[t._v("my projects")]),e("p",[t._v("click a card to view @ github")])])}],D=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[t._l(t.projects,(function(t){return e("portfolio-card",{key:t.id,staticClass:"card",attrs:{project:t}})})),t.projects.length<1?e("p",[t._v("Uh oh! There's nothing here :(")]):t._e()],2)},J=[],K=function(){var t=this,e=t._self._c;return e("a",{attrs:{href:t.project.html_url,target:"_blank"}},[e("div",{staticClass:"card"},[e("div",{staticClass:"tools"},[t._m(0),t._m(1),t._m(2),e("p",{staticClass:"language"},[t._v(t._s(t.project.language))])]),e("div",{staticClass:"card-content"},[e("h2",[t._v(t._s(t.project.name))]),e("p",[t._v(t._s(t.project.description))])])])])},M=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"circle"},[e("span",{staticClass:"red box"})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"circle"},[e("span",{staticClass:"yellow box"})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"circle"},[e("span",{staticClass:"green box"})])}],N={name:"portfolio-card",props:["project"]},Q=N,R=(0,u.Z)(Q,K,M,!1,null,"2c266888",null),W=R.exports,X=n(154),Y={getProjects(){return X.Z.get("https://api.github.com/users/alexhstone/repos")}},tt={components:{PortfolioCard:W},data(){return{projects:[]}},created(){Y.getProjects().then((t=>{this.projects=t.data,this.projects=this.projects.filter((t=>!t.fork))})).catch((t=>{console.log(t)}))}},et=tt,nt=(0,u.Z)(et,D,J,!1,null,"12dceb98",null),rt=nt.exports,ot={components:{PortfolioContainer:rt}},st=ot,it=(0,u.Z)(st,q,z,!1,null,"45114321",null),at=it.exports;r.ZP.use(m.ZP);const ct=[{path:"/",name:"home",component:$},{path:"/portfolio",name:"portfolio",component:at}],lt=new m.ZP({mode:"history",base:"",routes:ct});var ut=lt;r.ZP.config.productionTip=!1,new r.ZP({router:ut,render:t=>t(d)}).$mount("#app")},694:function(t,e,n){t.exports=n.p+"img/drawing2.png"}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var s=e[r]={exports:{}};return t[r](s,s.exports,n),s.exports}n.m=t,function(){var t=[];n.O=function(e,r,o,s){if(!r){var i=1/0;for(u=0;u<t.length;u++){r=t[u][0],o=t[u][1],s=t[u][2];for(var a=!0,c=0;c<r.length;c++)(!1&s||i>=s)&&Object.keys(n.O).every((function(t){return n.O[t](r[c])}))?r.splice(c--,1):(a=!1,s<i&&(i=s));if(a){t.splice(u--,1);var l=o();void 0!==l&&(e=l)}}return e}s=s||0;for(var u=t.length;u>0&&t[u-1][2]>s;u--)t[u]=t[u-1];t[u]=[r,o,s]}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.p=""}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,s,i=r[0],a=r[1],c=r[2],l=0;if(i.some((function(e){return 0!==t[e]}))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(c)var u=c(n)}for(e&&e(r);l<i.length;l++)s=i[l],n.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return n.O(u)},r=self["webpackChunkalexstone_site"]=self["webpackChunkalexstone_site"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(8)}));r=n.O(r)})();
//# sourceMappingURL=app.js.map