import{j as e,R as f,I as F,z as B,M as Y,r as a,A as X,C as Q,P as ce,v as P,t as Z,q as ue,w as xe,T as H,x as he,y as me,s as ee}from"./index-Qm37-hOS.js";import{d as pe,a as ge,D as je,M as ve,A as fe,b as Ce}from"./ExitToApp-lAv1ZvSx.js";import{d as be,c as Se,I as ye,S as we,a as ke,b as Ie}from"./DeleteForeverOutlined-cWaaWKxW.js";import{G as i,S as Te,T as l}from"./TextField-STLcwblj.js";import{S as De}from"./Select-Vky3JIPX.js";import{R as Ne}from"./ReviewVisa-fQpDMl4k.js";import{C as te}from"./CssBaseline-bzgSFrbW.js";import{T as Fe,L as We}from"./VisibilityOff-HjpOYbqA.js";import"./ListItemText-7Ghp6EMP.js";import"./capitalize-5rU_-DoW.js";function Ae({title:t,setZip:o,zip:c,country:C,setCountry:u,desc:x,address:W,setState:R,setCity:b,state:L,city:m,setDesc:U,setTitle:A,setAddress:V,setImageFileName:p,imageFileName:S,setImageFileUrl:h,imageFileUrl:y,totalCount:w,setTotalCount:z,price:k,setPrice:M,setRegion:g,region:_,isDiscounted:I,discount:$,setisDiscounted:T,setDiscount:q}){const D=s=>{g(s.target.value)},E=()=>{T(!I)},j=()=>{window.cloudinary.createUploadWidget({cloudName:"dhhjr3vim",uploadPreset:"nnitbvl3"},(d,r)=>{console.log("rs",r),!d&&r&&r.event==="success"&&(console.log("ue"),p(v=>[...v,r.info.original_filename]),h(v=>[...v,r.info.url]))}).open()},G=(s,d)=>{p(S.filter(r=>r!==s)),h(y.filter(r=>r!==d))};return e.jsx(f.Fragment,{children:e.jsxs(i,{container:!0,spacing:3,children:[e.jsx(e.Fragment,{children:e.jsx(i,{item:!0,xs:12,sm:12,children:e.jsx(Te,{direction:"row",alignItems:"center",spacing:2,children:e.jsxs("label",{htmlFor:"icon-button-file",children:[e.jsx(F,{onClick:()=>{j()},color:"primary","aria-label":"upload picture",component:"span",children:e.jsx(B,{style:{width:"350px"},variant:"contained",sx:{p:1,bg:"#27272a"},endIcon:e.jsx(be,{}),children:"Upload Images"})}),S.map((s,d)=>S?e.jsxs("div",{className:"flex justify-between ",children:[e.jsx("a",{className:"text-black",target:"_blank",href:y[d],rel:"noreferrer",children:e.jsxs("p",{children:["Uploaded Images: ",s]})}),e.jsx("div",{style:{marginTop:"-8px"},children:e.jsx(F,{className:"text-rose-600",onClick:()=>{G(s,y[d])},children:e.jsx(Se,{style:{color:"red"}})})})]}):null)]})})})}),e.jsx(i,{item:!0,xs:12,sm:6,children:e.jsx(l,{required:!0,multiline:!0,id:"title",name:"title",label:"Title",fullWidth:!0,autoComplete:"title",variant:"standard",value:t,onChange:s=>{A(s.target.value)}})}),e.jsx(i,{item:!0,xs:12,sm:6,children:e.jsx(l,{required:!0,multiline:!0,id:"description",name:"description",label:"Description",fullWidth:!0,autoComplete:"description",variant:"standard",value:x,onChange:s=>{U(s.target.value)}})}),e.jsx(i,{item:!0,xs:12,sm:6,children:e.jsx(l,{multiline:!0,id:"address",name:"address",label:"First Name",fullWidth:!0,autoComplete:"shipping address-line1",variant:"standard",value:W,onChange:s=>{V(s.target.value)}})}),e.jsx(i,{item:!0,xs:12,sm:6,children:e.jsx(l,{multiline:!0,id:"city",name:"city",label:"Last Name",fullWidth:!0,autoComplete:"shipping address-level2",variant:"standard",value:m,onChange:s=>{b(s.target.value)}})}),e.jsx(i,{item:!0,xs:12,sm:6,children:e.jsx(l,{required:!0,id:"state",multiline:!0,name:"state",label:"email",fullWidth:!0,variant:"standard",value:L,onChange:s=>{R(s.target.value)}})}),e.jsx(i,{item:!0,xs:12,sm:6,children:e.jsx(l,{multiline:!0,id:"country",name:"country",label:"Phone Number",fullWidth:!0,autoComplete:"shipping country",variant:"standard",value:C,onChange:s=>{u(s.target.value)}})}),e.jsx(i,{item:!0,xs:12,sm:6,children:e.jsx(l,{required:!0,multiline:!0,id:"price",name:"price",label:"Price",fullWidth:!0,autoComplete:"price",variant:"standard",value:k,onChange:s=>{M(s.target.value)}})}),e.jsx(i,{item:!0,xs:12,sm:6,children:e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",checked:I,onChange:E,style:{marginRight:"3%"}}),"Is Discounted"]})}),e.jsx(i,{item:!0,xs:12,sm:6,children:e.jsx(l,{multiline:!0,id:"discount",name:"discount",label:"Discount Percentage",fullWidth:!0,variant:"standard",value:$,onChange:s=>{q(s.target.value)}})}),e.jsxs(i,{item:!0,xs:12,sm:6,children:[e.jsx(ye,{id:"region-select-label",children:"Region"}),e.jsxs(De,{value:_,onChange:D,displayEmpty:!0,fullWidth:!0,sx:{height:30},children:[e.jsx(Y,{sx:{height:30},value:"Both",children:e.jsx("em",{children:"None"})}),e.jsx(Y,{sx:{height:30},value:"Pakistan",children:"Pakistan"}),e.jsx(Y,{sx:{height:30},value:"UAE",children:"UAE"})]})]}),e.jsx(i,{item:!0,xs:12,sm:6,children:e.jsx(l,{required:!0,multiline:!0,id:"totalTickets ",name:"totalTickets ",label:"Duration (In Days)",fullWidth:!0,autoComplete:"totaltickets",variant:"standard",value:w,onChange:s=>{z(s.target.value)}})})]})})}const O=["Visa Details","Review Your Visa"];function Be(){const[t,o]=f.useState(0),[c,C]=a.useState([]),[u,x]=a.useState([]),[W,R]=a.useState([]),[b,L]=a.useState([]),[m,U]=a.useState(""),[A,V]=a.useState(!1),[p,S]=a.useState(0),[h,y]=a.useState(""),[w,z]=a.useState(""),[k,M]=a.useState(""),[g,_]=a.useState(""),[I,$]=a.useState(0),[T,q]=a.useState(""),[D,E]=a.useState("Both"),[j,G]=a.useState(0),[s,d]=a.useState(0),[r,v]=f.useState(""),[se,ae]=a.useState([]),[ie,ne]=a.useState([]),K=()=>{c.length==0||m.length==0||h.length==0||g.length==0||j.length==0||s.length==0?v("Kindly Fill All The Fields !!! "):(u.map(n=>{ae(N=>[...N,{image:n}])}),b.map(n=>{ne(N=>[...N,{video:n}])}),v(""),o(t+1))},re=()=>{const n={title:m,description:h,firstName:w,lastName:k,email:g,phoneNumber:T,images:se,videos:ie,duration:j,price:s,region:D,isDiscounted:A,Discount:p,active:!0},N="http://localhost:8080/api/visas/create";ue.post(N,n).then(de=>{}).catch(de=>{})},oe=()=>{o(t-1)};function le(n){switch(n){case 0:return e.jsx(Ae,{title:m,setZip:$,zip:I,country:T,setCountry:q,desc:h,address:w,setState:_,setCity:M,state:g,city:k,setDesc:y,setTitle:U,setAddress:z,setVideoFileUrl:L,videoFileUrl:b,setVideoFileName:R,videoFileName:W,setImageFileName:C,imageFileName:c,setImageFileUrl:x,imageFileUrl:u,totalCount:j,setTotalCount:G,price:s,setPrice:d,setRegion:E,region:D,isDiscounted:A,discount:p,setisDiscounted:V,setDiscount:S});case 1:return e.jsx(Ne,{title:m,zip:I,country:T,desc:h,address:w,state:g,city:k,videoFileUrl:b,imageFileName:c,imageFileUrl:u,videoFileName:W,price:s,totalCount:j,region:D,discount:p});default:throw new Error("Unknown step")}}return e.jsxs(f.Fragment,{children:[e.jsx(te,{}),e.jsx(X,{position:"absolute",color:"default",elevation:0,sx:{position:"relative",borderBottom:n=>`1px solid ${n.palette.divider}`}}),e.jsx(Q,{component:"main",maxWidth:"sm",sx:{mb:4},children:e.jsxs(ce,{variant:"outlined",sx:{my:{xs:3,md:6},p:{xs:2,md:3}},children:[e.jsx(we,{activeStep:t,sx:{pt:3,pb:5},children:O.map(n=>e.jsx(ke,{children:e.jsx(Ie,{children:n})},n))}),t===O.length?e.jsx(f.Fragment,{children:e.jsx(P,{variant:"h5",gutterBottom:!0,children:"Your Visa Has Been Created"})}):e.jsxs(f.Fragment,{children:[le(t),e.jsxs(Z,{sx:{display:"flex",justifyContent:"flex-end"},children:[e.jsx(P,{style:{color:"red"},variant:"subtitle1",children:r}),t!==0&&e.jsx(B,{onClick:oe,sx:{mt:3,ml:1,bg:"#27272a"},children:"Back"}),t===O.length-1?e.jsxs(B,{variant:"contained",onClick:()=>{re(),K()},sx:{mt:3,ml:1,bg:"#27272a"},children:[" ","Create Visa"]}):e.jsxs(B,{variant:"contained",onClick:K,sx:{mt:3,ml:1,bg:"#27272a"},children:[" ","Next"]})]})]})]})})]})}const Pe=me({palette:{primary:{main:"#27272a",contrastText:"#fff"}}});function Re(t){return e.jsxs(P,{variant:"body2",color:"text.secondary",align:"center",...t,children:["Copyright © ",e.jsx(We,{color:"inherit",children:"Azeem Tourism"}),new Date().getFullYear(),"."]})}const J=240,Le=ee(X,{shouldForwardProp:t=>t!=="open"})(({theme:t,open:o})=>({zIndex:t.zIndex.drawer+1,transition:t.transitions.create(["width","margin"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen}),...o&&{marginLeft:J,width:`calc(100% - ${J}px)`,transition:t.transitions.create(["width","margin"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.enteringScreen})}})),Ue=ee(Ce,{shouldForwardProp:t=>t!=="open"})(({theme:t,open:o})=>({"& .MuiDrawer-paper":{position:"relative",whiteSpace:"nowrap",width:J,transition:t.transitions.create("width",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.enteringScreen}),boxSizing:"border-box",...!o&&{overflowX:"hidden",transition:t.transitions.create("width",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen}),width:t.spacing(7),[t.breakpoints.up("sm")]:{width:t.spacing(9)}}}}));function Oe(){const[t,o]=a.useState(!0),c=()=>{o(!t)},C=xe();var u=JSON.parse(localStorage.getItem("user"));return e.jsx(Fe,{theme:Pe,children:e.jsxs(Z,{sx:{display:"flex"},children:[e.jsx(te,{}),e.jsx(Le,{position:"absolute",open:t,children:e.jsxs(H,{sx:{pr:"24px"},children:[e.jsx(F,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:c,sx:{marginRight:"36px",...t&&{display:"none"}},children:e.jsx(he,{})}),e.jsx(P,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,sx:{flexGrow:1},children:"Admin Dashboard"}),"Welcome ",u.firstName,e.jsx(F,{color:"inherit",onClick:()=>{localStorage.removeItem("accessToken"),localStorage.removeItem("refreshToken"),localStorage.removeItem("user"),C("/"),window.location.reload()},children:e.jsx(pe,{})})]})}),e.jsxs(Ue,{variant:"permanent",open:t,children:[e.jsx(H,{sx:{display:"flex",alignItems:"center",justifyContent:"flex-end",px:[1]},children:e.jsx(F,{onClick:c,children:e.jsx(ge,{})})}),e.jsx(je,{}),e.jsx(ve,{})]}),e.jsxs(Z,{component:"main",sx:{backgroundColor:x=>x.palette.mode==="light"?x.palette.grey[100]:x.palette.grey[900],flexGrow:1,height:"100vh",overflow:"auto"},children:[e.jsx(H,{}),e.jsx(fe,{title:"Add Visa"}),e.jsx(Be,{}),e.jsx(Q,{maxWidth:"lg",sx:{mt:4,mb:4},children:e.jsx(Re,{sx:{pt:4}})})]})]})})}export{Oe as default};
