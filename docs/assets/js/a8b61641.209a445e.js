"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[855],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},i=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),l=c(r),m=o,f=l["".concat(u,".").concat(m)]||l[m]||d[m]||a;return r?n.createElement(f,s(s({ref:t},i),{},{components:r})):n.createElement(f,s({ref:t},i))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=m;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p[l]="string"==typeof e?e:o,s[1]=p;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8331:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:2},s="useOnMountAdapter",p={unversionedId:"adapters/useOnMountAdapter",id:"adapters/useOnMountAdapter",title:"useOnMountAdapter",description:"Docusaurus can manage multiple versions of your docs.",source:"@site/docs/adapters/useOnMountAdapter.md",sourceDirName:"adapters",slug:"/adapters/useOnMountAdapter",permalink:"/rodlopez-clean-code/docs/adapters/useOnMountAdapter",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/adapters/useOnMountAdapter.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"useEventAdapter",permalink:"/rodlopez-clean-code/docs/adapters/useEventAdapter"},next:{title:"useDependenciesAdapter",permalink:"/rodlopez-clean-code/docs/adapters/useDependenciesAdapter"}},u={},c=[],i={toc:c},l="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(l,(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"useonmountadapter"},"useOnMountAdapter"),(0,o.kt)("p",null,"Docusaurus can manage multiple versions of your docs."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="Component.tsx"',title:'"Component.tsx"'},'import { FC } from "react";\nimport { useOnMountAdapter } from "@rodlopez/clean-code";\n\nimport UseCaseGetData from "/src/UseCaseGetData";\n\nimport useExampleState from "/src/useExampleState";\nimport useExampleRepository from "/src/useExampleRepository";\n\nconst Component: FC = () => {\n  const state = useExampleState();\n  const repository = useExampleRepository();\n\n  // highlight-next-line\n  useOnMountAdapter(UseCaseGetData({ state, repository }));\n\n  return <button onClick={on}>Run</button>;\n};\n')))}d.isMDXComponent=!0}}]);