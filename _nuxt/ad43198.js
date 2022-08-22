(window.webpackJsonp=window.webpackJsonp||[]).push([[17,3,6,7,8,10,11,12],{437:function(t,n,e){"use strict";e.d(n,"c",(function(){return C})),e.d(n,"a",(function(){return h})),e.d(n,"d",(function(){return _})),e.d(n,"b",(function(){return y})),e.d(n,"f",(function(){return x})),e.d(n,"e",(function(){return w}));var r,o,l,c,d,f,m=e(99),v=e(48),C=Object(v.a)(r||(r=Object(m.a)(["\n  query HomePage {\n    homePage {\n      data {\n        attributes {\n          content {\n            content\n          }\n          carousel {\n            heading\n            sub_heading\n            image {\n              data {\n                attributes {\n                  url\n                }\n              }\n            }\n          }\n          carousel_settings {\n            arrows\n            dots\n            autoplay\n            autoplaySpeed\n            slidesToShow\n          }\n          banner {\n            heading\n            content\n            citation\n            banner_image {\n              data {\n                attributes {\n                  url\n                }\n              }\n            }\n            button_link\n            button_text\n          }\n          seo {\n            metaDescription\n            metaTitle\n            metaImage {\n              data {\n                attributes {\n                  url\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"]))),h=Object(v.a)(o||(o=Object(m.a)(["\n  query AboutUs {\n    aboutUs {\n      data {\n        attributes {\n          content\n          header {\n            heading\n            banner {\n              data {\n                attributes {\n                  url\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"]))),_=Object(v.a)(l||(l=Object(m.a)(["\n  query OurServices {\n    ourService {\n      data {\n        attributes {\n          header {\n            heading\n          }\n          banner {\n            heading\n            content\n          }\n          services {\n            name\n            image {\n              data {\n                attributes {\n                  url\n                }\n              }\n            }\n            description\n            button_text\n            button_link\n          }\n        }\n      }\n    }\n  }\n"]))),y=Object(v.a)(c||(c=Object(m.a)(["\n  query Galleries {\n    gallery {\n      data {\n        attributes {\n          header {\n            heading\n            banner {\n              data {\n                attributes {\n                  url\n                }\n              }\n            }\n          }\n          banner {\n            heading\n            content\n          }\n          galleries {\n            id\n            name\n            cover {\n              data {\n                attributes {\n                  formats\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"]))),x=Object(v.a)(d||(d=Object(m.a)(["\n  query TestimonialsPage {\n    testimonials {\n      data {\n        attributes {\n          date\n          author\n          event\n          poptop_review\n          testimonial\n        }\n      }\n    }\n    testimonialsPage {\n      data {\n        attributes {\n          intro {\n            heading\n            content\n          }\n          header {\n            heading\n            banner {\n              data {\n                attributes {\n                  url\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"]))),w=Object(v.a)(f||(f=Object(m.a)(["\n  query TermsPage {\n    termsAndCondition {\n      data {\n        attributes {\n          header {\n            heading\n            banner {\n              data {\n                attributes {\n                  url\n                }\n              }\n            }\n          }\n          content {\n            content\n          }\n        }\n      }\n    }\n  }\n"])))},439:function(t,n,e){"use strict";e.r(n);var r={name:"QuoteBanner",props:{heading:{type:String,default:""},tag:{type:String,default:"h2"},content:{type:String,default:""},citation:{type:String,default:""},banner:{type:String,default:""},backgroundColor:{type:String,default:"bg-white"}}},o=e(18),component=Object(o.a)(r,(function(){var t=this,n=t._self._c;return n("section",{class:[t.backgroundColor,{"bg-cover bg-center":t.banner.length},"relative flex max-w-none py-24 text-center"],style:t.banner?"backgroundImage: url(".concat(t.banner,")"):""},[n("div",{staticClass:"flex h-full w-full flex-col items-center justify-center px-4"},[n(t.tag,{tag:"component",staticClass:"m-0 text-3xl font-light text-slate-900"},[t._v("\n      "+t._s(t.heading)+"\n    ")]),t._v(" "),n("RenderedMarkdown",{attrs:{content:t.content,size:"text-lg"}}),t._v(" "),t.citation?n("p",{staticClass:"font-light"},[t._v(t._s(t.citation))]):t._e(),t._v(" "),t._t("default")],2)])}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{RenderedMarkdown:e(251).default})},440:function(t,n,e){"use strict";e.r(n);var r=e(18),component=Object(r.a)({},(function(){return(0,this._self._c)("div",{staticClass:"container mx-auto my-8 px-4 py-8"},[this._t("default")],2)}),[],!1,null,null,null);n.default=component.exports},441:function(t,n,e){"use strict";e.r(n);var r={name:"TestimonialCard",props:{date:{type:String,default:""},author:{type:String,default:""},event:{type:String,default:""},testimonial:{type:String,default:""},poptopReview:{type:Boolean,default:!1}}},o=e(18),component=Object(o.a)(r,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"p-3"},[n("div",{staticClass:"relative overflow-hidden p-3 text-center"},[n("h4",{staticClass:"mt-0 mb-5 text-base font-medium text-slate-900"},[t._v("\n      "+t._s(t.event)+"\n    ")]),t._v(" "),n("RenderedMarkdown",{attrs:{content:t.testimonial}}),t._v(" "),n("p",{staticClass:"text-sm font-medium text-slate-900"},[t._v("- "+t._s(t.author))]),t._v(" "),t.poptopReview?n("div",{staticClass:"absolute bottom-9 right-0 overflow-visible"},[n("PopTopLogo")],1):t._e()],1)])}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{RenderedMarkdown:e(251).default,PopTopLogo:e(442).default})},442:function(t,n,e){"use strict";e.r(n);var r={name:"PopTopLogo"},o=e(18),component=Object(o.a)(r,(function(){var t=this,n=t._self._c;return n("a",{staticClass:"align-items-center group relative flex origin-center transform flex-col justify-center rounded-full bg-orange-200 no-underline transition ease-in-out hover:w-full",attrs:{href:"https://www.poptop.uk.com/supplier/arc-disco/",target:"_blank"}},[n("svg",{staticClass:"rounded-full bg-orange-200 p-2",staticStyle:{display:"block"},attrs:{width:"56",height:"56",viewBox:"0 0 96 96",preserveAspectRatio:"xMidYMid meet","data-tid":"Vec"}},[n("path",{attrs:{d:"M32.6002 52.8588C35.6063 52.4834 38.6625 52.9421 41.4005 54.1798C44.1385 55.4174 46.4413 57.3811 48.0313 59.8341C49.6234 57.3829 51.9266 55.4207 54.664 54.1834C57.4014 52.946 60.4566 52.486 63.4625 52.8588C72.2803 53.7176 72.4567 59.1428 78.8937 59.7503C81.392 59.9838 83.8915 59.3165 85.8964 57.881C87.9012 56.4454 89.2651 54.3463 89.7176 52C90.8446 55.2438 91.2353 58.6777 90.8639 62.0754C90.5876 65.234 89.653 68.3088 88.1143 71.1209C86.5756 73.933 84.4637 76.4262 81.9014 78.4554C79.3391 80.4847 76.3777 82.0094 73.1894 82.9408C70.0011 83.8723 66.6497 84.1918 63.3302 83.881C60.7889 83.6281 58.3006 83.0211 55.9453 82.0795C52.6494 80.6749 49.8869 78.3424 48.0313 75.3975C46.1824 78.3554 43.4081 80.6913 40.0953 82.0795C37.74 83.0211 35.2517 83.6281 32.7104 83.881C29.384 84.1976 26.0246 83.881 22.8285 82.9497C19.6324 82.0184 16.6637 80.491 14.096 78.4568C11.5283 76.4227 9.41317 73.9226 7.87415 71.1027C6.33513 68.2828 5.40314 65.1996 5.13266 62.0335C4.76754 58.6496 5.15816 55.2306 6.27898 52C6.73198 54.3582 8.10555 56.4669 10.1248 57.904C12.144 59.341 14.6599 60.0005 17.169 59.7503C23.7823 59.1009 23.9146 53.7176 32.6002 52.8588Z",fill:"rgba(0,0,0,1)","fill-rule":"evenodd"}}),t._v(" "),n("path",{attrs:{d:"M48 23.0972C45.5864 23.0972 45.3409 25.4138 44.4818 27.7303C40.7386 38.317 39.0205 45.8458 24.1909 44.8961C11.5295 44.1084 9.75 37.0661 7.37727 26.1087C6.35455 21.4756 6.02727 20.827 3.75682 20.3405L3 12.858C7.78479 12.127 12.6162 11.8634 17.4409 12.0703C25.6896 11.923 33.9143 13.1166 41.8636 15.6147C43.8633 16.2578 45.923 16.631 48 16.7266C50.077 16.631 52.1367 16.2578 54.1364 15.6147C62.0656 13.121 70.2695 11.9274 78.4977 12.0703C83.3428 11.8594 88.195 12.123 93 12.858L92.2227 20.3636C89.9523 20.8501 89.6045 21.4756 88.6023 26.1319C86.2295 37.0892 84.5114 44.1316 71.7886 44.9192C56.9591 45.869 55.2409 38.3402 51.4977 27.7535C50.6386 25.3443 50.3932 23.1899 48 23.0972Z",fill:"rgba(0,0,0,1)","fill-rule":"evenodd"}})]),t._v(" "),n("div",{staticClass:"absolute w-40 rounded-l-full bg-orange-200 p-2 pr-3 opacity-0 transition ease-in-out group-hover:-translate-x-36 group-hover:opacity-100",staticStyle:{"z-index":"-1"}},[t._v("\n    Poptop Certified\n  ")])])}),[],!1,null,null,null);n.default=component.exports},443:function(t,n,e){"use strict";e.r(n);var r=e(445),o={name:"SlickCarousel",components:{VueSlickCarousel:e.n(r).a},props:{options:{type:Object,default:function(){}}}},l=e(18),component=Object(l.a)(o,(function(){var t=this;return(0,t._self._c)("VueSlickCarousel",t._b({},"VueSlickCarousel",t.options,!1),[t._t("default")],2)}),[],!1,null,null,null);n.default=component.exports},446:function(t,n,e){"use strict";e.r(n);var r={name:"TestimonialsList",components:{TestimonialCard:e(441).default},props:{testimonials:{type:Array,default:function(){return[]}}},data:function(){return{options:{autoplay:!0,slidesToShow:3,arrows:!1,dots:!0,responsive:[{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2,initialSlide:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]}}}},o=e(18),component=Object(o.a)(r,(function(){var t=this,n=t._self._c;return t.testimonials?n("div",{staticClass:"my-8 py-8"},[n("SlickCarousel",{attrs:{options:t.options}},t._l(t.testimonials,(function(e){return n("TestimonialCard",t._b({key:e.id},"TestimonialCard",e,!1))})),1)],1):t._e()}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{TestimonialCard:e(441).default,SlickCarousel:e(443).default})},447:function(t,n,e){"use strict";e.r(n);var r={name:"CarouselSlide",props:{heading:{type:String,default:""},subHeading:{type:String,default:""},banner:{type:String,default:""}}},o=e(18),component=Object(o.a)(r,(function(){var t=this,n=t._self._c;return n("header",{staticClass:"relative flex w-full bg-cover bg-center",style:"backgroundImage: url(".concat(t.banner,")")},[n("div",{staticClass:"flex h-full w-full flex-col items-center justify-center bg-gray-900 bg-opacity-50 py-12 text-center"},[t.heading?n("h2",{staticClass:"mt-8 mb-6 text-4xl font-light text-gray-100 lg:text-6xl"},[t._v("\n      "+t._s(t.heading)+"\n    ")]):t._e(),t._v(" "),t.subHeading?n("h3",{staticClass:"mt-8 mb-6 text-xl font-light text-gray-100 lg:text-2xl"},[t._v("\n      "+t._s(t.subHeading)+"\n    ")]):t._e()])])}),[],!1,null,null,null);n.default=component.exports},449:function(t,n,e){"use strict";e.r(n);e(44),e(35),e(45),e(16),e(54),e(38),e(55);var r,o=e(26),l=e(13),c=(e(49),e(437)),d=e(99),f=e(48),m=Object(f.a)(r||(r=Object(d.a)(["\n  query Testimonials($limit: Int = 20) {\n    testimonials(pagination: { limit: $limit }) {\n      data {\n        attributes {\n          date\n          author\n          event\n          poptop_review\n          testimonial\n        }\n      }\n    }\n  }\n"]))),v=e(168);function C(object,t){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),n.push.apply(n,e)}return n}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?C(Object(source),!0).forEach((function(n){Object(o.a)(t,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):C(Object(source)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(source,n))}))}return t}var _={name:"IndexPage",components:{TestimonialsList:e(446).default},asyncData:function(t){return Object(l.a)(regeneratorRuntime.mark((function n(){var e,r,o,l,data,d,f;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.app,r=e.apolloProvider.defaultClient,n.next=4,r.query({query:c.c});case 4:return o=n.sent,n.next=7,r.query({query:m,variables:{limit:4}});case 7:return l=n.sent,data=Object(v.a)(o.data).homePage,d=Object(v.a)(l.data).testimonials,f=data.banner,n.abrupt("return",{reviews:d,page:h(h({},data),{},{banner:f,carousel:data.carousel,carousel_settings:data.carousel_settings})});case 12:case"end":return n.stop()}}),n)})))()},head:function(){return{title:this.page.seo.metaTitle,meta:[{hid:"description",name:"description",content:this.page.seo.metaDescription}],fetchOnServer:!0}}},y=e(18),component=Object(y.a)(_,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"prose max-w-none"},[t.page.carousel?n("SlickCarousel",{attrs:{options:t.page.carousel_settings}},t._l(t.page.carousel,(function(t){return n("CarouselSlide",{key:t.id,attrs:{heading:t.heading,"sub-heading":t.sub_heading,banner:t.image.url}})})),1):t._e(),t._v(" "),n("PageContent",[n("RenderedMarkdown",{attrs:{content:t.page.content.content}})],1),t._v(" "),t.page.banner?n("QuoteBanner",{attrs:{tag:"h3",heading:"Book your event with us today","background-color":"bg-orange-100"}},[n("NuxtLink",{staticClass:"bg-white px-6 py-2 text-slate-900 no-underline",attrs:{to:"/".concat(t.page.banner.button_link)}},[t._v("\n      "+t._s(t.page.banner.button_text)+"\n    ")])],1):t._e(),t._v(" "),n("PageContent",[t.reviews?n("TestimonialsList",{attrs:{testimonials:t.reviews}}):t._e()],1)],1)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{CarouselSlide:e(447).default,SlickCarousel:e(443).default,RenderedMarkdown:e(251).default,PageContent:e(440).default,QuoteBanner:e(439).default,TestimonialsList:e(446).default})}}]);