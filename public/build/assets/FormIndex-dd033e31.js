import{j as e,d as t}from"./app-9e917366.js";import{A as m}from"./AdminAuthenticatedLayout-7c507477.js";import{B as a}from"./Button-b59f34ca.js";import{T as o}from"./Title-584efa84.js";import{C as n}from"./Container-e4ce7998.js";/* empty css            */import"./ApplicationLogo-ddcb6c43.js";import"./ResponsiveNavLink-ed57d4d8.js";import"./transition-be0c4330.js";import"./NavLink-6b6e3aff.js";const N=({forms:s,auth:r})=>e.jsx(m,{user:r.user,header:e.jsx("h2",{className:"font-semibold leading-tight",children:r.user.name}),children:e.jsxs(n,{className:"py-14",children:[e.jsx(o,{title:"フォーム一覧",Tag:"h2",className:"bg-main text-main-cont p-4 mb-4"}),e.jsx("ul",{className:"mb-4",children:s.map(i=>e.jsx("li",{className:"py-4 border-b",children:e.jsx(t,{href:route("admin.form.show",{id:i.id}),children:i.title})},i.id))}),e.jsx("div",{children:e.jsx(a,{children:e.jsx(t,{href:route("admin.form.create",{client_admin_id:1}),children:"フォーム作成"})})})]})});export{N as default};