import{R as c,r as s,j as e,A as N,C as R,P as oe,v as f,t as T,z as b,q as le,w as ce,T as k,I as F,x as de,y as pe,s as z}from"./index-Qm37-hOS.js";import{d as xe,a as ue,D as ge,M as he,A as me,b as je}from"./ExitToApp-lAv1ZvSx.js";import{A as Se}from"./AddressForm-Z7m3Ebap.js";import{R as fe}from"./Review-Ie-uOGcc.js";import{C as U}from"./CssBaseline-bzgSFrbW.js";import{S as ve,a as we,b as ye}from"./DeleteForeverOutlined-cWaaWKxW.js";import{T as Ce,L as be}from"./VisibilityOff-HjpOYbqA.js";import"./ListItemText-7Ghp6EMP.js";import"./capitalize-5rU_-DoW.js";import"./TextField-STLcwblj.js";import"./Select-Vky3JIPX.js";const D=["Package Details","Review Your Package"];function ke(){const[t,n]=c.useState(0),[i,v]=s.useState([]),[r,o]=s.useState([]),[I,M]=s.useState([]),[w,W]=s.useState([]),[d,$]=s.useState(""),[y,E]=s.useState("Both"),[p,V]=s.useState(""),[x,Y]=s.useState(""),[u,_]=s.useState(""),[g,G]=s.useState(""),[B,H]=s.useState(!1),[C,O]=s.useState(0),[h,q]=s.useState(0),[m,J]=s.useState(""),[j,K]=s.useState(0),[S,X]=s.useState(0),[Z,P]=c.useState(""),[Q,ee]=s.useState([]),[te,se]=s.useState([]),L=()=>{i.length==0||d.length==0||p.length==0||x.length==0||u.length==0||g.length==0||h.length==0||m.length==0||j.length==0||S.length==0?P("Kindly Fill All The Fields !!! "):(r.map(a=>{ee(l=>[...l,{image:a}])}),w.map(a=>{se(l=>[...l,{video:a}])}),P(""),n(t+1))},ae=()=>{const a={title:d,description:p,address:x,city:u,state:g,zip:h,country:m,images:Q,videos:te,totalCount:j,price:S,region:y,isDiscounted:B,Discount:C,active:!0},l="http://localhost:8080/api/packages/create";le.post(l,a).then(re=>{}).catch(re=>{})},ne=()=>{n(t-1)};function ie(a){switch(a){case 0:return e.jsx(Se,{title:d,setZip:q,zip:h,country:m,setCountry:J,desc:p,address:x,setState:G,setCity:_,state:g,city:u,setDesc:V,setTitle:$,setAddress:Y,setVideoFileUrl:W,videoFileUrl:w,setVideoFileName:M,videoFileName:I,setImageFileName:v,imageFileName:i,setImageFileUrl:o,imageFileUrl:r,totalCount:j,setTotalCount:K,price:S,setPrice:X,setRegion:E,region:y,isDiscounted:B,discount:C,setisDiscounted:H,setDiscount:O});case 1:return e.jsx(fe,{title:d,zip:h,country:m,desc:p,address:x,state:g,city:u,videoFileUrl:w,imageFileName:i,imageFileUrl:r,videoFileName:I,price:S,region:y,totalCount:j,discount:C});default:throw new Error("Unknown step")}}return e.jsxs(c.Fragment,{children:[e.jsx(U,{}),e.jsx(N,{position:"absolute",color:"default",elevation:0,sx:{position:"relative",borderBottom:a=>`1px solid ${a.palette.divider}`}}),e.jsx(R,{component:"main",maxWidth:"sm",sx:{mb:4},children:e.jsxs(oe,{variant:"outlined",sx:{my:{xs:3,md:6},p:{xs:2,md:3}},children:[e.jsx(ve,{activeStep:t,sx:{pt:3,pb:5},children:D.map(a=>e.jsx(we,{children:e.jsx(ye,{children:a})},a))}),t===D.length?e.jsx(c.Fragment,{children:e.jsx(f,{variant:"h5",gutterBottom:!0,children:"Your Package Has Been Created"})}):e.jsxs(c.Fragment,{children:[ie(t),e.jsxs(T,{sx:{display:"flex",justifyContent:"flex-end"},children:[e.jsx(f,{style:{color:"red"},variant:"subtitle1",children:Z}),t!==0&&e.jsx(b,{onClick:ne,sx:{mt:3,ml:1,bg:"#27272a"},children:"Back"}),t===D.length-1?e.jsxs(b,{variant:"contained",onClick:()=>{ae(),L()},sx:{mt:3,ml:1,bg:"#27272a"},children:[" ","Create Package"]}):e.jsxs(b,{variant:"contained",onClick:L,sx:{mt:3,ml:1,bg:"#27272a"},children:[" ","Next"]})]})]})]})})]})}const Fe=pe({palette:{primary:{main:"#27272a",contrastText:"#fff"}}});function De(t){return e.jsxs(f,{variant:"body2",color:"text.secondary",align:"center",...t,children:["Copyright © ",e.jsx(be,{color:"inherit",children:"Azeem Tourism"}),new Date().getFullYear(),"."]})}const A=240,Te=z(N,{shouldForwardProp:t=>t!=="open"})(({theme:t,open:n})=>({zIndex:t.zIndex.drawer+1,transition:t.transitions.create(["width","margin"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen}),...n&&{marginLeft:A,width:`calc(100% - ${A}px)`,transition:t.transitions.create(["width","margin"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.enteringScreen})}})),Ae=z(je,{shouldForwardProp:t=>t!=="open"})(({theme:t,open:n})=>({"& .MuiDrawer-paper":{position:"relative",whiteSpace:"nowrap",width:A,transition:t.transitions.create("width",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.enteringScreen}),boxSizing:"border-box",...!n&&{overflowX:"hidden",transition:t.transitions.create("width",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen}),width:t.spacing(7),[t.breakpoints.up("sm")]:{width:t.spacing(9)}}}}));function Ee(){const[t,n]=s.useState(!0),i=()=>{n(!t)},v=ce();var r=JSON.parse(localStorage.getItem("user"));return e.jsx(Ce,{theme:Fe,children:e.jsxs(T,{sx:{display:"flex"},children:[e.jsx(U,{}),e.jsx(Te,{position:"absolute",open:t,children:e.jsxs(k,{sx:{pr:"24px"},children:[e.jsx(F,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:i,sx:{marginRight:"36px",...t&&{display:"none"}},children:e.jsx(de,{})}),e.jsx(f,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,sx:{flexGrow:1},children:"Admin Dashboard"}),"Welcome ",r.firstName,e.jsx(F,{color:"inherit",onClick:()=>{localStorage.removeItem("accessToken"),localStorage.removeItem("refreshToken"),localStorage.removeItem("user"),v("/"),window.location.reload()},children:e.jsx(xe,{})})]})}),e.jsxs(Ae,{variant:"permanent",open:t,children:[e.jsx(k,{sx:{display:"flex",alignItems:"center",justifyContent:"flex-end",px:[1]},children:e.jsx(F,{onClick:i,children:e.jsx(ue,{})})}),e.jsx(ge,{}),e.jsx(he,{})]}),e.jsxs(T,{component:"main",sx:{backgroundColor:o=>o.palette.mode==="light"?o.palette.grey[100]:o.palette.grey[900],flexGrow:1,height:"100vh",overflow:"auto"},children:[e.jsx(k,{}),e.jsx(me,{title:"Add Packages"}),e.jsx(ke,{}),e.jsx(R,{maxWidth:"lg",sx:{mt:4,mb:4},children:e.jsx(De,{sx:{pt:4}})})]})]})})}export{Ee as default};