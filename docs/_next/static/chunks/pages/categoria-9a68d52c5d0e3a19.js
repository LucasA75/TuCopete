(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[323],{420:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/categoria",function(){return r(6584)}])},6624:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var i=r(5893),n=r(7294);function a(){return"https://tan-precious-hardware.glitch.me/"}let s=e=>{let{categorias:t,setCategorias:r}=e,[s,o]=(0,n.useState)(""),[l,c]=(0,n.useState)(""),d=async e=>{try{e.preventDefault();let i=a();console.log(i);let n=await fetch(i+"/categoria",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({nombre:s,descripcion:l})});if(!n.ok)throw Error("No se pudo guardar la categoria");let o=await n.json();console.dir(o),r([...t,o])}catch(e){console.error(e)}};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("form",{action:"form",method:"post",onSubmit:d,children:[(0,i.jsx)("label",{htmlFor:"nombre",children:"Nombre"}),(0,i.jsx)("input",{type:"text",id:"nombre",value:s,onChange:e=>o(e.target.value)}),(0,i.jsx)("label",{children:"Descripcion"}),(0,i.jsx)("textarea",{value:l,onChange:e=>c(e.target.value)}),(0,i.jsx)("button",{type:"submit",children:"Guardar"})]}),"Nombre : ",s," | Descripcion : ",l]})},o=e=>{let{categorias:t,setCategorias:r}=e,s=async()=>{try{let e=a(),t=await fetch(e+"/categoria");if(!t.ok)throw Error("Problemas al recuperar las categorias!");let i=await t.json();r(i)}catch(e){console.error(e)}};(0,n.useEffect)(()=>{s()},[]);let o=async e=>{try{let t=a(),r=t+"/categoria?id="+e.id,i=await fetch(r,{method:"DELETE"});if(!i.ok)throw Error("Problemas al eliminar la categoria!");s()}catch(e){console.error(e)}};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h2",{children:"Listado de Categorias"}),(0,i.jsxs)("table",{border:1,children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Id"}),(0,i.jsx)("th",{children:"Nombre"}),(0,i.jsx)("th",{children:"Descripcion"}),(0,i.jsx)("th",{children:"Acciones"})]})}),(0,i.jsx)("tbody",{children:t.map(e=>(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:e.id}),(0,i.jsx)("td",{children:e.nombre}),(0,i.jsx)("td",{children:e.descripcion}),(0,i.jsxs)("td",{children:[(0,i.jsx)("button",{children:"Editar"}),(0,i.jsx)("button",{onClick:()=>o(e),children:"Eliminar"})]})]},e.id))})]})]})};function l(){let[e,t]=(0,n.useState)([]);return(0,i.jsxs)("div",{children:[(0,i.jsx)(s,{categorias:e,setCategorias:t}),(0,i.jsx)("hr",{}),(0,i.jsx)("br",{}),(0,i.jsx)(o,{categorias:e,setCategorias:t})]})}},6584:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return m}});var i=r(5893),n=r(7294),a=r(1664),s=r.n(a);let o=()=>(0,i.jsxs)("header",{style:{backgroundColor:"#f5f5f5",color:"#000",fontFamily:"Roboto",fontSize:"1.5rem",fontWeight:"500",margin:"0 auto",padding:"0.5rem 1rem",transition:"all .2s ease-in-out",display:"flex",justifyContent:"space-between",overflow:"hidden"},children:[(0,i.jsx)("h2",{children:"SoloLicores"}),(0,i.jsxs)("ul",{style:{display:"flex",gap:"30px"},children:[(0,i.jsxs)("li",{children:[(0,i.jsx)("label",{children:"Buscar:"}),(0,i.jsx)("input",{})]}),(0,i.jsx)("li",{children:(0,i.jsx)(s(),{href:"/perfil",children:"Perfil"})})]})]}),l=e=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o,{}),e.children]});r(6624);var c=r(4203),d=r.n(c);r(5675);let h=e=>{let{licor:t}=e,[r,a]=(0,n.useState)(t);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h3",{style:{textAlign:"center",fontSize:"30px",margin:"20px 0"},children:"Categorias Destacadas"}),(0,i.jsx)("div",{className:d().categorias,children:r.map(e=>(0,i.jsxs)("div",{className:d().cajita,children:[console.log(e),(0,i.jsx)("h3",{children:e.licor}),(0,i.jsx)("img",{src:e.img,alt:"Imagen",width:150}),(0,i.jsx)("p",{children:e.precio}),(0,i.jsx)("button",{className:d().btn,children:"Ver m\xe1s"})]},e.id))})]})};var x=r(6943),u=r.n(x);let j=e=>{let{cons:t}=e,[r,a]=(0,n.useState)(t);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h3",{style:{textAlign:"center",fontSize:"30px"},children:"Consejos para tomar"}),(0,i.jsx)("br",{}),(0,i.jsx)("div",{className:u().categorias,children:r.map(e=>(0,i.jsxs)("div",{className:u().cajita,children:[console.log(e),(0,i.jsx)("div",{className:u().imagen,children:"Imagen no encontrada..."}),(0,i.jsx)("h3",{className:u().texto,children:e.texto})]},e.id))})]})},g=()=>{let[e,t]=(0,n.useState)("Usuario");return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(l,{children:(0,i.jsxs)("main",{className:"container_bg",children:[(0,i.jsxs)("h1",{className:"titulo",style:{textAlign:"center",padding:"10px 0"},children:["Bienvenido ",e]}),(0,i.jsx)(h,{licor:[{id:"1",licor:"Vodka",img:"https://elbrindis.cl/wp-content/uploads/2022/06/Vodka-Absolut-1-Litro-460x460.jpg"},{id:"2",licor:"Cerveza",img:"https://elbrindis.cl/wp-content/uploads/2022/06/Vodka-Absolut-1-Litro-460x460.jpg"},{id:"3",licor:"Vino",img:"https://elbrindis.cl/wp-content/uploads/2022/06/Vodka-Absolut-1-Litro-460x460.jpg"},{id:"4",licor:"Espumante",img:"https://elbrindis.cl/wp-content/uploads/2022/06/Vodka-Absolut-1-Litro-460x460.jpg"}]}),(0,i.jsx)("br",{}),(0,i.jsx)(j,{cons:[{id:"1",texto:"Evite personas o lugares que lo hagan beber cuando no quiere o lo inviten a beber m\xe1s de lo que deber\xeda."},{id:"2",texto:"Planee otras actividades que no impliquen beber para d\xedas que tenga ganas de tomar."},{id:"3",texto:"Coma algo antes de beber."},{id:"4",texto:"Utilizar cualquier celebraci\xf3n o acontecimiento para consumir delante de nuestros hijos."}]})]})})})};var m=g},6943:function(e){e.exports={categorias:"consejos_categorias__jrxd4",cajita:"consejos_cajita__BMKDU",imagen:"consejos_imagen__9lhUC",texto:"consejos_texto__NxUNm",btn:"consejos_btn__ND96A"}},4203:function(e){e.exports={categorias:"vitrina_categorias__1Idzg",cajita:"vitrina_cajita__1_qCp",btn:"vitrina_btn__StJlK"}}},function(e){e.O(0,[61,774,888,179],function(){return e(e.s=420)}),_N_E=e.O()}]);