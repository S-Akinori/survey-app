import{W as p,r as c,j as e,a as x}from"./app-43cd903f.js";import{B as u}from"./Button-6417ca49.js";import{A as b}from"./AdminAuthenticatedLayout-4d6e4e3e.js";import{T as f}from"./TextInput-73c31518.js";import{I as y}from"./InputError-6bfc7141.js";import{I as h}from"./InputLabel-d93a75b3.js";import{C as j}from"./Container-55d1794a.js";/* empty css            */import"./ApplicationLogo-f3a07fd7.js";import"./ResponsiveNavLink-28b078d5.js";import"./transition-90057ae7.js";import"./NavLink-7ad10272.js";const g=[{id:"company",name:"company",type:"text",label:"会社名"},{id:"department",name:"department",type:"text",label:"部署名"},{id:"name",name:"name",type:"text",label:"担当者名"},{id:"email",name:"email",type:"text",label:"担当者ID"},{id:"password",name:"password",type:"password",label:"パスワード"},{id:"start_date",name:"start_date",type:"date",label:"開始日"},{id:"end_date",name:"end_date",type:"date",label:"開始日"}];function k({auth:t}){const{data:s,setData:r,post:m,processing:o,errors:n,reset:l}=p({company:"",department:"",name:"",email:"",password:"",start_date:"",end_date:""});c.useEffect(()=>()=>{l("password")},[]);const d=a=>{a.preventDefault(),console.log(s),m(route("admin.clientAdmin.store"))};return e.jsxs(b,{user:t.user,header:e.jsx("h2",{className:"font-semibold leading-tight",children:t.user.name}),children:[e.jsx(x,{title:"管理者ページ"}),e.jsx(j,{className:"py-12",children:e.jsxs("form",{onSubmit:d,children:[g.map(a=>e.jsxs("div",{className:"mt-4",children:[e.jsx(h,{htmlFor:a.id,value:a.label}),e.jsx(f,{id:a.id,type:a.type,name:a.name,value:s[a.name],className:"mt-1 block w-full",autoComplete:"current-password",onChange:i=>r(a.name,i.target.value)}),e.jsx(y,{message:n[a.name],className:"mt-2"})]})),e.jsx("div",{className:"text-center mt-4",children:e.jsx(u,{className:"ml-4",disabled:o,children:"登録して個別アンケートへ"})})]})})]})}export{k as default};
