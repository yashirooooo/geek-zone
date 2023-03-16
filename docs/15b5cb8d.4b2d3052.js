(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{186:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),u=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},g=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),g=r,b=p["".concat(s,".").concat(g)]||p[g]||d[g]||a;return n?i.a.createElement(b,o(o({ref:t},l),{},{components:n})):i.a.createElement(b,o({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=g;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var l=2;l<a;l++)s[l]=n[l];return i.a.createElement.apply(null,s)}return i.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},70:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),i=n(7),a=(n(0),n(186)),s={title:"Sign & Verify"},o={unversionedId:"keyring/start/sign-verify",id:"keyring/start/sign-verify",isDocsHomePage:!1,title:"Sign & Verify",description:"In the previous sections we explored creating and adding a pair to the Keyring. However, let's actually use the pairs in something that is not just extracting local information.",source:"@site/docs/keyring/start/sign-verify.md",slug:"/keyring/start/sign-verify",permalink:"/keyring/start/sign-verify",editUrl:"https://github.com/yashirooooo/geek-zone/edit/master/docs/keyring/start/sign-verify.md",version:"current",sidebar:"reference",previous:{title:"ss58 Formats",permalink:"/keyring/start/ss58"},next:{title:"Substrate Uri",permalink:"/keyring/start/suri"}},c=[{value:"Using known pairs",id:"using-known-pairs",children:[]},{value:"Verify using address or publicKey",id:"verify-using-address-or-publickey",children:[]},{value:"Substrate Uri",id:"substrate-uri",children:[]}],l={toc:c};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"In the previous sections we explored creating and adding a pair to the Keyring. However, let's actually use the pairs in something that is not just extracting local information."),Object(a.b)("p",null,"When using the API, pairs are critical since it gets used in ",Object(a.b)("a",{parentName:"p",href:"/api/start/api.tx.subs#transaction-inclusion"},"signing transactions"),". The same signing and verification structure can be used on any kind of message. Here we will take you through the steps of signing and verifying messages."),Object(a.b)("h2",{id:"using-known-pairs"},"Using known pairs"),Object(a.b)("p",null,"Assuming a known pair ",Object(a.b)("inlineCode",{parentName:"p"},"Alice")," we can exchange signatures and perform verification."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"import { stringToU8a, u8aToHex } from '@polkadot/util';\n\n// create Alice based on the development seed\nconst alice = keyring.addFromUri('//Alice');\n\n// create the message, actual signature and verify\nconst message = stringToU8a('this is our message');\nconst signature = alice.sign(message);\nconst isValid = alice.verify(message, signature);\n\n// output the result\nconsole.log(`${u8aToHex(signature)} is ${isValid ? 'valid' : 'invalid'}`);\n")),Object(a.b)("p",null,"Here we created an ",Object(a.b)("inlineCode",{parentName:"p"},"Alice")," pair with a ",Object(a.b)("a",{parentName:"p",href:"/keyring/start/suri"},"derivation path"),". In the next section we will delve into derivation, but for now just know that we have used the Substrate development mnemonic (default when no mnemonic supplied, but a derivation is) and created an address from it. Next we signed the message and then verified it."),Object(a.b)("p",null,"On the line logging, you will notice a difference between ",Object(a.b)("inlineCode",{parentName:"p"},"sr25519")," pairs compared to other crypto types such as ",Object(a.b)("inlineCode",{parentName:"p"},"ed25519"),". In ",Object(a.b)("inlineCode",{parentName:"p"},"sr25519")," signatures are non-deterministic. This means that each time a signature is generated, like above, even if the data does match, the signature will be different. In the case of ",Object(a.b)("inlineCode",{parentName:"p"},"ed25519")," or ",Object(a.b)("inlineCode",{parentName:"p"},"ecdsa")," each signature, for the same input data, will be the same."),Object(a.b)("h2",{id:"verify-using-address-or-publickey"},"Verify using address or publicKey"),Object(a.b)("p",null,"In the previous example it is assumed that you have access to the pair to verify. In real-world examples this is rarely the case since the pair owner won't share his secrets with the person verifying the signature. So while the person generating the signature needs access to the pair (since the signature is generated via the wrapped ",Object(a.b)("inlineCode",{parentName:"p"},"secretKey"),"), the process verifying the signature would only have access to the address."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"import { stringToU8a, u8aToHex } from '@polkadot/util';\nimport { signatureVerify } from '@polkadot/util-crypto';\n\n// create Alice based on the development seed\nconst alice = keyring.addFromUri('//Alice');\n\n// create the message and sign it\nconst message = stringToU8a('this is our message');\nconst signature = alice.sign(message);\n\n// verify the message using Alice's address\nconst { isValid } = signatureVerify(message, signature, alice.address);\n\n// output the result\nconsole.log(`${u8aToHex(signature)} is ${isValid ? 'valid' : 'invalid'}`);\n")),Object(a.b)("h2",{id:"substrate-uri"},"Substrate Uri"),Object(a.b)("p",null,"We understand how to use the keyring to perform basic operations, next up we will dive into the ",Object(a.b)("a",{parentName:"p",href:"/keyring/start/suri"},"Substrate derivation")," as briefly introduced with the ",Object(a.b)("inlineCode",{parentName:"p"},"Alice")," keypair above."))}u.isMDXComponent=!0}}]);