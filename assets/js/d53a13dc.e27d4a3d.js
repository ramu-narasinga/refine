"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[42116],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),s=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(n),g=r,h=m["".concat(l,".").concat(g)]||m[g]||p[g]||o;return n?i.createElement(h,a(a({ref:t},u),{},{components:n})):i.createElement(h,a({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<o;s++)a[s]=n[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},52465:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>g,frontMatter:()=>c,metadata:()=>s,toc:()=>p});n(67294);var i=n(3905);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function a(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const c={title:"Introduction to Next.js Link component with examples",description:"A guide for navigation between pages using Next.js Link",slug:"next-js-link-component",authors:"michael",tags:["nextjs"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-04-next-link/social.png",hide_table_of_contents:!1},l=void 0,s={permalink:"/blog/next-js-link-component",source:"@site/blog/2022-09-04-next-link.md",title:"Introduction to Next.js Link component with examples",description:"A guide for navigation between pages using Next.js Link",date:"2022-09-04T00:00:00.000Z",formattedDate:"September 4, 2022",tags:[{label:"nextjs",permalink:"/blog/tags/nextjs"}],readingTime:8.19,hasTruncateMarker:!0,authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://github.com/Mich45.png",key:"michael"}],frontMatter:{title:"Introduction to Next.js Link component with examples",description:"A guide for navigation between pages using Next.js Link",slug:"next-js-link-component",authors:"michael",tags:["nextjs"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-04-next-link/social.png",hide_table_of_contents:!1},prevItem:{title:"Material UI button in React",permalink:"/blog/mui-button-in-react"},nextItem:{title:"How to create a CRUD app with SvelteKit",permalink:"/blog/sveltekit-crud-app-with-svelte-mui"},relatedPosts:[{title:"NextAuth - Google And GitHub Authentications for Nextjs",description:"How to implement Google and GitHub authentications using NextAuth.js in Next.js?",permalink:"/blog/nextauth-google-github-authentication-nextjs",formattedDate:"August 18, 2022",authors:[{name:"Ekekenta Clinton",title:"Software Engineer",url:"https://github.com/icode247",imageURL:"https://github.com/icode247.png",key:"ekekenta_clinton"}],readingTime:12.575,date:"2022-08-18T00:00:00.000Z"},{title:"Next.js vs React - A Beginner's Guide",description:"We briefly run through the innovation driven differences between React and Next.js in rendering behavior, routing, data fetching, backend API development and app configuration.",permalink:"/blog/next-js-vs-react",formattedDate:"February 2, 2024",authors:[{name:"Marvel Ken",title:"Software Developer",imageURL:"/img/generic-profile.png",key:"marvel_ken"}],readingTime:22.54,date:"2024-02-02T00:00:00.000Z"},{title:"How to Fetch Data in React with useSWR",description:"Introduction to SWR and useSwr for Client-Side Data Fetching",permalink:"/blog/data-fetching-next-js-useswr",formattedDate:"January 3, 2023",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://github.com/Mich45.png",key:"michael"}],readingTime:13.2,date:"2023-01-03T00:00:00.000Z"}],authorPosts:[{title:"Next.js 13 - What are the new features?",description:"Next.js 13 is out! Let's see the new features in this release.",permalink:"/blog/new-features-in-next-js-13",formattedDate:"November 12, 2022",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://github.com/Mich45.png",key:"michael"}],readingTime:6.125,date:"2022-11-12T00:00:00.000Z"},{title:"How to Fetch Data in React with useSWR",description:"Introduction to SWR and useSwr for Client-Side Data Fetching",permalink:"/blog/data-fetching-next-js-useswr",formattedDate:"January 3, 2023",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://github.com/Mich45.png",key:"michael"}],readingTime:13.2,date:"2023-01-03T00:00:00.000Z"},{title:"Nextjs image optimization with examples",description:"Built-in image optimization using next image component",permalink:"/blog/using-next-image",formattedDate:"August 17, 2022",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://github.com/Mich45.png",key:"michael"}],readingTime:12.52,date:"2022-08-17T00:00:00.000Z"}]},u={authorsImageUrls:[void 0]},p=[{value:"Introduction",id:"introduction",level:2}],m={toc:p};function g(e){var{components:t}=e,n=a(e,["components"]);return(0,i.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){r(e,t,n[t])}))}return e}({},m,n),{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"If you have built websites and applications on the web, then you're very likely to have used a common method for navigation. Traditionally, navigation is often achieved with the HTML anchor element (",(0,i.kt)("inlineCode",{parentName:"p"},"<a></a>"),"). The anchor element is primarily used for navigating within and outside websites and webpages, and it serves its purpose pretty well."),(0,i.kt)("p",null,"In this article, we'll introduce you to Next.js ",(0,i.kt)("inlineCode",{parentName:"p"},"<Link/>")," component, a similar method of navigation to the native anchor element but with additional built-in features for optimization. The ",(0,i.kt)("strong",{parentName:"p"},"Next.js Link")," component has additional benefits, such as options to customize navigation behavior through props and improved performance and SEO metrics."))}g.isMDXComponent=!0}}]);