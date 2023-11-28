import{j as e,d as x,R as n,a as b}from"./app-5ecf105c.js";import{A as f}from"./AdminAuthenticatedLayout-67d07ffd.js";import{B as t}from"./Button-558f95d1.js";import{T as h}from"./Title-f6553a75.js";import{M as N}from"./Modal-5fc84625.js";import{B as u}from"./Box-4df72e77.js";import{C as g}from"./Container-6467d92b.js";/* empty css            */import"./ApplicationLogo-208d0a89.js";import"./ResponsiveNavLink-8d202d33.js";import"./transition-55d2c7cc.js";import"./NavLink-fba59faa.js";import"./TransitionGroupContext-6d61b0a6.js";import"./createChainedFunction-0bab83cf.js";import"./extendSxProp-5d93666a.js";const k=({open:s,setOpen:a,routeName:d,data:r})=>e.jsx(N,{open:s,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",className:"flex justify-center items-center",children:e.jsx(u,{className:"p-4 bg-white",sx:{background:"#fcfcfc"},children:e.jsxs("div",{children:[e.jsx("h2",{children:"削除してよろしいですか？"}),e.jsxs("div",{className:"mt-4 flex justify-end",children:[e.jsx(t,{className:"mr-4",onClick:l=>a(!1),children:e.jsx(x,{method:"delete",href:route(d,r),children:"はい"})}),e.jsx(t,{className:"bg-red-500 text-white",onClick:l=>a(!1),children:"キャンセル"})]})]})})}),v=({survey:s,auth:a})=>{var c,m,o;const[d,r]=n.useState(!1),[l,j]=n.useState(!1),[p,C]=n.useState(0);return e.jsxs(f,{user:a.user,header:e.jsxs("h2",{className:"font-semibold leading-tight",children:[s.id==1&&e.jsx("span",{children:(c=s.user)==null?void 0:c.name}),s.id!=1&&e.jsxs("span",{children:[(m=s.user)==null?void 0:m.company," | ",(o=s.user)==null?void 0:o.name," 様"]})]}),children:[e.jsx(b,{title:s.title}),e.jsxs(g,{className:"py-12",children:[e.jsx("div",{className:"mb-4",children:e.jsx(h,{title:s.title,Tag:"h2",className:"bg-main text-main-cont p-4 mb-4"})}),s.description&&e.jsx("div",{children:s.description}),e.jsxs("div",{className:"mt-8",children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("p",{children:"【フォーム一覧】"}),e.jsx("p",{children:"ここに登録されたフォームが個別質問になります。"}),e.jsx("p",{children:"※フォーム詳細より質問を作成できます。質問がない場合、このアンケートは表示されず共通アンケートのみ表示されます。"})]}),s.forms.map(i=>e.jsxs("div",{className:"mb-12",children:[e.jsx(h,{title:i.title,Tag:"h3",className:"p-4 mb-4 border-b-2 border-main"}),i.description&&e.jsx("div",{className:"text-sm mb-4",children:i.description}),e.jsx("div",{className:"mt-4",children:e.jsx(t,{children:e.jsx(x,{href:route("admin.form.show",{id:i.id}),children:"フォーム詳細"})})})]},i.id))]}),e.jsx("div",{className:"mb-4",children:e.jsx(t,{children:e.jsx("a",{href:route("admin.client.survey.show",{id:s.id,user_id:s.user_id}),target:"_blank",children:"アンケートを表示する"})})}),s.id!=1&&e.jsxs("div",{className:"mb-4",children:[e.jsx(t,{onClick:i=>j(!0),children:"アンケートURLを発行"}),l&&e.jsxs("div",{className:"p-4 border border-main mt-4",children:[e.jsx("div",{children:"以下のURLを従業員に共有ください。ログインは各従業員に登録したIDが必要です。"}),e.jsx("p",{children:route("client.login",{user_id:s.user_id,token:s.user.token})})]})]})]}),e.jsx(k,{open:d,setOpen:r,routeName:"admin.form.destroy",data:{id:p}})]})};export{v as default};