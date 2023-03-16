(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{121:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return p}));var r=t(3),o=t(7),a=(t(0),t(186)),s={title:"Usage",slug:"/extension/usage"},i={unversionedId:"extension/usage",id:"extension/usage",isDocsHomePage:!1,title:"Usage",description:"To install the component, do yarn add @polkadot/extension-dapp",source:"@site/docs/extension/usage.md",slug:"/extension/usage",permalink:"/extension/usage",editUrl:"https://github.com/yashirooooo/geek-zone/edit/master/docs/extension/usage.md",version:"current",sidebar:"reference",previous:{title:"Overview",permalink:"/extension"},next:{title:"Cookbook",permalink:"/extension/cookbook"}},c=[],u={toc:c};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"To install the component, do ",Object(a.b)("inlineCode",{parentName:"p"},"yarn add @polkadot/extension-dapp"),"\nHere is a brief walk through how to use the different utilities from @polkadot/extension-dapp."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"import {\n  web3Accounts,\n  web3Enable,\n  web3FromAddress,\n  web3ListRpcProviders,\n  web3UseRpcProvider\n} from '@polkadot/extension-dapp';\n\n// returns an array of all the injected sources\n// (this needs to be called first, before other requests)\nconst allInjected = await web3Enable('my cool dapp');\n\n// returns an array of { address, meta: { name, source } }\n// meta.source contains the name of the extension that provides this account\nconst allAccounts = await web3Accounts();\n\n// the address we use to use for signing, as injected\nconst SENDER = '5DTestUPts3kjeXSTMyerHihn1uwMfLj8vU8sqF7qYrFabHE';\n\n// finds an injector for an address\nconst injector = await web3FromAddress(SENDER);\n\n// sign and send our transaction - notice here that the address of the account\n// (as retrieved injected) is passed through as the param to the `signAndSend`,\n// the API then calls the extension to present to the user and get it signed.\n// Once complete, the api sends the tx + signature via the normal process\napi.tx.balances\n  .transfer('5C5555yEXUcmEJ5kkcCMvdZjUo7NGJiQJMS7vZXEeoMhj3VQ', 123456)\n  .signAndSend(SENDER, { signer: injector.signer }, (status) => { ... });\n")))}p.isMDXComponent=!0},186:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return b}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),p=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=p(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=p(t),f=r,b=l["".concat(s,".").concat(f)]||l[f]||d[f]||a;return t?o.a.createElement(b,i(i({ref:n},u),{},{components:t})):o.a.createElement(b,i({ref:n},u))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,s=new Array(a);s[0]=f;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var u=2;u<a;u++)s[u]=t[u];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);