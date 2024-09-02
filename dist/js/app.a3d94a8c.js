(function(){"use strict";var t={4270:function(t,e,n){var o=n(6848),r=function(){var t=this,e=t._self._c;return e("div",{class:t.getTheme()},[e("b-container",[e("Navbar"),e("SectionIntro"),e("SectionAbout"),e("SectionExp"),e("SectionTools"),e("SectionProjects")],1)],1)},a=[],s=function(){var t=this,e=t._self._c;return e("b-navbar",{staticClass:"transparent-navbar border-bottom",attrs:{type:t.getTheme(),toggleable:"lg"}},[e("b-navbar-brand",[t._v("JR")]),e("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),e("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[e("b-navbar-nav",{staticClass:"ml-auto"},[e("b-nav-item",{attrs:{href:"#home"}},[t._v("Home")]),e("b-nav-item",{attrs:{href:"#about"}},[t._v("About")]),e("b-nav-item",{attrs:{href:"#experience"}},[t._v("Experience")]),e("b-nav-item",{attrs:{href:"#tools"}},[t._v("Tools")]),e("b-nav-item",{attrs:{href:"#projects"}},[t._v("Projects")]),e("b-nav-item",{attrs:{href:"#toggle"}},[e("b-form-group",[e("div",{staticClass:"d-flex align-items-center"},[e("b-icon",{staticClass:"mr-2",attrs:{icon:"brightness-high"}}),e("b-form-checkbox",{attrs:{id:"toggle",switch:""},model:{value:t.darkMode,callback:function(e){t.darkMode=e},expression:"darkMode"}},[e("b-icon",{staticClass:"mr-2",attrs:{icon:"moon"}})],1)],1)])],1)],1)],1)],1)},i=[],l={methods:{getTheme(){return this.darkMode?"dark":"light"}},computed:{darkMode:{get(){return this.$store.state.darkMode},set(t){this.$store.commit("Set_ThemeMode",t)}}}},c=l,u=n(1656),d=(0,u.A)(c,s,i,!1,null,null,null),p=d.exports,f=function(){var t=this,e=t._self._c;return e("section",{staticClass:"mt-5",attrs:{id:"home"}},[e("b-container",[e("div",{staticClass:"introduction"},[e("h3",{staticClass:"special-left"},[t._v("Hello I am,")]),e("h2",{staticClass:"middle"},[t._v("Justine Rainiel Ramos")]),e("h4",{staticClass:"special-right"},[t._v("Full Stack Developer")]),e("div",{staticClass:"icons"},[e("a",{attrs:{href:"https://www.linkedin.com/in/justinerainielramos/",target:"_blank"}},[e("b-icon",{staticClass:"h3 mr-2",style:t.getTheme(),attrs:{icon:"linkedin"}})],1),e("a",{attrs:{href:"https://github.com/Jake-Hero",target:"_blank"}},[e("b-icon",{staticClass:"h3 mr-2",style:t.getTheme(),attrs:{icon:"github"}})],1)])])])],1)},m=[],g={methods:{getTheme(){return this.$store.state.darkMode?"color: white":"color: black"}}},h=g,v=(0,u.A)(h,f,m,!1,null,null,null),b=v.exports,_=function(){var t=this,e=t._self._c;return e("section",{staticClass:"mt-5",staticStyle:{"padding-top":"5rem"},attrs:{id:"about"}},[e("b-container",[e("h3",[t._v("About")]),e("div",{staticStyle:{"padding-top":"1rem"}},[e("p",[t._v(" I'm a Full Stack Developer, currently based in the Philippines. ")]),e("p",[t._v(" I graduated with a degree of Bachelors of Science in Information Technology in Lyceum of the Philippines University-Batangas, Batch 2023. ")]),e("p",[t._v(" I mostly like working on back-end development, but I can also work on front-end development when necessary. ")])])])],1)},y=[],S={},k=(0,u.A)(S,_,y,!1,null,"3527a93c",null),x=k.exports,j=function(){var t=this,e=t._self._c;return e("section",{staticStyle:{"padding-top":"5rem"},attrs:{id:"experience"}},[e("b-container",[e("h3",[t._v("Experience")]),e("div",{staticStyle:{"padding-top":"1rem"}},[e("ExperienceInfo",{attrs:{job:".NET Developer",company:"IT Managers Inc.",deployed:"Analog Devices",duration:"Jul 2024 - Present"}}),e("ExperienceInfo",{staticStyle:{"margin-top":"2rem"},attrs:{job:"Software Developer",company:"ARC System Solutions",duration:"Jan 2024 - Mar 2024"}}),e("ExperienceInfo",{staticStyle:{"margin-top":"2rem"},attrs:{job:"Assistant Web Developer",company:"ARC System Solutions",duration:"Jun 2023 - Jan 2024"}})],1)])],1)},C=[],T=function(){var t=this,e=t._self._c;return e("section",{staticClass:"border-left border-dark"},[e("h4",{staticClass:"ml-3"},[t._v(t._s(t.job))]),e("h5",{staticClass:"ml-3"},[t._v(t._s(t.company))]),t.deployed?e("h5",{staticClass:"ml-3"},[t._v(t._s(t.deployed))]):t._e(),e("h5",{staticClass:"ml-3 font-italic"},[t._v(t._s(t.duration))])])},w=[],I={props:{job:String,company:String,duration:String,deployed:{type:String,default:null}}},M=I,A=(0,u.A)(M,T,w,!1,null,"8391e60e",null),P=A.exports,O={components:{ExperienceInfo:P}},E=O,J=(0,u.A)(E,j,C,!1,null,null,null),R=J.exports,D=function(){var t=this,e=t._self._c;return e("section",{staticStyle:{"padding-top":"5rem"},attrs:{id:"tools"}},[e("b-container",[e("h3",[t._v("Tools")]),e("div",{staticStyle:{"padding-top":"3rem"}},[e("b-row",{attrs:{"align-h":"around"}},[e("b-col",[e("ToolInfo",{attrs:{icon:"php",name:"Vanilla PHP"}})],1),e("b-col",[e("ToolInfo",{attrs:{icon:"laravel",name:"Laravel"}})],1),e("b-col",[e("ToolInfo",{attrs:{icon:"dotnet",name:".NET (MVC)"}})],1),e("b-col",[e("ToolInfo",{attrs:{icon:"vuejs",name:"Vue.js"}})],1),e("b-col",[e("ToolInfo",{attrs:{icon:"jquery",name:"jQuery"}})],1)],1)],1)])],1)},$=[],H=function(){var t=this,e=t._self._c;return e("section",[e("div",{staticClass:"border text-center"},[e("div",{staticStyle:{padding:"1rem"}},[e("Icon",{attrs:{icon:t.icon}}),e("label",[t._v(t._s(t.name))])],1)])])},N=[],q=function(){var t=this,e=t._self._c;return e("div",[e("b-img",{class:t.getTheme(),staticStyle:{height:"auto",width:"50px"},attrs:{src:t.svgResolve(),fluid:"",alt:t.icon}})],1)},L=[],B=n.p+"img/php.6f91b897.svg",F=n.p+"img/vue.2e12ddc9.svg",G=n.p+"img/laravel.e90ba671.svg",V=n.p+"img/dotnet.1417d3ed.svg",U=n.p+"img/jquery.cc607502.svg",Q={props:{icon:String},methods:{svgResolve(){switch(this.icon){case"laravel":return G;case"php":return B;case"dotnet":return V;case"vuejs":return F;case"jquery":return U}},getTheme(){return this.$store.state.darkMode?"filter-white":"filter-black"}}},W=Q,z=(0,u.A)(W,q,L,!1,null,"28734380",null),K=z.exports,X={components:{Icon:K},props:{icon:String,name:String}},Y=X,Z=(0,u.A)(Y,H,N,!1,null,"4c5aeb0a",null),tt=Z.exports,et={components:{ToolInfo:tt}},nt=et,ot=(0,u.A)(nt,D,$,!1,null,null,null),rt=ot.exports,at=function(){var t=this,e=t._self._c;return e("section",{staticStyle:{padding:"5rem"},attrs:{id:"projects"}},[e("b-container",[e("h3",[t._v("Projects")]),e("div",{staticStyle:{"padding-top":"3rem"}},[e("b-row",{attrs:{"align-h":"between"}},[e("b-col",[e("ProjectInfo",{attrs:{icon:"renegade",name:"GTA Pinas",link:"https://github.com/Jake-Hero/php-vanilla-GTAPinas",description:"User Control Panel",language:'["laravel", "php"]',date:"2024"}})],1),e("b-col",[e("ProjectInfo",{attrs:{icon:"thesis",name:"Thesis Project Manager",description:"Document Management",language:'["php", "jquery"]',date:"2022-23"}})],1)],1)],1)])],1)},st=[],it=function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-flex justify-content-center mt-3 mb-3"},[e("div",{staticClass:"border border-dark p-3"},[e("b-container",{staticClass:"d-flex align-items-center",attrs:{fluid:""}},[e("b-row",{staticClass:"w-100",attrs:{"align-h":"start"}},[e("b-col",{staticClass:"d-flex align-items-center justify-content-center"},[e("a",{attrs:{href:t.link,target:"_blank"}},[e("b-img",{staticStyle:{height:"auto",width:"150px"},attrs:{src:t.imgResolve(),alt:t.name}})],1)]),e("b-col",{staticClass:"d-flex flex-column justify-content-center"},[e("label",{staticClass:"font-weight-bolder"},[t._v(t._s(t.name))]),e("label",[t._v(t._s(t.description))]),e("label",[t._v(t._s(t.date))]),e("div",{staticClass:"icons-container",staticStyle:{"padding-top":"1rem"}},t._l(t.parsedLanguage,(function(t,n){return e("div",{key:n,staticClass:"icon-item"},[e("Icon",{attrs:{icon:t}})],1)})),0)])],1)],1)],1)])},lt=[],ct=n.p+"img/lpu_ccs.324807cd.png",ut=n.p+"img/gtapinas_logo.b10bb85d.png",dt={components:{Icon:K},props:{icon:String,name:String,description:String,language:String,link:String,date:String},methods:{imgResolve(){switch(this.icon){case"renegade":return ut;case"thesis":return ct}}},computed:{parsedLanguage(){const t=this.language.replace(/'/g,'"');return JSON.parse(t)}}},pt=dt,ft=(0,u.A)(pt,it,lt,!1,null,"d97c4ba0",null),mt=ft.exports,gt={components:{ProjectInfo:mt}},ht=gt,vt=(0,u.A)(ht,at,st,!1,null,null,null),bt=vt.exports,_t={components:{Navbar:p,SectionIntro:b,SectionAbout:x,SectionExp:R,SectionTools:rt,SectionProjects:bt},methods:{getTheme(){return console.log(this.darkMode),this.darkMode?"dark-theme":"light-theme"}},computed:{darkMode:{get(){return this.$store.state.darkMode}}}},yt=_t,St=(0,u.A)(yt,r,a,!1,null,"215eaaa8",null),kt=St.exports,xt=n(3518);o["default"].use(xt.Ay);var jt=new xt.Ay.Store({state:{darkMode:!1},mutations:{Set_ThemeMode(t,e){t.darkMode=e}}}),Ct=n(1641),Tt=n(4486);n(9313);o["default"].use(Ct.vGs),o["default"].use(Tt.hP),o["default"].config.productionTip=!1,new o["default"]({store:jt,render:t=>t(kt)}).$mount("#app")}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={exports:{}};return t[o].call(a.exports,a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,o,r,a){if(!o){var s=1/0;for(u=0;u<t.length;u++){o=t[u][0],r=t[u][1],a=t[u][2];for(var i=!0,l=0;l<o.length;l++)(!1&a||s>=a)&&Object.keys(n.O).every((function(t){return n.O[t](o[l])}))?o.splice(l--,1):(i=!1,a<s&&(s=a));if(i){t.splice(u--,1);var c=r();void 0!==c&&(e=c)}}return e}a=a||0;for(var u=t.length;u>0&&t[u-1][2]>a;u--)t[u]=t[u-1];t[u]=[o,r,a]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){var t={524:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var r,a,s=o[0],i=o[1],l=o[2],c=0;if(s.some((function(e){return 0!==t[e]}))){for(r in i)n.o(i,r)&&(n.m[r]=i[r]);if(l)var u=l(n)}for(e&&e(o);c<s.length;c++)a=s[c],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(u)},o=self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[504],(function(){return n(4270)}));o=n.O(o)})();
//# sourceMappingURL=app.a3d94a8c.js.map