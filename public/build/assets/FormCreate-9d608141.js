import{W as x,j as t,a as h}from"./app-1cc7af4d.js";import{B as j}from"./Button-e842edb2.js";import{A as f}from"./AdminAuthenticatedLayout-65578bd4.js";import{I as l}from"./InputError-05fb1664.js";import{C as g}from"./Container-981471f7.js";import{T as n}from"./TextField-0ca15562.js";/* empty css            */import"./ApplicationLogo-9b07ad06.js";import"./ResponsiveNavLink-1de2d82e.js";import"./transition-768a1334.js";import"./NavLink-94d9eec0.js";import"./TransitionGroupContext-d9e5bb2a.js";import"./FormControl-c79cb863.js";import"./useFormControl-49f2c98d.js";import"./useId-d8f711bd.js";import"./Modal-394f6331.js";import"./createChainedFunction-0bab83cf.js";import"./debounce-517eeb3c.js";import"./createSvgIcon-3a230c1d.js";function z({auth:d,survey:i}){var a,m;console.log(i);const{data:r,setData:s,post:p,processing:c,errors:o,reset:b}=x({title:"",description:""}),u=e=>{e.preventDefault(),console.log(r),p(route("admin.form.store",{survey_id:i.id}))};return t.jsxs(f,{user:d.user,header:t.jsxs("h2",{className:"font-semibold leading-tight",children:[(a=i.user)==null?void 0:a.company," | ",(m=i.user)==null?void 0:m.name," 様"]}),children:[t.jsx(h,{title:"新規フォーム作成"}),t.jsxs(g,{className:"py-12",children:[t.jsx("h2",{className:"mb-4",children:"新規フォーム作成"}),t.jsxs("form",{onSubmit:u,children:[t.jsxs("div",{className:"mb-4",children:[t.jsx(n,{id:"title",type:"text",name:"title",value:r.title,variant:"outlined",label:"タイトル",required:!0,onChange:e=>s("title",e.target.value),fullWidth:!0}),t.jsx(l,{message:o.title,className:"mt-2"})]}),t.jsxs("div",{className:"mb-4",children:[t.jsx(n,{id:"description",type:"text",name:"description",value:r.description,variant:"outlined",label:"説明文",onChange:e=>s("description",e.target.value),multiline:!0,rows:3,fullWidth:!0}),t.jsx(l,{message:o.description,className:"mt-2"})]}),t.jsx("div",{className:"text-center mt-4",children:t.jsx(j,{className:"ml-4",disabled:c,children:"フォームを登録し質問作成へ"})})]})]})]})}export{z as default};