"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["survey"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/page-templates/SurveyPage.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/page-templates/SurveyPage.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'survey-page',
  data: function data() {
    return {
      loading: false,
      formCompleted: false,
      alert: {
        message: ''
      },
      serverErrors: null,
      survey: {
        name: '',
        surveyData: {},
        source: ''
      },
      optionRankIndex: 1,
      surveyQuestions: [{
        question: 'What are the most important issues regarding Thorold? (Rank top 3)',
        type: 'ranked',
        availableOptions: [{
          rank: '',
          option: 'Affordable Housing'
        }, {
          rank: '',
          option: 'By-Law Enforcement'
        }, {
          rank: '',
          option: 'Economic Development'
        }, {
          rank: '',
          option: 'Employment'
        }, {
          rank: '',
          option: 'Environment'
        }, {
          rank: '',
          option: 'Historical Preservation'
        }, {
          rank: '',
          option: 'Policing'
        }, {
          rank: '',
          option: 'Public Transportation'
        }, {
          rank: '',
          option: 'Recreational Facilities'
        }, {
          rank: '',
          option: 'Road Infrastructure'
        }, {
          rank: '',
          option: 'Student Issues'
        }, {
          rank: '',
          option: 'Taxation'
        }, {
          rank: '',
          option: 'Water & Sewer Infrastructure'
        }, {
          rank: '',
          option: 'Other',
          extra: true,
          extraValue: ''
        }],
        answer: ''
      }, {
        question: 'What is the City of Thorold doing right?',
        type: 'textarea',
        answer: ''
      }, {
        question: 'Where does the City of Thorold need improvement?',
        type: 'textarea',
        answer: ''
      }, {
        question: 'What cultural or recreational facilities does the City of Thorold need?',
        type: 'textarea',
        answer: ''
      }, {
        question: 'What environmental initatives should the City of Thorold support?',
        type: 'textarea',
        answer: ''
      }, {
        question: 'Do you have any additional comments?',
        type: 'textarea',
        answer: ''
      }]
    };
  },
  methods: {
    /**
     * Submits the survey
     */
    submitSurvey: function submitSurvey() {
      var self = this;
      self.loading = true;
      self.alert.message = null;
      self.serverErrors = null;
      self.survey.source = self.guessDeviceSource();
      self.survey.surveyData = self.surveyQuestions;
      window.axios.post(self.API_ROUTE + 'form-submissions/survey', self.survey).then(function (response) {
        self.serverErrors = null;
        self.alert.message = response.data.message;

        for (var i = 0; i < self.surveyQuestions.length; i++) {
          self.surveyQuestions[i].answer = '';

          if (self.surveyQuestions[i].type === 'ranked') {
            for (var j = 0; j < self.surveyQuestions[i].availableOptions.length; j++) {
              self.surveyQuestions[i].availableOptions[j].rank = '';

              if (self.surveyQuestions[i].availableOptions[j].extra) {
                self.surveyQuestions[i].availableOptions[j].extraValue = '';
              }
            }
          }

          if (self.surveyQuestions[i].hasYesNo) {
            self.surveyQuestions[i].yesNoAnswer = null;
          }
        }

        self.loading = false;
        self.formCompleted = true;
      })["catch"](function (error) {
        if (error.response.data.errors) {
          self.serverErrors = error.response.data.errors;
        }

        flash(error.response.data.message, 'error');
        self.loading = false;
      });
      self.scrollToTop();
      return;
    },

    /**
     * @param option
     */
    rankedItemClicked: function rankedItemClicked(option) {
      if (!option.rank) {
        option.rank = this.optionRankIndex;
        this.optionRankIndex += 1;
      } else {
        if (option.rank > this.optionRankIndex) {
          option.rank = this.optionRankIndex;
          this.optionRankIndex += 1;
        }
      }
    },

    /**
     * Reset the ranked items
     */
    resetRankedItems: function resetRankedItems() {
      var self = this;

      for (var i = 0; i < self.surveyQuestions.length; i++) {
        if (self.surveyQuestions[i].type === 'ranked') {
          for (var j = 0; j < self.surveyQuestions[i].availableOptions.length; j++) {
            self.surveyQuestions[i].availableOptions[j].rank = '';
          }

          this.optionRankIndex = 1;
        }
      }
    },

    /**
     * Attempts to determine the device size based on screen width
     *
     * @returns {string}
     */
    guessDeviceSource: function guessDeviceSource() {
      // determine device source
      var width = $(window).width();
      var deviceSource = '';

      switch (true) {
        case width < 768:
          deviceSource = 'mobile';
          break;

        case width < 980:
          deviceSource = 'tablet';
          break;

        default:
          deviceSource = 'desktop';
          break;
      }

      return deviceSource;
    },

    /**
     * Scrolls to the top
     */
    scrollToTop: function scrollToTop() {
      var scrollTo = this.$el.querySelector('h1');

      if (scrollTo) {
        scrollTo.scrollIntoView(false);
      }
    },

    /**
     * @param surveyQuestion
     * @returns {string}
     */
    determinePlaceholder: function determinePlaceholder(surveyQuestion) {
      if (surveyQuestion.hasYesNo) {
        return 'Why?';
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/page-templates/SurveyPage.vue?vue&type=template&id=b7d307fc&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/page-templates/SurveyPage.vue?vue&type=template&id=b7d307fc&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "container"
  }, [_c("div", {
    staticClass: "page-content main-area"
  }, [_vm.alert.message ? _c("div", {
    staticClass: "thank-you-message",
    attrs: {
      role: "alert"
    }
  }, [_c("div", {
    domProps: {
      innerHTML: _vm._s(_vm.alert.message)
    }
  })]) : _c("div", [_c("h1", {
    staticClass: "mb-3"
  }, [_vm._v("Please fill out the survey below")]), _vm._v(" "), _c("p", {
    staticClass: "mb-4"
  }, [_vm._v("I am gathering data on the important issues facing Thorold. Please complete the\n                questions below so I can better serve you.")])]), _vm._v(" "), _vm.serverErrors ? _c("div", {
    staticClass: "alert alert-danger"
  }, _vm._l(_vm.serverErrors, function (error, i) {
    return _c("li", [error[0] ? _c("span", [_vm._v(_vm._s(error[0]))]) : _vm._e()]);
  }), 0) : _vm._e(), _vm._v(" "), _vm.loading ? _c("div", {
    staticClass: "loading mb-3 text-center"
  }, [_c("i", {
    staticClass: "fa fa-spinner fa-spin",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" Submitting..\n        ")]) : _vm._e(), _vm._v(" "), !_vm.loading && !_vm.formCompleted ? _c("form", {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.submitSurvey.apply(null, arguments);
      }
    }
  }, [_vm._l(_vm.surveyQuestions, function (surveyQuestion, i) {
    return _c("b-form-group", {
      key: "survey_question_" + "_" + i
    }, [_c("label", {
      attrs: {
        "for": "textarea_" + i
      }
    }, [_vm._v(" " + _vm._s(surveyQuestion.question) + " "), surveyQuestion.link ? _c("a", {
      attrs: {
        target: "_blank",
        href: surveyQuestion.link
      }
    }, [_vm._v(_vm._s(surveyQuestion.link))]) : _vm._e()]), _vm._v(" "), surveyQuestion.type === "ranked" ? _c("b-form-text", [_vm._v("Click on an issue to rank it.\n                    "), _c("a", {
      attrs: {
        href: "#"
      },
      on: {
        click: function click($event) {
          $event.preventDefault();
          return _vm.resetRankedItems.apply(null, arguments);
        }
      }
    }, [_vm._v("Click here if you wish to reset the ranking.")])]) : _vm._e(), _vm._v(" "), surveyQuestion.type === "textarea" ? _c("div", [surveyQuestion.hasYesNo ? _c("div", [_c("b-form-radio-group", {
      attrs: {
        id: "yes_no_" + i,
        options: surveyQuestion.radios,
        name: "yes-no-radio"
      },
      model: {
        value: surveyQuestion.yesNoAnswer,
        callback: function callback($$v) {
          _vm.$set(surveyQuestion, "yesNoAnswer", $$v);
        },
        expression: "surveyQuestion.yesNoAnswer"
      }
    })], 1) : _vm._e(), _vm._v(" "), _c("b-form-textarea", {
      attrs: {
        id: "textarea_" + i,
        rows: 3,
        placeholder: _vm.determinePlaceholder(surveyQuestion)
      },
      model: {
        value: surveyQuestion.answer,
        callback: function callback($$v) {
          _vm.$set(surveyQuestion, "answer", $$v);
        },
        expression: "surveyQuestion.answer"
      }
    })], 1) : _vm._e(), _vm._v(" "), surveyQuestion.type === "ranked" ? _c("div", {
      staticClass: "ranked-options"
    }, [_vm._l(surveyQuestion.availableOptions, function (option, j) {
      return _c("div", {
        staticClass: "ranked-option",
        on: {
          click: function click($event) {
            return _vm.rankedItemClicked(option);
          }
        }
      }, [_c("div", {
        staticClass: "option-rank"
      }, [_vm._v(" " + _vm._s(option.rank))]), _vm._v(" "), _c("label", [_vm._v(_vm._s(option.option))]), _vm._v(" "), option.extra ? _c("b-form-textarea", {
        staticClass: "option-extra",
        attrs: {
          placeholder: "Please explain the issue."
        },
        model: {
          value: option.extraValue,
          callback: function callback($$v) {
            _vm.$set(option, "extraValue", $$v);
          },
          expression: "option.extraValue"
        }
      }) : _vm._e(), _vm._v(" "), _c("div", {
        staticClass: "clearfix"
      })], 1);
    }), _vm._v(" "), _c("div", {
      staticClass: "clearfix"
    })], 2) : _vm._e()], 1);
  }), _vm._v(" "), _c("b-button", {
    staticClass: "mb-5",
    attrs: {
      type: "submit",
      variant: "primary"
    }
  }, [_vm._v("Submit")])], 2) : _vm._e()])]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/page-templates/SurveyPage.vue?vue&type=style&index=0&id=b7d307fc&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/page-templates/SurveyPage.vue?vue&type=style&index=0&id=b7d307fc&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".loading[data-v-b7d307fc] {\n  color: #a51e36;\n  font-size: 1.5rem;\n}\n.thank-you-message[data-v-b7d307fc] {\n  min-height: inherit;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\nform .form-text[data-v-b7d307fc] {\n  line-height: 1.6;\n  margin-top: 0;\n  margin-bottom: 10px;\n}\nform .form-text a[data-v-b7d307fc] {\n  font-size: inherit;\n}\nform .form-text a[data-v-b7d307fc]:hover {\n  text-decoration: none;\n}\nform label[data-v-b7d307fc] {\n  font-weight: bold;\n}\nform .ranked-options .ranked-option[data-v-b7d307fc] {\n  float: left;\n  width: 50%;\n  margin-bottom: 5px;\n}\nform .ranked-options .ranked-option[data-v-b7d307fc]:hover {\n  cursor: pointer;\n}\n@media (max-width: 767px) {\nform .ranked-options .ranked-option[data-v-b7d307fc] {\n    width: 100%;\n}\n}\nform .ranked-options .ranked-option label[data-v-b7d307fc], form .ranked-options .ranked-option input[data-v-b7d307fc], form .ranked-options .ranked-option .option-rank[data-v-b7d307fc] {\n  float: left;\n}\nform .ranked-options .ranked-option label[data-v-b7d307fc] {\n  padding: 2px 15px;\n}\n@media (max-width: 767px) {\nform .ranked-options .ranked-option label[data-v-b7d307fc] {\n    font-size: 0.9rem;\n}\n}\nform .ranked-options .ranked-option label[data-v-b7d307fc]:hover {\n  cursor: pointer;\n}\nform .ranked-options .ranked-option input[data-v-b7d307fc], form .ranked-options .ranked-option .option-rank[data-v-b7d307fc] {\n  width: 50px;\n  text-align: center;\n  min-height: 38px;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n}\nform .ranked-options .ranked-option textarea.option-extra[data-v-b7d307fc] {\n  width: 400px;\n  text-align: left;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/page-templates/SurveyPage.vue?vue&type=style&index=0&id=b7d307fc&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/page-templates/SurveyPage.vue?vue&type=style&index=0&id=b7d307fc&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SurveyPage_vue_vue_type_style_index_0_id_b7d307fc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SurveyPage.vue?vue&type=style&index=0&id=b7d307fc&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/page-templates/SurveyPage.vue?vue&type=style&index=0&id=b7d307fc&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SurveyPage_vue_vue_type_style_index_0_id_b7d307fc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SurveyPage_vue_vue_type_style_index_0_id_b7d307fc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/page-templates/SurveyPage.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/page-templates/SurveyPage.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SurveyPage_vue_vue_type_template_id_b7d307fc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SurveyPage.vue?vue&type=template&id=b7d307fc&scoped=true& */ "./resources/js/components/page-templates/SurveyPage.vue?vue&type=template&id=b7d307fc&scoped=true&");
/* harmony import */ var _SurveyPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SurveyPage.vue?vue&type=script&lang=js& */ "./resources/js/components/page-templates/SurveyPage.vue?vue&type=script&lang=js&");
/* harmony import */ var _SurveyPage_vue_vue_type_style_index_0_id_b7d307fc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SurveyPage.vue?vue&type=style&index=0&id=b7d307fc&lang=scss&scoped=true& */ "./resources/js/components/page-templates/SurveyPage.vue?vue&type=style&index=0&id=b7d307fc&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SurveyPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SurveyPage_vue_vue_type_template_id_b7d307fc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _SurveyPage_vue_vue_type_template_id_b7d307fc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "b7d307fc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/page-templates/SurveyPage.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/page-templates/SurveyPage.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/page-templates/SurveyPage.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SurveyPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SurveyPage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/page-templates/SurveyPage.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SurveyPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/page-templates/SurveyPage.vue?vue&type=template&id=b7d307fc&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/page-templates/SurveyPage.vue?vue&type=template&id=b7d307fc&scoped=true& ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SurveyPage_vue_vue_type_template_id_b7d307fc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SurveyPage_vue_vue_type_template_id_b7d307fc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SurveyPage_vue_vue_type_template_id_b7d307fc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SurveyPage.vue?vue&type=template&id=b7d307fc&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/page-templates/SurveyPage.vue?vue&type=template&id=b7d307fc&scoped=true&");


/***/ }),

/***/ "./resources/js/components/page-templates/SurveyPage.vue?vue&type=style&index=0&id=b7d307fc&lang=scss&scoped=true&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/components/page-templates/SurveyPage.vue?vue&type=style&index=0&id=b7d307fc&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SurveyPage_vue_vue_type_style_index_0_id_b7d307fc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SurveyPage.vue?vue&type=style&index=0&id=b7d307fc&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/page-templates/SurveyPage.vue?vue&type=style&index=0&id=b7d307fc&lang=scss&scoped=true&");


/***/ })

}]);