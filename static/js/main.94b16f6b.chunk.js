(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e,t,a){e.exports={BreadBottom:"Burgeringredient__BreadBottom__2kACT",BreadTop:"Burgeringredient__BreadTop__5l_IS",Seeds1:"Burgeringredient__Seeds1__Gf8nC",Seeds2:"Burgeringredient__Seeds2__3PciG",Meat:"Burgeringredient__Meat__W269a",Cheese:"Burgeringredient__Cheese__1CJ5K",Salad:"Burgeringredient__Salad__1ktQi",Bacon:"Burgeringredient__Bacon__tpDJO"}},,,,,,function(e,t,a){e.exports={SideDrawer:"SideDrawer__SideDrawer__3wvlM",Open:"SideDrawer__Open__3xsf8",Close:"SideDrawer__Close__2S6c7",Logo:"SideDrawer__Logo__10IHv"}},function(e,t,a){e.exports={BuildControl:"BuildControl__BuildControl__ibcUQ",Label:"BuildControl__Label__2VLnR",Less:"BuildControl__Less__3X6hg",More:"BuildControl__More__2eQpV"}},function(e,t,a){e.exports={ToolBar:"ToolBar__ToolBar__2n7R5",Logo:"ToolBar__Logo__1Mrq6",DesktopOnly:"ToolBar__DesktopOnly__ulSei"}},,function(e,t,a){e.exports={NavigationItem:"NavigationItem__NavigationItem__3YSjr",active:"NavigationItem__active__2GQz1"}},function(e,t,a){e.exports={BuildControls:"BuildControls__BuildControls__220uz",OrderButton:"BuildControls__OrderButton__1ScSk",enable:"BuildControls__enable__3XAWA"}},function(e,t,a){e.exports={Button:"Button__Button__ajevi",Success:"Button__Success__1DMln",Danger:"Button__Danger__18hYt"}},,,function(e,t,a){e.exports={Content:"Layout__Content__3WeML"}},function(e,t,a){e.exports=a.p+"static/media/burger-logo.b8503d26.png"},function(e,t,a){e.exports={Logo:"Logo__Logo__2A07e"}},function(e,t,a){e.exports={NavigationItems:"NavigationItems__NavigationItems__3HY9i"}},function(e,t,a){e.exports={DrawerToggle:"DrawerToggle__DrawerToggle__1eThf"}},function(e,t,a){e.exports={BackDrop:"BackDrop__BackDrop__1XO2E"}},function(e,t,a){e.exports={Burger:"Burger__Burger__2h2kL"}},function(e,t,a){e.exports={Modal:"Modal__Modal__cd320"}},,function(e,t,a){e.exports=a(47)},,,,,,function(e,t,a){},,,,,,,,,,,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(15),c=a.n(l),o=(a(31),a(2)),i=a(3),s=a(5),u=a(4),d=a(6),m=function(e){return e.children},_=a(16),p=a.n(_),g=a(9),h=a.n(g),E=a(17),b=a.n(E),f=a(18),v=a.n(f),B=function(){return r.a.createElement("div",{className:v.a.Logo},r.a.createElement("img",{src:b.a,alt:"MyBurger"}))},C=a(19),k=a.n(C),w=a(11),y=a.n(w),S=function(e){return r.a.createElement("li",{className:y.a.NavigationItem},r.a.createElement("a",{href:e.link,className:e.active?y.a.active:null},e.children))},N=function(e){return r.a.createElement("ul",{className:k.a.NavigtionItems},r.a.createElement(S,{link:"/",active:!0}," Burger Builder "),r.a.createElement(S,{link:"/"}," Checkout "))},O=a(20),D=a.n(O),j=function(e){return r.a.createElement("div",{className:D.a.DrawerToggle,onClick:e.clicked},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))},T=function(e){return r.a.createElement("header",{className:h.a.ToolBar},r.a.createElement(j,{clicked:e.drawerToggleClicked}),r.a.createElement("div",{className:h.a.Logo},r.a.createElement(B,null)),r.a.createElement("nav",{className:h.a.DesktopOnly},r.a.createElement(N,null)))},L=a(7),x=a.n(L),I=a(21),H=a.n(I),M=function(e){return e.show?r.a.createElement("div",{className:H.a.BackDrop,onClick:e.clicked}):null},P=function(e){var t=[x.a.SideDrawer,x.a.Close];return e.open&&(t=[x.a.SideDrawer,x.a.Open]),r.a.createElement(m,null,r.a.createElement(M,{show:e.open,clicked:e.closed}),r.a.createElement("div",{className:t.join(" ")},r.a.createElement("div",{className:x.a.Logo},r.a.createElement(B,null)),r.a.createElement("nav",null,r.a.createElement(N,null))))},A=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={showSideDrawer:!0},a.sideDrawerClosedHandler=function(){a.setState({showSideDrawer:!1})},a.sideDrawerToggleHandler=function(){a.setState(function(e){return{showSideDrawer:!e.showSideDrawer}})},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(m,null,r.a.createElement(T,{drawerToggleClicked:this.sideDrawerToggleHandler}),r.a.createElement(P,{open:this.state.showSideDrawer,closed:this.sideDrawerClosedHandler}),r.a.createElement("main",{className:p.a.Content},this.props.children))}}]),t}(n.Component),Y=a(10),R=a(24),W=a(22),J=a.n(W),Q=a(1),G=a.n(Q),K=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=r.a.createElement("div",{className:G.a.BreadBottom});break;case"bread-top":e=r.a.createElement("div",{className:G.a.BreadTop},r.a.createElement("div",{className:G.a.Seeds1}),r.a.createElement("div",{className:G.a.Seeds2}));break;case"meat":e=r.a.createElement("div",{className:G.a.Meat});break;case"cheese":e=r.a.createElement("div",{className:G.a.Cheese});break;case"bacon":e=r.a.createElement("div",{className:G.a.Bacon});break;case"salad":e=r.a.createElement("div",{className:G.a.Salad});break;default:e=null}return e}}]),t}(n.Component),X=function(e){var t=Object.keys(e.ingredients).map(function(t){return Object(R.a)(Array(e.ingredients[t])).map(function(e,a){return r.a.createElement(K,{key:t+a,type:t})})}).reduce(function(e,t){return e.concat(t)},[]);return 0===t.length&&(t=r.a.createElement("p",null,"Please add ingredients into your burger")),r.a.createElement("div",{className:J.a.Burger},r.a.createElement(K,{type:"bread-top"}),t,r.a.createElement(K,{type:"bread-bottom"}))},z=a(12),F=a.n(z),U=a(8),V=a.n(U),q=function(e){return r.a.createElement("div",{className:V.a.BuildControl},r.a.createElement("div",{className:V.a.Label},e.label),r.a.createElement("button",{className:V.a.Less,onClick:e.removed,disabled:e.disabled},"Less"),r.a.createElement("button",{className:V.a.More,onClick:e.added},"Add"))},$=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],Z=function(e){return r.a.createElement("div",{className:F.a.BuildControls},r.a.createElement("p",null," ",r.a.createElement("strong",null,"Current Price: ",e.price.toFixed(2)," SEK ")),$.map(function(t){return r.a.createElement(q,{key:t.label,label:t.label,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)},disabled:e.disabled[t.type]})}),r.a.createElement("button",{className:F.a.OrderButton,disabled:!e.purchaseable,onClick:e.ordered},"ORDER NOW"))},ee=a(23),te=a.n(ee),ae=function(e){return r.a.createElement(m,null,r.a.createElement(M,{show:e.show,clicked:e.modalClosed}),r.a.createElement("div",{className:te.a.Modal,style:{transform:e.show?"translateY(0)":"translateY(-100vh)",opacity:e.show?"1":"0"}},e.children))},ne=a(13),re=a.n(ne),le=function(e){return r.a.createElement("button",{onClick:e.clicked,className:[re.a.Button,re.a[e.btnType]].join(" ")},e.children)},ce=function(e){var t=Object.keys(e.ingredients).map(function(t){return r.a.createElement("li",{key:t}," ",t,": ",e.ingredients[t]," ")});return r.a.createElement(m,null,r.a.createElement("h2",null,"Your Order"),r.a.createElement("p",null,"Here is your selected items for your order"),r.a.createElement("ul",null,t),r.a.createElement("p",null,r.a.createElement("strong",null,"Total Price: ",e.price.toFixed(2)," SEK ")),r.a.createElement("p",null,"Please confirm your order to checkout"),r.a.createElement(le,{btnType:"Danger",clicked:e.purchaseCancelled},"CANCEL"),r.a.createElement(le,{btnType:"Success",clicked:e.purchaseContinued},"CONTINUE"))},oe={salad:5,cheese:7,bacon:10,meat:12},ie=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={ingredients:{salad:0,bacon:0,cheese:0,meat:0},totalPrice:20,purchaseable:!1,purchasing:!1},a.addIngredientHandler=function(e){var t=a.state.ingredients[e]+1,n=Object(Y.a)({},a.state.ingredients);n[e]=t;var r=oe[e],l=a.state.totalPrice+r;a.setState({totalPrice:l,ingredients:n}),a.updatePurchaseState(n)},a.removeIngredientHandler=function(e){var t=a.state.ingredients[e];if(!(t<=0)){var n=t-1,r=Object(Y.a)({},a.state.ingredients);r[e]=n;var l=oe[e],c=a.state.totalPrice-l;a.setState({totalPrice:c,ingredients:r}),a.updatePurchaseState(r)}},a.purchaseHandler=function(){a.setState({purchasing:!0})},a.purchaseCancelHandler=function(){a.setState({purchasing:!1})},a.purchaseContinue=function(){alert("You continue!")},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"updatePurchaseState",value:function(e){var t=Object.keys(e).map(function(t){return e[t]}).reduce(function(e,t){return e+t},0);this.setState({purchaseable:t>0})}},{key:"render",value:function(){var e=Object(Y.a)({},this.state.ingredients);for(var t in e)e[t]=e[t]<=0;return r.a.createElement(m,null,r.a.createElement(ae,{show:this.state.purchasing,modalClosed:this.purchaseCancelHandler},r.a.createElement(ce,{ingredients:this.state.ingredients,price:this.state.totalPrice,purchaseCancelled:this.purchaseCancelHandler,purchaseContinued:this.purchaseContinue})),r.a.createElement(X,{ingredients:this.state.ingredients}),r.a.createElement(Z,{ingredientAdded:this.addIngredientHandler,ingredientRemoved:this.removeIngredientHandler,disabled:e,purchaseable:this.state.purchaseable,ordered:this.purchaseHandler,price:this.state.totalPrice}))}}]),t}(n.Component),se=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(A,null,r.a.createElement(ie,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(se,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[25,2,1]]]);
//# sourceMappingURL=main.94b16f6b.chunk.js.map