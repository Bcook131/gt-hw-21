(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{30:function(e,t,a){e.exports=a(58)},35:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(27),r=a.n(o),c=(a(35),a(28)),s=a(1),i=a(7),m=a.n(i),u=a(10),d=a(11),v=a(13),f=a(12),h=function(e){return m.a.get("https://www.googleapis.com/books/v1/volumes?q=".concat(e))},b=function(){return m.a.get("/api/books").then((function(e){return e.data}))},E=function(e){return m.a.post("/api/books",e).then((function(e){return e.data}))},p=function(e){return m.a.delete("/api/books/"+e).then((function(e){return e.data}))},g=function(e){Object(v.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={books:[],savedBooks:[]},e.handleSearch=function(t){var a=t.target.value;h(a).then((function(t){return e.setState({books:t.data.items})}))},e.handleSave=function(t){E(t).then((function(t){alert("Your book has been saved."),e.setState({savedBooks:e.state.savedBooks.concat([t])}),console.log("this is my saved book",e.state.savedBooks)})).catch((function(e){console.log(e)}))},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this;return console.log(this.state.books),l.a.createElement("div",null,l.a.createElement("form",null,l.a.createElement("label",{htmlFor:"inputPassword",className:"col-sm-2 col-form-label",style:{marginLeft:"45%"}},"Search for a Book"),l.a.createElement("div",{className:"form-group row"},l.a.createElement("div",{className:"col-sm-8"},l.a.createElement("input",{type:"text",className:"form-control",name:"search",onChange:this.handleSearch,style:{justifyContent:"center",marginLeft:"30%"}})))),this.state.books.map((function(t){return l.a.createElement("div",{className:"card mb-3"},l.a.createElement("div",{className:"row no-gutters"},l.a.createElement("div",{className:"col-md-4"},l.a.createElement("img",{src:t.volumeInfo.imageLinks&&t.volumeInfo.imageLinks.smallThumbnail||"https://f0.pngfuel.com/png/137/448/black-book-logo-png-clip-art-thumbnail.png",alt:t.volumeInfo.title,width:"300",style:{marginLeft:"50px"}})),l.a.createElement("div",{className:"col-md-8"},l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",{className:"card-title"},t.volumeInfo.title),l.a.createElement("p",{className:"card-text"},t.volumeInfo.authors," "),l.a.createElement("p",{className:"card-text"},t.volumeInfo.description),l.a.createElement("button",{type:"button",className:"btn btn-primary",style:{marginBottom:"10px"},onClick:function(){return e.handleSave({title:t.volumeInfo.title,authors:t.volumeInfo.authors,description:t.volumeInfo.description,image:t.volumeInfo.imageLinks.smallThumbnail,link:t.volumeInfo.infoLink})}},"Save"),l.a.createElement("br",null),l.a.createElement("button",{type:"button",className:"btn btn-primary"},l.a.createElement("a",{href:t.volumeInfo.infoLink,style:{color:"white"}},"View"))))))})))}}]),a}(n.Component),k=function(){return l.a.createElement("div",null,l.a.createElement(g,null))},N=function(){return l.a.createElement("div",null,l.a.createElement("h1",{style:{textAlign:"center"}},"Page not found! Get outta here! ",l.a.createElement("span",{role:"img","aria-label":"Mind Blown Emoji"}," \ud83e\udd2f")," "))},y=function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"jumbotron jumbotron-fluid",style:{backgroundColor:"#E3B5A4"}},l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"display-4"},"React Google Books Search"))))},w=function(){return l.a.createElement("div",null,l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},l.a.createElement("a",{className:"navbar-brand",href:"/"},"Google Books Search"),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"/"},"Searched")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"/saved"},"Saved"))))))},S=function(e){Object(v.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={saved:[]},e.getSavedBooks=function(){b().then((function(t){e.setState({saved:t})}))},e.handleDelete=function(t){window.confirm("Are you sure you want to delete this book?")&&p(t).then((function(a){console.log(a),e.setState({saved:e.state.saved.filter((function(e){return t!==e._id}))})}))},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.getSavedBooks()}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,this.state.saved.map((function(t){return l.a.createElement("div",{className:"card mb-3"},l.a.createElement("div",{className:"row no-gutters"},l.a.createElement("div",{className:"col-md-4"},l.a.createElement("img",{src:t.image,alt:t.title,width:"300",style:{marginLeft:"50px"}})),l.a.createElement("div",{className:"col-md-8"},l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",{className:"card-title"},t.title),l.a.createElement("p",{className:"card-text"},t.authors," "),l.a.createElement("p",{className:"card-text"},t.description),l.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:function(){return e.handleDelete(t._id)},style:{marginBottom:"10px"}},"Delete"),l.a.createElement("br",null),l.a.createElement("button",{type:"button",className:"btn btn-primary"},l.a.createElement("a",{href:t.infoLink,style:{color:"white"}},"View"))))))})))}}]),a}(n.Component);var x=function(){return Object(n.useEffect)((function(){m.a.get("/api/config").then((function(e){console.log(e.data)})).catch((function(e){console.log(e)}))}),[]),l.a.createElement("div",null,l.a.createElement(w,null),l.a.createElement(y,null),l.a.createElement(c.a,null,l.a.createElement(s.c,null,l.a.createElement(s.a,{exact:!0,path:"/",component:k}),l.a.createElement(s.a,{exact:!0,path:"/saved",component:S}),l.a.createElement(s.a,{component:N}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.fff28756.chunk.js.map