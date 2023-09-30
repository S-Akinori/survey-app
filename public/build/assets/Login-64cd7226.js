import{j as e,W as x,r as j,a as h}from"./app-1cc7af4d.js";import{G as f}from"./GuestLayout-6a7a936b.js";import{I as l}from"./InputError-05fb1664.js";import{I as i}from"./InputLabel-f7395a6b.js";import{T as n}from"./TextInput-8a07b721.js";import{B as b}from"./Button-e842edb2.js";/* empty css            */import"./ApplicationLogo-9b07ad06.js";function g({className:a="",...m}){return e.jsx("input",{...m,type:"checkbox",className:"rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500 "+a})}function F({status:a,canResetPassword:m}){const{data:r,setData:t,post:c,processing:d,errors:o,reset:p}=x({email:"",password:"",remember:!1});j.useEffect(()=>()=>{p("password")},[]);const u=s=>{s.preventDefault(),c(route("login"))};return e.jsxs(f,{title:"管理者ログイン",children:[e.jsx(h,{title:"管理者ログイン"}),a&&e.jsx("div",{className:"mb-4 font-medium text-sm text-green-600",children:a}),e.jsxs("form",{onSubmit:u,children:[e.jsxs("div",{children:[e.jsx(i,{htmlFor:"email",value:"メールアドレス"}),e.jsx(n,{id:"email",type:"email",name:"email",value:r.email,className:"mt-1 block w-full",autoComplete:"username",isFocused:!0,onChange:s=>t("email",s.target.value)}),e.jsx(l,{message:o.email,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(i,{htmlFor:"password",value:"パスワード"}),e.jsx(n,{id:"password",type:"password",name:"password",value:r.password,className:"mt-1 block w-full",autoComplete:"current-password",onChange:s=>t("password",s.target.value)}),e.jsx(l,{message:o.password,className:"mt-2"})]}),e.jsx("div",{className:"block mt-4",children:e.jsxs("label",{className:"flex items-center",children:[e.jsx(g,{name:"remember",checked:r.remember,onChange:s=>t("remember",s.target.checked)}),e.jsx("span",{className:"ml-2 text-sm text-gray-600",children:"Remember me"})]})}),e.jsx("div",{className:"text-center mt-4",children:e.jsx(b,{className:"ml-4",disabled:d,children:"ログイン"})})]})]})}export{F as default};