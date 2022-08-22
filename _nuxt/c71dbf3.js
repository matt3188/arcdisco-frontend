(window.webpackJsonp=window.webpackJsonp||[]).push([[13,5],{437:function(n,t,e){"use strict";e.d(t,"c",(function(){return v})),e.d(t,"a",(function(){return y})),e.d(t,"d",(function(){return j})),e.d(t,"b",(function(){return O})),e.d(t,"f",(function(){return _})),e.d(t,"e",(function(){return w}));var r,o,d,c,l,h,f=e(99),m=e(48),v=Object(m.a)(r||(r=Object(f.a)(["\n  query HomePage {\n    homePage {\n      data {\n        attributes {\n          content {\n            content\n          }\n          carousel {\n            heading\n            sub_heading\n            image {\n              data {\n                attributes {\n                  url\n                }\n              }\n            }\n          }\n          carousel_settings {\n            arrows\n            dots\n            autoplay\n            autoplaySpeed\n            slidesToShow\n          }\n          banner {\n            heading\n            content\n            citation\n            banner_image {\n              data {\n                attributes {\n                  url\n                }\n              }\n            }\n            button_link\n            button_text\n          }\n          seo {\n            metaDescription\n            metaTitle\n            metaImage {\n              data {\n                attributes {\n                  url\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"]))),y=Object(m.a)(o||(o=Object(f.a)(["\n  query AboutUs {\n    aboutUs {\n      data {\n        attributes {\n          content\n          header {\n            heading\n            banner {\n              data {\n                attributes {\n                  url\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"]))),j=Object(m.a)(d||(d=Object(f.a)(["\n  query OurServices {\n    ourService {\n      data {\n        attributes {\n          header {\n            heading\n            banner {\n              data {\n                attributes {\n                  url\n                }\n              }\n            }\n          }\n          banner {\n            heading\n            content\n          }\n          services {\n            name\n            image {\n              data {\n                attributes {\n                  url\n                }\n              }\n            }\n            description\n            button_text\n            button_link\n          }\n        }\n      }\n    }\n  }\n"]))),O=Object(m.a)(c||(c=Object(f.a)(["\n  query Galleries {\n    gallery {\n      data {\n        attributes {\n          header {\n            heading\n            banner {\n              data {\n                attributes {\n                  url\n                }\n              }\n            }\n          }\n          banner {\n            heading\n            content\n          }\n          galleries {\n            id\n            name\n            cover {\n              data {\n                attributes {\n                  formats\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"]))),_=Object(m.a)(l||(l=Object(f.a)(["\n  query TestimonialsPage {\n    testimonials {\n      data {\n        attributes {\n          date\n          author\n          event\n          poptop_review\n          testimonial\n        }\n      }\n    }\n    testimonialsPage {\n      data {\n        attributes {\n          intro {\n            heading\n            content\n          }\n          header {\n            heading\n            banner {\n              data {\n                attributes {\n                  url\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"]))),w=Object(m.a)(h||(h=Object(f.a)(["\n  query TermsPage {\n    termsAndCondition {\n      data {\n        attributes {\n          header {\n            heading\n            banner {\n              data {\n                attributes {\n                  url\n                }\n              }\n            }\n          }\n          content {\n            content\n          }\n        }\n      }\n    }\n  }\n"])))},438:function(n,t,e){"use strict";e.r(t);var r={name:"HeroBanner",props:{heading:{type:String,default:""},banner:{type:String,default:""}}},o=e(18),component=Object(o.a)(r,(function(){var n=this,t=n._self._c;return t("header",{staticClass:"relative flex w-full bg-cover bg-center",style:"backgroundImage: url(".concat(n.banner,")")},[t("div",{staticClass:"flex h-full w-full items-center justify-center bg-orange-200 bg-opacity-50 py-12"},[n.heading?t("h2",{staticClass:"mt-8 mb-6 text-4xl font-light text-gray-100 lg:text-6xl"},[n._v("\n      "+n._s(n.heading)+"\n    ")]):n._e()])])}),[],!1,null,null,null);t.default=component.exports},450:function(n,t,e){"use strict";e.r(t);var r=e(13),o=(e(49),e(437)),d=e(168),c={name:"AboutUs",asyncData:function(n){return Object(r.a)(regeneratorRuntime.mark((function t(){var e,r,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.app,r=e.apolloProvider.defaultClient,t.next=4,r.query({query:o.a});case 4:return c=t.sent,t.abrupt("return",{page:Object(d.a)(c.data).aboutUs});case 6:case"end":return t.stop()}}),t)})))()}},l=e(18),component=Object(l.a)(c,(function(){var n=this,t=n._self._c;return n.$apollo.loading?n._e():t("div",{staticClass:"prose max-w-none"},[t("HeroBanner",{attrs:{heading:n.page.header.heading,banner:n.page.header.banner.url}}),n._v(" "),t("div",{staticClass:"container mx-auto py-8 pl-4 pr-4"},[t("RenderedMarkdown",{attrs:{content:n.page.content}})],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{HeroBanner:e(438).default,RenderedMarkdown:e(251).default})}}]);