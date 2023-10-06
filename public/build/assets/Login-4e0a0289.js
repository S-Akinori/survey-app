import{j as e,W as x,r as j,a as h}from"./app-87b78b56.js";import{G as f}from"./GuestLayout-6773214e.js";import{I as l}from"./InputError-775079e9.js";import{I as i}from"./InputLabel-d87562aa.js";import{T as n}from"./TextInput-a0216f5a.js";import{B as b}from"./Button-58adc63b.js";/* empty css            */import"./ApplicationLogo-0ae49a6d.js";function g({className:a="",...m}){return e.jsx("input",{...m,type:"checkbox",className:"rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500 "+a})}function F({status:a,canResetPassword:m}){const{data:r,setData:t,post:c,processing:d,errors:o,reset:p}=x({email:"",password:"",remember:!1});j.useEffect(()=>()=>{p("password")},[]);const u=s=>{s.preventDefault(),c(route("login"))};return e.jsxs(f,{title:"管理者ログイン",children:[e.jsx(h,{title:"管理者ログイン"}),a&&e.jsx("div",{className:"mb-4 font-medium text-sm text-green-600",children:a}),e.jsxs("form",{onSubmit:u,children:[e.jsxs("div",{children:[e.jsx(i,{htmlFor:"email",value:"メールアドレス"}),e.jsx(n,{id:"email",type:"email",name:"email",value:r.email,className:"mt-1 block w-full",autoComplete:"username",isFocused:!0,onChange:s=>t("email",s.target.value)}),e.jsx(l,{message:o.email,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(i,{htmlFor:"password",value:"パスワード"}),e.jsx(n,{id:"password",type:"password",name:"password",value:r.password,className:"mt-1 block w-full",autoComplete:"current-password",onChange:s=>t("password",s.target.value)}),e.jsx(l,{message:o.password,className:"mt-2"})]}),e.jsx("div",{className:"block mt-4",children:e.jsxs("label",{className:"flex items-center",children:[e.jsx(g,{name:"remember",checked:r.remember,onChange:s=>t("remember",s.target.checked)}),e.jsx("span",{className:"ml-2 text-sm text-gray-600",children:"Remember me"})]})}),e.jsx("div",{className:"text-center mt-4",children:e.jsx(b,{className:"ml-4",disabled:d,children:"ログイン"})})]})]})}export{F as default};