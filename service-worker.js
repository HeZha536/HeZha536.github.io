if(!self.define){let e,i={};const c=(c,d)=>(c=new URL(c+".js",d).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(d,n)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(i[f])return;let a={};const r=e=>c(e,f),s={module:{uri:f},exports:a,require:r};i[f]=Promise.all(d.map((e=>s[e]||r(e)))).then((e=>(n(...e),a)))}}define(["./workbox-b41f8fb8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2023/10/26/政治小组展示(10.26/index.html",revision:"3291882dba8c63f9e538275bbcbb409a"},{url:"2023/10/29/物理创新实验设计(2023.10.29/index.html",revision:"733f87fcbf06c007645db18af00de8d2"},{url:"2023/12/03/物理实验创新设计中期研讨(2023.12.03/index.html",revision:"bfa9be89d1546a688d75418df8c7953c"},{url:"2023/12/18/大学生心理健康课展示(2023.12.18/index.html",revision:"14bd86a3d77d4949367d167892527843"},{url:"2024/03/22/使用GPT的作文修改流程/index.html",revision:"8e7d01fb04e8f3c7d3f8c824f167f531"},{url:"2024/05/12/关于未来走向/index.html",revision:"df8645f94b12ffe08109b9be883cafdc"},{url:"2024/05/29/完全体/index.html",revision:"4e9412718a7181bb0d1f3a997154bc64"},{url:"2024/05/30/转专业相关/index.html",revision:"a41f14492be49c73f97f0cfb2cce08f8"},{url:"404.html",revision:"9309720365cb9c3d36e50341b3146fef"},{url:"about/index.html",revision:"01ebcb98ea27498fb503ff8865df6e96"},{url:"archives/2023/10/index.html",revision:"cc16d0de3c0a364a4a19b82576b95611"},{url:"archives/2023/12/index.html",revision:"30f66077b2ecbba7c7118d0329310229"},{url:"archives/2023/index.html",revision:"7ce8e1800beca7aeaa86e9f818bb2c61"},{url:"archives/2024/03/index.html",revision:"53a9c5508877baf5294ac95a5babf107"},{url:"archives/2024/05/index.html",revision:"b683a1b91f92cdd11c86ded505bc72a3"},{url:"archives/2024/index.html",revision:"1b813dfe57aa2e8690c462d488b00017"},{url:"archives/index.html",revision:"fcffc9ce72762d73f875ca2f7dd3af0a"},{url:"categories/index.html",revision:"68ecb7824e3beb0597dc2a3f5b5f42d1"},{url:"categories/博客搭建/index.html",revision:"c375d96ba45562b90c4f48f3187b8304"},{url:"categories/学习生活/index.html",revision:"a78ec6e108715faf508198c29bbd4438"},{url:"categories/未来规划/index.html",revision:"da7b85449cee33b79f776aaed2c6edb6"},{url:"css/index.css",revision:"08e79715f8fae0de0677dfece808ef5f"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/mentalhealth/202312180_01.png",revision:"2c11098f66a6c0eb1efd61a1978409c3"},{url:"img/mentalhealth/202312180_02.png",revision:"c8c240db3d362783a2c4d3d1dba6b989"},{url:"img/mentalhealth/202312180_03.png",revision:"6515e2b89da53e33f6c909b023acd2c3"},{url:"img/mentalhealth/202312180_04.png",revision:"f14f63f102001eb78bf7d5132b690f49"},{url:"img/mentalhealth/202312180_05.png",revision:"896c4d09f0ff1d8f99501c607d99dbe6"},{url:"img/mentalhealth/202312180_06.png",revision:"609fed9345bd46fc9f785023c3910557"},{url:"img/mentalhealth/202312180_07.png",revision:"1d5d4a84f24be0aa197df345b00b277f"},{url:"img/mentalhealth/202312180_08.png",revision:"3e1dcd4d445c16d6c144d3795538950d"},{url:"img/physics/2023_01.png",revision:"d96be7f9be190a2abff9f865d40f59af"},{url:"img/physics/2023_02.png",revision:"111ff9eafa3f968ddb578299fa3aa073"},{url:"img/physics/2023_03.png",revision:"c64526a20d8eb4c2116f1180fc7d44f0"},{url:"img/physics/2023_04.png",revision:"ec38f41c15aab41e15c3f1957ad034fc"},{url:"img/physics/2023_05.png",revision:"c9b5bec5987236bf6d60ed9e1266918d"},{url:"img/physics/2023_06.png",revision:"4229731e3d56c9b7f72330dbb59f6b49"},{url:"img/physics/2023_07.png",revision:"bd1ff572c332bc87ebedf9df5bb6440c"},{url:"img/physics/2023_08.png",revision:"23882a451e39e7202f390d5d940287b5"},{url:"img/physics/2023_09.png",revision:"4b8530544ecc781353dd54f13c182a79"},{url:"img/physics/2023_10.png",revision:"3de0b17f937f1082133c3431eb99eaa5"},{url:"img/physics/2312030/2312030_01.png",revision:"2eddce6f5ef9420f20c68d700c106efe"},{url:"img/physics/2312030/2312030_02.png",revision:"8fdc4cd7ebacd60ce7be6d8923092dd4"},{url:"img/physics/2312030/2312030_03.png",revision:"eb9adcc33181d8fbafea73c747412d7b"},{url:"img/physics/2312030/2312030_04.png",revision:"e2db152ab9f9b2f25d561c2990862585"},{url:"img/physics/2312030/2312030_05.png",revision:"9c6a1a8f1acfa00def59d3a34c7cd8c3"},{url:"img/physics/2312030/2312030_06.png",revision:"683e3dba85ac305c21a97f55db47402d"},{url:"img/physics/2312030/2312030_07.png",revision:"b4b0af9b4420a0af4a2b3cf5671dd788"},{url:"img/physics/2312030/2312030_08.png",revision:"77e4629ddc7724391e9c735e91c1a7cc"},{url:"img/zhengzhi/2.png",revision:"e5f5d011c844942ac53c494cdd71ea94"},{url:"img/zhengzhi/3.png",revision:"56ff99ed8f30f39f549936a6d51face4"},{url:"img/zhengzhi/4.png",revision:"4be058e904142ff2317c0977e1029d9b"},{url:"img/zhengzhi/5.png",revision:"9624697a8e43a36f6da245d9a4a7f7a2"},{url:"img/zhengzhi/6.png",revision:"e6038627192c78e14ef1c493dc6cbd77"},{url:"img/zhengzhi/7.png",revision:"546771807f722520cd15651b6c0be15e"},{url:"img/zhengzhi/8.png",revision:"ebed91a2d5ba83dfe723bf9f7aefda69"},{url:"img/zhengzhi/9.png",revision:"4d50631ef74bfd713c06b6964a094c32"},{url:"index.html",revision:"60ee4b056298e06bb51c44f10e16d544"},{url:"js/main.js",revision:"6b81ae582288482e51573bbc5226dbd6"},{url:"js/search/algolia.js",revision:"4491ac1d470a1693a502a9d09034aa21"},{url:"js/search/local-search.js",revision:"9da6b76672a143c8c8449770a8d259f3"},{url:"js/tw_cn.js",revision:"707135460b9ad67147ebebd717413d9d"},{url:"js/utils.js",revision:"3df06119fbaa236c2fbb2dbc6e120a86"},{url:"link/index.html",revision:"9cfc1e67941e3cdf391dde084e1bc556"},{url:"pic/mentalhealth/202312180_01.png",revision:"2c03b5913836be73bde351a235dd576f"},{url:"pic/mentalhealth/202312180_02.png",revision:"c8c240db3d362783a2c4d3d1dba6b989"},{url:"pic/mentalhealth/202312180_03.png",revision:"6515e2b89da53e33f6c909b023acd2c3"},{url:"pic/mentalhealth/202312180_04.png",revision:"f14f63f102001eb78bf7d5132b690f49"},{url:"pic/mentalhealth/202312180_05.png",revision:"896c4d09f0ff1d8f99501c607d99dbe6"},{url:"pic/mentalhealth/202312180_06.png",revision:"609fed9345bd46fc9f785023c3910557"},{url:"pic/mentalhealth/202312180_07.png",revision:"1d5d4a84f24be0aa197df345b00b277f"},{url:"pic/mentalhealth/202312180_08.png",revision:"e55c3f42637e4474d9ae826c18bb7af8"},{url:"pic/physics/2023_01.png",revision:"1ec0fb54f703b3597a79a2efc665c7ce"},{url:"pic/physics/2023_02.png",revision:"111ff9eafa3f968ddb578299fa3aa073"},{url:"pic/physics/2023_03.png",revision:"c64526a20d8eb4c2116f1180fc7d44f0"},{url:"pic/physics/2023_04.png",revision:"ec38f41c15aab41e15c3f1957ad034fc"},{url:"pic/physics/2023_05.png",revision:"c9b5bec5987236bf6d60ed9e1266918d"},{url:"pic/physics/2023_06.png",revision:"4229731e3d56c9b7f72330dbb59f6b49"},{url:"pic/physics/2023_07.png",revision:"bd1ff572c332bc87ebedf9df5bb6440c"},{url:"pic/physics/2023_08.png",revision:"23882a451e39e7202f390d5d940287b5"},{url:"pic/physics/2023_09.png",revision:"4b8530544ecc781353dd54f13c182a79"},{url:"pic/physics/2023_10.png",revision:"e7213d62f2891c52e6bc441fc7a4f41e"},{url:"pic/physics/2312030/2312030_01.png",revision:"1fd42f6bc4338892d5c550606943adf3"},{url:"pic/physics/2312030/2312030_02.png",revision:"8fdc4cd7ebacd60ce7be6d8923092dd4"},{url:"pic/physics/2312030/2312030_03.png",revision:"eb9adcc33181d8fbafea73c747412d7b"},{url:"pic/physics/2312030/2312030_04.png",revision:"e2db152ab9f9b2f25d561c2990862585"},{url:"pic/physics/2312030/2312030_05.png",revision:"9c6a1a8f1acfa00def59d3a34c7cd8c3"},{url:"pic/physics/2312030/2312030_06.png",revision:"683e3dba85ac305c21a97f55db47402d"},{url:"pic/physics/2312030/2312030_07.png",revision:"b4b0af9b4420a0af4a2b3cf5671dd788"},{url:"pic/physics/2312030/2312030_08.png",revision:"dac029305a3b8cfbee8cb65161770f83"},{url:"pic/zhengzhi/2.png",revision:"e5f5d011c844942ac53c494cdd71ea94"},{url:"pic/zhengzhi/3.png",revision:"56ff99ed8f30f39f549936a6d51face4"},{url:"pic/zhengzhi/4.png",revision:"4be058e904142ff2317c0977e1029d9b"},{url:"pic/zhengzhi/5.png",revision:"9624697a8e43a36f6da245d9a4a7f7a2"},{url:"pic/zhengzhi/6.png",revision:"e6038627192c78e14ef1c493dc6cbd77"},{url:"pic/zhengzhi/7.png",revision:"546771807f722520cd15651b6c0be15e"},{url:"pic/zhengzhi/8.png",revision:"ebed91a2d5ba83dfe723bf9f7aefda69"},{url:"pic/zhengzhi/9.png",revision:"4d50631ef74bfd713c06b6964a094c32"},{url:"tags/GPT/index.html",revision:"5479ef6e9bc06523f9f22468defe033c"},{url:"tags/index.html",revision:"e625169c558d2b7f0c6d939e4e810d09"},{url:"tags/PPT/index.html",revision:"4b6149cc543131aace3b39149aa17058"},{url:"tags/作文/index.html",revision:"2af64425a67ff99734548e08372b4f25"},{url:"tags/博客/index.html",revision:"ec4ab0c106d2434700317da41b2c7d90"},{url:"tags/大学/index.html",revision:"fc6a2ec186514ee1c5b4bc528c04ece2"},{url:"tags/学习/index.html",revision:"30ec350473abd1bd7a819dd7e0818da7"},{url:"tags/物理创新实验设计/index.html",revision:"9d89c2f54fb45d9436e76be57d2c5eaa"},{url:"tags/转专业/index.html",revision:"d54d2058790067b43cdd24461c433999"}],{})}));
//# sourceMappingURL=service-worker.js.map
