(this.webpackJsonporoubah=this.webpackJsonporoubah||[]).push([[0],{149:function(e,t,a){},150:function(e,t){},151:function(e,t){},276:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a(0),s=a.n(n),r=a(29),i=a.n(r),l=(a(149),a(8)),o={development:"http://localhost:".concat(5e3),production:"https://orouba.herokuapp.com"},j="localhost"===window.location.hostname?o.development:o.production,d=(a(89),a(20)),h=a(10),b=a(133);a(67),a(150),a(151);var x=function(){return Object(c.jsx)("footer",{style:{position:" relative",marginTop:"485px",bottom:"0",paddingBottom:"0px",width:"100%",background:"#424242"},children:Object(c.jsxs)("h4",{style:{textAlign:"center",color:"#ffffff"},children:["\xa9 ",(new Date).getFullYear()," Copyright:"," Manal & Warod & Muath"]})})},m=a(15),O=a.n(m),u=a(292),p=a(281),g=a(134),f=a(135),v=a(287),y=a(288),w=a(282),k=a(143);function N(e){var t=Object(n.useState)(""),a=Object(l.a)(t,2),s=a[0],r=a[1],i=s.category,o=(s.target,s.description),d=s.image,b=Object(h.f)().id;return Object(n.useEffect)((function(){i||O.a.get("".concat(j,"/api/dashboard/classes")).then((function(e){var t=e.data.classes.find((function(e){return e._id==b}));console.log(t),r(t)}))}),[]),Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(p.a,{children:[Object(c.jsx)(g.a,{className:"pl-5 mt-3",style:{width:"200px"},children:Object(c.jsx)(u.a.Img,{variant:"top",src:d})}),Object(c.jsx)(g.a,{className:"mt-5",children:Object(c.jsxs)(u.a.Body,{children:[Object(c.jsx)(g.a,{style:{width:"400px"},children:Object(c.jsx)(u.a.Text,{children:Object(c.jsxs)("h1",{children:[i," "]})})}),Object(c.jsx)(g.a,{className:"mt-3",style:{width:"500px"},children:Object(c.jsx)(u.a.Text,{children:Object(c.jsxs)("h4",{children:[" ",o," "]})})})]})})]})})}function C(e){var t=new Date,a=t.getFullYear()+"-"+(t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1)+"-"+(t.getDate()<10?"0"+t.getDate():t.getDate()),s=Object(n.useState)(""),r=Object(l.a)(s,2),i=(r[0],r[1]),o=Object(n.useState)(!1),d=Object(l.a)(o,2),b=d[0],x=d[1],m=Object(n.useState)(),N=Object(l.a)(m,2),C=N[0],I=N[1],S=Object(n.useState)(),T=Object(l.a)(S,2),L=T[0],P=T[1],F=function(){return x(!1)},A=Object(n.useState)("morning"),B=Object(l.a)(A,2),E=B[0],D=B[1],G=Object(n.useState)(1),U=Object(l.a)(G,2),R=U[0],_=U[1],H=Object(n.useState)({}),K=Object(l.a)(H,2),z=K[0],q=K[1],M=Object(h.e)();return e.classes.filter=function(e){console.log(e._id)},Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(u.a,{className:"mt-5 ml-5 m-0",style:{width:"800px",height:"100%",backgroundColor:"#303030"},children:[Object(c.jsxs)(p.a,{children:[Object(c.jsx)(g.a,{style:{width:"200px"},children:Object(c.jsx)(u.a.Img,{style:{height:"245px"},variant:"top",src:e.classes.image})}),Object(c.jsx)(g.a,{children:Object(c.jsx)(u.a.Body,{className:"",children:Object(c.jsx)(g.a,{style:{width:"200px"},children:Object(c.jsxs)(u.a.Text,{className:"text-white",children:[Object(c.jsx)("h3",{children:e.classes.category}),Object(c.jsx)(f.a,{style:{width:"150px"},variant:"dark",onClick:function(t){return function(t){e.auth.currentUser?(x(!0),I(t),q({period:E,numOfPeople:R,date:L,class:C})):(console.log("plese register"),alert("Please register"))}(e.classes._id)},children:"Book This Class  "}),Object(c.jsx)(f.a,{style:{width:"150px"},className:"mt-2",variant:"dark",onClick:function(t){return function(e){M.push("/show/".concat(e)),console.log(e),i(e)}(e.classes._id)},children:" Information "})]})})})})]}),Object(c.jsx)(v.a,{show:b,onHide:F,children:Object(c.jsxs)(y.a,{children:[Object(c.jsx)(v.a.Header,{closeButton:!0,children:Object(c.jsx)(v.a.Title,{children:"Book An Appointment"})}),Object(c.jsxs)(v.a.Body,{children:[Object(c.jsxs)(y.a.Group,{controlId:"exampleForm.SelectCustom",children:[Object(c.jsx)(y.a.Label,{children:"Period"}),Object(c.jsxs)(w.a,{variant:"secondary",alignRight:!0,title:"Select period",id:"dropdown-menu-align-right",name:"period",onSelect:function(e){return function(e){D(e),q({period:E,numOfPeople:R,date:L,class:C})}(e)},children:[Object(c.jsx)(k.a.Item,{eventKey:"morning",children:"morning"}),Object(c.jsx)(k.a.Item,{eventKey:"afternoon",children:"afternoon"}),Object(c.jsx)(k.a.Item,{eventKey:"evening",children:"evening"})]})]}),Object(c.jsxs)(y.a.Group,{controlId:"exampleForm.SelectCustom",children:[Object(c.jsx)(y.a.Label,{children:"Number of visitors"}),Object(c.jsxs)(w.a,{variant:"secondary",alignRight:!0,title:"Select number of people",id:"dropdown-menu-align-right",name:"numOfPeople",onSelect:function(e){return function(e){_(e),q({period:E,numOfPeople:R,date:L,class:C})}(e)},children:[Object(c.jsx)(k.a.Item,{eventKey:"1",children:"only me"}),Object(c.jsx)(k.a.Item,{eventKey:"2",children:"my and someone else"}),Object(c.jsx)(k.a.Item,{eventKey:"3",children:"group of people"})]})]}),Object(c.jsxs)(y.a.Group,{as:g.a,controlId:"formGridPassword",children:[Object(c.jsx)(y.a.Label,{children:"Date"}),Object(c.jsx)(y.a.Control,{type:"date",placeholder:"choose date",name:"date",min:a,onChange:function(e){return function(e){P(e.target.value),q({period:E,numOfPeople:R,date:e.target.value,class:C})}(e)}})]}),Object(c.jsxs)(y.a.Group,{as:g.a,controlId:"formGridPassword",children:[Object(c.jsx)(y.a.Label,{children:"Date"}),Object(c.jsx)(y.a.Control,{type:"hidden",placeholder:"choose date",name:"classID",value:C})]})]}),Object(c.jsxs)(v.a.Footer,{children:[Object(c.jsx)(f.a,{variant:"secondary",onClick:F,children:"Close"}),Object(c.jsx)(f.a,{variant:"secondary",onClick:function(t){return function(t){t.preventDefault(),console.log("Book"),console.log("newAppointment",z),O.a.post("".concat(j,"/api/users/").concat(e.auth.currentUser._id,"/appointments/new"),z).then((function(e){console.log(e)})).catch((function(e){return console.log(e)})),x(!1)}(t)},children:"Book"})]})]})})]})})}function I(e){var t=Object(n.useState)([]),a=Object(l.a)(t,2),s=a[0],r=a[1],i=Object(n.useState)(""),o=Object(l.a)(i,2);o[0],o[1];Object(n.useEffect)((function(){O.a.get("".concat(j,"/api/dashboard/classes")).then((function(e){console.log("all classes",e.data.classes),r(e.data.classes)})).catch((function(e){return console.log(" No classes here")}))}),[]),console.log(s);var d=s.map((function(t){return Object(c.jsx)(C,{classes:t,auth:e.auth})}));return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"image-header"}),Object(c.jsx)("section",{id:"hero",children:Object(c.jsx)("div",{className:"hero-container",children:Object(c.jsx)("h1",{})})}),Object(c.jsx)(p.a,{className:"justify-content-md-center ml-5",style:{},children:d})]})}var S=a(283),T=a(289);function L(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(S.a,{className:"mt-5",children:[Object(c.jsxs)(T.a,{children:[Object(c.jsxs)(T.a.Item,{style:{height:"500px",width:"1300px"},children:[Object(c.jsx)("img",{className:"d-block w-100",width:"100%",height:"100%","background-size":"contain",src:"https://hobe.cc/wp-content/uploads/2019/09/326.jpg",alt:"First slide"}),Object(c.jsx)(T.a.Caption,{})]}),Object(c.jsxs)(T.a.Item,{style:{height:"500px",width:"1300px"},children:[Object(c.jsx)("img",{width:"100%",height:"100%","background-size":"contain",src:"https://www.alassalah.com/wp-content/uploads/2013/02/SSS_3048.jpg",alt:"Third slide"}),Object(c.jsx)(T.a.Caption,{})]}),Object(c.jsxs)(T.a.Item,{style:{height:"500px",width:"1300px"},children:[Object(c.jsx)("img",{className:"d-block w-100",width:"100%",height:"100%","background-size":"contain",src:"https://img.soutalomma.com/Large/201711181121192119.jpg",alt:"Third slide"}),Object(c.jsx)(T.a.Caption,{})]})]}),Object(c.jsxs)(p.a,{children:[Object(c.jsx)(g.a,{md:"4",sm:"4",className:"mt-3",children:Object(c.jsxs)(u.a,{style:{height:"550px"},className:"card-movie",children:[Object(c.jsx)(u.a.Img,{variant:"top",src:"https://i.pinimg.com/564x/3b/59/5b/3b595b5a0fe57dd7954e6c9e6b26938e.jpg",height:"300px",style:{margin:"auto",objectFit:"cover"}}),Object(c.jsxs)(u.a.Body,{children:[Object(c.jsx)(u.a.Title,{children:"About Arabian Horse"}),Object(c.jsx)(u.a.Text,{children:"The purebred Arabian horse is striking. An Arabian's most identifiable characteristics are its finely chiseled head, dished face, long arching neck and high tail carriage."})]})]})}),Object(c.jsx)(g.a,{md:"4",sm:"4",className:"mt-3",children:Object(c.jsxs)(u.a,{style:{height:"550px"},className:"card-movie",children:[Object(c.jsx)(u.a.Img,{variant:"top",src:"https://i.pinimg.com/564x/b5/b3/43/b5b34380c7e35ba7e4170fb36366597d.jpg",height:"300px",style:{margin:"auto",objectFit:"cover"}}),Object(c.jsxs)(u.a.Body,{children:[Object(c.jsx)(u.a.Title,{children:"About Arabian Horse"}),Object(c.jsx)(u.a.Text,{children:'Its entire appearance exudes energy, intelligence, courage and nobility. Every time an Arabian moves in its famous "floating trot," he announces to the world his proud, graceful nature.                     '})]})]})}),Object(c.jsx)(g.a,{md:"4",sm:"4",className:"mt-3",children:Object(c.jsxs)(u.a,{style:{height:"550px"},className:"card-movie",children:[Object(c.jsx)(u.a.Img,{variant:"top",src:"https://i.pinimg.com/564x/ce/c2/93/cec293be759a034cc42a8018ba921dbb.jpg",height:"300px",style:{margin:"auto",objectFit:"cover"}}),Object(c.jsxs)(u.a.Body,{children:[Object(c.jsx)(u.a.Title,{children:"About Arabian Horse"}),Object(c.jsx)(u.a.Text,{children:"For thousands of years, Arabians lived among the desert tribes of the Arabian Peninsula, bred by the Bedouins as war mounts for long treks and quick forays into enemy camps. In these harsh desert conditions evolved the Arabian with its large lung capacity and incredible endurance."})]})]})})]})]})})}var P=a(45),F=a(41);function A(e){var t=Object(h.e)(),a=Object(n.useState)({email:"",password:""}),s=Object(l.a)(a,2),r=s[0],i=s[1],o=function(e){var t=e.target,a=t.name,c=t.value;i(Object(F.a)(Object(F.a)({},r),{},Object(P.a)({},a,c)))};return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(y.a,{className:"mt-5",children:Object(c.jsx)(p.a,{className:"justify-content-center mt-5",children:Object(c.jsx)(g.a,{md:8,children:Object(c.jsxs)(y.a.Row,{children:[Object(c.jsx)(g.a,{md:12,children:Object(c.jsxs)(y.a.Group,{as:g.a,controlId:"formGridEmail",children:[Object(c.jsx)(y.a.Label,{children:"Email"}),Object(c.jsx)(y.a.Control,{type:"email",placeholder:"Enter email",name:"email",onChange:function(e){return o(e)}})]})}),Object(c.jsx)(g.a,{md:12,children:Object(c.jsxs)(y.a.Group,{as:g.a,controlId:"formGridPassword",children:[Object(c.jsx)(y.a.Label,{children:"Password"}),Object(c.jsx)(y.a.Control,{type:"password",placeholder:"Password",name:"password",onChange:function(e){return o(e)}})]})}),Object(c.jsx)(y.a.Group,{children:Object(c.jsxs)(g.a,{md:12,children:[Object(c.jsxs)("p",{children:[" You don't have an account? Please ",Object(c.jsx)(d.b,{eventKey:2,as:d.b,to:"/signup",children:"Register"})," "]}),Object(c.jsx)(f.a,{className:"mt-2",variant:"dark",type:"submit",onClick:function(a){return a.preventDefault(),void O.a.post("".concat(j,"/api/auth/login"),r).then((function(a){console.log("Express backend /login response",a);var c=a.data.token,n=a.data.msg;c?(localStorage.setItem("jwtToken",c),e.loginCallback(),console.log("props.loginCallback();",e.loginCallback()),console.log("before navigating to the profile"),t.push("/auth")):console.log("Login error: ",n)}))},children:"Submit"})]})})]})})})})})}var B=a(291),E=a(290);function D(e){var t=Object(h.e)();return e.isLoggedIn?(console.log("You are in the navbar and logged in"),Object(c.jsxs)(B.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",className:"nav-back-color",children:[Object(c.jsx)(B.a.Brand,{href:"/home",style:{fontSize:"45px"},className:"rakkah",children:"\u0639\u0631\u0648\u0628\u0629"}),Object(c.jsx)(B.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(c.jsxs)(B.a.Collapse,{id:"responsive-navbar-nav",children:[Object(c.jsxs)(E.a,{className:"mr-auto ",children:[Object(c.jsx)(E.a.Link,{className:"pl-5",href:"/home",children:"Home"}),Object(c.jsx)(E.a.Link,{href:"/profile",children:"Profile"}),Object(c.jsx)(E.a.Link,{href:"/about",children:"About us"})]}),Object(c.jsx)(E.a,{children:Object(c.jsx)(E.a.Link,{onClick:function(){console.log("Logging Out!"),localStorage.removeItem("jwtToken"),e.loginCallback(),t.push("/home")},children:"Logout"})})]})]})):(console.log("You are in the navbar and not logged in"),Object(c.jsxs)(B.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",className:"nav-back-color",children:[Object(c.jsx)(B.a.Brand,{href:"/home",style:{fontSize:"45px"},className:"rakkah",children:"\u0639\u0631\u0648\u0628\u0629"}),Object(c.jsx)(B.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(c.jsxs)(B.a.Collapse,{id:"responsive-navbar-nav",children:[Object(c.jsxs)(E.a,{className:"mr-auto",children:[Object(c.jsx)(E.a.Link,{className:"pl-5",href:"/home",children:"Home"}),Object(c.jsx)(E.a.Link,{href:"/about",children:"About us"})]}),Object(c.jsxs)(E.a,{children:[Object(c.jsx)(E.a.Link,{href:"/login",children:"Login "}),Object(c.jsx)(E.a.Link,{href:"/signup",children:"Register "})]})]})]}))}var G=a(177),U=a(285),R=a(136),_=a(284),H=a(137),K=a.n(H);function z(e){console.log(e.apointmentsId);var t=e.apointmentsDate;return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(g.a,{className:"mt-5 m-0 ",style:{left:"80px",width:"1000px"},children:Object(c.jsx)(u.a,{className:"ml-5",style:{width:"900px"},children:Object(c.jsxs)(p.a,{style:{height:"100%"},children:[Object(c.jsx)(g.a,{xs:6,md:5,children:Object(c.jsx)(u.a.Img,{style:{width:"100%"},variant:"top",src:"https://www.thesprucepets.com/thmb/ZLc9b-JnmKNJVUxwztz8_5KnSoU=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/man-training-horse-on-rein-672158405-58b4464b3df78cdcd8ce21e1.jpg"})}),Object(c.jsx)(g.a,{style:{width:"300px",left:"150px"},className:"pl-5 mt-2",children:Object(c.jsxs)(u.a.Body,{children:[Object(c.jsxs)(p.a,{style:{height:"100%"},children:[Object(c.jsx)(g.a,{className:"pr-5",style:{width:"200px",left:"-200px"},children:Object(c.jsxs)(u.a.Text,{children:[Object(c.jsx)("h6",{children:"  Class Name :"}),e.apointmentsName]})}),Object(c.jsx)(g.a,{style:{width:"500px",left:"-200px"},children:Object(c.jsxs)(u.a.Text,{children:[Object(c.jsx)("h6",{children:"  Date :"}),Object(c.jsx)(K.a,{date:t})]})})]}),Object(c.jsxs)(p.a,{style:{height:"100%"},children:[Object(c.jsx)(g.a,{className:"pr-5",style:{width:"200px",left:"-200px"},children:Object(c.jsxs)(u.a.Text,{children:[Object(c.jsx)("h6",{children:"  Number Of People :"})," ",e.numberOfPeople]})}),Object(c.jsx)(g.a,{style:{width:"200px",left:"-200px"},children:Object(c.jsxs)(u.a.Text,{children:[Object(c.jsx)("h6",{children:" Period:"}),"    ",e.period]})})]}),Object(c.jsxs)(p.a,{className:"pt-3",style:{height:"100%"},children:[Object(c.jsx)(g.a,{className:"pr-0",style:{width:"200px",left:"-200px"},children:Object(c.jsxs)(u.a.Text,{children:[Object(c.jsx)("h6",{children:"Apointment ID:"}),"  ",e.apointmentsId]})}),Object(c.jsx)(g.a,{className:"pt-1",style:{left:"-175px"},children:Object(c.jsx)(u.a.Text,{children:Object(c.jsxs)("h6",{children:["  status :  ","approved"===e.status?Object(c.jsx)(_.a,{variant:"success",children:e.status}):"pending"==e.status?Object(c.jsx)(_.a,{variant:"warning",children:e.status}):Object(c.jsx)(_.a,{variant:"danger",children:e.status})]})})})]})]})})]})})})})}function q(e){var t=e.auth.currentUser,a=(t.name,t.email,t.password,t.image,t._id),s=Object(n.useState)(""),r=Object(l.a)(s,2),i=r[0],o=r[1],d=Object(n.useState)({}),h=Object(l.a)(d,2),b=h[0],x=h[1],m=Object(n.useState)(!1),u=Object(l.a)(m,2),w=u[0],k=u[1],N=Object(n.useState)({}),C=Object(l.a)(N,2),I=C[0],T=C[1],L=Object(n.useState)([]),A=Object(l.a)(L,2),B=A[0],E=A[1],D=function(){return k(!1)};Object(n.useEffect)((function(){O.a.get("".concat(j,"/api/users/").concat(a,"/profile")).then((function(e){E(e.data.userAppointments),x(e.data.user),T(e.data.user),console.log("&&&&&&&&&&&&&&&&&",i)}))}),[]);var _=function(e){e.preventDefault(),T((function(t){var a;return Object(F.a)(Object(F.a)({},t),{},(a={},Object(P.a)(a,e.target.name,e.target.value),Object(P.a)(a,"image",i),a))}))},H=B.map((function(e,t){return Object(c.jsx)(z,{apointmentsName:e.class?e.class.category:"m",apointmentsDate:e.date,numberOfPeople:e.numOfPeople,period:e.period,status:e.status,apointmentsId:e._id})}));return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)(S.a,{className:"pt-5",children:[Object(c.jsxs)(p.a,{children:[Object(c.jsx)(g.a,{xs:4,xl:3,md:4,children:Object(c.jsx)(G.a,{src:b.image,width:"100%"})}),Object(c.jsxs)(g.a,{xs:4,xl:6,md:4,children:[Object(c.jsxs)("h2",{children:[" Name: ",b.name," "]}),Object(c.jsxs)("h3",{children:[" Email: ",b.email," "]})]}),Object(c.jsx)(g.a,{className:"pt-5",children:Object(c.jsx)(f.a,{style:{width:"150px"},variant:"dark",onClick:function(){return k(!0)},type:"submit",children:"Edit"})})]}),Object(c.jsx)("hr",{}),Object(c.jsx)(p.a,{className:"justify-content-md-center",children:Object(c.jsxs)("h1",{children:[" Apointments (",B.length,")"]})}),Object(c.jsx)(p.a,{children:H})]}),Object(c.jsxs)(v.a,{show:w,onHide:D,children:[Object(c.jsx)(v.a.Header,{closeButton:!0,children:Object(c.jsx)(v.a.Title,{children:"Edit Profile "})}),Object(c.jsxs)(v.a.Body,{children:[Object(c.jsxs)(U.a,{className:"mb-3 mt-5",children:[Object(c.jsx)(U.a.Prepend,{children:Object(c.jsx)(U.a.Text,{id:"basic-addon1",children:"@"})}),Object(c.jsx)(R.a,{placeholder:"Username","aria-label":"Username","aria-describedby":"basic-addon1",defaultValue:b.name,name:"name",onChange:function(e,t){return _(e)}})]}),Object(c.jsxs)(U.a,{className:"mb-4",children:[Object(c.jsx)(R.a,{placeholder:"Recipient's username","aria-label":"Recipient's username","aria-describedby":"basic-addon2",defaultValue:b.email,name:"email",onChange:function(e){return _(e)}}),Object(c.jsx)(U.a.Append,{children:Object(c.jsx)(U.a.Text,{id:"basic-addon2",children:"@example.com"})})]}),Object(c.jsxs)(U.a,{className:"mb-4",children:[Object(c.jsx)(R.a,{type:"password",placeholder:"Recipient's Password","aria-label":"New Password","aria-describedby":"basic-addon2",name:"password",onChange:function(e){return _(e)}}),Object(c.jsx)(U.a.Append,{children:Object(c.jsx)(U.a.Text,{id:"basic-addon2",children:"change paswword"})})]}),Object(c.jsx)(U.a,{className:"mb-3 mt-5",children:Object(c.jsx)(y.a.File,{type:"file",className:"custom-file-label",id:"image",name:"image",label:"Upload image ",custom:!0,onChange:function(e){var t=new FormData;t.append("image",e.target.files[0]),O.a.post("https://api.imgur.com/3/image/",t,{headers:{Authorization:"Client-ID 8e90d3bf7f85d65"}}).then((function(e){var t=e.data.data.link;o(e.data.data.link),console.log("....................................",t),T((function(e){return Object(F.a)(Object(F.a)({},e),{},{image:"data.data.data.link"})})),console.log("I changed the image to ",e.data.data.link),console.log("Changed image stored is",i)})).catch((function(e){return console.log(e)}))}})})]}),Object(c.jsxs)(v.a.Footer,{children:[Object(c.jsx)(f.a,{variant:"dark",onClick:D,children:"Close"}),Object(c.jsx)(f.a,{variant:"dark",onClick:function(e){return console.log("profile on submit",I),O.a.put("".concat(j,"/api/users/").concat(a,"/profile/edit"),I).then((function(e){return console.log("from backend i recieved ",e)})),void k(!1)},children:"Save Changes"})]})]})]})}function M(e){var t=e.auth.currentUser.role,a=Object(h.e)();return e.auth.isLoggedIn?"admin"===t?(console.log("I am Admin "),a.push("/dashboard"),Object(c.jsx)(h.a,{})):(console.log("I am User "),a.push("/profile"),Object(c.jsx)(h.a,{})):Object(c.jsx)(h.a,{children:Object(c.jsx)(I,{})})}var Y=a(286),J=a(34),V=a(66),W=V.a({name:V.b().required("This Field is Reqiured"),email:V.b().required(" This Field is Reqiured!!").email("example@example.com"),password:V.b().required("This Field is Reqiured!!").min(8,"must be more than 8 ").max(20,"whatEver")});function Z(e){var t=Object(h.e)(),a=Object(n.useState)({name:"",email:"",password:""}),s=Object(l.a)(a,2),r=s[0],i=(s[1],Object(n.useState)(!0)),o=Object(l.a)(i,2),d=o[0],b=o[1];return Object(c.jsxs)(c.Fragment,{children:[!d&&Object(c.jsx)(Y.a,{variant:"danger",children:"The email is already in use. Please change the email"}),Object(c.jsx)(J.d,{initialValues:r,validationSchema:W,onSubmit:function(e){return function(e){console.log("test"),O.a.post("".concat(j,"/api/auth/register"),e).then((function(e){e.data.user?t.push("/login"):setTimeout((function(){b(!0)}),3e3)})).catch((function(e){return console.log(e)}))}(e)},children:Object(c.jsx)(J.c,{className:"mt-5",children:Object(c.jsx)(p.a,{className:"justify-content-center mt-5",children:Object(c.jsxs)(g.a,{md:8,children:[Object(c.jsxs)(y.a.Row,{children:[Object(c.jsxs)(g.a,{md:12,children:[Object(c.jsxs)(y.a.Group,{as:g.a,controlId:"formGridEmail",children:[Object(c.jsx)(y.a.Label,{children:"Email"}),Object(c.jsx)(y.a.Control,{as:J.b,type:"email",placeholder:"Enter email",name:"email"})]}),Object(c.jsx)(J.a,{name:"email",render:function(e){return Object(c.jsx)(Y.a,{variant:"danger",children:e})}})]}),Object(c.jsxs)(g.a,{md:12,children:[Object(c.jsxs)(y.a.Group,{as:g.a,controlId:"formGridPassword",children:[Object(c.jsx)(y.a.Label,{children:"Password"}),Object(c.jsx)(y.a.Control,{as:J.b,type:"password",placeholder:"Password",name:"password"})]}),Object(c.jsx)(J.a,{name:"password",render:function(e){return Object(c.jsx)(Y.a,{variant:"danger",children:e})}})]}),Object(c.jsx)(g.a,{md:12,children:Object(c.jsxs)(y.a.Group,{as:g.a,controlId:"formGridPassword",children:[Object(c.jsx)(y.a.Label,{children:"Name"}),Object(c.jsx)(y.a.Control,{as:J.b,placeholder:"First name",name:"name"}),Object(c.jsx)(J.a,{name:"name",render:function(e){return Object(c.jsx)(Y.a,{variant:"danger",children:e})}})]})})]}),Object(c.jsx)(g.a,{md:12,children:Object(c.jsx)(f.a,{className:"mt-2",variant:"dark",type:"submit",children:"Submit"})})]})})})})]})}var Q=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],s=t[1],r=Object(n.useState)({currentUser:null,isLoggedIn:!1}),i=Object(l.a)(r,2),o=i[0],j=i[1],m=function(){if(localStorage.jwtToken){var e=localStorage.jwtToken,t=Object(b.a)(e,"SECRET").user;j({currentUser:t,isLoggedIn:!0})}else j({currentUser:null,isLoggedIn:!1});s(!0)};return console.log("The current User is: ",o.currentUser,"data loading",a),Object(n.useEffect)(m,[]),Object(c.jsx)(c.Fragment,{children:a&&Object(c.jsxs)(d.a,{children:[Object(c.jsx)(D,{isLoggedIn:o.isLoggedIn,loginCallback:m}),Object(c.jsx)(h.a,{path:"/login",children:Object(c.jsx)(A,{loginCallback:m,auth:o})}),Object(c.jsx)(h.a,{path:"/home",children:Object(c.jsx)(I,{auth:o})}),Object(c.jsx)(h.a,{path:"/about",children:Object(c.jsx)(L,{})}),Object(c.jsx)(h.a,{path:"/signup",children:Object(c.jsx)(Z,{loginCallback:m})}),Object(c.jsx)(h.a,{path:"/profile",children:Object(c.jsx)(q,{auth:o})}),Object(c.jsx)(h.a,{path:"/auth",children:Object(c.jsx)(M,{auth:o})}),Object(c.jsx)(h.a,{path:"/show/:id",children:Object(c.jsx)(N,{auth:o})}),Object(c.jsx)(h.a,{exact:!0,path:"/",children:Object(c.jsx)(I,{auth:o})}),Object(c.jsx)(x,{})]})})},X=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,293)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(Q,{})}),document.getElementById("root")),X()},89:function(e,t,a){}},[[276,1,2]]]);
//# sourceMappingURL=main.0102e4f3.chunk.js.map