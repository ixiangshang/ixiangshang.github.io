webpackJsonp([6,10],{74:function(t,e,a){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=a(81),s=i(n);e.default={components:{logo:s.default},props:["active"]}},76:function(t,e,a){e=t.exports=a(2)(),e.push([t.id,".fadeInLeft-transition[data-v-09f3de5b],.fadeOutLeft-transition[data-v-09f3de5b],.outLeftInRight-transition[data-v-09f3de5b]{transition:transform .3s ease-in-out}.fadeInLeft-enter[data-v-09f3de5b],.fadeInLeft-leave[data-v-09f3de5b],.outLeftInRight-enter[data-v-09f3de5b]{transform:translateX(100%)}.fadeOutLeft-enter[data-v-09f3de5b],.fadeOutLeft-leave[data-v-09f3de5b],.outLeftInRight-leave[data-v-09f3de5b]{transform:translateX(-100%)}","",{version:3,sources:["/./src/components/modules/layout.vue"],names:[],mappings:"AACA,6HAA6H,oCAAoC,CAChK,AACD,6GAA6G,0BAA0B,CACtI,AACD,+GAA+G,2BAA2B,CACzI",file:"layout.vue",sourcesContent:["\n.outLeftInRight-transition[data-v-09f3de5b],.fadeOutLeft-transition[data-v-09f3de5b],.fadeInLeft-transition[data-v-09f3de5b]{transition:transform .3s ease-in-out\n}\n.outLeftInRight-enter[data-v-09f3de5b],.fadeInLeft-enter[data-v-09f3de5b],.fadeInLeft-leave[data-v-09f3de5b]{transform:translateX(100%)\n}\n.outLeftInRight-leave[data-v-09f3de5b],.fadeOutLeft-enter[data-v-09f3de5b],.fadeOutLeft-leave[data-v-09f3de5b]{transform:translateX(-100%)\n}"],sourceRoot:"webpack://"}])},78:function(t,e,a){var i=a(76);"string"==typeof i&&(i=[[t.id,i,""]]);a(3)(i,{});i.locals&&(t.exports=i.locals)},80:function(t,e,a){a(78);var i=a(1)(a(74),a(82),"data-v-09f3de5b",null);t.exports=i.exports},81:function(t,e,a){var i=a(1)(null,a(83),null,null);t.exports=i.exports},82:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"layout"},[a("div",{staticClass:"layout-nav"},[a("div",{staticClass:"navbar"},[a("logo"),t._v(" "),a("div",{staticClass:"nav"},[a("router-link",{class:1===t.active?"active":"",attrs:{to:"/"}},[t._v("主頁")]),t._v(" "),a("router-link",{class:2===t.active?"active":"",attrs:{to:"/news"}},[t._v("介紹及業務")]),t._v(" "),a("router-link",{class:3===t.active?"active":"",attrs:{to:"/portfolio"}},[t._v("作品")]),t._v(" "),a("router-link",{class:4===t.active?"active":"",attrs:{to:"/member"}},[t._v("成員")]),t._v(" "),a("router-link",{class:5===t.active?"active":"",attrs:{to:"/aboute"}},[t._v("聯系我們")]),t._v(" "),a("div",{staticClass:"clean"})],1)],1)]),t._v(" "),a("div",{staticClass:"layout-content"},[a("transition",{staticClass:"slide-ul",attrs:{name:"indexlist"}},[t._t("default")],2)],1)])},staticRenderFns:[]}},83:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"156",height:"37",viewBox:"0 0 156 37"}},[a("image",{attrs:{id:"logo",width:"156",height:"37","xlink:href":"data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJwAAAAlCAQAAAAddEh7AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfhAxgAESc1EvFcAAAMyElEQVRo3r3ad5TV5ZkH8M/v3juNKQxNQFFA1hhZBcvaorFEbKgHUeLGI/YSC/bC4rFgIxr7GlH0GGWjrroiJwYTeyNuLBsLIGJWAjZEBWSGGabcO/fuH3P5zS2/O8xAzj78MT/e+jzf532f9t4gI6QapxrmBR9q0OH/n+psK+NvWiL6AgEyJed29kb1V+jve6mi9uF+rskD0pvGbCLnu9LBjnCe1/3eH33dg9mxTd02cq3D7ajKy17VXtQ7yD4qtctE7BgTqNBqvu8j+s50jEfM0VzQs58ZVvvG7/Nay1VJdyNVICZlfT5wHVrFVDvCONXuyi5Uq01T5CKj7e35HgEMlSo0R2h+Aw2TsFAHaqwp6t3GnYZLl7gJMXHLHVcEXGCCKw010Ds+Leh7zVzHudoiS3NaR7rSVhrEIvfJiCs329NSiYKNOqnR8uzX7u62wB2WFlyghHrTTDbLdCt7AFuZ0xzuZS/6yroSwmesEhOLZHqdpIz5lqgsupCtRjpErEgpgcPcaahlbvR50YpfmW6s3VzhohzZKuxuB2RCLIrphU4AoqgLuDKj7OZoD/kva/URU6leHyMda0/80jDX+SjicuVThT0d6UgN5prjTY1FI76W1KYO6yPmdwisc7s/RK6+l32LAE2Y4G5bWeZcz0fO+sRtHnSKNz2Wo4QWLPCWoAiblGHGKdMkUwq4LkvyucV+op/LnKFBXwlV4uGoAEcY7WpPdnMJIZ3t7+sUJ/h5gWWBpGeNsMLySBMfE4gZZGC4exevGVuKF9ilGieboc4S53i9JFdPO8YOBUqP4zlXRo7fw26GbtBLFAXhQW0L9V8v40ttmqyz3vfSxvsnMNI+5m4EuCDn6C+3InJMW5Edyp2fUuMKJ+lTBGy7gSrzzukIl5qCd1zg3QIFDFEmleUmZqYybxgmrtEPZK1oeQkuqgSyBi0XuLYQ+46QjdaQzYwb3S8hIyUlKWZoFri0ZyOvVylanmeOe0YZKRmDlBedOJJqdV5mGGicK+wi41mX+9+CsbXutovmrCLTGrW7WqDKB660TEueLY/Z2XCN/mptVn0hJcRUS0vLGKhvtrXaXvrY0QqLQlOetiIPni4T3hZhsbqjVq2bAFyFFtM8rrbgxGU0OMyTqrSod6DJjsEPHjY9wg3FjTRKKlwjkJFSIWZ7882Uzls95ioTLTc+C1wOJdQ42/baBIb4abZ1K7Oz6N6pMtyiNm9ml+4DZT0QPdaDMd3Pb/elpsjQaKV2gUY/8gz4H3f4z8hVmt1uSw05FjGpzfGO9qn58k0KKUmsKooBkZDSx2mgPRSuw9dWaBez3wZjKFMQkJSO4qMol6FML+dCuYR6JxqlTkZKUpmy7Dpr7abGOnUWmWN3z7rVF3mz68MT0xYBaLUz8ISFEfu2oT2K34T1bvSdLSyWNNWeWQ3+0guqtfixB2yZFX3DuYrrp7GXOUOwmSeuRgzHO77kiLR+lphqS/MLerZzpRc9V9KgXORgSzxSgu8SRySBlJmg1hXZ1nWWyGjCl2EUH3OiESpUKjfCw+ZuNHbLZyDI+19vaaXb1ErqkMIE+3vLQ/pnV4up0eBrLC1yPHVmmOQkh3glcuUdnIFZYeRaTB3RJ66LxtklbK3LftWENo4DHRh+v2fuZuSpKVQrk1CtUo062/jIh93M+DybAnbSavtJeLIHvrzOLSbhWd9E9pe53Ajz/UeJ+Z2+t1vgKu2roqg/1x694w3NWjQq85KgZLQTzUDXVe3QbqR/01+Ven3VqdHfElO8Gnkt+husJacn6Qt/t6fZpmnJkaBasxWSOTPr/dqZeNQ5JfLtE5yqwTUR2XEnxZS4H13bDrRfzvDiZDpjZp5eqiIiqu4oFzhGO6ug/8cecHSEgU6YYKrWUIWB1mzkNsloTcrD9mqLXJyTlQ52m8l4zJQSsO1sulbTu8ktOiXvFrjtjQm/Ww2yn8VWSYd4pwuir975xkKtLXG/Wmu0a9YiqQ31kdlHYIjti1rbNCgzukg5XYZltJsdhdku1hDJU3+3G+6lPCMQxXcqyiglwr8H5Fy9dfqZZo0pvg6FCcLweFMo1zkEYpY6p4czU+ZZbY1WHXlnPGODOgJpHcoM9l2YzE10nZ1wj2lRURgq3e5n2MpEc7sFrlsb19+xecObxBzqEffkOPHNKVrGcoTO9MqrZiyMjLBK0zDnOU+t9Wa4tYTvL3ezU8Boz7jOjSVy7QDJ0icuyFahuoYnfYt9NOeYzbUFAvUuqIjlzOx9AByzt0M0hxlpLnUoV+M5b6OviU63Lxa7sUT2QJkZLgSrLLK/aw1yedZHZ/LGlaMpdDg5fZ3AxU0qgHOlJcZb7c+2C1mfoEaZGtWGe8vcyLeB0tQlcHITgGNX13Tbv8zbDjbVAeJ4yk0WlBjZ103OwysO8L0p9jHLuapN9a14njmo1Rc/aAsxCKXoBG5b42Us0mRvUGWNeS7xiZl+Ey5zohPD723NC5frCeXmDalNAC5tHRrNsaqgsLTeliaotQ5VDsKn7vVIiTozP3KTSbjYRw7UR4MHDHO1k9U7R1teSDbAICwO48WKLlgTCBxtC6tc4sgscGVq/MVDXrNafbjMEh9IS1on7XktOR5s4xTkXdVNoRQ+MzXiQWaYnYwF81xruFkFNTiqne0lCyQc51K74lp32VdMzBBfuUG9843RJiGew+EQ/fAvjrfaf2vK9qY3ADfARMz2mpND0aq1utB6g0L3kXG3h7MidBb7elIT6aLNBS5Ae2SguioMlNJ+LR3hDs5zg7Oc5q8OsqukK92Fehtq3UkzNHrPGmNVo2/2/W47gzQZ6yjfmOAz1RLoswG43e3lVTNUq84Ts5mwAkEm5653CrJpAGwqZTDE0b5RaYOHDwRabG1IqI6oSt+xLleuv0C7WUZ5Kpub5/K/0lWg3gAMVKEFeyo330LnGiDAADWoF9ORUOECX7jAGv1z8oVMwV8U1ON6R7lXtTfFga75/THC49qVyWjUpjJbYqpQRjbhL6bx7jTQl870trR3nejLbvZZ4myDLZTCCPvgBaslrZHEa05S4T1pEn5hF6f42KZeoZ4K3uVVNyUeDCz1hGa1yrWotJ+trTRHmUC7uESJcvwRZtra987vfNSjW9j41lPh9wm2t94f7Ry+oH3ikw2dCTu6tsTzWT6lC/K93qZcuYXM3lPGq/6sAbUyqtxhsnkuEteIKtWRXvRI99hGo4siXtU2RmOcJeF3PrFXQS1xjIT3Y+7zYI8WihsWfo/Sr9sfCkRDt3nAtRjsJZdp1WSNdiQ1a3S6xwy2KiI4Ot59Rmhwocd7vV8/v7KNlWZJF0QPgYkedW/C33ss+CUO1qZchWEedGcvC5mb61UrXW6cMjMl9VFBNuIa7xi1TrU6b3TcZS4z0Hcu82iv96rwK4fjN97T+RuDLsroZwfNiV4sNzR8f6B/dM2gG+A2z8ZxqMnWurcoX7nBKEe52DU5627rOpNUWuJSf+q1ovq41ekCT7gngtdK/XT4rDfAve8FLWjT4TlBrwLgZE6BsfTjYDy6EoExblVptrlF/R+61qMutiA06yeYaie86fKiUHjjNMxtjpXwvCvCAkeQY5jKDRezrDfAveB6aZ1uIZUT9cXD0xQzQrNGGRkZMSlpCXFpY2ybA8JYjeokxCTE9THEQJUG2c0yV0X4vR38u+285dpsDSOTV2idZ6YrXOdDf7OPS/1MX9zn5oK3rkKKKlL8wjRj8CdTQj7iqAmTrd2NFvg0H7gN2uz6xVCufqvyzkp5eOLi4agyU0yyKlsri2uVUaVCub76hTMP8rKOLNyBQEwiC2Lgp7Zzbt7rQ8w4t9jZJ873rX74IZuKbxC8w28dIGFfFzvWICw33dMl6nD50nbFBlX2MsU4dbjf9TlvFClttna9BWK2cahB1vo4F7h4ZzKBt0OX0QXhlwXPbuUGgUWesTjb1u4RYxwE1lsvLaldRpuvfKZduxQCCR3atGf/pXRkT3JaXF9DJHKqY4GtjfGpc3ygjzMd5X019pd75Zc5zSrXOEvMek+6w+IeWNIEEln1b+0Wh6vHV27yuzzQF1plmONNEkiIa3afJbnAVdhKmz+Y6+Xwdndey4/My4Gnk9q8YqHXve6r0L9mLHCaw3T4QZNmaUlJHdoldUhKZisjmfDKZxR62bhkXlGxwxxNVnsDLWJ+Yg+BuEZvh2PafYyHHWitm7y+0bPWSQNllNkC/CCpXpPfutfSgheXt0xzmAFiOjRZ7m0vagpyuK51mEbv5D02l9lXP+/6Nu/1qPMk1ElpidBsPITkH0Vdz8IjHWqohPU+9EqBmwn8s7W+7vHOe5jsO3N9DMb6V3/xYmSxLK5aJTLatXa+7P8f1qIq6ODSVgsAAAAASUVORK5CYII="}})])},staticRenderFns:[]}},147:function(t,e,a){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=a(80),s=i(n),o=a(158);e.default={data:function(){return{slideList:o.homedata,currentIndex:0}},components:{layout:s.default},methods:{go:function(){var t=this;this.timer=setInterval(function(){t.autoPlay()},4e3)},stop:function(){clearInterval(this.timer),this.timer=null},change:function(t){this.currentIndex=t},autoPlay:function(){this.currentIndex++,this.currentIndex>this.slideList.length-1&&(this.currentIndex=0)}},created:function(){var t=this;this.timer=setInterval(function(){t.autoPlay()},4e3)}}},158:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.homedata=[{desc:"nhwc",image:a(226)},{desc:"hxrj",image:a(230)},{desc:"hxrj",image:a(231)},{desc:"hxrj",image:a(232)},{desc:"hxrj",image:a(233)},{desc:"hxrj",image:a(234)},{desc:"hxrj",image:a(235)},{desc:"hxrj",image:a(236)},{desc:"hxrj",image:a(237)},{desc:"hxrj",image:a(227)},{desc:"hxrj",image:a(228)},{desc:"hxrj",image:a(229)}]},206:function(t,e,a){e=t.exports=a(2)(),e.push([t.id,".indexlist-enter-active[data-v-7ae8a748],.indexlist-leave-active[data-v-7ae8a748]{transition:all 1s ease;opacity:1}.hide[data-v-7ae8a748],.indexlist-enter[data-v-7ae8a748],.indexlist-leave[data-v-7ae8a748]{opacity:0}.home .homeimg[data-v-7ae8a748]{position:absolute;height:603px;top:0;bottom:0;margin:auto 0}@media screen and (max-width:768px){.home .homeimg[data-v-7ae8a748]{margin-top:50px;position:static;height:auto}}","",{version:3,sources:["/./src/components/home.vue"],names:[],mappings:"AACA,kFAAkF,uBAAuB,SAAS,CACjH,AAGD,2FAAuB,SAAS,CAC/B,AACD,gCAAgC,kBAAkB,aAAa,MAAM,SAAS,aAAa,CAC1F,AACD,oCACA,gCAAgC,gBAAgB,gBAAgB,WAAW,CAC1E,CACA",file:"home.vue",sourcesContent:["\n.indexlist-enter-active[data-v-7ae8a748],.indexlist-leave-active[data-v-7ae8a748]{transition:all 1s ease;opacity:1\n}\n.indexlist-enter[data-v-7ae8a748],.indexlist-leave[data-v-7ae8a748]{opacity:0\n}\n.hide[data-v-7ae8a748]{opacity:0\n}\n.home .homeimg[data-v-7ae8a748]{position:absolute;height:603px;top:0;bottom:0;margin:auto 0\n}\n@media screen and (max-width:768px){\n.home .homeimg[data-v-7ae8a748]{margin-top:50px;position:static;height:auto\n}\n}"],sourceRoot:"webpack://"}])},221:function(t,e,a){var i=a(206);"string"==typeof i&&(i=[[t.id,i,""]]);a(3)(i,{});i.locals&&(t.exports=i.locals)},226:function(t,e,a){t.exports=a.p+"static/img/1.f45958f.jpg"},227:function(t,e,a){t.exports=a.p+"static/img/10.d4178d5.jpg"},228:function(t,e,a){t.exports=a.p+"static/img/11.03ec180.jpg"},229:function(t,e,a){t.exports=a.p+"static/img/12.6b5f5e2.jpg"},230:function(t,e,a){t.exports=a.p+"static/img/2.64bb3fc.jpg"},231:function(t,e,a){t.exports=a.p+"static/img/3.ef61fa0.jpg"},232:function(t,e,a){t.exports=a.p+"static/img/4.5882022.jpg"},233:function(t,e,a){t.exports=a.p+"static/img/5.9adc6c6.jpg"},234:function(t,e,a){t.exports=a.p+"static/img/6.e819b34.jpg"},235:function(t,e,a){t.exports=a.p+"static/img/7.79abdd6.jpg"},236:function(t,e,a){t.exports=a.p+"static/img/8.65df63b.jpg"},237:function(t,e,a){t.exports=a.p+"static/img/9.df628f2.jpg"},271:function(t,e,a){a(221);var i=a(1)(a(147),a(291),"data-v-7ae8a748",null);t.exports=i.exports},291:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("layout",{attrs:{active:1}},[a("transition-group",{attrs:{tag:"ul",name:"indexlist"}},t._l(t.slideList,function(e,i){return a("li",{directives:[{name:"show",rawName:"v-show",value:i===t.currentIndex,expression:"index===currentIndex"}],key:i,staticClass:"homeimg"},[a("img",{attrs:{src:e.image,alt:e.desc}})])}))],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=6.737f9f4cfbe6239c4b99.js.map