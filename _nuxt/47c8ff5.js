(window.webpackJsonp=window.webpackJsonp||[]).push([[3,2],{427:function(t,e,n){"use strict";n.r(e);var l={name:"TestimonialCard",props:{date:{type:String,default:""},author:{type:String,default:""},event:{type:String,default:""},testimonial:{type:String,default:""},poptopReview:{type:Boolean,default:!1}}},o=n(47),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex flex-auto bg-white shadow overflow-hidden sm:rounded-lg p-3"},[e("h4",{staticClass:"text-base text-slate-900 font-semibold mt-0 mb-0"},[t._v("\n    "+t._s(t.author)+"\n  ")]),t._v(" "),e("p",{staticClass:"mt-1"},[t._v(t._s(t.event))]),t._v(" "),e("div",{staticClass:"text-sm"},[t._v(t._s(t.testimonial))])])}),[],!1,null,null,null);e.default=component.exports},429:function(t,e,n){"use strict";n.r(e);var l={name:"TestimonialsList",components:{TestimonialCard:n(427).default},props:{testimonials:{type:Array,default:function(){return[]}}},data:function(){return{options:{autoplay:!0,slidesToShow:3,navButtons:!1,centerMode:!0}}}},o=n(47),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return t.testimonials?e("div",{staticClass:"p-8 bg-gray-100"},[e("client-only",[e("agile",{attrs:{options:t.options}},t._l(t.testimonials,(function(n){return e("TestimonialCard",t._b({key:n.id},"TestimonialCard",n,!1))})),1)],1)],1):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TestimonialCard:n(427).default})}}]);