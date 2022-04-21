(this.webpackJsonpsaipavantadem=this.webpackJsonpsaipavantadem||[]).push([[0],{125:function(e,t,a){},126:function(e,t,a){},127:function(e,t,a){},128:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(15),i=a.n(r),l=a(3),o=a(9),s=a(6),m=(a(58),function(e){var t=e.handleClick,a=e.menuOpen;return c.a.createElement("div",{className:"menu-icon "+(a&&"menuActive"),onClick:t},c.a.createElement("span",{className:"line1 "+(a&&"menuActive")}),c.a.createElement("span",{className:"line2 "+(a&&"menuActive")}),c.a.createElement("span",{className:"line3 "+(a&&"menuActive")}))}),u=function(e){var t=e.menuOpen,a=e.setMenuOpen;return c.a.createElement("div",{className:"nav-wrapper "+(t&&"menuActive")},c.a.createElement(o.a.div,{id:"navbar",className:"nav-container",initial:{opacity:0},animate:{opacity:1},transition:{duration:1.5}},c.a.createElement("span",{className:"logo "+(t&&"menuActive"),onClick:function(){return s.animateScroll.scrollToTop()}},"Sai Pavan Tadem"),c.a.createElement(m,{handleClick:function(){a(!t)},menuOpen:t})))},p=a(36),f=a.n(p),d=(a(59),{initial:{translateX:"-100vw",opacity:0},animate:{translateX:"0vw",opacity:1,transition:{duration:2,when:"beforeChildren"}}}),v=function(){return c.a.createElement("section",{className:"home-container",id:"home",name:"home"},c.a.createElement(o.a.div,{className:"content",variants:d,initial:"initial",animate:"animate"},c.a.createElement("h1",null,"I\u2019m Sai"),c.a.createElement("p",null,"Graduate student with dedicated research interests in Deep Learning and Computer Vision. "),c.a.createElement(s.Link,{className:"home-btn",to:"portfolio",hashSpy:!0,spy:!0,smooth:!0,delay:100,offset:-100,duration:500},"See My Work")),c.a.createElement(o.a.div,{className:"svg",animate:{translateY:[-20,0,-20,0]},transition:{yoyo:1/0,duration:6}},c.a.createElement("img",{src:f.a,alt:"Developer"})))},E=(a(60),a(61),function(e){var t=e.text,a=e.style;return c.a.createElement("div",{className:"heading-container",style:a},c.a.createElement("h2",{className:"heading"},t),c.a.createElement("span",null))}),h=a(7),g=a(39),y=a(37),b=a(38),O=(a(65),function(e){var t=e.title,a=e.active,n=e.setSelected,r=e.id;return c.a.createElement("div",{className:"portfolio-item "+(a&&"active"),onClick:function(){return n(r)}},t)}),N=function(e){var t=e.projects,a=Object(n.useState)("featured"),r=Object(l.a)(a,2),i=r[0],o=r[1],s=Object(n.useState)([]),m=Object(l.a)(s,2),u=m[0],p=m[1],f=Object(n.useState)([]),d=Object(l.a)(f,2),v=d[0],N=d[1];return console.log(v,"list"),Object(n.useEffect)((function(){var e=[];t.map((function(t){var a=t.category;return e.includes(a)||e.push(a),null})),N(e)}),[t]),Object(n.useEffect)((function(){v.map((function(e){return i===e&&p(t.filter((function(t){return t.category===e}))),null}))}),[i,v,t]),console.log(t),c.a.createElement("section",{"data-aos":"fade-left",className:"portfolio",name:"portfolio",id:"portfolio"},c.a.createElement(E,{text:"Projects",style:{padding:"3rem"}}),c.a.createElement("div",{className:"list"},v&&v.map((function(e){return c.a.createElement(O,{title:e,key:e,active:i===e,setSelected:o,id:e})}))),c.a.createElement("div",{className:"row"},u.length&&u.map((function(e,t){return c.a.createElement("div",{className:"column",key:t},c.a.createElement("img",{src:null===e||void 0===e?void 0:e.img.asset.url,alt:e.title}),c.a.createElement("div",{className:"overlay"},c.a.createElement("div",{className:"left"},c.a.createElement("h3",null,e.title),e.tagline&&c.a.createElement("p",null,e.tagline)),c.a.createElement("div",{className:"right"},"private"!==e.repositoryUrl?c.a.createElement("a",{href:e.repositoryUrl},c.a.createElement(h.a,{icon:y.faGithubSquare,size:"2x",className:"icon",style:{marginRight:"0.3em"},title:"Github Repo"})):c.a.createElement("a",{href:"#_"},c.a.createElement(h.a,{icon:b.faUserLock,size:"2x",className:"icon",style:{marginRight:"0.3em"},title:"Private Repo"})),c.a.createElement("a",{href:e.liveUrl,target:"_blank",rel:"noopener noreferrer"},c.a.createElement(h.a,{icon:g.faExternalLinkSquareAlt,size:"2x",className:"icon",title:"Live view"})))))}))))},j=a(16),k=a(23),S=a(11),x=a.n(S),w=a(24),C=(a(67),a(40)),A=a.n(C),_=(a(68),a(41)),M=function(e){var t=e.type,a=e.style,n=e.text,r=e.onClick,i=e.loading;return c.a.createElement("button",{type:t,className:"button",style:a,onClick:r},i&&c.a.createElement(h.a,{icon:_.faSpinner,size:"sm",spin:!0,className:"icon"}),c.a.createElement("span",{className:i?"none":""},n))},U=function(){var e={email:"",message:""},t=Object(n.useState)(!1),a=Object(l.a)(t,2),r=a[0],i=a[1],o=Object(n.useState)(e),s=Object(l.a)(o,2),m=s[0],u=s[1],p=Object(n.useState)(!1),f=Object(l.a)(p,2),d=f[0],v=f[1],h=Object(n.useRef)(),g=function(){var e=Object(w.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){var t=Object(w.a)(x.a.mark((function t(a){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),v(!0),t.next=4,g();case 4:v(!1),u(e),i(!0);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),b=function(e){u(Object(k.a)(Object(k.a)({},m),{},Object(j.a)({},e.target.name,e.target.value)))};return c.a.createElement("section",{className:"contact",name:"contact",id:"contact"},c.a.createElement(E,{text:"Contact",style:{marginBottom:"3rem"}}),c.a.createElement("div",{className:"content"},c.a.createElement("div",{className:"left"},c.a.createElement("img",{src:A.a,alt:"shake hands"})),c.a.createElement("div",{className:"right"},c.a.createElement("form",{onSubmit:y,ref:h},c.a.createElement("input",{type:"email",name:"email",value:m.email,onChange:b,placeholder:"Email",required:!0}),c.a.createElement("textarea",{name:"message",required:!0,value:m.message,onChange:b,placeholder:"Message"}),c.a.createElement(M,{text:d?"Sending...":"Send",loading:d,type:"submit"}),r&&c.a.createElement("span",{style:{color:"green",marginTop:"1rem"}},"Thanks, I will reply ASAP")))))},L=a(42),P=a.n(L)()({projectId:"fxul9ln3",dataset:"production",useCdn:!0}),R=a(43),T=a.n(R),q=(a(124),a(125),function(e){var t=e.path,a=e.text,n=e.onClick;return c.a.createElement("li",{className:"link"},c.a.createElement(s.Link,{className:"anchor",activeClass:"active",to:t,hashSpy:!0,spy:!0,smooth:!0,onClick:n,delay:100,offset:-70,duration:500},a))}),z=function(e){var t=e.menuOpen,a=e.setMenuOpen;return c.a.createElement("div",{className:"menu "+(t&&"active")},c.a.createElement("ul",null,c.a.createElement(q,{text:"Home",path:"home",onClick:function(){return a(!1)}}),c.a.createElement(q,{text:"Projects",path:"portfolio",onClick:function(){return a(!1)}}),c.a.createElement(q,{text:"Contact",path:"contact",onClick:function(){return a(!1)}})))},I=(a(126),function(){return c.a.createElement("div",{className:"footer"},c.a.createElement("hr",null),c.a.createElement("div",{className:"footer__icons",style:{width:"100%",padding:"10px"}},c.a.createElement("ul",null)))});var B=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)([]),o=Object(l.a)(i,2),s=o[0],m=o[1],p=Object(n.useState)([]),f=Object(l.a)(p,2),d=(f[0],f[1]),E=Object(n.useState)([]),h=Object(l.a)(E,2),g=(h[0],h[1]);return Object(n.useEffect)((function(){P.fetch('*[_type in ["testimonial", "portfolio","service"]]{\n          _type == "testimonial" => {\n            id,\n            name,\n            text,\n            country,\n            url\n          },\n          _type == "portfolio" => {\n            id,\n            title,\n            tagline,\n            category,\n            liveUrl,\n            repositoryUrl,\n            img{\n              asset->{url}\n            },\n          },\n          _type == "service" => {\n            title,\n            tags,\n            icon{\n              asset->{url}\n            },\n          },\n        }\n        ').then((function(e){var t=[],a=[],n=[];e.map((function(e){return e.country?t.push(e):e.liveUrl?a.push(e):n.push(e),null})),g(t),m(a),d(n)})).catch(console.error)}),[]),Object(n.useEffect)((function(){T.a.init({duration:2e3,offset:10})}),[]),c.a.createElement("div",{className:"app-container"},c.a.createElement(u,{menuOpen:a,setMenuOpen:r}),c.a.createElement(z,{menuOpen:a,setMenuOpen:r}),c.a.createElement(v,null),c.a.createElement(N,{projects:s}),c.a.createElement(U,null),c.a.createElement(I,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(127);i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},36:function(e,t,a){e.exports=a.p+"static/media/dev.20e45d9a.svg"},40:function(e,t,a){e.exports=a.p+"static/media/shake.e324d300.svg"},44:function(e,t,a){e.exports=a(128)},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},65:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){}},[[44,1,2]]]);
//# sourceMappingURL=main.2eff4db3.chunk.js.map