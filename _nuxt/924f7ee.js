(window.webpackJsonp=window.webpackJsonp||[]).push([[16,5,6,8,9],{437:function(n,t,e){"use strict";e.d(t,"c",(function(){return v})),e.d(t,"a",(function(){return _})),e.d(t,"d",(function(){return y})),e.d(t,"b",(function(){return x})),e.d(t,"f",(function(){return C})),e.d(t,"e",(function(){return j}));var r,l,o,c,d,f,h=e(99),m=e(48),v=Object(m.a)(r||(r=Object(h.a)(["\n  query HomePage {\n    homePage {\n      data {\n        attributes {\n          content {\n            content\n          }\n          carousel {\n            heading\n            sub_heading\n            image {\n              data {\n                attributes {\n                  url\n                }\n              }\n            }\n          }\n          carousel_settings {\n            arrows\n            dots\n            autoplay\n            autoplaySpeed\n            slidesToShow\n          }\n          banner {\n            heading\n            content\n            citation\n            banner_image {\n              data {\n                attributes {\n                  url\n                }\n              }\n            }\n            button_link\n            button_text\n          }\n          seo {\n            metaDescription\n            metaTitle\n            metaImage {\n              data {\n                attributes {\n                  url\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"]))),_=Object(m.a)(l||(l=Object(h.a)(["\n  query AboutUs {\n    aboutUs {\n      data {\n        attributes {\n          content\n          header {\n            heading\n            banner {\n              data {\n                attributes {\n                  url\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"]))),y=Object(m.a)(o||(o=Object(h.a)(["\n  query OurServices {\n    ourService {\n      data {\n        attributes {\n          header {\n            heading\n            banner {\n              data {\n                attributes {\n                  url\n                }\n              }\n            }\n          }\n          banner {\n            heading\n            content\n          }\n          services {\n            name\n            image {\n              data {\n                attributes {\n                  url\n                }\n              }\n            }\n            description\n            button_text\n            button_link\n          }\n        }\n      }\n    }\n  }\n"]))),x=Object(m.a)(c||(c=Object(h.a)(["\n  query Galleries {\n    gallery {\n      data {\n        attributes {\n          header {\n            heading\n            banner {\n              data {\n                attributes {\n                  url\n                }\n              }\n            }\n          }\n          banner {\n            heading\n            content\n          }\n          galleries {\n            id\n            name\n            cover {\n              data {\n                attributes {\n                  formats\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"]))),C=Object(m.a)(d||(d=Object(h.a)(["\n  query TestimonialsPage {\n    testimonials {\n      data {\n        attributes {\n          date\n          author\n          event\n          poptop_review\n          testimonial\n        }\n      }\n    }\n    testimonialsPage {\n      data {\n        attributes {\n          intro {\n            heading\n            content\n          }\n          header {\n            heading\n            banner {\n              data {\n                attributes {\n                  url\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"]))),j=Object(m.a)(f||(f=Object(h.a)(["\n  query TermsPage {\n    termsAndCondition {\n      data {\n        attributes {\n          header {\n            heading\n            banner {\n              data {\n                attributes {\n                  url\n                }\n              }\n            }\n          }\n          content {\n            content\n          }\n        }\n      }\n    }\n  }\n"])))},438:function(n,t,e){"use strict";e.r(t);var r={name:"HeroBanner",props:{heading:{type:String,default:""},banner:{type:String,default:""}}},l=e(18),component=Object(l.a)(r,(function(){var n=this,t=n._self._c;return t("header",{staticClass:"relative flex w-full bg-cover bg-center",style:"backgroundImage: url(".concat(n.banner,")")},[t("div",{staticClass:"flex h-full w-full items-center justify-center bg-orange-200 bg-opacity-50 py-12"},[n.heading?t("h2",{staticClass:"mt-8 mb-6 text-4xl font-light text-gray-100 lg:text-6xl"},[n._v("\n      "+n._s(n.heading)+"\n    ")]):n._e()])])}),[],!1,null,null,null);t.default=component.exports},439:function(n,t,e){"use strict";e.r(t);var r={name:"QuoteBanner",props:{heading:{type:String,default:""},tag:{type:String,default:"h2"},content:{type:String,default:""},citation:{type:String,default:""},banner:{type:String,default:""},backgroundColor:{type:String,default:"bg-white"}}},l=e(18),component=Object(l.a)(r,(function(){var n=this,t=n._self._c;return t("section",{class:[n.backgroundColor,{"bg-cover bg-center":n.banner.length},"relative flex max-w-none py-24 text-center"],style:n.banner?"backgroundImage: url(".concat(n.banner,")"):""},[t("div",{staticClass:"flex h-full w-full flex-col items-center justify-center px-4"},[t(n.tag,{tag:"component",staticClass:"m-0 text-3xl font-light text-slate-900"},[n._v("\n      "+n._s(n.heading)+"\n    ")]),n._v(" "),t("RenderedMarkdown",{attrs:{content:n.content,size:"text-lg"}}),n._v(" "),n.citation?t("p",{staticClass:"font-light"},[n._v(n._s(n.citation))]):n._e(),n._v(" "),n._t("default")],2)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{RenderedMarkdown:e(251).default})},440:function(n,t,e){"use strict";e.r(t);var r=e(18),component=Object(r.a)({},(function(){return(0,this._self._c)("div",{staticClass:"container mx-auto my-8 px-4 py-8"},[this._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},444:function(n,t,e){"use strict";e.r(t);e(37),e(35),e(53);var r={name:"ServiceCard",props:{name:{type:String,default:""},image:{type:String,default:""},description:{type:String,default:""},buttonText:{type:String,default:""},buttonLink:{type:[String,Object],default:""}}},l=e(18),component=Object(l.a)(r,(function(){var n=this,t=n._self._c;return t("div",{staticClass:"h-full px-2 pb-2"},[t("div",{class:["flex h-full flex-col border-2 p-4 text-center ",{"justify-between":n.image}]},[n.image?t("div",{staticClass:"h-40 overflow-hidden bg-cover bg-center",style:"backgroundImage: url(".concat(n.image,")")}):n._e(),n._v(" "),t("h4",{staticClass:"text-lg font-thin"},[n._v(n._s(n.name))]),n._v(" "),n.description?t("div",{staticClass:"text-sm",domProps:{innerHTML:n._s(n.description)}}):n._e(),n._v(" "),t("NuxtLink",{staticClass:"mx-4 mt-4 inline-block border-2 bg-white px-6 py-2 text-slate-900 no-underline transition-colors duration-300 hover:border-orange-200 hover:bg-orange-200",attrs:{to:n.buttonLink}},[n._v("\n      "+n._s(n.buttonText)+"\n    ")])],1)])}),[],!1,null,null,null);t.default=component.exports},452:function(n,t,e){"use strict";e.r(t);e(37);var r=e(13),l=(e(49),e(437)),o=e(168),c={name:"Gallery",asyncData:function(n){return Object(r.a)(regeneratorRuntime.mark((function t(){var e,r,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.app,r=e.apolloProvider.defaultClient,t.next=4,r.query({query:l.b});case 4:return c=t.sent,t.abrupt("return",{page:Object(o.a)(c.data).gallery});case 6:case"end":return t.stop()}}),t)})))()}},d=e(18),component=Object(d.a)(c,(function(){var n=this,t=n._self._c;return n.$apollo.loading?n._e():t("div",{staticClass:"prose max-w-none"},[t("HeroBanner",{attrs:{heading:n.page.header.heading,banner:n.page.header.banner.url}}),n._v(" "),n.page.banner?t("QuoteBanner",{attrs:{tag:"h3",heading:n.page.banner.heading,content:n.page.banner.content}}):n._e(),n._v(" "),t("PageContent",[t("div",{staticClass:"grid grid-cols-4"},n._l(n.page.galleries,(function(n){return t("ServiceCard",{key:n.name,attrs:{name:n.name,image:n.cover.formats.thumbnail.url,"button-text":"View gallery","button-link":{path:"/gallery/".concat(n.id),query:{name:n.name}}}})})),1)])],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{HeroBanner:e(438).default,QuoteBanner:e(439).default,ServiceCard:e(444).default,PageContent:e(440).default})}}]);