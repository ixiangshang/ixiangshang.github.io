webpackJsonp([7,10],{191:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(199),o=i(s);e.default={components:{logo:o.default},methods:{menu:function(){this.scroll=document.body.scrollTop,console.log(this.scroll),this.scroll>100}},mounted:function(){window.addEventListener("scroll",this.menu)},props:["active"]}},194:function(t,e,n){e=t.exports=n(2)(),e.push([t.id,".fadeInLeft-transition[data-v-09f3de5b],.fadeOutLeft-transition[data-v-09f3de5b],.outLeftInRight-transition[data-v-09f3de5b]{transition:transform .3s ease-in-out}.fadeInLeft-enter[data-v-09f3de5b],.fadeInLeft-leave[data-v-09f3de5b],.outLeftInRight-enter[data-v-09f3de5b]{transform:translateX(100%)}.fadeOutLeft-enter[data-v-09f3de5b],.fadeOutLeft-leave[data-v-09f3de5b],.outLeftInRight-leave[data-v-09f3de5b]{transform:translateX(-100%)}","",{version:3,sources:["/./src/components/modules/layout.vue"],names:[],mappings:"AACA,6HAA6H,oCAAoC,CAChK,AACD,6GAA6G,0BAA0B,CACtI,AACD,+GAA+G,2BAA2B,CACzI",file:"layout.vue",sourcesContent:["\n.outLeftInRight-transition[data-v-09f3de5b],.fadeOutLeft-transition[data-v-09f3de5b],.fadeInLeft-transition[data-v-09f3de5b]{transition:transform .3s ease-in-out\n}\n.outLeftInRight-enter[data-v-09f3de5b],.fadeInLeft-enter[data-v-09f3de5b],.fadeInLeft-leave[data-v-09f3de5b]{transform:translateX(100%)\n}\n.outLeftInRight-leave[data-v-09f3de5b],.fadeOutLeft-enter[data-v-09f3de5b],.fadeOutLeft-leave[data-v-09f3de5b]{transform:translateX(-100%)\n}"],sourceRoot:"webpack://"}])},196:function(t,e,n){var i=n(194);"string"==typeof i&&(i=[[t.id,i,""]]);n(3)(i,{});i.locals&&(t.exports=i.locals)},198:function(t,e,n){n(196);var i=n(1)(n(191),n(200),"data-v-09f3de5b",null);t.exports=i.exports},199:function(t,e,n){var i=n(1)(null,n(201),null,null);t.exports=i.exports},200:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout"},[n("div",{staticClass:"layout-nav"},[n("div",{staticClass:"navbar"},[n("logo"),t._v(" "),n("div",{staticClass:"nav"},[n("router-link",{class:1===t.active?"active":"",attrs:{to:"/"}},[t._v("主页")]),t._v(" "),n("router-link",{class:2===t.active?"active":"",attrs:{to:"/news"}},[t._v("公司及新闻")]),t._v(" "),n("router-link",{class:3===t.active?"active":"",attrs:{to:"/portfolio"}},[t._v("业绩")]),t._v(" "),n("router-link",{class:4===t.active?"active":"",attrs:{to:"/member"}},[t._v("团队")]),t._v(" "),n("router-link",{class:5===t.active?"active":"",attrs:{to:"/aboute"}},[t._v("联络")]),t._v(" "),n("div",{staticClass:"clean"})],1)],1)]),t._v(" "),n("div",{staticClass:"layout-content"},[n("transition",{staticClass:"slide-ul",attrs:{name:"indexlist"}},[t._t("default")],2)],1)])},staticRenderFns:[]}},201:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"156",height:"37",viewBox:"0 0 156 37"}},[n("image",{attrs:{id:"logo",width:"156",height:"37","xlink:href":"data:img/png;base64,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"}})])},staticRenderFns:[]}},251:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(198),o=i(s),a=n(372),A=i(a),r=n(255);e.default={components:{Layout:o.default,List:A.default},data:function(){return{newsdata:r.newsdata}}}},252:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{newConHeight:80,btnstr:""}},props:["database"],computed:{newStyle:function(t){return 80===this.newConHeight?(this.btnstr="更多 >>",{"max-height":this.newConHeight+"px"}):(this.btnstr="缩小 <",{"max-height":"inherit"})}},methods:{showContent:function(){var t=this.newConHeight;this.newConHeight=80===t?200:80,console.log("newStyle::")}}}},255:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={company:[{title:"<i>公司</i>简介",content:"「相上影视」由成立于上世纪九十年代的「刘是导演工作室」改制发展而来；<br/> 「相上影视」自成立之日起就拥有了丰富的、傲人的成功经验和专业水准。<br/><br/> 「相上影视」团队聚合了业内一流专业人士，充分满足客户的高、中端需求。<br/>而且它是开放的，是每一个高手的平台。 「相上影视」一心一意致力于影视产品的创作、制作。<br/> 能够创作电影、纪录片、专题宣传片和广告片。<br/><br/> 「相上影视」以往的作品证明，我们拥有高品质的制作水平，出色的艺术创作力，<br/> 积极的商业态度。这皆因我们团队的资深经验和专业能力，<br/> 这是我们傲人的财富，也是完成客户工作的坚实保证。<br/><br/> 「相上影视」长期致力于提升影像制品品质和审美层次，期望对中国文化做出贡献，这是我们的重大社会责任。我们还积极参与对贫困族群提供帮助，<br/> 公司成立之初的第一个项目，就是参与贫困救助工作。这说明我们的责任就是行动。<br/><br/> 「相上影视」认为，未来中国是全球最大的影像消费市场，也应该具有与先进国家可以比肩的影像品质和品位。<br/> 我们的发展目标就是使客户和市场获得不断提升的高品质、高品位制品；<br/> 使我们的公司成员不仅收入颇丰更能获得令人骄傲的职业地位。"}],news:[]};e.newsdata=n},287:function(t,e,n){e=t.exports=n(2)(),e.push([t.id,'.fix,.newslist{clear:both}.newslist{margin-top:30px}.newslist img{display:inline-block;width:211px;height:151px;float:left;background:#333}.newslist .con{margin-left:221px;line-height:20px;font-size:12px}.newslist .con .tits{color:#f3f3f3}.newslist .con .more{padding:10px 0}.newslist .con .more b{font-weight:400;display:block;color:#fff;cursor:pointer}.newslist .con .text{line-height:25px;color:#9e9e9e;font-size:12px;position:relative;line-height:20px;overflow:hidden}.newslist .con .text:after{content:"\\A0";position:absolute;bottom:0;right:5px;padding-left:22px;background:linear-gradient(90deg,transparent,#000 55%)}.newslist .con .time{color:#9e9e9e}@media screen and (min-width:320px) and (max-width:768px){.newslist .con{margin:15px 0 0}.newslist .con .more{float:left}.newslist .con .time{float:right;padding:10px 0 0}.newslist img{float:none}}',"",{version:3,sources:["/./src/components/news/list.vue"],names:[],mappings:"AAGA,eAFK,UAAU,CAGd,AADD,UAAU,eAAgB,CACzB,AACD,cAAc,qBAAqB,YAAY,aAAa,WAAW,eAAe,CACrF,AACD,eAAe,kBAAkB,iBAAiB,cAAc,CAC/D,AACD,qBAAqB,aAAa,CACjC,AACD,qBAAqB,cAAqB,CACzC,AACD,uBAAuB,gBAAmB,cAAc,WAAW,cAAc,CAChF,AACD,qBAAqB,iBAAiB,cAAc,eAAe,kBAAkB,iBAAiB,eAAe,CACpH,AACD,2BAA2B,cAAgB,kBAAkB,SAAS,UAAU,kBAAkB,sDAA2D,CAC5J,AACD,qBAAqB,aAAa,CACjC,AACD,0DACA,eAAe,eAAiB,CAC/B,AACD,qBAAqB,UAAU,CAC9B,AACD,qBAAqB,YAAY,gBAAkB,CAClD,AACD,cAAc,UAAU,CACvB,CACA",file:"list.vue",sourcesContent:['\n.fix{clear:both\n}\n.newslist{margin-top:30px;clear:both\n}\n.newslist img{display:inline-block;width:211px;height:151px;float:left;background:#333\n}\n.newslist .con{margin-left:221px;line-height:20px;font-size:12px\n}\n.newslist .con .tits{color:#f3f3f3\n}\n.newslist .con .more{padding:10px 0 10px 0\n}\n.newslist .con .more b{font-weight:normal;display:block;color:#fff;cursor:pointer\n}\n.newslist .con .text{line-height:25px;color:#9e9e9e;font-size:12px;position:relative;line-height:20px;overflow:hidden\n}\n.newslist .con .text:after{content:"\\00A0";position:absolute;bottom:0;right:5px;padding-left:22px;background:linear-gradient(to right, transparent, #000 55%)\n}\n.newslist .con .time{color:#9e9e9e\n}\n@media screen and (min-width:320px) and (max-width:768px){\n.newslist .con{margin:15px 0 0 0\n}\n.newslist .con .more{float:left\n}\n.newslist .con .time{float:right;padding:10px 0 0 0\n}\n.newslist img{float:none\n}\n}'],sourceRoot:"webpack://"}])},288:function(t,e,n){e=t.exports=n(2)(),e.push([t.id,".newscontent{padding:50px 0;color:#fff;font-size:14px;color:#fdfdfd}.newscontent .title{padding-top:40px}.newscontent .title i{border-bottom:2px solid #fff;display:inline-block;padding:0 0 20px;font-style:normal}.newscontent p{padding-top:20px;width:587px;color:#fff;line-height:26px;font-size:13px}@media screen and (min-width:320px) and (max-width:768px){.newscontent{padding:30px}.newscontent p{width:auto}}","",{version:3,sources:["/./src/components/news/index.vue"],names:[],mappings:"AACA,aAAa,eAAe,WAAW,eAAe,aAAa,CAClE,AACD,oBAAoB,gBAAgB,CACnC,AACD,sBAAsB,6BAAgC,qBAAqB,iBAAmB,iBAAkB,CAC/G,AACD,eAAe,iBAAiB,YAAY,WAAW,iBAAiB,cAAc,CACrF,AACD,0DACA,aAAa,YAAY,CACxB,AACD,eAAe,UAAU,CACxB,CACA",file:"index.vue",sourcesContent:["\n.newscontent{padding:50px 0;color:#fff;font-size:14px;color:#fdfdfd\n}\n.newscontent .title{padding-top:40px\n}\n.newscontent .title i{border-bottom:2px solid #ffffff;display:inline-block;padding:0 0 20px 0;font-style:initial\n}\n.newscontent p{padding-top:20px;width:587px;color:#fff;line-height:26px;font-size:13px\n}\n@media screen and (min-width:320px) and (max-width:768px){\n.newscontent{padding:30px\n}\n.newscontent p{width:auto\n}\n}"],sourceRoot:"webpack://"}])},302:function(t,e,n){var i=n(287);"string"==typeof i&&(i=[[t.id,i,""]]);n(3)(i,{});i.locals&&(t.exports=i.locals)},303:function(t,e,n){var i=n(288);"string"==typeof i&&(i=[[t.id,i,""]]);n(3)(i,{});i.locals&&(t.exports=i.locals)},371:function(t,e,n){n(303);var i=n(1)(n(251),n(378),null,null);t.exports=i.exports},372:function(t,e,n){n(302);var i=n(1)(n(252),n(377),null,null);t.exports=i.exports},377:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"newslist"},[n("img",{attrs:{src:t.database.imgurl}}),t._v(" "),n("div",{staticClass:"con"},[n("div",{staticClass:"tits",domProps:{innerHTML:t._s(t.database.title)}}),t._v(" "),n("div",{staticClass:"text",style:t.newStyle,domProps:{innerHTML:t._s(t.database.content)}}),t._v(" "),n("div",{staticClass:"more",on:{click:t.showContent}},[n("b",[t._v(t._s(t.btnstr))])]),t._v(" "),n("div",{staticClass:"time",domProps:{innerHTML:t._s(t.database.time)}})]),t._v(" "),n("div",{staticClass:"fix"})])},staticRenderFns:[]}},378:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("layout",{attrs:{active:2}},[n("div",{staticClass:"newscontent"},[t._l(t.newsdata.company,function(e){return n("div",{staticClass:"company"},[n("div",{staticClass:"title",domProps:{innerHTML:t._s(e.title)}}),t._v(" "),n("p",{domProps:{innerHTML:t._s(e.content)}})])}),t._v(" "),t.newsdata.news.length>0?n("div",{staticClass:"title"},[n("i",[t._v("新聞")])]):t._e(),t._v(" "),t._l(t.newsdata.news,function(e){return t.newsdata.news.length>0?n("list",{attrs:{database:e}}):t._e()})],2)])},staticRenderFns:[]}}});
//# sourceMappingURL=7.a36d3f6f6d6c3ddbe0aa.js.map