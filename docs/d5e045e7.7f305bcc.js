(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{163:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),a=(n(0),n(186)),i={title:"React"},c={unversionedId:"ui-identicon/react",id:"ui-identicon/react",isDocsHomePage:!1,title:"React",description:"A generic identity icon that can render icons based on the theme, be it Substrate or Polkadot",source:"@site/docs/ui-identicon/react.md",slug:"/ui-identicon/react",permalink:"/ui-identicon/react",editUrl:"https://github.com/yashirooooo/geek-zone/edit/master/docs/ui-identicon/react.md",version:"current",sidebar:"reference",previous:{title:"Overview",permalink:"/ui-identicon"},next:{title:"React Native",permalink:"/ui-identicon/react-native"}},s=[{value:"Usage Examples",id:"usage-examples",children:[]}],l={toc:s};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"A generic identity icon that can render icons based on the theme, be it Substrate or Polkadot"),Object(a.b)("h2",{id:"usage-examples"},"Usage Examples"),Object(a.b)("p",null,"To install the component, do ",Object(a.b)("inlineCode",{parentName:"p"},"yarn add @polkadot/react-identicon")),Object(a.b)("p",null,"Inside a React component, you can now render any account with the associated icon -"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"import Identicon from '@polkadot/react-identicon';\n\n...\nrender () {\n  // address is an ss58-encoded address or publicKey (hex string or Uint8Array)\n  const { address } = this.props;\n  // size (optional) is a number, indicating the size (in pixels, 64 as default)\n  const size = 32;\n  // theme (optional), depicts the type of icon, one of\n  // 'polkadot', 'substrate' (default), 'beachball' or 'jdenticon'\n  const theme = 'polkadot';\n\n  // standard className & style props are also available\n  return (\n    <Identicon\n      value={address}\n      size={size}\n      theme={theme}\n    />\n  );\n}\n...\n")))}u.isMDXComponent=!0},186:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,m=p["".concat(i,".").concat(b)]||p[b]||d[b]||a;return n?o.a.createElement(m,c(c({ref:t},l),{},{components:n})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);