import{W as p,r as c,j as e,a as x}from"./app-5f589031.js";import{B as u}from"./Button-fcf3037a.js";import{A as b}from"./AdminAuthenticatedLayout-0468bba6.js";import{T as y,I as f}from"./TextInput-9a50c519.js";import{I as h}from"./InputLabel-61766a7d.js";import{C as j}from"./Container-2f4ee760.js";/* empty css            */import"./ApplicationLogo-264b62e8.js";import"./ResponsiveNavLink-b079cff9.js";import"./transition-ae5979ad.js";import"./NavLink-4d41e6c6.js";const g=[{id:"company",name:"company",type:"text",label:"会社名"},{id:"department",name:"department",type:"text",label:"部署名"},{id:"name",name:"name",type:"text",label:"担当者名"},{id:"email",name:"email",type:"text",label:"担当者ID"},{id:"password",name:"password",type:"password",label:"パスワード"},{id:"start_date",name:"start_date",type:"date",label:"開始日"},{id:"end_date",name:"end_date",type:"date",label:"開始日"}];function T({auth:t}){const{data:s,setData:r,post:m,processing:n,errors:o,reset:l}=p({company:"",department:"",name:"",email:"",password:"",start_date:"",end_date:""});c.useEffect(()=>()=>{l("password")},[]);const d=a=>{a.preventDefault(),console.log(s),m(route("admin.clientAdmin.store"))};return e.jsxs(b,{user:t.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:t.user.name}),children:[e.jsx(x,{title:"管理者ページ"}),e.jsx(j,{className:"py-12",children:e.jsxs("form",{onSubmit:d,children:[g.map(a=>e.jsxs("div",{className:"mt-4",children:[e.jsx(h,{htmlFor:a.id,value:a.label}),e.jsx(y,{id:a.id,type:a.type,name:a.name,value:s[a.name],className:"mt-1 block w-full",autoComplete:"current-password",onChange:i=>r(a.name,i.target.value)}),e.jsx(f,{message:o[a.name],className:"mt-2"})]})),e.jsx("div",{className:"text-center mt-4",children:e.jsx(u,{className:"ml-4",disabled:n,children:"登録して個別アンケートへ"})})]})})]})}export{T as default};
