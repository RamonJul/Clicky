(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e){e.exports=[{id:1,image:"https://res.cloudinary.com/daawmv4sy/image/upload/c_scale,h_250,w_200/v1554487751/clicky%20lotr/latest.jpg"},{id:2,image:"https://res.cloudinary.com/daawmv4sy/image/upload/c_scale,h_250,w_200/v1554488531/clicky%20lotr/Galadriel.webp"},{id:3,image:"https://res.cloudinary.com/daawmv4sy/image/upload/c_scale,h_250,w_200/v1554497550/clicky%20lotr/Gandalf_the_Grey.webp"},{id:4,image:"https://res.cloudinary.com/daawmv4sy/image/upload/c_scale,h_250,w_200/v1554497551/clicky%20lotr/Gimli_-_FOTR.webp"},{id:5,image:"https://res.cloudinary.com/daawmv4sy/image/upload/c_scale,h_250,w_200/v1554497554/clicky%20lotr/Legolas_-_in_Two_Towers.PNG.webp"},{id:6,image:"https://res.cloudinary.com/daawmv4sy/image/upload/c_scale,h_250,w_200/v1554497556/clicky%20lotr/Sauron-2.webp"},{id:7,image:"https://res.cloudinary.com/daawmv4sy/image/upload/c_scale,h_250,w_200/v1554497557/clicky%20lotr/Seanbean_boromir.webp"},{id:8,image:"https://res.cloudinary.com/daawmv4sy/image/upload/c_scale,h_250,w_200/v1554497596/clicky%20lotr/Untitledjk.webp"},{id:9,image:"https://res.cloudinary.com/daawmv4sy/image/upload/c_scale,h_250,w_200/v1554497643/clicky%20lotr/Christopher_Lee_as_Saruman.webp"},{id:10,image:"https://res.cloudinary.com/daawmv4sy/image/upload/c_scale,h_250,w_200/v1554497721/clicky%20lotr/Sam.webp"},{id:11,image:"https://res.cloudinary.com/daawmv4sy/image/upload/c_scale,h_250,w_200/v1554682162/clicky%20lotr/Merry1.webp"},{id:12,image:"https://res.cloudinary.com/daawmv4sy/image/upload/c_scale,h_250,w_200/v1554682174/clicky%20lotr/Elrond_of_Rivendell.webp"},{id:13,image:"https://res.cloudinary.com/daawmv4sy/image/upload/c_scale,h_250,w_200/v1554682181/clicky%20lotr/Gollum_Render.jpg"},{id:14,image:"https://res.cloudinary.com/daawmv4sy/image/upload/c_scale,h_250,w_200/v1554682194/clicky%20lotr/100_beautiful_arwen.webp"},{id:15,image:"https://res.cloudinary.com/daawmv4sy/image/upload/c_scale,h_250,w_200/v1554682204/clicky%20lotr/Pippinprintscreen.webp"}]},function(e,t,a){e.exports=a(21)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var c=a(0),i=a.n(c),r=a(7),o=a.n(r),n=(a(15),a(1)),l=a(2),s=a(4),m=a(3),d=a(5),u=(a(16),function(e){function t(){return Object(n.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("nav",{className:"navbar navbar-light"},i.a.createElement("h4",{id:"topScore"}," Top Score: ",this.props.topScore),i.a.createElement("h4",{id:"score"}," Score: ",this.props.score))}}]),t}(i.a.Component)),p=(a(17),function(e){function t(){return Object(n.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"clickyImg",onClick:function(){return e.props.click(e.props.id)}},i.a.createElement("img",{src:this.props.img,alt:"img",className:"image"}))}}]),t}(i.a.Component)),h=(a(18),function(e){function t(){return Object(n.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"holder"},this.props.children)}}]),t}(i.a.Component)),y=a(8),_=(a(19),function(e){function t(){return Object(n.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"container"},this.props.children)}}]),t}(i.a.Component)),w=(a(20),function(e){function t(){var e,a;Object(n.a)(this,t);for(var c=arguments.length,i=new Array(c),r=0;r<c;r++)i[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).sort=function(){for(var e=y,t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),c=[e[a],e[t]];e[t]=c[0],e[a]=c[1]}return e},a.state={score:0,topScore:0,list:a.sort(),clicked:[]},a.click=function(e){var t,c=a.state.clicked.filter(function(t){return t.id===e}),i=a.state.clicked,r=a.state.topScore;if(void 0===c[0]){var o=a.state.list.filter(function(t){return t.id===e});i.push(o[0]),r=(t=a.state.score+1)>r?t:r}else t=0,i=[];a.setState({score:t,topScore:r,list:a.sort(),clicked:i})},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(_,null,i.a.createElement(u,{score:this.state.score,topScore:this.state.topScore}),i.a.createElement(h,null,this.state.list.map(function(t){return i.a.createElement(p,{key:t.id,id:t.id,img:t.image,click:e.click})})))}}]),t}(i.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.b9d7fc32.chunk.js.map