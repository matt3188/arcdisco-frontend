(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{431:function(t,n,e){"use strict";e.r(n);var r,l=e(99),o=e(52),c=Object(o.a)(r||(r=Object(l.a)(["\n  query aboutUs {\n    aboutUs {\n      data {\n        attributes {\n          heading\n          content\n          banner {\n            data {\n              attributes {\n                url\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"]))),d=e(168),f={name:"AboutUs",apollo:{page:{query:c,update:function(t){return Object(d.a)(t.aboutUs)}}}},v=e(36),component=Object(v.a)(f,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"prose max-w-none"},[n("header",{staticClass:"flex relative w-full bg-center bg-cover",style:"backgroundImage: url(".concat(t.page.banner.url,")")},[n("div",{staticClass:"flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50 py-12"},[n("h2",{staticClass:"mt-8 mb-6 text-4xl lg:text-5xl font-bold text-gray-100"},[t._v("\n        "+t._s(t.page.heading)+"\n      ")])])]),t._v(" "),n("div",{staticClass:"container mx-auto py-8 pl-4 pr-4"},[n("div",{domProps:{innerHTML:t._s(t.$md.render(t.page.content))}})])])}),[],!1,null,null,null);n.default=component.exports}}]);