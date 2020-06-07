(function(e){function t(t){for(var a,s,i=t[0],u=t[1],c=t[2],d=0,m=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&m.push(o[s][0]),o[s]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);l&&l(t);while(m.length)m.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,i=1;i<n.length;i++){var u=n[i];0!==o[u]&&(a=!1)}a&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},o={app:0},r=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var l=u;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("85ec"),o=n.n(a);o.a},"0397":function(e,t,n){"use strict";var a=n("fc09"),o=n.n(a);o.a},"1caa":function(e,t,n){},"3f0c":function(e,t,n){},"44df":function(e,t,n){"use strict";var a=n("6c03"),o=n.n(a);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("c975"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Navbar"),n("div",{staticClass:"container"},[e.isAuthenticated?n("div",[n("AddTodo"),n("FilterTodo")],1):n("div",[n("h4",{staticClass:"unauth"},[e._v("Please log in to manage items")])]),n("Todo")],1)],1)},r=[],s=n("5530"),i=n("2f62"),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h3",[e._v("Todos")]),e._m(0),n("div",{staticClass:"todos"},e._l(e.allTodos,(function(t){return n("div",{key:t._id,staticClass:"todo",class:{"is-complete":t.completed},on:{dblclick:function(n){e.authenticate&&e.updateTodo(t)}}},[e._v(" "+e._s(t.name)+" "),e.authenticate?n("i",{staticClass:"fas fa-trash-alt",on:{click:function(n){return e.deleteTodo(t._id)}}}):e._e()])})),0)])},c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"legend"},[n("span",[e._v("Double click to mark as complete")]),n("span",[n("span",{staticClass:"incomplete-box"}),e._v(" = Incomplete ")]),n("span",[n("span",{staticClass:"complete-box"}),e._v(" = complete ")])])}],l={name:"Todos",methods:Object(s["a"])({},Object(i["b"])(["fetchTodos","deleteTodo","updateTodo"])),computed:Object(s["a"])({},Object(i["c"])(["allTodos","authenticate"])),created:function(){this.fetchTodos()}},d=l,m=(n("0397"),n("2877")),p=Object(m["a"])(d,u,c,!1,null,"21228e78",null),f=p.exports,v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h3",[e._v("Add Todo")]),n("div",{staticClass:"add"},[n("form",{on:{submit:e.onSubmit}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",placeholder:"Add Todo..."},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),n("input",{attrs:{type:"submit",value:"Submit"}})])])])},h=[],g=(n("b0c0"),{name:"AddTodo",data:function(){return{name:""}},methods:Object(s["a"])({},Object(i["b"])(["addTodo"]),{onSubmit:function(e){e.preventDefault(),this.addTodo(this.name),this.name=""}})}),b=g,_=(n("9a09"),Object(m["a"])(b,v,h,!1,null,"2e4c2bdc",null)),w=_.exports,T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v(" Filter Todos: "),n("select",{on:{change:function(t){return e.filterTodos(t)}}},[n("option",{attrs:{value:"100"}},[e._v("100")]),n("option",{attrs:{value:"50"}},[e._v("50")]),n("option",{attrs:{value:"20"}},[e._v("20")]),n("option",{attrs:{value:"10"}},[e._v("10")]),n("option",{attrs:{value:"5"}},[e._v("5")])])])},x=[],O={name:"FilterTodos",methods:Object(i["b"])(["filterTodos"])},j=O,k=(n("8294"),Object(m["a"])(j,T,x,!1,null,"7a84e2b0",null)),y=k.exports,C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("VLogModal",{attrs:{hideLogin:e.hideLogin}}),n("VRegisterModal",{attrs:{hideRegister:e.hideRegister}}),n("div",{staticClass:"navbar"},[n("div",{staticClass:"container"},[n("a",{attrs:{href:"#"}},[e._v("MEVN Todo Manager")]),n("div",{staticClass:"link"},[n("ul",[e.authenticate?n("div",[n("li",[n("a",{attrs:{href:"#"},on:{click:e.logout}},[e._v("Logout")])])]):n("div",[n("li",[n("a",{attrs:{href:"#"},on:{click:e.showRegister}},[e._v("Register")])]),n("li",[n("a",{attrs:{href:"#"},on:{click:e.showLogin}},[e._v("Login")])])])])])])])],1)},R=[],S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("modal",{attrs:{name:"login-modal"}},[n("ValidationObserver",{ref:"form"},[n("form",{on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[n("ValidationProvider",{attrs:{name:"email",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[n("div",{staticClass:"form-group"},[n("label",[e._v("Email:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",autocomplete:"false"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),n("span",{staticClass:"red"},[e._v(e._s(a[0]))])])]}}])}),n("ValidationProvider",{attrs:{name:"password",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[n("div",{staticClass:"form-group"},[n("label",[e._v("Password:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",autocomplete:"false"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),n("span",{staticClass:"red"},[e._v(e._s(a[0]))])])]}}])}),null!==e.message?n("p",{staticClass:"red"},[e._v(e._s(e.message))]):e._e(),n("button",{staticClass:"btn"},[e._v("Login")])],1)])],1)},P=[],$={props:["hideLogin"],data:function(){return{email:"",password:""}},methods:{onSubmit:function(){var e=this;this.$refs.form.validate().then((function(t){t&&e.$store.dispatch("login",{email:e.email,password:e.password}).then((function(){null===e.message&&(e.email=e.password="",e.hideLogin())}))}))}},computed:Object(i["c"])(["message"])},L=$,E=(n("7a35"),Object(m["a"])(L,S,P,!1,null,"b6178e62",null)),V=E.exports,N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("modal",{attrs:{name:"register-modal"}},[n("ValidationObserver",{ref:"form"},[n("form",{on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[n("ValidationProvider",{attrs:{name:"name",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[n("div",{staticClass:"form-group"},[n("label",[e._v("Name:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",autocomplete:"false"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),n("span",{staticClass:"red"},[e._v(e._s(a[0]))])])]}}])}),n("ValidationProvider",{attrs:{name:"email",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[n("div",{staticClass:"form-group"},[n("label",[e._v("Email:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",autocomplete:"false"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),n("span",{staticClass:"red"},[e._v(e._s(a[0]))])])]}}])}),n("ValidationProvider",{attrs:{name:"password",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[n("div",{staticClass:"form-group"},[n("label",[e._v("Password:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",autocomplete:"false"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),n("span",{staticClass:"red"},[e._v(e._s(a[0]))])])]}}])}),null!==e.message?n("p",{staticClass:"red"},[e._v(e._s(e.message))]):e._e(),n("button",{staticClass:"btn"},[e._v("Register")])],1)])],1)},M=[],I={props:["hideRegister"],data:function(){return{email:"",password:"",name:""}},methods:{onSubmit:function(){var e=this;this.$refs.form.validate().then((function(t){t&&e.$store.dispatch("register",{email:e.email,password:e.password,name:e.name}).then((function(){null===e.message&&(e.email=e.password="",e.hideRegister())}))}))}},computed:{message:function(){return this.$store.state.auth.message}}},q=I,A=(n("901e"),Object(m["a"])(q,N,M,!1,null,"6012bd58",null)),D=A.exports,F={name:"Navbar",components:{VLogModal:V,VRegisterModal:D},data:function(){return{isLoginModalOpen:!1,isRegisterModalOpen:!1}},methods:Object(s["a"])({},Object(i["b"])(["logout"]),{showLogin:function(){this.$modal.show("login-modal")},hideLogin:function(){this.$modal.hide("login-modal")},showRegister:function(){this.$modal.show("register-modal")},hideRegister:function(){this.$modal.hide("register-modal")}}),computed:Object(i["c"])(["authenticate"])},J=F,z=(n("44df"),Object(m["a"])(J,C,R,!1,null,"7bc5e9b5",null)),B=z.exports,G={name:"app",components:{Todo:f,AddTodo:w,FilterTodo:y,Navbar:B},computed:{isAuthenticated:function(){return this.$store.state.auth.authenticate}},methods:Object(s["a"])({},Object(i["d"])(["isLogin"])),created:function(){this.isLogin()}},H=G,K=(n("034f"),Object(m["a"])(H,o,r,!1,null,null,null)),Q=K.exports,U=(n("4de4"),n("c740"),n("a434"),n("96cf"),n("1da1")),W=n("bc3a"),X=n.n(W),Y={todos:[]},Z={allTodos:function(e){return e.todos}},ee={fetchTodos:function(e){return Object(U["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,X.a.get("/api/v1/item");case 3:a=t.sent,n("setTodos",a.data);case 5:case"end":return t.stop()}}),t)})))()},addTodo:function(e,t){return Object(U["a"])(regeneratorRuntime.mark((function n(){var a,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,n.next=3,X.a.post("/api/v1/item",{name:t});case 3:o=n.sent,a("newTodo",o.data);case 5:case"end":return n.stop()}}),n)})))()},deleteTodo:function(e,t){return Object(U["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,n.next=3,X.a.delete("/api/v1/item/".concat(t));case 3:a("removeTodo",t);case 4:case"end":return n.stop()}}),n)})))()},filterTodos:function(e,t){return Object(U["a"])(regeneratorRuntime.mark((function n(){var a,o,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,o=parseInt(t.target.options[t.target.options.selectedIndex].innerText),n.next=4,X.a.get("/api/v1/item/");case 4:r=n.sent,a("setTodos",r.data.splice(0,o));case 6:case"end":return n.stop()}}),n)})))()},updateTodo:function(e,t){return Object(U["a"])(regeneratorRuntime.mark((function n(){var a,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,n.next=3,X.a.put("/api/v1/item/".concat(t._id));case 3:o=n.sent,a("updateTodo",o.data);case 5:case"end":return n.stop()}}),n)})))()}},te={setTodos:function(e,t){return e.todos=t},newTodo:function(e,t){return e.todos.unshift(t)},removeTodo:function(e,t){return e.todos=e.todos.filter((function(e){return e._id!==t}))},updateTodo:function(e,t){var n=e.todos.findIndex((function(e){return e._id===t._id}));-1!==n&&e.todos.splice(n,1,t)}},ne={state:Y,getters:Z,actions:ee,mutations:te},ae=function(e){e?X.a.defaults.headers={"Content-Type":"application/json","x-auth-token":e}:(localStorage.removeItem("token"),delete X.a.defaults.headers["x-auth-token"])},oe=ae,re={authenticate:!1,user:null,message:null},se={message:function(e){return e.message},authenticate:function(e){return e.authenticate}},ie={register:function(e,t){return Object(U["a"])(regeneratorRuntime.mark((function n(){var a,o,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,n.prev=1,o={"Content-Type":"application/json"},n.next=5,X.a.post("/api/v1/user",t,o);case 5:r=n.sent,a("authSuccess",r.data),n.next=12;break;case 9:n.prev=9,n.t0=n["catch"](1),a("authError",n.t0.response.data);case 12:case"end":return n.stop()}}),n,null,[[1,9]])})))()},login:function(e,t){return Object(U["a"])(regeneratorRuntime.mark((function n(){var a,o,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,n.prev=1,o={"Content-Type":"application/json"},n.next=5,X.a.post("/api/v1/auth",t,o);case 5:r=n.sent,a("authSuccess",r.data),n.next=12;break;case 9:n.prev=9,n.t0=n["catch"](1),a("authError",n.t0.response.data);case 12:case"end":return n.stop()}}),n,null,[[1,9]])})))()},logout:function(e){return Object(U["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e.commit,n("logout");case 2:case"end":return t.stop()}}),t)})))()}},ue={authSuccess:function(e,t){e.user=t.user,e.authenticate=!0,e.message=null;var n={value:t.token,expiresIn:new Date((new Date).getTime()+828e5).getTime()};n=JSON.stringify(n),localStorage.setItem("token",n),oe(localStorage.token)},authError:function(e,t){e.message=t.msg,e.authenticate=!1,e.user=null},logout:function(e){e.authenticate=!1,e.user=null,localStorage.removeItem("token"),oe(!1)},isLogin:function(e){var t=localStorage.getItem("token");return!(!t||(t=JSON.parse(t),(new Date).getTime()>parseInt(t.expiresIn)))&&(e.authenticate=!0,oe(t.value),t.value)}},ce={state:re,getters:se,actions:ie,mutations:ue};a["a"].use(i["a"]);var le=new i["a"].Store({modules:{todos:ne,auth:ce}}),de=n("1881"),me=n.n(de),pe=n("7bb1");oe(localStorage.token),Object(pe["c"])("required",{validate:function(e){return{required:!0,valid:-1===["",null,void 0].indexOf(e)}},computesRequired:!0,message:"The {_field_} field must not be empty"}),a["a"].component("ValidationProvider",pe["b"]),a["a"].component("ValidationObserver",pe["a"]),a["a"].use(me.a),a["a"].config.productionTip=!1,new a["a"]({store:le,render:function(e){return e(Q)}}).$mount("#app")},"6c03":function(e,t,n){},"6c08":function(e,t,n){},"7a35":function(e,t,n){"use strict";var a=n("6c08"),o=n.n(a);o.a},8294:function(e,t,n){"use strict";var a=n("1caa"),o=n.n(a);o.a},"85ec":function(e,t,n){},"901e":function(e,t,n){"use strict";var a=n("3f0c"),o=n.n(a);o.a},"9a09":function(e,t,n){"use strict";var a=n("f674"),o=n.n(a);o.a},f674:function(e,t,n){},fc09:function(e,t,n){}});
//# sourceMappingURL=app.58359802.js.map