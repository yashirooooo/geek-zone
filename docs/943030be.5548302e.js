(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{132:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return l}));var r=t(3),i=t(7),a=(t(0),t(186)),o={title:"Substrate Uri"},s={unversionedId:"keyring/start/suri",id:"keyring/start/suri",isDocsHomePage:!1,title:"Substrate Uri",description:"Substrate has a standard derivation format that applies on any seeds and mnemonics. This means that for a given secret, you can apply hard derivations, soft derivations to generate a new pair. In all the examples we have used either addFromUri or createFromUri and have supplied all with an empty derivation path.",source:"@site/docs/keyring/start/suri.md",slug:"/keyring/start/suri",permalink:"/keyring/start/suri",editUrl:"https://github.com/yashirooooo/geek-zone/edit/master/docs/keyring/start/suri.md",version:"current",sidebar:"reference",previous:{title:"Sign & Verify",permalink:"/keyring/start/sign-verify"},next:{title:"FAQ",permalink:"/keyring/FAQ"}},c=[{value:"Dev accounts",id:"dev-accounts",children:[]},{value:"Putting it together",id:"putting-it-together",children:[]},{value:"Working with non-mnemonics",id:"working-with-non-mnemonics",children:[]},{value:"Overview... done.",id:"overview-done",children:[]}],d={toc:c};function l(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Substrate has a standard derivation format that applies on any seeds and mnemonics. This means that for a given secret, you can apply hard derivations, soft derivations to generate a new pair. In all the examples we have used either ",Object(a.b)("inlineCode",{parentName:"p"},"addFromUri")," or ",Object(a.b)("inlineCode",{parentName:"p"},"createFromUri")," and have supplied all with an empty derivation path."),Object(a.b)("p",null,"In general the derivation format is specified as ",Object(a.b)("inlineCode",{parentName:"p"},"<mnemonic or mini-secret>[//hard-derivation][/soft-derivation][///password]")," where"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"mnemonic or mini-secret")," is either of the secret types. For mini-secrets we would supply 32 bytes in hex format (",Object(a.b)("inlineCode",{parentName:"li"},"0x"),"-prefixed with 64 additional ",Object(a.b)("inlineCode",{parentName:"li"},"0"),"-",Object(a.b)("inlineCode",{parentName:"li"},"f")," bytes)"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"hard-derivation")," is a hard path, always prefixed by ",Object(a.b)("inlineCode",{parentName:"li"},"//")," to indicate the type. Multiple hard derivations can be applied, i.e. ",Object(a.b)("inlineCode",{parentName:"li"},"//hard//again")," would be valid. Underlying it will apply a hashing function on the secret, generating a new secret for the remainder of the derivations."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"soft-derivation")," is a soft path, always prefixed by ",Object(a.b)("inlineCode",{parentName:"li"},"/"),". This derivation is only available and supported on ",Object(a.b)("inlineCode",{parentName:"li"},"sr25519")," pairs. While other crypto can do soft derivations, the Substrate implementation only supports this on Schnorrkel."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"password"),", always prefixed by ",Object(a.b)("inlineCode",{parentName:"li"},"///")," indicates a derivation password, not to be confused with a pair password as implemented on the keyring. Using these means that an initial kdf is applied upon derivation, which means that even if the seed would leak, accounts cannot be derived without the initial password. Unlike hard and soft derivations that can be mixed, only a single password should be specified per derivation.")),Object(a.b)("h2",{id:"dev-accounts"},"Dev accounts"),Object(a.b)("p",null,"In a preceding section we created a development-specific ",Object(a.b)("inlineCode",{parentName:"p"},"Alice")," account. Now that we have a breakdown of the suri formats, a note on these. For development chains, these accounts are pre-funded and derived from a known mnemonic via ",Object(a.b)("inlineCode",{parentName:"p"},"sr25519")," crypto. Since these are known, the Keyring will use their seed (aligning with subkey) when no mnemonic is specified."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"// sr25519 keyring\nconst keyring = new Keyring({ type: 'sr25519' });\n\n// our default dev addresses with hard derivation\n// (no mnemonic, defaulted to known)\nconsole.log(keyring.createFromUri('//Alice').address);\nconsole.log(keyring.createFromUri('//Bob').address);\nconsole.log(keyring.createFromUri('//Charlie').address);\nconsole.log(keyring.createFromUri('//Dave').address);\nconsole.log(keyring.createFromUri('//Eve').address);\nconsole.log(keyring.createFromUri('//Ferdie').address);\n")),Object(a.b)("p",null,"In cases where you want to use the dev seed itself (instead of it being defaulted), it is ",Object(a.b)("inlineCode",{parentName:"p"},"bottom drive obey lake curtain smoke basket hold race lonely fit walk"),"."),Object(a.b)("h2",{id:"putting-it-together"},"Putting it together"),Object(a.b)("p",null,"With an understanding of the suri in-hand, we can now derive multiple accounts from the same seed/mnemonic using derivation paths."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"// known mnemonic, well, now it is - don't use it for funds\nconst MNEMONIC = 'sample split bamboo west visual approve brain fox arch impact relief smile';\n\n// type: ed25519\nconst keyring = new Keyring();\n\n// our ed25519 pairs\nconsole.log(keyring.createFromUri(MNEMONIC).address);\nconsole.log(keyring.createFromUri(`${MNEMONIC}//hardA//hardB`).address);\nconsole.log(keyring.createFromUri(`${MNEMONIC}//hard///password`).address);\n\n// some sr25519 pairs\nconsole.log(keyring.createFromUri(MNEMONIC, {}, { type: 'sr25519' }).address);\nconsole.log(keyring.createFromUri(`${MNEMONIC}//hard/soft`, {}, { type: 'sr25519' }).address);\n")),Object(a.b)("h2",{id:"working-with-non-mnemonics"},"Working with non-mnemonics"),Object(a.b)("p",null,"Additionally, as indicated the ",Object(a.b)("inlineCode",{parentName:"p"},"{add, create}FromUri")," functions can also take a raw mini secret. Although mnemonic interactions are generally preferred (since it had checksums and users are generally bad at generating 32-bytes by themselves), raw secrets can be applied."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"// imports we are using here\nimport { u8aToHex } from '@polkadot/util';\nimport { mnemonicGenerate, mnemonicToMiniSecret, randomAsHex } from '@polkadot/util-crypto';\n\n// generate a mnemonic & some mini-secrets\nconst mnemonic = mnemonicGenerate();\nconst mnemonicMini = mnemonicToMiniSecret(mnemonic);\nconst randomMini = randomAsHex(32);\n\n// these will be equivalent\nconsole.log(keyring.createFromUri(mnemonic).address);\nconsole.log(keyring.createFromUri(u8aToHex(mnemonicMini)).address);\n\n// a random seed with derivation applied\nconsole.log(keyring.createFromUri(`${randomMini}//hard`).address);\n")),Object(a.b)("h2",{id:"overview-done"},"Overview... done."),Object(a.b)("p",null,"At this point you should have a good grasp on the Keyring, the interactions with pairs and how this relates to Substrate usage and addresses. While the keyring has additional functionality we have covered the basic interactions in-depth. Check back in the future for expansions on the features contained here."))}l.isMDXComponent=!0},186:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return b}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=i.a.createContext({}),l=function(e){var n=i.a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=l(e.components);return i.a.createElement(d.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},u=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(t),u=r,b=p["".concat(o,".").concat(u)]||p[u]||m[u]||a;return t?i.a.createElement(b,s(s({ref:n},d),{},{components:t})):i.a.createElement(b,s({ref:n},d))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=u;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var d=2;d<a;d++)o[d]=t[d];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);