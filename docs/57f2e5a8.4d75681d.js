(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{109:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(3),i=n(7),r=(n(0),n(186)),o={title:"FAQ"},l={unversionedId:"util-crypto/FAQ",id:"util-crypto/FAQ",isDocsHomePage:!1,title:"FAQ",description:"The list will be updated/expanded as questions come up, dealing with some common issues that util-crypto users find.",source:"@site/docs/util-crypto/FAQ.md",slug:"/util-crypto/FAQ",permalink:"/util-crypto/FAQ",editUrl:"https://github.com/yashirooooo/geek-zone/edit/master/docs/util-crypto/FAQ.md",version:"current",sidebar:"reference",previous:{title:"Hash Data",permalink:"/util-crypto/examples/hash-data"},next:{title:"Overview",permalink:"/api-contract"}},s=[{value:"I am having trouble initializing the wasm interface",id:"i-am-having-trouble-initializing-the-wasm-interface",children:[]},{value:"My React Native build runs out of memory",id:"my-react-native-build-runs-out-of-memory",children:[]},{value:"I&#39;m using a web bundler and have no need for WASM or sr25519",id:"im-using-a-web-bundler-and-have-no-need-for-wasm-or-sr25519",children:[]}],c={toc:s};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The list will be updated/expanded as questions come up, dealing with some common issues that util-crypto users find."),Object(r.b)("h2",{id:"i-am-having-trouble-initializing-the-wasm-interface"},"I am having trouble initializing the wasm interface"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"@polkadot/util-crypto"),' libraries has a WASM backend but has JS fallbacks in place for most operations. This means that when the WASM has been initialized it will be used, alternatively the JS fallbacks will be utilized. Some interfaces, such as using sr25519 however are only available via WASM. When tyring to use these without a completed initialization and error such as "The WASM interface has not been initialized. Ensure that you wait for the initialization Promise before attempting to use WASM-only interfaces." will be thrown.'),Object(r.b)("p",null,"When using an import/require from the library the WASM async init will be automatically started. Due to the async nature of this process (which is also started automatically in the API) it may not have been completed before attempting to use. In these cases always use a ",Object(r.b)("inlineCode",{parentName:"p"},"await cryptoWaitReady()")," before attempting interfaces that required WASM."),Object(r.b)("h2",{id:"my-react-native-build-runs-out-of-memory"},"My React Native build runs out of memory"),Object(r.b)("p",null,"When using the util-crypto packages with RN, due to a lack of support, an ",Object(r.b)("a",{parentName:"p",href:"https://github.com/polkadot-js/wasm/issues/19"},"asm.js fallback")," is provided since (most) React Native implementations does not have a native WASM executor."),Object(r.b)("p",null,"While the fallback is fully tested and equivalent to the WASM version, it does add some memory load to the application build process. Additionally simnce the asm.js bundle is quite large, the build process is by no means fast. Ensure that you adjust your build flags to include ",Object(r.b)("inlineCode",{parentName:"p"},"NODE_OPTIONS=--max_old_space_size=8192"),", for instance doing ",Object(r.b)("inlineCode",{parentName:"p"},"NODE_OPTIONS=--max_old_space_size=8192 yarn run ios")),Object(r.b)("h2",{id:"im-using-a-web-bundler-and-have-no-need-for-wasm-or-sr25519"},"I'm using a web bundler and have no need for WASM or sr25519"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"util-crypto")," package relies on ",Object(r.b)("inlineCode",{parentName:"p"},"wasm-crypto")," to provide faster interfaces with JS fallbacks where WASM is not available. In some cases such as sr25519, only WASM interfaces are available, so it will not be operational without."),Object(r.b)("p",null,"If you use a bundler such as Webpack and do not want WASM at all, you can alias the ",Object(r.b)("inlineCode",{parentName:"p"},"wasm-crypto")," package to not bundle the WASM module at all. For this use-case, you can alias ",Object(r.b)("inlineCode",{parentName:"p"},"@polkadot/wasm-crypto-wasm")," to ",Object(r.b)("inlineCode",{parentName:"p"},"@polkadot/wasm-crypto-wasm/empty")," in your resolve config. Bundlers such as Rollup can be configured in the same way, with the same alias."),Object(r.b)("p",null,"When doing this JS will be used in all cases, except for sr25519 which is be fully non-available in your app."))}u.isMDXComponent=!0},186:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),u=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),b=a,m=p["".concat(o,".").concat(b)]||p[b]||d[b]||r;return n?i.a.createElement(m,l(l({ref:t},c),{},{components:n})):i.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);