(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{104:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return j}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var b=i.a.createContext({}),p=function(e){var t=i.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),u=p(n),f=a,j=u["".concat(c,".").concat(f)]||u[f]||s[f]||r;return n?i.a.createElement(j,l(l({ref:t},b),{},{components:n})):i.a.createElement(j,l({ref:t},b))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=f;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var b=2;b<r;b++)c[b]=n[b];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},97:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return p}));var a=n(3),i=n(7),r=(n(0),n(104)),c={title:"\u5173\u952e\u5b57"},l={unversionedId:"java/\u5173\u952e\u5b57",id:"java/\u5173\u952e\u5b57",isDocsHomePage:!1,title:"\u5173\u952e\u5b57",description:"final\u3001finally\u3001finalize\u7684\u533a\u522b\uff1f",source:"@site/docs/java/\u5173\u952e\u5b57.md",slug:"/java/\u5173\u952e\u5b57",permalink:"/java/\u5173\u952e\u5b57",editUrl:"https://github.com/yashirooooo/geek-zone/edit/master/docs/java/\u5173\u952e\u5b57.md",version:"current",sidebar:"reference",previous:{title:"\u57fa\u7840\u8bed\u6cd5",permalink:"/java/\u57fa\u7840\u8bed\u6cd5"},next:{title:"\u9762\u5411\u5bf9\u8c61",permalink:"/java/\u9762\u5411\u5bf9\u8c61"}},o=[{value:"final\u3001finally\u3001finalize\u7684\u533a\u522b\uff1f",id:"final\u3001finally\u3001finalize\u7684\u533a\u522b\uff1f",children:[]},{value:"\u4e3a\u4ec0\u4e48\u8981\u7528static\u5173\u952e\u5b57\uff1f",id:"\u4e3a\u4ec0\u4e48\u8981\u7528static\u5173\u952e\u5b57\uff1f",children:[]},{value:"\u201dstatic\u201d\u5173\u952e\u5b57\u662f\u4ec0\u4e48\u610f\u601d\uff1fJava\u4e2d\u662f\u5426\u53ef\u4ee5\u8986\u76d6(override)\u4e00\u4e2aprivate\u6216\u8005\u662fstatic\u7684\u65b9\u6cd5\uff1f",id:"static\u5173\u952e\u5b57\u662f\u4ec0\u4e48\u610f\u601d\uff1fjava\u4e2d\u662f\u5426\u53ef\u4ee5\u8986\u76d6override\u4e00\u4e2aprivate\u6216\u8005\u662fstatic\u7684\u65b9\u6cd5\uff1f",children:[]},{value:"\u662f\u5426\u53ef\u4ee5\u5728static\u73af\u5883\u4e2d\u8bbf\u95ee\u975estatic\u53d8\u91cf\uff1f",id:"\u662f\u5426\u53ef\u4ee5\u5728static\u73af\u5883\u4e2d\u8bbf\u95ee\u975estatic\u53d8\u91cf\uff1f",children:[]},{value:"static\u9759\u6001\u65b9\u6cd5\u80fd\u4e0d\u80fd\u5f15\u7528\u975e\u9759\u6001\u8d44\u6e90\uff1f",id:"static\u9759\u6001\u65b9\u6cd5\u80fd\u4e0d\u80fd\u5f15\u7528\u975e\u9759\u6001\u8d44\u6e90\uff1f",children:[]},{value:"static\u9759\u6001\u65b9\u6cd5\u91cc\u9762\u80fd\u4e0d\u80fd\u5f15\u7528\u9759\u6001\u8d44\u6e90\uff1f",id:"static\u9759\u6001\u65b9\u6cd5\u91cc\u9762\u80fd\u4e0d\u80fd\u5f15\u7528\u9759\u6001\u8d44\u6e90\uff1f",children:[]},{value:"\u975e\u9759\u6001\u65b9\u6cd5\u91cc\u9762\u80fd\u4e0d\u80fd\u5f15\u7528\u9759\u6001\u8d44\u6e90\uff1f",id:"\u975e\u9759\u6001\u65b9\u6cd5\u91cc\u9762\u80fd\u4e0d\u80fd\u5f15\u7528\u9759\u6001\u8d44\u6e90\uff1f",children:[]},{value:"java\u9759\u6001\u53d8\u91cf\u3001\u4ee3\u7801\u5757\u3001\u548c\u9759\u6001\u65b9\u6cd5\u7684\u6267\u884c\u987a\u5e8f\u662f\u4ec0\u4e48\uff1f",id:"java\u9759\u6001\u53d8\u91cf\u3001\u4ee3\u7801\u5757\u3001\u548c\u9759\u6001\u65b9\u6cd5\u7684\u6267\u884c\u987a\u5e8f\u662f\u4ec0\u4e48\uff1f",children:[]}],b={toc:o};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h3",{id:"final\u3001finally\u3001finalize\u7684\u533a\u522b\uff1f"},"final\u3001finally\u3001finalize\u7684\u533a\u522b\uff1f"),Object(r.b)("p",null,"final \u7528\u4e8e\u4fee\u9970\u53d8\u91cf\u3001\u65b9\u6cd5\u548c\u7c7b\u3002"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"final \u53d8\u91cf\uff1a\u88ab\u4fee\u9970\u7684\u53d8\u91cf\u4e0d\u53ef\u53d8\uff0c\u4e0d\u53ef\u53d8\u5206\u4e3a",Object(r.b)("inlineCode",{parentName:"li"},"\u5f15\u7528\u4e0d\u53ef\u53d8"),"\u548c",Object(r.b)("inlineCode",{parentName:"li"},"\u5bf9\u8c61\u4e0d\u53ef\u53d8"),"\uff0cfinal \u6307\u7684\u662f",Object(r.b)("inlineCode",{parentName:"li"},"\u5f15\u7528\u4e0d\u53ef\u53d8"),"\uff0cfinal \u4fee\u9970\u7684\u53d8\u91cf\u5fc5\u987b\u521d\u59cb\u5316\uff0c\u901a\u5e38\u79f0\u88ab\u4fee\u9970\u7684\u53d8\u91cf\u4e3a",Object(r.b)("inlineCode",{parentName:"li"},"\u5e38\u91cf"),"\u3002"),Object(r.b)("li",{parentName:"ul"},"final \u65b9\u6cd5\uff1a\u88ab\u4fee\u9970\u7684\u65b9\u6cd5\u4e0d\u5141\u8bb8\u4efb\u4f55\u5b50\u7c7b\u91cd\u5199\uff0c\u5b50\u7c7b\u53ef\u4ee5\u4f7f\u7528\u8be5\u65b9\u6cd5\u3002"),Object(r.b)("li",{parentName:"ul"},"final \u7c7b\uff1a\u88ab\u4fee\u9970\u7684\u7c7b\u4e0d\u80fd\u88ab\u7ee7\u627f\uff0c\u6240\u6709\u65b9\u6cd5\u4e0d\u80fd\u88ab\u91cd\u5199\u3002")),Object(r.b)("p",null,"finally \u4f5c\u4e3a\u5f02\u5e38\u5904\u7406\u7684\u4e00\u90e8\u5206\uff0c\u5b83\u53ea\u80fd\u5728 ",Object(r.b)("inlineCode",{parentName:"p"},"try/catch")," \u8bed\u53e5\u4e2d\uff0c\u5e76\u4e14\u9644\u5e26\u4e00\u4e2a\u8bed\u53e5\u5757\u8868\u793a\u8fd9\u6bb5\u8bed\u53e5\u6700\u7ec8\u4e00\u5b9a\u88ab\u6267\u884c\uff08\u65e0\u8bba\u662f\u5426\u629b\u51fa\u5f02\u5e38\uff09\uff0c\u7ecf\u5e38\u88ab\u7528\u5728\u9700\u8981\u91ca\u653e\u8d44\u6e90\u7684\u60c5\u51b5\u4e0b\uff0c",Object(r.b)("inlineCode",{parentName:"p"},"System.exit (0)")," \u53ef\u4ee5\u963b\u65ad finally \u6267\u884c\u3002"),Object(r.b)("p",null,"finalize \u662f\u5728 ",Object(r.b)("inlineCode",{parentName:"p"},"java.lang.Object")," \u91cc\u5b9a\u4e49\u7684\u65b9\u6cd5\uff0c\u4e5f\u5c31\u662f\u8bf4\u6bcf\u4e00\u4e2a\u5bf9\u8c61\u90fd\u6709\u8fd9\u4e48\u4e2a\u65b9\u6cd5\uff0c\u8fd9\u4e2a\u65b9\u6cd5\u5728 ",Object(r.b)("inlineCode",{parentName:"p"},"gc")," \u542f\u52a8\uff0c\u8be5\u5bf9\u8c61\u88ab\u56de\u6536\u7684\u65f6\u5019\u88ab\u8c03\u7528\u3002"),Object(r.b)("p",null,"\u4e00\u4e2a\u5bf9\u8c61\u7684 finalize \u65b9\u6cd5\u53ea\u4f1a\u88ab\u8c03\u7528\u4e00\u6b21\uff0cfinalize \u88ab\u8c03\u7528\u4e0d\u4e00\u5b9a\u4f1a\u7acb\u5373\u56de\u6536\u8be5\u5bf9\u8c61\uff0c\u6240\u4ee5\u6709\u53ef\u80fd\u8c03\u7528 finalize \u540e\uff0c\u8be5\u5bf9\u8c61\u53c8\u4e0d\u9700\u8981\u88ab\u56de\u6536\u4e86\uff0c\u7136\u540e\u5230\u4e86\u771f\u6b63\u8981\u88ab\u56de\u6536\u7684\u65f6\u5019\uff0c\u56e0\u4e3a\u524d\u9762\u8c03\u7528\u8fc7\u4e00\u6b21\uff0c\u6240\u4ee5\u4e0d\u4f1a\u518d\u6b21\u8c03\u7528 finalize \u4e86\uff0c\u8fdb\u800c\u4ea7\u751f\u95ee\u9898\uff0c\u56e0\u6b64\u4e0d\u63a8\u8350\u4f7f\u7528 finalize \u65b9\u6cd5\u3002"),Object(r.b)("h3",{id:"\u4e3a\u4ec0\u4e48\u8981\u7528static\u5173\u952e\u5b57\uff1f"},"\u4e3a\u4ec0\u4e48\u8981\u7528static\u5173\u952e\u5b57\uff1f"),Object(r.b)("p",null," \u901a\u5e38\u6765\u8bf4\uff0c\u7528new\u521b\u5efa\u7c7b\u7684\u5bf9\u8c61\u65f6\uff0c\u6570\u636e\u5b58\u50a8\u7a7a\u95f4\u624d\u88ab\u5206\u914d\uff0c\u65b9\u6cd5\u624d\u4f9b\u5916\u754c\u8c03\u7528\u3002\u4f46\u6709\u65f6\u6211\u4eec\u53ea\u60f3\u4e3a\u7279\u5b9a\u57df\u5206\u914d\u5355\u4e00\u5b58\u50a8\u7a7a\u95f4\uff0c\u4e0d\u8003\u8651\u8981\u521b\u5efa\u591a\u5c11\u5bf9\u8c61\u6216\u8005\u8bf4\u6839\u672c\u5c31\u4e0d\u521b\u5efa\u4efb\u4f55\u5bf9\u8c61\uff0c\u518d\u5c31\u662f\u6211\u4eec\u60f3\u5728\u6ca1\u6709\u521b\u5efa\u5bf9\u8c61\u7684\u60c5\u51b5\u4e0b\u4e5f\u60f3\u8c03\u7528\u65b9\u6cd5\u3002\u5728\u8fd9\u4e24\u79cd\u60c5\u51b5\u4e0b\uff0cstatic\u5173\u952e\u5b57\uff0c\u6ee1\u8db3\u4e86\u6211\u4eec\u7684\u9700\u6c42\u3002"),Object(r.b)("h3",{id:"static\u5173\u952e\u5b57\u662f\u4ec0\u4e48\u610f\u601d\uff1fjava\u4e2d\u662f\u5426\u53ef\u4ee5\u8986\u76d6override\u4e00\u4e2aprivate\u6216\u8005\u662fstatic\u7684\u65b9\u6cd5\uff1f"},"\u201dstatic\u201d\u5173\u952e\u5b57\u662f\u4ec0\u4e48\u610f\u601d\uff1fJava\u4e2d\u662f\u5426\u53ef\u4ee5\u8986\u76d6(override)\u4e00\u4e2aprivate\u6216\u8005\u662fstatic\u7684\u65b9\u6cd5\uff1f"),Object(r.b)("p",null,"\u201cstatic\u201d\u5173\u952e\u5b57\u8868\u660e\u4e00\u4e2a\u6210\u5458\u53d8\u91cf\u6216\u8005\u662f\u6210\u5458\u65b9\u6cd5\u53ef\u4ee5\u5728\u6ca1\u6709\u6240\u5c5e\u7684\u7c7b\u7684\u5b9e\u4f8b\u53d8\u91cf\u7684\u60c5\u51b5\u4e0b\u88ab\u8bbf\u95ee\u3002"),Object(r.b)("p",null,"Java\u4e2dstatic\u65b9\u6cd5\u4e0d\u80fd\u88ab\u8986\u76d6\uff0c\u56e0\u4e3a\u65b9\u6cd5\u8986\u76d6\u662f\u57fa\u4e8e\u8fd0\u884c\u65f6\u52a8\u6001\u7ed1\u5b9a\u7684\uff0c\u800cstatic\u65b9\u6cd5\u662f\u7f16\u8bd1\u65f6\u9759\u6001\u7ed1\u5b9a\u7684\u3002static\u65b9\u6cd5\u8ddf\u7c7b\u7684\u4efb\u4f55\u5b9e\u4f8b\u90fd\u4e0d\u76f8\u5173\uff0c\u6240\u4ee5\u6982\u5ff5\u4e0a\u4e0d\u9002\u7528\u3002"),Object(r.b)("h3",{id:"\u662f\u5426\u53ef\u4ee5\u5728static\u73af\u5883\u4e2d\u8bbf\u95ee\u975estatic\u53d8\u91cf\uff1f"},"\u662f\u5426\u53ef\u4ee5\u5728static\u73af\u5883\u4e2d\u8bbf\u95ee\u975estatic\u53d8\u91cf\uff1f"),Object(r.b)("p",null,"static\u53d8\u91cf\u5728Java\u4e2d\u662f\u5c5e\u4e8e\u7c7b\u7684\uff0c\u5b83\u5728\u6240\u6709\u7684\u5b9e\u4f8b\u4e2d\u7684\u503c\u662f\u4e00\u6837\u7684\u3002\u5f53\u7c7b\u88abJava\u865a\u62df\u673a\u8f7d\u5165\u7684\u65f6\u5019\uff0c\u4f1a\u5bf9static\u53d8\u91cf\u8fdb\u884c\u521d\u59cb\u5316\u3002\u5982\u679c\u4f60\u7684\u4ee3\u7801\u5c1d\u8bd5\u4e0d\u7528\u5b9e\u4f8b\u6765\u8bbf\u95ee\u975estatic\u7684\u53d8\u91cf\uff0c\u7f16\u8bd1\u5668\u4f1a\u62a5\u9519\uff0c\u56e0\u4e3a\u8fd9\u4e9b\u53d8\u91cf\u8fd8\u6ca1\u6709\u88ab\u521b\u5efa\u51fa\u6765\uff0c\u8fd8\u6ca1\u6709\u8ddf\u4efb\u4f55\u5b9e\u4f8b\u5173\u8054\u4e0a\u3002"),Object(r.b)("h3",{id:"static\u9759\u6001\u65b9\u6cd5\u80fd\u4e0d\u80fd\u5f15\u7528\u975e\u9759\u6001\u8d44\u6e90\uff1f"},"static\u9759\u6001\u65b9\u6cd5\u80fd\u4e0d\u80fd\u5f15\u7528\u975e\u9759\u6001\u8d44\u6e90\uff1f"),Object(r.b)("p",null,"\u4e0d\u80fd\uff0cnew\u7684\u65f6\u5019\u624d\u4f1a\u4ea7\u751f\u7684\u4e1c\u897f\uff0c\u5bf9\u4e8e\u521d\u59cb\u5316\u540e\u5c31\u5b58\u5728\u7684\u9759\u6001\u8d44\u6e90\u6765\u8bf4\uff0c\u6839\u672c\u4e0d\u8ba4\u8bc6\u5b83\u3002"),Object(r.b)("h3",{id:"static\u9759\u6001\u65b9\u6cd5\u91cc\u9762\u80fd\u4e0d\u80fd\u5f15\u7528\u9759\u6001\u8d44\u6e90\uff1f"},"static\u9759\u6001\u65b9\u6cd5\u91cc\u9762\u80fd\u4e0d\u80fd\u5f15\u7528\u9759\u6001\u8d44\u6e90\uff1f"),Object(r.b)("p",null,"\u53ef\u4ee5\uff0c\u56e0\u4e3a\u90fd\u662f\u7c7b\u521d\u59cb\u5316\u7684\u65f6\u5019\u52a0\u8f7d\u7684\uff0c\u5927\u5bb6\u76f8\u4e92\u90fd\u8ba4\u8bc6\u3002"),Object(r.b)("h3",{id:"\u975e\u9759\u6001\u65b9\u6cd5\u91cc\u9762\u80fd\u4e0d\u80fd\u5f15\u7528\u9759\u6001\u8d44\u6e90\uff1f"},"\u975e\u9759\u6001\u65b9\u6cd5\u91cc\u9762\u80fd\u4e0d\u80fd\u5f15\u7528\u9759\u6001\u8d44\u6e90\uff1f"),Object(r.b)("p",null,"\u53ef\u4ee5\uff0c\u975e\u9759\u6001\u65b9\u6cd5\u5c31\u662f\u5b9e\u4f8b\u65b9\u6cd5\uff0c\u90a3\u662fnew\u4e4b\u540e\u624d\u4ea7\u751f\u7684\uff0c\u90a3\u4e48\u5c5e\u4e8e\u7c7b\u7684\u5185\u5bb9\u5b83\u90fd\u8ba4\u8bc6\u3002"),Object(r.b)("h3",{id:"java\u9759\u6001\u53d8\u91cf\u3001\u4ee3\u7801\u5757\u3001\u548c\u9759\u6001\u65b9\u6cd5\u7684\u6267\u884c\u987a\u5e8f\u662f\u4ec0\u4e48\uff1f"},"java\u9759\u6001\u53d8\u91cf\u3001\u4ee3\u7801\u5757\u3001\u548c\u9759\u6001\u65b9\u6cd5\u7684\u6267\u884c\u987a\u5e8f\u662f\u4ec0\u4e48\uff1f"),Object(r.b)("p",null,"\u57fa\u672c\u4e0a\u4ee3\u7801\u5757\u5206\u4e3a\u4e09\u79cd\uff1aStatic\u9759\u6001\u4ee3\u7801\u5757\u3001\u6784\u9020\u4ee3\u7801\u5757\u3001\u666e\u901a\u4ee3\u7801\u5757"),Object(r.b)("p",null,"\u4ee3\u7801\u5757\u6267\u884c\u987a\u5e8f",Object(r.b)("strong",{parentName:"p"},"\u9759\u6001\u4ee3\u7801\u5757\u2014\u2014> \u6784\u9020\u4ee3\u7801\u5757 \u2014\u2014> \u6784\u9020\u51fd\u6570\u2014\u2014> \u666e\u901a\u4ee3\u7801\u5757"),"\u2003"),Object(r.b)("p",null,"\u7ee7\u627f\u4e2d\u4ee3\u7801\u5757\u6267\u884c\u987a\u5e8f\uff1a",Object(r.b)("strong",{parentName:"p"},"\u7236\u7c7b\u9759\u6001\u5757\u2014\u2014>\u5b50\u7c7b\u9759\u6001\u5757\u2014\u2014>\u7236\u7c7b\u4ee3\u7801\u5757\u2014\u2014>\u7236\u7c7b\u6784\u9020\u5668\u2014\u2014>\u5b50\u7c7b\u4ee3\u7801\u5757\u2014\u2014>\u5b50\u7c7b\u6784\u9020\u5668")),Object(r.b)("p",null,"\u60f3\u8981\u6df1\u5165\u4e86\u89e3\uff0c\u53ef\u4ee5\u53c2\u8003\u8fd9\u7bc7\u6587\u7ae0 \uff1a",Object(r.b)("a",{parentName:"p",href:"https://juejin.cn/post/6844903986475040781"},"https://juejin.cn/post/6844903986475040781")))}p.isMDXComponent=!0}}]);