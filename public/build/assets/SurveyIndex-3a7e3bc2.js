import{j as e,d as s}from"./app-5f589031.js";import{A as m}from"./AdminAuthenticatedLayout-0468bba6.js";import{T as a}from"./Title-7e87e2e5.js";import{C as o}from"./Container-2f4ee760.js";/* empty css            */import"./ApplicationLogo-264b62e8.js";import"./ResponsiveNavLink-b079cff9.js";import"./transition-ae5979ad.js";import"./NavLink-4d41e6c6.js";const u=({surveys:i,auth:r})=>e.jsx(m,{user:r.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:r.user.name}),children:e.jsxs(o,{className:"py-14",children:[e.jsx(a,{title:"フォーム一覧",Tag:"h2",className:"bg-main text-main-cont p-4 mb-4"}),e.jsx("ul",{className:"mb-4",children:i.map(t=>e.jsx("li",{className:"py-4 border-b",children:e.jsx(s,{href:route("admin.form.show",{id:t.id}),children:t.title})},t.id))})]})});export{u as default};
