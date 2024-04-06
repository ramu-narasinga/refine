"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[36728],{15680:(e,t,n)=>{n.d(t,{xA:()=>l,yg:()=>d});var r=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=p(n),f=o,d=s["".concat(u,".").concat(f)]||s[f]||m[f]||i;return n?r.createElement(d,a(a({ref:t},l),{},{components:n})):r.createElement(d,a({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[s]="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},89711:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>u,default:()=>b,frontMatter:()=>c,metadata:()=>p,toc:()=>s});n(96540);var r=n(15680);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const c={id:"mantine",title:"Authentication in Mantine",sidebar_label:"Authentication","example-title":"Authentication with Mantine","example-tags":["mantine","auth-provider"]},u=void 0,p={unversionedId:"examples/authentication/mantine",id:"examples/authentication/mantine",title:"Authentication in Mantine",description:"You can create your own Authentication approach using Refine. You can customize the AuthProvider methods according to your needs and control the privileges of your users. This example is a simple example of custom authentication with Refine.",source:"@site/docs/examples/authentication/mantine.md",sourceDirName:"examples/authentication",slug:"/examples/authentication/mantine",permalink:"/docs/examples/authentication/mantine",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/examples/authentication/mantine.md",tags:[],version:"current",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1712389618,formattedLastUpdatedAt:"Apr 6, 2024",frontMatter:{id:"mantine",title:"Authentication in Mantine",sidebar_label:"Authentication","example-title":"Authentication with Mantine","example-tags":["mantine","auth-provider"]},sidebar:"mainSidebar",previous:{title:"useSelect",permalink:"/docs/ui-integrations/mantine/hooks/use-select/"},next:{title:"Basic Table",permalink:"/docs/examples/table/mantine/basic"}},l={},s=[],m=(f="CodeSandboxExample",function(e){return console.warn("Component "+f+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.yg)("div",e)});var f;const d={toc:s},y="wrapper";function b(e){var{components:t}=e,n=a(e,["components"]);return(0,r.yg)(y,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"You can create your own Authentication approach using Refine. You can customize the ",(0,r.yg)("a",{parentName:"p",href:"/docs/authentication/auth-provider"},"AuthProvider")," methods according to your needs and control the privileges of your users. This example is a simple example of custom authentication with Refine."),(0,r.yg)(m,{path:"auth-mantine",mdxType:"CodeSandboxExample"}))}b.isMDXComponent=!0}}]);