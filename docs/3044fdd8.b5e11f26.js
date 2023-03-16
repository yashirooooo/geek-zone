(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{186:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,h=p["".concat(o,".").concat(b)]||p[b]||d[b]||i;return n?a.a.createElement(h,c(c({ref:t},l),{},{components:n})):a.a.createElement(h,c({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},88:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),i=(n(0),n(186)),o={title:"FAQ"},c={unversionedId:"api-contract/FAQ",id:"api-contract/FAQ",isDocsHomePage:!1,title:"FAQ",description:"The list will be updated/expanded as questions come up, dealing with some common issues that API users find.",source:"@site/docs/api-contract/FAQ.md",slug:"/api-contract/FAQ",permalink:"/api-contract/FAQ",editUrl:"https://github.com/yashirooooo/geek-zone/edit/master/docs/api-contract/FAQ.md",version:"current",sidebar:"reference",previous:{title:"Contract Tx",permalink:"/api-contract/start/contract.tx"},next:{title:"Overview",permalink:"/extension"}},s=[{value:"My ABI cannot be parsed",id:"my-abi-cannot-be-parsed",children:[]},{value:"After upgrading to 2.5+ I&#39;m missing isSuccess/isError",id:"after-upgrading-to-25-im-missing-issuccessiserror",children:[]},{value:"Why is there a snake_case vs camelCase difference",id:"why-is-there-a-snake_case-vs-camelcase-difference",children:[]},{value:"How do I subscribe to a contract query?",id:"how-do-i-subscribe-to-a-contract-query",children:[]}],l={toc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The list will be updated/expanded as questions come up, dealing with some common issues that API users find."),Object(i.b)("h2",{id:"my-abi-cannot-be-parsed"},"My ABI cannot be parsed"),Object(i.b)("p",null,'When passing an older pre ink! 3.0-rc1 version of the ABI, you will have an "Invalid JSON ABI structure supplied, expected a recent metadata version" error being returned. As explained in the ',Object(i.b)("a",{parentName:"p",href:"/api-contract/start/install"},"getting started guide")," as of ",Object(i.b)("inlineCode",{parentName:"p"},"@polkadot/api-contract")," 2.2+ the older ink! 2.1 versions are not supported."),Object(i.b)("p",null,"If you are using an older version you would need to use an older version of the API or upgrade your contracts to ink! 3.0."),Object(i.b)("h2",{id:"after-upgrading-to-25-im-missing-issuccessiserror"},"After upgrading to 2.5+ I'm missing isSuccess/isError"),Object(i.b)("p",null,"In earlier versions of Substrate the call results via read had a slightly different interface to what it available now. Specifically on the ",Object(i.b)("inlineCode",{parentName:"p"},"result")," structure retrieved via read calls ",Object(i.b)("inlineCode",{parentName:"p"},"isOk")," was named ",Object(i.b)("inlineCode",{parentName:"p"},"isSuccess")," (and ",Object(i.b)("inlineCode",{parentName:"p"},"isErr")," was named ",Object(i.b)("inlineCode",{parentName:"p"},"isError"),"). Since the ",Object(i.b)("inlineCode",{parentName:"p"},"Contract")," interface follows the Substrate convention these changes to ",Object(i.b)("inlineCode",{parentName:"p"},"is{Ok,Err}")," has been applied alongside the Substrate update to the ",Object(i.b)("inlineCode",{parentName:"p"},"ContractExecResult")," structure."),Object(i.b)("p",null,"In addition ",Object(i.b)("inlineCode",{parentName:"p"},"asErr")," (unlike the older ",Object(i.b)("inlineCode",{parentName:"p"},"asError"),") now also has a full error enum (mapping to ",Object(i.b)("inlineCode",{parentName:"p"},"DispatchError"),") containing failures, unlike the older interface where this was not available. On older chains due to lack of information this will always be ",Object(i.b)("inlineCode",{parentName:"p"},"Other"),", while on newer chains the result will be fully populated."),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"Contract")," interface, despite these underlying naming changes, transparently maps older responses (on older, not yet upgraded chains) to the newer structure, so while there is an change to the JS code use required to cater for this new structure, it can be used against both old and new chains with a transparent mapping between."),Object(i.b)("h2",{id:"why-is-there-a-snake_case-vs-camelcase-difference"},"Why is there a snake_case vs camelCase difference"),Object(i.b)("p",null,"The API always tries to use ",Object(i.b)("inlineCode",{parentName:"p"},"camelCase")," naming where available. This aligns with the de-facto standards that are generally (not always!) used in JS interfaces. This means that when decorating the ABIs into ",Object(i.b)("inlineCode",{parentName:"p"},"contract.<query|tx>.methodName")," the ",Object(i.b)("inlineCode",{parentName:"p"},"methodName")," part would be in camelCase format."),Object(i.b)("p",null,"An example of this would be in the erc20 ink! ABI - the method in the above would be ",Object(i.b)("inlineCode",{parentName:"p"},"balance_of")," however the API (for consistency with the full suite of libraries), decorate this as ",Object(i.b)("inlineCode",{parentName:"p"},"contract.query.balanceOf"),". When calling the ",Object(i.b)("inlineCode",{parentName:"p"},".read")," or ",Object(i.b)("inlineCode",{parentName:"p"},".exec")," directly on the contract, you can still specify the original ABI identifier, e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"contract.read('balance_of', ...)"),"."),Object(i.b)("h2",{id:"how-do-i-subscribe-to-a-contract-query"},"How do I subscribe to a contract query?"),Object(i.b)("p",null,"Subscriptions, and queries to the raw storage are on their way! Unfortunately until then there isn't a proper way to subscribe to a contract query. A temporary workaround is to subscribe to ",Object(i.b)("inlineCode",{parentName:"p"},"api.query.contracts.contractInfoOf"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},"const unsub = await api.query.contracts.contractInfoOf(contractAddress, async () => {\n    // Perform a read of the contract's `get` message\n    const callValue = await contract.query.get(alicePair.address, value, gasLimit);\n\n    // Do something with callValue\n  });\n")),Object(i.b)("p",null,"But this workaround is not without drawbacks. Since the callback will be executed every time the contract's storage is affected you will ultimately end up calling your contract query more often than necessary."))}u.isMDXComponent=!0}}]);