"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[519],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,c(c({ref:t},u),{},{components:n})):r.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:o,c[1]=s;for(var l=2;l<a;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7050:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:4},c="traceAsync",s={unversionedId:"fetching/traceAsync",id:"fetching/traceAsync",title:"traceAsync",description:"Abstrae el seguimiento de la request y recibe como segundo parametro la promesa que retorna el objeto resultando de la request.",source:"@site/docs/fetching/traceAsync.md",sourceDirName:"fetching",slug:"/fetching/traceAsync",permalink:"/rodlopez-clean-code/docs/fetching/traceAsync",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/fetching/traceAsync.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"AsyncRequestRender",permalink:"/rodlopez-clean-code/docs/fetching/AsyncRequestRender"},next:{title:"Middlewares",permalink:"/rodlopez-clean-code/docs/fetching/Middlewares"}},i={},l=[],u={toc:l},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"traceasync"},"traceAsync"),(0,o.kt)("p",null,"Abstrae el seguimiento de la request y recibe como segundo parametro la promesa que retorna el objeto resultando de la request."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="RequestComponent.tsx"',title:'"RequestComponent.tsx"'},'import {\n  traceAsync,\n  useCleanFetching,\n  AsyncRequestRender,\n} from "@rodlopez/clean-code";\n\ninterface TypeOfResult {\n  name: string;\n  email: string;\n}\n\nconst RequestComponent = () => {\n  const state = useCleanFetching<TypeOfResult, any>();\n\n  const mockPromise = async (): Promise<TypeOfResult> => {...};\n\n  useEffect(() => {\n    // highlight-next-line\n    state.traceAsync(mockPromise);\n  }, []);\n\n  return <AsyncRequestRender state={state} />;\n};\n')),(0,o.kt)("admonition",{title:"Importante",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"El segundo gen\xe9rico recibido por el hook ",(0,o.kt)("strong",{parentName:"p"},"useCleanFetching")," representa el tipado del objeto de error que se recibe, al usar traceAsync lo recomendable es ocupar ",(0,o.kt)("inlineCode",{parentName:"p"},"any")," o de preferencia ",(0,o.kt)("inlineCode",{parentName:"p"},"unknown"))))}d.isMDXComponent=!0}}]);