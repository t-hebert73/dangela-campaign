"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[380],{4430:(t,a,e)=>{e.d(a,{Z:()=>r});var n=e(3645),o=e.n(n)()((function(t){return t[1]}));o.push([t.id,".loading[data-v-1fbd5ef8]{color:#a51e36;font-size:1.5rem}.thank-you-message[data-v-1fbd5ef8]{align-items:center;display:flex;justify-content:center;min-height:inherit;text-align:center}form label[data-v-1fbd5ef8]{font-weight:700}form .ranked-options .ranked-option[data-v-1fbd5ef8]{float:left;margin-bottom:5px;width:50%}@media (max-width:767px){form .ranked-options .ranked-option[data-v-1fbd5ef8]{width:100%}}form .ranked-options .ranked-option input[data-v-1fbd5ef8],form .ranked-options .ranked-option label[data-v-1fbd5ef8]{float:left}form .ranked-options .ranked-option label[data-v-1fbd5ef8]{padding:2px 15px}@media (max-width:767px){form .ranked-options .ranked-option label[data-v-1fbd5ef8]{font-size:.9rem}}form .ranked-options .ranked-option input[data-v-1fbd5ef8]{text-align:center;width:50px}form .ranked-options .ranked-option textarea.option-extra[data-v-1fbd5ef8]{text-align:left;width:400px}",""]);const r=o},7622:(t,a,e)=>{e.r(a),e.d(a,{default:()=>d});const n={name:"donation-request-page",data:function(){return{loading:!1,formCompleted:!1,alert:{message:""},serverErrors:null,donation:{name:"",address:"",contact:""}}},methods:{submitDonationRequest:function(){var t=this;t.loading=!0,t.alert.message=null,t.serverErrors=null,window.axios.post(t.API_ROUTE+"form-submissions/donation",t.donation).then((function(a){t.serverErrors=null,t.alert.message=a.data.message,t.donation.name="",t.donation.address="",t.donation.contact="",t.loading=!1,t.formCompleted=!0,t.IS_PROD&&gtag("event","donation_submission")})).catch((function(a){a.response.data.errors&&(t.serverErrors=a.response.data.errors),flash(a.response.data.message,"error"),t.loading=!1})),t.scrollToTop()},helpingByChanged:function(t){this.helpingByOtherChosen="other"===t},scrollToTop:function(){var t=this.$el.querySelector("h1");t&&t.scrollIntoView(!1)}}};var o=e(3379),r=e.n(o),s=e(4430),i={insert:"head",singleton:!1};r()(s.Z,i);s.Z.locals;const d=(0,e(1900).Z)(n,(function(){var t=this,a=t._self._c;return a("div",{staticClass:"container"},[a("div",{staticClass:"page-content main-area"},[t.alert.message?a("div",{staticClass:"thank-you-message",attrs:{role:"alert"}},[a("div",{domProps:{innerHTML:t._s(t.alert.message)}})]):a("div",[a("h1",{staticClass:"mb-3"},[t._v("Make A Donation")]),t._v(" "),t._m(0)]),t._v(" "),t.serverErrors?a("div",{staticClass:"alert alert-danger"},t._l(t.serverErrors,(function(e,n){return a("li",[e[0]?a("span",[t._v(t._s(e[0]))]):t._e()])})),0):t._e(),t._v(" "),t.loading?a("div",{staticClass:"loading mb-3 text-center"},[a("i",{staticClass:"fa fa-spinner fa-spin",attrs:{"aria-hidden":"true"}}),t._v(" Submitting..")]):t._e(),t._v(" "),t.loading||t.formCompleted?t._e():a("form",{on:{submit:function(a){return a.preventDefault(),t.submitDonationRequest.apply(null,arguments)}}},[a("b-form-group",[a("label",{attrs:{for:"donation_name"}},[t._v("Name")]),t._v(" "),a("b-form-input",{attrs:{id:"donation_name",required:!0},model:{value:t.donation.name,callback:function(a){t.$set(t.donation,"name",a)},expression:"donation.name"}})],1),t._v(" "),a("b-form-group",[a("label",{attrs:{for:"donation_address"}},[t._v("Address")]),t._v(" "),a("b-form-input",{attrs:{id:"donation_address",required:!0},model:{value:t.donation.address,callback:function(a){t.$set(t.donation,"address",a)},expression:"donation.address"}})],1),t._v(" "),a("b-form-group",[a("label",{attrs:{for:"donation_contact"}},[t._v("Contact #")]),t._v(" "),a("b-form-input",{attrs:{id:"donation_contact",required:!0},model:{value:t.donation.contact,callback:function(a){t.$set(t.donation,"contact",a)},expression:"donation.contact"}})],1),t._v(" "),a("b-button",{staticClass:"mb-2",attrs:{type:"submit",variant:"primary"}},[t._v("Submit")])],1)])])}),[function(){var t=this,a=t._self._c;return a("p",[t._v("To make a donation fill out the form below, or contact Henry at "),a("em",[t._v("905-227-8298")])])}],!1,null,"1fbd5ef8",null).exports}}]);