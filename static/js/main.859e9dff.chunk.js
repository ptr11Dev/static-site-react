(this.webpackJsonpstatic=this.webpackJsonpstatic||[]).push([[0],{150:function(e,t,a){var n={"./gal1.jpg":151,"./gal10.jpg":152,"./gal11.jpg":153,"./gal12.jpg":154,"./gal13.jpg":155,"./gal14.jpg":156,"./gal15.jpg":157,"./gal2.jpg":158,"./gal3.jpg":159,"./gal4.jpg":160,"./gal5.jpg":161,"./gal6.jpg":162,"./gal7.jpg":163,"./gal8.jpg":164,"./gal9.jpg":165};function s(e){var t=l(e);return a(t)}function l(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}s.keys=function(){return Object.keys(n)},s.resolve=l,e.exports=s,s.id=150},151:function(e,t,a){e.exports=a.p+"static/media/gal1.e72a990f.jpg"},152:function(e,t,a){e.exports=a.p+"static/media/gal10.d5c62d29.jpg"},153:function(e,t,a){e.exports=a.p+"static/media/gal11.e68a4f2c.jpg"},154:function(e,t,a){e.exports=a.p+"static/media/gal12.5e8d01bf.jpg"},155:function(e,t,a){e.exports=a.p+"static/media/gal13.b35bd937.jpg"},156:function(e,t,a){e.exports=a.p+"static/media/gal14.ae44a8eb.jpg"},157:function(e,t,a){e.exports=a.p+"static/media/gal15.6038908a.jpg"},158:function(e,t,a){e.exports=a.p+"static/media/gal2.1f803edc.jpg"},159:function(e,t,a){e.exports=a.p+"static/media/gal3.20b3d128.jpg"},160:function(e,t,a){e.exports=a.p+"static/media/gal4.28ea781d.jpg"},161:function(e,t,a){e.exports=a.p+"static/media/gal5.78cb036a.jpg"},162:function(e,t,a){e.exports=a.p+"static/media/gal6.393f0806.jpg"},163:function(e,t,a){e.exports=a.p+"static/media/gal7.4bbb57ee.jpg"},164:function(e,t,a){e.exports=a.p+"static/media/gal8.5da9e3bd.jpg"},165:function(e,t,a){e.exports=a.p+"static/media/gal9.41103ad7.jpg"},166:function(e,t,a){var n={"./book.jpg":167,"./console.jpg":168,"./cyberpunk.jpg":169,"./fogpath.jpg":170,"./goal.jpg":171};function s(e){var t=l(e);return a(t)}function l(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}s.keys=function(){return Object.keys(n)},s.resolve=l,e.exports=s,s.id=166},167:function(e,t,a){e.exports=a.p+"static/media/book.068b211f.jpg"},168:function(e,t,a){e.exports=a.p+"static/media/console.bfd595ed.jpg"},169:function(e,t,a){e.exports=a.p+"static/media/cyberpunk.d5b3bca7.jpg"},170:function(e,t,a){e.exports=a.p+"static/media/fogpath.08051a1a.jpg"},171:function(e,t,a){e.exports=a.p+"static/media/goal.44c5b574.jpg"},172:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),l=a(12),c=a.n(l),r=a(2),o=a(3),i=a(5),m=a(4),u=a(6),p=(a(63),a(32)),h=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={},a.handleMoveUserToSection=function(){switch(a.selectedSection){case 0:a.header.scrollIntoView({behavior:"smooth",block:"start"});break;case 1:a.sections[4].scrollIntoView({behavior:"smooth",block:"start"});break;case 2:a.sections[5].scrollIntoView({behavior:"smooth",block:"start"});break;case 3:a.sections[6].scrollIntoView({behavior:"smooth",block:"start"});break;default:console.log("Please contact me at piotrkaczmarek.dev@gmail.com with this error.")}},a.handleBurger=function(){a.burgerIco.classList.toggle("active"),document.querySelector(".nav__list").classList.toggle("showMenu")},a.handleScroll=function(e){window.scrollY<100?(a.burgerIcoLine.forEach((function(e){return e.style.setProperty("background-color","#000")})),a.nav.style.cssText="background-color: rgba(0, 0, 0, 0); color:black;"):window.scrollY>=100&&window.scrollY<200?a.nav.style.cssText="background-color: rgba(0, 0, 0, .2); color:white;":window.scrollY>=200&&window.scrollY<300?a.nav.style.cssText="background-color: rgba(0, 0, 0, .4);color:white;":a.nav.style.cssText="background-color: rgba(0, 0, 0, .7);color:white;",window.scrollY>=100&&a.burgerIcoLine.forEach((function(e){return e.style.setProperty("background-color","#fff")}))},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("scroll",this.handleScroll),this.burgerIco=document.querySelector(".nav__burger"),this.burgerIcoLine=document.querySelectorAll(".nav__burger span"),this.nav=document.querySelector(".nav"),this.sections=Object(p.a)(document.querySelectorAll("section")),this.navItems=Object(p.a)(document.querySelectorAll(".nav__item")),this.header=document.querySelector(".header"),this.selectedSection=null,this.navItems.forEach((function(t,a){return t.addEventListener("click",(function(){e.selectedSection=a}))}))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("nav",{className:"nav"},s.a.createElement("p",{className:"companyName"},"Template"),s.a.createElement("div",{className:"nav__burger",onClick:this.handleBurger},s.a.createElement("span",null),s.a.createElement("span",null),s.a.createElement("span",null)),s.a.createElement("ul",{className:"nav__list"},s.a.createElement("li",{className:"nav__item",onClick:this.handleMoveUserToSection},"home"),s.a.createElement("li",{className:"nav__item",onClick:this.handleMoveUserToSection},"gallery"),s.a.createElement("li",{className:"nav__item",onClick:this.handleMoveUserToSection},"team"),s.a.createElement("li",{className:"nav__item",onClick:this.handleMoveUserToSection},"facts"))))}}]),t}(n.Component),d=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("header",{className:"header"},s.a.createElement(h,null),s.a.createElement("div",{className:"banner"},s.a.createElement("h1",{className:"banner__title"},"Storyteller"),s.a.createElement("span",{className:"banner__line"}),s.a.createElement("p",{className:"banner__text"},"A thick mist full of vengeful spirits haunts a prosperous island town off the coast of Oregon, as its inhabitants try to learn their town's dark secret in order to stop it."),s.a.createElement("a",{href:"# ",className:"banner__btn"},"read more")))}}]),t}(n.Component),f=a(52),g=a.n(f),_=a(53),E=a.n(_),b=a(54),N=a.n(b),v=a(55),y=a.n(v),j=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("section",{className:"services"},s.a.createElement("article",{className:"feature"},s.a.createElement("img",{src:N.a,alt:"",className:"feature__icon"}),s.a.createElement("h3",{className:"feature__title"},"A Wow Feature"),s.a.createElement("p",{className:"feature__text"},"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate tempora sunt repellat minus, placeat architecto.")),s.a.createElement("article",{className:"feature"},s.a.createElement("img",{src:y.a,alt:"",className:"feature__icon"}),s.a.createElement("h3",{className:"feature__title"},"A Beautiful Feature"),s.a.createElement("p",{className:"feature__text"},"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate tempora sunt repellat minus, placeat architecto.")),s.a.createElement("article",{className:"feature"},s.a.createElement("img",{src:E.a,alt:"",className:"feature__icon"}),s.a.createElement("h3",{className:"feature__title"},"An Amazing Feature"),s.a.createElement("p",{className:"feature__text"},"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate tempora sunt repellat minus, placeat architecto."))),s.a.createElement("section",{className:"famous"},s.a.createElement("h2",{className:"famous__title"},"Famous quotes"),s.a.createElement("p",{className:"famous__text"},"The insight and experience of others is a valuable source of inspiration and motivation. And learning from successful leaders and entrepreneurs is a fantastic way to grow."),s.a.createElement("blockquote",{className:"quote"},s.a.createElement("p",{className:"quote__content"},"The greatest glory in living lies not in never falling, but in rising every time we fall."),s.a.createElement("footer",{className:"quote__author"},"Nelson Mandela")),s.a.createElement("blockquote",{className:"quote"},s.a.createElement("p",{className:"quote__content"},"If life were predictable it would cease to be life, and be without flavor."),s.a.createElement("footer",{className:"quote__author"},"Eleanor Roosevelt")),s.a.createElement("blockquote",{className:"quote"},s.a.createElement("p",{className:"quote__content"},"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success."),s.a.createElement("footer",{className:"quote__author"},"James Cameron"))))},k=a(56),w=a.n(k),L=a(57),O=a.n(L),x=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={startPosition:0},a.handleLeftArrow=function(){a.setState({startPosition:a.state.startPosition+240},(function(){a.logos.style.setProperty("background-position","".concat(a.state.startPosition,"px 0"))}))},a.handleRightArrow=function(){a.setState({startPosition:a.state.startPosition-240},(function(){a.logos.style.setProperty("background-position","".concat(a.state.startPosition,"px 0"))}))},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.logos=document.querySelector(".ideas__visibleLogos")}},{key:"render",value:function(){return s.a.createElement("section",{className:"ideas"},s.a.createElement("h2",{className:"ideas__title"},"Our ideas"),s.a.createElement("div",{className:"ideas__logos"},s.a.createElement("button",{onClick:this.handleLeftArrow,className:"ideas__arrowLeft"},s.a.createElement("img",{src:w.a,alt:"arrow pointing to the left"})),s.a.createElement("div",{className:"ideas__visibleLogos"}),s.a.createElement("button",{onClick:this.handleRightArrow,className:"ideas__arrowRight"},s.a.createElement("img",{src:O.a,alt:"arrow pointing to the right"}))))}}]),t}(n.Component),S=a(21);var C=function(e){var t={};return e.keys().forEach((function(a){t[a.replace("./","")]=e(a)})),t}(a(150)),T=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("section",{className:"gallery"},s.a.createElement("h2",{className:"gallery__title"},"Gallery"),s.a.createElement("p",{className:"gallery__text"},"Some nice photos from around the internet. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, reiciendis!"),s.a.createElement(S.a,null,s.a.createElement("ul",{className:"photoList"},s.a.createElement("li",{className:"photoList__item"},s.a.createElement("img",{src:C["gal1.jpg"],alt:"monk in the river who is pouring water from bowl",className:"photoList__photo"})),s.a.createElement("li",{className:"photoList__item"},s.a.createElement("img",{src:C["gal2.jpg"],alt:"desert with cloudy sky",className:"photoList__photo"})),s.a.createElement("li",{className:"photoList__item"},s.a.createElement("img",{src:C["gal3.jpg"],alt:"a lady walking among the field",className:"photoList__photo"})),s.a.createElement("li",{className:"photoList__item"},s.a.createElement("img",{src:C["gal4.jpg"],alt:"man dancing with fire",className:"photoList__photo"})),s.a.createElement("li",{className:"photoList__item"},s.a.createElement("img",{src:C["gal5.jpg"],alt:"windmill with cloudy sky in the background",className:"photoList__photo"})),s.a.createElement("li",{className:"photoList__item"},s.a.createElement("img",{src:C["gal6.jpg"],alt:"small wooden boat on the lake with skyscrapers in the background",className:"photoList__photo"})),s.a.createElement("li",{className:"photoList__item"},s.a.createElement("img",{src:C["gal7.jpg"],alt:"fjord during sundown",className:"photoList__photo"})),s.a.createElement("li",{className:"photoList__item"},s.a.createElement("img",{src:C["gal8.jpg"],alt:"a man with surfboard on the beach during sunset",className:"photoList__photo"})),s.a.createElement("li",{className:"photoList__item"},s.a.createElement("img",{src:C["gal9.jpg"],alt:"a tiger in the river",className:"photoList__photo"})),s.a.createElement("li",{className:"photoList__item"},s.a.createElement("img",{src:C["gal10.jpg"],alt:"a soldier with machine gun walking in the fire with parachuters in the background",className:"photoList__photo"})),s.a.createElement("li",{className:"photoList__item"},s.a.createElement("img",{src:C["gal11.jpg"],alt:"two wooden houses among the mountains",className:"photoList__photo"})),s.a.createElement("li",{className:"photoList__item"},s.a.createElement("img",{src:C["gal12.jpg"],alt:"sunset with windmills in the far distance",className:"photoList__photo"})),s.a.createElement("li",{className:"photoList__item"},s.a.createElement("img",{src:C["gal13.jpg"],alt:"a wooden house at the lakeside among the mountains",className:"photoList__photo"})),s.a.createElement("li",{className:"photoList__item"},s.a.createElement("img",{src:C["gal14.jpg"],alt:"foggy forest with wolves on the rock",className:"photoList__photo"})),s.a.createElement("li",{className:"photoList__item"},s.a.createElement("img",{src:C["gal15.jpg"],alt:"a train on the escarpment in the winter",className:"photoList__photo"})))))}}]),t}(n.Component),A=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={users:[],isLoaded:!1},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://randomuser.me/api/?results=4&inc=name,picture").then((function(e){return e.json()})).then((function(t){e.setState({users:t.results,isLoaded:!0})})).catch((function(e){return console.log("Unable to read members' faces - please contact me at piotrkaczmarek.dev@gmail.com",e)}))}},{key:"render",value:function(){return s.a.createElement("section",{className:"team"},s.a.createElement("h2",{className:"team__title"},"Team Members"),s.a.createElement("p",{className:"team__text"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quas iste vero. Quod hic minima ut eligendi autem repellendus alias."),this.state.isLoaded?s.a.createElement("article",{className:"members"},s.a.createElement("div",{className:"member"},s.a.createElement("img",{src:this.state.users[0].picture.large,alt:"",className:"member__img"}),s.a.createElement("p",{className:"member__name"},this.state.users[0].name.first+" "+this.state.users[0].name.last),s.a.createElement("p",{className:"member__position"},"3D Model Designer")),s.a.createElement("div",{className:"member"},s.a.createElement("img",{src:this.state.users[1].picture.medium,alt:"",className:"member__img"}),s.a.createElement("p",{className:"member__name"},this.state.users[1].name.first+" "+this.state.users[1].name.last),s.a.createElement("p",{className:"member__position"},"Lead Developer")),s.a.createElement("div",{className:"member"},s.a.createElement("img",{src:this.state.users[2].picture.medium,alt:"",className:"member__img"}),s.a.createElement("p",{className:"member__name"},this.state.users[2].name.first+" "+this.state.users[2].name.last),s.a.createElement("p",{className:"member__position"},"Customer Service Representative")),s.a.createElement("div",{className:"member"},s.a.createElement("img",{src:this.state.users[3].picture.medium,alt:"",className:"member__img"}),s.a.createElement("p",{className:"member__name"},this.state.users[3].name.first+" "+this.state.users[3].name.last),s.a.createElement("p",{className:"member__position"},"Account Manager"))):"Loading")}}]),t}(n.Component),D=function(){return s.a.createElement("section",{className:"facts"},s.a.createElement("h2",{className:"facts__title"},"Facts & Numbers"),s.a.createElement("div",{className:"facts__container"},s.a.createElement("div",{className:"fact"},s.a.createElement("div",{className:"fact__amount"},"33"),s.a.createElement("div",{className:"fact__line"}),s.a.createElement("h3",{className:"fact__title"},"clients")),s.a.createElement("div",{className:"fact"},s.a.createElement("div",{className:"fact__amount"},"87"),s.a.createElement("div",{className:"fact__line"}),s.a.createElement("h3",{className:"fact__title"},"successful projects")),s.a.createElement("div",{className:"fact"},s.a.createElement("div",{className:"fact__amount"},"17"),s.a.createElement("div",{className:"fact__line"}),s.a.createElement("h3",{className:"fact__title"},"team members")),s.a.createElement("div",{className:"fact"},s.a.createElement("div",{className:"fact__amount"},"1"),s.a.createElement("div",{className:"fact__line"}),s.a.createElement("h3",{className:"fact__title"},"goal"))))};var q=function(e){var t={};return e.keys().forEach((function(a){t[a.replace("./","")]=e(a)})),t}(a(166)),F="linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4))",I=[{id:1,postDateTime:"2020-02-10",postDate:"10th February, 2020",title:"5th generation is coming",content:"PS5 and Xbox Series X are set to arrive later this year, heralding the next generation of the console gaming life cycle.",bgc:"".concat(F," ,url(").concat(q["console.jpg"],")")},{id:2,postDateTime:"2020-01-16",postDate:"16th January, 2020",title:"Cyberpunk 2077 release delayed",content:"CD Projekt Red announced on Twitter that the highly anticipated game, which was set to drop on April 16, 2020, but has now been pushed back five months to September 17, 2020.",bgc:"".concat(F," ,url(").concat(q["cyberpunk.jpg"],")")},{id:3,postDateTime:"2019-12-28",postDate:"28th December, 2019",title:"Winds of Winter release date",content:"THE WINDS OF WINTER release date could be in 2020 for George RR Martin, according to a Game of Thrones and A Song of Ice and Fire expert's sources.",bgc:"".concat(F," ,url(").concat(q["book.jpg"],")")}],P=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("section",{className:"news"},I.map((function(e){return s.a.createElement("article",{className:"post",key:e.id,style:{backgroundImage:e.bgc}},s.a.createElement("time",{className:"post__date",dateTime:e.postDateTime},e.postDate),s.a.createElement("h3",{className:"post__title"},e.title),s.a.createElement("p",{className:"post__text"},e.content))})))}}]),t}(n.Component),M=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("main",null,s.a.createElement("section",{className:"intro"},s.a.createElement("img",{src:g.a,alt:"icon of road",className:"intro__icon"}),s.a.createElement("h2",{className:"intro__title"},"Who & Why"),s.a.createElement("p",{className:"intro__text"},"Jason was an iconic madman who haunts Camp Crystal Lake and the surrounding area, driven to slaughter anyone he encounters by a burning need to avenge the death of his beloved mother, Pamela Voorhees. Jason Voorhees has killed about 161 people, (some of which are completely off screen) over the years.")),s.a.createElement(j,null),s.a.createElement(x,null),s.a.createElement(T,null),s.a.createElement(A,null),s.a.createElement(D,null),s.a.createElement(P,null))}}]),t}(n.Component),U=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={currentYear:null},a.getDate=function(){var e=(new Date).getFullYear();a.setState({currentYear:e})},a.handleClick=function(e){e.preventDefault(),a.popup.classList.add("modalOn"),setTimeout((function(){a.popup.classList.remove("modalOn")}),3e3)},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.popup=document.querySelector(".modal"),this.getDate()}},{key:"render",value:function(){return s.a.createElement("footer",{className:"footer"},s.a.createElement("div",{className:"motto"},s.a.createElement("h3",{className:"motto__company"},"Template"),s.a.createElement("p",{className:"motto__content"},"This is a place where I place my motto like lorem ipsum dolor.")),s.a.createElement("form",{action:"submit",className:"footerForm"},s.a.createElement("input",{type:"text",className:"footerForm__mail",placeholder:"EMAIL"}),s.a.createElement("input",{type:"text",className:"footerForm__subject",placeholder:"SUBJECT"}),s.a.createElement("textarea",{placeholder:"MESSAGE",cols:"50",rows:"1",className:"footerForm__message"}),s.a.createElement("button",{className:"footerForm__btn",onClick:this.handleClick},"Send!")),s.a.createElement("div",{className:"footerLinks"},s.a.createElement("h4",{className:"footerLinks__title"},"Links"),s.a.createElement("ul",{className:"footerLinks__list"},s.a.createElement("li",null,s.a.createElement("a",{href:"# ",className:"footerLinks__item"},"Home")),s.a.createElement("li",null,s.a.createElement("a",{href:"# ",className:"footerLinks__item"},"About")),s.a.createElement("li",null,s.a.createElement("a",{href:"# ",className:"footerLinks__item"},"Services")),s.a.createElement("li",null,s.a.createElement("a",{href:"# ",className:"footerLinks__item"},"Contact")),s.a.createElement("li",null,s.a.createElement("a",{href:"# ",className:"footerLinks__item"},"Partners")))),s.a.createElement("div",{className:"footerSocials"},s.a.createElement("h4",{className:"footerSocials__title"},"Social"),s.a.createElement("ul",{className:"footerSocials__list"},s.a.createElement("li",null,s.a.createElement("a",{href:"# ",className:"footerSocials__item"},"Facebook")),s.a.createElement("li",null,s.a.createElement("a",{href:"# ",className:"footerSocials__item"},"Twitter")),s.a.createElement("li",null,s.a.createElement("a",{href:"# ",className:"footerSocials__item"},"Github")),s.a.createElement("li",null,s.a.createElement("a",{href:"# ",className:"footerSocials__item"},"Pinterest")),s.a.createElement("li",null,s.a.createElement("a",{href:"# ",className:"footerSocials__item"},"Linkedin")),s.a.createElement("li",null,s.a.createElement("a",{href:"# ",className:"footerSocials__item"},"Dribble")),s.a.createElement("li",null,s.a.createElement("a",{href:"# ",className:"footerSocials__item"},"Flickr")))),s.a.createElement("div",{className:"footerEnd"},s.a.createElement("span",{className:"footerEnd__line"}),s.a.createElement("p",{className:"footerEnd__text"},"Few last words!"),s.a.createElement("p",{className:"copy"},"\xa9",s.a.createElement("span",{className:"copy__year"},this.state.currentYear," "),"The best company"),s.a.createElement("ul",{className:"footerEnd__list"},s.a.createElement("li",null,s.a.createElement("a",{href:"# ",className:"footerEnd__item"},"Terms")),s.a.createElement("li",null,s.a.createElement("a",{href:"# ",className:"footerEnd__item"},"Privacy Policy")),s.a.createElement("li",null,s.a.createElement("a",{href:"# ",className:"footerEnd__item"},"Contact")),s.a.createElement("li",null,s.a.createElement("a",{href:"# ",className:"footerEnd__item"},"Job")))),s.a.createElement("div",{className:"modal"},s.a.createElement("p",null,"Thank you for contact!"),s.a.createElement("p",null,"P.S. Actualy this feature doesn't do much - just showing this popup :)")))}}]),t}(n.Component),Y=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(S.b,null,s.a.createElement(d,null),s.a.createElement(M,null),s.a.createElement(U,null)))}}]),t}(n.Component);c.a.render(s.a.createElement(Y,null),document.getElementById("root"))},52:function(e,t,a){e.exports=a.p+"static/media/road.c51bb65d.svg"},53:function(e,t,a){e.exports=a.p+"static/media/key.d04dfc48.svg"},54:function(e,t,a){e.exports=a.p+"static/media/cocktail.e66809b1.svg"},55:function(e,t,a){e.exports=a.p+"static/media/stopwatch.ca61bc5c.svg"},56:function(e,t,a){e.exports=a.p+"static/media/left.aad86071.svg"},57:function(e,t,a){e.exports=a.p+"static/media/right.fbb21171.svg"},58:function(e,t,a){e.exports=a(172)},63:function(e,t,a){}},[[58,1,2]]]);
//# sourceMappingURL=main.859e9dff.chunk.js.map