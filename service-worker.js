if(!self.define){let e,i={};const c=(c,d)=>(c=new URL(c+".js",d).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(d,a)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(i[f])return;let n={};const r=e=>c(e,f),s={module:{uri:f},exports:n,require:r};i[f]=Promise.all(d.map((e=>s[e]||r(e)))).then((e=>(a(...e),n)))}}define(["./workbox-b41f8fb8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2023/10/26/政治小组展示(10.26/index.html",revision:"b46feed12fc631471bfafca3c2762284"},{url:"2023/10/29/物理创新实验设计(2023.10.29/index.html",revision:"cdfda97ec481d215a44a149cca1c7258"},{url:"2023/12/03/物理实验创新设计中期研讨(2023.12.03/index.html",revision:"346b8f7299956fd4db7fab99225f8bb4"},{url:"2023/12/18/大学生心理健康课展示(2023.12.18/index.html",revision:"689255817be03c68cc391d529385d4d5"},{url:"2024/03/22/使用GPT的作文修改流程/index.html",revision:"007fb4488a9071ee4b22fe48d5d1489c"},{url:"2024/05/12/关于未来走向/index.html",revision:"3bc791f3db151dc5ea5f07ba89dffb46"},{url:"2024/05/20/转计算机专业相关/index.html",revision:"ee785ef1929ec1c78de0d766cfc9dd82"},{url:"2024/06/03/关于路由器及其延伸的一些/index.html",revision:"41738ae8fbbd966d490c02fbacbe5008"},{url:"404.html",revision:"292c775fd0cc16eec1a224abe6aa0521"},{url:"about/index.html",revision:"df22d6cf28e6cdd3e12d738604705f82"},{url:"archives/2023/10/index.html",revision:"5e2ebbc9a75b876bd5921223d117d4be"},{url:"archives/2023/12/index.html",revision:"9e453b89ab753f3e78e6fdbade983fa3"},{url:"archives/2023/index.html",revision:"a135bc802dfe82cfa0595a741eca54c7"},{url:"archives/2024/03/index.html",revision:"f2c0be2e5aa19c06f0f5d4fedfc41b24"},{url:"archives/2024/05/index.html",revision:"46c58eaa0424713aca286bf502f3c51c"},{url:"archives/2024/06/index.html",revision:"198a8bcb79505468a4c2fb6b972bd6eb"},{url:"archives/2024/index.html",revision:"8cd7e7d340e43894afbd1ac353c90395"},{url:"archives/index.html",revision:"7483c9cc6b642fcf4cf59d6f022ced59"},{url:"categories/index.html",revision:"865b3c9e248c1f2e4a91f6de6c9645f5"},{url:"categories/学习生活/index.html",revision:"0dd5f7e095f2a30412dce92752547de4"},{url:"categories/未来规划/index.html",revision:"9a3a3202b8b47a8057514f3762d5150b"},{url:"categories/网络/index.html",revision:"ecd6a2f570055f2aa68edb98c7f57598"},{url:"css/index.css",revision:"08e79715f8fae0de0677dfece808ef5f"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/mentalhealth/202312180_01.png",revision:"2c11098f66a6c0eb1efd61a1978409c3"},{url:"img/mentalhealth/202312180_02.png",revision:"c8c240db3d362783a2c4d3d1dba6b989"},{url:"img/mentalhealth/202312180_03.png",revision:"6515e2b89da53e33f6c909b023acd2c3"},{url:"img/mentalhealth/202312180_04.png",revision:"f14f63f102001eb78bf7d5132b690f49"},{url:"img/mentalhealth/202312180_05.png",revision:"896c4d09f0ff1d8f99501c607d99dbe6"},{url:"img/mentalhealth/202312180_06.png",revision:"609fed9345bd46fc9f785023c3910557"},{url:"img/mentalhealth/202312180_07.png",revision:"1d5d4a84f24be0aa197df345b00b277f"},{url:"img/mentalhealth/202312180_08.png",revision:"3e1dcd4d445c16d6c144d3795538950d"},{url:"img/physics/2023_01.png",revision:"d96be7f9be190a2abff9f865d40f59af"},{url:"img/physics/2023_02.png",revision:"111ff9eafa3f968ddb578299fa3aa073"},{url:"img/physics/2023_03.png",revision:"c64526a20d8eb4c2116f1180fc7d44f0"},{url:"img/physics/2023_04.png",revision:"ec38f41c15aab41e15c3f1957ad034fc"},{url:"img/physics/2023_05.png",revision:"c9b5bec5987236bf6d60ed9e1266918d"},{url:"img/physics/2023_06.png",revision:"4229731e3d56c9b7f72330dbb59f6b49"},{url:"img/physics/2023_07.png",revision:"bd1ff572c332bc87ebedf9df5bb6440c"},{url:"img/physics/2023_08.png",revision:"23882a451e39e7202f390d5d940287b5"},{url:"img/physics/2023_09.png",revision:"4b8530544ecc781353dd54f13c182a79"},{url:"img/physics/2023_10.png",revision:"3de0b17f937f1082133c3431eb99eaa5"},{url:"img/physics/2312030/2312030_01.png",revision:"2eddce6f5ef9420f20c68d700c106efe"},{url:"img/physics/2312030/2312030_02.png",revision:"8fdc4cd7ebacd60ce7be6d8923092dd4"},{url:"img/physics/2312030/2312030_03.png",revision:"eb9adcc33181d8fbafea73c747412d7b"},{url:"img/physics/2312030/2312030_04.png",revision:"e2db152ab9f9b2f25d561c2990862585"},{url:"img/physics/2312030/2312030_05.png",revision:"9c6a1a8f1acfa00def59d3a34c7cd8c3"},{url:"img/physics/2312030/2312030_06.png",revision:"683e3dba85ac305c21a97f55db47402d"},{url:"img/physics/2312030/2312030_07.png",revision:"b4b0af9b4420a0af4a2b3cf5671dd788"},{url:"img/physics/2312030/2312030_08.png",revision:"77e4629ddc7724391e9c735e91c1a7cc"},{url:"img/zhengzhi/2.png",revision:"e5f5d011c844942ac53c494cdd71ea94"},{url:"img/zhengzhi/3.png",revision:"56ff99ed8f30f39f549936a6d51face4"},{url:"img/zhengzhi/4.png",revision:"4be058e904142ff2317c0977e1029d9b"},{url:"img/zhengzhi/5.png",revision:"9624697a8e43a36f6da245d9a4a7f7a2"},{url:"img/zhengzhi/6.png",revision:"e6038627192c78e14ef1c493dc6cbd77"},{url:"img/zhengzhi/7.png",revision:"546771807f722520cd15651b6c0be15e"},{url:"img/zhengzhi/8.png",revision:"ebed91a2d5ba83dfe723bf9f7aefda69"},{url:"img/zhengzhi/9.png",revision:"4d50631ef74bfd713c06b6964a094c32"},{url:"index.html",revision:"179d526c5ab846a30effe0867ba63e2c"},{url:"js/main.js",revision:"6b81ae582288482e51573bbc5226dbd6"},{url:"js/search/algolia.js",revision:"4491ac1d470a1693a502a9d09034aa21"},{url:"js/search/local-search.js",revision:"9da6b76672a143c8c8449770a8d259f3"},{url:"js/tw_cn.js",revision:"707135460b9ad67147ebebd717413d9d"},{url:"js/utils.js",revision:"3df06119fbaa236c2fbb2dbc6e120a86"},{url:"link/index.html",revision:"3aaa4fbbb97761320aa9abaeadff8c1a"},{url:"pic/mentalhealth/202312180_01.png",revision:"2c03b5913836be73bde351a235dd576f"},{url:"pic/mentalhealth/202312180_02.png",revision:"c8c240db3d362783a2c4d3d1dba6b989"},{url:"pic/mentalhealth/202312180_03.png",revision:"6515e2b89da53e33f6c909b023acd2c3"},{url:"pic/mentalhealth/202312180_04.png",revision:"f14f63f102001eb78bf7d5132b690f49"},{url:"pic/mentalhealth/202312180_05.png",revision:"896c4d09f0ff1d8f99501c607d99dbe6"},{url:"pic/mentalhealth/202312180_06.png",revision:"609fed9345bd46fc9f785023c3910557"},{url:"pic/mentalhealth/202312180_07.png",revision:"1d5d4a84f24be0aa197df345b00b277f"},{url:"pic/mentalhealth/202312180_08.png",revision:"e55c3f42637e4474d9ae826c18bb7af8"},{url:"pic/physics/2023_01.png",revision:"1ec0fb54f703b3597a79a2efc665c7ce"},{url:"pic/physics/2023_02.png",revision:"111ff9eafa3f968ddb578299fa3aa073"},{url:"pic/physics/2023_03.png",revision:"c64526a20d8eb4c2116f1180fc7d44f0"},{url:"pic/physics/2023_04.png",revision:"ec38f41c15aab41e15c3f1957ad034fc"},{url:"pic/physics/2023_05.png",revision:"c9b5bec5987236bf6d60ed9e1266918d"},{url:"pic/physics/2023_06.png",revision:"4229731e3d56c9b7f72330dbb59f6b49"},{url:"pic/physics/2023_07.png",revision:"bd1ff572c332bc87ebedf9df5bb6440c"},{url:"pic/physics/2023_08.png",revision:"23882a451e39e7202f390d5d940287b5"},{url:"pic/physics/2023_09.png",revision:"4b8530544ecc781353dd54f13c182a79"},{url:"pic/physics/2023_10.png",revision:"e7213d62f2891c52e6bc441fc7a4f41e"},{url:"pic/physics/2312030/2312030_01.png",revision:"1fd42f6bc4338892d5c550606943adf3"},{url:"pic/physics/2312030/2312030_02.png",revision:"8fdc4cd7ebacd60ce7be6d8923092dd4"},{url:"pic/physics/2312030/2312030_03.png",revision:"eb9adcc33181d8fbafea73c747412d7b"},{url:"pic/physics/2312030/2312030_04.png",revision:"e2db152ab9f9b2f25d561c2990862585"},{url:"pic/physics/2312030/2312030_05.png",revision:"9c6a1a8f1acfa00def59d3a34c7cd8c3"},{url:"pic/physics/2312030/2312030_06.png",revision:"683e3dba85ac305c21a97f55db47402d"},{url:"pic/physics/2312030/2312030_07.png",revision:"b4b0af9b4420a0af4a2b3cf5671dd788"},{url:"pic/physics/2312030/2312030_08.png",revision:"dac029305a3b8cfbee8cb65161770f83"},{url:"pic/zhengzhi/2.png",revision:"e5f5d011c844942ac53c494cdd71ea94"},{url:"pic/zhengzhi/3.png",revision:"56ff99ed8f30f39f549936a6d51face4"},{url:"pic/zhengzhi/4.png",revision:"4be058e904142ff2317c0977e1029d9b"},{url:"pic/zhengzhi/5.png",revision:"9624697a8e43a36f6da245d9a4a7f7a2"},{url:"pic/zhengzhi/6.png",revision:"e6038627192c78e14ef1c493dc6cbd77"},{url:"pic/zhengzhi/7.png",revision:"546771807f722520cd15651b6c0be15e"},{url:"pic/zhengzhi/8.png",revision:"ebed91a2d5ba83dfe723bf9f7aefda69"},{url:"pic/zhengzhi/9.png",revision:"4d50631ef74bfd713c06b6964a094c32"},{url:"tags/GPT/index.html",revision:"58ec859e04fb4b48be13af07ca99931c"},{url:"tags/index.html",revision:"856dbfd68358f294fdffe706493cf647"},{url:"tags/PPT/index.html",revision:"fa0257710d30c349155fd7bc100102a3"},{url:"tags/作文/index.html",revision:"63c6b946f10b07733ee88623c7e5b6fd"},{url:"tags/大学/index.html",revision:"855fcb5049dc0a8b90cf3eeb37f7027c"},{url:"tags/学习/index.html",revision:"46694403bd145ee2fda34eea6eb2abd7"},{url:"tags/校园网自动登录/index.html",revision:"b6b68fa1658bf62e0a46af4e91334ba6"},{url:"tags/物理创新实验设计/index.html",revision:"784c629a8f73641e6629789b723771a0"},{url:"tags/路由器/index.html",revision:"f757aabf4c67f59d073ea7afaf2b378d"},{url:"tags/转专业/index.html",revision:"e45ce6bca5356c8a76562d4d4cd9ff26"}],{})}));
//# sourceMappingURL=service-worker.js.map
