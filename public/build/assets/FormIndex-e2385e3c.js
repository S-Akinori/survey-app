import{j as e,d as t}from"./app-dafbfa72.js";import{A as m}from"./AdminAuthenticatedLayout-1041d3aa.js";import{B as a}from"./Button-dc3aa416.js";import{T as o}from"./Title-b4888cdc.js";import{C as n}from"./Container-78eb4108.js";/* empty css            */import"./ApplicationLogo-caf8a431.js";import"./ResponsiveNavLink-d267bd44.js";import"./transition-3de61f07.js";import"./NavLink-91225a13.js";const N=({forms:s,auth:r})=>e.jsx(m,{user:r.user,header:e.jsx("h2",{className:"font-semibold leading-tight",children:r.user.name}),children:e.jsxs(n,{className:"py-14",children:[e.jsx(o,{title:"フォーム一覧",Tag:"h2",className:"bg-main text-main-cont p-4 mb-4"}),e.jsx("ul",{className:"mb-4",children:s.map(i=>e.jsx("li",{className:"py-4 border-b",children:e.jsx(t,{href:route("admin.form.show",{id:i.id}),children:i.title})},i.id))}),e.jsx("div",{children:e.jsx(a,{children:e.jsx(t,{href:route("admin.form.create",{client_admin_id:1}),children:"フォーム作成"})})})]})});export{N as default};