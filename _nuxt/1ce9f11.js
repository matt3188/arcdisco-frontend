(window.webpackJsonp=window.webpackJsonp||[]).push([[9,3,4,5],{427:function(t,e,n){"use strict";n.r(e);var l={name:"TestimonialCard",props:{date:{type:String,default:""},author:{type:String,default:""},event:{type:String,default:""},testimonial:{type:String,default:""},poptopReview:{type:Boolean,default:!1}}},r=n(36),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"p-3"},[e("div",{staticClass:"relative text-center overflow-hidden p-3"},[e("h4",{staticClass:"text-base text-slate-900 font-semibold my-0"},[t._v("\n      "+t._s(t.event)+"\n    ")]),t._v(" "),e("div",{staticClass:"text-sm",domProps:{innerHTML:t._s(t.$md.render(t.testimonial))}}),t._v(" "),e("p",{staticClass:"text-slate-900"},[t._v("- "+t._s(t.author))]),t._v(" "),t.poptopReview?e("div",{staticClass:"absolute bottom-9 right-0 overflow-visible"},[e("PopTopLogo")],1):t._e()])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PopTopLogo:n(428).default})},428:function(t,e,n){"use strict";n.r(e);var l={name:"PopTopLogo"},r=n(36),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("a",{staticClass:"group transform origin-center transition ease-in-out hover:w-full justify-center align-items-center relative flex flex-col no-underline bg-orange-200 rounded-full",attrs:{href:"https://www.poptop.uk.com/supplier/arc-disco/",target:"_blank"}},[e("svg",{staticClass:"bg-orange-200 p-2 rounded-full",staticStyle:{display:"block"},attrs:{width:"56",height:"56",viewBox:"0 0 96 96",preserveAspectRatio:"xMidYMid meet","data-tid":"Vec"}},[e("path",{attrs:{d:"M32.6002 52.8588C35.6063 52.4834 38.6625 52.9421 41.4005 54.1798C44.1385 55.4174 46.4413 57.3811 48.0313 59.8341C49.6234 57.3829 51.9266 55.4207 54.664 54.1834C57.4014 52.946 60.4566 52.486 63.4625 52.8588C72.2803 53.7176 72.4567 59.1428 78.8937 59.7503C81.392 59.9838 83.8915 59.3165 85.8964 57.881C87.9012 56.4454 89.2651 54.3463 89.7176 52C90.8446 55.2438 91.2353 58.6777 90.8639 62.0754C90.5876 65.234 89.653 68.3088 88.1143 71.1209C86.5756 73.933 84.4637 76.4262 81.9014 78.4554C79.3391 80.4847 76.3777 82.0094 73.1894 82.9408C70.0011 83.8723 66.6497 84.1918 63.3302 83.881C60.7889 83.6281 58.3006 83.0211 55.9453 82.0795C52.6494 80.6749 49.8869 78.3424 48.0313 75.3975C46.1824 78.3554 43.4081 80.6913 40.0953 82.0795C37.74 83.0211 35.2517 83.6281 32.7104 83.881C29.384 84.1976 26.0246 83.881 22.8285 82.9497C19.6324 82.0184 16.6637 80.491 14.096 78.4568C11.5283 76.4227 9.41317 73.9226 7.87415 71.1027C6.33513 68.2828 5.40314 65.1996 5.13266 62.0335C4.76754 58.6496 5.15816 55.2306 6.27898 52C6.73198 54.3582 8.10555 56.4669 10.1248 57.904C12.144 59.341 14.6599 60.0005 17.169 59.7503C23.7823 59.1009 23.9146 53.7176 32.6002 52.8588Z",fill:"rgba(0,0,0,1)","fill-rule":"evenodd"}}),t._v(" "),e("path",{attrs:{d:"M48 23.0972C45.5864 23.0972 45.3409 25.4138 44.4818 27.7303C40.7386 38.317 39.0205 45.8458 24.1909 44.8961C11.5295 44.1084 9.75 37.0661 7.37727 26.1087C6.35455 21.4756 6.02727 20.827 3.75682 20.3405L3 12.858C7.78479 12.127 12.6162 11.8634 17.4409 12.0703C25.6896 11.923 33.9143 13.1166 41.8636 15.6147C43.8633 16.2578 45.923 16.631 48 16.7266C50.077 16.631 52.1367 16.2578 54.1364 15.6147C62.0656 13.121 70.2695 11.9274 78.4977 12.0703C83.3428 11.8594 88.195 12.123 93 12.858L92.2227 20.3636C89.9523 20.8501 89.6045 21.4756 88.6023 26.1319C86.2295 37.0892 84.5114 44.1316 71.7886 44.9192C56.9591 45.869 55.2409 38.3402 51.4977 27.7535C50.6386 25.3443 50.3932 23.1899 48 23.0972Z",fill:"rgba(0,0,0,1)","fill-rule":"evenodd"}})]),t._v(" "),e("div",{staticClass:"w-40 opacity-0 absolute transition ease-in-out p-2 pr-3 group-hover:opacity-100 group-hover:-translate-x-36 bg-orange-200 bg-opacity-50 rounded-l-full",staticStyle:{"z-index":"-1"}},[t._v("\n    Poptop Certified\n  ")])])}),[],!1,null,null,null);e.default=component.exports},429:function(t,e,n){"use strict";n.r(e);var l={name:"HeroBanner",props:{heading:{type:String,default:""},banner:{type:String,default:""}}},r=n(36),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("header",{staticClass:"flex relative w-full bg-center bg-cover",style:"backgroundImage: url(".concat(t.banner,")")},[e("div",{staticClass:"flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50 py-12"},[e("h2",{staticClass:"mt-8 mb-6 text-4xl lg:text-5xl font-bold text-gray-100"},[t._v("\n      "+t._s(t.heading)+"\n    ")])])])}),[],!1,null,null,null);e.default=component.exports},434:function(t,e,n){"use strict";n.r(e);var l,r=n(99),o=n(52),d=Object(o.a)(l||(l=Object(r.a)(["\n  query TestimonialsPage {\n    testimonials {\n      data {\n        attributes {\n          date\n          author\n          event\n          poptop_review\n          testimonial\n        }\n      }\n    }\n    testimonialsPage {\n      data {\n        attributes {\n          pageHeader {\n            heading\n            banner {\n              data {\n                attributes {\n                  url\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"]))),c=n(168),C={name:"Testimonials",apollo:{page:{query:d,update:function(t){var e=Object(c.a)(t.testimonialsPage).pageHeader;return{testimonials:Object(c.a)(t.testimonials),pageHeader:e}}}}},f=n(36),component=Object(f.a)(C,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"prose max-w-none"},[e("HeroBanner",{attrs:{heading:t.page.pageHeader.heading,banner:t.page.pageHeader.banner.url}}),t._v(" "),e("div",{staticClass:"container mx-auto pl-4 pr-4"},[e("div",{staticClass:"grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"},t._l(t.page.testimonials,(function(n){return e("div",{key:n.id},[e("TestimonialCard",t._b({attrs:{"poptop-review":n.poptop_review}},"TestimonialCard",n,!1))],1)})),0)])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{HeroBanner:n(429).default,TestimonialCard:n(427).default})}}]);