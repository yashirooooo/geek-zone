(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{186:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return f}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),l=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=l(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(a),u=n,f=d["".concat(o,".").concat(u)]||d[u]||b[u]||i;return a?r.a.createElement(f,s(s({ref:t},c),{},{components:a})):r.a.createElement(f,s({ref:t},c))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},77:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return l}));var n=a(3),r=a(7),i=(a(0),a(186)),o={title:"TypeScript interfaces"},s={unversionedId:"api/start/typescript",id:"api/start/typescript",isDocsHomePage:!1,title:"TypeScript interfaces",description:"The API is written in TypeScript, and as such definitions for all actual exposed interfaces are available. In general terms, care has been taken to expose types via a @polkadot//types interface, for instance the ApiOptions type which is passed through on the .create interface is available under @polkadot/api/types.",source:"@site/docs/api/start/typescript.md",slug:"/api/start/typescript",permalink:"/api/start/typescript",editUrl:"https://github.com/yashirooooo/geek-zone/edit/master/docs/api/start/typescript.md",version:"current",sidebar:"reference",previous:{title:"Type creation",permalink:"/api/start/types.create"},next:{title:"TypeScript user generated",permalink:"/api/start/typescript.user"}},p=[{value:"RPC interfaces",id:"rpc-interfaces",children:[]},{value:"Storage generics",id:"storage-generics",children:[]},{value:"Adding user types",id:"adding-user-types",children:[]}],c={toc:p};function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The API is written in TypeScript, and as such definitions for all actual exposed interfaces are available. In general terms, care has been taken to expose types via a ",Object(i.b)("inlineCode",{parentName:"p"},"@polkadot/<package>/types")," interface, for instance the ",Object(i.b)("inlineCode",{parentName:"p"},"ApiOptions")," type which is passed through on the ",Object(i.b)("inlineCode",{parentName:"p"},".create")," interface is available under ",Object(i.b)("inlineCode",{parentName:"p"},"@polkadot/api/types"),"."),Object(i.b)("h2",{id:"rpc-interfaces"},"RPC interfaces"),Object(i.b)("p",null,'Before getting to the "hard things", i.e. methods as decorated based on metadata interfaces, let\'s take a look at more "static" interfaces such as RPC. (Be aware though that these can be customized on a per-chain basis as well - for now this functionality is not reflected in the API itself).'),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"import { Header } from '@polkadot/types/interfaces';\n\n...\nconst firstHead = api.rpc.chain.getHeader();\n\napi.rpc.chain.subscribeNewHeads((lastHead: Header): void => {\n  console.log('current header:', JSON.stringify(lastHead));\n});\n")),Object(i.b)("p",null,"In the above example a couple of things are introduced - most of the chain definitions (the default types for both Polkadot & Substrate) can be imported as interfaces from the ",Object(i.b)("inlineCode",{parentName:"p"},"@polkadot/types/interfaces")," endpoint. These are not classes (since they are ",Object(i.b)("a",{parentName:"p",href:"https://github.com/polkadot-js/api/tree/master/packages/types/src/interfaces"},"generated from definitions"),") but rather a combination of TypeScript ",Object(i.b)("inlineCode",{parentName:"p"},"interfaces")," (where structures are involved) and ",Object(i.b)("inlineCode",{parentName:"p"},"type"),", i.e. ",Object(i.b)("inlineCode",{parentName:"p"},"type Balance = u128"),"."),Object(i.b)("p",null,"In the subscription example, we explicitly define ",Object(i.b)("inlineCode",{parentName:"p"},"lastHead: Header"),", although the same definition is missing for ",Object(i.b)("inlineCode",{parentName:"p"},"firstHead"),". However, in both these cases the definitions for the ",Object(i.b)("inlineCode",{parentName:"p"},"api.rpc")," sections are such that TypeScript understands that ",Object(i.b)("inlineCode",{parentName:"p"},"firstHead")," and ",Object(i.b)("inlineCode",{parentName:"p"},"lastHead")," are of type ",Object(i.b)("inlineCode",{parentName:"p"},"Header"),". The ",Object(i.b)("inlineCode",{parentName:"p"},": Header")," here is rather for our own understanding (and could be needed based on your eslint/tslint config)."),Object(i.b)("p",null,"As indicated, most of the Polkadot/Substrate default types are available via ",Object(i.b)("inlineCode",{parentName:"p"},"types/interfaces"),". However, for primitives types where there is an actual implementation, these are made available via ",Object(i.b)("inlineCode",{parentName:"p"},"@polkadot/types")," directly. For instance, ",Object(i.b)("inlineCode",{parentName:"p"},"import { u32 } from '@polkadot/types")," is valid in this context."),Object(i.b)("h2",{id:"storage-generics"},"Storage generics"),Object(i.b)("p",null,"For any interface injected by metadata, the types are not fully described but rather names and the API will decode all these into an instance that complies with the ",Object(i.b)("inlineCode",{parentName:"p"},"Codec")," interface. (The base of all our types)"),Object(i.b)("p",null,"However, this does allow you to perform overrides via generics, making the following possible -"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"import { Balance } from '@polkadot/types/interfaces';\n\ntype Balance2 = Balance;\n\n...\nconst total = await api.query.balances.totalIssuance<Balance2>();\n")),Object(i.b)("p",null,"In this example (although the query does indeed return a ",Object(i.b)("inlineCode",{parentName:"p"},"Balance"),") we can instruct the TypeScript compiler that we are expecting a ",Object(i.b)("inlineCode",{parentName:"p"},"Balance2"),", not just the interface as generated. This means that functions like ",Object(i.b)("inlineCode",{parentName:"p"},".toNumber()")," is available on both these types - as opposed to just the ",Object(i.b)("a",{parentName:"p",href:"/api/start/types.basics#everything-is-a-type"},"general type defaults")," with ",Object(i.b)("inlineCode",{parentName:"p"},".toHex()")," and friends."),Object(i.b)("h2",{id:"adding-user-types"},"Adding user types"),Object(i.b)("p",null,"In addition to the generated and available interfaces, there is also the ability to ",Object(i.b)("a",{parentName:"p",href:"/api/start/typescript.user"},"create TypeScript interfaces from your own definitions and well as your on-chain modules"),"."))}l.isMDXComponent=!0}}]);