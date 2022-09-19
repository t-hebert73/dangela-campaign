"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["auth"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/Dashboard.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/Dashboard.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _layouts_AdminHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layouts/AdminHeader */ "./resources/js/components/admin/layouts/AdminHeader.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'dashboard',
  components: {
    AdminHeader: _layouts_AdminHeader__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      surveySubmissions: {},
      signRequests: {},
      volunteers: {},
      donations: {},
      siteViews: 0,
      uniqueSiteViews: 0
    };
  },
  mounted: function mounted() {
    var _this = this;

    window.axios.get(this.API_ROUTE + 'survey-submissions/latest').then(function (response) {
      _this.surveySubmissions = response.data.surveySubmissions;
      _this.loading = false;
    })["catch"](function (error) {
      flash('Error loading pages. Reason: ' + error.response.data.message, 'error');
    });
    window.axios.get(this.API_ROUTE + 'sign-requests/latest').then(function (response) {
      _this.signRequests = response.data.signRequests;
      _this.loading = false;
    })["catch"](function (error) {
      flash('Error loading pages. Reason: ' + error.response.data.message, 'error');
    });
    window.axios.get(this.API_ROUTE + 'volunteers/latest').then(function (response) {
      _this.volunteers = response.data.volunteers;
      _this.loading = false;
    })["catch"](function (error) {
      flash('Error loading pages. Reason: ' + error.response.data.message, 'error');
    });
    window.axios.get(this.API_ROUTE + 'donations/latest').then(function (response) {
      _this.donations = response.data.donations;
      _this.loading = false;
    })["catch"](function (error) {
      flash('Error loading pages. Reason: ' + error.response.data.message, 'error');
    });
    window.axios.get(this.API_ROUTE + 'dashboard/get-stats').then(function (response) {
      _this.siteViews = response.data.siteViews;
      _this.uniqueSiteViews = response.data.uniqueSiteViews;
      _this.loading = false;
    })["catch"](function (error) {
      flash('Error loading pages. Reason: ' + error.response.data.message, 'error');
    });
  },
  methods: {
    /**
     *
     * @param string
     * @returns {string}
     */
    truncateString: function truncateString(string) {
      var length = 100;
      var formattedString = string;

      if (string.length > length) {
        formattedString = string.substring(0, length) + '...';
      }

      return formattedString;
    },

    /**
     * Show a specified survey submission.
     *
     * @param id
     */
    showSurveySubmission: function showSurveySubmission(event, id) {
      // only if you didn't click a link within
      if (!$(event.target).is('a')) {
        this.$router.push({
          name: 'survey-submissions.show',
          params: {
            id: id
          }
        });
      }
    },

    /**
     * Show a specified sign request.
     *
     * @param id
     */
    showSignRequest: function showSignRequest(event, id) {
      // only if you didn't click a link within
      if (!$(event.target).is('a')) {
        this.$router.push({
          name: 'sign-request.show',
          params: {
            id: id
          }
        });
      }
    },

    /**
     * Show a specified volunteer.
     *
     * @param id
     */
    showVolunteer: function showVolunteer(event, id) {
      // only if you didn't click a link within
      if (!$(event.target).is('a')) {
        this.$router.push({
          name: 'volunteer.show',
          params: {
            id: id
          }
        });
      }
    },

    /**
     * Show a specified donation.
     *
     * @param id
     */
    showDonation: function showDonation(event, id) {
      // only if you didn't click a link within
      if (!$(event.target).is('a')) {
        this.$router.push({
          name: 'donation.show',
          params: {
            id: id
          }
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/Dashboard.vue?vue&type=template&id=12658639&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/Dashboard.vue?vue&type=template&id=12658639&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("admin-component", [_c("main", {
    staticClass: "col-10 col-md-9 col-sm-9 ml-sm-auto col-lg-10 pt-3 px-2 px-sm-4",
    attrs: {
      role: "main"
    }
  }, [_c("div", {
    staticClass: "container-fluid min-body-height mt-3"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 mb-5"
  }, [_c("b-card-group", {
    staticClass: "mt-4",
    attrs: {
      deck: ""
    }
  }, [_c("b-card", {
    attrs: {
      "no-body": "",
      align: "center"
    }
  }, [_c("b-card-header", {
    staticClass: "brand-primary"
  }, [_c("h4", [_vm._v("Site Views")])]), _vm._v(" "), _c("b-card-body", [_c("p", {
    staticClass: "card-text data-value big"
  }, [_vm._v("\n                                    " + _vm._s(_vm.siteViews) + "\n                                ")])])], 1), _vm._v(" "), _c("b-card", {
    attrs: {
      "no-body": "",
      align: "center"
    }
  }, [_c("b-card-header", {
    staticClass: "brand-primary"
  }, [_c("h4", [_vm._v("Unique Site Views")])]), _vm._v(" "), _c("b-card-body", [_c("div", {
    staticClass: "card-text data-value"
  }, [_vm._v("\n                                    " + _vm._s(_vm.uniqueSiteViews) + "\n                                ")])])], 1)], 1)], 1), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-md-6"
  }, [_c("div", {
    staticClass: "card mb-3"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "card-title"
  }, [_c("h1", [_vm._v("Recent Survey Submissions")]), _vm._v(" "), _c("div", {
    staticClass: "card-text"
  }, [_c("p", [_vm._v("Below are the latest survey submissions.")])])])])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-12"
  }, [_c("div", {
    staticClass: "pages"
  }, [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered table-striped table-centered"
  }, [_c("thead", [_c("tr", [_c("th", {
    staticClass: "id-field",
    attrs: {
      scope: "col"
    }
  }, [_vm._v("#")]), _vm._v(" "), _c("th", {
    attrs: {
      scope: "col"
    }
  }, [_vm._v("Source")]), _vm._v(" "), _c("th", {
    attrs: {
      scope: "col"
    }
  }, [_vm._v("Date Submitted")])])]), _vm._v(" "), _c("tbody", _vm._l(_vm.surveySubmissions, function (surveySubmission, i) {
    return _c("tr", {
      staticClass: "hover-pointer",
      attrs: {
        id: i + "_survey_submission"
      },
      on: {
        click: function click($event) {
          return _vm.showSurveySubmission($event, surveySubmission.id);
        }
      }
    }, [_c("b-popover", {
      attrs: {
        target: i + "_survey_submission",
        placement: "left",
        title: "More Information",
        delay: {
          show: 500,
          hide: 800
        },
        triggers: "hover",
        content: "Click to view more information about this survey submission."
      }
    }), _vm._v(" "), _c("td", [_vm._v(" " + _vm._s(surveySubmission.id))]), _vm._v(" "), _c("td", [_vm._v(" " + _vm._s(surveySubmission.source))]), _vm._v(" "), _c("td", [_vm._v(" " + _vm._s(_vm.moment(surveySubmission.created_at).format("MMM Do YYYY")))])], 1);
  }), 0)])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-md-6"
  }, [_c("div", {
    staticClass: "card mb-3"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "card-title"
  }, [_c("h1", [_vm._v("Recent Sign Requests")]), _vm._v(" "), _c("div", {
    staticClass: "card-text"
  }, [_c("p", [_vm._v("Below are the latest sign requests.")])])])])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-12"
  }, [_c("div", {
    staticClass: "pages"
  }, [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered table-striped table-centered"
  }, [_c("thead", [_c("tr", [_c("th", {
    staticClass: "id-field",
    attrs: {
      scope: "col"
    }
  }, [_vm._v("#")]), _vm._v(" "), _c("th", {
    attrs: {
      scope: "col"
    }
  }, [_vm._v("Name")]), _vm._v(" "), _c("th", {
    attrs: {
      scope: "col"
    }
  }, [_vm._v("Date Submitted")])])]), _vm._v(" "), _c("tbody", _vm._l(_vm.signRequests, function (signRequest, i) {
    return _c("tr", {
      staticClass: "hover-pointer",
      attrs: {
        id: i + "_sign_request"
      },
      on: {
        click: function click($event) {
          return _vm.showSignRequest($event, signRequest.id);
        }
      }
    }, [_c("b-popover", {
      attrs: {
        target: i + "_sign_request",
        placement: "left",
        title: "More Information",
        delay: {
          show: 500,
          hide: 800
        },
        triggers: "hover",
        content: "Click to view more information about this sign request."
      }
    }), _vm._v(" "), _c("td", [_vm._v(" " + _vm._s(signRequest.id))]), _vm._v(" "), _c("td", [_vm._v(" " + _vm._s(signRequest.name))]), _vm._v(" "), _c("td", [_vm._v(" " + _vm._s(_vm.moment(signRequest.created_at).format("MMM Do YYYY")))])], 1);
  }), 0)])])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 col-md-6"
  }, [_c("div", {
    staticClass: "card mb-3"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "card-title"
  }, [_c("h1", [_vm._v("Recent Volunteers")]), _vm._v(" "), _c("div", {
    staticClass: "card-text"
  }, [_c("p", [_vm._v("Below are the latest volunteers.")])])])])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-12"
  }, [_c("div", {
    staticClass: "pages"
  }, [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered table-striped table-centered"
  }, [_c("thead", [_c("tr", [_c("th", {
    staticClass: "id-field",
    attrs: {
      scope: "col"
    }
  }, [_vm._v("#")]), _vm._v(" "), _c("th", {
    attrs: {
      scope: "col"
    }
  }, [_vm._v("Name")]), _vm._v(" "), _c("th", {
    attrs: {
      scope: "col"
    }
  }, [_vm._v("Date Submitted")])])]), _vm._v(" "), _c("tbody", _vm._l(_vm.volunteers, function (volunteer, i) {
    return _c("tr", {
      staticClass: "hover-pointer",
      attrs: {
        id: i + "_volunteer"
      },
      on: {
        click: function click($event) {
          return _vm.showVolunteer($event, volunteer.id);
        }
      }
    }, [_c("b-popover", {
      attrs: {
        target: i + "_volunteer",
        placement: "left",
        title: "More Information",
        delay: {
          show: 500,
          hide: 800
        },
        triggers: "hover",
        content: "Click to view more information about this volunteer."
      }
    }), _vm._v(" "), _c("td", [_vm._v(" " + _vm._s(volunteer.id))]), _vm._v(" "), _c("td", [_vm._v(" " + _vm._s(volunteer.name))]), _vm._v(" "), _c("td", [_vm._v(" " + _vm._s(_vm.moment(volunteer.created_at).format("MMM Do YYYY")))])], 1);
  }), 0)])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-md-6"
  }, [_c("div", {
    staticClass: "card mb-3"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "card-title"
  }, [_c("h1", [_vm._v("Recent Donations")]), _vm._v(" "), _c("div", {
    staticClass: "card-text"
  }, [_c("p", [_vm._v("Below are the latest donations.")])])])])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-12"
  }, [_c("div", {
    staticClass: "pages"
  }, [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered table-striped table-centered"
  }, [_c("thead", [_c("tr", [_c("th", {
    staticClass: "id-field",
    attrs: {
      scope: "col"
    }
  }, [_vm._v("#")]), _vm._v(" "), _c("th", {
    attrs: {
      scope: "col"
    }
  }, [_vm._v("Name")]), _vm._v(" "), _c("th", {
    attrs: {
      scope: "col"
    }
  }, [_vm._v("Date Submitted")])])]), _vm._v(" "), _c("tbody", _vm._l(_vm.donations, function (donation, i) {
    return _c("tr", {
      staticClass: "hover-pointer",
      attrs: {
        id: i + "_donation"
      },
      on: {
        click: function click($event) {
          return _vm.showDonation($event, donation.id);
        }
      }
    }, [_c("b-popover", {
      attrs: {
        target: i + "_donation",
        placement: "left",
        title: "More Information",
        delay: {
          show: 500,
          hide: 800
        },
        triggers: "hover",
        content: "Click to view more information about this donation."
      }
    }), _vm._v(" "), _c("td", [_vm._v(" " + _vm._s(donation.id))]), _vm._v(" "), _c("td", [_vm._v(" " + _vm._s(donation.name))]), _vm._v(" "), _c("td", [_vm._v(" " + _vm._s(_vm.moment(donation.created_at).format("MMM Do YYYY")))])], 1);
  }), 0)])])])])])])])])])]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/Dashboard.vue?vue&type=style&index=0&id=12658639&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/Dashboard.vue?vue&type=style&index=0&id=12658639&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@media (min-width: 768px) and (max-width: 991px) {\nh1[data-v-12658639] {\n    font-size: 1.5rem;\n}\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/Dashboard.vue?vue&type=style&index=0&id=12658639&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/Dashboard.vue?vue&type=style&index=0&id=12658639&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_12658639_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dashboard.vue?vue&type=style&index=0&id=12658639&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/Dashboard.vue?vue&type=style&index=0&id=12658639&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_12658639_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_12658639_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/admin/Dashboard.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/admin/Dashboard.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Dashboard_vue_vue_type_template_id_12658639_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=12658639&scoped=true& */ "./resources/js/components/admin/Dashboard.vue?vue&type=template&id=12658639&scoped=true&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/Dashboard.vue?vue&type=script&lang=js&");
/* harmony import */ var _Dashboard_vue_vue_type_style_index_0_id_12658639_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=style&index=0&id=12658639&lang=scss&scoped=true& */ "./resources/js/components/admin/Dashboard.vue?vue&type=style&index=0&id=12658639&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_12658639_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Dashboard_vue_vue_type_template_id_12658639_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "12658639",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/Dashboard.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/Dashboard.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/admin/Dashboard.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/Dashboard.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/Dashboard.vue?vue&type=template&id=12658639&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/admin/Dashboard.vue?vue&type=template&id=12658639&scoped=true& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_12658639_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_12658639_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_12658639_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dashboard.vue?vue&type=template&id=12658639&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/Dashboard.vue?vue&type=template&id=12658639&scoped=true&");


/***/ }),

/***/ "./resources/js/components/admin/Dashboard.vue?vue&type=style&index=0&id=12658639&lang=scss&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/admin/Dashboard.vue?vue&type=style&index=0&id=12658639&lang=scss&scoped=true& ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_12658639_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dashboard.vue?vue&type=style&index=0&id=12658639&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/Dashboard.vue?vue&type=style&index=0&id=12658639&lang=scss&scoped=true&");


/***/ })

}]);