(this.webpackJsonpclickygame=this.webpackJsonpclickygame||[]).push([[0],{14:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var c=t(0),n=t.n(c),r=t(4),l=t.n(r),s=t(1),o=t(2),i=t(5),m=t(6),u=t(8),d=t(7),g=function(e){var a=e.score,t=e.topScore;return n.a.createElement(n.a.Fragment,null,n.a.createElement("nav",{className:"navbar navbar-light bg-light "},n.a.createElement("div",{className:"col-md-4 text-center"},n.a.createElement("a",{className:"navbar-brand",href:"/"},"Clicky Game")),n.a.createElement("div",{className:"col-md-4 text-center"},"Click an image to begin!"),n.a.createElement("div",{className:"col-md-4 text-center"},"Score: ",a," | Top Score: ",t)))},p=[{id:1,url:"".concat("/ClickyGame","/assets/images/bmo.png")},{id:2,url:"".concat("/ClickyGame","/assets/images/finn.png")},{id:3,url:"".concat("/ClickyGame","/assets/images/iceking.jpg")},{id:4,url:"".concat("/ClickyGame","/assets/images/jake.png")},{id:5,url:"".concat("/ClickyGame","/assets/images/lumpy.png")},{id:6,url:"".concat("/ClickyGame","/assets/images/marceline.jpg")},{id:7,url:"".concat("/ClickyGame","/assets/images/princess.png")},{id:8,url:"".concat("/ClickyGame","/assets/images/treetrunks.jpg")},{id:9,url:"".concat("/ClickyGame","/assets/images/flame.jpg")},{id:10,url:"".concat("/ClickyGame","/assets/images/prismo.png")},{id:11,url:"".concat("/ClickyGame","/assets/images/peppermint.jpg")},{id:12,url:"".concat("/ClickyGame","/assets/images/gunter.jpg")}],k=function(){for(var e=[].concat(p),a=e.length-1;a>0;a--){var t=Math.floor(Math.random()*(a-1)),c=e[t];e[t]=e[a],e[a]=c}for(var n=[];e.length;)n.push(e.splice(0,3));return n},h=function(e){var a=e.updateScore;return n.a.createElement(n.a.Fragment,null,k().map((function(e,t){return n.a.createElement("div",{key:t,className:"row"},e.map((function(e,t){return n.a.createElement("div",{key:t,className:" col-md-4 p-2",style:{height:"230px"}},n.a.createElement("button",{className:"btn w-100",style:{height:"100%",backgroundImage:"url(".concat(e.url,")"),backgroundSize:"cover"},onClick:function(){return a(e.id)}}))})))})))},v=function(e){var a=e.updateScore;return n.a.createElement("div",{className:"flex-fill"},n.a.createElement("div",{className:"col12"},n.a.createElement("div",{className:"jumbotron text-center m-0"},n.a.createElement("h1",{className:"display-4"},"Clicky Game!"),n.a.createElement("p",{className:"lead"},"Click on an image to earn points, but don't click on any more than once!"))),n.a.createElement("div",{className:"col-12"},n.a.createElement("div",{className:"container"},n.a.createElement(h,{updateScore:a}))))},f=function(){return n.a.createElement("div",{className:"text-center bg-light"},"copyright \xa9 2020")},y=(t(14),function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(i.a)(this,t);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(e=a.call.apply(a,[this].concat(n))).state={score:0,topScore:0,clicked:{}},e.handleClick=function(a){e.state.clicked[a]?e.setState((function(a){return{score:0,topScore:e.state.score>e.state.topScore?e.state.score:e.state.topScore,clicked:{}}})):e.setState((function(e){return{score:e.score++,clicked:Object(o.a)(Object(o.a)({},e.clicked),{},Object(s.a)({},a,!0))}}))},e}return Object(m.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"container-fluid h-100 d-flex flex-column p-0"},n.a.createElement(g,{score:this.state.score,topScore:this.state.topScore}),n.a.createElement(v,{updateScore:this.handleClick}),n.a.createElement(f,null))}}]),t}(c.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,a,t){e.exports=t(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.581aac0c.chunk.js.map