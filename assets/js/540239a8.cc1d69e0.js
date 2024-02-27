"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[37335],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(n),h=a,m=d["".concat(u,".").concat(h)]||d[h]||p[h]||o;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},67e3:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>u,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>p});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const c={title:"useIsAuthenticated",description:"useIsAuthenticated data hook from Refine is a modified version of react-query's useMutation for create mutations",source:"/packages/core/src/hooks/auth/useIsAuthenticated/index.ts"},u=void 0,s={unversionedId:"authentication/hooks/use-is-authenticated/index",id:"authentication/hooks/use-is-authenticated/index",title:"useIsAuthenticated",description:"useIsAuthenticated data hook from Refine is a modified version of react-query's useMutation for create mutations",source:"@site/docs/authentication/hooks/use-is-authenticated/index.md",sourceDirName:"authentication/hooks/use-is-authenticated",slug:"/authentication/hooks/use-is-authenticated/",permalink:"/docs/authentication/hooks/use-is-authenticated/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/authentication/hooks/use-is-authenticated/index.md",tags:[],version:"current",lastUpdatedBy:"\u30a2\u30ec\u30c3\u30b5\u30f3\u30c9\u30ed P",lastUpdatedAt:1709019941,formattedLastUpdatedAt:"Feb 27, 2024",frontMatter:{title:"useIsAuthenticated",description:"useIsAuthenticated data hook from Refine is a modified version of react-query's useMutation for create mutations",source:"/packages/core/src/hooks/auth/useIsAuthenticated/index.ts"},sidebar:"mainSidebar",previous:{title:"<AuthPage />",permalink:"/docs/authentication/components/auth-page/"},next:{title:"useOnError",permalink:"/docs/authentication/hooks/use-on-error/"}},l={},p=[{value:"Usage",id:"usage",level:2}],d={toc:p};function h(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useIsAuthenticated")," calls the ",(0,r.kt)("inlineCode",{parentName:"p"},"check")," method from the ",(0,r.kt)("a",{parentName:"p",href:"/docs/authentication/auth-provider"},(0,r.kt)("inlineCode",{parentName:"a"},"authProvider"))," under the hood."),(0,r.kt)("p",null,"It returns the result of ",(0,r.kt)("inlineCode",{parentName:"p"},"react-query"),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"useQuery")," which includes many properties, some of which being ",(0,r.kt)("inlineCode",{parentName:"p"},"isSuccess")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"isError"),"."),(0,r.kt)("p",null,"Data that is resolved from the ",(0,r.kt)("inlineCode",{parentName:"p"},"useIsAuthenticated")," will be returned as the ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," in the query result with the following type:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"type CheckResponse = {\n  authenticated: boolean;\n  redirectTo?: string;\n  logout?: boolean;\n  error?: Error;\n};\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"authenticated"),": A boolean value indicating whether the user is authenticated or not."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"redirectTo"),": A string value indicating the URL to redirect to if authentication is required."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"logout"),": A boolean value indicating whether the logout method should be called."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"error"),": An Error object representing any errors that may have occurred during the check.")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useIsAuthenticated")," can be useful when you want to check for authentication and handle the result manually."),(0,r.kt)("p",null,"We have used this hook in Refine's ",(0,r.kt)("a",{parentName:"p",href:"/docs/authentication/components/authenticated"},(0,r.kt)("inlineCode",{parentName:"a"},"<Authenticated>"))," component, which allows only authenticated users to access the page or any part of the code."),(0,r.kt)("p",null,"We will demonstrate a similar basic implementation below. Imagine that you have a public page, but you want to make some specific fields private."),(0,r.kt)("p",null,"We have a logic in ",(0,r.kt)("a",{parentName:"p",href:"/docs/authentication/auth-provider"},(0,r.kt)("inlineCode",{parentName:"a"},"authProvider")),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"check")," method like below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const authProvider: AuthProvider = {\n  // ...\n  // highlight-start\n  check: () => {\n    if (localStorage.getItem("email")) {\n      return {\n        authenticated: true,\n      };\n    }\n    return {\n      authenticated: false,\n      error: {\n        message: "Check failed",\n        name: "Not authenticated",\n      },\n      logout: true,\n      redirectTo: "/login",\n    };\n  },\n  // highlight-end\n};\n')),(0,r.kt)("br",null),(0,r.kt)("p",null,"Let's create a wrapper component that renders children if ",(0,r.kt)("inlineCode",{parentName:"p"},"check")," method returns the Promise resolved:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="components/authenticated.tsx"',title:'"components/authenticated.tsx"'},'// highlight-next-line\nimport { useIsAuthenticated, useGo } from "@refinedev/core";\n\nexport const Authenticated: React.FC<AuthenticatedProps> = ({\n  children,\n  fallback,\n  loading,\n}) => {\n  // highlight-next-line\n  const { isLoading, data } = useIsAuthenticated();\n\n  const go = useGo();\n\n  if (isLoading) {\n    return <>{loading}</> || null;\n  }\n\n  if (data.error) {\n    if (!fallback) {\n      go({ to: redirectTo, type: "replace" });\n      return null;\n    }\n\n    return <>{fallback}</>;\n  }\n\n  if (data.authenticated) {\n    return <>{children}</>;\n  }\n\n  return null;\n};\n\ntype AuthenticatedProps = {\n  fallback?: React.ReactNode;\n  loading?: React.ReactNode;\n};\n')),(0,r.kt)("br",null),(0,r.kt)("p",null,"Now, only authenticated users can see the price field:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="components/postShow"',title:'"components/postShow"'},'// highlight-next-line\nimport { Authenticated } from "components/authenticated";\n\nexport const PostShow: React.FC = () => (\n  <div>\n    // highlight-start\n    <Authenticated>\n      <span>Only authenticated users can see</span>\n    </Authenticated>\n    // highlight-end\n  </div>\n);\n')))}h.isMDXComponent=!0}}]);