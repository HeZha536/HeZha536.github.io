if(!self.define){let e,i={};const c=(c,d)=>(c=new URL(c+".js",d).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(d,a)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let f={};const r=e=>c(e,n),s={module:{uri:n},exports:f,require:r};i[n]=Promise.all(d.map((e=>s[e]||r(e)))).then((e=>(a(...e),f)))}}define(["./workbox-b41f8fb8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2023/10/26/政治小组展示(10.26/index.html",revision:"6092f97717e08fbec13ea14a4bc71b04"},{url:"2023/10/29/物理创新实验设计(2023.10.29/index.html",revision:"577e04281720209b5934c166585a7721"},{url:"2023/12/03/物理实验创新设计中期研讨(2023.12.03/index.html",revision:"b5a86c68c9b68dfc8f63283d32146c54"},{url:"2023/12/18/大学生心理健康课展示(2023.12.18/index.html",revision:"18e4866a3eae5feba62ddf85286b79fe"},{url:"2024/03/22/使用GPT的作文修改流程/index.html",revision:"21d5d1c02fc85127f546bcd375c4bc0d"},{url:"2024/05/12/关于未来走向/index.html",revision:"0f9acd52a821fb051d771aa8231527ef"},{url:"2024/05/20/转计算机专业相关/index.html",revision:"3e889483d70def563dd5d968edb7972f"},{url:"2024/06/03/关于openwrt路由器及哆点Drcom校园网WEB自动登录/index.html",revision:"850c1d4097cc75ce5153beebac69a4a0"},{url:"404.html",revision:"9d88e7ecbf09feb24a510e22459dcac3"},{url:"about/index.html",revision:"7c2ae88b2ba1b9aa5c15482507c13d33"},{url:"archives/2023/10/index.html",revision:"186a05844a262f18b20c84fa7623ed77"},{url:"archives/2023/12/index.html",revision:"a4cb63e89b488d0e6ab22010169483ff"},{url:"archives/2023/index.html",revision:"f8bc2122b51e250b155af10bfbd87af5"},{url:"archives/2024/03/index.html",revision:"4c6904a0be85e6e493f510062a0d9805"},{url:"archives/2024/05/index.html",revision:"49995cde2397857780073cec0d1b2b01"},{url:"archives/2024/06/index.html",revision:"f85a07e63441a4096e7f2a7db2cca0b8"},{url:"archives/2024/index.html",revision:"e52d5668d7d81f5ed0a92a796fb7b094"},{url:"archives/index.html",revision:"f5daeb495e8811177fcf0ba269b3b41f"},{url:"categories/index.html",revision:"619ac187b7fbcac57a2bdd1f7defd890"},{url:"categories/学习生活/index.html",revision:"7b5bac3e011f40a924fac79206da8d6c"},{url:"categories/未来规划/index.html",revision:"5c459961472352861ed9b15305544566"},{url:"categories/网络/index.html",revision:"0f94409fe2ac037bcf9eeda95ddf21da"},{url:"css/index.css",revision:"08e79715f8fae0de0677dfece808ef5f"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/mentalhealth/202312180_01.png",revision:"2c11098f66a6c0eb1efd61a1978409c3"},{url:"img/mentalhealth/202312180_02.png",revision:"c8c240db3d362783a2c4d3d1dba6b989"},{url:"img/mentalhealth/202312180_03.png",revision:"6515e2b89da53e33f6c909b023acd2c3"},{url:"img/mentalhealth/202312180_04.png",revision:"f14f63f102001eb78bf7d5132b690f49"},{url:"img/mentalhealth/202312180_05.png",revision:"896c4d09f0ff1d8f99501c607d99dbe6"},{url:"img/mentalhealth/202312180_06.png",revision:"609fed9345bd46fc9f785023c3910557"},{url:"img/mentalhealth/202312180_07.png",revision:"1d5d4a84f24be0aa197df345b00b277f"},{url:"img/mentalhealth/202312180_08.png",revision:"3e1dcd4d445c16d6c144d3795538950d"},{url:"img/physics/2023_01.png",revision:"d96be7f9be190a2abff9f865d40f59af"},{url:"img/physics/2023_02.png",revision:"111ff9eafa3f968ddb578299fa3aa073"},{url:"img/physics/2023_03.png",revision:"c64526a20d8eb4c2116f1180fc7d44f0"},{url:"img/physics/2023_04.png",revision:"ec38f41c15aab41e15c3f1957ad034fc"},{url:"img/physics/2023_05.png",revision:"c9b5bec5987236bf6d60ed9e1266918d"},{url:"img/physics/2023_06.png",revision:"4229731e3d56c9b7f72330dbb59f6b49"},{url:"img/physics/2023_07.png",revision:"bd1ff572c332bc87ebedf9df5bb6440c"},{url:"img/physics/2023_08.png",revision:"23882a451e39e7202f390d5d940287b5"},{url:"img/physics/2023_09.png",revision:"4b8530544ecc781353dd54f13c182a79"},{url:"img/physics/2023_10.png",revision:"3de0b17f937f1082133c3431eb99eaa5"},{url:"img/physics/2312030/2312030_01.png",revision:"2eddce6f5ef9420f20c68d700c106efe"},{url:"img/physics/2312030/2312030_02.png",revision:"8fdc4cd7ebacd60ce7be6d8923092dd4"},{url:"img/physics/2312030/2312030_03.png",revision:"eb9adcc33181d8fbafea73c747412d7b"},{url:"img/physics/2312030/2312030_04.png",revision:"e2db152ab9f9b2f25d561c2990862585"},{url:"img/physics/2312030/2312030_05.png",revision:"9c6a1a8f1acfa00def59d3a34c7cd8c3"},{url:"img/physics/2312030/2312030_06.png",revision:"683e3dba85ac305c21a97f55db47402d"},{url:"img/physics/2312030/2312030_07.png",revision:"b4b0af9b4420a0af4a2b3cf5671dd788"},{url:"img/physics/2312030/2312030_08.png",revision:"77e4629ddc7724391e9c735e91c1a7cc"},{url:"img/zhengzhi/2.png",revision:"e5f5d011c844942ac53c494cdd71ea94"},{url:"img/zhengzhi/3.png",revision:"56ff99ed8f30f39f549936a6d51face4"},{url:"img/zhengzhi/4.png",revision:"4be058e904142ff2317c0977e1029d9b"},{url:"img/zhengzhi/5.png",revision:"9624697a8e43a36f6da245d9a4a7f7a2"},{url:"img/zhengzhi/6.png",revision:"e6038627192c78e14ef1c493dc6cbd77"},{url:"img/zhengzhi/7.png",revision:"546771807f722520cd15651b6c0be15e"},{url:"img/zhengzhi/8.png",revision:"ebed91a2d5ba83dfe723bf9f7aefda69"},{url:"img/zhengzhi/9.png",revision:"4d50631ef74bfd713c06b6964a094c32"},{url:"index.html",revision:"ec3ca5aaf42d2273c8584ad5b9707f26"},{url:"js/main.js",revision:"6b81ae582288482e51573bbc5226dbd6"},{url:"js/search/algolia.js",revision:"4491ac1d470a1693a502a9d09034aa21"},{url:"js/search/local-search.js",revision:"9da6b76672a143c8c8449770a8d259f3"},{url:"js/tw_cn.js",revision:"707135460b9ad67147ebebd717413d9d"},{url:"js/utils.js",revision:"3df06119fbaa236c2fbb2dbc6e120a86"},{url:"link/index.html",revision:"d451f97afea588238d8afd42b94e023a"},{url:"pic/mentalhealth/202312180_01.png",revision:"2c03b5913836be73bde351a235dd576f"},{url:"pic/mentalhealth/202312180_02.png",revision:"c8c240db3d362783a2c4d3d1dba6b989"},{url:"pic/mentalhealth/202312180_03.png",revision:"6515e2b89da53e33f6c909b023acd2c3"},{url:"pic/mentalhealth/202312180_04.png",revision:"f14f63f102001eb78bf7d5132b690f49"},{url:"pic/mentalhealth/202312180_05.png",revision:"896c4d09f0ff1d8f99501c607d99dbe6"},{url:"pic/mentalhealth/202312180_06.png",revision:"609fed9345bd46fc9f785023c3910557"},{url:"pic/mentalhealth/202312180_07.png",revision:"1d5d4a84f24be0aa197df345b00b277f"},{url:"pic/mentalhealth/202312180_08.png",revision:"e55c3f42637e4474d9ae826c18bb7af8"},{url:"pic/physics/2023_01.png",revision:"1ec0fb54f703b3597a79a2efc665c7ce"},{url:"pic/physics/2023_02.png",revision:"111ff9eafa3f968ddb578299fa3aa073"},{url:"pic/physics/2023_03.png",revision:"c64526a20d8eb4c2116f1180fc7d44f0"},{url:"pic/physics/2023_04.png",revision:"ec38f41c15aab41e15c3f1957ad034fc"},{url:"pic/physics/2023_05.png",revision:"c9b5bec5987236bf6d60ed9e1266918d"},{url:"pic/physics/2023_06.png",revision:"4229731e3d56c9b7f72330dbb59f6b49"},{url:"pic/physics/2023_07.png",revision:"bd1ff572c332bc87ebedf9df5bb6440c"},{url:"pic/physics/2023_08.png",revision:"23882a451e39e7202f390d5d940287b5"},{url:"pic/physics/2023_09.png",revision:"4b8530544ecc781353dd54f13c182a79"},{url:"pic/physics/2023_10.png",revision:"e7213d62f2891c52e6bc441fc7a4f41e"},{url:"pic/physics/2312030/2312030_01.png",revision:"1fd42f6bc4338892d5c550606943adf3"},{url:"pic/physics/2312030/2312030_02.png",revision:"8fdc4cd7ebacd60ce7be6d8923092dd4"},{url:"pic/physics/2312030/2312030_03.png",revision:"eb9adcc33181d8fbafea73c747412d7b"},{url:"pic/physics/2312030/2312030_04.png",revision:"e2db152ab9f9b2f25d561c2990862585"},{url:"pic/physics/2312030/2312030_05.png",revision:"9c6a1a8f1acfa00def59d3a34c7cd8c3"},{url:"pic/physics/2312030/2312030_06.png",revision:"683e3dba85ac305c21a97f55db47402d"},{url:"pic/physics/2312030/2312030_07.png",revision:"b4b0af9b4420a0af4a2b3cf5671dd788"},{url:"pic/physics/2312030/2312030_08.png",revision:"dac029305a3b8cfbee8cb65161770f83"},{url:"pic/weekdaily/cats_typing.gif",revision:"63ce41d34f90e2b8e34611c3d6eff779"},{url:"pic/zhengzhi/2.png",revision:"e5f5d011c844942ac53c494cdd71ea94"},{url:"pic/zhengzhi/3.png",revision:"56ff99ed8f30f39f549936a6d51face4"},{url:"pic/zhengzhi/4.png",revision:"4be058e904142ff2317c0977e1029d9b"},{url:"pic/zhengzhi/5.png",revision:"9624697a8e43a36f6da245d9a4a7f7a2"},{url:"pic/zhengzhi/6.png",revision:"e6038627192c78e14ef1c493dc6cbd77"},{url:"pic/zhengzhi/7.png",revision:"546771807f722520cd15651b6c0be15e"},{url:"pic/zhengzhi/8.png",revision:"ebed91a2d5ba83dfe723bf9f7aefda69"},{url:"pic/zhengzhi/9.png",revision:"4d50631ef74bfd713c06b6964a094c32"},{url:"tags/GPT/index.html",revision:"e33ccb3a1fd386c0e59dcb526c3b941c"},{url:"tags/index.html",revision:"35ee50b9bd7e27f2b756dcec035312d2"},{url:"tags/PPT/index.html",revision:"b8e25af8273a9dd66bcf74bcb5e0f29b"},{url:"tags/作文/index.html",revision:"aa80fe2add262dcab5e59e2bf04b1d4e"},{url:"tags/大学/index.html",revision:"319fdc8714da9d48b5e4b231d3872ee1"},{url:"tags/学习/index.html",revision:"b350a0b122dcb1cc4b0dfa26d9d68c4a"},{url:"tags/校园网自动登录/index.html",revision:"ec620f7a00e42a4861aae2b1ecef619a"},{url:"tags/物理创新实验设计/index.html",revision:"aecd4ff8c735f238c3f9cdbb8981eb95"},{url:"tags/路由器/index.html",revision:"440056b2afcf38dc263ce6989ebb1d8c"},{url:"tags/转专业/index.html",revision:"f5f5588d2b1c31d1fff6a9f67cfa5685"}],{})}));
//# sourceMappingURL=service-worker.js.map
