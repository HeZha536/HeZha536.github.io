if(!self.define){let e,i={};const c=(c,d)=>(c=new URL(c+".js",d).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(d,a)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let f={};const r=e=>c(e,n),s={module:{uri:n},exports:f,require:r};i[n]=Promise.all(d.map((e=>s[e]||r(e)))).then((e=>(a(...e),f)))}}define(["./workbox-b41f8fb8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2023/10/26/政治小组展示(10.26/index.html",revision:"71eeb99890830c807809bf657c98650a"},{url:"2023/10/29/物理创新实验设计(2023.10.29/index.html",revision:"91fa93d2008685317e72231223436bbf"},{url:"2023/12/03/物理实验创新设计中期研讨(2023.12.03/index.html",revision:"52430f4081f8236e79612be3c952145f"},{url:"2023/12/18/大学生心理健康课展示(2023.12.18/index.html",revision:"a5013abcd31abb7fc8deeddc8e9c0760"},{url:"2024/03/22/使用GPT的作文修改流程/index.html",revision:"1b0e0d81982ba18d88d73a759cd0f5da"},{url:"2024/05/12/关于未来走向/index.html",revision:"aa9d6aa4096d3c6c76adb56e050c2db0"},{url:"about/index.html",revision:"f25e7d8e76dae26887304ee1a21ad01d"},{url:"archives/2023/10/index.html",revision:"8cab4505fa95479df3e127aba88ae597"},{url:"archives/2023/12/index.html",revision:"998c254f5b0df64c2ff1f88e990e6e76"},{url:"archives/2023/index.html",revision:"19b7163ef698821b2a5dafcbbe0a7f09"},{url:"archives/2024/03/index.html",revision:"677fb19afd362876e221bc458b00dbca"},{url:"archives/2024/05/index.html",revision:"079f2beac9de22ee8b78573dd1d16210"},{url:"archives/2024/index.html",revision:"0f2f936ac94f3ba1c4fe60f824ffc9ba"},{url:"archives/index.html",revision:"8059c30c95f84221c37d5c07b1e10f9d"},{url:"categories/index.html",revision:"618f8a8362833d4ff46e6d6b1d90cb7a"},{url:"categories/学习生活/index.html",revision:"581f9405cfbf830da6edfeaca170e582"},{url:"categories/未来规划/index.html",revision:"10c803c792d7f3e88df14e5fac0d14f7"},{url:"css/index.css",revision:"9d3065074a1d35a6e7f0145f01ffa11c"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/mentalhealth/202312180_01.png",revision:"2c11098f66a6c0eb1efd61a1978409c3"},{url:"img/mentalhealth/202312180_02.png",revision:"c8c240db3d362783a2c4d3d1dba6b989"},{url:"img/mentalhealth/202312180_03.png",revision:"6515e2b89da53e33f6c909b023acd2c3"},{url:"img/mentalhealth/202312180_04.png",revision:"f14f63f102001eb78bf7d5132b690f49"},{url:"img/mentalhealth/202312180_05.png",revision:"896c4d09f0ff1d8f99501c607d99dbe6"},{url:"img/mentalhealth/202312180_06.png",revision:"609fed9345bd46fc9f785023c3910557"},{url:"img/mentalhealth/202312180_07.png",revision:"1d5d4a84f24be0aa197df345b00b277f"},{url:"img/mentalhealth/202312180_08.png",revision:"3e1dcd4d445c16d6c144d3795538950d"},{url:"img/physics/2023_01.png",revision:"d96be7f9be190a2abff9f865d40f59af"},{url:"img/physics/2023_02.png",revision:"111ff9eafa3f968ddb578299fa3aa073"},{url:"img/physics/2023_03.png",revision:"c64526a20d8eb4c2116f1180fc7d44f0"},{url:"img/physics/2023_04.png",revision:"ec38f41c15aab41e15c3f1957ad034fc"},{url:"img/physics/2023_05.png",revision:"c9b5bec5987236bf6d60ed9e1266918d"},{url:"img/physics/2023_06.png",revision:"4229731e3d56c9b7f72330dbb59f6b49"},{url:"img/physics/2023_07.png",revision:"bd1ff572c332bc87ebedf9df5bb6440c"},{url:"img/physics/2023_08.png",revision:"23882a451e39e7202f390d5d940287b5"},{url:"img/physics/2023_09.png",revision:"4b8530544ecc781353dd54f13c182a79"},{url:"img/physics/2023_10.png",revision:"3de0b17f937f1082133c3431eb99eaa5"},{url:"img/physics/2312030/2312030_01.png",revision:"2eddce6f5ef9420f20c68d700c106efe"},{url:"img/physics/2312030/2312030_02.png",revision:"8fdc4cd7ebacd60ce7be6d8923092dd4"},{url:"img/physics/2312030/2312030_03.png",revision:"eb9adcc33181d8fbafea73c747412d7b"},{url:"img/physics/2312030/2312030_04.png",revision:"e2db152ab9f9b2f25d561c2990862585"},{url:"img/physics/2312030/2312030_05.png",revision:"9c6a1a8f1acfa00def59d3a34c7cd8c3"},{url:"img/physics/2312030/2312030_06.png",revision:"683e3dba85ac305c21a97f55db47402d"},{url:"img/physics/2312030/2312030_07.png",revision:"b4b0af9b4420a0af4a2b3cf5671dd788"},{url:"img/physics/2312030/2312030_08.png",revision:"77e4629ddc7724391e9c735e91c1a7cc"},{url:"img/zhengzhi/2.png",revision:"e5f5d011c844942ac53c494cdd71ea94"},{url:"img/zhengzhi/3.png",revision:"56ff99ed8f30f39f549936a6d51face4"},{url:"img/zhengzhi/4.png",revision:"4be058e904142ff2317c0977e1029d9b"},{url:"img/zhengzhi/5.png",revision:"9624697a8e43a36f6da245d9a4a7f7a2"},{url:"img/zhengzhi/6.png",revision:"e6038627192c78e14ef1c493dc6cbd77"},{url:"img/zhengzhi/7.png",revision:"546771807f722520cd15651b6c0be15e"},{url:"img/zhengzhi/8.png",revision:"ebed91a2d5ba83dfe723bf9f7aefda69"},{url:"img/zhengzhi/9.png",revision:"4d50631ef74bfd713c06b6964a094c32"},{url:"index.html",revision:"455fbeca44216ebe2c7b32952a40c18c"},{url:"js/main.js",revision:"6b81ae582288482e51573bbc5226dbd6"},{url:"js/search/algolia.js",revision:"4491ac1d470a1693a502a9d09034aa21"},{url:"js/search/local-search.js",revision:"9da6b76672a143c8c8449770a8d259f3"},{url:"js/tw_cn.js",revision:"707135460b9ad67147ebebd717413d9d"},{url:"js/utils.js",revision:"3df06119fbaa236c2fbb2dbc6e120a86"},{url:"link/index.html",revision:"c1885b8eddb5f29c7cc73bf426bc14b0"},{url:"pic/mentalhealth/202312180_01.png",revision:"2c03b5913836be73bde351a235dd576f"},{url:"pic/mentalhealth/202312180_02.png",revision:"c8c240db3d362783a2c4d3d1dba6b989"},{url:"pic/mentalhealth/202312180_03.png",revision:"6515e2b89da53e33f6c909b023acd2c3"},{url:"pic/mentalhealth/202312180_04.png",revision:"f14f63f102001eb78bf7d5132b690f49"},{url:"pic/mentalhealth/202312180_05.png",revision:"896c4d09f0ff1d8f99501c607d99dbe6"},{url:"pic/mentalhealth/202312180_06.png",revision:"609fed9345bd46fc9f785023c3910557"},{url:"pic/mentalhealth/202312180_07.png",revision:"1d5d4a84f24be0aa197df345b00b277f"},{url:"pic/mentalhealth/202312180_08.png",revision:"e55c3f42637e4474d9ae826c18bb7af8"},{url:"pic/physics/2023_01.png",revision:"1ec0fb54f703b3597a79a2efc665c7ce"},{url:"pic/physics/2023_02.png",revision:"111ff9eafa3f968ddb578299fa3aa073"},{url:"pic/physics/2023_03.png",revision:"c64526a20d8eb4c2116f1180fc7d44f0"},{url:"pic/physics/2023_04.png",revision:"ec38f41c15aab41e15c3f1957ad034fc"},{url:"pic/physics/2023_05.png",revision:"c9b5bec5987236bf6d60ed9e1266918d"},{url:"pic/physics/2023_06.png",revision:"4229731e3d56c9b7f72330dbb59f6b49"},{url:"pic/physics/2023_07.png",revision:"bd1ff572c332bc87ebedf9df5bb6440c"},{url:"pic/physics/2023_08.png",revision:"23882a451e39e7202f390d5d940287b5"},{url:"pic/physics/2023_09.png",revision:"4b8530544ecc781353dd54f13c182a79"},{url:"pic/physics/2023_10.png",revision:"e7213d62f2891c52e6bc441fc7a4f41e"},{url:"pic/physics/2312030/2312030_01.png",revision:"1fd42f6bc4338892d5c550606943adf3"},{url:"pic/physics/2312030/2312030_02.png",revision:"8fdc4cd7ebacd60ce7be6d8923092dd4"},{url:"pic/physics/2312030/2312030_03.png",revision:"eb9adcc33181d8fbafea73c747412d7b"},{url:"pic/physics/2312030/2312030_04.png",revision:"e2db152ab9f9b2f25d561c2990862585"},{url:"pic/physics/2312030/2312030_05.png",revision:"9c6a1a8f1acfa00def59d3a34c7cd8c3"},{url:"pic/physics/2312030/2312030_06.png",revision:"683e3dba85ac305c21a97f55db47402d"},{url:"pic/physics/2312030/2312030_07.png",revision:"b4b0af9b4420a0af4a2b3cf5671dd788"},{url:"pic/physics/2312030/2312030_08.png",revision:"dac029305a3b8cfbee8cb65161770f83"},{url:"pic/zhengzhi/2.png",revision:"e5f5d011c844942ac53c494cdd71ea94"},{url:"pic/zhengzhi/3.png",revision:"56ff99ed8f30f39f549936a6d51face4"},{url:"pic/zhengzhi/4.png",revision:"4be058e904142ff2317c0977e1029d9b"},{url:"pic/zhengzhi/5.png",revision:"9624697a8e43a36f6da245d9a4a7f7a2"},{url:"pic/zhengzhi/6.png",revision:"e6038627192c78e14ef1c493dc6cbd77"},{url:"pic/zhengzhi/7.png",revision:"546771807f722520cd15651b6c0be15e"},{url:"pic/zhengzhi/8.png",revision:"ebed91a2d5ba83dfe723bf9f7aefda69"},{url:"pic/zhengzhi/9.png",revision:"4d50631ef74bfd713c06b6964a094c32"},{url:"tags/index.html",revision:"5273171c9f6d741eed87995f1be12226"},{url:"tags/PPT/index.html",revision:"e1c752da2bb0ec315e463761089733ea"},{url:"tags/大学/index.html",revision:"5a63fae29d3f0db0e63a0a1bff714288"},{url:"tags/学习/index.html",revision:"0a55bdbebae2dc5a42a9eaa5872c227f"},{url:"tags/政治小组展示/index.html",revision:"7878749f3baf822718423ee9851631c0"},{url:"tags/物理创新实验设计/index.html",revision:"69fda6937f54ebd0da2dc5ab0a095229"}],{})}));
//# sourceMappingURL=service-worker.js.map
