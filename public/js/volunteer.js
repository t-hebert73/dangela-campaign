"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[300],{5652:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(3645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,".loading[data-v-86da3684]{color:#a51e36;font-size:1.5rem}.thank-you-message[data-v-86da3684]{align-items:center;display:flex;justify-content:center;min-height:inherit;text-align:center}form label[data-v-86da3684]{font-weight:700}form .ranked-options .ranked-option[data-v-86da3684]{float:left;margin-bottom:5px;width:50%}@media (max-width:767px){form .ranked-options .ranked-option[data-v-86da3684]{width:100%}}form .ranked-options .ranked-option input[data-v-86da3684],form .ranked-options .ranked-option label[data-v-86da3684]{float:left}form .ranked-options .ranked-option label[data-v-86da3684]{padding:2px 15px}@media (max-width:767px){form .ranked-options .ranked-option label[data-v-86da3684]{font-size:.9rem}}form .ranked-options .ranked-option input[data-v-86da3684]{text-align:center;width:50px}form .ranked-options .ranked-option textarea.option-extra[data-v-86da3684]{text-align:left;width:400px}",""]);const a=o},9479:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});const r={name:"volunteer-request-page",data:function(){return{loading:!1,formCompleted:!1,alert:{message:""},serverErrors:null,volunteer:{name:"",streetAddress:"",contact:"",helpingBy:null},helpingByOtherChosen:!1,helpingByOther:""}},methods:{submitVolunteerRequest:function(){var e=this;e.loading=!0,e.alert.message=null,e.serverErrors=null,e.helpingByOtherChosen&&(e.volunteer.helpingBy=e.helpingByOther),window.axios.post(e.API_ROUTE+"form-submissions/volunteer",{name:e.volunteer.name,street_address:e.volunteer.streetAddress,contact:e.volunteer.contact,helping_by:e.volunteer.helpingBy}).then((function(t){e.serverErrors=null,e.alert.message=t.data.message,e.volunteer.name="",e.volunteer.streetAddress="",e.volunteer.contact="",e.volunteer.helpingBy=null,e.loading=!1,e.formCompleted=!0})).catch((function(t){t.response.data.errors&&(e.serverErrors=t.response.data.errors),flash(t.response.data.message,"error"),e.loading=!1})),e.scrollToTop()},helpingByChanged:function(e){this.helpingByOtherChosen="other"===e},scrollToTop:function(){var e=this.$el.querySelector("h1");e&&e.scrollIntoView(!1)}}};var o=n(3379),a=n.n(o),l=n(5652),s={insert:"head",singleton:!1};a()(l.Z,s);l.Z.locals;const i=(0,n(1900).Z)(r,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("div",{staticClass:"page-content main-area"},[e.alert.message?t("div",{staticClass:"thank-you-message",attrs:{role:"alert"}},[t("div",{domProps:{innerHTML:e._s(e.alert.message)}})]):t("div",[t("h1",{staticClass:"mb-3"},[e._v("Volunteer")])]),e._v(" "),e.serverErrors?t("div",{staticClass:"alert alert-danger"},e._l(e.serverErrors,(function(n,r){return t("li",[n[0]?t("span",[e._v(e._s(n[0]))]):e._e()])})),0):e._e(),e._v(" "),e.loading?t("div",{staticClass:"loading mb-3 text-center"},[t("i",{staticClass:"fa fa-spinner fa-spin",attrs:{"aria-hidden":"true"}}),e._v(" Submitting..")]):e._e(),e._v(" "),e.loading||e.formCompleted?e._e():t("form",{on:{submit:function(t){return t.preventDefault(),e.submitVolunteerRequest.apply(null,arguments)}}},[t("b-form-group",[t("label",{attrs:{for:"volunteer_name"}},[e._v("Name")]),e._v(" "),t("b-form-input",{attrs:{id:"volunteer_name",required:!0},model:{value:e.volunteer.name,callback:function(t){e.$set(e.volunteer,"name",t)},expression:"volunteer.name"}})],1),e._v(" "),t("b-form-group",[t("label",{attrs:{for:"volunteer_address"}},[e._v("Street Address")]),e._v(" "),t("b-form-input",{attrs:{id:"volunteer_address",required:!0},model:{value:e.volunteer.streetAddress,callback:function(t){e.$set(e.volunteer,"streetAddress",t)},expression:"volunteer.streetAddress"}})],1),e._v(" "),t("b-form-group",[t("label",{attrs:{for:"volunteer_contact"}},[e._v("Contact #")]),e._v(" "),t("b-form-input",{attrs:{id:"volunteer_contact",required:!0},model:{value:e.volunteer.contact,callback:function(t){e.$set(e.volunteer,"contact",t)},expression:"volunteer.contact"}})],1),e._v(" "),t("b-form-group",[t("label",{attrs:{for:"volunteer_helping_by"}},[e._v("Interested in helping by:")]),e._v(" "),t("b-form-select",{attrs:{id:"volunteer_helping_by",required:!0},on:{change:e.helpingByChanged},model:{value:e.volunteer.helpingBy,callback:function(t){e.$set(e.volunteer,"helpingBy",t)},expression:"volunteer.helpingBy"}},[t("option",{domProps:{value:null}},[e._v("Choose One")]),e._v(" "),t("option",[e._v("Delivering Flyers")]),e._v(" "),t("option",[e._v("Taking a sign")]),e._v(" "),t("option",[e._v("Installing Signs")]),e._v(" "),t("option",{attrs:{value:"other"}},[e._v("Other (specify)")])])],1),e._v(" "),e.helpingByOtherChosen?t("b-form-group",[t("label",{attrs:{for:"volunteer_helping_by_other"}},[e._v("Please specify:")]),e._v(" "),t("b-form-input",{attrs:{id:"volunteer_helping_by_other"},model:{value:e.helpingByOther,callback:function(t){e.helpingByOther=t},expression:"helpingByOther"}})],1):e._e(),e._v(" "),t("b-button",{staticClass:"mb-2",attrs:{type:"submit",variant:"primary"}},[e._v("Submit")])],1)])])}),[],!1,null,"86da3684",null).exports}}]);