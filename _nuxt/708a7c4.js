(window.webpackJsonp=window.webpackJsonp||[]).push([[17,5],{437:function(e,n,t){"use strict";t.r(n);var r={name:"HeroBanner",props:{heading:{type:String,default:""},banner:{type:String,default:""}}},l=t(18),component=Object(l.a)(r,(function(){var e=this,n=e._self._c;return n("header",{staticClass:"relative flex w-full bg-cover bg-center",style:"backgroundImage: url(".concat(e.banner,")")},[n("div",{staticClass:"flex h-full w-full items-center justify-center bg-gray-900 bg-opacity-50 py-12"},[e.heading?n("h2",{staticClass:"mt-8 mb-6 text-4xl font-light text-gray-100 lg:text-6xl"},[e._v("\n      "+e._s(e.heading)+"\n    ")]):e._e()])])}),[],!1,null,null,null);n.default=component.exports},450:function(e,n,t){"use strict";t.r(n);var r,l=t(13),o=(t(48),t(99)),c=t(49),d=Object(c.a)(r||(r=Object(o.a)(["\n  query termsPage {\n    termsAndCondition {\n      data {\n        attributes {\n          header {\n            heading\n            banner {\n              data {\n                attributes {\n                  url\n                }\n              }\n            }\n          }\n          content {\n            content\n          }\n        }\n      }\n    }\n  }\n"]))),f=t(168),h={asyncData:function(e){return Object(l.a)(regeneratorRuntime.mark((function n(){var t,r,l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.app,r=t.apolloProvider.defaultClient,n.next=4,r.query({query:d});case 4:return l=n.sent,n.abrupt("return",{page:Object(f.a)(l.data).termsAndCondition});case 6:case"end":return n.stop()}}),n)})))()}},m=t(18),component=Object(m.a)(h,(function(){var e=this,n=e._self._c;return e.$apollo.loading?e._e():n("div",{staticClass:"prose max-w-none"},[n("HeroBanner",{attrs:{heading:e.page.header.heading,banner:e.page.header.banner&&e.page.header.banner.url}}),e._v(" "),n("div",{staticClass:"container mx-auto py-8 pl-4 pr-4"},[n("RenderedMarkdown",{attrs:{content:e.page.content.content}})],1)],1)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{HeroBanner:t(437).default,RenderedMarkdown:t(251).default})}}]);