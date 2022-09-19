"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["admin"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/AdminComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/AdminComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _layouts_AdminSidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layouts/AdminSidebar */ "./resources/js/components/admin/layouts/AdminSidebar.vue");
/* harmony import */ var _layouts_AdminHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layouts/AdminHeader */ "./resources/js/components/admin/layouts/AdminHeader.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    AdminHeader: _layouts_AdminHeader__WEBPACK_IMPORTED_MODULE_1__["default"],
    AdminSidebar: _layouts_AdminSidebar__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    flash: {
      message: '',
      type: ''
    },
    title: ''
  },
  metaInfo: function metaInfo() {
    return {
      title: 'Admin',
      titleTemplate: '%s | ' + this.THEME_NAME,
      meta: [{
        name: 'robots',
        content: 'noindex, nofollow'
      }]
    };
  },
  data: function data() {
    return {};
  },
  created: function created() {
    if (!this.authenticated()) {
      this.$router.push({
        path: '/',
        params: {
          flash: {
            message: 'You must be authenticated to view the admin section. Please log in.',
            type: 'warning'
          }
        }
      });
    }
  },
  methods: {
    /**
     * Returns true if the user is authenticated.
     *
     * @returns {boolean}
     */
    authenticated: function authenticated() {
      return this.$ls.get('user');
    }
  }
});

/***/ }),

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
/* harmony import */ var _AdminComponent_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminComponent.vue */ "./resources/js/components/admin/AdminComponent.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'dashboard',
  components: {
    AdminHeader: _layouts_AdminHeader__WEBPACK_IMPORTED_MODULE_0__["default"],
    AdminComponent: _AdminComponent_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/donations/DonationList.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/donations/DonationList.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AdminComponent_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../AdminComponent.vue */ "./resources/js/components/admin/AdminComponent.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    AdminComponent: _AdminComponent_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      params: {
        title: ''
      },
      donations: [],
      loading: false
    };
  },
  mounted: function mounted() {
    this.getDonationRequests();
  },
  methods: {
    /**
     * Show a specified donation.
     *
     * @param id
     */
    showDonationRequest: function showDonationRequest(event, id) {
      // only if you didn't click a link within
      if (!$(event.target).is('a')) {
        this.$router.push({
          name: 'donations.show',
          params: {
            id: id
          }
        });
      }
    },

    /**
     * Get all donations.
     */
    getDonationRequests: function getDonationRequests(apiRoute) {
      var _this = this;

      this.clearDonationRequests();
      apiRoute = apiRoute || this.API_ROUTE + 'donations';
      window.axios.get(apiRoute).then(function (response) {
        _this.donations = response.data.donations;
        _this.loading = false;
      })["catch"](function (error) {
        flash('Error loading donations. Reason: ' + error.response.data.message, 'error');
      });
    },

    /**
     * Clear all currently shown donations.
     */
    clearDonationRequests: function clearDonationRequests() {
      this.donations = [];
      this.loading = true;
    },

    /**
     * Delete selected donation.
     * @param id
     */
    deleteDonationRequest: function deleteDonationRequest(id) {
      var _this2 = this;

      var donation = {};

      for (var i = 0; i < this.donations.length; i++) {
        if (this.donations[i].id === id) {
          donation = this.donations[i];
        }
      }

      this.$swal({
        title: 'Are you sure you want to delete donation #' + donation.id + '?',
        text: 'Deleting a donation is permanent',
        type: 'warning',
        showCancelButton: true
      }).then(function (result) {
        if (result.value) {
          window.axios["delete"](_this2.API_ROUTE + 'donations/' + id).then(function (response) {
            _this2.getDonationRequests();

            flash('Successfully deleted donation #' + response.data.donation.id + '.', 'success');
          });
        }
      })["catch"](function (error) {
        flash(error.response.data.message, 'error');
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/donations/DonationShow.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/donations/DonationShow.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AdminComponent_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../AdminComponent.vue */ "./resources/js/components/admin/AdminComponent.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'donation-show',
  components: {
    AdminComponent: _AdminComponent_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      loading: true,
      donation: {}
    };
  },
  mounted: function mounted() {
    this.getdonation(this.$route.params.id);
  },
  methods: {
    /**
     * Get the specified donation.
     *
     * @param id
     */
    getdonation: function getdonation(id) {
      var _this = this;

      window.axios.get(this.API_ROUTE + 'donations/' + id).then(function (response) {
        _this.donation = response.data.donation;
        _this.loading = false;
      })["catch"](function (error) {
        flash(error.response.data.message, 'error');
      });
    },

    /**
     * @param availableOptions
     */
    sortedAvailableOptions: function sortedAvailableOptions(availableOptions) {
      return availableOptions.slice().sort(function (a, b) {
        return a.rank - b.rank;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/layouts/AdminHeader.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/layouts/AdminHeader.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'admin-header',
  props: {
    isAdminSection: false
  },
  computed: {
    viewSiteAndAdminRoute: function viewSiteAndAdminRoute() {
      if (this.isAdminSection) {
        return {
          path: '/'
        };
      } else {
        return {
          name: 'admin.dashboard'
        };
      }
    }
  },
  methods: {
    /**
     * Log out the user.
     */
    logout: function logout() {
      var _this = this;

      window.axios.post('/logout').then(function (response) {
        _this.$ls.remove('user');

        _this.$ls.remove('accessToken');

        _this.$router.push({
          path: '/',
          params: {
            flash: {
              message: 'Successfully logged out.',
              type: 'info'
            }
          }
        }); // emit loggedIn (set to false) event so the nav knows to change


        _this.$bus.$emit('loggedIn', false);
      })["catch"](function (error) {});
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/layouts/AdminSidebar.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/layouts/AdminSidebar.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'admin-sidebar'
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/sign-requests/SignRequestList.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/sign-requests/SignRequestList.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AdminComponent_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../AdminComponent.vue */ "./resources/js/components/admin/AdminComponent.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    AdminComponent: _AdminComponent_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      params: {
        title: ''
      },
      signRequests: [],
      loading: false
    };
  },
  mounted: function mounted() {
    this.getSignRequests();
  },
  methods: {
    /**
     * Show a specified sign request.
     *
     * @param id
     */
    showSignRequest: function showSignRequest(event, id) {
      // only if you didn't click a link within
      if (!$(event.target).is('a')) {
        this.$router.push({
          name: 'sign-requests.show',
          params: {
            id: id
          }
        });
      }
    },

    /**
     * Get all sign requests.
     */
    getSignRequests: function getSignRequests(apiRoute) {
      var _this = this;

      this.clearSignRequests();
      apiRoute = apiRoute || this.API_ROUTE + 'sign-requests';
      window.axios.get(apiRoute).then(function (response) {
        _this.signRequests = response.data.signRequests;
        _this.loading = false;
      })["catch"](function (error) {
        flash('Error loading sign requests. Reason: ' + error.response.data.message, 'error');
      });
    },

    /**
     * Clear all currently shown sign requests.
     */
    clearSignRequests: function clearSignRequests() {
      this.signRequests = [];
      this.loading = true;
    },

    /**
     * Delete selected sign request.
     * @param id
     */
    deleteSignRequest: function deleteSignRequest(id) {
      var _this2 = this;

      var signRequest = {};

      for (var i = 0; i < this.signRequests.length; i++) {
        if (this.signRequests[i].id === id) {
          signRequest = this.signRequests[i];
        }
      }

      this.$swal({
        title: 'Are you sure you want to delete sign request #' + signRequest.id + '?',
        text: 'Deleting a sign request is permanent',
        type: 'warning',
        showCancelButton: true
      }).then(function (result) {
        if (result.value) {
          window.axios["delete"](_this2.API_ROUTE + 'sign-requests/' + id).then(function (response) {
            _this2.getSignRequests();

            flash('Successfully deleted sign request #' + response.data.signRequest.id + '.', 'success');
          });
        }
      })["catch"](function (error) {
        flash(error.response.data.message, 'error');
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/sign-requests/SignRequestShow.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/sign-requests/SignRequestShow.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AdminComponent_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../AdminComponent.vue */ "./resources/js/components/admin/AdminComponent.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'sign-request-show',
  components: {
    AdminComponent: _AdminComponent_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      loading: true,
      signRequest: {}
    };
  },
  mounted: function mounted() {
    this.getsignRequest(this.$route.params.id);
  },
  methods: {
    /**
     * Get the specified sign request.
     *
     * @param id
     */
    getsignRequest: function getsignRequest(id) {
      var _this = this;

      window.axios.get(this.API_ROUTE + 'sign-requests/' + id).then(function (response) {
        _this.signRequest = response.data.signRequest;
        _this.loading = false;
      })["catch"](function (error) {
        flash(error.response.data.message, 'error');
      });
    },

    /**
     * @param availableOptions
     */
    sortedAvailableOptions: function sortedAvailableOptions(availableOptions) {
      return availableOptions.slice().sort(function (a, b) {
        return a.rank - b.rank;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/survey-submissions/SurveySubmissionList.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/survey-submissions/SurveySubmissionList.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AdminComponent_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../AdminComponent.vue */ "./resources/js/components/admin/AdminComponent.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    AdminComponent: _AdminComponent_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      params: {
        title: ''
      },
      surveySubmissions: [],
      loading: false
    };
  },
  mounted: function mounted() {
    this.getSurveySubmissions();
  },
  methods: {
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
     * Get all survey submissions.
     */
    getSurveySubmissions: function getSurveySubmissions(apiRoute) {
      var _this = this;

      this.clearSurveySubmissions();
      apiRoute = apiRoute || this.API_ROUTE + 'survey-submissions';
      window.axios.get(apiRoute).then(function (response) {
        _this.surveySubmissions = response.data.surveySubmissions;
        _this.loading = false;
      })["catch"](function (error) {
        flash('Error loading survey submissions. Reason: ' + error.response.data.message, 'error');
      });
    },

    /**
     * Clear all currently shown survey submissions.
     */
    clearSurveySubmissions: function clearSurveySubmissions() {
      this.surveySubmissions = [];
      this.loading = true;
    },

    /**
     * Delete selected survey submission.
     * @param id
     */
    deleteSurveySubmission: function deleteSurveySubmission(id) {
      var _this2 = this;

      var surveySubmission = {};

      for (var i = 0; i < this.surveySubmissions.length; i++) {
        if (this.surveySubmissions[i].id === id) {
          surveySubmission = this.surveySubmissions[i];
        }
      }

      this.$swal({
        title: 'Are you sure you want to delete survey submission #' + surveySubmission.id + '?',
        text: 'Deleting a survey submission is permanent',
        type: 'warning',
        showCancelButton: true
      }).then(function (result) {
        if (result.value) {
          window.axios["delete"](_this2.API_ROUTE + 'survey-submissions/' + id).then(function (response) {
            _this2.getSurveySubmissions();

            flash('Successfully deleted survey submission #' + response.data.surveySubmission.id + '.', 'success');
          });
        }
      })["catch"](function (error) {
        flash(error.response.data.message, 'error');
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/survey-submissions/SurveySubmissionShow.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/survey-submissions/SurveySubmissionShow.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AdminComponent_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../AdminComponent.vue */ "./resources/js/components/admin/AdminComponent.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'survey-submission-show',
  components: {
    AdminComponent: _AdminComponent_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      loading: true,
      surveySubmission: {}
    };
  },
  mounted: function mounted() {
    this.getSurveySubmission(this.$route.params.id);
  },
  methods: {
    /**
     * Get the specified survey submission.
     *
     * @param id
     */
    getSurveySubmission: function getSurveySubmission(id) {
      var _this = this;

      window.axios.get(this.API_ROUTE + 'survey-submissions/' + id).then(function (response) {
        _this.surveySubmission = response.data.surveySubmission;
        _this.loading = false;
      })["catch"](function (error) {
        flash(error.response.data.message, 'error');
      });
    },

    /**
     * @param availableOptions
     */
    sortedAvailableOptions: function sortedAvailableOptions(availableOptions) {
      return availableOptions.slice().sort(function (a, b) {
        return a.rank - b.rank;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/volunteers/VolunteerList.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/volunteers/VolunteerList.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AdminComponent_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../AdminComponent.vue */ "./resources/js/components/admin/AdminComponent.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    AdminComponent: _AdminComponent_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      params: {
        title: ''
      },
      volunteers: [],
      loading: false
    };
  },
  mounted: function mounted() {
    this.getVolunteerRequests();
  },
  methods: {
    /**
     * Show a specified volunteer.
     *
     * @param id
     */
    showVolunteerRequest: function showVolunteerRequest(event, id) {
      // only if you didn't click a link within
      if (!$(event.target).is('a')) {
        this.$router.push({
          name: 'volunteers.show',
          params: {
            id: id
          }
        });
      }
    },

    /**
     * Get all volunteers.
     */
    getVolunteerRequests: function getVolunteerRequests(apiRoute) {
      var _this = this;

      this.clearVolunteerRequests();
      apiRoute = apiRoute || this.API_ROUTE + 'volunteers';
      window.axios.get(apiRoute).then(function (response) {
        _this.volunteers = response.data.volunteers;
        _this.loading = false;
      })["catch"](function (error) {
        flash('Error loading volunteers. Reason: ' + error.response.data.message, 'error');
      });
    },

    /**
     * Clear all currently shown volunteers.
     */
    clearVolunteerRequests: function clearVolunteerRequests() {
      this.volunteers = [];
      this.loading = true;
    },

    /**
     * Delete selected volunteer.
     * @param id
     */
    deleteVolunteerRequest: function deleteVolunteerRequest(id) {
      var _this2 = this;

      var volunteer = {};

      for (var i = 0; i < this.volunteers.length; i++) {
        if (this.volunteers[i].id === id) {
          volunteer = this.volunteers[i];
        }
      }

      this.$swal({
        title: 'Are you sure you want to delete volunteer #' + volunteer.id + '?',
        text: 'Deleting a volunteer is permanent',
        type: 'warning',
        showCancelButton: true
      }).then(function (result) {
        if (result.value) {
          window.axios["delete"](_this2.API_ROUTE + 'volunteers/' + id).then(function (response) {
            _this2.getVolunteerRequests();

            flash('Successfully deleted volunteer #' + response.data.volunteer.id + '.', 'success');
          });
        }
      })["catch"](function (error) {
        flash(error.response.data.message, 'error');
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/volunteers/VolunteerShow.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/volunteers/VolunteerShow.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AdminComponent_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../AdminComponent.vue */ "./resources/js/components/admin/AdminComponent.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'volunteer-show',
  components: {
    AdminComponent: _AdminComponent_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      loading: true,
      volunteer: {}
    };
  },
  mounted: function mounted() {
    this.getvolunteer(this.$route.params.id);
  },
  methods: {
    /**
     * Get the specified volunteer.
     *
     * @param id
     */
    getvolunteer: function getvolunteer(id) {
      var _this = this;

      window.axios.get(this.API_ROUTE + 'volunteers/' + id).then(function (response) {
        _this.volunteer = response.data.volunteer;
        _this.loading = false;
      })["catch"](function (error) {
        flash(error.response.data.message, 'error');
      });
    },

    /**
     * @param availableOptions
     */
    sortedAvailableOptions: function sortedAvailableOptions(availableOptions) {
      return availableOptions.slice().sort(function (a, b) {
        return a.rank - b.rank;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/AdminComponent.vue?vue&type=template&id=2073db19&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/AdminComponent.vue?vue&type=template&id=2073db19& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return this.authenticated() ? _c("div", [_c("div", {
    staticClass: "container-fluid admin-section"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("admin-sidebar"), _vm._v(" "), _vm._t("default")], 2)])]) : _vm._e();
};

var staticRenderFns = [];
render._withStripped = true;


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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/donations/DonationList.vue?vue&type=template&id=88b925ae&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/donations/DonationList.vue?vue&type=template&id=88b925ae& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("admin-component", {
    attrs: {
      flash: _vm.$attrs.flash
    }
  }, [_c("main", {
    staticClass: "col-10 col-md-9 ml-sm-auto col-lg-10 pt-3 px-2 px-sm-4",
    attrs: {
      role: "main"
    }
  }, [_c("div", {
    staticClass: "container-fluid min-body-height mt-3"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-12"
  }, [_c("div", {
    staticClass: "card mb-3"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "card-title"
  }, [_c("h1", [_vm._v("Donations")]), _vm._v(" "), _c("div", {
    staticClass: "card-text"
  }, [_c("p", [_vm._v("Below are all the donations in the system.")])])])])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-12"
  }, [_c("div", {
    staticClass: "donations"
  }, [_c("table", {
    staticClass: "table table-striped table-bordered table-branded mb-3"
  }, [_c("thead", {
    staticClass: "thead"
  }, [_c("tr", [_c("th", [_vm._v("ID")]), _vm._v(" "), _c("th", [_vm._v("Name")]), _vm._v(" "), _c("th", [_vm._v("Address")]), _vm._v(" "), _c("th", [_vm._v("Contact")]), _vm._v(" "), _c("th", [_vm._v("Submitted "), _c("span", {
    staticClass: "d-none d-sm-block"
  }, [_vm._v("On")])]), _vm._v(" "), _c("th", {
    staticClass: "actions"
  }, [_c("span", {
    staticClass: "d-none d-sm-inline-block"
  }, [_vm._v("Actions")])])])]), _vm._v(" "), _c("tbody", _vm._l(_vm.donations, function (donation, i) {
    return _c("tr", {
      "class": ["donation hover-pointer", "read-donation-" + donation.id],
      on: {
        click: function click($event) {
          return _vm.showDonationRequest($event, donation.id);
        }
      }
    }, [_c("td", {
      staticClass: "donation-num"
    }, [_vm._v(_vm._s(donation.id))]), _vm._v(" "), _c("td", {
      staticClass: "donation-name"
    }, [_vm._v(_vm._s(donation.name))]), _vm._v(" "), _c("td", {
      staticClass: "donation-address"
    }, [_vm._v(_vm._s(donation.address))]), _vm._v(" "), _c("td", {
      staticClass: "donation-contact"
    }, [_vm._v(_vm._s(donation.contact))]), _vm._v(" "), _c("td", {
      staticClass: "donation-date"
    }, [_vm._v(_vm._s(_vm.moment(donation.created_at).format("MMM Do YYYY")))]), _vm._v(" "), _c("td", [_c("a", {
      "class": ["btn btn-danger", "delete-donation-" + donation.id],
      attrs: {
        href: "#"
      },
      on: {
        click: function click($event) {
          $event.preventDefault();
          return _vm.deleteDonationRequest(donation.id);
        }
      }
    }, [_c("span", {
      staticClass: "d-none d-sm-inline-block"
    }, [_vm._v("\n                                                    Delete\n                                                ")]), _vm._v(" "), _c("i", {
      staticClass: "fa fa-trash-o d-block d-sm-none",
      attrs: {
        "aria-hidden": "true"
      }
    })])])]);
  }), 0)])])])])])])])])]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/donations/DonationShow.vue?vue&type=template&id=573c5008&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/donations/DonationShow.vue?vue&type=template&id=573c5008&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "col-10 col-md-9 ml-sm-auto col-lg-10 pt-3 px-2 px-sm-4",
    attrs: {
      role: "main"
    }
  }, [_c("div", {
    staticClass: "container-fluid min-body-height mt-3"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-12"
  }, [_c("div", {
    staticClass: "card mb-3"
  }, [!_vm.loading ? _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "card-title"
  }, [_c("h1", {
    staticClass: "float-left"
  }, [_vm._v("Donation")]), _vm._v(" "), _c("div", {
    staticClass: "clearfix"
  })]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("b-card-group", {
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
  }, [_c("h4", [_vm._v("ID")])]), _vm._v(" "), _c("b-card-body", [_c("p", {
    staticClass: "card-text data-value big"
  }, [_vm._v("\n                                                    " + _vm._s(_vm.donation.id) + "\n                                                ")])])], 1), _vm._v(" "), _c("b-card", {
    attrs: {
      "no-body": "",
      align: "center"
    }
  }, [_c("b-card-header", {
    staticClass: "brand-primary"
  }, [_c("h4", [_vm._v("Submitted On")])]), _vm._v(" "), _c("b-card-body", [_c("div", {
    staticClass: "card-text data-value"
  }, [_vm._v("\n                                                    " + _vm._s(_vm.moment(_vm.donation.created_at).format("MMM Do YYYY")) + "\n                                                ")])])], 1)], 1), _vm._v(" "), _c("b-card-group", {
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
  }, [_c("h4", [_vm._v("Name")])]), _vm._v(" "), _c("b-card-body", [_c("p", {
    staticClass: "card-text data-value big"
  }, [_vm._v("\n                                                    " + _vm._s(_vm.donation.name) + "\n                                                ")])])], 1), _vm._v(" "), _c("b-card", {
    attrs: {
      "no-body": "",
      align: "center"
    }
  }, [_c("b-card-header", {
    staticClass: "brand-primary"
  }, [_c("h4", [_vm._v("Address")])]), _vm._v(" "), _c("b-card-body", [_c("div", {
    staticClass: "card-text data-value"
  }, [_vm._v("\n                                                    " + _vm._s(_vm.donation.address) + "\n                                                ")])])], 1), _vm._v(" "), _c("b-card", {
    attrs: {
      "no-body": "",
      align: "center"
    }
  }, [_c("b-card-header", {
    staticClass: "brand-primary"
  }, [_c("h4", [_vm._v("Contact")])]), _vm._v(" "), _c("b-card-body", [_c("div", {
    staticClass: "card-text data-value"
  }, [_vm._v("\n                                                    " + _vm._s(_vm.donation.contact) + "\n                                                ")])])], 1)], 1)], 1)])]) : _vm._e()])])])])])]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/layouts/AdminHeader.vue?vue&type=template&id=9fa96aca&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/layouts/AdminHeader.vue?vue&type=template&id=9fa96aca&scoped=true& ***!
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

  return _c("header", [_c("nav", {
    staticClass: "navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0"
  }, [_vm._m(0), _vm._v(" "), _c("ul", {
    staticClass: "navbar-nav flex-row px-3"
  }, [_c("li", {
    staticClass: "nav-item mr-3"
  }, [_c("router-link", {
    staticClass: "nav-link",
    attrs: {
      to: _vm.viewSiteAndAdminRoute,
      exact: ""
    }
  }, [_vm.isAdminSection ? _c("span", [_vm._v("View Website")]) : _c("span", [_vm._v("Admin Portal")])])], 1), _vm._v(" "), _c("li", {
    staticClass: "nav-item text-nowrap"
  }, [_c("a", {
    staticClass: "nav-link hover-pointer",
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.logout();
      }
    }
  }, [_vm._v("Sign out")])])])])]);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("a", {
    staticClass: "navbar-brand col-2 col-sm-3 col-lg-2 mr-0",
    attrs: {
      href: "#"
    }
  }, [_c("span", {
    staticClass: "d-block d-sm-none"
  }, [_vm._v("HD")]), _vm._v(" "), _c("span", {
    staticClass: "d-none d-sm-block"
  }, [_vm._v("Henry D'Angela Campaign")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/layouts/AdminSidebar.vue?vue&type=template&id=0e632a84&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/layouts/AdminSidebar.vue?vue&type=template&id=0e632a84&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("nav", {
    staticClass: "col-2 col-sm-3 col-lg-2 bg-light sidebar"
  }, [_c("div", {
    staticClass: "sidebar-sticky"
  }, [_c("ul", {
    staticClass: "nav flex-column"
  }, [_c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    directives: [{
      name: "b-tooltip",
      rawName: "v-b-tooltip.html.left",
      modifiers: {
        html: true,
        left: true
      }
    }],
    staticClass: "nav-link",
    attrs: {
      to: {
        name: "admin.dashboard"
      },
      title: "View Stats"
    }
  }, [_c("i", {
    staticClass: "fa fa-pie-chart"
  }), _vm._v(" "), _c("span", {
    staticClass: "d-none d-sm-inline-block link-text"
  }, [_vm._v("Dashboard")])])], 1), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    directives: [{
      name: "b-tooltip",
      rawName: "v-b-tooltip.html.right",
      modifiers: {
        html: true,
        right: true
      }
    }],
    staticClass: "nav-link",
    attrs: {
      to: {
        name: "survey-submissions.index"
      },
      title: "View Survey Answers"
    }
  }, [_c("i", {
    staticClass: "fa fa-file-text"
  }), _vm._v(" "), _c("span", {
    staticClass: "d-none d-sm-inline-block link-text"
  }, [_vm._v("Survey Data")])])], 1), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    directives: [{
      name: "b-tooltip",
      rawName: "v-b-tooltip.html.right",
      modifiers: {
        html: true,
        right: true
      }
    }],
    staticClass: "nav-link",
    attrs: {
      to: {
        name: "sign-requests.index"
      },
      title: "View Sign Requests"
    }
  }, [_c("i", {
    staticClass: "fa fa-map-signs"
  }), _vm._v(" "), _c("span", {
    staticClass: "d-none d-sm-inline-block link-text"
  }, [_vm._v("Sign Requests")])])], 1), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    directives: [{
      name: "b-tooltip",
      rawName: "v-b-tooltip.html.right",
      modifiers: {
        html: true,
        right: true
      }
    }],
    staticClass: "nav-link",
    attrs: {
      to: {
        name: "volunteers.index"
      },
      title: "View Volunteer Requests"
    }
  }, [_c("i", {
    staticClass: "fa fa-users"
  }), _vm._v(" "), _c("span", {
    staticClass: "d-none d-sm-inline-block link-text"
  }, [_vm._v("Volunteers")])])], 1), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    directives: [{
      name: "b-tooltip",
      rawName: "v-b-tooltip.html.right",
      modifiers: {
        html: true,
        right: true
      }
    }],
    staticClass: "nav-link",
    attrs: {
      to: {
        name: "donations.index"
      },
      title: "View Donation Requests"
    }
  }, [_c("i", {
    staticClass: "fa fa-dollar"
  }), _vm._v(" "), _c("span", {
    staticClass: "d-none d-sm-inline-block link-text"
  }, [_vm._v("Donations")])])], 1)])])]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/sign-requests/SignRequestList.vue?vue&type=template&id=75ae2a3a&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/sign-requests/SignRequestList.vue?vue&type=template&id=75ae2a3a& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("admin-component", {
    attrs: {
      flash: _vm.$attrs.flash
    }
  }, [_c("main", {
    staticClass: "col-10 col-md-9 ml-sm-auto col-lg-10 pt-3 px-2 px-sm-4",
    attrs: {
      role: "main"
    }
  }, [_c("div", {
    staticClass: "container-fluid min-body-height mt-3"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-12"
  }, [_c("div", {
    staticClass: "card mb-3"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "card-title"
  }, [_c("h1", [_vm._v("Sign Requests")]), _vm._v(" "), _c("div", {
    staticClass: "card-text"
  }, [_c("p", [_vm._v("Below are all the sign requests in the system.")])])])])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-12"
  }, [_c("div", {
    staticClass: "sign-requests"
  }, [_c("table", {
    staticClass: "table table-striped table-bordered table-branded mb-3"
  }, [_c("thead", {
    staticClass: "thead"
  }, [_c("tr", [_c("th", [_vm._v("ID")]), _vm._v(" "), _c("th", [_vm._v("Name")]), _vm._v(" "), _c("th", [_vm._v("Address")]), _vm._v(" "), _c("th", [_vm._v("Contact")]), _vm._v(" "), _c("th", [_vm._v("Submitted "), _c("span", {
    staticClass: "d-none d-sm-block"
  }, [_vm._v("On")])]), _vm._v(" "), _c("th", {
    staticClass: "actions"
  }, [_c("span", {
    staticClass: "d-none d-sm-inline-block"
  }, [_vm._v("Actions")])])])]), _vm._v(" "), _c("tbody", _vm._l(_vm.signRequests, function (signRequest, i) {
    return _c("tr", {
      "class": ["sign-request hover-pointer", "read-sign-request-" + signRequest.id],
      on: {
        click: function click($event) {
          return _vm.showSignRequest($event, signRequest.id);
        }
      }
    }, [_c("td", {
      staticClass: "sign-request-num"
    }, [_vm._v(_vm._s(signRequest.id))]), _vm._v(" "), _c("td", {
      staticClass: "sign-request-name"
    }, [_vm._v(_vm._s(signRequest.name))]), _vm._v(" "), _c("td", {
      staticClass: "sign-request-address"
    }, [_vm._v(_vm._s(signRequest.street_number + " " + signRequest.street_address))]), _vm._v(" "), _c("td", {
      staticClass: "sign-request-contact"
    }, [_vm._v(_vm._s(signRequest.contact))]), _vm._v(" "), _c("td", {
      staticClass: "sign-request-date"
    }, [_vm._v(_vm._s(_vm.moment(signRequest.created_at).format("MMM Do YYYY")))]), _vm._v(" "), _c("td", [_c("a", {
      "class": ["btn btn-danger", "delete-sign-request-" + signRequest.id],
      attrs: {
        href: "#"
      },
      on: {
        click: function click($event) {
          $event.preventDefault();
          return _vm.deleteSignRequest(signRequest.id);
        }
      }
    }, [_c("span", {
      staticClass: "d-none d-sm-inline-block"
    }, [_vm._v("\n                                                    Delete\n                                                ")]), _vm._v(" "), _c("i", {
      staticClass: "fa fa-trash-o d-block d-sm-none",
      attrs: {
        "aria-hidden": "true"
      }
    })])])]);
  }), 0)])])])])])])])])]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/sign-requests/SignRequestShow.vue?vue&type=template&id=11470d19&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/sign-requests/SignRequestShow.vue?vue&type=template&id=11470d19&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "col-10 col-md-9 ml-sm-auto col-lg-10 pt-3 px-2 px-sm-4",
    attrs: {
      role: "main"
    }
  }, [_c("div", {
    staticClass: "container-fluid min-body-height mt-3"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-12"
  }, [_c("div", {
    staticClass: "card mb-3"
  }, [!_vm.loading ? _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "card-title"
  }, [_c("h1", {
    staticClass: "float-left"
  }, [_vm._v("Sign Request")]), _vm._v(" "), _c("div", {
    staticClass: "clearfix"
  })]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("b-card-group", {
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
  }, [_c("h4", [_vm._v("ID")])]), _vm._v(" "), _c("b-card-body", [_c("p", {
    staticClass: "card-text data-value big"
  }, [_vm._v("\n                                                    " + _vm._s(_vm.signRequest.id) + "\n                                                ")])])], 1), _vm._v(" "), _c("b-card", {
    attrs: {
      "no-body": "",
      align: "center"
    }
  }, [_c("b-card-header", {
    staticClass: "brand-primary"
  }, [_c("h4", [_vm._v("Submitted On")])]), _vm._v(" "), _c("b-card-body", [_c("div", {
    staticClass: "card-text data-value"
  }, [_vm._v("\n                                                    " + _vm._s(_vm.moment(_vm.signRequest.created_at).format("MMM Do YYYY")) + "\n                                                ")])])], 1)], 1), _vm._v(" "), _c("b-card-group", {
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
  }, [_c("h4", [_vm._v("Name")])]), _vm._v(" "), _c("b-card-body", [_c("p", {
    staticClass: "card-text data-value big"
  }, [_vm._v("\n                                                    " + _vm._s(_vm.signRequest.name) + "\n                                                ")])])], 1), _vm._v(" "), _c("b-card", {
    attrs: {
      "no-body": "",
      align: "center"
    }
  }, [_c("b-card-header", {
    staticClass: "brand-primary"
  }, [_c("h4", [_vm._v("Address")])]), _vm._v(" "), _c("b-card-body", [_c("div", {
    staticClass: "card-text data-value"
  }, [_vm._v("\n                                                    " + _vm._s(_vm.signRequest.street_number + " " + _vm.signRequest.street_address) + "\n                                                ")])])], 1), _vm._v(" "), _c("b-card", {
    attrs: {
      "no-body": "",
      align: "center"
    }
  }, [_c("b-card-header", {
    staticClass: "brand-primary"
  }, [_c("h4", [_vm._v("Contact")])]), _vm._v(" "), _c("b-card-body", [_c("div", {
    staticClass: "card-text data-value"
  }, [_vm._v("\n                                                    " + _vm._s(_vm.signRequest.contact) + "\n                                                ")])])], 1)], 1)], 1)])]) : _vm._e()])])])])])]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/survey-submissions/SurveySubmissionList.vue?vue&type=template&id=19becfb8&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/survey-submissions/SurveySubmissionList.vue?vue&type=template&id=19becfb8& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("admin-component", {
    attrs: {
      flash: _vm.$attrs.flash
    }
  }, [_c("main", {
    staticClass: "col-10 col-md-9 ml-sm-auto col-lg-10 pt-3 px-2 px-sm-4",
    attrs: {
      role: "main"
    }
  }, [_c("div", {
    staticClass: "container-fluid min-body-height mt-3"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-12"
  }, [_c("div", {
    staticClass: "card mb-3"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "card-title"
  }, [_c("h1", [_vm._v("Survey Submissions")]), _vm._v(" "), _c("div", {
    staticClass: "card-text"
  }, [_c("p", [_vm._v("Below are all the survey submissions in the system.")])])])])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-12"
  }, [_c("div", {
    staticClass: "survey-submissions"
  }, [_c("table", {
    staticClass: "table table-striped table-bordered table-branded mb-3"
  }, [_c("thead", {
    staticClass: "thead"
  }, [_c("tr", [_c("th", [_vm._v("ID")]), _vm._v(" "), _c("th", [_vm._v("Source")]), _vm._v(" "), _c("th", [_vm._v("Submitted "), _c("span", {
    staticClass: "d-none d-sm-block"
  }, [_vm._v("On")])]), _vm._v(" "), _c("th", {
    staticClass: "actions"
  }, [_c("span", {
    staticClass: "d-none d-sm-inline-block"
  }, [_vm._v("Actions")])])])]), _vm._v(" "), _c("tbody", _vm._l(_vm.surveySubmissions, function (surveySubmission, i) {
    return _c("tr", {
      "class": ["survey-submission hover-pointer", "read-survey-submission-" + surveySubmission.id],
      on: {
        click: function click($event) {
          return _vm.showSurveySubmission($event, surveySubmission.id);
        }
      }
    }, [_c("td", {
      staticClass: "survey-submission-num"
    }, [_vm._v(_vm._s(surveySubmission.id))]), _vm._v(" "), _c("td", {
      staticClass: "survey-submission-source"
    }, [_vm._v(_vm._s(surveySubmission.source))]), _vm._v(" "), _c("td", {
      staticClass: "survey-submission-date"
    }, [_vm._v(_vm._s(_vm.moment(surveySubmission.created_at).format("MMM Do YYYY")))]), _vm._v(" "), _c("td", [_c("a", {
      "class": ["btn btn-danger", "delete-survey-submission-" + surveySubmission.id],
      attrs: {
        href: "#"
      },
      on: {
        click: function click($event) {
          $event.preventDefault();
          return _vm.deleteSurveySubmission(surveySubmission.id);
        }
      }
    }, [_c("span", {
      staticClass: "d-none d-sm-inline-block"
    }, [_vm._v("\n                                                    Delete\n                                                ")]), _vm._v(" "), _c("i", {
      staticClass: "fa fa-trash-o d-block d-sm-none",
      attrs: {
        "aria-hidden": "true"
      }
    })])])]);
  }), 0)])])])])])])])])]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/survey-submissions/SurveySubmissionShow.vue?vue&type=template&id=e28d09fa&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/survey-submissions/SurveySubmissionShow.vue?vue&type=template&id=e28d09fa&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "col-10 col-md-9 ml-sm-auto col-lg-10 pt-3 px-2 px-sm-4",
    attrs: {
      role: "main"
    }
  }, [_c("div", {
    staticClass: "container-fluid min-body-height mt-3"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-12"
  }, [_c("div", {
    staticClass: "card mb-3"
  }, [!_vm.loading ? _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "card-title"
  }, [_c("h1", {
    staticClass: "float-left"
  }, [_vm._v("Survey Submission")]), _vm._v(" "), _c("div", {
    staticClass: "clearfix"
  })]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("b-card-group", {
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
  }, [_c("h4", [_vm._v("ID")])]), _vm._v(" "), _c("b-card-body", [_c("p", {
    staticClass: "card-text data-value big"
  }, [_vm._v("\n                                                    " + _vm._s(_vm.surveySubmission.id) + "\n                                                ")])])], 1), _vm._v(" "), _c("b-card", {
    attrs: {
      "no-body": "",
      align: "center"
    }
  }, [_c("b-card-header", {
    staticClass: "brand-primary"
  }, [_c("h4", [_vm._v("Submitted On")])]), _vm._v(" "), _c("b-card-body", [_c("div", {
    staticClass: "card-text data-value"
  }, [_vm._v("\n                                                    " + _vm._s(_vm.moment(_vm.surveySubmission.created_at).format("MMM Do YYYY")) + "\n                                                ")])])], 1)], 1), _vm._v(" "), _vm.surveySubmission.survey_data ? _c("div", {
    staticClass: "mt-5"
  }, _vm._l(_vm.surveySubmission.survey_data, function (surveyData, i) {
    return _c("div", {
      staticClass: "survey-data"
    }, [_c("h4", [_vm._v(_vm._s(surveyData.question))]), _vm._v(" "), surveyData.hasYesNo ? _c("div", {}, [_vm._v("\n                                                Yes or No: "), _c("span", {
      staticClass: "yes-no-answer"
    }, [_vm._v(_vm._s(surveyData.yesNoAnswer))])]) : _vm._e(), _vm._v(" "), !surveyData.answer ? _c("p", [_vm._v(" No answer given.")]) : _vm._e(), _vm._v(" "), _c("p", {
      domProps: {
        innerHTML: _vm._s(surveyData.answer)
      }
    }), _vm._v(" "), surveyData.type === "ranked" ? _c("div", _vm._l(_vm.sortedAvailableOptions(surveyData.availableOptions), function (option, i) {
      return _c("div", {
        staticClass: "ranked-option mb-2"
      }, [option.rank ? _c("div", [_c("span", {
        staticClass: "rank"
      }, [_vm._v(_vm._s(option.rank))]), _vm._v(" "), _c("span", {
        staticClass: "option"
      }, [_vm._v("\n                                                            " + _vm._s(option.option) + "\n                                                            "), option.extra ? _c("span", [_vm._v("\n                                                                - " + _vm._s(option.extraValue) + "\n                                                            ")]) : _vm._e()])]) : _vm._e()]);
    }), 0) : _vm._e()]);
  }), 0) : _vm._e()], 1)])]) : _vm._e()])])])])])]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/volunteers/VolunteerList.vue?vue&type=template&id=e2de0ee6&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/volunteers/VolunteerList.vue?vue&type=template&id=e2de0ee6& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("admin-component", {
    attrs: {
      flash: _vm.$attrs.flash
    }
  }, [_c("main", {
    staticClass: "col-10 col-md-9 ml-sm-auto col-lg-10 pt-3 px-2 px-sm-4",
    attrs: {
      role: "main"
    }
  }, [_c("div", {
    staticClass: "container-fluid min-body-height mt-3"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-12"
  }, [_c("div", {
    staticClass: "card mb-3"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "card-title"
  }, [_c("h1", [_vm._v("Volunteers")]), _vm._v(" "), _c("div", {
    staticClass: "card-text"
  }, [_c("p", [_vm._v("Below are all the volunteers in the system.")])])])])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-12"
  }, [_c("div", {
    staticClass: "volunteers"
  }, [_c("table", {
    staticClass: "table table-striped table-bordered table-branded mb-3"
  }, [_c("thead", {
    staticClass: "thead"
  }, [_c("tr", [_c("th", [_vm._v("ID")]), _vm._v(" "), _c("th", [_vm._v("Name")]), _vm._v(" "), _c("th", [_vm._v("Address")]), _vm._v(" "), _c("th", [_vm._v("Contact")]), _vm._v(" "), _c("th", [_vm._v("Submitted "), _c("span", {
    staticClass: "d-none d-sm-block"
  }, [_vm._v("On")])]), _vm._v(" "), _c("th", {
    staticClass: "actions"
  }, [_c("span", {
    staticClass: "d-none d-sm-inline-block"
  }, [_vm._v("Actions")])])])]), _vm._v(" "), _c("tbody", _vm._l(_vm.volunteers, function (volunteer, i) {
    return _c("tr", {
      "class": ["volunteer hover-pointer", "read-volunteer-" + volunteer.id],
      on: {
        click: function click($event) {
          return _vm.showVolunteerRequest($event, volunteer.id);
        }
      }
    }, [_c("td", {
      staticClass: "volunteer-num"
    }, [_vm._v(_vm._s(volunteer.id))]), _vm._v(" "), _c("td", {
      staticClass: "volunteer-name"
    }, [_vm._v(_vm._s(volunteer.name))]), _vm._v(" "), _c("td", {
      staticClass: "volunteer-address"
    }, [_vm._v(_vm._s(volunteer.street_address))]), _vm._v(" "), _c("td", {
      staticClass: "volunteer-contact"
    }, [_vm._v(_vm._s(volunteer.contact))]), _vm._v(" "), _c("td", {
      staticClass: "volunteer-date"
    }, [_vm._v(_vm._s(_vm.moment(volunteer.created_at).format("MMM Do YYYY")))]), _vm._v(" "), _c("td", [_c("a", {
      "class": ["btn btn-danger", "delete-volunteer-" + volunteer.id],
      attrs: {
        href: "#"
      },
      on: {
        click: function click($event) {
          $event.preventDefault();
          return _vm.deleteVolunteerRequest(volunteer.id);
        }
      }
    }, [_c("span", {
      staticClass: "d-none d-sm-inline-block"
    }, [_vm._v("\n                                                    Delete\n                                                ")]), _vm._v(" "), _c("i", {
      staticClass: "fa fa-trash-o d-block d-sm-none",
      attrs: {
        "aria-hidden": "true"
      }
    })])])]);
  }), 0)])])])])])])])])]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/volunteers/VolunteerShow.vue?vue&type=template&id=2a29db6c&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/volunteers/VolunteerShow.vue?vue&type=template&id=2a29db6c&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "col-10 col-md-9 ml-sm-auto col-lg-10 pt-3 px-2 px-sm-4",
    attrs: {
      role: "main"
    }
  }, [_c("div", {
    staticClass: "container-fluid min-body-height mt-3"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-12"
  }, [_c("div", {
    staticClass: "card mb-3"
  }, [!_vm.loading ? _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "card-title"
  }, [_c("h1", {
    staticClass: "float-left"
  }, [_vm._v("Volunteer")]), _vm._v(" "), _c("div", {
    staticClass: "clearfix"
  })]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("b-card-group", {
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
  }, [_c("h4", [_vm._v("ID")])]), _vm._v(" "), _c("b-card-body", [_c("p", {
    staticClass: "card-text data-value big"
  }, [_vm._v("\n                                                    " + _vm._s(_vm.volunteer.id) + "\n                                                ")])])], 1), _vm._v(" "), _c("b-card", {
    attrs: {
      "no-body": "",
      align: "center"
    }
  }, [_c("b-card-header", {
    staticClass: "brand-primary"
  }, [_c("h4", [_vm._v("Submitted On")])]), _vm._v(" "), _c("b-card-body", [_c("div", {
    staticClass: "card-text data-value"
  }, [_vm._v("\n                                                    " + _vm._s(_vm.moment(_vm.volunteer.created_at).format("MMM Do YYYY")) + "\n                                                ")])])], 1)], 1), _vm._v(" "), _c("b-card-group", {
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
  }, [_c("h4", [_vm._v("Name")])]), _vm._v(" "), _c("b-card-body", [_c("p", {
    staticClass: "card-text data-value big"
  }, [_vm._v("\n                                                    " + _vm._s(_vm.volunteer.name) + "\n                                                ")])])], 1), _vm._v(" "), _c("b-card", {
    attrs: {
      "no-body": "",
      align: "center"
    }
  }, [_c("b-card-header", {
    staticClass: "brand-primary"
  }, [_c("h4", [_vm._v("Address")])]), _vm._v(" "), _c("b-card-body", [_c("div", {
    staticClass: "card-text data-value"
  }, [_vm._v("\n                                                    " + _vm._s(_vm.volunteer.street_address) + "\n                                                ")])])], 1), _vm._v(" "), _c("b-card", {
    attrs: {
      "no-body": "",
      align: "center"
    }
  }, [_c("b-card-header", {
    staticClass: "brand-primary"
  }, [_c("h4", [_vm._v("Contact")])]), _vm._v(" "), _c("b-card-body", [_c("div", {
    staticClass: "card-text data-value"
  }, [_vm._v("\n                                                    " + _vm._s(_vm.volunteer.contact) + "\n                                                ")])])], 1)], 1)], 1)])]) : _vm._e()])])])])])]);
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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/donations/DonationShow.vue?vue&type=style&index=0&id=573c5008&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/donations/DonationShow.vue?vue&type=style&index=0&id=573c5008&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@media (max-width: 767px) {\np[data-v-573c5008] {\n    text-align: left;\n}\n}\n@media (max-width: 767px) {\n.card-header[data-v-573c5008] {\n    padding: 0.5rem 1rem;\n}\n}\n@media (max-width: 767px) {\n.card-body[data-v-573c5008] {\n    padding: 0.75rem;\n}\n}\n@media (max-width: 767px) {\nh4[data-v-573c5008] {\n    font-size: 1rem;\n    margin-bottom: 0;\n}\n}\n.donation-data[data-v-573c5008] {\n  margin-bottom: 25px;\n}\n.data-value[data-v-573c5008] {\n  font-size: 2rem;\n}\n@media (max-width: 767px) {\n.data-value[data-v-573c5008] {\n    font-size: 1rem;\n    text-align: center;\n}\n}\n.rank[data-v-573c5008] {\n  font-weight: bold;\n  min-width: 25px;\n  padding-right: 10px;\n  text-align: center;\n  display: inline-block;\n  font-size: 1.2rem;\n}\n@media (max-width: 767px) {\n.rank[data-v-573c5008] {\n    font-size: 1rem;\n}\n}\n@media (max-width: 767px) {\n.option[data-v-573c5008] {\n    font-size: 0.75rem;\n}\n}\n.yes-no-answer[data-v-573c5008] {\n  text-transform: capitalize;\n  font-weight: bold;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/sign-requests/SignRequestShow.vue?vue&type=style&index=0&id=11470d19&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/sign-requests/SignRequestShow.vue?vue&type=style&index=0&id=11470d19&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@media (max-width: 767px) {\np[data-v-11470d19] {\n    text-align: left;\n}\n}\n@media (max-width: 767px) {\n.card-header[data-v-11470d19] {\n    padding: 0.5rem 1rem;\n}\n}\n@media (max-width: 767px) {\n.card-body[data-v-11470d19] {\n    padding: 0.75rem;\n}\n}\n@media (max-width: 767px) {\nh4[data-v-11470d19] {\n    font-size: 1rem;\n    margin-bottom: 0;\n}\n}\n.sign-request-data[data-v-11470d19] {\n  margin-bottom: 25px;\n}\n.data-value[data-v-11470d19] {\n  font-size: 2rem;\n}\n@media (max-width: 767px) {\n.data-value[data-v-11470d19] {\n    font-size: 1rem;\n    text-align: center;\n}\n}\n.rank[data-v-11470d19] {\n  font-weight: bold;\n  min-width: 25px;\n  padding-right: 10px;\n  text-align: center;\n  display: inline-block;\n  font-size: 1.2rem;\n}\n@media (max-width: 767px) {\n.rank[data-v-11470d19] {\n    font-size: 1rem;\n}\n}\n@media (max-width: 767px) {\n.option[data-v-11470d19] {\n    font-size: 0.75rem;\n}\n}\n.yes-no-answer[data-v-11470d19] {\n  text-transform: capitalize;\n  font-weight: bold;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/survey-submissions/SurveySubmissionShow.vue?vue&type=style&index=0&id=e28d09fa&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/survey-submissions/SurveySubmissionShow.vue?vue&type=style&index=0&id=e28d09fa&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@media (max-width: 767px) {\np[data-v-e28d09fa] {\n    text-align: left;\n}\n}\n@media (max-width: 767px) {\n.card-header[data-v-e28d09fa] {\n    padding: 0.5rem 1rem;\n}\n}\n@media (max-width: 767px) {\n.card-body[data-v-e28d09fa] {\n    padding: 0.75rem;\n}\n}\n@media (max-width: 767px) {\nh4[data-v-e28d09fa] {\n    font-size: 1rem;\n    margin-bottom: 0;\n}\n}\n.survey-data[data-v-e28d09fa] {\n  margin-bottom: 25px;\n}\n.data-value[data-v-e28d09fa] {\n  font-size: 2rem;\n}\n@media (max-width: 767px) {\n.data-value[data-v-e28d09fa] {\n    font-size: 1rem;\n    text-align: center;\n}\n}\n.rank[data-v-e28d09fa] {\n  font-weight: bold;\n  min-width: 25px;\n  padding-right: 10px;\n  text-align: center;\n  display: inline-block;\n  font-size: 1.2rem;\n}\n@media (max-width: 767px) {\n.rank[data-v-e28d09fa] {\n    font-size: 1rem;\n}\n}\n@media (max-width: 767px) {\n.option[data-v-e28d09fa] {\n    font-size: 0.75rem;\n}\n}\n.yes-no-answer[data-v-e28d09fa] {\n  text-transform: capitalize;\n  font-weight: bold;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/volunteers/VolunteerShow.vue?vue&type=style&index=0&id=2a29db6c&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/volunteers/VolunteerShow.vue?vue&type=style&index=0&id=2a29db6c&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@media (max-width: 767px) {\np[data-v-2a29db6c] {\n    text-align: left;\n}\n}\n@media (max-width: 767px) {\n.card-header[data-v-2a29db6c] {\n    padding: 0.5rem 1rem;\n}\n}\n@media (max-width: 767px) {\n.card-body[data-v-2a29db6c] {\n    padding: 0.75rem;\n}\n}\n@media (max-width: 767px) {\nh4[data-v-2a29db6c] {\n    font-size: 1rem;\n    margin-bottom: 0;\n}\n}\n.volunteer-data[data-v-2a29db6c] {\n  margin-bottom: 25px;\n}\n.data-value[data-v-2a29db6c] {\n  font-size: 2rem;\n}\n@media (max-width: 767px) {\n.data-value[data-v-2a29db6c] {\n    font-size: 1rem;\n    text-align: center;\n}\n}\n.rank[data-v-2a29db6c] {\n  font-weight: bold;\n  min-width: 25px;\n  padding-right: 10px;\n  text-align: center;\n  display: inline-block;\n  font-size: 1.2rem;\n}\n@media (max-width: 767px) {\n.rank[data-v-2a29db6c] {\n    font-size: 1rem;\n}\n}\n@media (max-width: 767px) {\n.option[data-v-2a29db6c] {\n    font-size: 0.75rem;\n}\n}\n.yes-no-answer[data-v-2a29db6c] {\n  text-transform: capitalize;\n  font-weight: bold;\n}", ""]);
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/donations/DonationShow.vue?vue&type=style&index=0&id=573c5008&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/donations/DonationShow.vue?vue&type=style&index=0&id=573c5008&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DonationShow_vue_vue_type_style_index_0_id_573c5008_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DonationShow.vue?vue&type=style&index=0&id=573c5008&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/donations/DonationShow.vue?vue&type=style&index=0&id=573c5008&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DonationShow_vue_vue_type_style_index_0_id_573c5008_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DonationShow_vue_vue_type_style_index_0_id_573c5008_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/sign-requests/SignRequestShow.vue?vue&type=style&index=0&id=11470d19&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/sign-requests/SignRequestShow.vue?vue&type=style&index=0&id=11470d19&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SignRequestShow_vue_vue_type_style_index_0_id_11470d19_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SignRequestShow.vue?vue&type=style&index=0&id=11470d19&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/sign-requests/SignRequestShow.vue?vue&type=style&index=0&id=11470d19&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SignRequestShow_vue_vue_type_style_index_0_id_11470d19_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SignRequestShow_vue_vue_type_style_index_0_id_11470d19_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/survey-submissions/SurveySubmissionShow.vue?vue&type=style&index=0&id=e28d09fa&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/survey-submissions/SurveySubmissionShow.vue?vue&type=style&index=0&id=e28d09fa&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SurveySubmissionShow_vue_vue_type_style_index_0_id_e28d09fa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SurveySubmissionShow.vue?vue&type=style&index=0&id=e28d09fa&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/survey-submissions/SurveySubmissionShow.vue?vue&type=style&index=0&id=e28d09fa&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SurveySubmissionShow_vue_vue_type_style_index_0_id_e28d09fa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SurveySubmissionShow_vue_vue_type_style_index_0_id_e28d09fa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/volunteers/VolunteerShow.vue?vue&type=style&index=0&id=2a29db6c&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/volunteers/VolunteerShow.vue?vue&type=style&index=0&id=2a29db6c&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_VolunteerShow_vue_vue_type_style_index_0_id_2a29db6c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VolunteerShow.vue?vue&type=style&index=0&id=2a29db6c&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/volunteers/VolunteerShow.vue?vue&type=style&index=0&id=2a29db6c&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_VolunteerShow_vue_vue_type_style_index_0_id_2a29db6c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_VolunteerShow_vue_vue_type_style_index_0_id_2a29db6c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/admin/AdminComponent.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/admin/AdminComponent.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AdminComponent_vue_vue_type_template_id_2073db19___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminComponent.vue?vue&type=template&id=2073db19& */ "./resources/js/components/admin/AdminComponent.vue?vue&type=template&id=2073db19&");
/* harmony import */ var _AdminComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/AdminComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AdminComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AdminComponent_vue_vue_type_template_id_2073db19___WEBPACK_IMPORTED_MODULE_0__.render,
  _AdminComponent_vue_vue_type_template_id_2073db19___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/AdminComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

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

/***/ "./resources/js/components/admin/donations/DonationList.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/admin/donations/DonationList.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DonationList_vue_vue_type_template_id_88b925ae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DonationList.vue?vue&type=template&id=88b925ae& */ "./resources/js/components/admin/donations/DonationList.vue?vue&type=template&id=88b925ae&");
/* harmony import */ var _DonationList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DonationList.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/donations/DonationList.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DonationList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DonationList_vue_vue_type_template_id_88b925ae___WEBPACK_IMPORTED_MODULE_0__.render,
  _DonationList_vue_vue_type_template_id_88b925ae___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/donations/DonationList.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/donations/DonationShow.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/admin/donations/DonationShow.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DonationShow_vue_vue_type_template_id_573c5008_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DonationShow.vue?vue&type=template&id=573c5008&scoped=true& */ "./resources/js/components/admin/donations/DonationShow.vue?vue&type=template&id=573c5008&scoped=true&");
/* harmony import */ var _DonationShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DonationShow.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/donations/DonationShow.vue?vue&type=script&lang=js&");
/* harmony import */ var _DonationShow_vue_vue_type_style_index_0_id_573c5008_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DonationShow.vue?vue&type=style&index=0&id=573c5008&lang=scss&scoped=true& */ "./resources/js/components/admin/donations/DonationShow.vue?vue&type=style&index=0&id=573c5008&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DonationShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DonationShow_vue_vue_type_template_id_573c5008_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _DonationShow_vue_vue_type_template_id_573c5008_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "573c5008",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/donations/DonationShow.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/layouts/AdminHeader.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/admin/layouts/AdminHeader.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AdminHeader_vue_vue_type_template_id_9fa96aca_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminHeader.vue?vue&type=template&id=9fa96aca&scoped=true& */ "./resources/js/components/admin/layouts/AdminHeader.vue?vue&type=template&id=9fa96aca&scoped=true&");
/* harmony import */ var _AdminHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminHeader.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/layouts/AdminHeader.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AdminHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AdminHeader_vue_vue_type_template_id_9fa96aca_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _AdminHeader_vue_vue_type_template_id_9fa96aca_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "9fa96aca",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/layouts/AdminHeader.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/layouts/AdminSidebar.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/admin/layouts/AdminSidebar.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AdminSidebar_vue_vue_type_template_id_0e632a84_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminSidebar.vue?vue&type=template&id=0e632a84&scoped=true& */ "./resources/js/components/admin/layouts/AdminSidebar.vue?vue&type=template&id=0e632a84&scoped=true&");
/* harmony import */ var _AdminSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminSidebar.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/layouts/AdminSidebar.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AdminSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AdminSidebar_vue_vue_type_template_id_0e632a84_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _AdminSidebar_vue_vue_type_template_id_0e632a84_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "0e632a84",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/layouts/AdminSidebar.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/sign-requests/SignRequestList.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/components/admin/sign-requests/SignRequestList.vue ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SignRequestList_vue_vue_type_template_id_75ae2a3a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SignRequestList.vue?vue&type=template&id=75ae2a3a& */ "./resources/js/components/admin/sign-requests/SignRequestList.vue?vue&type=template&id=75ae2a3a&");
/* harmony import */ var _SignRequestList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SignRequestList.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/sign-requests/SignRequestList.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SignRequestList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SignRequestList_vue_vue_type_template_id_75ae2a3a___WEBPACK_IMPORTED_MODULE_0__.render,
  _SignRequestList_vue_vue_type_template_id_75ae2a3a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/sign-requests/SignRequestList.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/sign-requests/SignRequestShow.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/components/admin/sign-requests/SignRequestShow.vue ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SignRequestShow_vue_vue_type_template_id_11470d19_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SignRequestShow.vue?vue&type=template&id=11470d19&scoped=true& */ "./resources/js/components/admin/sign-requests/SignRequestShow.vue?vue&type=template&id=11470d19&scoped=true&");
/* harmony import */ var _SignRequestShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SignRequestShow.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/sign-requests/SignRequestShow.vue?vue&type=script&lang=js&");
/* harmony import */ var _SignRequestShow_vue_vue_type_style_index_0_id_11470d19_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SignRequestShow.vue?vue&type=style&index=0&id=11470d19&lang=scss&scoped=true& */ "./resources/js/components/admin/sign-requests/SignRequestShow.vue?vue&type=style&index=0&id=11470d19&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SignRequestShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SignRequestShow_vue_vue_type_template_id_11470d19_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _SignRequestShow_vue_vue_type_template_id_11470d19_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "11470d19",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/sign-requests/SignRequestShow.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/survey-submissions/SurveySubmissionList.vue":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/admin/survey-submissions/SurveySubmissionList.vue ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SurveySubmissionList_vue_vue_type_template_id_19becfb8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SurveySubmissionList.vue?vue&type=template&id=19becfb8& */ "./resources/js/components/admin/survey-submissions/SurveySubmissionList.vue?vue&type=template&id=19becfb8&");
/* harmony import */ var _SurveySubmissionList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SurveySubmissionList.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/survey-submissions/SurveySubmissionList.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SurveySubmissionList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SurveySubmissionList_vue_vue_type_template_id_19becfb8___WEBPACK_IMPORTED_MODULE_0__.render,
  _SurveySubmissionList_vue_vue_type_template_id_19becfb8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/survey-submissions/SurveySubmissionList.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/survey-submissions/SurveySubmissionShow.vue":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/admin/survey-submissions/SurveySubmissionShow.vue ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SurveySubmissionShow_vue_vue_type_template_id_e28d09fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SurveySubmissionShow.vue?vue&type=template&id=e28d09fa&scoped=true& */ "./resources/js/components/admin/survey-submissions/SurveySubmissionShow.vue?vue&type=template&id=e28d09fa&scoped=true&");
/* harmony import */ var _SurveySubmissionShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SurveySubmissionShow.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/survey-submissions/SurveySubmissionShow.vue?vue&type=script&lang=js&");
/* harmony import */ var _SurveySubmissionShow_vue_vue_type_style_index_0_id_e28d09fa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SurveySubmissionShow.vue?vue&type=style&index=0&id=e28d09fa&lang=scss&scoped=true& */ "./resources/js/components/admin/survey-submissions/SurveySubmissionShow.vue?vue&type=style&index=0&id=e28d09fa&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SurveySubmissionShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SurveySubmissionShow_vue_vue_type_template_id_e28d09fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _SurveySubmissionShow_vue_vue_type_template_id_e28d09fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "e28d09fa",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/survey-submissions/SurveySubmissionShow.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/volunteers/VolunteerList.vue":
/*!********************************************************************!*\
  !*** ./resources/js/components/admin/volunteers/VolunteerList.vue ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _VolunteerList_vue_vue_type_template_id_e2de0ee6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VolunteerList.vue?vue&type=template&id=e2de0ee6& */ "./resources/js/components/admin/volunteers/VolunteerList.vue?vue&type=template&id=e2de0ee6&");
/* harmony import */ var _VolunteerList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VolunteerList.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/volunteers/VolunteerList.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _VolunteerList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VolunteerList_vue_vue_type_template_id_e2de0ee6___WEBPACK_IMPORTED_MODULE_0__.render,
  _VolunteerList_vue_vue_type_template_id_e2de0ee6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/volunteers/VolunteerList.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/volunteers/VolunteerShow.vue":
/*!********************************************************************!*\
  !*** ./resources/js/components/admin/volunteers/VolunteerShow.vue ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _VolunteerShow_vue_vue_type_template_id_2a29db6c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VolunteerShow.vue?vue&type=template&id=2a29db6c&scoped=true& */ "./resources/js/components/admin/volunteers/VolunteerShow.vue?vue&type=template&id=2a29db6c&scoped=true&");
/* harmony import */ var _VolunteerShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VolunteerShow.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/volunteers/VolunteerShow.vue?vue&type=script&lang=js&");
/* harmony import */ var _VolunteerShow_vue_vue_type_style_index_0_id_2a29db6c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VolunteerShow.vue?vue&type=style&index=0&id=2a29db6c&lang=scss&scoped=true& */ "./resources/js/components/admin/volunteers/VolunteerShow.vue?vue&type=style&index=0&id=2a29db6c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _VolunteerShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VolunteerShow_vue_vue_type_template_id_2a29db6c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _VolunteerShow_vue_vue_type_template_id_2a29db6c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "2a29db6c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/volunteers/VolunteerShow.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/AdminComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/admin/AdminComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AdminComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/AdminComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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

/***/ "./resources/js/components/admin/donations/DonationList.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/admin/donations/DonationList.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DonationList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DonationList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/donations/DonationList.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DonationList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/donations/DonationShow.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/admin/donations/DonationShow.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DonationShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DonationShow.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/donations/DonationShow.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DonationShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/layouts/AdminHeader.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/admin/layouts/AdminHeader.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AdminHeader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/layouts/AdminHeader.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/layouts/AdminSidebar.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/admin/layouts/AdminSidebar.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AdminSidebar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/layouts/AdminSidebar.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/sign-requests/SignRequestList.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/admin/sign-requests/SignRequestList.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SignRequestList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SignRequestList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/sign-requests/SignRequestList.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SignRequestList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/sign-requests/SignRequestShow.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/admin/sign-requests/SignRequestShow.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SignRequestShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SignRequestShow.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/sign-requests/SignRequestShow.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SignRequestShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/survey-submissions/SurveySubmissionList.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/admin/survey-submissions/SurveySubmissionList.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SurveySubmissionList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SurveySubmissionList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/survey-submissions/SurveySubmissionList.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SurveySubmissionList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/survey-submissions/SurveySubmissionShow.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/admin/survey-submissions/SurveySubmissionShow.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SurveySubmissionShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SurveySubmissionShow.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/survey-submissions/SurveySubmissionShow.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SurveySubmissionShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/volunteers/VolunteerList.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/admin/volunteers/VolunteerList.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VolunteerList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VolunteerList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/volunteers/VolunteerList.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VolunteerList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/volunteers/VolunteerShow.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/admin/volunteers/VolunteerShow.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VolunteerShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VolunteerShow.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/volunteers/VolunteerShow.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VolunteerShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/AdminComponent.vue?vue&type=template&id=2073db19&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/admin/AdminComponent.vue?vue&type=template&id=2073db19& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminComponent_vue_vue_type_template_id_2073db19___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminComponent_vue_vue_type_template_id_2073db19___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminComponent_vue_vue_type_template_id_2073db19___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AdminComponent.vue?vue&type=template&id=2073db19& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/AdminComponent.vue?vue&type=template&id=2073db19&");


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

/***/ "./resources/js/components/admin/donations/DonationList.vue?vue&type=template&id=88b925ae&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/admin/donations/DonationList.vue?vue&type=template&id=88b925ae& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DonationList_vue_vue_type_template_id_88b925ae___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DonationList_vue_vue_type_template_id_88b925ae___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DonationList_vue_vue_type_template_id_88b925ae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DonationList.vue?vue&type=template&id=88b925ae& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/donations/DonationList.vue?vue&type=template&id=88b925ae&");


/***/ }),

/***/ "./resources/js/components/admin/donations/DonationShow.vue?vue&type=template&id=573c5008&scoped=true&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/admin/donations/DonationShow.vue?vue&type=template&id=573c5008&scoped=true& ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DonationShow_vue_vue_type_template_id_573c5008_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DonationShow_vue_vue_type_template_id_573c5008_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DonationShow_vue_vue_type_template_id_573c5008_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DonationShow.vue?vue&type=template&id=573c5008&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/donations/DonationShow.vue?vue&type=template&id=573c5008&scoped=true&");


/***/ }),

/***/ "./resources/js/components/admin/layouts/AdminHeader.vue?vue&type=template&id=9fa96aca&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/admin/layouts/AdminHeader.vue?vue&type=template&id=9fa96aca&scoped=true& ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminHeader_vue_vue_type_template_id_9fa96aca_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminHeader_vue_vue_type_template_id_9fa96aca_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminHeader_vue_vue_type_template_id_9fa96aca_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AdminHeader.vue?vue&type=template&id=9fa96aca&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/layouts/AdminHeader.vue?vue&type=template&id=9fa96aca&scoped=true&");


/***/ }),

/***/ "./resources/js/components/admin/layouts/AdminSidebar.vue?vue&type=template&id=0e632a84&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/admin/layouts/AdminSidebar.vue?vue&type=template&id=0e632a84&scoped=true& ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminSidebar_vue_vue_type_template_id_0e632a84_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminSidebar_vue_vue_type_template_id_0e632a84_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminSidebar_vue_vue_type_template_id_0e632a84_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AdminSidebar.vue?vue&type=template&id=0e632a84&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/layouts/AdminSidebar.vue?vue&type=template&id=0e632a84&scoped=true&");


/***/ }),

/***/ "./resources/js/components/admin/sign-requests/SignRequestList.vue?vue&type=template&id=75ae2a3a&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/admin/sign-requests/SignRequestList.vue?vue&type=template&id=75ae2a3a& ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SignRequestList_vue_vue_type_template_id_75ae2a3a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SignRequestList_vue_vue_type_template_id_75ae2a3a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SignRequestList_vue_vue_type_template_id_75ae2a3a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SignRequestList.vue?vue&type=template&id=75ae2a3a& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/sign-requests/SignRequestList.vue?vue&type=template&id=75ae2a3a&");


/***/ }),

/***/ "./resources/js/components/admin/sign-requests/SignRequestShow.vue?vue&type=template&id=11470d19&scoped=true&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/admin/sign-requests/SignRequestShow.vue?vue&type=template&id=11470d19&scoped=true& ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SignRequestShow_vue_vue_type_template_id_11470d19_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SignRequestShow_vue_vue_type_template_id_11470d19_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SignRequestShow_vue_vue_type_template_id_11470d19_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SignRequestShow.vue?vue&type=template&id=11470d19&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/sign-requests/SignRequestShow.vue?vue&type=template&id=11470d19&scoped=true&");


/***/ }),

/***/ "./resources/js/components/admin/survey-submissions/SurveySubmissionList.vue?vue&type=template&id=19becfb8&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/admin/survey-submissions/SurveySubmissionList.vue?vue&type=template&id=19becfb8& ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SurveySubmissionList_vue_vue_type_template_id_19becfb8___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SurveySubmissionList_vue_vue_type_template_id_19becfb8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SurveySubmissionList_vue_vue_type_template_id_19becfb8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SurveySubmissionList.vue?vue&type=template&id=19becfb8& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/survey-submissions/SurveySubmissionList.vue?vue&type=template&id=19becfb8&");


/***/ }),

/***/ "./resources/js/components/admin/survey-submissions/SurveySubmissionShow.vue?vue&type=template&id=e28d09fa&scoped=true&":
/*!******************************************************************************************************************************!*\
  !*** ./resources/js/components/admin/survey-submissions/SurveySubmissionShow.vue?vue&type=template&id=e28d09fa&scoped=true& ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SurveySubmissionShow_vue_vue_type_template_id_e28d09fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SurveySubmissionShow_vue_vue_type_template_id_e28d09fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SurveySubmissionShow_vue_vue_type_template_id_e28d09fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SurveySubmissionShow.vue?vue&type=template&id=e28d09fa&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/survey-submissions/SurveySubmissionShow.vue?vue&type=template&id=e28d09fa&scoped=true&");


/***/ }),

/***/ "./resources/js/components/admin/volunteers/VolunteerList.vue?vue&type=template&id=e2de0ee6&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/admin/volunteers/VolunteerList.vue?vue&type=template&id=e2de0ee6& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VolunteerList_vue_vue_type_template_id_e2de0ee6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VolunteerList_vue_vue_type_template_id_e2de0ee6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VolunteerList_vue_vue_type_template_id_e2de0ee6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VolunteerList.vue?vue&type=template&id=e2de0ee6& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/volunteers/VolunteerList.vue?vue&type=template&id=e2de0ee6&");


/***/ }),

/***/ "./resources/js/components/admin/volunteers/VolunteerShow.vue?vue&type=template&id=2a29db6c&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/admin/volunteers/VolunteerShow.vue?vue&type=template&id=2a29db6c&scoped=true& ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VolunteerShow_vue_vue_type_template_id_2a29db6c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VolunteerShow_vue_vue_type_template_id_2a29db6c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VolunteerShow_vue_vue_type_template_id_2a29db6c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VolunteerShow.vue?vue&type=template&id=2a29db6c&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/volunteers/VolunteerShow.vue?vue&type=template&id=2a29db6c&scoped=true&");


/***/ }),

/***/ "./resources/js/components/admin/Dashboard.vue?vue&type=style&index=0&id=12658639&lang=scss&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/admin/Dashboard.vue?vue&type=style&index=0&id=12658639&lang=scss&scoped=true& ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_12658639_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dashboard.vue?vue&type=style&index=0&id=12658639&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/Dashboard.vue?vue&type=style&index=0&id=12658639&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/js/components/admin/donations/DonationShow.vue?vue&type=style&index=0&id=573c5008&lang=scss&scoped=true&":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/components/admin/donations/DonationShow.vue?vue&type=style&index=0&id=573c5008&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DonationShow_vue_vue_type_style_index_0_id_573c5008_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DonationShow.vue?vue&type=style&index=0&id=573c5008&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/donations/DonationShow.vue?vue&type=style&index=0&id=573c5008&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/js/components/admin/sign-requests/SignRequestShow.vue?vue&type=style&index=0&id=11470d19&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************!*\
  !*** ./resources/js/components/admin/sign-requests/SignRequestShow.vue?vue&type=style&index=0&id=11470d19&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SignRequestShow_vue_vue_type_style_index_0_id_11470d19_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SignRequestShow.vue?vue&type=style&index=0&id=11470d19&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/sign-requests/SignRequestShow.vue?vue&type=style&index=0&id=11470d19&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/js/components/admin/survey-submissions/SurveySubmissionShow.vue?vue&type=style&index=0&id=e28d09fa&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************!*\
  !*** ./resources/js/components/admin/survey-submissions/SurveySubmissionShow.vue?vue&type=style&index=0&id=e28d09fa&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SurveySubmissionShow_vue_vue_type_style_index_0_id_e28d09fa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SurveySubmissionShow.vue?vue&type=style&index=0&id=e28d09fa&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/survey-submissions/SurveySubmissionShow.vue?vue&type=style&index=0&id=e28d09fa&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/js/components/admin/volunteers/VolunteerShow.vue?vue&type=style&index=0&id=2a29db6c&lang=scss&scoped=true&":
/*!******************************************************************************************************************************!*\
  !*** ./resources/js/components/admin/volunteers/VolunteerShow.vue?vue&type=style&index=0&id=2a29db6c&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_VolunteerShow_vue_vue_type_style_index_0_id_2a29db6c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VolunteerShow.vue?vue&type=style&index=0&id=2a29db6c&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/volunteers/VolunteerShow.vue?vue&type=style&index=0&id=2a29db6c&lang=scss&scoped=true&");


/***/ })

}]);