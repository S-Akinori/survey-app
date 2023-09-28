import{W as b,r as y,R as j,j as a,a as u}from"./app-f8597ad7.js";import{I as w}from"./InputError-054cca3d.js";import{A as g}from"./AdminAuthenticatedLayout-aa15eb05.js";import{B as v}from"./Button-5c3a20cf.js";import{C as I}from"./Container-61250ba4.js";import{F as C}from"./FormControl-fe288f95.js";import{I as _,O as A,T as D}from"./TextField-d71a0260.js";import{I as N,a as E,V as P,b as F}from"./VisibilityOff-7f783d89.js";/* empty css            */import"./ApplicationLogo-7cdc9c0b.js";import"./ResponsiveNavLink-a50aba77.js";import"./transition-81969ff5.js";import"./NavLink-d477c64f.js";import"./TransitionGroupContext-202f118a.js";import"./createSvgIcon-af4510f6.js";import"./Modal-9ae45fa3.js";import"./debounce-517eeb3c.js";import"./ButtonBase-337318eb.js";import"./Typography-e6ad6181.js";import"./extendSxProp-7e23cc6a.js";const R=[{id:"company",name:"company",type:"text",label:"会社名"},{id:"department",name:"department",type:"text",label:"部署名"},{id:"name",name:"name",type:"text",label:"担当者名"},{id:"email",name:"email",type:"text",label:"担当者ID(メールアドレス)"},{id:"password",name:"password",type:"password",label:"パスワード"},{id:"start_date",name:"start_date",type:"date",label:"開始日"},{id:"end_date",name:"end_date",type:"date",label:"終了日"}];function ee({auth:o,user:t}){const{data:s,setData:d,post:S,put:i,processing:l,errors:m,reset:p}=b({name:t.name,company:t.company,department:t.department,start_date:t.start_date.split(" ")[0],end_date:t.end_date.split(" ")[0],email:t.email,password:""});y.useEffect(()=>()=>{p("password")},[]);const c=e=>{e.preventDefault(),i(route("admin.clientAdmin.update",{id:t.id}))},[n,x]=j.useState(!1),h=()=>x(e=>!e),f=e=>{e.preventDefault()};return console.log(s),a.jsxs(g,{user:o.user,header:a.jsx("h2",{className:"font-semibold leading-tight",children:o.user.name}),children:[a.jsx(u,{title:"Register"}),a.jsx(I,{className:"py-12",children:a.jsxs("form",{onSubmit:c,children:[R.map(e=>a.jsxs("div",{className:"mt-4",children:[e.type==="password"&&a.jsxs(C,{variant:"outlined",fullWidth:!0,children:[a.jsx(_,{htmlFor:e.id,children:"Password"}),a.jsx(A,{id:e.id,type:n?"text":"password",name:e.name,value:s[e.name],endAdornment:a.jsx(N,{position:"end",children:a.jsx(E,{"aria-label":"toggle password visibility",onClick:h,onMouseDown:f,edge:"end",children:n?a.jsx(P,{}):a.jsx(F,{})})}),label:e.label,onChange:r=>d(e.name,r.target.value),fullWidth:!0}),a.jsx("p",{children:"パスワードはセキュリティのため表示されません。変更が必要なければ空白のままにしてください。"})]}),e.type!=="password"&&a.jsx(D,{id:e.id,type:e.type,name:e.name,value:s[e.name],variant:"outlined",label:e.label,onChange:r=>d(e.name,r.target.value),fullWidth:!0}),a.jsx(w,{message:m[e.name],className:"mt-2"})]},e.id)),a.jsx("div",{className:"text-center mt-4",children:a.jsx(v,{className:"ml-4",disabled:l,children:"編集して個別質問へ"})})]})})]})}export{ee as default};