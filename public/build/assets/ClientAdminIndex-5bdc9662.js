import{j as e,a as t,d as a}from"./app-5ecf105c.js";import{A as d}from"./AdminAuthenticatedLayout-67d07ffd.js";import{B as m}from"./Button-558f95d1.js";import{T as n}from"./Title-f6553a75.js";import{C as l}from"./Container-6467d92b.js";/* empty css            */import"./ApplicationLogo-208d0a89.js";import"./ResponsiveNavLink-8d202d33.js";import"./transition-55d2c7cc.js";import"./NavLink-fba59faa.js";const g=({users:s,auth:r})=>(console.log(s),e.jsxs(d,{user:r.user,header:e.jsx("h2",{className:"font-semibold leading-tight",children:r.user.name}),children:[e.jsx(t,{title:"クライアント一覧"}),e.jsxs(l,{className:"py-14",children:[e.jsx(n,{title:"クライアント一覧",Tag:"h2",className:"bg-main text-main-cont p-4 mb-4"}),e.jsx("ul",{className:"mb-4",children:s.map(i=>e.jsxs("li",{className:"py-4 border-b md:flex justify-between",children:[e.jsxs(a,{href:route("admin.users.show",{id:i.id}),children:[i.company," : ",i.name]}),e.jsxs("div",{className:"mt-4 md:mt-0",children:[e.jsx("a",{target:"_blank",href:route("dashboard",{user_id:i.id}),className:"pr-4",children:"回答状況"}),e.jsx(a,{href:route("admin.clientAdmin.edit",{id:i.id}),className:"pr-4",children:"編集"}),e.jsx("a",{className:"mr-4",href:route("admin.download.file",{client_user_id:i.id,filename:i.company+"-"+i.name}),children:"csv"}),e.jsx("a",{target:"_blank",href:route("admin.client.survey.show",{id:i.surveys[0].id,user_id:i.id}),className:"pr-4",children:"アンケート表示"})]})]},i.id))}),e.jsx("div",{children:e.jsx(m,{children:e.jsx(a,{href:route("admin.client.register"),children:"新規クライアント登録"})})})]})]}));export{g as default};