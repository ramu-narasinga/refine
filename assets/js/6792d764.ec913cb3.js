"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2285],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),f=u(n),m=o,b=f["".concat(s,".").concat(m)]||f[m]||p[m]||i;return n?r.createElement(b,c(c({ref:t},l),{},{components:n})):r.createElement(b,c({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=f;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var u=2;u<i;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},85969:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>u,toc:()=>p});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const a={},s=void 0,u={unversionedId:"notification/hooks/use-notification/basic-usage-live-preview",id:"notification/hooks/use-notification/basic-usage-live-preview",title:"basic-usage-live-preview",description:"",source:"@site/docs/notification/hooks/use-notification/basic-usage-live-preview.md",sourceDirName:"notification/hooks/use-notification",slug:"/notification/hooks/use-notification/basic-usage-live-preview",permalink:"/docs/notification/hooks/use-notification/basic-usage-live-preview",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/notification/hooks/use-notification/basic-usage-live-preview.md",tags:[],version:"current",lastUpdatedBy:"Batuhan Wilhelm",lastUpdatedAt:1710923307,formattedLastUpdatedAt:"Mar 20, 2024",frontMatter:{}},l={},p=[],f={toc:p};function m(e){var{components:t}=e,n=c(e,["components"]);return(0,r.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},f,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/products previewHeight=200px hideCode",live:!0,url:"http://localhost:3000/products",previewHeight:"200px",hideCode:!0},'setInitialRoutes(["/"]);\n// visible-block-start\nimport { useNotification } from "@refinedev/core";\nimport { Button, Stack } from "@mui/material";\n\nconst ExamplePage: React.FC = () => {\n  const { open, close } = useNotification();\n\n  return (\n    <Stack spacing={2} direction="row">\n      <Button\n        color="success"\n        variant="outlined"\n        size="small"\n        onClick={() =>\n          open?.({\n            type: "success",\n            message: "Success",\n            description: "Success description",\n          })\n        }\n      >\n        Success\n      </Button>\n      <Button\n        color="error"\n        variant="outlined"\n        size="small"\n        onClick={() =>\n          open?.({\n            type: "error",\n            message: "Error",\n            description: "Error description",\n          })\n        }\n      >\n        Error\n      </Button>\n\n      <Button\n        color="secondary"\n        variant="outlined"\n        size="small"\n        onClick={() =>\n          open?.({\n            type: "progress",\n            message: "Progress",\n            undoableTimeout: 5,\n            cancelMutation: () => {\n              alert("cancelMutation");\n            },\n          })\n        }\n      >\n        Progress\n      </Button>\n    </Stack>\n  );\n};\n// visible-block-end\nsetRefineProps({\n  DashboardPage: () => <ExamplePage />,\n  resources: [\n    {\n      name: "post",\n      create: () => {},\n    },\n  ],\n});\nrender(<RefineMuiDemo />);\n')))}m.isMDXComponent=!0}}]);