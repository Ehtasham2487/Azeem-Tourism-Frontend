import{R as c,r as s,j as e,A as L,C as N,P as ne,v,t as F,z as C,q as ae,w as re,T as b,I as T,x as ie,y as oe,s as R}from"./index-odFMYlZr.js";import{d as le,a as ce,D as de,M as pe,A as xe,b as ue}from"./ExitToApp-_53kb0_y.js";import{A as me}from"./AddressForm-FjX731P5.js";import{R as he}from"./Review-DoFnFW2g.js";import{C as P}from"./CssBaseline-M8cyZCHq.js";import{S as ge,a as je,b as Se}from"./DeleteForeverOutlined-ur7hsYTx.js";import{T as ve,L as fe}from"./VisibilityOff-65Yzkfwp.js";import"./withStyles-UNuNTrS6.js";import"./TextField-KqW6Ko5o.js";import"./Select-tRT-Bd6P.js";const k=["Package Details","Review Your Package"];function we(){const[t,a]=c.useState(0),[r,f]=s.useState([]),[i,o]=s.useState([]),[I,z]=s.useState([]),[w,U]=s.useState([]),[d,M]=s.useState(""),[p,W]=s.useState(""),[x,$]=s.useState(""),[u,E]=s.useState(""),[y,V]=s.useState(""),[m,Y]=s.useState(""),[h,_]=s.useState(0),[g,G]=s.useState(""),[j,H]=s.useState(0),[S,O]=s.useState(0),[q,B]=c.useState(""),[J,K]=s.useState([]),[X,Z]=s.useState([]),D=()=>{r.length==0||d.length==0||p.length==0||x.length==0||u.length==0||m.length==0||h.length==0||g.length==0||j.length==0||S.length==0?B("Kindly Fill All The Fields !!! "):(i.map(n=>{K(l=>[...l,{image:n}])}),w.map(n=>{Z(l=>[...l,{video:n}])}),B(""),a(t+1))},Q=()=>{const n={title:d,description:p,address:x,city:u,state:m,zip:h,country:g,images:J,videos:X,totalCount:j,price:S,active:!0,region:y,milestone:[{}]},l="https://backend.azeemtourism.com/api/tours/create";ae.post(l,n).then(se=>{}).catch(se=>{})},ee=()=>{a(t-1)};function te(n){switch(n){case 0:return e.jsx(me,{title:d,setZip:_,zip:h,country:g,setCountry:G,desc:p,address:x,setState:Y,setCity:E,state:m,city:u,setDesc:W,setTitle:M,setAddress:$,setVideoFileUrl:U,videoFileUrl:w,videoFileName:I,setVideoFileName:z,setImageFileName:f,imageFileName:r,setImageFileUrl:o,imageFileUrl:i,totalCount:j,setTotalCount:H,price:S,setPrice:O,setRegion:V,region:y});case 1:return e.jsx(he,{title:d,zip:h,country:g,desc:p,address:x,state:m,city:u,videoFileUrl:w,imageFileName:r,imageFileUrl:i,videoFileName:I,price:S,region:y,totalCount:j});default:throw new Error("Unknown step")}}return e.jsxs(c.Fragment,{children:[e.jsx(P,{}),e.jsx(L,{position:"absolute",color:"default",elevation:0,sx:{position:"relative",borderBottom:n=>`1px solid ${n.palette.divider}`}}),e.jsx(N,{component:"main",maxWidth:"sm",sx:{mb:4},children:e.jsxs(ne,{variant:"outlined",sx:{my:{xs:3,md:6},p:{xs:2,md:3}},children:[e.jsx(ge,{activeStep:t,sx:{pt:3,pb:5},children:k.map(n=>e.jsx(je,{children:e.jsx(Se,{children:n})},n))}),t===k.length?e.jsx(c.Fragment,{children:e.jsx(v,{variant:"h5",gutterBottom:!0,children:"Your Tour Has Been Created"})}):e.jsxs(c.Fragment,{children:[te(t),e.jsxs(F,{sx:{display:"flex",justifyContent:"flex-end"},children:[e.jsx(v,{style:{color:"red"},variant:"subtitle1",children:q}),t!==0&&e.jsx(C,{onClick:ee,sx:{mt:3,ml:1},children:"Back"}),t===k.length-1?e.jsxs(C,{variant:"contained",onClick:()=>{Q(),D()},sx:{mt:3,ml:1},children:[" ","Create Tour"]}):e.jsxs(C,{variant:"contained",onClick:D,sx:{mt:3,ml:1},children:[" ","Next"]})]})]})]})})]})}const ye=oe({palette:{primary:{main:"#27272a",contrastText:"#fff"}}});function Ce(t){return e.jsxs(v,{variant:"body2",color:"text.secondary",align:"center",...t,children:["Copyright © ",e.jsx(fe,{color:"inherit",children:"Azeem Tourism"})," ",new Date().getFullYear(),"."]})}const A=240,be=R(L,{shouldForwardProp:t=>t!=="open"})(({theme:t,open:a})=>({zIndex:t.zIndex.drawer+1,transition:t.transitions.create(["width","margin"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen}),...a&&{marginLeft:A,width:`calc(100% - ${A}px)`,transition:t.transitions.create(["width","margin"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.enteringScreen})}})),Te=R(ue,{shouldForwardProp:t=>t!=="open"})(({theme:t,open:a})=>({"& .MuiDrawer-paper":{position:"relative",whiteSpace:"nowrap",width:A,transition:t.transitions.create("width",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.enteringScreen}),boxSizing:"border-box",...!a&&{overflowX:"hidden",transition:t.transitions.create("width",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen}),width:t.spacing(7),[t.breakpoints.up("sm")]:{width:t.spacing(9)}}}}));function ze(){const[t,a]=s.useState(!0),r=()=>{a(!t)},f=re();var i=JSON.parse(localStorage.getItem("user"));return e.jsx(ve,{theme:ye,children:e.jsxs(F,{sx:{display:"flex"},children:[e.jsx(P,{}),e.jsx(be,{position:"absolute",open:t,children:e.jsxs(b,{sx:{pr:"24px"},children:[e.jsx(T,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:r,sx:{marginRight:"36px",...t&&{display:"none"}},children:e.jsx(ie,{})}),e.jsx(v,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,sx:{flexGrow:1},children:"Admin Dashboard"}),"Welcome ",i.firstName,e.jsx(T,{color:"inherit",onClick:()=>{localStorage.removeItem("accessToken"),localStorage.removeItem("refreshToken"),localStorage.removeItem("user"),f("/"),window.location.reload()},children:e.jsx(le,{})})]})}),e.jsxs(Te,{variant:"permanent",open:t,children:[e.jsx(b,{sx:{display:"flex",alignItems:"center",justifyContent:"flex-end",px:[1]},children:e.jsx(T,{onClick:r,children:e.jsx(ce,{})})}),e.jsx(de,{}),e.jsx(pe,{})]}),e.jsxs(F,{component:"main",sx:{backgroundColor:o=>o.palette.mode==="light"?o.palette.grey[100]:o.palette.grey[900],flexGrow:1,height:"100vh",overflow:"auto"},children:[e.jsx(b,{}),e.jsx(xe,{title:"Add Tours"}),e.jsx(we,{}),e.jsx(N,{maxWidth:"lg",sx:{mt:4,mb:4},children:e.jsx(Ce,{sx:{pt:4}})})]})]})})}export{ze as default};
