import{j as e,a as t,d as s}from"./app-a4572963.js";import{A as n}from"./AdminAuthenticatedLayout-4ab4c41f.js";import{B as d}from"./Button-3c6288fb.js";import{T as m}from"./Title-75dc6764.js";import{C as l}from"./Container-9b211f08.js";/* empty css            */import"./ApplicationLogo-ce619a94.js";import"./ResponsiveNavLink-23c797fe.js";import"./transition-7b2c1dd7.js";import"./NavLink-c3ecd870.js";const g=({users:r,auth:a})=>(console.log(r),e.jsxs(n,{user:a.user,header:e.jsx("h2",{className:"font-semibold leading-tight",children:a.user.name}),children:[e.jsx(t,{title:"クライアント一覧"}),e.jsxs(l,{className:"py-14",children:[e.jsx(m,{title:"クライアント一覧",Tag:"h2",className:"bg-main text-main-cont p-4 mb-4"}),e.jsx("ul",{className:"mb-4",children:r.map(i=>e.jsxs("li",{className:"py-4 border-b flex justify-between",children:[e.jsxs(s,{href:route("admin.users.show",{id:i.id}),children:[i.company," : ",i.name]}),e.jsxs("div",{children:[e.jsx("a",{target:"_blank",href:route("dashboard",{user_id:i.id}),className:"pr-4",children:"回答状況"}),e.jsx(s,{href:route("admin.clientAdmin.edit",{id:i.id}),className:"pr-4",children:"編集"}),e.jsx("button",{className:"pr-4",children:"csv"}),e.jsx("a",{target:"_blank",href:route("admin.client.survey.show",{id:i.surveys[0].id}),className:"pr-4",children:"アンケート表示"})]})]},i.id))}),e.jsx("div",{children:e.jsx(d,{children:e.jsx(s,{href:route("admin.client.register"),children:"新規クライアント登録"})})})]})]}));export{g as default};