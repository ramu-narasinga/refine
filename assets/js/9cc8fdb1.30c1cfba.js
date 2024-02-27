"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[61034],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},26001:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>m});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const l={title:"Develop your Own Customizable Invoice Generator with Refine and Strapi | Part I",description:"Looking for an invoice generator? Try out Refine. With our custom interface, you can build your own invoice in minutes! Learn more here.",slug:"refine-react-admin-invoice-generator",authors:"melih",tags:["Refine","tutorial","react","strapi"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/placeholder.png",hide_table_of_contents:!1},s=void 0,p={permalink:"/blog/refine-react-admin-invoice-generator",source:"@site/blog/2022-02-22-refine-invoice-generator.md",title:"Develop your Own Customizable Invoice Generator with Refine and Strapi | Part I",description:"Looking for an invoice generator? Try out Refine. With our custom interface, you can build your own invoice in minutes! Learn more here.",date:"2022-02-22T00:00:00.000Z",formattedDate:"February 22, 2022",tags:[{label:"Refine",permalink:"/blog/tags/refine"},{label:"tutorial",permalink:"/blog/tags/tutorial"},{label:"react",permalink:"/blog/tags/react"},{label:"strapi",permalink:"/blog/tags/strapi"}],readingTime:11.255,hasTruncateMarker:!0,authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],frontMatter:{title:"Develop your Own Customizable Invoice Generator with Refine and Strapi | Part I",description:"Looking for an invoice generator? Try out Refine. With our custom interface, you can build your own invoice in minutes! Learn more here.",slug:"refine-react-admin-invoice-generator",authors:"melih",tags:["Refine","tutorial","react","strapi"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/placeholder.png",hide_table_of_contents:!1},prevItem:{title:"Building an Customizable Invoice Generator App with Refine, Strapi & Ant Design | Part II",permalink:"/blog/refine-invoice-generator"},nextItem:{title:"Build internal tools using Low-Code with Refine, React-based framework",permalink:"/blog/build-internal-tools-using-low-code-with-refine"},relatedPosts:[{title:"A Comprehensive Guide of React Unit Testing",description:"We'll learn how to unit test our component down to hooks and Context.",permalink:"/blog/react-unit-testing",formattedDate:"May 26, 2023",authors:[{name:"Chidume Nnamdi",title:"Software Engineer",url:"https://github.com/philipszdavido",imageURL:"https://github.com/philipszdavido.png",key:"chidume_nnamdi"}],readingTime:20.295,date:"2023-05-26T00:00:00.000Z"},{title:"OTP Authentication with Supabase and Twilio in React",description:"We'll implement OTP(SMS) authorization using Twilio and Supabase in React app.",permalink:"/blog/supabase-twilio-otp-authentication-in-react",formattedDate:"September 22, 2022",authors:[{name:"Vijit Ail",title:"Software Engineer",url:"https://github.com/vijitail",imageURL:"https://github.com/vijitail.png",key:"vijit_ail"}],readingTime:14.17,date:"2022-09-22T00:00:00.000Z"},{title:"Next.js vs React - A Beginner's Guide",description:"We briefly run through the innovation driven differences between React and Next.js in rendering behavior, routing, data fetching, backend API development and app configuration.",permalink:"/blog/next-js-vs-react",formattedDate:"February 2, 2024",authors:[{name:"Marvel Ken",title:"Software Developer",imageURL:"/img/generic-profile.png",key:"marvel_ken"}],readingTime:22.54,date:"2024-02-02T00:00:00.000Z"}],authorPosts:[{title:"How to upload files from your HTML form using Base64 encoding",description:"Uploading files using Base64 encoding is a common practice. In this guide, I'm going to show you how to upload files using base64 encoding",permalink:"/blog/how-to-base64-upload",formattedDate:"December 22, 2021",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:3.145,date:"2021-12-22T00:00:00.000Z"},{title:"refine vs React-Admin Which is Better for Your Project?",description:"We will compare the features of Refine and react-admin",permalink:"/blog/refine-vs-react-admin",formattedDate:"November 26, 2021",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:14.43,date:"2021-11-26T00:00:00.000Z"},{title:"Create Your Easy Customizable Internal Issue Tracker With Refine and Supabase",description:"This web application will  us to create issue and tasks for your team members. You will also be able to choose the priority of these tasks, their tags, and which person to assign them to.",permalink:"/blog/customizable-issue-tracker-with-refine-and-supabase",formattedDate:"November 12, 2021",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:17.12,date:"2021-11-12T00:00:00.000Z"}]},c={authorsImageUrls:[void 0]},m=[{value:"Introduction",id:"introduction",level:2},{value:"Setup Refine Project",id:"setup-refine-project",level:2},{value:"Usage",id:"usage",level:2},{value:"Auth Provider",id:"auth-provider",level:3},{value:"Configure Refine for Strapi-v4\u200b",id:"configure-refine-for-strapi-v4",level:3},{value:"Create Strapi Collections\u200b",id:"create-strapi-collections",level:2},{value:"Your Company Detail Page",id:"your-company-detail-page",level:2},{value:"Company Card Component",id:"company-card-component",level:3},{value:"Company List Page",id:"company-list-page",level:3},{value:"Contact Page",id:"contact-page",level:2},{value:"Client List Page",id:"client-list-page",level:2},{value:"Client Card Component",id:"client-card-component",level:3},{value:"Client Create and Edit Page",id:"client-create-and-edit-page",level:3},{value:"Client List Page",id:"client-list-page-1",level:3},{value:"Example",id:"example",level:2},{value:"Conclusion",id:"conclusion",level:2}],u=(d="CodeSandboxExample",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var d;const h={toc:m};function g(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},h,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This post was created using version 3.x.x of ",(0,r.kt)("strong",{parentName:"p"},"Refine"),". Although we plan to update it with the latest version of ",(0,r.kt)("strong",{parentName:"p"},"Refine")," as soon as possible, you can still benefit from the post in the meantime."),(0,r.kt)("p",{parentName:"admonition"},"You should know that ",(0,r.kt)("strong",{parentName:"p"},"Refine")," version 4.x.x is backward compatible with version 3.x.x, so there is no need to worry. If you want to see the differences between the two versions, check out the ",(0,r.kt)("a",{parentName:"p",href:"https://refine.dev/docs/migration-guide/"},"migration guide"),"."),(0,r.kt)("p",{parentName:"admonition"},"Just be aware that the source code example in this post have been updated to version 4.x.x.")),(0,r.kt)("p",null,"Invoice management can be a daunting task for any business. With so many different software programs and options, it's hard to know where you need start or what will work best with your company culture! You can solve this problem with ",(0,r.kt)("strong",{parentName:"p"},"Refine"),". With Refine, you can develop your own customizable invoice generator with ease."),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"We are going to develop an invoice generator application for our business using ",(0,r.kt)("strong",{parentName:"p"},"Refine")," and ",(0,r.kt)("a",{parentName:"p",href:"https://strapi.io/"},"Strapi"),". Let's see together how simple yet functional it can be!"),(0,r.kt)("p",null,"This article will consist of two parts and we will try to explain each step in detail. In this section, we will create the basic parts of our application."),(0,r.kt)("p",null,"In this part, we will create a panel where our own company information is included, where we can create customers and create contacts with customer companies."),(0,r.kt)("h2",{id:"setup-refine-project"},"Setup Refine Project"),(0,r.kt)("p",null,"Let's start by creating our Refine project. You can use the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pankod/superplate"},"superplate")," to create a Refine project."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\nnpm create refine-app@latest refine-invoice-generator -- -p refine-react -b v3\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\u2714 What will be the name of your app \xb7refine-invoice-generator\n\u2714 Package manager: \xb7 Npm\n\u2714 Do you want to use a UI Framework? \xb7 Ant Design\n\u2714 Do you want a customized theme?: Default theme\n\u2714 Router Provider: \xb7 React Router v6\n\u2714 Data Provider: Strapi\n\u2714 Do you want a customized layout? No\n\u2714 i18n - Internationalization: \xb7 No\n")),(0,r.kt)("p",null,"superplate will quickly create our Refine project according to the features we choose. Let's continue by install the ",(0,r.kt)("a",{parentName:"p",href:"https://refine.dev/docs/packages/documentation/data-providers/strapi-v4"},"Refine Strapi-v4 Data Provider")," that we will use later."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @refinedev/strapi-v4\n")),(0,r.kt)("p",null,"Our Refine project and installations are now ready! Let's start using it."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("h3",{id:"auth-provider"},"Auth Provider"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Show Code"),(0,r.kt)("p",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/authProvider.ts"',title:'"src/authProvider.ts"'},'import { AuthProvider } from "@refinedev/core";\nimport { AuthHelper } from "@refinedev/strapi-v4";\n\nimport { TOKEN_KEY, API_URL } from "./constants";\n\nimport axios from "axios";\n\nexport const axiosInstance = axios.create();\nconst strapiAuthHelper = AuthHelper(API_URL + "/api");\n\nexport const authProvider: AuthProvider = {\n  login: async ({ username, password }) => {\n    const { data, status, statusText } = await strapiAuthHelper.login(\n      username,\n      password,\n    );\n    if (status === 200) {\n      localStorage.setItem(TOKEN_KEY, data.jwt);\n\n      // set header axios instance\n      axiosInstance.defaults.headers.common[\n        "Authorization"\n      ] = `Bearer ${data.jwt}`;\n\n      return {\n        success: true,\n        redirectTo: "/",\n      };\n    }\n\n    return {\n      success: false,\n      error: {\n        message: "Login failed",\n        name: statusText,\n      },\n    };\n  },\n  logout: async () => {\n    localStorage.removeItem(TOKEN_KEY);\n    return {\n      success: true,\n      redirectTo: "/",\n    };\n  },\n  onError: async (error) => {\n    console.error(error);\n    return { error };\n  },\n  check: async () => {\n    const token = localStorage.getItem(TOKEN_KEY);\n    if (token) {\n      axiosInstance.defaults.headers.common[\n        "Authorization"\n      ] = `Bearer ${token}`;\n      return {\n        authenticated: true,\n      };\n    }\n\n    return {\n      authenticated: false,\n      logout: true,\n      error: {\n        message: "Check failed",\n        name: "Token not found",\n      },\n      redirectTo: "/",\n    };\n  },\n  getPermissions: async () => ({}),\n  getIdentity: async () => {\n    const token = localStorage.getItem(TOKEN_KEY);\n    if (!token) {\n      return null;\n    }\n\n    const { data, status } = await strapiAuthHelper.me(token);\n    if (status === 200) {\n      const { id, username, email } = data;\n      return {\n        id,\n        username,\n        email,\n      };\n    }\n\n    return null;\n  },\n};\n')))),(0,r.kt)("h3",{id:"configure-refine-for-strapi-v4"},"Configure Refine for Strapi-v4\u200b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},'import { Refine } from "@refinedev/core";\nimport { useNotificationProvider, Layout, LoginPage } from "@refinedev/antd";\nimport routerProvider from "@refinedev/react-router-v6";\n//highlight-start\nimport { DataProvider } from "@refinedev/strapi-v4";\nimport { authProvider, axiosInstance } from "./authProvider";\n//highlight-end\n\nimport "@refinedev/antd/dist/reset.css";\n\nfunction App() {\n  const API_URL = "Your_Strapi_Url";\n  //highlight-next-line\n  const dataProvider = DataProvider(API_URL + "/api", axiosInstance);\n\n  return (\n    <Refine\n      routerProvider={routerProvider}\n      notificationProvider={useNotificationProvider}\n      Layout={Layout}\n      //highlight-start\n      dataProvider={dataProvider}\n      authProvider={authProvider}\n      //highlight-end\n      LoginPage={LoginPage}\n    />\n  );\n}\n')),(0,r.kt)("h2",{id:"create-strapi-collections"},"Create Strapi Collections\u200b"),(0,r.kt)("p",null,"We created three collections on Strapi as ",(0,r.kt)("inlineCode",{parentName:"p"},"company"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"client")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"contact")," and added a relation between them. For detailed information on how to create a collection, you can check ",(0,r.kt)("a",{parentName:"p",href:"https://docs.strapi.io/developer-docs/latest/getting-started/quick-start.html"},"here"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Company:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Logo: Media"),(0,r.kt)("li",{parentName:"ul"},"Name: Text"),(0,r.kt)("li",{parentName:"ul"},"Address: Text"),(0,r.kt)("li",{parentName:"ul"},"Country: Text"),(0,r.kt)("li",{parentName:"ul"},"City: Text"),(0,r.kt)("li",{parentName:"ul"},"email: Email"),(0,r.kt)("li",{parentName:"ul"},"Website: Text")),(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-02-22-refine-invoice-genarator/company.png",alt:"Strapi Company Collection"}),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Client:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Name: Text"),(0,r.kt)("li",{parentName:"ul"},"Contacts: Relation with Contact")),(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-02-22-refine-invoice-genarator/client.png",alt:"Strapi Client Collection"}),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Contact:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"First_name: Text"),(0,r.kt)("li",{parentName:"ul"},"Last_name: Text"),(0,r.kt)("li",{parentName:"ul"},"Phone_number Text"),(0,r.kt)("li",{parentName:"ul"},"Email: email"),(0,r.kt)("li",{parentName:"ul"},"Job: Text"),(0,r.kt)("li",{parentName:"ul"},"Client: Relation with Client")),(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-02-22-refine-invoice-genarator/contact.png",alt:"Strapi Contact Collection"}),(0,r.kt)("br",null),(0,r.kt)("p",null,"We have created our collections by Strapi, now we can create Clients and their contacts with ",(0,r.kt)("strong",{parentName:"p"},"Refine"),"."),(0,r.kt)("h2",{id:"your-company-detail-page"},"Your Company Detail Page"),(0,r.kt)("p",null,"As a first step, let's start to create the part where our own ",(0,r.kt)("inlineCode",{parentName:"p"},"Company")," will be located. If there are other companies you need to manage you can create them on the Your Company page and view them here."),(0,r.kt)("h3",{id:"company-card-component"},"Company Card Component"),(0,r.kt)("p",null,"Let's design a component that includes the details of our company. Then let's show it using ",(0,r.kt)("inlineCode",{parentName:"p"},"refine-antd")," ",(0,r.kt)("inlineCode",{parentName:"p"},"List"),". We will put the information such as name, logo and address from the Company collection we created on Strapi into Card component."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Show Code"),(0,r.kt)("p",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/company/CompanyItem.tsx"',title:'"src/components/company/CompanyItem.tsx"'},'import {\n  Card,\n  DeleteButton,\n  UrlField,\n  EmailField,\n  EditButton,\n  Typography,\n} from "@refinedev/antd";\n\nimport { ICompany } from "interfaces";\nimport { API_URL } from "../../constants";\n\nconst { Title, Text } = Typography;\n\n//highlight-start\ntype CompanyItemProps = {\n  item: ICompany;\n};\n//highlight-end\n\nexport const CompanyItem: React.FC<CompanyItemProps> = ({ item }) => {\n  const image = item.logo ? API_URL + item.logo.url : "./error.png";\n\n  return (\n    //highlight-start\n    <Card\n      style={{ width: "300px" }}\n      cover={\n        <div style={{ display: "flex", justifyContent: "center" }}>\n          <img\n            style={{\n              width: 220,\n              height: 100,\n              padding: 24,\n            }}\n            src={image}\n            alt="logo"\n          />\n        </div>\n      }\n      actions={[\n        <EditButton key="edit" size="small" hideText />,\n        <DeleteButton\n          key="delete"\n          size="small"\n          hideText\n          recordItemId={item.id}\n        />,\n      ]}\n    >\n      <Title level={5}>Company Name:</Title>\n      <Text>{item.name}</Text>\n      <Title level={5}>Company Address:</Title>\n      <Text>{item.address}</Text>\n      <Title level={5}>County:</Title>\n      <Text>{item.country}</Text>\n      <Title level={5}>City:</Title>\n      <Text>{item.city}</Text>\n      <Title level={5}>Email:</Title>\n      <EmailField value={item.email} />\n      <Title level={5}>Website:</Title>\n      <UrlField value={item.website} />\n    </Card>\n    //highlight-end\n  );\n};\n')))),(0,r.kt)("h3",{id:"company-list-page"},"Company List Page"),(0,r.kt)("p",null,"Let's place the ",(0,r.kt)("inlineCode",{parentName:"p"},"CompanyItem")," component that we created above in the ",(0,r.kt)("a",{parentName:"p",href:"https://refine.dev/docs/ui-frameworks/antd/hooks/list/useSimpleList/"},"refine-antd List")," and display company information."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/company/CompanyList.tsx"',title:'"src/pages/company/CompanyList.tsx"'},'import { IResourceComponentsProps } from "@refinedev/core";\n//highlight-next-line\nimport { useSimpleList, AntdList, List } from "@refinedev/antd";\n\n//highlight-next-line\nimport { CompanyItem } from "components/company";\n\nexport const CompanyList: React.FC<IResourceComponentsProps> = () => {\n  const { listProps } = useSimpleList<ICompany>({\n    meta: { populate: ["logo"] },\n  });\n\n  return (\n    //highlight-start\n    <List title={"Your Companies"}>\n      <AntdList\n        grid={{ gutter: 16 }}\n        {...listProps}\n        renderItem={(item) => (\n          <AntdList.Item>\n            //highlight-next-line\n            <CompanyItem item={item} />\n          </AntdList.Item>\n        )}\n      />\n    </List>\n    //highlight-end\n  );\n};\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},'...\n\n//highlight-next-line\nimport { CompanyList } from "pages/company";\n\nfunction App() {\n    const API_URL = "Your_Strapi_Url";\n    const dataProvider = DataProvider(API_URL + "/api", axiosInstance);\n\n    return (\n        <Refine\n            routerProvider={routerProvider}\n            notificationProvider={useNotificationProvider}\n            Layout={Layout}\n            dataProvider={dataProvider}\n            authProvider={authProvider}\n            LoginPage={LoginPage}\n            //highlight-start\n            resources={[\n                {\n                    name: "companies",\n                    meta: { label: "Your Company" },\n                    list: CompanyList,\n                },\n            ]}\n             //highlight-end\n        />\n    );\n}\n')),(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-02-22-refine-invoice-genarator/refine_company.png",alt:"Refine Company List"}),(0,r.kt)("br",null),(0,r.kt)("p",null,"We fetch the data of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Company")," collection that we created by Strapi, thanks to the ",(0,r.kt)("strong",{parentName:"p"},"Refine")," ",(0,r.kt)("inlineCode",{parentName:"p"},"dataProvider"),", and put it into the card component we created."),(0,r.kt)("h2",{id:"contact-page"},"Contact Page"),(0,r.kt)("p",null,"Our ",(0,r.kt)("inlineCode",{parentName:"p"},"Contact Page")," is a page related to ",(0,r.kt)("inlineCode",{parentName:"p"},"Clients"),". Communication with client companies will be through the contacts we create here. The Contact Page will contain the information of the people we will contact. Let's create our list using ",(0,r.kt)("strong",{parentName:"p"},"Refine")," ",(0,r.kt)("a",{parentName:"p",href:"https://refine.dev/docs/ui-frameworks/antd/hooks/table/useTable/"},"useTable")," hook."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/contact/ContactList.tsx"',title:'"src/pages/contact/ContactList.tsx"'},'import {\n  List,\n  Table,\n  TagField,\n  useTable,\n  Space,\n  EditButton,\n  DeleteButton,\n  useModalForm,\n} from "@refinedev/antd";\n\nimport { IContact } from "interfaces";\nimport { CreateContact } from "components/contacts";\n\nexport const ContactsList: React.FC = () => {\n  //highlight-start\n  const { tableProps } = useTable<IContact>({\n    meta: { populate: ["client"] },\n  });\n  //highlight-end\n\n  const {\n    formProps: createContactFormProps,\n    modalProps,\n    show,\n  } = useModalForm({\n    resource: "contacts",\n    action: "create",\n    redirect: false,\n  });\n\n  return (\n    <>\n      <List\n        createButtonProps={{\n          onClick: () => {\n            show();\n          },\n        }}\n      >\n        //highlight-start\n        <Table {...tableProps} rowKey="id">\n          <Table.Column dataIndex="id" title="ID" />\n          <Table.Column dataIndex="first_name" title="First Name" />\n          <Table.Column dataIndex="last_name" title="Last Name" />\n          <Table.Column dataIndex="phone_number" title="Phone Number" />\n          <Table.Column dataIndex="email" title="Email" />\n          <Table.Column\n            dataIndex="job"\n            title="Job"\n            render={(value: string) => (\n              <TagField color={"blue"} value={value} />\n            )}\n          />\n          <Table.Column<{ id: string }>\n            title="Actions"\n            dataIndex="actions"\n            render={(_, record) => (\n              <Space>\n                <EditButton hideText size="small" recordItemId={record.id} />\n                <DeleteButton hideText size="small" recordItemId={record.id} />\n              </Space>\n            )}\n          />\n        </Table>\n        //highlight-end\n      </List>\n      <CreateContact\n        modalProps={modalProps}\n        formProps={createContactFormProps}\n      />\n    </>\n  );\n};\n')),(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-02-22-refine-invoice-genarator/refine_contacts.png",alt:"Refine Contacts List"}),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"client-list-page"},"Client List Page"),(0,r.kt)("p",null,"We have created example company and contacts above. Now let's create a ",(0,r.kt)("inlineCode",{parentName:"p"},"Client List")," where we can view our clients."),(0,r.kt)("h3",{id:"client-card-component"},"Client Card Component"),(0,r.kt)("p",null,"Let's design the cards that will appear in our Client List."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Show Code"),(0,r.kt)("p",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/client/ClientItem.tsx"',title:'"src/components/client/ClientItem.tsx"'},'import { useDelete } from "@refinedev/core";\nimport {\n  Card,\n  TagField,\n  Typography,\n  Dropdown,\n  Menu,\n  Icons,\n} from "@refinedev/antd";\n\nimport { IClient } from "interfaces";\n\nconst { FormOutlined, DeleteOutlined } = Icons;\nconst { Title, Text } = Typography;\n\ntype ClientItemProps = {\n  item: IClient;\n  editShow: (id?: string | undefined) => void;\n};\n\nexport const ClientItem: React.FC<ClientItemProps> = ({ item, editShow }) => {\n  const { mutate } = useDelete();\n\n  return (\n    <Card style={{ width: 300, height: 300, borderColor: "black" }}>\n      <div style={{ position: "absolute", top: "10px", right: "5px" }}>\n        <Dropdown\n          overlay={\n            <Menu mode="vertical">\n              <Menu.Item\n                key="1"\n                style={{\n                  fontWeight: 500,\n                }}\n                icon={\n                  <FormOutlined\n                    style={{\n                      color: "green",\n                    }}\n                  />\n                }\n                onClick={() => editShow(item.id)}\n              >\n                Edit Client\n              </Menu.Item>\n              <Menu.Item\n                key="2"\n                style={{\n                  fontWeight: 500,\n                }}\n                icon={\n                  <DeleteOutlined\n                    style={{\n                      color: "red",\n                    }}\n                  />\n                }\n                onClick={() =>\n                  mutate({\n                    resource: "clients",\n                    id: item.id,\n                    mutationMode: "undoable",\n                    undoableTimeout: 5000,\n                  })\n                }\n              >\n                Delete Client\n              </Menu.Item>\n            </Menu>\n          }\n          trigger={["click"]}\n        >\n          <Icons.MoreOutlined\n            style={{\n              fontSize: 24,\n            }}\n          />\n        </Dropdown>\n      </div>\n\n      <Title level={4}>{item.name}</Title>\n      <Title level={5}>Client Id:</Title>\n      <Text>{item.id}</Text>\n      <Title level={5}>Contacts:</Title>\n\n      {item.contacts.map((item) => {\n        return (\n          <TagField\n            color={"#d1c4e9"}\n            value={`${item.first_name} ${item.last_name}`}\n          />\n        );\n      })}\n    </Card>\n  );\n};\n')))),(0,r.kt)("h3",{id:"client-create-and-edit-page"},"Client Create and Edit Page"),(0,r.kt)("p",null,"The client page is a place where you can update your client info and add new clients. Let's create the Create and Edit pages to create new customers and update existing customers."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create Client")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Show Create Component"),(0,r.kt)("p",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/client/CreateClient.tsx"',title:'"src/components/client/CreateClient.tsx"'},'import {\n  Create,\n  Drawer,\n  DrawerProps,\n  Form,\n  FormProps,\n  Input,\n  ButtonProps,\n  Grid,\n  Select,\n  useSelect,\n  useModalForm,\n  Button,\n} from "@refinedev/antd";\n\nimport { IContact } from "interfaces";\nimport { CreateContact } from "components/contacts";\n\ntype CreateClientProps = {\n  drawerProps: DrawerProps;\n  formProps: FormProps;\n  saveButtonProps: ButtonProps;\n};\n\nexport const CreateClient: React.FC<CreateClientProps> = ({\n  drawerProps,\n  formProps,\n  saveButtonProps,\n}) => {\n  const breakpoint = Grid.useBreakpoint();\n\n  const { selectProps } = useSelect<IContact>({\n    resource: "contacts",\n    optionLabel: "first_name",\n  });\n\n  const {\n    formProps: createContactFormProps,\n    modalProps,\n    show,\n  } = useModalForm({\n    resource: "contacts",\n    action: "create",\n    redirect: false,\n  });\n\n  return (\n    <>\n      <Drawer\n        {...drawerProps}\n        width={breakpoint.sm ? "500px" : "100%"}\n        bodyStyle={{ padding: 0 }}\n      >\n        <Create saveButtonProps={saveButtonProps}>\n          <Form\n            {...formProps}\n            layout="vertical"\n            initialValues={{\n              isActive: true,\n            }}\n          >\n            <Form.Item\n              label="Client Company Name"\n              name="name"\n              rules={[\n                {\n                  required: true,\n                },\n              ]}\n            >\n              <Input />\n            </Form.Item>\n            <Form.Item label="Select Contact">\n              <div style={{ display: "flex" }}>\n                <Form.Item name={"contacts"} noStyle>\n                  <Select {...selectProps} mode="multiple" />\n                </Form.Item>\n                <Button type="link" onClick={() => show()}>\n                  Create Contact\n                </Button>\n              </div>\n            </Form.Item>\n          </Form>\n        </Create>\n      </Drawer>\n\n      <CreateContact\n        modalProps={modalProps}\n        formProps={createContactFormProps}\n      />\n    </>\n  );\n};\n')))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Edit Client")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Show Edit Component"),(0,r.kt)("p",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/client/EditClient.tsx"',title:'"src/components/client/EditClient.tsx"'},'import {\n  Edit,\n  Drawer,\n  DrawerProps,\n  Form,\n  FormProps,\n  Input,\n  ButtonProps,\n  Grid,\n  Select,\n  useSelect,\n} from "@refinedev/antd";\n\ntype EditClientProps = {\n  drawerProps: DrawerProps;\n  formProps: FormProps;\n  saveButtonProps: ButtonProps;\n};\n\nexport const EditClient: React.FC<EditClientProps> = ({\n  drawerProps,\n  formProps,\n  saveButtonProps,\n}) => {\n  const breakpoint = Grid.useBreakpoint();\n\n  const { selectProps } = useSelect({\n    resource: "contacts",\n    optionLabel: "first_name",\n  });\n\n  return (\n    <Drawer\n      {...drawerProps}\n      width={breakpoint.sm ? "500px" : "100%"}\n      bodyStyle={{ padding: 0 }}\n    >\n      <Edit saveButtonProps={saveButtonProps}>\n        <Form\n          {...formProps}\n          layout="vertical"\n          initialValues={{\n            isActive: true,\n          }}\n        >\n          <Form.Item\n            label="Client Company Name"\n            name="name"\n            rules={[\n              {\n                required: true,\n              },\n            ]}\n          >\n            <Input />\n          </Form.Item>\n          <Form.Item label="Select Contact" name="contacts">\n            <Select {...selectProps} mode="multiple" />\n          </Form.Item>\n        </Form>\n      </Edit>\n    </Drawer>\n  );\n};\n')))),(0,r.kt)("h3",{id:"client-list-page-1"},"Client List Page"),(0,r.kt)("p",null,"Above, we created Card, Create and Edit components. Let's define and use these components we have created in our ",(0,r.kt)("inlineCode",{parentName:"p"},"ClientList"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/client/ClientList.tsx"',title:'"src/pages/client/ClientList.tsx"'},'import { IResourceComponentsProps, HttpError } from "@refinedev/core";\n\nimport {\n  useSimpleList,\n  AntdList,\n  List,\n  useDrawerForm,\n  CreateButton,\n} from "@refinedev/antd";\n\nimport { IClient } from "interfaces";\n//highlight-next-line\nimport { ClientItem, CreateClient, EditClient } from "components/client";\n\nexport const ClientList: React.FC<IResourceComponentsProps> = () => {\n  const { listProps } = useSimpleList<IClient>({\n    meta: { populate: ["contacts"] },\n  });\n\n  const {\n    drawerProps: createDrawerProps,\n    formProps: createFormProps,\n    saveButtonProps: createSaveButtonProps,\n    show: createShow,\n  } = useDrawerForm<IClient, HttpError, IClient>({\n    action: "create",\n    resource: "clients",\n    redirect: false,\n  });\n\n  const {\n    drawerProps: editDrawerProps,\n    formProps: editFormProps,\n    saveButtonProps: editSaveButtonProps,\n    show: editShow,\n  } = useDrawerForm<IClient, HttpError, IClient>({\n    action: "edit",\n    resource: "clients",\n    redirect: false,\n  });\n\n  return (\n    <>\n      <List\n        pageHeaderProps={{\n          extra: <CreateButton onClick={() => createShow()} />,\n        }}\n      >\n        <AntdList\n          grid={{ gutter: 24, xs: 1 }}\n          {...listProps}\n          renderItem={(item) => (\n            <AntdList.Item>\n              //highlight-next-line\n              <ClientItem item={item} editShow={editShow} />\n            </AntdList.Item>\n          )}\n        />\n      </List>\n      //highlight-start\n      <CreateClient\n        drawerProps={createDrawerProps}\n        formProps={createFormProps}\n        saveButtonProps={createSaveButtonProps}\n      />\n      <EditClient\n        drawerProps={editDrawerProps}\n        formProps={editFormProps}\n        saveButtonProps={editSaveButtonProps}\n      />\n      //highlight-end\n    </>\n  );\n};\n')),(0,r.kt)("p",null,"We created our ",(0,r.kt)("inlineCode",{parentName:"p"},"Client")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Contact")," pages. Now, let's create a Client with ",(0,r.kt)("strong",{parentName:"p"},"Refine")," and define contacts for our clients."),(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-02-22-refine-invoice-genarator/clients_overview.gif",alt:"Refine Clients Overview"}),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("admonition",{title:"Demo Credentials",type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"Username"),": demo"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"Password"),": demodemo")),(0,r.kt)(u,{path:"blog-invoice-generator",mdxType:"CodeSandboxExample"}),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"We have completed the first step of our project, creating a basic platform for users to create their company and clients. In the next section, we will add more functionality to this program by allowing users to generate invoices and track payments. Stay tuned as we continue working on ",(0,r.kt)("inlineCode",{parentName:"p"},"Refine Invoice Generator"),"!"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/blog/refine-invoice-generator/"},"You can find the Refine Invoice Generator Part II article here \u2192")))}g.isMDXComponent=!0}}]);