(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return i}));var r=n(3),b=n(7),a=(n(0),n(108)),c={title:"\u8fdb\u7a0b\u901a\u4fe1\u7684\u51e0\u79cd\u65b9\u5f0f"},l={unversionedId:"java\u5e76\u53d1/\u8fdb\u7a0b\u901a\u4fe1\u7684\u51e0\u79cd\u65b9\u5f0f",id:"java\u5e76\u53d1/\u8fdb\u7a0b\u901a\u4fe1\u7684\u51e0\u79cd\u65b9\u5f0f",isDocsHomePage:!1,title:"\u8fdb\u7a0b\u901a\u4fe1\u7684\u51e0\u79cd\u65b9\u5f0f",description:"\u7ba1\u9053",source:"@site/docs/java\u5e76\u53d1/\u8fdb\u7a0b\u901a\u4fe1\u7684\u51e0\u79cd\u65b9\u5f0f.md",slug:"/java\u5e76\u53d1/\u8fdb\u7a0b\u901a\u4fe1\u7684\u51e0\u79cd\u65b9\u5f0f",permalink:"/java\u5e76\u53d1/\u8fdb\u7a0b\u901a\u4fe1\u7684\u51e0\u79cd\u65b9\u5f0f",editUrl:"https://github.com/yashirooooo/geek-zone/edit/master/docs/java\u5e76\u53d1/\u8fdb\u7a0b\u901a\u4fe1\u7684\u51e0\u79cd\u65b9\u5f0f.md",version:"current",sidebar:"reference",previous:{title:"\u7ebf\u7a0b\u6c60\u6838\u5fc3\u8bbe\u8ba1\u4e0e\u5b9e\u73b0",permalink:"/java\u5e76\u53d1/\u7ebf\u7a0b\u6c60\u6838\u5fc3\u8bbe\u8ba1\u4e0e\u5b9e\u73b0"},next:{title:"AQS",permalink:"/java\u5e76\u53d1/AQS"}},p=[{value:"\u7ba1\u9053",id:"\u7ba1\u9053",children:[]},{value:"\u6d88\u606f\u961f\u5217",id:"\u6d88\u606f\u961f\u5217",children:[]},{value:"\u5171\u4eab\u5185\u5b58",id:"\u5171\u4eab\u5185\u5b58",children:[]},{value:"\u4fe1\u53f7\u91cf",id:"\u4fe1\u53f7\u91cf",children:[]},{value:"\u4fe1\u53f7",id:"\u4fe1\u53f7",children:[]},{value:"socket",id:"socket",children:[]},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",children:[]},{value:"1. \u7b49\u5f85\u901a\u77e5\u673a\u5236",id:"1-\u7b49\u5f85\u901a\u77e5\u673a\u5236",children:[]},{value:"2. join() \u65b9\u6cd5",id:"2-join-\u65b9\u6cd5",children:[]},{value:"3. volatile \u5171\u4eab\u5185\u5b58",id:"3-volatile-\u5171\u4eab\u5185\u5b58",children:[{value:"4. \u7ba1\u9053\u901a\u4fe1",id:"4-\u7ba1\u9053\u901a\u4fe1",children:[]}]},{value:"5. \u5e76\u53d1\u5de5\u5177",id:"5-\u5e76\u53d1\u5de5\u5177",children:[]},{value:"\u53c2\u8003",id:"\u53c2\u8003",children:[]}],o={toc:p};function i(e){var t=e.components,n=Object(b.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"\u7ba1\u9053"},"\u7ba1\u9053"),Object(a.b)("p",null,"\u53ef\u4ee5\u770b\u51fa",Object(a.b)("strong",{parentName:"p"},"\u7ba1\u9053\u4f20\u8f93\u6570\u636e\u662f\u5355\u5411\u7684"),"\uff0c\u5982\u679c\u60f3\u76f8\u4e92\u901a\u4fe1\uff0c\u6211\u4eec\u9700\u8981\u521b\u5efa\u4e24\u4e2a\u7ba1\u9053\u624d\u884c\u3002"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"\u7ba1\u9053\u8fd9\u79cd\u901a\u4fe1\u65b9\u5f0f\u6548\u7387\u4f4e\uff0c\u4e0d\u9002\u5408\u8fdb\u7a0b\u95f4\u9891\u7e41\u5730\u4ea4\u6362\u6570\u636e")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"\u6240\u8c13\u7684\u7ba1\u9053\uff0c\u5c31\u662f\u5185\u6838\u91cc\u9762\u7684\u4e00\u4e32\u7f13\u5b58"),"\u3002\u4ece\u7ba1\u9053\u7684\u4e00\u6bb5\u5199\u5165\u7684\u6570\u636e\uff0c\u5b9e\u9645\u4e0a\u662f\u7f13\u5b58\u5728\u5185\u6838\u4e2d\u7684\uff0c\u53e6\u4e00\u7aef\u8bfb\u53d6\uff0c\u4e5f\u5c31\u662f\u4ece\u5185\u6838\u4e2d\u8bfb\u53d6\u8fd9\u6bb5\u6570\u636e\u3002\u53e6\u5916\uff0c\u7ba1\u9053\u4f20\u8f93\u7684\u6570\u636e\u662f\u65e0\u683c\u5f0f\u7684\u6d41\u4e14\u5927\u5c0f\u53d7\u9650\u3002"),Object(a.b)("h2",{id:"\u6d88\u606f\u961f\u5217"},"\u6d88\u606f\u961f\u5217"),Object(a.b)("p",null,"\u6bd4\u5982\uff0cA \u8fdb\u7a0b\u8981\u7ed9 B \u8fdb\u7a0b\u53d1\u9001\u6d88\u606f\uff0cA \u8fdb\u7a0b\u628a\u6570\u636e\u653e\u5728\u5bf9\u5e94\u7684\u6d88\u606f\u961f\u5217\u540e\u5c31\u53ef\u4ee5\u6b63\u5e38\u8fd4\u56de\u4e86\uff0cB \u8fdb\u7a0b\u9700\u8981\u7684\u65f6\u5019\u518d\u53bb\u8bfb\u53d6\u6570\u636e\u5c31\u53ef\u4ee5\u4e86\u3002\u540c\u7406\uff0cB \u8fdb\u7a0b\u8981\u7ed9 A \u8fdb\u7a0b\u53d1\u9001\u6d88\u606f\u4e5f\u662f\u5982\u6b64\u3002"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"\u6d88\u606f\u961f\u5217\u662f\u4fdd\u5b58\u5728\u5185\u6838\u4e2d\u7684\u6d88\u606f\u94fe\u8868"),"\uff0c\u5728\u53d1\u9001\u6570\u636e\u65f6\uff0c\u4f1a\u5206\u6210\u4e00\u4e2a\u4e00\u4e2a\u72ec\u7acb\u7684\u6570\u636e\u5355\u5143\uff0c\u4e5f\u5c31\u662f\u6d88\u606f\u4f53\uff08\u6570\u636e\u5757\uff09\uff0c\u6d88\u606f\u4f53\u662f\u7528\u6237\u81ea\u5b9a\u4e49\u7684\u6570\u636e\u7c7b\u578b\uff0c\u6d88\u606f\u7684\u53d1\u9001\u65b9\u548c\u63a5\u6536\u65b9\u8981\u7ea6\u5b9a\u597d\u6d88\u606f\u4f53\u7684\u6570\u636e\u7c7b\u578b\uff0c\u6240\u4ee5\u6bcf\u4e2a\u6d88\u606f\u4f53\u90fd\u662f\u56fa\u5b9a\u5927\u5c0f\u7684\u5b58\u50a8\u5757\uff0c\u4e0d\u50cf\u7ba1\u9053\u662f\u65e0\u683c\u5f0f\u7684\u5b57\u8282\u6d41\u6570\u636e\u3002\u5982\u679c\u8fdb\u7a0b\u4ece\u6d88\u606f\u961f\u5217\u4e2d\u8bfb\u53d6\u4e86\u6d88\u606f\u4f53\uff0c\u5185\u6838\u5c31\u4f1a\u628a\u8fd9\u4e2a\u6d88\u606f\u4f53\u5220\u9664\u3002"),Object(a.b)("p",null,"\u6d88\u606f\u961f\u5217\u751f\u547d\u5468\u671f\u968f\u5185\u6838\uff0c\u5982\u679c\u6ca1\u6709\u91ca\u653e\u6d88\u606f\u961f\u5217\u6216\u8005\u6ca1\u6709\u5173\u95ed\u64cd\u4f5c\u7cfb\u7edf\uff0c\u6d88\u606f\u961f\u5217\u4f1a\u4e00\u76f4\u5b58\u5728\uff0c\u800c\u524d\u9762\u63d0\u5230\u7684\u533f\u540d\u7ba1\u9053\u7684\u751f\u547d\u5468\u671f\uff0c\u662f\u968f\u8fdb\u7a0b\u7684\u521b\u5efa\u800c\u5efa\u7acb\uff0c\u968f\u8fdb\u7a0b\u7684\u7ed3\u675f\u800c\u9500\u6bc1\u3002"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"\u6d88\u606f\u961f\u5217\u4e0d\u9002\u5408\u6bd4\u8f83\u5927\u6570\u636e\u7684\u4f20\u8f93"),"\uff0c\u56e0\u4e3a\u5728\u5185\u6838\u4e2d\u6bcf\u4e2a\u6d88\u606f\u4f53\u90fd\u6709\u4e00\u4e2a\u6700\u5927\u957f\u5ea6\u7684\u9650\u5236\uff0c\u540c\u65f6\u6240\u6709\u961f\u5217\u6240\u5305\u542b\u7684\u5168\u90e8\u6d88\u606f\u4f53\u7684\u603b\u957f\u5ea6\u4e5f\u662f\u6709\u4e0a\u9650\u3002\u5728 Linux \u5185\u6838\u4e2d\uff0c\u4f1a\u6709\u4e24\u4e2a\u5b8f\u5b9a\u4e49 ",Object(a.b)("inlineCode",{parentName:"p"},"MSGMAX")," \u548c ",Object(a.b)("inlineCode",{parentName:"p"},"MSGMNB"),"\uff0c\u5b83\u4eec\u4ee5\u5b57\u8282\u4e3a\u5355\u4f4d\uff0c\u5206\u522b\u5b9a\u4e49\u4e86\u4e00\u6761\u6d88\u606f\u7684\u6700\u5927\u957f\u5ea6\u548c\u4e00\u4e2a\u961f\u5217\u7684\u6700\u5927\u957f\u5ea6\u3002"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"\u6d88\u606f\u961f\u5217\u901a\u4fe1\u8fc7\u7a0b\u4e2d\uff0c\u5b58\u5728\u7528\u6237\u6001\u4e0e\u5185\u6838\u6001\u4e4b\u95f4\u7684\u6570\u636e\u62f7\u8d1d\u5f00\u9500"),"\uff0c\u56e0\u4e3a\u8fdb\u7a0b\u5199\u5165\u6570\u636e\u5230\u5185\u6838\u4e2d\u7684\u6d88\u606f\u961f\u5217\u65f6\uff0c\u4f1a\u53d1\u751f\u4ece\u7528\u6237\u6001\u62f7\u8d1d\u6570\u636e\u5230\u5185\u6838\u6001\u7684\u8fc7\u7a0b\uff0c\u540c\u7406\u53e6\u4e00\u8fdb\u7a0b\u8bfb\u53d6\u5185\u6838\u4e2d\u7684\u6d88\u606f\u6570\u636e\u65f6\uff0c\u4f1a\u53d1\u751f\u4ece\u5185\u6838\u6001\u62f7\u8d1d\u6570\u636e\u5230\u7528\u6237\u6001\u7684\u8fc7\u7a0b\u3002"),Object(a.b)("h2",{id:"\u5171\u4eab\u5185\u5b58"},"\u5171\u4eab\u5185\u5b58"),Object(a.b)("p",null,"\u6d88\u606f\u961f\u5217\u7684\u8bfb\u53d6\u548c\u5199\u5165\u7684\u8fc7\u7a0b\uff0c\u90fd\u4f1a\u6709\u53d1\u751f\u7528\u6237\u6001\u4e0e\u5185\u6838\u6001\u4e4b\u95f4\u7684\u6d88\u606f\u62f7\u8d1d\u8fc7\u7a0b\u3002\u90a3",Object(a.b)("strong",{parentName:"p"},"\u5171\u4eab\u5185\u5b58"),"\u7684\u65b9\u5f0f\uff0c\u5c31\u5f88\u597d\u7684\u89e3\u51b3\u4e86\u8fd9\u4e00\u95ee\u9898\u3002"),Object(a.b)("p",null,"\u73b0\u4ee3\u64cd\u4f5c\u7cfb\u7edf\uff0c\u5bf9\u4e8e\u5185\u5b58\u7ba1\u7406\uff0c\u91c7\u7528\u7684\u662f\u865a\u62df\u5185\u5b58\u6280\u672f\uff0c\u4e5f\u5c31\u662f\u6bcf\u4e2a\u8fdb\u7a0b\u90fd\u6709\u81ea\u5df1\u72ec\u7acb\u7684\u865a\u62df\u5185\u5b58\u7a7a\u95f4\uff0c\u4e0d\u540c\u8fdb\u7a0b\u7684\u865a\u62df\u5185\u5b58\u6620\u5c04\u5230\u4e0d\u540c\u7684\u7269\u7406\u5185\u5b58\u4e2d\u3002\u6240\u4ee5\uff0c\u5373\u4f7f\u8fdb\u7a0b A \u548c \u8fdb\u7a0b B \u7684\u865a\u62df\u5730\u5740\u662f\u4e00\u6837\u7684\uff0c\u5176\u5b9e\u8bbf\u95ee\u7684\u662f\u4e0d\u540c\u7684\u7269\u7406\u5185\u5b58\u5730\u5740\uff0c\u5bf9\u4e8e\u6570\u636e\u7684\u589e\u5220\u67e5\u6539\u4e92\u4e0d\u5f71\u54cd\u3002"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"\u5171\u4eab\u5185\u5b58\u7684\u673a\u5236\uff0c\u5c31\u662f\u62ff\u51fa\u4e00\u5757\u865a\u62df\u5730\u5740\u7a7a\u95f4\u6765\uff0c\u6620\u5c04\u5230\u76f8\u540c\u7684\u7269\u7406\u5185\u5b58\u4e2d"),"\u3002\u8fd9\u6837\u8fd9\u4e2a\u8fdb\u7a0b\u5199\u5165\u7684\u4e1c\u897f\uff0c\u53e6\u5916\u4e00\u4e2a\u8fdb\u7a0b\u9a6c\u4e0a\u5c31\u80fd\u770b\u5230\u4e86\uff0c\u90fd\u4e0d\u9700\u8981\u62f7\u8d1d\u6765\u62f7\u8d1d\u53bb\uff0c\u4f20\u6765\u4f20\u53bb\uff0c\u5927\u5927\u63d0\u9ad8\u4e86\u8fdb\u7a0b\u95f4\u901a\u4fe1\u7684\u901f\u5ea6\u3002"),Object(a.b)("h2",{id:"\u4fe1\u53f7\u91cf"},"\u4fe1\u53f7\u91cf"),Object(a.b)("p",null,"\u7528\u4e86\u5171\u4eab\u5185\u5b58\u901a\u4fe1\u65b9\u5f0f\uff0c\u5e26\u6765\u65b0\u7684\u95ee\u9898\uff0c\u90a3\u5c31\u662f\u5982\u679c\u591a\u4e2a\u8fdb\u7a0b\u540c\u65f6\u4fee\u6539\u540c\u4e00\u4e2a\u5171\u4eab\u5185\u5b58\uff0c\u5f88\u6709\u53ef\u80fd\u5c31\u51b2\u7a81\u4e86\u3002\u4f8b\u5982\u4e24\u4e2a\u8fdb\u7a0b\u90fd\u540c\u65f6\u5199\u4e00\u4e2a\u5730\u5740\uff0c\u90a3\u5148\u5199\u7684\u90a3\u4e2a\u8fdb\u7a0b\u4f1a\u53d1\u73b0\u5185\u5bb9\u88ab\u522b\u4eba\u8986\u76d6\u4e86\u3002"),Object(a.b)("p",null,"\u4e3a\u4e86\u9632\u6b62\u591a\u8fdb\u7a0b\u7ade\u4e89\u5171\u4eab\u8d44\u6e90\uff0c\u800c\u9020\u6210\u7684\u6570\u636e\u9519\u4e71\uff0c\u6240\u4ee5\u9700\u8981\u4fdd\u62a4\u673a\u5236\uff0c\u4f7f\u5f97\u5171\u4eab\u7684\u8d44\u6e90\uff0c\u5728\u4efb\u610f\u65f6\u523b\u53ea\u80fd\u88ab\u4e00\u4e2a\u8fdb\u7a0b\u8bbf\u95ee\u3002\u6b63\u597d\uff0c",Object(a.b)("strong",{parentName:"p"},"\u4fe1\u53f7\u91cf"),"\u5c31\u5b9e\u73b0\u4e86\u8fd9\u4e00\u4fdd\u62a4\u673a\u5236\u3002"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"\u4fe1\u53f7\u91cf\u5176\u5b9e\u662f\u4e00\u4e2a\u6574\u578b\u7684\u8ba1\u6570\u5668\uff0c\u4e3b\u8981\u7528\u4e8e\u5b9e\u73b0\u8fdb\u7a0b\u95f4\u7684\u4e92\u65a5\u4e0e\u540c\u6b65\uff0c\u800c\u4e0d\u662f\u7528\u4e8e\u7f13\u5b58\u8fdb\u7a0b\u95f4\u901a\u4fe1\u7684\u6570\u636e"),"\u3002"),Object(a.b)("p",null,"\u4fe1\u53f7\u91cf\u8868\u793a\u8d44\u6e90\u7684\u6570\u91cf\uff0c\u63a7\u5236\u4fe1\u53f7\u91cf\u7684\u65b9\u5f0f\u6709\u4e24\u79cd\u539f\u5b50\u64cd\u4f5c\uff1a"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u4e00\u4e2a\u662f ",Object(a.b)("strong",{parentName:"li"},"P \u64cd\u4f5c"),"\uff0c\u8fd9\u4e2a\u64cd\u4f5c\u4f1a\u628a\u4fe1\u53f7\u91cf\u51cf\u53bb -1\uff0c\u76f8\u51cf\u540e\u5982\u679c\u4fe1\u53f7\u91cf < 0\uff0c\u5219\u8868\u660e\u8d44\u6e90\u5df2\u88ab\u5360\u7528\uff0c\u8fdb\u7a0b\u9700\u963b\u585e\u7b49\u5f85\uff1b\u76f8\u51cf\u540e\u5982\u679c\u4fe1\u53f7\u91cf >= 0\uff0c\u5219\u8868\u660e\u8fd8\u6709\u8d44\u6e90\u53ef\u4f7f\u7528\uff0c\u8fdb\u7a0b\u53ef\u6b63\u5e38\u7ee7\u7eed\u6267\u884c\u3002"),Object(a.b)("li",{parentName:"ul"},"\u53e6\u4e00\u4e2a\u662f ",Object(a.b)("strong",{parentName:"li"},"V \u64cd\u4f5c"),"\uff0c\u8fd9\u4e2a\u64cd\u4f5c\u4f1a\u628a\u4fe1\u53f7\u91cf\u52a0\u4e0a 1\uff0c\u76f8\u52a0\u540e\u5982\u679c\u4fe1\u53f7\u91cf <= 0\uff0c\u5219\u8868\u660e\u5f53\u524d\u6709\u963b\u585e\u4e2d\u7684\u8fdb\u7a0b\uff0c\u4e8e\u662f\u4f1a\u5c06\u8be5\u8fdb\u7a0b\u5524\u9192\u8fd0\u884c\uff1b\u76f8\u52a0\u540e\u5982\u679c\u4fe1\u53f7\u91cf > 0\uff0c\u5219\u8868\u660e\u5f53\u524d\u6ca1\u6709\u963b\u585e\u4e2d\u7684\u8fdb\u7a0b\uff1b")),Object(a.b)("h2",{id:"\u4fe1\u53f7"},"\u4fe1\u53f7"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"\u5bf9\u4e8e\u5f02\u5e38\u60c5\u51b5\u4e0b\u7684\u5de5\u4f5c\u6a21\u5f0f\uff0c\u5c31\u9700\u8981\u7528\u300c\u4fe1\u53f7\u300d\u7684\u65b9\u5f0f\u6765\u901a\u77e5\u8fdb\u7a0b\u3002")),Object(a.b)("p",null,"\u4fe1\u53f7\u8ddf\u4fe1\u53f7\u91cf\u867d\u7136\u540d\u5b57\u76f8\u4f3c\u5ea6 66.66%\uff0c\u4f46\u4e24\u8005\u7528\u9014\u5b8c\u5168\u4e0d\u4e00\u6837"),Object(a.b)("p",null,"\u8fd0\u884c\u5728 shell \u7ec8\u7aef\u7684\u8fdb\u7a0b\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u952e\u76d8\u8f93\u5165\u67d0\u4e9b\u7ec4\u5408\u952e\u7684\u65f6\u5019\uff0c\u7ed9\u8fdb\u7a0b\u53d1\u9001\u4fe1\u53f7\u3002\u4f8b\u5982"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Ctrl+C \u4ea7\u751f ",Object(a.b)("inlineCode",{parentName:"li"},"SIGINT")," \u4fe1\u53f7\uff0c\u8868\u793a\u7ec8\u6b62\u8be5\u8fdb\u7a0b\uff1b"),Object(a.b)("li",{parentName:"ul"},"Ctrl+Z \u4ea7\u751f ",Object(a.b)("inlineCode",{parentName:"li"},"SIGTSTP")," \u4fe1\u53f7\uff0c\u8868\u793a\u505c\u6b62\u8be5\u8fdb\u7a0b\uff0c\u4f46\u8fd8\u672a\u7ed3\u675f\uff1b")),Object(a.b)("p",null,"\u4fe1\u53f7\u662f\u8fdb\u7a0b\u95f4\u901a\u4fe1\u673a\u5236\u4e2d",Object(a.b)("strong",{parentName:"p"},"\u552f\u4e00\u7684\u5f02\u6b65\u901a\u4fe1\u673a\u5236"),"\uff0c\u56e0\u4e3a\u53ef\u4ee5\u5728\u4efb\u4f55\u65f6\u5019\u53d1\u9001\u4fe1\u53f7\u7ed9\u67d0\u4e00\u8fdb\u7a0b\uff0c\u4e00\u65e6\u6709\u4fe1\u53f7\u4ea7\u751f\uff0c\u6211\u4eec\u5c31\u6709\u4e0b\u9762\u8fd9\u51e0\u79cd\uff0c\u7528\u6237\u8fdb\u7a0b\u5bf9\u4fe1\u53f7\u7684\u5904\u7406\u65b9\u5f0f\u3002"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"1.\u6267\u884c\u9ed8\u8ba4\u64cd\u4f5c"),"\u3002Linux \u5bf9\u6bcf\u79cd\u4fe1\u53f7\u90fd\u89c4\u5b9a\u4e86\u9ed8\u8ba4\u64cd\u4f5c\uff0c\u4f8b\u5982\uff0c\u4e0a\u9762\u5217\u8868\u4e2d\u7684 SIGTERM \u4fe1\u53f7\uff0c\u5c31\u662f\u7ec8\u6b62\u8fdb\u7a0b\u7684\u610f\u601d\u3002Core \u7684\u610f\u601d\u662f Core Dump\uff0c\u4e5f\u5373\u7ec8\u6b62\u8fdb\u7a0b\u540e\uff0c\u901a\u8fc7 Core Dump \u5c06\u5f53\u524d\u8fdb\u7a0b\u7684\u8fd0\u884c\u72b6\u6001\u4fdd\u5b58\u5728\u6587\u4ef6\u91cc\u9762\uff0c\u65b9\u4fbf\u7a0b\u5e8f\u5458\u4e8b\u540e\u8fdb\u884c\u5206\u6790\u95ee\u9898\u5728\u54ea\u91cc\u3002"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"2.\u6355\u6349\u4fe1\u53f7"),"\u3002\u6211\u4eec\u53ef\u4ee5\u4e3a\u4fe1\u53f7\u5b9a\u4e49\u4e00\u4e2a\u4fe1\u53f7\u5904\u7406\u51fd\u6570\u3002\u5f53\u4fe1\u53f7\u53d1\u751f\u65f6\uff0c\u6211\u4eec\u5c31\u6267\u884c\u76f8\u5e94\u7684\u4fe1\u53f7\u5904\u7406\u51fd\u6570\u3002"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"3.\u5ffd\u7565\u4fe1\u53f7"),"\u3002\u5f53\u6211\u4eec\u4e0d\u5e0c\u671b\u5904\u7406\u67d0\u4e9b\u4fe1\u53f7\u7684\u65f6\u5019\uff0c\u5c31\u53ef\u4ee5\u5ffd\u7565\u8be5\u4fe1\u53f7\uff0c\u4e0d\u505a\u4efb\u4f55\u5904\u7406\u3002\u6709\u4e24\u4e2a\u4fe1\u53f7\u662f\u5e94\u7528\u8fdb\u7a0b\u65e0\u6cd5\u6355\u6349\u548c\u5ffd\u7565\u7684\uff0c\u5373 ",Object(a.b)("inlineCode",{parentName:"p"},"SIGKILL")," \u548c ",Object(a.b)("inlineCode",{parentName:"p"},"SEGSTOP"),"\uff0c\u5b83\u4eec\u7528\u4e8e\u5728\u4efb\u4f55\u65f6\u5019\u4e2d\u65ad\u6216\u7ed3\u675f\u67d0\u4e00\u8fdb\u7a0b\u3002"),Object(a.b)("h2",{id:"socket"},"socket"),Object(a.b)("p",null,"\u524d\u9762\u63d0\u5230\u7684\u7ba1\u9053\u3001\u6d88\u606f\u961f\u5217\u3001\u5171\u4eab\u5185\u5b58\u3001\u4fe1\u53f7\u91cf\u548c\u4fe1\u53f7\u90fd\u662f\u5728\u540c\u4e00\u53f0\u4e3b\u673a\u4e0a\u8fdb\u884c\u8fdb\u7a0b\u95f4\u901a\u4fe1\uff0c\u90a3\u8981\u60f3",Object(a.b)("strong",{parentName:"p"},"\u8de8\u7f51\u7edc\u4e0e\u4e0d\u540c\u4e3b\u673a\u4e0a\u7684\u8fdb\u7a0b\u4e4b\u95f4\u901a\u4fe1\uff0c\u5c31\u9700\u8981 Socket \u901a\u4fe1\u4e86\u3002")),Object(a.b)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),Object(a.b)("p",null,"\u7531\u4e8e\u6bcf\u4e2a\u8fdb\u7a0b\u7684\u7528\u6237\u7a7a\u95f4\u90fd\u662f\u72ec\u7acb\u7684\uff0c\u4e0d\u80fd\u76f8\u4e92\u8bbf\u95ee\uff0c\u8fd9\u65f6\u5c31\u9700\u8981\u501f\u52a9\u5185\u6838\u7a7a\u95f4\u6765\u5b9e\u73b0\u8fdb\u7a0b\u95f4\u901a\u4fe1\uff0c\u539f\u56e0\u5f88\u7b80\u5355\uff0c\u6bcf\u4e2a\u8fdb\u7a0b\u90fd\u662f\u5171\u4eab\u4e00\u4e2a\u5185\u6838\u7a7a\u95f4\u3002"),Object(a.b)("p",null,"Linux \u5185\u6838\u63d0\u4f9b\u4e86\u4e0d\u5c11\u8fdb\u7a0b\u95f4\u901a\u4fe1\u7684\u65b9\u5f0f\uff0c\u5176\u4e2d\u6700\u7b80\u5355\u7684\u65b9\u5f0f\u5c31\u662f\u7ba1\u9053\uff0c\u7ba1\u9053\u5206\u4e3a\u300c\u533f\u540d\u7ba1\u9053\u300d\u548c\u300c\u547d\u540d\u7ba1\u9053\u300d\u3002"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"\u533f\u540d\u7ba1\u9053"),"\u987e\u540d\u601d\u4e49\uff0c\u5b83\u6ca1\u6709\u540d\u5b57\u6807\u8bc6\uff0c\u533f\u540d\u7ba1\u9053\u662f\u7279\u6b8a\u6587\u4ef6\u53ea\u5b58\u5728\u4e8e\u5185\u5b58\uff0c\u6ca1\u6709\u5b58\u5728\u4e8e\u6587\u4ef6\u7cfb\u7edf\u4e2d\uff0cshell \u547d\u4ee4\u4e2d\u7684\u300c",Object(a.b)("inlineCode",{parentName:"p"},"|"),"\u300d\u7ad6\u7ebf\u5c31\u662f\u533f\u540d\u7ba1\u9053\uff0c\u901a\u4fe1\u7684\u6570\u636e\u662f",Object(a.b)("strong",{parentName:"p"},"\u65e0\u683c\u5f0f\u7684\u6d41\u5e76\u4e14\u5927\u5c0f\u53d7\u9650"),"\uff0c\u901a\u4fe1\u7684\u65b9\u5f0f\u662f",Object(a.b)("strong",{parentName:"p"},"\u5355\u5411"),"\u7684\uff0c\u6570\u636e\u53ea\u80fd\u5728\u4e00\u4e2a\u65b9\u5411\u4e0a\u6d41\u52a8\uff0c\u5982\u679c\u8981\u53cc\u5411\u901a\u4fe1\uff0c\u9700\u8981\u521b\u5efa\u4e24\u4e2a\u7ba1\u9053\uff0c\u518d\u6765",Object(a.b)("strong",{parentName:"p"},"\u533f\u540d\u7ba1\u9053\u662f\u53ea\u80fd\u7528\u4e8e\u5b58\u5728\u7236\u5b50\u5173\u7cfb\u7684\u8fdb\u7a0b\u95f4\u901a\u4fe1"),"\uff0c\u533f\u540d\u7ba1\u9053\u7684\u751f\u547d\u5468\u671f\u968f\u7740\u8fdb\u7a0b\u521b\u5efa\u800c\u5efa\u7acb\uff0c\u968f\u7740\u8fdb\u7a0b\u7ec8\u6b62\u800c\u6d88\u5931\u3002"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"\u547d\u540d\u7ba1\u9053"),"\u7a81\u7834\u4e86\u533f\u540d\u7ba1\u9053\u53ea\u80fd\u5728\u4eb2\u7f18\u5173\u7cfb\u8fdb\u7a0b\u95f4\u7684\u901a\u4fe1\u9650\u5236\uff0c\u56e0\u4e3a\u4f7f\u7528\u547d\u540d\u7ba1\u9053\u7684\u524d\u63d0\uff0c\u9700\u8981\u5728\u6587\u4ef6\u7cfb\u7edf\u521b\u5efa\u4e00\u4e2a\u7c7b\u578b\u4e3a p \u7684\u8bbe\u5907\u6587\u4ef6\uff0c\u90a3\u4e48\u6beb\u65e0\u5173\u7cfb\u7684\u8fdb\u7a0b\u5c31\u53ef\u4ee5\u901a\u8fc7\u8fd9\u4e2a\u8bbe\u5907\u6587\u4ef6\u8fdb\u884c\u901a\u4fe1\u3002\u53e6\u5916\uff0c\u4e0d\u7ba1\u662f\u533f\u540d\u7ba1\u9053\u8fd8\u662f\u547d\u540d\u7ba1\u9053\uff0c\u8fdb\u7a0b\u5199\u5165\u7684\u6570\u636e\u90fd\u662f",Object(a.b)("strong",{parentName:"p"},"\u7f13\u5b58\u5728\u5185\u6838"),"\u4e2d\uff0c\u53e6\u4e00\u4e2a\u8fdb\u7a0b\u8bfb\u53d6\u6570\u636e\u65f6\u5019\u81ea\u7136\u4e5f\u662f\u4ece\u5185\u6838\u4e2d\u83b7\u53d6\uff0c\u540c\u65f6\u901a\u4fe1\u6570\u636e\u90fd\u9075\u5faa",Object(a.b)("strong",{parentName:"p"},"\u5148\u8fdb\u5148\u51fa"),"\u539f\u5219\uff0c\u4e0d\u652f\u6301 lseek \u4e4b\u7c7b\u7684\u6587\u4ef6\u5b9a\u4f4d\u64cd\u4f5c\u3002"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"\u6d88\u606f\u961f\u5217"),"\u514b\u670d\u4e86\u7ba1\u9053\u901a\u4fe1\u7684\u6570\u636e\u662f\u65e0\u683c\u5f0f\u7684\u5b57\u8282\u6d41\u7684\u95ee\u9898\uff0c\u6d88\u606f\u961f\u5217\u5b9e\u9645\u4e0a\u662f\u4fdd\u5b58\u5728\u5185\u6838\u7684\u300c\u6d88\u606f\u94fe\u8868\u300d\uff0c\u6d88\u606f\u961f\u5217\u7684\u6d88\u606f\u4f53\u662f\u53ef\u4ee5\u7528\u6237\u81ea\u5b9a\u4e49\u7684\u6570\u636e\u7c7b\u578b\uff0c\u53d1\u9001\u6570\u636e\u65f6\uff0c\u4f1a\u88ab\u5206\u6210\u4e00\u4e2a\u4e00\u4e2a\u72ec\u7acb\u7684\u6d88\u606f\u4f53\uff0c\u5f53\u7136\u63a5\u6536\u6570\u636e\u65f6\uff0c\u4e5f\u8981\u4e0e\u53d1\u9001\u65b9\u53d1\u9001\u7684\u6d88\u606f\u4f53\u7684\u6570\u636e\u7c7b\u578b\u4fdd\u6301\u4e00\u81f4\uff0c\u8fd9\u6837\u624d\u80fd\u4fdd\u8bc1\u8bfb\u53d6\u7684\u6570\u636e\u662f\u6b63\u786e\u7684\u3002\u6d88\u606f\u961f\u5217\u901a\u4fe1\u7684\u901f\u5ea6\u4e0d\u662f\u6700\u53ca\u65f6\u7684\uff0c\u6bd5\u7adf",Object(a.b)("strong",{parentName:"p"},"\u6bcf\u6b21\u6570\u636e\u7684\u5199\u5165\u548c\u8bfb\u53d6\u90fd\u9700\u8981\u7ecf\u8fc7\u7528\u6237\u6001\u4e0e\u5185\u6838\u6001\u4e4b\u95f4\u7684\u62f7\u8d1d\u8fc7\u7a0b\u3002")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"\u5171\u4eab\u5185\u5b58"),"\u53ef\u4ee5\u89e3\u51b3\u6d88\u606f\u961f\u5217\u901a\u4fe1\u4e2d\u7528\u6237\u6001\u4e0e\u5185\u6838\u6001\u4e4b\u95f4\u6570\u636e\u62f7\u8d1d\u8fc7\u7a0b\u5e26\u6765\u7684\u5f00\u9500\uff0c",Object(a.b)("strong",{parentName:"p"},"\u5b83\u76f4\u63a5\u5206\u914d\u4e00\u4e2a\u5171\u4eab\u7a7a\u95f4\uff0c\u6bcf\u4e2a\u8fdb\u7a0b\u90fd\u53ef\u4ee5\u76f4\u63a5\u8bbf\u95ee"),"\uff0c\u5c31\u50cf\u8bbf\u95ee\u8fdb\u7a0b\u81ea\u5df1\u7684\u7a7a\u95f4\u4e00\u6837\u5feb\u6377\u65b9\u4fbf\uff0c\u4e0d\u9700\u8981\u9677\u5165\u5185\u6838\u6001\u6216\u8005\u7cfb\u7edf\u8c03\u7528\uff0c\u5927\u5927\u63d0\u9ad8\u4e86\u901a\u4fe1\u7684\u901f\u5ea6\uff0c\u4eab\u6709",Object(a.b)("strong",{parentName:"p"},"\u6700\u5feb"),"\u7684\u8fdb\u7a0b\u95f4\u901a\u4fe1\u65b9\u5f0f\u4e4b\u540d\u3002\u4f46\u662f\u4fbf\u6377\u9ad8\u6548\u7684\u5171\u4eab\u5185\u5b58\u901a\u4fe1\uff0c",Object(a.b)("strong",{parentName:"p"},"\u5e26\u6765\u65b0\u7684\u95ee\u9898\uff0c\u591a\u8fdb\u7a0b\u7ade\u4e89\u540c\u4e2a\u5171\u4eab\u8d44\u6e90\u4f1a\u9020\u6210\u6570\u636e\u7684\u9519\u4e71\u3002")),Object(a.b)("p",null,"\u90a3\u4e48\uff0c\u5c31\u9700\u8981",Object(a.b)("strong",{parentName:"p"},"\u4fe1\u53f7\u91cf"),"\u6765\u4fdd\u62a4\u5171\u4eab\u8d44\u6e90\uff0c\u4ee5\u786e\u4fdd\u4efb\u4f55\u65f6\u523b\u53ea\u80fd\u6709\u4e00\u4e2a\u8fdb\u7a0b\u8bbf\u95ee\u5171\u4eab\u8d44\u6e90\uff0c\u8fd9\u79cd\u65b9\u5f0f\u5c31\u662f\u4e92\u65a5\u8bbf\u95ee\u3002",Object(a.b)("strong",{parentName:"p"},"\u4fe1\u53f7\u91cf\u4e0d\u4ec5\u53ef\u4ee5\u5b9e\u73b0\u8bbf\u95ee\u7684\u4e92\u65a5\u6027\uff0c\u8fd8\u53ef\u4ee5\u5b9e\u73b0\u8fdb\u7a0b\u95f4\u7684\u540c\u6b65"),"\uff0c\u4fe1\u53f7\u91cf\u5176\u5b9e\u662f\u4e00\u4e2a\u8ba1\u6570\u5668\uff0c\u8868\u793a\u7684\u662f\u8d44\u6e90\u4e2a\u6570\uff0c\u5176\u503c\u53ef\u4ee5\u901a\u8fc7\u4e24\u4e2a\u539f\u5b50\u64cd\u4f5c\u6765\u63a7\u5236\uff0c\u5206\u522b\u662f ",Object(a.b)("strong",{parentName:"p"},"P \u64cd\u4f5c\u548c V \u64cd\u4f5c"),"\u3002"),Object(a.b)("p",null,"\u4e0e\u4fe1\u53f7\u91cf\u540d\u5b57\u5f88\u76f8\u4f3c\u7684\u53eb",Object(a.b)("strong",{parentName:"p"},"\u4fe1\u53f7"),"\uff0c\u5b83\u4fe9\u540d\u5b57\u867d\u7136\u76f8\u4f3c\uff0c\u4f46\u529f\u80fd\u4e00\u70b9\u513f\u90fd\u4e0d\u4e00\u6837\u3002\u4fe1\u53f7\u662f\u8fdb\u7a0b\u95f4\u901a\u4fe1\u673a\u5236\u4e2d",Object(a.b)("strong",{parentName:"p"},"\u552f\u4e00\u7684\u5f02\u6b65\u901a\u4fe1\u673a\u5236"),"\uff0c\u4fe1\u53f7\u53ef\u4ee5\u5728\u5e94\u7528\u8fdb\u7a0b\u548c\u5185\u6838\u4e4b\u95f4\u76f4\u63a5\u4ea4\u4e92\uff0c\u5185\u6838\u4e5f\u53ef\u4ee5\u5229\u7528\u4fe1\u53f7\u6765\u901a\u77e5\u7528\u6237\u7a7a\u95f4\u7684\u8fdb\u7a0b\u53d1\u751f\u4e86\u54ea\u4e9b\u7cfb\u7edf\u4e8b\u4ef6\uff0c\u4fe1\u53f7\u4e8b\u4ef6\u7684\u6765\u6e90\u4e3b\u8981\u6709\u786c\u4ef6\u6765\u6e90\uff08\u5982\u952e\u76d8 Cltr+C \uff09\u548c\u8f6f\u4ef6\u6765\u6e90\uff08\u5982 kill \u547d\u4ee4\uff09\uff0c\u4e00\u65e6\u6709\u4fe1\u53f7\u53d1\u751f\uff0c",Object(a.b)("strong",{parentName:"p"},"\u8fdb\u7a0b\u6709\u4e09\u79cd\u65b9\u5f0f\u54cd\u5e94\u4fe1\u53f7 1. \u6267\u884c\u9ed8\u8ba4\u64cd\u4f5c\u30012. \u6355\u6349\u4fe1\u53f7\u30013. \u5ffd\u7565\u4fe1\u53f7"),"\u3002\u6709\u4e24\u4e2a\u4fe1\u53f7\u662f\u5e94\u7528\u8fdb\u7a0b\u65e0\u6cd5\u6355\u6349\u548c\u5ffd\u7565\u7684\uff0c\u5373 ",Object(a.b)("inlineCode",{parentName:"p"},"SIGKILL")," \u548c ",Object(a.b)("inlineCode",{parentName:"p"},"SEGSTOP"),"\uff0c\u8fd9\u662f\u4e3a\u4e86\u65b9\u4fbf\u6211\u4eec\u80fd\u5728\u4efb\u4f55\u65f6\u5019\u7ed3\u675f\u6216\u505c\u6b62\u67d0\u4e2a\u8fdb\u7a0b\u3002"),Object(a.b)("p",null,"\u524d\u9762\u8bf4\u5230\u7684\u901a\u4fe1\u673a\u5236\uff0c\u90fd\u662f\u5de5\u4f5c\u4e8e\u540c\u4e00\u53f0\u4e3b\u673a\uff0c\u5982\u679c",Object(a.b)("strong",{parentName:"p"},"\u8981\u4e0e\u4e0d\u540c\u4e3b\u673a\u7684\u8fdb\u7a0b\u95f4\u901a\u4fe1\uff0c\u90a3\u4e48\u5c31\u9700\u8981 Socket \u901a\u4fe1\u4e86"),"\u3002Socket \u5b9e\u9645\u4e0a\u4e0d\u4ec5\u7528\u4e8e\u4e0d\u540c\u7684\u4e3b\u673a\u8fdb\u7a0b\u95f4\u901a\u4fe1\uff0c\u8fd8\u53ef\u4ee5\u7528\u4e8e\u672c\u5730\u4e3b\u673a\u8fdb\u7a0b\u95f4\u901a\u4fe1\uff0c\u53ef\u6839\u636e\u521b\u5efa Socket \u7684\u7c7b\u578b\u4e0d\u540c\uff0c\u5206\u4e3a\u4e09\u79cd\u5e38\u89c1\u7684\u901a\u4fe1\u65b9\u5f0f\uff0c\u4e00\u4e2a\u662f\u57fa\u4e8e TCP \u534f\u8bae\u7684\u901a\u4fe1\u65b9\u5f0f\uff0c\u4e00\u4e2a\u662f\u57fa\u4e8e UDP \u534f\u8bae\u7684\u901a\u4fe1\u65b9\u5f0f\uff0c\u4e00\u4e2a\u662f\u672c\u5730\u8fdb\u7a0b\u95f4\u901a\u4fe1\u65b9\u5f0f\u3002"),Object(a.b)("h1",{id:"\u7ebf\u7a0b\u901a\u4fe1\u7684\u51e0\u79cd\u65b9\u5f0f"},"\u7ebf\u7a0b\u901a\u4fe1\u7684\u51e0\u79cd\u65b9\u5f0f"),Object(a.b)("p",null,"\u7ebf\u7a0b\u95f4\u7684\u901a\u4fe1\u76ee\u7684\u4e3b\u8981\u662f\u7528\u4e8e\u7ebf\u7a0b\u540c\u6b65\uff0c\u6240\u4ee5\u7ebf\u7a0b\u6ca1\u6709\u50cf\u8fdb\u7a0b\u901a\u4fe1\u4e2d\u7684\u7528\u4e8e\u6570\u636e\u4ea4\u6362\u7684\u901a\u4fe1\u673a\u5236\u3002"),Object(a.b)("h2",{id:"1-\u7b49\u5f85\u901a\u77e5\u673a\u5236"},"1. \u7b49\u5f85\u901a\u77e5\u673a\u5236"),Object(a.b)("p",null,"\u4e24\u4e2a\u7ebf\u7a0b\u901a\u8fc7\u5bf9\u540c\u4e00\u5bf9\u8c61\u8c03\u7528\u7b49\u5f85 wait() \u548c\u901a\u77e5 notify() \u65b9\u6cd5\u6765\u8fdb\u884c\u901a\u8baf\u3002"),Object(a.b)("p",null,"\u7b49\u5f85\u901a\u77e5\u6709\u7740\u4e00\u4e2a\u7ecf\u5178\u8303\u5f0f\uff1a"),Object(a.b)("p",null,"\u7ebf\u7a0b A \u4f5c\u4e3a\u6d88\u8d39\u8005\uff1a"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"\u83b7\u53d6\u5bf9\u8c61\u7684\u9501\u3002"),Object(a.b)("li",{parentName:"ol"},"\u8fdb\u5165 while(\u5224\u65ad\u6761\u4ef6)\uff0c\u5e76\u8c03\u7528 wait() \u65b9\u6cd5\u3002"),Object(a.b)("li",{parentName:"ol"},"\u5f53\u6761\u4ef6\u6ee1\u8db3\u8df3\u51fa\u5faa\u73af\u6267\u884c\u5177\u4f53\u5904\u7406\u903b\u8f91\u3002")),Object(a.b)("p",null,"\u7ebf\u7a0b B \u4f5c\u4e3a\u751f\u4ea7\u8005:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"\u83b7\u53d6\u5bf9\u8c61\u9501\u3002"),Object(a.b)("li",{parentName:"ol"},"\u66f4\u6539\u4e0e\u7ebf\u7a0b A \u5171\u7528\u7684\u5224\u65ad\u6761\u4ef6\u3002"),Object(a.b)("li",{parentName:"ol"},"\u8c03\u7528 notify() \u65b9\u6cd5\u3002")),Object(a.b)("p",null,"\u4f2a\u4ee3\u7801\u5982\u4e0b:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"//Thread A\n\nsynchronized(Object){\n    while(\u6761\u4ef6){\n        Object.wait();\n    }\n    //do something\n}\n\n//Thread B\nsynchronized(Object){\n    \u6761\u4ef6=false;//\u6539\u53d8\u6761\u4ef6\n    Object.notify();\n}\n")),Object(a.b)("h2",{id:"2-join-\u65b9\u6cd5"},"2. join() \u65b9\u6cd5"),Object(a.b)("p",null,"\u5728 join \u7ebf\u7a0b\u5b8c\u6210\u540e\u4f1a\u8c03\u7528 notifyAll() \u65b9\u6cd5\uff0c\u662f\u5728 JVM \u5b9e\u73b0\u4e2d\u8c03\u7528\uff0c\u6240\u4ee5\u8fd9\u91cc\u770b\u4e0d\u51fa\u6765\u3002"),Object(a.b)("h2",{id:"3-volatile-\u5171\u4eab\u5185\u5b58"},"3. volatile \u5171\u4eab\u5185\u5b58"),Object(a.b)("h3",{id:"4-\u7ba1\u9053\u901a\u4fe1"},"4. \u7ba1\u9053\u901a\u4fe1"),Object(a.b)("h2",{id:"5-\u5e76\u53d1\u5de5\u5177"},"5. \u5e76\u53d1\u5de5\u5177"),Object(a.b)("p",null,"CountDownLatch \u5e76\u53d1\u5de5\u5177"),Object(a.b)("p",null,"CyclicBarrier \u5e76\u53d1\u5de5\u5177"),Object(a.b)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://crossoverjie.top/2018/03/16/java-senior/thread-communication/"},"https://crossoverjie.top/2018/03/16/java-senior/thread-communication/")))}i.isMDXComponent=!0},108:function(e,t,n){"use strict";n.d(t,"a",(function(){return j})),n.d(t,"b",(function(){return s}));var r=n(0),b=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,b=function(e,t){if(null==e)return{};var n,r,b={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(b[n]=e[n]);return b}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(b[n]=e[n])}return b}var o=b.a.createContext({}),i=function(e){var t=b.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},j=function(e){var t=i(e.components);return b.a.createElement(o.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},u=b.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),j=i(n),u=r,s=j["".concat(c,".").concat(u)]||j[u]||O[u]||a;return n?b.a.createElement(s,l(l({ref:t},o),{},{components:n})):b.a.createElement(s,l({ref:t},o))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var o=2;o<a;o++)c[o]=n[o];return b.a.createElement.apply(null,c)}return b.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);