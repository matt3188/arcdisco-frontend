(window.webpackJsonp=window.webpackJsonp||[]).push([[10,4],{439:function(n,e,t){"use strict";t.r(e);var r={name:"HeroBanner",props:{heading:{type:String,default:""},banner:{type:String,default:""}}},l=t(18),component=Object(l.a)(r,(function(){var n=this,e=n._self._c;return e("header",{staticClass:"relative flex w-full bg-cover bg-center",style:"backgroundImage: url(".concat(n.banner,")")},[e("div",{staticClass:"flex h-full w-full items-center justify-center bg-gray-900 bg-opacity-50 py-12"},[e("h2",{staticClass:"mt-8 mb-6 text-4xl font-light text-gray-100 lg:text-6xl"},[n._v("\n      "+n._s(n.heading)+"\n    ")])])])}),[],!1,null,null,null);e.default=component.exports},445:function(n,e,t){"use strict";t.r(e);var r,l=t(13),o=(t(48),t(99)),c=t(52),d=Object(c.a)(r||(r=Object(o.a)(["\n  query aboutUs {\n    aboutUs {\n      data {\n        attributes {\n          heading\n          content\n          banner {\n            data {\n              attributes {\n                url\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"]))),f=t(168),v={name:"AboutUs",asyncData:function(n){return Object(l.a)(regeneratorRuntime.mark((function e(){var t,r,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.app,r=t.apolloProvider.defaultClient,e.next=4,r.query({query:d});case 4:return l=e.sent,e.abrupt("return",{page:Object(f.a)(l.data).aboutUs});case 6:case"end":return e.stop()}}),e)})))()}},h=t(18),component=Object(h.a)(v,(function(){var n=this,e=n._self._c;return n.$apollo.loading?n._e():e("div",{staticClass:"prose max-w-none"},[e("HeroBanner",{attrs:{heading:n.page.heading,banner:n.page.banner.url}}),n._v(" "),e("div",{staticClass:"container mx-auto py-8 pl-4 pr-4"},[e("RenderedMarkdown",{attrs:{content:n.page.content}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{HeroBanner:t(439).default,RenderedMarkdown:t(251).default})}}]);