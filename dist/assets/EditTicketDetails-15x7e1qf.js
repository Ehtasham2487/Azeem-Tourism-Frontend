import{D as J,w as O,R as o,r as e,j as t,z as Q,C as X,P as tt,v as B,A as g,t as et,q as st}from"./index-J3bmnUGf.js";import{E as at}from"./EditPackageForm-tAIUte6w.js";import{S as it,a as nt,b as ot,R as rt}from"./Review-LVtcnZpR.js";import{C as ct}from"./CssBaseline-jMRw95Iy.js";import"./TextField-yXsHM-QL.js";import"./Select-ROiOBG7U.js";import"./ListItemText-zz0fWdZs.js";const k=["Package Details","Review Your Package"];function gt(){const T=J(),b=O(),a=T.state,[i,C]=o.useState(0),[S,w]=e.useState([]),[j,L]=e.useState([]),[y,N]=e.useState([]),[v,R]=e.useState([]),[r,U]=e.useState(a.title),[c,E]=e.useState(a.description),[l,A]=e.useState(a.address),[d,P]=e.useState(a.city),[m,z]=e.useState(a.state),[p,D]=e.useState(a.zip),[u,I]=e.useState(a.country),[x,M]=e.useState(a.totalCount),[h,V]=e.useState(a.price),[Y,F]=o.useState(""),[$,q]=e.useState([]),[G,H]=e.useState([]),f=()=>{S.length==0||r.length==0||c.length==0||l.length==0||d.length==0||m.length==0||p.length==0||u.length==0||x.length==0||h.length==0?F("Kindly Fill All The Fields !!! "):(j.map(s=>{q(n=>[...n,{image:s}])}),v.map(s=>{H(n=>[...n,{video:s}])}),F(""),C(i+1))},K=()=>{const s={title:r,description:c,address:l,city:d,state:m,zip:p,country:u,images:$,videos:G,totalCount:x,price:h,active:!0},n=`https://backend.azeemtourism.com/api/tickets/update/${a._id}`;st.post(n,s).then(_=>{}).catch(_=>{})},W=()=>{C(i-1)};function Z(s){switch(s){case 0:return t.jsx(at,{title:r,setZip:D,zip:p,country:u,setCountry:I,desc:c,address:l,setState:z,setCity:P,state:m,city:d,setDesc:E,setTitle:U,setAddress:A,setVideoFileUrl:R,videoFileUrl:v,videoFileName:y,setVideoFileName:N,setImageFileName:w,imageFileName:S,setImageFileUrl:L,imageFileUrl:j,totalCount:x,setTotalCount:M,price:h,setPrice:V,packageData:a});case 1:return t.jsx(rt,{title:r,zip:p,country:u,desc:c,address:l,state:m,city:d,videoFileUrl:v,videoFileName:y,imageFileName:S,imageFileUrl:j,price:h,totalCount:x});default:throw new Error("Unknown step")}}return t.jsxs(o.Fragment,{children:[t.jsx(ct,{}),t.jsx(Q,{position:"absolute",color:"default",elevation:0,sx:{position:"relative",borderBottom:s=>`1px solid ${s.palette.divider}`}}),t.jsx(X,{component:"main",maxWidth:"lg",sx:{mb:4},children:t.jsxs(tt,{variant:"outlined",sx:{my:{xs:3,md:6},p:{xs:2,md:3}},children:[t.jsx(it,{activeStep:i,sx:{pt:3,pb:5},children:k.map(s=>t.jsx(nt,{children:t.jsx(ot,{children:s})},s))}),i===k.length?t.jsxs(o.Fragment,{children:[t.jsx(B,{variant:"h5",gutterBottom:!0,children:"Your Ticket Has Been Updated"}),t.jsx(g,{variant:"contained",onClick:()=>b("/admin/managetickets"),sx:{mt:3,ml:1},children:"GoTo Manage Tickets"})]}):t.jsxs(o.Fragment,{children:[Z(i),t.jsxs(et,{sx:{display:"flex",justifyContent:"flex-end"},children:[t.jsx(B,{style:{color:"red"},variant:"subtitle1",children:Y}),i!==0&&t.jsx(g,{onClick:W,sx:{mt:3,ml:1},children:"Back"}),i===k.length-1?t.jsxs(g,{variant:"contained",onClick:()=>{K(),f()},sx:{mt:3,ml:1},children:[" ","Edit Ticket"]}):t.jsxs(g,{variant:"contained",onClick:f,sx:{mt:3,ml:1},children:[" ","Next"]})]})]})]})})]})}export{gt as default};