webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host .navbar {\n\tbox-shadow: 0 1px 8px 0 rgba(0, 0, 0, .2), 0 3px 4px 0\n\t\trgba(0, 0, 0, .14), 0 3px 3px -2px rgba(0, 0, 0, .12);\n\tz-index: 1;\n\tcolor: #777;\n\tmargin-bottom: 10px;\n}\n\n:host .fixed-nav{\n\twidth: 100%;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n    -ms-flex-pack: justify;\n        justify-content: space-between;\n}\n\n:host .navbar-header{\n\tfloat: left;\n    width: 75%;\n}\n\n:host .navbar-brand{\n    height: 50px;\n}\n\n:host .navbar-logo{\n    height: 50px;\n}\n\n.footer {\n   position: fixed;\n   left: 0;\n   bottom: 0;\n   width: 100%;\n   background-color: rgb(241, 239, 239); \n   color: rgb(0, 0, 0);\n   text-align: center;\n }\n\n .container {\n\t -ms-flex-line-pack: center;\n\t     align-content: center;\n\t text-align: center;\n     overflow: auto;\n }\n\n .content-container {\n\t -ms-flex-line-pack: center;\n\t     align-content: center;\n\t text-align: center;\n     overflow: auto;\n     padding-left: 250px;\n }\n\n:host .btn-block{\n    width: 75%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Header menu -->\n<nav class=\"navbar navbar-default navbar-fixed-top navbar-height\">\n  <div class=\"container-fluid\">\n      <div class=\"fixed-nav\">\n          <div class=\"navbar-header\">\n              <a class=\"navbar-brand\" href=\"/\">\n                  <img class=\"navbar-logo\" src=\"../assets/img/pw_logo.png\" alt=\"People-Ware Recruiting Application\">\n              </a>\n              <div class=\"navbar-brand\">{{title}}</div>\n          </div>\n      </div>\n  </div>\n</nav>\n\n<!-- Main Body -->\n\n<div class=\"container-fluid\">\n  <router-outlet></router-outlet>\n</div>\n\n<!-- Footer -->\n<footer class=\"footer\">\n  <div class=\"container\">\n    Recruiting Application&nbsp;v0.01&nbsp;&mdash;&nbsp;&copy;&nbsp;2018 PeopleWare\n  </div>\n</footer>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(appService, router) {
        this.appService = appService;
        this.router = router;
        this.title = 'PEOPLE-WARE: Recruiting Application';
        this.show = true;
        this.show = true;
    }
    AppComponent.prototype.ngOnInit = function () {
        console.log("\n ********************** \n * UI has Initialized * \n **********************\n\n");
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_login_login_component__ = __webpack_require__("../../../../../src/app/auth/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__auth_register_register_component__ = __webpack_require__("../../../../../src/app/auth/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__auth_base_base_component__ = __webpack_require__("../../../../../src/app/auth/base/base.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__authenticate_component__ = __webpack_require__("../../../../../src/app/authenticate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__company_comp_dashboard_comp_dashboard_component__ = __webpack_require__("../../../../../src/app/company/comp-dashboard/comp-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__company_post_job_post_job_component__ = __webpack_require__("../../../../../src/app/company/post-job/post-job.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__company_edit_job_edit_job_component__ = __webpack_require__("../../../../../src/app/company/edit-job/edit-job.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__company_list_jobs_list_jobs_component__ = __webpack_require__("../../../../../src/app/company/list-jobs/list-jobs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__applicant_appl_dashboard_appl_dashboard_component__ = __webpack_require__("../../../../../src/app/applicant/appl-dashboard/appl-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__applicant_appl_jobinfo_appl_jobinfo_component__ = __webpack_require__("../../../../../src/app/applicant/appl-jobinfo/appl-jobinfo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__applicant_appl_apply_appl_apply_component__ = __webpack_require__("../../../../../src/app/applicant/appl-apply/appl-apply.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angular2_multiselect_dropdown_angular2_multiselect_dropdown__ = __webpack_require__("../../../../angular2-multiselect-dropdown/angular2-multiselect-dropdown.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__auth_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_8__auth_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_9__auth_base_base_component__["a" /* BaseComponent */],
            __WEBPACK_IMPORTED_MODULE_11__company_comp_dashboard_comp_dashboard_component__["a" /* CompDashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_12__company_post_job_post_job_component__["a" /* PostJobComponent */],
            __WEBPACK_IMPORTED_MODULE_13__company_edit_job_edit_job_component__["a" /* EditJobComponent */],
            __WEBPACK_IMPORTED_MODULE_14__company_list_jobs_list_jobs_component__["a" /* ListJobsComponent */],
            __WEBPACK_IMPORTED_MODULE_15__applicant_appl_dashboard_appl_dashboard_component__["a" /* ApplDashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_17__applicant_appl_jobinfo_appl_jobinfo_component__["a" /* ApplJobinfoComponent */],
            __WEBPACK_IMPORTED_MODULE_18__applicant_appl_apply_appl_apply_component__["a" /* ApplApplyComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_3__app_routing__["a" /* AppRouting */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["e" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_16_ngx_bootstrap__["a" /* BsDropdownModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_19_angular2_multiselect_dropdown_angular2_multiselect_dropdown__["a" /* AngularMultiSelectModule */],
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_10__authenticate_component__["a" /* AuthenticateComponent */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRouting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_register_register_component__ = __webpack_require__("../../../../../src/app/auth/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_login_login_component__ = __webpack_require__("../../../../../src/app/auth/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_base_base_component__ = __webpack_require__("../../../../../src/app/auth/base/base.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__company_comp_dashboard_comp_dashboard_component__ = __webpack_require__("../../../../../src/app/company/comp-dashboard/comp-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__company_edit_job_edit_job_component__ = __webpack_require__("../../../../../src/app/company/edit-job/edit-job.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__company_post_job_post_job_component__ = __webpack_require__("../../../../../src/app/company/post-job/post-job.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__company_list_jobs_list_jobs_component__ = __webpack_require__("../../../../../src/app/company/list-jobs/list-jobs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__applicant_appl_dashboard_appl_dashboard_component__ = __webpack_require__("../../../../../src/app/applicant/appl-dashboard/appl-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__applicant_appl_apply_appl_apply_component__ = __webpack_require__("../../../../../src/app/applicant/appl-apply/appl-apply.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__applicant_appl_jobinfo_appl_jobinfo_component__ = __webpack_require__("../../../../../src/app/applicant/appl-jobinfo/appl-jobinfo.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_4__auth_base_base_component__["a" /* BaseComponent */],
    },
    {
        path: 'register',
        component: __WEBPACK_IMPORTED_MODULE_2__auth_register_register_component__["a" /* RegisterComponent */]
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_3__auth_login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'compDashboard',
        component: __WEBPACK_IMPORTED_MODULE_5__company_comp_dashboard_comp_dashboard_component__["a" /* CompDashboardComponent */]
    },
    {
        path: 'editJob',
        component: __WEBPACK_IMPORTED_MODULE_6__company_edit_job_edit_job_component__["a" /* EditJobComponent */]
    },
    {
        path: 'postJob',
        component: __WEBPACK_IMPORTED_MODULE_7__company_post_job_post_job_component__["a" /* PostJobComponent */]
    },
    {
        path: 'listJobs',
        component: __WEBPACK_IMPORTED_MODULE_8__company_list_jobs_list_jobs_component__["a" /* ListJobsComponent */]
    },
    {
        path: 'applDashboard',
        component: __WEBPACK_IMPORTED_MODULE_9__applicant_appl_dashboard_appl_dashboard_component__["a" /* ApplDashboardComponent */]
    },
    {
        path: 'applApply/:jobid',
        component: __WEBPACK_IMPORTED_MODULE_10__applicant_appl_apply_appl_apply_component__["a" /* ApplApplyComponent */]
    },
    {
        path: 'applJobInfo/:jobid',
        component: __WEBPACK_IMPORTED_MODULE_11__applicant_appl_jobinfo_appl_jobinfo_component__["a" /* ApplJobinfoComponent */]
    },
];
var AppRouting = (function () {
    function AppRouting() {
    }
    return AppRouting;
}());
AppRouting = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes, { useHash: false })],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], AppRouting);

//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/app.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var AppService = (function () {
    function AppService(httpClient) {
        this.httpClient = httpClient;
    }
    return AppService;
}());
AppService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], AppService);

var _a;
//# sourceMappingURL=app.service.js.map

/***/ }),

/***/ "../../../../../src/app/applicant/appl-apply/appl-apply.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host .form-check-label{\n    padding-right: 120px;\n}\n\n:host .container-content{\n    position: absolute;\n    padding-left: 40%; \n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/applicant/appl-apply/appl-apply.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Apply Job</h1>\n</div>\n\n\n<div class=\"container\">\n  <form>\n\n    <div class=\"form-group\">\n      <div class=\"form-group\">\n        <label class=\"col-form-label\">Job Role</label>\n        <input id=\"jobname\" name=\"jobname\" class=\"form-control\" required minlength=\"2\" [(ngModel)]=\"jobname\" placeholder=\"Job Role\"\n          #jname=\"ngModel\" disabled>\n      </div>\n\n      <div class=\"form-group\">\n        <label class=\"col-form-label\">Job Description</label>\n        <textarea id=\"description\" rows=\"2\" name=\"description\" class=\"form-control\" required minlength=\"4\" placeholder=\"Job Description\"\n          [(ngModel)]=\"description\" #dname=\"ngModel\" disabled></textarea>\n      </div>\n\n      <div class=\"form-group\">\n        <div class=\"form-group\">\n          <label class=\"col-form-label\">Full Name</label>\n          <input id=\"fullname\" name=\"fullname\" class=\"form-control\" required minlength=\"2\" [(ngModel)]=\"fullname\" placeholder=\"Full Name\"\n            #fname=\"ngModel\" [disabled]=\"hasApplied\" required>\n          <!-- FIELD VALIDATOR -->\n          <div *ngIf=\"fname.invalid && (fname.dirty || fname.touched)\" class=\"alert alert-danger\">\n\n            <div *ngIf=\"fname.errors.required\">\n              Full Name is required.\n            </div>\n            <div *ngIf=\"fname.errors.minlength\">\n              Full Name must be at least 2 characters long.\n            </div>\n\n          </div>\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"exampleInputEmail1\">Email address</label>\n        <input type=\"email\" name=\"email\" class=\"form-control\" id=\"email\" aria-describedby=\"emailHelp\" [(ngModel)]=\"email\" placeholder=\"Enter email\"\n          #elname=\"ngModel\" [disabled]=\"hasApplied\" required>\n        <small id=\"emailHelp\" class=\"form-text text-muted\">Format: example@email.com</small>\n        <!-- FIELD VALIDATOR -->\n        <div *ngIf=\"elname.invalid && (elname.dirty || elname.touched)\" class=\"alert alert-danger\">\n\n          <div *ngIf=\"elname.errors.required\">\n            Email is required.\n          </div>\n\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <div class=\"form-group\">\n          <label class=\"col-form-label\">Phone Number</label>\n          <input id=\"contact\" name=\"contact\" class=\"form-control\" required minlength=\"10\" maxlength=\"10\" [(ngModel)]=\"contact\" placeholder=\"Phone Number\"\n            #pname=\"ngModel\" [disabled]=\"hasApplied\" required>\n          <!-- FIELD VALIDATOR -->\n          <div *ngIf=\"pname.invalid && (pname.dirty || pname.touched)\" class=\"alert alert-danger\">\n\n            <div *ngIf=\"pname.errors.required\">\n              Phone Number is required.\n            </div>\n            <div *ngIf=\"pname.errors.minlength\">\n              Phone Number must be 10 digits long.\n            </div>\n            <div *ngIf=\"pname.errors.maxlength\">\n              Phone Number must be 10 digits long.\n            </div>\n\n          </div>\n        </div>\n      </div>\n\n      <div class=\"form-group\" *ngIf=\"!hasApplied\">\n        <div class=\"form-group\">\n          <label class=\"col-form-label\">Academic Degree/s</label>\n          <angular2-multiselect [data]=\"degreesList\" [(ngModel)]=\"selectedDegrees\" name=\"degreesDropDwn\" [settings]=\"dropdownSettings\"\n            (onSelect)=\"onItemSelect($event)\" (onDeSelect)=\"OnItemDeSelect($event)\" (onSelectAll)=\"onSelectAll($event)\" (onDeSelectAll)=\"onDeSelectAll($event)\"\n            #dgname=\"ngModel\">\n            <c-item>\n              <ng-template let-item=\"item\">\n                <label style=\"color: #333;min-width: 50px;\">{{item.qualName}}</label>\n              </ng-template>\n            </c-item>\n          </angular2-multiselect>\n        </div>\n        <!-- FIELD VALIDATOR -->\n        <div *ngIf=\"dgname.invalid && (dgname.dirty || dgname.touched)\" class=\"alert alert-danger\">\n\n          <div *ngIf=\"dgname.errors.required\">\n            Atleast One Skill Set is required.\n          </div>\n\n        </div>\n\n      </div>\n\n      <div class=\"form-group\">\n        <div class=\"form-group\">\n          <label class=\"col-form-label\">Select the Skill/s from 'SKILLS' Box and set the Scale [5 - Expert .... 1 - Novice]. Press Enter upon Completion.</label>\n          <div class=\"form-check\" (click)=\"radioSkill($event)\">\n            <label class=\"form-check-label\">Scale of Each Skill:</label>\n            <label class=\"form-check-label\">\n              <input type=\"radio\" [disabled]=\"hasApplied\"class=\"form-check-input\" name=\"optionsRadios\" id=\"optionsRadios1\" value=\"1\" checked=\"\"> 1\n            </label>\n            <label class=\"form-check-label\">\n              <input type=\"radio\" class=\"form-check-input\" name=\"optionsRadios\" id=\"optionsRadios2\" value=\"2\" [disabled]=\"hasApplied\"> 2\n            </label>\n            <label class=\"form-check-label\">\n              <input type=\"radio\" class=\"form-check-input\" name=\"optionsRadios\" id=\"optionsRadios2\" value=\"3\" [disabled]=\"hasApplied\"> 3\n            </label>\n            <label class=\"form-check-label\">\n              <input type=\"radio\" class=\"form-check-input\" name=\"optionsRadios\" id=\"optionsRadios2\" value=\"4\" [disabled]=\"hasApplied\"> 4\n            </label>\n            <label class=\"form-check-label\">\n              <input type=\"radio\" class=\"form-check-input\" name=\"optionsRadios\" id=\"optionsRadios2\" value=\"5\" [disabled]=\"hasApplied\"> 5\n            </label>\n            <br>\n\n          </div>\n          <label class=\"form-check-label\">&nbsp;&nbsp;&nbsp;&nbsp;Skill:</label>\n\n          <input type=\"text\" id=\"skill\" name=\"skill\" class=\"form-control\" [(ngModel)]=\"skill\" placeholder=\"Skill/s\" #skname=\"ngModel\"\n            (keydown)=\"skillKeyFunction($event)\" [disabled]=\"hasApplied\" required>\n            <small id=\"skillHelp\" class=\"form-text text-muted\">Select the Skill from 'SKILL REQUIRED BOX' and Select your scale. Then Press Enter to Load it to 'MY SKILL and RATING' section.</small><br>\n          <!-- FIELD VALIDATOR -->\n          <div *ngIf=\"skname.invalid && (skname.dirty || skname.touched)\" class=\"alert alert-danger\">\n\n            <div *ngIf=\"skname.errors.required\">\n              Atleast One Skill Set is required.\n            </div>\n\n          </div>\n\n          <div class=\"container\" style=\"width: 90%; padding-left: 70px; display: flex;\">\n            <div style=\"width: 50%;\">\n              <label class=\"form-check-label\">SKILLS REQUIRED</label>\n              <select multiple=\"\" class=\"form-control\" [disabled]=\"hasApplied\">\n                <option *ngFor=\"let s of skillSet\" (click)=\"onSkillClick($event, s)\">{{s}}</option>\n              </select>\n            </div>\n            <div style=\"width: 50%; padding-left: 10px;\">\n              <label class=\"form-check-label\">MY SKILLS and RATING</label>\n              <select multiple=\"\" class=\"form-control\" [disabled]=\"hasApplied\">\n                <option *ngFor=\"let ns of newSkillSet\" (click)=\"onSkillClick($event, ns)\">{{ns}}</option>\n              </select>\n          </div>\n        </div>\n        </div>\n\n\n\n      </div>\n\n\n\n      <div class=\"form-group\">\n        <label class=\"control-label\">Salary Expectation </label>\n        <div class=\"form-group\">\n          <div class=\"input-group mb-3\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\">CAD$</span>\n            </div>\n            <input type=\"text\" class=\"form-control\" aria-label=\"Amount (to the nearest CAD)\" id=\"salary\" name=\"salary\" required minlength=\"1\"\n              appForbiddenName=\"0\" [disabled]=\"hasApplied\" placeholder=\"Salary\" [(ngModel)]=\"salary\" #sname=\"ngModel\" pattern=\"[0-9]*\" aria-describedby=\"salaryHelp\">\n            <div class=\"input-group-append\">\n              <span class=\"input-group-text\">.00</span>\n            </div>\n          </div>\n          <small id=\"salaryHelp\" class=\"form-text text-muted\">Must not be more than the Salary Specifications for this job i.e. {{jobsalary}}</small>\n        </div>\n        <!-- FIELD VALIDATOR -->\n        <div *ngIf=\"sname.invalid && (sname.dirty || sname.touched)\" class=\"alert alert-danger\">\n\n          <div *ngIf=\"sname.errors.required\">\n            Salary is required.\n          </div>\n          <div *ngIf=\"sname.errors.minlength\">\n            Salary must be at least Single Digit.\n          </div>\n          <div *ngIf=\"sname.errors.forbiddenName\">\n            Salary cannot be Zero. Salary must be greater than Zero.\n          </div>\n          <div *ngIf=\"sname.errors.pattern\">\n            Salary must be only digits. Cannot be Zero or Decimal Values either.\n          </div>\n\n        </div>\n      </div>\n\n      <button type=\"button\" (click)=\"logout()\" class=\"btn btn-warning btn-lg\" value=\"LOGOUT\">LOGOUT</button>\n      <input type=\"button\" (click)=\"close()\" class=\"btn btn-outline-warning btn-lg\" value=\"Close\">\n      <input type=\"button\" (click)=\"apply()\" class=\"btn btn-success btn-lg\" value=\"Apply\" [disabled]=\"hasApplied\">\n\n    </div>\n  </form>\n</div>\n\n<div class=\"alert alert-dismissible alert-danger\" *ngIf=\"isEmpty\">\n  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" (click)=\"warnClose()\">&times;</button>\n  <a href=\"/applDashboard\" class=\"alert-link\">{{message}}</a>\n</div>"

/***/ }),

/***/ "../../../../../src/app/applicant/appl-apply/appl-apply.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplApplyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__appl_apply_service__ = __webpack_require__("../../../../../src/app/applicant/appl-apply/appl-apply.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authenticate_component__ = __webpack_require__("../../../../../src/app/authenticate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var ApplApplyComponent = (function () {
    function ApplApplyComponent(route, router, auth, applyService) {
        this.route = route;
        this.router = router;
        this.auth = auth;
        this.applyService = applyService;
        this.sessionKey = "";
        this.jobid = 0;
        this.isDataAvailable = false;
        this.message = "Data is Currently UnAvailable. Click here to return to Dashboard.";
        this.jobname = "";
        this.description = "";
        this.contact = "";
        this.email = "";
        this.fullname = "";
        this.jobsalary = 0;
        this.salary = 0;
        this.job = {
            companyname: null,
            jobname: null,
            description: null,
            salary: 0,
            type: null,
        };
        this.reqs = {
            id: 0,
            jobid: 0,
            qualification: null,
            posses: false,
            skill: null,
            scale: 0
        };
        this.isEmpty = false;
        this.scale = 1;
        this.scales = [];
        this.skillSet = [];
        this.skill = "";
        this.newScale = 1;
        this.newScales = [];
        this.newSkillSet = [];
        this.newSkill = "";
        this.count = 0;
        this.degreesList = [{
                "id": null,
                "qualName": null
            }];
        this.selectedDegrees = [{
                "id": null,
                "qualName": null
            }];
        this.dropdownSettings = {
            singleSelection: false,
            text: "Academic Qualifications",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: false,
            classes: "myclass custom-class"
        };
        this.appl = {
            fullname: null,
            email: null,
            contact: null,
            salary: null,
            jobid: 0
        };
        this.hasApplied = false;
        //to check if current user is the active user
        if (auth.isActiveUser('sessionID')) {
            //continue using the session
            console.log("Hi " + sessionStorage.getItem('uname'));
        }
        else {
            //redirect to login screen
            router.navigate(['./']);
        }
    }
    ApplApplyComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                //get jobId from parameter
                this.route.params.subscribe(function (params) {
                    if (params.newcopy != undefined) {
                        history.pushState(null, null, location.href);
                        window.onpopstate = function () {
                            history.go(1);
                        };
                    }
                    var paramId = params.jobid;
                    _this.jobid = +paramId.substr(1);
                    //populate the screen using the jobId
                    _this.populate(_this.jobid);
                });
                return [2 /*return*/];
            });
        });
    };
    //to load the information onto the screen
    ApplApplyComponent.prototype.populate = function (jobid) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.degrees = [];
                        this.skills = [];
                        this.scales = [];
                        this.skillSet = [];
                        this.newSkillSet = [];
                        this.degreesList = [];
                        this.selectedDegrees = [];
                        this.skill = "";
                        return [4 /*yield*/, this.applyService.getJobById(jobid).then(function (data) {
                                _this.job = data;
                                _this.jobs = data;
                                //reqired to be displayed on UI
                                _this.jobname = data.jobname;
                                _this.description = data.description;
                                _this.jobsalary = data.salary;
                                _this.salary = data.salary;
                                //getting all the Requirements for this Job
                                _this.applyService.getAllReqsById(jobid).then(function (result) {
                                    _this.reqs = result;
                                    for (var i = 0; i < result.length; i++) {
                                        if (typeof (result[i].qualification) === 'string') {
                                            var jsIn = { "id": (result[i].id), "qualName": (result[i].qualification) };
                                            _this.degreesList.push(jsIn);
                                            _this.selectedDegrees.push(jsIn);
                                        }
                                    }
                                    for (var i = 0; i < result.length; i++) {
                                        if (typeof (result[i].skill) === 'string') {
                                            _this.skills[i] = (result[i].skill);
                                            _this.skillSet.push(_this.skills[i] + " " + _this.scale);
                                        }
                                    }
                                });
                                _this.isDataAvailable = true;
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //Listener for Skill selection actions removing the scale info from string
    ApplApplyComponent.prototype.onSkillClick = function (event, item) {
        this.skill = item.slice(0, -2);
    };
    ApplApplyComponent.prototype.skillKeyFunction = function (event) {
        if (event.keyCode == 13) {
            if (this.newSkillSet.length !== 0 && typeof this.newSkillSet !== undefined) {
                if (this.newSkills.indexOf(this.skill) !== -1) {
                    var index = this.newSkills.indexOf(this.skill);
                    this.newScales[index] = this.scale;
                    this.newSkillSet[index] = this.skill + " " + this.scale;
                }
                else {
                    this.newSkills.push(this.skill);
                    this.newScales.push(this.scale);
                    this.newSkillSet.push(this.skill + " " + this.scale);
                }
            }
            else {
                this.newSkills = [];
                this.newScales = [];
                this.newSkillSet = [];
                this.newSkills.push(this.skill);
                this.newScales.push(this.scale);
                this.newSkillSet.push(this.skill + " " + this.scale);
            }
        }
    };
    //Listener for Radio button presses
    ApplApplyComponent.prototype.radioSkill = function (event) {
        this.scale = event.target.value;
    };
    ApplApplyComponent.prototype.apply = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.reqs = {};
                        if (!(this.salary > this.jobsalary)) return [3 /*break*/, 1];
                        this.message = "Salary Must be less than or equal to the Salary Specifications: CAD$" + this.jobsalary + ". If you wish not to APPLY for this job, CLICK Here to return to Dashboard.";
                        this.isEmpty = true;
                        return [2 /*return*/];
                    case 1:
                        if (!(((this.fullname && this.email && this.contact && this.newSkills && this.newScales) === undefined)
                            || ((this.fullname && this.email && this.contact && this.newSkills && this.newScales) === null)
                            || ((this.fullname && this.email && this.contact) === '')
                            || ((this.selectedDegrees.length) === 0)
                            || ((this.newSkills.length) === 0)
                            || ((this.newScales.length) === 0))) return [3 /*break*/, 2];
                        this.isEmpty = true;
                        this.message = " Please Fill all the Fields and Press 'APPLY' Button Again.";
                        return [2 /*return*/];
                    case 2:
                        this.isEmpty = false;
                        this.message = "";
                        this.appl.fullname = this.fullname;
                        this.appl.email = this.email;
                        this.appl.contact = this.contact;
                        this.appl.salary = this.salary;
                        this.appl.jobid = this.jobid;
                        this.count = 0;
                        //adding the Applicant information into DB
                        return [4 /*yield*/, this.applyService.addApplicant(this.appl).then(function (resp) { return __awaiter(_this, void 0, void 0, function () {
                                var _this = this;
                                var _i, _a, deg, i;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            if (!(resp.response === 'Applicant Already Exists.')) return [3 /*break*/, 1];
                                            this.isEmpty = true;
                                            this.message = "You have already applied for this job. Click here to return to dashboard and apply for other available jobs.";
                                            return [3 /*break*/, 10];
                                        case 1:
                                            _i = 0, _a = this.selectedDegrees;
                                            _b.label = 2;
                                        case 2:
                                            if (!(_i < _a.length)) return [3 /*break*/, 5];
                                            deg = _a[_i];
                                            this.reqs.jobid = this.jobid;
                                            this.reqs.applid = resp.response;
                                            this.reqs.qualification = deg.qualName;
                                            this.reqs.posses = true;
                                            return [4 /*yield*/, this.applyService.addReq(this.reqs).then(function (result) {
                                                    if (!(result === undefined) && (result.response === "Requirement Added Successfully")) {
                                                        _this.count++;
                                                    }
                                                    else {
                                                        console.log("Response Error while adding Degrees: " + result.response);
                                                    }
                                                }).catch(function (err) {
                                                    // Error logging
                                                    console.error('An error occurred:', err.error);
                                                    _this.isEmpty = true;
                                                    _this.message = "Error Occured while adding Degrees. Click here to return to Dashboard and Apply again.";
                                                    _this.reqs = {};
                                                    return;
                                                })];
                                        case 3:
                                            _b.sent();
                                            this.reqs = {};
                                            _b.label = 4;
                                        case 4:
                                            _i++;
                                            return [3 /*break*/, 2];
                                        case 5:
                                            i = 0;
                                            _b.label = 6;
                                        case 6:
                                            if (!(i < this.newSkills.length)) return [3 /*break*/, 9];
                                            this.reqs.jobid = this.jobid;
                                            this.reqs.applid = resp.response;
                                            this.reqs.skill = this.newSkills[i];
                                            this.reqs.scale = this.newScales[i];
                                            return [4 /*yield*/, this.applyService.addReq(this.reqs).then(function (result) {
                                                    if (!(result === undefined) && (result.response === "Requirement Added Successfully")) {
                                                        _this.count++;
                                                    }
                                                    else {
                                                        console.log("Response Error while adding Skills: " + result.response);
                                                    }
                                                }).catch(function (err) {
                                                    // Error logging
                                                    console.error('An error occurred:', err.error);
                                                    _this.isEmpty = true;
                                                    _this.message = "Error Occured while adding Skills. Click here to return to Dashboard and Apply again.";
                                                    _this.reqs = {};
                                                    return;
                                                })];
                                        case 7:
                                            _b.sent();
                                            this.reqs = {};
                                            _b.label = 8;
                                        case 8:
                                            i++;
                                            return [3 /*break*/, 6];
                                        case 9:
                                            if (!(resp === undefined) && (this.count === (this.newSkills.length + this.selectedDegrees.length))) {
                                                this.isEmpty = true;
                                                this.hasApplied = true;
                                                this.message = " Job Applied Succesfully. Click here to return to DashBoard";
                                            }
                                            else {
                                                this.isEmpty = true;
                                                this.message = "Job Application Failed. Please Re-Enter details and try submitting again";
                                            }
                                            _b.label = 10;
                                        case 10: return [2 /*return*/];
                                    }
                                });
                            }); }).catch(function (err) {
                                // Error logging
                                console.error('An error occurred:', err.error);
                                _this.isEmpty = true;
                                _this.message = "Error Occured while applying. Click here to return to Dashboard and Apply again.";
                                return;
                            })];
                    case 3:
                        //adding the Applicant information into DB
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    //dropdown listeners
    ApplApplyComponent.prototype.onItemSelect = function (item) {
        console.log("Selected Degree: " + JSON.stringify(item));
        console.log(this.selectedDegrees);
    };
    ApplApplyComponent.prototype.OnItemDeSelect = function (item) {
        console.log("Deselected Degree: " + JSON.stringify(item));
        console.log(this.selectedDegrees);
    };
    ApplApplyComponent.prototype.onSelectAll = function (items) {
        console.log("Selected All Degrees: " + JSON.stringify(items));
    };
    ApplApplyComponent.prototype.onDeSelectAll = function (items) {
        console.log("Selected One of the Degrees: " + JSON.stringify(items));
    };
    //to clear the array of blanks or null values
    ApplApplyComponent.prototype.cleanArray = function (actual) {
        var newArray = new Array();
        for (var i = 0; i < actual.length; i++) {
            if (actual[i]) {
                newArray.push(actual[i]);
            }
        }
        return newArray;
    };
    //button handler for closing the warning message
    ApplApplyComponent.prototype.warnClose = function () {
        this.isEmpty = false;
        this.router.navigate(['/applDashboard']);
    };
    //button handler for CLOSE button
    ApplApplyComponent.prototype.close = function () {
        this.router.navigate(['/applDashboard']);
    };
    //button handler for LOGOUT button
    ApplApplyComponent.prototype.logout = function () {
        this.sessionKey = "";
        this.auth.setCookie(this.sessionKey);
        sessionStorage.setItem('uname', "");
        this.router.navigate(['/']);
    };
    return ApplApplyComponent;
}());
ApplApplyComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-appl-apply',
        template: __webpack_require__("../../../../../src/app/applicant/appl-apply/appl-apply.component.html"),
        styles: [__webpack_require__("../../../../../src/app/applicant/appl-apply/appl-apply.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__appl_apply_service__["a" /* ApplApplyService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__authenticate_component__["a" /* AuthenticateComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__authenticate_component__["a" /* AuthenticateComponent */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__appl_apply_service__["a" /* ApplApplyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__appl_apply_service__["a" /* ApplApplyService */]) === "function" && _d || Object])
], ApplApplyComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=appl-apply.component.js.map

/***/ }),

/***/ "../../../../../src/app/applicant/appl-apply/appl-apply.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplApplyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ApplApplyService = (function () {
    function ApplApplyService(httpClient) {
        this.httpClient = httpClient;
    }
    //get Job by ID
    ApplApplyService.prototype.getJobById = function (id) {
        var url = 'http://localhost:9090/api/company/jobId/' + id;
        return this.httpClient.get(url).toPromise();
    };
    //get All Requirements List by JobId
    ApplApplyService.prototype.getAllReqsById = function (id) {
        var url = 'http://localhost:9090/api/company/reqId/' + id;
        return this.httpClient.get(url).toPromise();
    };
    //add Applicant
    ApplApplyService.prototype.addApplicant = function (appl) {
        var url = 'http://localhost:9090/api/appl/addappl/';
        return this.httpClient.post(url, appl).toPromise();
    };
    //add Requirements
    ApplApplyService.prototype.addReq = function (req) {
        var url = 'http://localhost:9090/api/company/addreq';
        return this.httpClient.post(url, req).toPromise();
    };
    return ApplApplyService;
}());
ApplApplyService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], ApplApplyService);

var _a;
//# sourceMappingURL=appl-apply.service.js.map

/***/ }),

/***/ "../../../../../src/app/applicant/appl-dashboard/appl-dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container{\n    padding: 10px;\n}\n\n.jobs{\n    overflow: auto;\n    height: 350px;\n}\n\n:host .form-check-label{\n    padding-right: 120px;\n}\n\n:host .container-content{\n    width: 75%;\n    padding-left: 250px;\n}\n\nselect, option {\n    display: -ms-flexbox;\n    display: flex;\n    text-align:right;   \n}\n\ndiv.container-title {\n    position: relative;\n}\n\ndiv h1 {\n    text-align: left;\n    padding-left: 150px; \n}\n\ndiv button {\n    position: absolute;\n    right: 10px;\n    top: 5px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/applicant/appl-dashboard/appl-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-title\">\n  <h1>Applicants Dashboard\n    <button type=\"button\" (click)=\"logout()\" class=\"btn btn-warning\" value=\"LOGOUT\">LOGOUT</button>\n  </h1>\n</div>\n\n<div class=\"container\">\n\n  <div class=\"container-content\">\n\n    <div class=\"form-group\">\n\n      <label class=\"col-form-label\">All Posted JOBS</label>\n      <select class=\"form-control\" name=\"selectedJob\" [(ngModel)]=\"jobs\" required (change)=\"valueChange()\">\n        <option *ngFor=\"let selectedJob of dispJobs\" [ngValue]=\"selectedJob\">\n          JOB TITLE: {{selectedJob.jobname}} &nbsp;&nbsp;&nbsp;&nbsp; COMPANY: {{selectedJob.companyname}}\n        </option>\n      </select>\n    </div>\n\n  </div>"

/***/ }),

/***/ "../../../../../src/app/applicant/appl-dashboard/appl-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplDashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__appl_dashboard_service__ = __webpack_require__("../../../../../src/app/applicant/appl-dashboard/appl-dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authenticate_component__ = __webpack_require__("../../../../../src/app/authenticate.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var ApplDashboardComponent = (function () {
    function ApplDashboardComponent(route, router, auth, applDashboardService) {
        this.route = route;
        this.router = router;
        this.auth = auth;
        this.applDashboardService = applDashboardService;
        this.sessionKey = "";
        this.isDataAvailable = false;
        this.jobs = {
            companyname: null,
            jobname: null,
            description: null,
            salary: 0,
            type: null,
        };
        //to check if current user is the active user
        if (auth.isActiveUser('sessionID')) {
            //continue using the session
            console.log("Hi " + sessionStorage.getItem('uname'));
        }
        else {
            //redirect to login screen
            router.navigate(['./']);
        }
    }
    ApplDashboardComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    //getting all jobs from Server
                    return [4 /*yield*/, this.applDashboardService.getAllJobs().then(function (result) {
                            _this.jobs = result;
                            _this.dispJobs = result;
                            _this.isDataAvailable = true;
                        })];
                    case 1:
                        //getting all jobs from Server
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //Listener for dropdown selections
    ApplDashboardComponent.prototype.valueChange = function () {
        var jobid = this.jobs.id;
        this.router.navigate(['/applJobInfo/:' + jobid]);
    };
    //handler for LOGOUT button
    ApplDashboardComponent.prototype.logout = function () {
        this.sessionKey = "";
        this.auth.setCookie(this.sessionKey);
        sessionStorage.setItem('uname', "");
        this.router.navigate(['/']);
    };
    return ApplDashboardComponent;
}());
ApplDashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-appl-dashboard',
        template: __webpack_require__("../../../../../src/app/applicant/appl-dashboard/appl-dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/applicant/appl-dashboard/appl-dashboard.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__appl_dashboard_service__["a" /* ApplDashboardService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__authenticate_component__["a" /* AuthenticateComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__authenticate_component__["a" /* AuthenticateComponent */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__appl_dashboard_service__["a" /* ApplDashboardService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__appl_dashboard_service__["a" /* ApplDashboardService */]) === "function" && _d || Object])
], ApplDashboardComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=appl-dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/applicant/appl-dashboard/appl-dashboard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplDashboardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ApplDashboardService = (function () {
    function ApplDashboardService(httpClient) {
        this.httpClient = httpClient;
    }
    //get All Jobs List
    ApplDashboardService.prototype.getAllJobs = function () {
        var url = 'http://localhost:9090/api/company/jobs';
        return this.httpClient.get(url).toPromise().catch(function (e) {
            console.log(e);
        });
    };
    return ApplDashboardService;
}());
ApplDashboardService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], ApplDashboardService);

var _a;
//# sourceMappingURL=appl-dashboard.service.js.map

/***/ }),

/***/ "../../../../../src/app/applicant/appl-jobinfo/appl-jobinfo.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container{\n    padding: 10px;\n}\n\n.placeRight{\n    -ms-flex-line-pack: right;\n        align-content: right;\n}\n\ndiv.container-title {\n    position: relative;\n}\n\ndiv h1 {\n    text-align: left;\n    padding-left: 150px; \n}\n\ndiv button {\n    position: absolute;\n    right: 10px;\n    top: 5px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/applicant/appl-jobinfo/appl-jobinfo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"isDataAvailable\">\n\n  <div class=\"jumbotron\">\n    <h2 class=\"display-3\">{{job.jobname}}</h2>\n    <h6 class=\"display-9\">COMPANY: {{job.companyname}}</h6>\n    <hr class=\"my-4\">\n    <p class=\"lead\">Job Description: </p>\n    <p class=\"card-text\">\n      &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; {{job.description}}\n    </p>\n    <p class=\"lead\">Salary: </p>\n    <p class=\"card-text\">\n      &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; {{job.salary}}\n    </p>\n    <p class=\"lead\">Job Type: </p>\n    <p class=\"card-text\">\n      &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; {{job.type}}\n    </p>\n    <p class=\"lead\">Academic Qualifications: </p>\n    <p class=\"card-text\" *ngFor=\"let qual of degrees\">\n      &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; {{qual}}\n    </p>\n    <p class=\"lead\">Required Skills: </p>\n    <p class=\"card-text\" *ngFor=\"let sk of skills\">\n      &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; {{sk}}\n    </p>\n    <p class=\"lead\">\n      <button type=\"button\" (click)=\"logout()\" class=\"btn btn-warning\" value=\"LOGOUT\">LOGOUT</button>\n      <input type=\"button\" class=\"btn btn-outline-warning btn-lg\" (click)=\"back()\" value=\"Back to Dashboard\">\n      <input type=\"button\" class=\"btn btn-success btn-lg\" (click)=\"proceed()\" value=\"Proceed and Apply\">\n    </p>\n  </div>\n\n</div>\n\n<div class=\"alert alert-dismissible alert-danger\" *ngIf=\"!isDataAvailable\">\n  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" (click)=\"warnClose()\">&times;</button>\n  <a href=\"/applDashboard\" class=\"alert-link\">{{message}}</a>\n</div>"

/***/ }),

/***/ "../../../../../src/app/applicant/appl-jobinfo/appl-jobinfo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplJobinfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__appl_jobinfo_service__ = __webpack_require__("../../../../../src/app/applicant/appl-jobinfo/appl-jobinfo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authenticate_component__ = __webpack_require__("../../../../../src/app/authenticate.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var ApplJobinfoComponent = (function () {
    function ApplJobinfoComponent(route, router, auth, jobinfoService) {
        this.route = route;
        this.router = router;
        this.auth = auth;
        this.jobinfoService = jobinfoService;
        this.sessionKey = "";
        this.jobid = 0;
        this.isDataAvailable = false;
        this.message = "Data is Currently UnAvailable. Click here to return to Dashboard.";
        this.job = {
            companyname: null,
            jobname: null,
            description: null,
            salary: 0,
            type: null,
        };
        this.reqs = {
            id: 0,
            jobid: 0,
            qualification: null,
            posses: false,
            skill: null,
            scale: 0
        };
        this.isEmpty = false;
        //to check if current user is the active user
        if (auth.isActiveUser('sessionID')) {
            //continue using the session
            console.log("Hi " + sessionStorage.getItem('uname'));
        }
        else {
            //redirect to login screen
            router.navigate(['./']);
        }
    }
    ApplJobinfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (params.newcopy != undefined) {
                history.pushState(null, null, location.href);
                window.onpopstate = function () {
                    history.go(1);
                };
            }
            var paramId = params.jobid;
            _this.jobid = +paramId.substr(1);
            //load the data onto the screen by using the jobid from param
            _this.loadScreen(_this.jobid);
        });
    };
    //fetching and loading the data onto screen using jobid
    ApplJobinfoComponent.prototype.loadScreen = function (jobid) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.degrees = [];
                        this.skills = [];
                        //fetching job information
                        return [4 /*yield*/, this.jobinfoService.getJobById(jobid).then(function (data) {
                                _this.job = data;
                                _this.jobinfoService.getAllReqsById(jobid).then(function (result) {
                                    for (var i = 0; i < result.length; i++) {
                                        _this.degrees[i] = (result[i].qualification);
                                        _this.skills[i] = (result[i].skill);
                                    }
                                    _this.degrees = _this.cleanArray(_this.degrees);
                                    _this.skills = _this.cleanArray(_this.skills);
                                });
                                _this.isDataAvailable = true;
                            })];
                    case 1:
                        //fetching job information
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //Handler for PROCEED and APPLY button
    ApplJobinfoComponent.prototype.proceed = function () {
        this.router.navigate(['/applApply/:' + this.jobid]);
    };
    //to clean the array of null or blank values
    ApplJobinfoComponent.prototype.cleanArray = function (actual) {
        var newArray = new Array();
        for (var i = 0; i < actual.length; i++) {
            if (actual[i]) {
                newArray.push(actual[i]);
            }
        }
        return newArray;
    };
    //handler for the Warnings
    ApplJobinfoComponent.prototype.warnClose = function () {
        this.isDataAvailable = false;
        this.router.navigate(['/applDashboard']);
    };
    //handler for the Back button
    ApplJobinfoComponent.prototype.back = function () {
        this.router.navigate(['/applDashboard']);
    };
    //Handler for the LOGOUT button
    ApplJobinfoComponent.prototype.logout = function () {
        this.sessionKey = "";
        this.auth.setCookie(this.sessionKey);
        sessionStorage.setItem('uname', "");
        this.router.navigate(['/']);
    };
    return ApplJobinfoComponent;
}());
ApplJobinfoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-appl-jobinfo',
        template: __webpack_require__("../../../../../src/app/applicant/appl-jobinfo/appl-jobinfo.component.html"),
        styles: [__webpack_require__("../../../../../src/app/applicant/appl-jobinfo/appl-jobinfo.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__appl_jobinfo_service__["a" /* ApplJobinfoService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__authenticate_component__["a" /* AuthenticateComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__authenticate_component__["a" /* AuthenticateComponent */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__appl_jobinfo_service__["a" /* ApplJobinfoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__appl_jobinfo_service__["a" /* ApplJobinfoService */]) === "function" && _d || Object])
], ApplJobinfoComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=appl-jobinfo.component.js.map

/***/ }),

/***/ "../../../../../src/app/applicant/appl-jobinfo/appl-jobinfo.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplJobinfoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ApplJobinfoService = (function () {
    function ApplJobinfoService(httpClient) {
        this.httpClient = httpClient;
    }
    //get Job by ID
    ApplJobinfoService.prototype.getJobById = function (id) {
        var url = 'http://localhost:9090/api/company/jobId/' + id;
        return this.httpClient.get(url).toPromise().catch(function (e) {
            console.log(e);
        });
    };
    //get All Requirements List by JobId
    ApplJobinfoService.prototype.getAllReqsById = function (id) {
        var url = 'http://localhost:9090/api/company/reqId/' + id;
        return this.httpClient.get(url).toPromise().catch(function (e) {
            console.log(e);
        });
    };
    return ApplJobinfoService;
}());
ApplJobinfoService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], ApplJobinfoService);

var _a;
//# sourceMappingURL=appl-jobinfo.service.js.map

/***/ }),

/***/ "../../../../../src/app/auth/base/base.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container{\n    padding: 10px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/base/base.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <button type=\"button\" class=\"btn btn-primary btn-lg btn-block\" (click)=\"loginBtnClick()\">LOGIN</button>\n  </div>\n  <div class=\"container\">\n    <button type=\"button\" class=\"btn btn-primary btn-lg btn-block\" (click)=\"registerBtnClick()\">REGISTER</button>\n  </div>\n  \n"

/***/ }),

/***/ "../../../../../src/app/auth/base/base.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authenticate_component__ = __webpack_require__("../../../../../src/app/authenticate.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BaseComponent = (function () {
    function BaseComponent(router, auth) {
        this.router = router;
        this.auth = auth;
        this.sessionKey = "";
        this.auth.setCookie(this.sessionKey); //clears the existing session details
    }
    BaseComponent.prototype.ngOnInit = function () {
        this.sessionKey = "";
        this.auth.setCookie(this.sessionKey);
        sessionStorage.setItem('uname', ""); //clear the session storage information
    };
    //Handler for the LOGIN button
    BaseComponent.prototype.loginBtnClick = function () {
        this.router.navigate(['/login']);
    };
    //Handler for the REGISTER Button
    BaseComponent.prototype.registerBtnClick = function () {
        this.router.navigate(['/register']);
    };
    return BaseComponent;
}());
BaseComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-base',
        template: __webpack_require__("../../../../../src/app/auth/base/base.component.html"),
        styles: [__webpack_require__("../../../../../src/app/auth/base/base.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__authenticate_component__["a" /* AuthenticateComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__authenticate_component__["a" /* AuthenticateComponent */]) === "function" && _b || Object])
], BaseComponent);

var _a, _b;
//# sourceMappingURL=base.component.js.map

/***/ }),

/***/ "../../../../../src/app/auth/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form>\n    <div class=\"form-group\">\n      <div class=\"form-group\">\n          <label class=\"col-form-label\">Username</label>\n          <input type=\"text\" id=\"username\" name=\"username\" class=\"form-control\" required minlength=\"4\" appForbiddenName=\"admin\" [(ngModel)]=\"username\"\n            #uname=\"ngModel\">\n          <!-- FIELD VALIDATOR -->\n          <div *ngIf=\"uname.invalid && (uname.dirty || uname.touched)\" class=\"alert alert-danger\">\n  \n            <div *ngIf=\"uname.errors.required\">\n              Name is required.\n            </div>\n            <div *ngIf=\"uname.errors.minlength\">\n              Name must be at least 4 characters long.\n            </div>\n            <div *ngIf=\"uname.errors.forbiddenName\">\n              Name cannot be Admin.\n            </div>\n  \n          </div>\n        </div>\n\n      <div class=\"form-group\">\n        <label>Password</label>\n        <input type=\"password\" class=\"form-control\" [(ngModel)]='password' name=\"password\" id=\"password\" required minlength=\"6\" placeholder=\"Password\"\n          #pwd=\"ngModel\">\n        <!-- FIELD VALIDATOR -->\n        <div *ngIf=\"pwd.invalid && (pwd.dirty || pwd.touched)\" class=\"alert alert-danger\">\n\n          <div *ngIf=\"pwd.errors.required\">\n            Password is required.\n          </div>\n          <div *ngIf=\"pwd.errors.minlength\">\n            Password must be at least 6 characters long.\n          </div>\n\n        </div>\n      </div>\n\n      <input type=\"button\" (click)=\"login()\" class=\"btn btn-primary\" value=\"Login\">\n      <input type=\"button\" (click)=\"back()\" class=\"btn btn-outline-warning\" value=\"Back\">\n\n    </div>\n  </form>\n</div>\n\n<div class=\"alert alert-dismissible alert-danger\" *ngIf=\"isEmpty\">\n  <button type=\"button\" (click)=\"warnClose()\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n  <a href=\"/register\" class=\"alert-link\">{{message}}</a>\n</div>"

/***/ }),

/***/ "../../../../../src/app/auth/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_service__ = __webpack_require__("../../../../../src/app/auth/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authenticate_component__ = __webpack_require__("../../../../../src/app/authenticate.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var LoginComponent = (function () {
    function LoginComponent(loginService, router, auth) {
        this.loginService = loginService;
        this.router = router;
        this.auth = auth;
        this.username = "";
        this.password = "";
        this.sessionKey = "";
        this.pwdChk = "";
        this.unameChk = "";
        this.role = "";
        this.company = "";
        this.isEmpty = false;
        this.auth.setCookie(this.sessionKey); //clears the existing session details
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.auth.setCookie(this.sessionKey); //clears the existing session details
    };
    //to add a new User
    LoginComponent.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var uname, pwd;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    //fetch user information from db and perform 'atob' operation to get String.
                    //simple Base64 encryption techniques.
                    return [4 /*yield*/, this.loginService.getUser(btoa(this.username)).then(function (resp) {
                            _this.unameChk = atob(resp.username);
                            _this.pwdChk = atob(resp.password);
                            _this.role = resp.role;
                            _this.company = resp.actualname;
                        })];
                    case 1:
                        //fetch user information from db and perform 'atob' operation to get String.
                        //simple Base64 encryption techniques.
                        _a.sent();
                        if ((this.username === this.unameChk) && (this.password === this.pwdChk)) {
                            uname = btoa(this.username);
                            pwd = btoa(this.password);
                            this.sessionKey = btoa(uname + '??' + pwd); //btoa doesn't convert '??' to BASE64 value
                            //setting the credentials into cookies if match is found
                            this.auth.setCookie(this.sessionKey);
                            sessionStorage.setItem('uname', this.username);
                            this.isEmpty = false;
                            if (this.role === "company") {
                                sessionStorage.setItem('cname', this.company);
                                this.router.navigate(['/compDashboard']);
                            }
                            else if (this.role === "applicant") {
                                sessionStorage.setItem('cname', "Applicant");
                                this.router.navigate(['/applDashboard']);
                            }
                            else {
                                sessionStorage.setItem('cname', "");
                                this.router.navigate(['/']);
                            }
                        }
                        else {
                            console.log("Login Failed: ");
                            //re-setting the credentials into cookies if match is not found
                            this.sessionKey = "";
                            this.auth.setCookie(this.sessionKey);
                            sessionStorage.setItem('uname', "");
                            this.isEmpty = true;
                            this.message = "Please use correct User Name and Password.";
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    //button handler for closing the warning message
    LoginComponent.prototype.warnClose = function () {
        this.isEmpty = false;
        this.router.navigate(['/']);
    };
    //handler for BACK button
    LoginComponent.prototype.back = function () {
        this.sessionKey = "";
        this.auth.setCookie(this.sessionKey);
        sessionStorage.setItem('uname', "");
        this.router.navigate(['/']);
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/auth/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/auth/login/login.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__login_service__["a" /* LoginService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__login_service__["a" /* LoginService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__authenticate_component__["a" /* AuthenticateComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__authenticate_component__["a" /* AuthenticateComponent */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/auth/login/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var LoginService = (function () {
    function LoginService(httpClient) {
        this.httpClient = httpClient;
    }
    //get UsersList
    LoginService.prototype.getUser = function (id) {
        var url = 'http://localhost:9090/api/user/userId/';
        return this.httpClient.get(url + id).toPromise().catch(function (e) {
            console.log(e);
        });
    };
    return LoginService;
}());
LoginService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], LoginService);

var _a;
//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ "../../../../../src/app/auth/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".radioDiv{\n    -ms-flex-line-pack: center;\n        align-content: center;\n}\n:host .form-check-label{\n    padding-right: 30px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <form>\n\n    <input type=\"button\" (click)=\"isCompanyBtn()\" class=\"btn btn-primary btn-lg\" value=\"Enroll COMPANY\">\n    <input type=\"button\" (click)=\"isApplicantBtn()\" class=\"btn btn-primary btn-lg\" value=\"Enroll APPLICANT\">\n    <label class=\"form-label\">None of the Fields can be EMPTY</label>\n\n\n    <div class=\"form-group\">\n      <div class=\"form-group\" *ngIf=\"isApplicant\">\n        <label class=\"col-form-label\">Fullname</label>\n        <input id=\"fullname\" name=\"fullname\" class=\"form-control\" required minlength=\"4\" [(ngModel)]=\"fullname\" #fname=\"ngModel\">\n        <!-- FIELD VALIDATOR -->\n        <div *ngIf=\"fname.invalid && (fname.dirty || fname.touched)\" class=\"alert alert-danger\">\n\n          <div *ngIf=\"fname.errors.required\">\n            Full Name is required.\n          </div>\n          <div *ngIf=\"fname.errors.minlength\">\n            Name must be at least 4 characters long.\n          </div>\n\n        </div>\n      </div>\n\n      <div class=\"form-group\" *ngIf=\"isCompany\">\n        <label class=\"col-form-label\">Company Name</label>\n        <input type=\"text\" id=\"companyName\" name=\"companyName\" class=\"form-control\" required minlength=\"4\" [(ngModel)]=\"companyName\"\n          #cname=\"ngModel\">\n        <!-- FIELD VALIDATOR -->\n        <div *ngIf=\"cname.invalid && (cname.dirty || cname.touched)\" class=\"alert alert-danger\">\n\n          <div *ngIf=\"cname.errors.required\">\n            Company Name is required.\n          </div>\n          <div *ngIf=\"cname.errors.minlength\">\n            Name must be at least 4 characters long.\n          </div>\n\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label class=\"col-form-label\">Username</label>\n        <input type=\"text\" id=\"username\" name=\"username\" class=\"form-control\" required minlength=\"4\" appForbiddenName=\"admin\" [(ngModel)]=\"username\"\n          #uname=\"ngModel\">\n        <!-- FIELD VALIDATOR -->\n        <div *ngIf=\"uname.invalid && (uname.dirty || uname.touched)\" class=\"alert alert-danger\">\n\n          <div *ngIf=\"uname.errors.required\">\n            Name is required.\n          </div>\n          <div *ngIf=\"uname.errors.minlength\">\n            Name must be at least 4 characters long.\n          </div>\n          <div *ngIf=\"uname.errors.forbiddenName\">\n            Name cannot be Admin.\n          </div>\n\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label>Password</label>\n        <input type=\"password\" class=\"form-control\" [(ngModel)]='password' name=\"password\" id=\"password\" required minlength=\"6\" placeholder=\"Password\"\n          #pwd=\"ngModel\">\n        <!-- FIELD VALIDATOR -->\n        <div *ngIf=\"pwd.invalid && (pwd.dirty || pwd.touched)\" class=\"alert alert-danger\">\n\n          <div *ngIf=\"pwd.errors.required\">\n            Password is required.\n          </div>\n          <div *ngIf=\"pwd.errors.minlength\">\n            Password must be at least 6 characters long.\n          </div>\n\n        </div>\n      </div>\n\n\n      <input type=\"button\" (click)=\"enroll()\" class=\"btn btn-success\" value=\"ENROLL\">\n      <input type=\"button\" (click)=\"back()\" class=\"btn btn-outline-warning\" value=\"Back\">\n\n    </div>\n  </form>\n</div>\n\n<div class=\"alert alert-dismissible alert-danger\" *ngIf=\"isEmpty\">\n  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" (click)=\"warnClose()\">&times;</button>\n  <a href=\"/\" class=\"alert-link\">{{message}}</a>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/auth/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__register_service__ = __webpack_require__("../../../../../src/app/auth/register/register.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authenticate_component__ = __webpack_require__("../../../../../src/app/authenticate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    function RegisterComponent(registerService, router, auth) {
        this.registerService = registerService;
        this.router = router;
        this.auth = auth;
        this.isCompany = true;
        this.isApplicant = false;
        this.isEmpty = false;
        this.role = 'company'; //set 'company' or 'applicant'
        this.sessionKey = "";
        this.user = {
            id: null,
            actualname: null,
            username: null,
            password: null,
            role: null
        };
        this.auth.setCookie(this.sessionKey); //clears the existing session details
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.isEmpty = false;
    };
    //handler for ENROLL COMPANY button.
    RegisterComponent.prototype.isCompanyBtn = function () {
        this.isCompany = true;
        this.isApplicant = false;
        this.role = "company";
    };
    //handler for ENROLL APPLICANT button
    RegisterComponent.prototype.isApplicantBtn = function () {
        this.isCompany = false;
        this.isApplicant = true;
        this.role = "applicant";
    };
    RegisterComponent.prototype.enroll = function () {
        var _this = this;
        //setting the User values
        //using simple encryption technique: BASE64 btoa<->atob conversion
        (this.isCompany) ? (this.actualname = this.companyName) : (this.actualname = this.fullname);
        this.user.actualname = this.actualname;
        this.user.username = btoa(this.username);
        this.user.password = btoa(this.password);
        this.user.role = this.role;
        //checking if all fields are filled
        if (((this.username && this.password && this.role && this.actualname) === undefined)
            || ((this.username && this.password && this.role && this.actualname) === null)
            || ((this.username && this.password && this.role && this.actualname) === '')) {
            this.isEmpty = true;
            this.message = "Some Fields seem to be empty. Fill in all the fields and try submitting again.";
        }
        else {
            this.isEmpty = true;
            //adding user to database
            this.registerService.addUser(this.user).then(function (resp) {
                if (!(resp === undefined) && (resp.response === "User Created Successfully. ")) {
                    _this.message = " User Created Succesfully. Please go to Login Page.";
                }
                else {
                    _this.message = "User Creation Failed. Please Re-Enter details and try submitting again";
                }
            });
        }
    };
    //handler for BACK button
    RegisterComponent.prototype.back = function () {
        this.sessionKey = "";
        this.auth.setCookie(this.sessionKey);
        sessionStorage.setItem('uname', "");
        this.router.navigate(['/']);
    };
    //handler for the error warning close button
    RegisterComponent.prototype.warnClose = function () {
        this.isEmpty = false;
        this.router.navigate(['/']);
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/auth/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/auth/register/register.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__register_service__["a" /* RegisterService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__register_service__["a" /* RegisterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__register_service__["a" /* RegisterService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__authenticate_component__["a" /* AuthenticateComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__authenticate_component__["a" /* AuthenticateComponent */]) === "function" && _c || Object])
], RegisterComponent);

var _a, _b, _c;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/auth/register/register.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var RegisterService = (function () {
    function RegisterService(httpClient) {
        this.httpClient = httpClient;
    }
    //add Users
    RegisterService.prototype.addUser = function (user) {
        var url = 'http://localhost:9090/api/user/adduser';
        return this.httpClient.post(url, user).toPromise().catch(function (err) {
            // Error logging
            console.error('An error occurred:', err.error);
        });
    };
    return RegisterService;
}());
RegisterService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], RegisterService);

var _a;
//# sourceMappingURL=register.service.js.map

/***/ }),

/***/ "../../../../../src/app/authenticate.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ng2_cookies_ng2_cookies__ = __webpack_require__("../../../../ng2-cookies/ng2-cookies.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ng2_cookies_ng2_cookies___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ng2_cookies_ng2_cookies__);

var AuthenticateComponent = (function () {
    function AuthenticateComponent() {
    }
    //set the session Cookie
    AuthenticateComponent.prototype.setCookie = function (sessionKey) {
        __WEBPACK_IMPORTED_MODULE_0_ng2_cookies_ng2_cookies__["Cookie"].set('sessionID', sessionKey);
    };
    //retuen the session Cookie
    AuthenticateComponent.prototype.getCookie = function (sessionID) {
        this.session = __WEBPACK_IMPORTED_MODULE_0_ng2_cookies_ng2_cookies__["Cookie"].get(sessionID);
        return this.session;
    };
    //retrns the current User
    AuthenticateComponent.prototype.isActiveUser = function (sessionID) {
        this.getSessionUser(sessionID);
        if ((this.getSessionUser(sessionID).length === 0) || (sessionStorage.getItem('uname').length === 0)) {
            return false;
        }
        else if (this.getSessionUser(sessionID) === sessionStorage.getItem('uname')) {
            return true;
        }
    };
    //returns the session Username
    AuthenticateComponent.prototype.getSessionUser = function (sessionID) {
        this.session = __WEBPACK_IMPORTED_MODULE_0_ng2_cookies_ng2_cookies__["Cookie"].get(sessionID);
        var uname = atob(atob(this.session).split('??')[0]);
        return uname;
    };
    return AuthenticateComponent;
}());

//# sourceMappingURL=authenticate.component.js.map

/***/ }),

/***/ "../../../../../src/app/company/comp-dashboard/comp-dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container{\n    padding: 10px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/company/comp-dashboard/comp-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <button type=\"button\" class=\"btn btn-outline-primary btn-lg btn-block\" (click)=\"allJobsBtnClick()\">SEE APPLICANTS</button>\n</div>\n<div class=\"container\">\n  <button type=\"button\" class=\"btn btn-outline-primary btn-lg btn-block\" (click)=\"postJobBtnClick()\">POST NEW JOB</button>\n</div>\n<div class=\"container\">\n  <button type=\"button\" class=\"btn btn-outline-primary btn-lg btn-block\" (click)=\"editJobBtnClick()\">EDIT EXISITNG JOB</button>\n</div>\n<div class=\"container\">\n  <button type=\"button\" class=\"btn btn-outline-warning\" (click)=\"back()\">BACK/ LOGOUT</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/company/comp-dashboard/comp-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompDashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authenticate_component__ = __webpack_require__("../../../../../src/app/authenticate.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CompDashboardComponent = (function () {
    function CompDashboardComponent(router, auth) {
        this.router = router;
        this.auth = auth;
        this.sessionKey = "";
        //to check if current user is the active user
        if (auth.isActiveUser('sessionID')) {
            //continue using the session
            console.log("Hi " + sessionStorage.getItem('uname'));
        }
        else {
            //redirect to login screen
            router.navigate(['./']);
        }
    }
    CompDashboardComponent.prototype.ngOnInit = function () {
    };
    //handler for POST NEW JOB button
    CompDashboardComponent.prototype.postJobBtnClick = function () {
        this.router.navigate(['/postJob']);
    };
    //handler for EDIT EXISTING JOB button
    CompDashboardComponent.prototype.editJobBtnClick = function () {
        this.router.navigate(['/editJob']);
    };
    //handler for SEE APPLICANTS button
    CompDashboardComponent.prototype.allJobsBtnClick = function () {
        this.router.navigate(['/listJobs']);
    };
    //handler for BACK button
    CompDashboardComponent.prototype.back = function () {
        this.sessionKey = "";
        this.auth.setCookie(this.sessionKey);
        sessionStorage.setItem('uname', "");
        this.router.navigate(['/']);
    };
    return CompDashboardComponent;
}());
CompDashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-comp-dashboard',
        template: __webpack_require__("../../../../../src/app/company/comp-dashboard/comp-dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/company/comp-dashboard/comp-dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__authenticate_component__["a" /* AuthenticateComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__authenticate_component__["a" /* AuthenticateComponent */]) === "function" && _b || Object])
], CompDashboardComponent);

var _a, _b;
//# sourceMappingURL=comp-dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/company/edit-job/edit-job.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host .form-check-label{\n    padding-right: 120px;\n}\n\n:host .container-content{\n    position: absolute;\n    padding-left: 40%; \n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/company/edit-job/edit-job.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Edit Existing Job</h1>\n</div>\n\n<div class=\"container-content\" *ngIf=\"!hasData\">\n\n  <div class=\"form-group\" *ngIf=\"isDataAvailable\">\n\n    <label  class=\"col-form-label\">Click Here to see the list of all Posted JOBS</label>\n    <select class=\"form-control\" name=\"selectedJob\" [(ngModel)]=\"oldJob\" required (change)=\"valueChange()\">\n      <option *ngFor=\"let selectedJob of jobs\" [ngValue]=\"selectedJob\"> {{selectedJob.jobname}} </option>\n    </select>\n  </div>\n    <input type=\"button\" (click)=\"back()\" class=\"btn btn-outline-warning\" value=\"Back To Dashboard\">\n\n</div>\n\n\n<div class=\"container\" *ngIf=\"hasData\">\n  <form>\n\n    <div class=\"form-group\">\n      <div class=\"form-group\">\n        <label class=\"col-form-label\">Job Role</label>\n        <input id=\"jobname\" name=\"jobname\" class=\"form-control\" required minlength=\"2\" [(ngModel)]=\"jobname\" placeholder=\"Job Role\"\n          #jname=\"ngModel\" disabled>\n          <small id=\"jobHelp\" class=\"form-text text-muted\">Role of this job.</small>\n        <!-- FIELD VALIDATOR -->\n        <div *ngIf=\"jname.invalid && (jname.dirty || jname.touched)\" class=\"alert alert-danger\">\n\n          <div *ngIf=\"jname.errors.required\">\n            Job Role is required.\n          </div>\n          <div *ngIf=\"jname.errors.minlength\">\n            Job Role must be at least 2 characters long.\n          </div>\n\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label class=\"col-form-label\">Job Description</label>\n        <textarea id=\"description\" rows=\"2\" name=\"description\" class=\"form-control\" required minlength=\"4\" placeholder=\"Job Description\"\n          [(ngModel)]=\"description\" #dname=\"ngModel\" disabled></textarea>\n          <small id=\"descHelp\" class=\"form-text text-muted\">A Brief description regarding this job.</small>\n          <!-- FIELD VALIDATOR -->\n        <div *ngIf=\"dname.invalid && (dname.dirty || dname.touched)\" class=\"alert alert-danger\">\n\n          <div *ngIf=\"dname.errors.required\">\n            Job Description is required.\n          </div>\n          <div *ngIf=\"dname.errors.minlength\">\n            Job Description must be at least 4 characters long.\n          </div>\n\n        </div>\n\n      </div>\n\n      <div class=\"form-group\">\n        <div class=\"form-group\">\n          <label class=\"col-form-label\">Job Type</label>\n          <div class=\"form-check\" (click)=\"radioType($event)\">\n            <label class=\"form-check-label\">\n              <input type=\"radio\" class=\"form-check-input\" name=\"optionsRadis\" id=\"optionsRadis1\" value=\"full-time\" checked=\"\"> Full Time\n            </label>\n            <label class=\"form-check-label\">\n              <input type=\"radio\" class=\"form-check-input\" name=\"optionsRadis\" id=\"optionsRadis2\" value=\"part-time\"> Part Time\n            </label>\n            <label class=\"form-check-label\">\n              <input type=\"radio\" class=\"form-check-input\" name=\"optionsRadis\" id=\"optionsRadis2\" value=\"contract\"> Contract\n            </label>\n\n          </div>\n\n        </div>\n\n      </div>\n\n      <div class=\"form-group\">\n        <div class=\"form-group\">\n          <label class=\"col-form-label\">Required Academic Degree/s</label>\n          <input type=\"text\" id=\"degree\" name=\"degree\" class=\"form-control\" [(ngModel)]=\"degree\" placeholder=\"Academic Degrees\" #degname=\"ngModel\"\n            (keydown)=\"degreeKeyFunction($event)\" required>\n            <small id=\"degreeHelp\" class=\"form-text text-muted\">Type the name of Required Academic Degree. Press Enter to push into the 'Academic Qualifications' section.</small>\n            <!-- FIELD VALIDATOR -->\n          <div *ngIf=\"degname.invalid && (degname.dirty || degname.touched)\" class=\"alert alert-danger\">\n\n            <div *ngIf=\"degname.errors.required\">\n              Academic Qualification is required.\n            </div>\n\n          </div>\n        </div>\n        <div *ngIf=\"hasDegrees\" style=\"width: 90%; padding-left: 70px;\">\n            <label class=\"form-check-label\">Academic Qualifications</label>\n          <button type=\"button\" class=\"close\" data-dismiss=\"alert\" (click)=\"closeDegree()\">&times;</button>\n          <select multiple=\"\" class=\"form-control\">\n            <option *ngFor=\"let d of degrees\">{{d}}</option>\n          </select>\n        </div>\n\n      </div>\n\n      <div class=\"form-group\">\n        <div class=\"form-group\">\n          <label class=\"col-form-label\">Required Skill/s [5 - Expert .... 1 - Novice]</label>\n          <div class=\"form-check\" (click)=\"radioSkill($event)\">\n            <label class=\"form-check-label\">Scale of Each Skill</label>\n            <label class=\"form-check-label\">\n              <input type=\"radio\" class=\"form-check-input\" name=\"optionsRadios\" id=\"optionsRadios1\" value=\"1\" checked=\"\"> 1\n            </label>\n            <label class=\"form-check-label\">\n              <input type=\"radio\" class=\"form-check-input\" name=\"optionsRadios\" id=\"optionsRadios2\" value=\"2\"> 2\n            </label>\n            <label class=\"form-check-label\">\n              <input type=\"radio\" class=\"form-check-input\" name=\"optionsRadios\" id=\"optionsRadios2\" value=\"3\"> 3\n            </label>\n            <label class=\"form-check-label\">\n              <input type=\"radio\" class=\"form-check-input\" name=\"optionsRadios\" id=\"optionsRadios2\" value=\"4\"> 4\n            </label>\n            <label class=\"form-check-label\">\n              <input type=\"radio\" class=\"form-check-input\" name=\"optionsRadios\" id=\"optionsRadios2\" value=\"5\"> 5\n            </label>\n            <br>\n\n          </div>\n          <label class=\"form-check-label\">&nbsp;&nbsp;&nbsp;&nbsp;Skill</label>\n\n          <input type=\"text\" id=\"skill\" name=\"skill\" class=\"form-control\" [(ngModel)]=\"skill\" placeholder=\"Skill/s\" #skname=\"ngModel\"\n            (keydown)=\"skillKeyFunction($event)\" required>\n            <small id=\"skillHelp\" class=\"form-text text-muted\">Select the required Skill from the 'SKILLS' box and select the desired Scale. Press Enter to push into the 'SKILLS' section.</small>\n            <!-- FIELD VALIDATOR -->\n          <div *ngIf=\"skname.invalid && (skname.dirty || skname.touched)\" class=\"alert alert-danger\">\n\n            <div *ngIf=\"skname.errors.required\">\n              Atleast One Skill Set is required.\n            </div>\n\n          </div>\n\n        </div>\n\n        <div *ngIf=\"hasSkills\" style=\"width: 90%; padding-left: 70px;\">\n            <label class=\"form-check-label\">SKILLS</label>\n          <button type=\"button\" class=\"close\" data-dismiss=\"alert\" (click)=\"closeSkill()\">&times;</button>\n          <select multiple=\"\" class=\"form-control\">\n            <option *ngFor=\"let s of skillSet\">{{s}}</option>\n          </select>\n        </div>\n        \n      </div>\n        <small  *ngIf=\"hasSkills\" style=\"width: 90%; padding-left: 70px;\" id=\"skillBoxHelp\" class=\"form-text text-muted\">Select Skill from here if you wish to edit the scale value.</small>\n\n\n\n      <div class=\"form-group\">\n        <label class=\"control-label\">Salary</label>\n        <div class=\"form-group\">\n          <div class=\"input-group mb-3\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\">CAD$</span>\n            </div>\n            <input type=\"text\" class=\"form-control\" aria-label=\"Amount (to the nearest CAD)\" id=\"salary\" name=\"salary\" required minlength=\"1\"\n              appForbiddenName=\"0\" placeholder=\"Salary\" [(ngModel)]=\"salary\" #sname=\"ngModel\" pattern=\"[0-9]*\">\n              <div class=\"input-group-append\">\n              <span class=\"input-group-text\">.00</span>\n            </div>\n          </div>\n        </div>\n        <small id=\"salaryHelp\" class=\"form-text text-muted\">Salary can be any non decimal value except Zero.</small>\n        <!-- FIELD VALIDATOR -->\n        <div *ngIf=\"sname.invalid && (sname.dirty || sname.touched)\" class=\"alert alert-danger\">\n\n          <div *ngIf=\"sname.errors.required\">\n            Salary is required.\n          </div>\n          <div *ngIf=\"sname.errors.minlength\">\n            Salary must be at least Single Digit.\n          </div>\n          <div *ngIf=\"sname.errors.forbiddenName\">\n            Salary cannot be Zero. Salary must be greater than Zero.\n          </div>\n          <div *ngIf=\"sname.errors.pattern\">\n            Salary must be only digits. Cannot be Zero or Decimal Values either.\n          </div>\n\n        </div>\n      </div>\n\n\n      <button type=\"button\" (click)=\"logout()\" class=\"btn btn-warning\" value=\"LOGOUT\">LOGOUT</button>\n      <input type=\"button\" (click)=\"close()\" class=\"btn btn-outline-warning\" value=\"Close\">\n      <input type=\"button\" (click)=\"editJob()\" class=\"btn btn-success\" value=\"Edit Job\">\n\n    </div>\n  </form>\n</div>\n\n<div class=\"alert alert-dismissible alert-danger\" *ngIf=\"isEmpty\">\n  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" (click)=\"warnClose()\">&times;</button>\n  <a href=\"/compDashboard\" class=\"alert-link\">{{message}}</a>\n</div>"

/***/ }),

/***/ "../../../../../src/app/company/edit-job/edit-job.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditJobComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__edit_job_service__ = __webpack_require__("../../../../../src/app/company/edit-job/edit-job.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authenticate_component__ = __webpack_require__("../../../../../src/app/authenticate.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var EditJobComponent = (function () {
    function EditJobComponent(editJobService, router, auth) {
        this.editJobService = editJobService;
        this.router = router;
        this.auth = auth;
        this.sessionKey = "";
        this.hasData = false;
        this.companyname = "";
        this.jobname = "";
        this.description = "";
        this.degree = "";
        this.hasDegrees = false;
        this.degrees = [];
        this.skill = "";
        this.hasSkills = false;
        this.skills = [];
        this.scale = 1;
        this.scales = [];
        this.skillSet = [];
        this.type = "full-time";
        this.oldJob = {
            companyname: null,
            jobname: null,
            description: null,
            salary: 0,
            type: null,
        };
        this.oldReqs = {
            id: 0,
            jobid: 0,
            qualification: null,
            posses: false,
            skill: null,
            scale: 0
        };
        this.message = "";
        this.isEmpty = false;
        this.isValid = false;
        this.isDataAvailable = false;
        //to store new Values
        this.oldDegrees = [];
        this.newDegrees = [];
        this.oldSkills = [];
        this.newSkills = [];
        this.oldScales = [];
        this.newScales = [];
        this.reqsMap = new Map();
        this.newJob = {
            companyname: null,
            jobname: null,
            description: null,
            salary: 0,
            type: null,
        };
        this.newReq = {
            jobid: 0,
            qualification: null,
            posses: false,
            skill: null,
            scale: 0
        };
        //to check if current user is the active user
        if (auth.isActiveUser('sessionID')) {
            //continue using the session
            console.log("Hi " + sessionStorage.getItem('uname'));
            //get the companyname from session for which this user is associated
            this.companyname = sessionStorage.getItem('cname');
        }
        else {
            //redirect to login screen
            router.navigate(['./']);
        }
    }
    EditJobComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    //getting all jobs from Server using the companyname of the loggedin user from the session information
                    return [4 /*yield*/, this.editJobService.getAllJobsByCompany(this.companyname).then(function (result) {
                            _this.oldJob = result;
                            _this.jobs = result;
                            _this.isDataAvailable = true;
                        })];
                    case 1:
                        //getting all jobs from Server using the companyname of the loggedin user from the session information
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //validate the inputs and make the changes accordingly
    EditJobComponent.prototype.editJob = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var index, index;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (((this.jobname && this.description && this.salary && this.degree && this.skill && this.scale) === undefined)
                            || ((this.jobname && this.description && this.salary && this.degree && this.skill && this.scale) === null)
                            || ((this.jobname && this.description && this.salary && this.degree && this.skill) === '')
                            || ((this.skills.length) === 0)
                            || ((this.scales.length) === 0)) {
                            this.isValid = false;
                        }
                        else {
                            this.isValid = true;
                            if (this.degrees.indexOf(this.degree) !== -1) {
                                index = this.degrees.indexOf(this.degree);
                                this.degrees[index] = this.degree;
                            }
                            if (this.skills.indexOf(this.skill) !== -1) {
                                index = this.skills.indexOf(this.skill);
                                this.skills[index] = this.skill;
                            }
                        }
                        if (!this.isValid) return [3 /*break*/, 2];
                        this.newDegrees = this.cleanArray(this.degrees);
                        this.newSkills = this.cleanArray(this.skills);
                        this.newScales = this.cleanArray(this.scales);
                        this.newJob.companyname = this.companyname;
                        this.newJob.jobname = this.jobname;
                        this.newJob.description = this.description;
                        this.newJob.salary = this.salary;
                        this.newJob.type = this.type;
                        //pushing the edited job information
                        return [4 /*yield*/, this.editJobService.editJob(this.newJob).then(function (resp) { return __awaiter(_this, void 0, void 0, function () {
                                var _i, _a, deg, index, _b, _c, deg, index, _d, _e, element, id, index, i, index, index, i, id;
                                return __generator(this, function (_f) {
                                    switch (_f.label) {
                                        case 0:
                                            _i = 0, _a = this.newDegrees;
                                            _f.label = 1;
                                        case 1:
                                            if (!(_i < _a.length)) return [3 /*break*/, 5];
                                            deg = _a[_i];
                                            if (!(this.oldDegrees.indexOf(deg) !== -1)) return [3 /*break*/, 2];
                                            return [3 /*break*/, 4];
                                        case 2:
                                            //do insert
                                            this.newReq.jobid = this.oldJob.id;
                                            this.newReq.qualification = deg;
                                            index = this.oldDegrees.indexOf(deg);
                                            return [4 /*yield*/, this.editJobService.addReq(this.newReq).then(function (result) {
                                                    console.log("Response of Degrees updation: " + JSON.stringify(result));
                                                })];
                                        case 3:
                                            _f.sent();
                                            this.newReq = {};
                                            _f.label = 4;
                                        case 4:
                                            _i++;
                                            return [3 /*break*/, 1];
                                        case 5:
                                            _b = 0, _c = this.oldDegrees;
                                            _f.label = 6;
                                        case 6:
                                            if (!(_b < _c.length)) return [3 /*break*/, 13];
                                            deg = _c[_b];
                                            if (!(this.newDegrees.indexOf(deg) !== -1)) return [3 /*break*/, 7];
                                            index = this.newDegrees.indexOf(deg);
                                            return [3 /*break*/, 11];
                                        case 7:
                                            _d = 0, _e = this.oldReq;
                                            _f.label = 8;
                                        case 8:
                                            if (!(_d < _e.length)) return [3 /*break*/, 11];
                                            element = _e[_d];
                                            if (!(element.qualification === deg)) return [3 /*break*/, 10];
                                            id = element.id;
                                            index = this.newDegrees.indexOf(deg);
                                            return [4 /*yield*/, this.editJobService.delReq(id).then(function (result) {
                                                    console.log("Response of Degrees updation: " + JSON.stringify(result));
                                                })];
                                        case 9:
                                            _f.sent();
                                            _f.label = 10;
                                        case 10:
                                            _d++;
                                            return [3 /*break*/, 8];
                                        case 11:
                                            this.newReq = {};
                                            _f.label = 12;
                                        case 12:
                                            _b++;
                                            return [3 /*break*/, 6];
                                        case 13:
                                            i = 0;
                                            _f.label = 14;
                                        case 14:
                                            if (!(i < this.newSkills.length)) return [3 /*break*/, 21];
                                            if (!(this.oldSkills.indexOf(this.newSkills[i]) !== -1)) return [3 /*break*/, 18];
                                            index = this.oldSkills.indexOf(this.newSkills[i]);
                                            if (!(this.newScales[i] == this.oldScales[index])) return [3 /*break*/, 15];
                                            return [3 /*break*/, 17];
                                        case 15:
                                            //do update
                                            this.newReq.id = this.oldReq[i].id;
                                            this.newReq.jobid = this.oldJob.id;
                                            this.newReq.skill = this.newSkills[i];
                                            this.newReq.scale = this.newScales[i];
                                            return [4 /*yield*/, this.editJobService.editJobReq(this.newReq).then(function (result) {
                                                    console.log("Response of Skill Updation: " + JSON.stringify(result));
                                                })];
                                        case 16:
                                            _f.sent();
                                            this.newReq = {};
                                            _f.label = 17;
                                        case 17: return [3 /*break*/, 20];
                                        case 18:
                                            //do insert
                                            this.newReq.jobid = this.oldJob.id;
                                            this.newReq.skill = this.skills[i];
                                            this.newReq.scale = this.scales[i];
                                            index = this.oldSkills.indexOf(this.newSkills[i]);
                                            return [4 /*yield*/, this.editJobService.addReq(this.newReq).then(function (result) {
                                                    console.log("Response for New Skill addition: " + JSON.stringify(result));
                                                })];
                                        case 19:
                                            _f.sent();
                                            this.newReq = {};
                                            _f.label = 20;
                                        case 20:
                                            i++;
                                            return [3 /*break*/, 14];
                                        case 21:
                                            for (i = 0; i < this.oldSkills.length; i++) {
                                                if (this.newSkills.indexOf(this.oldSkills[i]) !== -1) {
                                                    //do no delete
                                                }
                                                else {
                                                    id = this.oldReq[i].id;
                                                    this.editJobService.delReq(id).then(function (result) {
                                                        console.log("Response for Removal of Skills: " + JSON.stringify(result));
                                                    });
                                                }
                                            }
                                            if (!(resp === undefined)) {
                                                this.isEmpty = true;
                                                this.message = " Job Updated Succesfully. Click here to return to DashBoard";
                                            }
                                            else {
                                                this.isEmpty = true;
                                                this.message = "Job Updation Failed. Please Re-Enter details and try creating new Job posting again";
                                            }
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        //pushing the edited job information
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        this.isEmpty = true;
                        this.message = " Please Fill all the Fields and Press 'Edit Job' Button Again";
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    //Listener for the dropdown menu
    EditJobComponent.prototype.valueChange = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var pivot, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.newReq = {};
                        this.degrees = [];
                        this.skills = [];
                        this.scales = [];
                        this.skillSet = [];
                        this.degree = "";
                        this.skill = "";
                        this.hasData = true;
                        pivot = this.oldJob.id;
                        //fetching the information regading the selected job
                        return [4 /*yield*/, this.editJobService.getAllReqsById(pivot).then(function (reqData) {
                                _this.oldReq = reqData;
                                for (var i = 0; i < reqData.length; i++) {
                                    _this.oldReq[i].id = reqData[i].id;
                                    _this.oldReq[i].qualification = reqData[i].qualification;
                                    if (reqData[i].qualification === null) {
                                    }
                                    else {
                                        _this.degrees[i] = (reqData[i].qualification);
                                        _this.oldDegrees[i] = (reqData[i].qualification);
                                        _this.degree = (reqData[i].qualification);
                                    }
                                    if (reqData[i].skill === null) {
                                    }
                                    else {
                                        _this.skills[i] = (reqData[i].skill);
                                        _this.oldSkills[i] = (reqData[i].skill);
                                        _this.skill = (reqData[i].skill);
                                    }
                                    if (reqData[i].scale == 0) {
                                    }
                                    else {
                                        _this.scales[i] = (reqData[i].scale);
                                        _this.oldScales[i] = (reqData[i].scale);
                                        _this.skillSet.push(_this.skills[i] + " " + _this.scales[i]);
                                        _this.reqsMap.set(reqData[i].id, _this.skillSet[i]);
                                    }
                                    _this.hasDegrees = true;
                                    _this.hasSkills = true;
                                }
                                //removing blanks from Degrees & SkillSet
                                _this.degrees = _this.cleanArray(_this.degrees);
                                _this.oldDegrees = _this.cleanArray(_this.oldDegrees);
                                _this.skills = _this.cleanArray(_this.skills);
                                _this.oldSkills = _this.cleanArray(_this.oldSkills);
                                _this.scales = _this.cleanArray(_this.scales);
                                _this.oldScales = _this.cleanArray(_this.oldScales);
                            })];
                    case 1:
                        //fetching the information regading the selected job
                        _a.sent();
                        //let reqsMap: Map<number, JobSchema[]> = new Map<number, JobSchema[]>();
                        //setting values in UI
                        for (i = 0; i < this.jobs.length; i++) {
                            if (this.jobs[i].id == pivot) {
                                this.jobname = this.jobs[i].jobname;
                                this.description = this.jobs[i].description;
                                this.type = this.jobs[i].type;
                                this.salary = this.jobs[i].salary;
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    //to remoev null and blanks from the arrays
    EditJobComponent.prototype.cleanArray = function (actual) {
        var newArray = new Array();
        for (var i = 0; i < actual.length; i++) {
            if (actual[i]) {
                newArray.push(actual[i]);
            }
        }
        return newArray;
    };
    //handler for the BACK button
    EditJobComponent.prototype.back = function () {
        this.router.navigate(['/compDashboard']);
    };
    //handler for the CLOSE button
    EditJobComponent.prototype.close = function () {
        this.hasData = false;
        this.isEmpty = false;
    };
    //Listerner for the degrees key press events
    EditJobComponent.prototype.degreeKeyFunction = function (event) {
        if (event.keyCode == 13) {
            this.hasDegrees = true;
            this.degrees.push(this.degree);
        }
    };
    EditJobComponent.prototype.closeDegree = function () {
        this.hasDegrees = false;
        this.degrees = [];
    };
    //pushes the selected skill into the array
    EditJobComponent.prototype.skillKeyFunction = function (event) {
        if (event.keyCode == 13) {
            this.hasSkills = true;
            if (this.skills.indexOf(this.skill) !== -1) {
                var index = this.skills.indexOf(this.skill);
                this.scales[index] = this.scale;
                this.skillSet[index] = this.skill + " " + this.scale;
            }
            else {
                this.skills.push(this.skill);
                this.scales.push(this.scale);
                this.skillSet.push(this.skill + " " + this.scale);
            }
        }
    };
    //closes the SKILLs box
    EditJobComponent.prototype.closeSkill = function () {
        this.hasSkills = false;
        this.skills = [];
        this.scales = [];
        this.skillSet = [];
    };
    //Listeners for the scale radio
    EditJobComponent.prototype.radioSkill = function (event) {
        this.scale = event.target.value;
    };
    //listeners for the Job type radios
    EditJobComponent.prototype.radioType = function (event) {
        this.type = event.target.value;
    };
    //closes the warning bar
    EditJobComponent.prototype.warnClose = function () {
        this.isEmpty = false;
        this.router.navigate(['/compDashboard']);
    };
    //handler for the LOGOUT button
    EditJobComponent.prototype.logout = function () {
        this.sessionKey = "";
        this.auth.setCookie(this.sessionKey);
        sessionStorage.setItem('uname', "");
        this.router.navigate(['/']);
    };
    return EditJobComponent;
}());
EditJobComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-edit-job',
        template: __webpack_require__("../../../../../src/app/company/edit-job/edit-job.component.html"),
        styles: [__webpack_require__("../../../../../src/app/company/edit-job/edit-job.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__edit_job_service__["a" /* EditJobService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__edit_job_service__["a" /* EditJobService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__edit_job_service__["a" /* EditJobService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__authenticate_component__["a" /* AuthenticateComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__authenticate_component__["a" /* AuthenticateComponent */]) === "function" && _c || Object])
], EditJobComponent);

var _a, _b, _c;
//# sourceMappingURL=edit-job.component.js.map

/***/ }),

/***/ "../../../../../src/app/company/edit-job/edit-job.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditJobService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var EditJobService = (function () {
    function EditJobService(httpClient) {
        this.httpClient = httpClient;
    }
    //get All Jobs List
    EditJobService.prototype.getAllJobs = function () {
        var url = 'http://localhost:9090/api/company/jobs';
        return this.httpClient.get(url).toPromise().catch(function (e) {
            console.log(e);
        });
    };
    //get All Jobs List for this comapny
    EditJobService.prototype.getAllJobsByCompany = function (company) {
        var url = 'http://localhost:9090/api/company/jobsByCompany/' + company;
        return this.httpClient.get(url).toPromise().catch(function (e) {
            console.log(e);
        });
    };
    //get All Requirements List by JobId
    EditJobService.prototype.getAllReqsById = function (id) {
        var url = 'http://localhost:9090/api/company/reqId/' + id;
        return this.httpClient.get(url).toPromise().catch(function (e) {
            console.log(e);
        });
    };
    //edit Job
    EditJobService.prototype.editJob = function (job) {
        var url = 'http://localhost:9090/api/company/updateJob';
        return this.httpClient.put(url, job).toPromise().catch(function (err) {
            // Error loggin
            console.error('An error occurred:', err.error);
        });
    };
    //edit Job Requirement
    EditJobService.prototype.editJobReq = function (req) {
        var url = 'http://localhost:9090/api/company/updateJobReq';
        return this.httpClient.put(url, req).toPromise().catch(function (err) {
            // Error logging
            console.error('An error occurred:', err.error);
        });
    };
    //add Requirements
    EditJobService.prototype.addReq = function (req) {
        var url = 'http://localhost:9090/api/company/addreq';
        return this.httpClient.post(url, req).toPromise().catch(function (err) {
            // error loggin
            console.error('An error occurred:', err.error);
        });
    };
    //delete Requirements
    EditJobService.prototype.delReq = function (id) {
        var url = 'http://localhost:9090/api/company/delReq/' + id;
        return this.httpClient.delete(url).toPromise().catch(function (err) {
            // Error logging
            console.error('An error occurred:', err.error);
        });
    };
    return EditJobService;
}());
EditJobService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], EditJobService);

var _a;
//# sourceMappingURL=edit-job.service.js.map

/***/ }),

/***/ "../../../../../src/app/company/list-jobs/list-jobs.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host .form-check-label{\n    padding-right: 120px;\n}\n\n:host .container-list{\n    position: absolute;\n    padding-left: 25%; \n}\n\n:host .container-content{\n    padding-top: 200px; \n}\n\n.card-body-out{\n    height: 190px;\n    padding: 10px;\n    overflow: auto;\n}\n\n.card-body{\n    height: 150px;\n}\n\ndiv.container-title {\n    position: relative;\n}\n\ndiv h1 {\n    text-align: left;\n    padding-left: 150px; \n}\n\ndiv button {\n    position: absolute;\n    right: 10px;\n    top: 5px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/company/list-jobs/list-jobs.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-title\">\n  <h1>View All Potential Applicants\n    <button type=\"button\" (click)=\"logout()\" class=\"btn btn-warning\" value=\"LOGOUT\">LOGOUT</button>\n  </h1>\n</div>\n<div class=\"container\">\n\n\n  <div class=\"container-list\">\n\n    <div class=\"form-group\" *ngIf=\"isDataAvailable\">\n\n      <label class=\"col-form-label\">Select the Posted JOB from the List of all Posted JOBS</label>\n      <select class=\"form-control\" name=\"selectedJob\" [(ngModel)]=\"jobs\" required (change)=\"valueChange()\">\n        <option *ngFor=\"let selectedJob of dispJobs\" [ngValue]=\"selectedJob\"> {{selectedJob.jobname}} </option>\n      </select>\n    </div>\n    <input type=\"button\" (click)=\"back()\" class=\"btn btn-outline-warning\" value=\"Back To Dashboard\">\n\n  </div>\n  <div class=\"container-content\">\n    <div class=\"card border-secondary mb-3\" *ngIf=\"hasApplicants\">\n      <div class=\"card-header\">Eligible Applicants.</div>\n      <small id=\"smallText\" class=\"form-text text-muted\"> Applicants are sorting in decreasing order of their aggregated Scales of skills.</small>\n      <div class=\"card-body-out\" *ngFor=\"let entry of appls\">\n        <!-- <h4 class=\"card-title\">Secondary card title</h4>\n          <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->\n        <div class=\"card bg-light mb-3\">\n          <div class=\"card-body\">\n            <h4 class=\"card-title\">{{entry.fullname}}</h4>\n            <p class=\"card-text\">Email: &nbsp;&nbsp;{{entry.email}} &nbsp;&nbsp; &nbsp;&nbsp;Contact: &nbsp;&nbsp;{{entry.contact}}</p>\n            <span class=\"card-text\">Expected Salary: &nbsp;&nbsp;{{entry.salary}}</span>\n            <p class=\"card-text\"></p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n\n  <div class=\"alert alert-dismissible alert-danger\" *ngIf=\"isEmpty\">\n    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" (click)=\"warnClose()\">&times;</button>\n    <a href=\"/compDashboard\" class=\"alert-link\">{{message}}</a>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/company/list-jobs/list-jobs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListJobsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authenticate_component__ = __webpack_require__("../../../../../src/app/authenticate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_jobs_service__ = __webpack_require__("../../../../../src/app/company/list-jobs/list-jobs.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var ListJobsComponent = (function () {
    function ListJobsComponent(listJobService, router, auth) {
        this.listJobService = listJobService;
        this.router = router;
        this.auth = auth;
        this.sessionKey = "";
        this.companyname = "";
        this.isDataAvailable = false;
        this.jobs = {
            companyname: null,
            jobname: null,
            description: null,
            salary: 0,
            type: null,
        };
        this.reqs = {
            id: 0,
            jobid: 0,
            qualification: null,
            posses: false,
            skill: null,
            scale: 0
        };
        this.appl = {
            fullname: null,
            email: null,
            contact: null,
            salary: null,
            jobid: 0
        };
        this.hasApplicants = false;
        this.isEmpty = false;
        this.message = "";
    }
    ListJobsComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        //to check if current user is the active user
                        if (this.auth.isActiveUser('sessionID')) {
                            //continue using the session
                            console.log("Hi " + sessionStorage.getItem('uname'));
                            this.companyname = sessionStorage.getItem('cname');
                        }
                        else {
                            //redirect to login screen
                            this.router.navigate(['./']);
                        }
                        //getting all jobs from Server
                        return [4 /*yield*/, this.listJobService.getAllJobsByCompany(this.companyname).then(function (result) {
                                _this.jobs = result;
                                _this.dispJobs = result;
                                _this.isDataAvailable = true;
                            })];
                    case 1:
                        //getting all jobs from Server
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //listener for the dropdown menu
    ListJobsComponent.prototype.valueChange = function () {
        var _this = this;
        this.appl = {
            fullname: null,
            email: null,
            contact: null,
            salary: null,
            jobid: 0
        };
        this.appls = [];
        var jobid = this.jobs.id;
        //Get all the selected applicants and display them.
        this.listJobService.getSelApplsByJobId(jobid).then(function (data) {
            _this.appl = data;
            _this.appls = data;
            if (!(data === undefined) || !(data === null)) {
                _this.hasApplicants = true;
            }
        }).catch(function (e) {
            console.log(e);
            _this.isEmpty = true;
            _this.hasApplicants = false;
            _this.message = "Retrival of Applicants Failed. Try Again.";
        });
    };
    //handler for the BACK button
    ListJobsComponent.prototype.back = function () {
        this.router.navigate(['/compDashboard']);
    };
    //Handler for closing the warning bar
    ListJobsComponent.prototype.warnClose = function () {
        this.isEmpty = false;
        this.router.navigate(['/compDashboard']);
    };
    //handler for LOGOUT button
    ListJobsComponent.prototype.logout = function () {
        this.sessionKey = "";
        this.auth.setCookie(this.sessionKey);
        sessionStorage.setItem('uname', "");
        this.router.navigate(['/']);
    };
    return ListJobsComponent;
}());
ListJobsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-list-jobs',
        template: __webpack_require__("../../../../../src/app/company/list-jobs/list-jobs.component.html"),
        styles: [__webpack_require__("../../../../../src/app/company/list-jobs/list-jobs.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_3__list_jobs_service__["a" /* ListJobsService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__list_jobs_service__["a" /* ListJobsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__list_jobs_service__["a" /* ListJobsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__authenticate_component__["a" /* AuthenticateComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__authenticate_component__["a" /* AuthenticateComponent */]) === "function" && _c || Object])
], ListJobsComponent);

var _a, _b, _c;
//# sourceMappingURL=list-jobs.component.js.map

/***/ }),

/***/ "../../../../../src/app/company/list-jobs/list-jobs.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListJobsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ListJobsService = (function () {
    function ListJobsService(httpClient) {
        this.httpClient = httpClient;
    }
    //get All Jobs List for this comapny
    ListJobsService.prototype.getAllJobsByCompany = function (company) {
        var url = 'http://localhost:9090/api/company/jobsByCompany/' + company;
        return this.httpClient.get(url).toPromise().catch(function (e) {
            console.log(e);
        });
    };
    //get All selected Applicants for this job
    ListJobsService.prototype.getSelApplsByJobId = function (jobid) {
        var url = 'http://localhost:9090/api/selAppl/' + jobid;
        return this.httpClient.get(url).toPromise();
    };
    return ListJobsService;
}());
ListJobsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], ListJobsService);

var _a;
//# sourceMappingURL=list-jobs.service.js.map

/***/ }),

/***/ "../../../../../src/app/company/post-job/post-job.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host .form-check-label{\n    padding-right: 120px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/company/post-job/post-job.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Post New Job</h1>\n</div>\n<div class=\"container\">\n  <form>\n\n    <div class=\"form-group\">\n      <div class=\"form-group\">\n        <label class=\"col-form-label\">Job Role</label>\n        <input id=\"jobname\" name=\"jobname\" class=\"form-control\" required minlength=\"2\" [(ngModel)]=\"jobname\" placeholder=\"Job Role\"\n          #jname=\"ngModel\">\n        <small id=\"jobHelp\" class=\"form-text text-muted\">Role of the job.</small>\n        <!-- FIELD VALIDATOR -->\n        <div *ngIf=\"jname.invalid && (jname.dirty || jname.touched)\" class=\"alert alert-danger\">\n\n          <div *ngIf=\"jname.errors.required\">\n            Job Role is required.\n          </div>\n          <div *ngIf=\"jname.errors.minlength\">\n            Job Role must be at least 2 characters long.\n          </div>\n\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label class=\"col-form-label\">Job Description</label>\n        <textarea id=\"description\" rows=\"2\" name=\"description\" class=\"form-control\" required minlength=\"4\" placeholder=\"Job Description\"\n          [(ngModel)]=\"description\" #dname=\"ngModel\"></textarea>\n        <small id=\"descHelp\" class=\"form-text text-muted\">A Brief description regarding the job.</small>\n        <!-- FIELD VALIDATOR -->\n        <div *ngIf=\"dname.invalid && (dname.dirty || dname.touched)\" class=\"alert alert-danger\">\n\n          <div *ngIf=\"dname.errors.required\">\n            Job Description is required.\n          </div>\n          <div *ngIf=\"dname.errors.minlength\">\n            Job Description must be at least 4 characters long.\n          </div>\n\n        </div>\n\n      </div>\n\n      <div class=\"form-group\">\n        <div class=\"form-group\">\n          <label class=\"col-form-label\">Job Type</label>\n          <div class=\"form-check\" (click)=\"radioType($event)\">\n            <label class=\"form-check-label\">\n              <input type=\"radio\" class=\"form-check-input\" name=\"optionsRadis\" id=\"optionsRadis1\" value=\"full-time\" checked=\"\"> Full Time\n            </label>\n            <label class=\"form-check-label\">\n              <input type=\"radio\" class=\"form-check-input\" name=\"optionsRadis\" id=\"optionsRadis2\" value=\"part-time\"> Part Time\n            </label>\n            <label class=\"form-check-label\">\n              <input type=\"radio\" class=\"form-check-input\" name=\"optionsRadis\" id=\"optionsRadis2\" value=\"contract\"> Contract\n            </label>\n\n          </div>\n\n        </div>\n\n      </div>\n\n      <div class=\"form-group\">\n        <div class=\"form-group\">\n          <label class=\"col-form-label\">Required Academic Degree/s</label>\n          <input type=\"text\" id=\"degree\" name=\"degree\" class=\"form-control\" [(ngModel)]=\"degree\" placeholder=\"Academic Degrees\" #degname=\"ngModel\"\n            (keydown)=\"degreeKeyFunction($event)\" required>\n          <small id=\"degreeHelp\" class=\"form-text text-muted\">Type the name of Required Academic Degree. Press Enter to push into the 'Academic Qualifications' section.</small>\n          <!-- FIELD VALIDATOR -->\n          <div *ngIf=\"degname.invalid && (degname.dirty || degname.touched)\" class=\"alert alert-danger\">\n\n            <div *ngIf=\"degname.errors.required\">\n              Academic Qualification is required.\n            </div>\n\n          </div>\n        </div>\n        <div *ngIf=\"hasDegrees\" style=\"width: 90%; padding-left: 70px;\">\n          <label class=\"form-check-label\">Academic Qualifications</label>\n          <button type=\"button\" class=\"close\" data-dismiss=\"alert\" (click)=\"closeDegree()\">&times;</button>\n          <select multiple=\"\" class=\"form-control\">\n            <option *ngFor=\"let d of degrees\">{{d}}</option>\n          </select>\n        </div>\n\n      </div>\n\n      <div class=\"form-group\">\n        <div class=\"form-group\">\n          <label class=\"col-form-label\">Required Skill/s [5 - Expert .... 1 - Novice]</label>\n          <div class=\"form-check\" (click)=\"radioSkill($event)\">\n            <label class=\"form-check-label\">Scale of Each Skill</label>\n            <label class=\"form-check-label\">\n              <input type=\"radio\" class=\"form-check-input\" name=\"optionsRadios\" id=\"optionsRadios1\" value=\"1\" checked=\"\"> 1\n            </label>\n            <label class=\"form-check-label\">\n              <input type=\"radio\" class=\"form-check-input\" name=\"optionsRadios\" id=\"optionsRadios2\" value=\"2\"> 2\n            </label>\n            <label class=\"form-check-label\">\n              <input type=\"radio\" class=\"form-check-input\" name=\"optionsRadios\" id=\"optionsRadios2\" value=\"3\"> 3\n            </label>\n            <label class=\"form-check-label\">\n              <input type=\"radio\" class=\"form-check-input\" name=\"optionsRadios\" id=\"optionsRadios2\" value=\"4\"> 4\n            </label>\n            <label class=\"form-check-label\">\n              <input type=\"radio\" class=\"form-check-input\" name=\"optionsRadios\" id=\"optionsRadios2\" value=\"5\"> 5\n            </label>\n            <br>\n\n          </div>\n          <label class=\"form-check-label\">&nbsp;&nbsp;&nbsp;&nbsp;Skill</label>\n\n          <input type=\"text\" id=\"skill\" name=\"skill\" class=\"form-control\" [(ngModel)]=\"skill\" placeholder=\"Skill/s\" #skname=\"ngModel\"\n            (keydown)=\"skillKeyFunction($event)\" required>\n          <small id=\"skillHelp\" class=\"form-text text-muted\">Type the required Skill and select the desired Scale. Press Enter to push into the 'SKILLS' section.</small>\n          <!-- FIELD VALIDATOR -->\n          <div *ngIf=\"skname.invalid && (skname.dirty || skname.touched)\" class=\"alert alert-danger\">\n\n            <div *ngIf=\"skname.errors.required\">\n              Atleast One Skill Set is required.\n            </div>\n\n          </div>\n\n        </div>\n\n        <div *ngIf=\"hasSkills\" style=\"width: 90%; padding-left: 70px;\">\n          <label class=\"form-check-label\">SKILLS</label>\n          <button type=\"button\" class=\"close\" data-dismiss=\"alert\" (click)=\"closeSkill()\">&times;</button>\n          <select multiple=\"\" class=\"form-control\">\n            <option *ngFor=\"let s of skillSet\">{{s}}</option>\n          </select>\n        </div>\n\n      </div>\n      <small *ngIf=\"hasSkills\" style=\"width: 90%; padding-left: 70px;\" id=\"skillBoxHelp\" class=\"form-text text-muted\">Select Skill from here if you wish to edit the scale value.</small>\n\n\n\n      <div class=\"form-group\">\n        <label class=\"control-label\">Salary</label>\n        <div class=\"form-group\">\n          <div class=\"input-group mb-3\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\">CAD$</span>\n            </div>\n            <input type=\"text\" class=\"form-control\" aria-label=\"Amount (to the nearest CAD)\" id=\"salary\" name=\"salary\" required minlength=\"1\"\n              appForbiddenName=\"0\" placeholder=\"Salary\" [(ngModel)]=\"salary\" #sname=\"ngModel\" pattern=\"[0-9]*\">\n            <div class=\"input-group-append\">\n              <span class=\"input-group-text\">.00</span>\n            </div>\n          </div>\n        </div>\n        <small id=\"salaryHelp\" class=\"form-text text-muted\">Salary can be any non decimal value except Zero.</small>\n        <!-- FIELD VALIDATOR -->\n        <div *ngIf=\"sname.invalid && (sname.dirty || sname.touched)\" class=\"alert alert-danger\">\n\n          <div *ngIf=\"sname.errors.required\">\n            Salary is required.\n          </div>\n          <div *ngIf=\"sname.errors.minlength\">\n            Salary must be at least Single Digit.\n          </div>\n          <div *ngIf=\"sname.errors.forbiddenName\">\n            Salary cannot be Zero. Salary must be greater than Zero.\n          </div>\n          <div *ngIf=\"sname.errors.pattern\">\n            Salary must be only digits. Cannot be Zero or Decimal Values either.\n          </div>\n\n        </div>\n      </div>\n\n\n      <button type=\"button\" (click)=\"logout()\" class=\"btn btn-warning\" value=\"LOGOUT\">LOGOUT</button>\n      <input type=\"button\" (click)=\"back()\" class=\"btn btn-outline-warning\" value=\"Back To Dashboard\">\n      <input type=\"button\" (click)=\"addJob()\" class=\"btn btn-success\" value=\"Add Job\">\n\n    </div>\n  </form>\n</div>\n\n<div class=\"alert alert-dismissible alert-danger\" *ngIf=\"isEmpty\">\n  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" (click)=\"warnClose()\">&times;</button>\n  <a href=\"/compDashboard\" class=\"alert-link\">{{message}}</a>\n</div>"

/***/ }),

/***/ "../../../../../src/app/company/post-job/post-job.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostJobComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authenticate_component__ = __webpack_require__("../../../../../src/app/authenticate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__post_job_service__ = __webpack_require__("../../../../../src/app/company/post-job/post-job.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var PostJobComponent = (function () {
    function PostJobComponent(postJobService, router, auth) {
        this.postJobService = postJobService;
        this.router = router;
        this.auth = auth;
        this.sessionKey = "";
        this.companyname = "";
        this.jobname = "";
        this.description = "";
        this.degree = "";
        this.hasDegrees = false;
        this.degrees = [];
        this.skill = "";
        this.hasSkills = false;
        this.skills = [];
        this.scale = 1;
        this.scales = [];
        this.skillSet = [];
        this.type = "full-time";
        this.job = {
            companyname: null,
            jobname: null,
            description: null,
            salary: 0,
            type: null,
        };
        this.req = {
            jobid: 0,
            qualification: null,
            posses: false,
            skill: null,
            scale: 0
        };
        this.message = "";
        this.isEmpty = false;
        this.count = 0;
        this.isValid = false;
        //to check if current user is the active user
        if (auth.isActiveUser('sessionID')) {
            //continue using the session
            console.log("Hi " + sessionStorage.getItem('uname'));
            this.companyname = sessionStorage.getItem('cname');
        }
        else {
            //redirect to login screen
            router.navigate(['./']);
        }
    }
    PostJobComponent.prototype.ngOnInit = function () {
        this.isEmpty = false;
    };
    //validate and add the job
    PostJobComponent.prototype.addJob = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (((this.jobname && this.description && this.salary && this.degree && this.skill && this.scale) === undefined)
                            || ((this.jobname && this.description && this.salary && this.degree && this.skill && this.scale) === null)
                            || ((this.jobname && this.description && this.salary && this.degree && this.skill) === '')) {
                            this.isValid = false;
                        }
                        else {
                            this.isValid = true;
                        }
                        if (!this.isValid) return [3 /*break*/, 2];
                        this.job.companyname = this.companyname;
                        this.job.jobname = this.jobname;
                        this.job.description = this.description;
                        this.job.salary = this.salary;
                        this.job.type = this.type;
                        this.count = 0;
                        return [4 /*yield*/, this.postJobService.addJob(this.job).then(function (resp) { return __awaiter(_this, void 0, void 0, function () {
                                var _this = this;
                                var _i, _a, deg, i;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            this.jobid = resp.response;
                                            if (!(resp === undefined)) return [3 /*break*/, 1];
                                            this.isEmpty = true;
                                            this.message = "Error Occured. Click here to return to Dashboard and Try Again.";
                                            return [3 /*break*/, 10];
                                        case 1:
                                            if (!(resp.response === 'Job Already Exists.')) return [3 /*break*/, 2];
                                            this.isEmpty = true;
                                            this.message = "Job Already Exists. Click here to return to Dashboard.";
                                            return [3 /*break*/, 10];
                                        case 2:
                                            _i = 0, _a = this.degrees;
                                            _b.label = 3;
                                        case 3:
                                            if (!(_i < _a.length)) return [3 /*break*/, 6];
                                            deg = _a[_i];
                                            this.req.jobid = this.jobid;
                                            this.req.qualification = deg;
                                            return [4 /*yield*/, this.postJobService.addReq(this.req).then(function (result) {
                                                    console.log("Response for Degrees upload: " + JSON.stringify(result));
                                                    if (!(result === undefined)) {
                                                        if ((result.response === "Requirement Added Successfully")) {
                                                            _this.count++;
                                                        }
                                                        else {
                                                            console.log("Error Response: " + result.response);
                                                        }
                                                    }
                                                    else {
                                                        _this.isEmpty = true;
                                                        _this.message = "Error Occured. Click here to return to Dashboard and Try Again.";
                                                    }
                                                }).catch(function (err) {
                                                    // simple logging, but you can do a lot more, see below
                                                    console.error('An error occurred:', err.error);
                                                    _this.isEmpty = true;
                                                    _this.message = "Error Occured While adding Qualifications. Click here to return to Dashboard and Edit this Job.";
                                                    return;
                                                })];
                                        case 4:
                                            _b.sent();
                                            this.req = {};
                                            _b.label = 5;
                                        case 5:
                                            _i++;
                                            return [3 /*break*/, 3];
                                        case 6:
                                            i = 0;
                                            _b.label = 7;
                                        case 7:
                                            if (!(i < this.skills.length)) return [3 /*break*/, 10];
                                            this.req.jobid = this.jobid;
                                            this.req.skill = this.skills[i];
                                            this.req.scale = this.scales[i];
                                            return [4 /*yield*/, this.postJobService.addReq(this.req).then(function (result) {
                                                    console.log("Response for Skills Upload: " + JSON.stringify(result));
                                                    if (!(result === undefined) && (result.response === "Requirement Added Successfully")) {
                                                        _this.count++;
                                                    }
                                                    else {
                                                        console.log("Error Response: " + result.response);
                                                    }
                                                }).catch(function (err) {
                                                    // Error logging
                                                    console.error('An error occurred:', err.error);
                                                    _this.isEmpty = true;
                                                    _this.message = "Error Occured while adding Skills. Click here to return to Dashboard and Edit this Job.";
                                                    return;
                                                })];
                                        case 8:
                                            _b.sent();
                                            this.req = {};
                                            _b.label = 9;
                                        case 9:
                                            i++;
                                            return [3 /*break*/, 7];
                                        case 10:
                                            if (!(resp === undefined) && (this.count === (this.skills.length + this.degrees.length))) {
                                                this.isEmpty = true;
                                                this.message = " Job Created Succesfully. Click here to return to DashBoard";
                                            }
                                            else {
                                                this.isEmpty = true;
                                                this.message = "Job Creation Failed. Please Re-Enter details and try submitting again";
                                            }
                                            return [2 /*return*/];
                                    }
                                });
                            }); }).catch(function (err) {
                                // simple logging, but you can do a lot more, see below
                                console.error('An error occurred:', err.error);
                                _this.isEmpty = true;
                                _this.message = "Error Occured while creating Job. Click here to return to Dashboard and Post this Job Again.";
                                return;
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        this.isEmpty = true;
                        this.message = " Please Fill all the Fields and Press Enroll Button Again";
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    //Handler for BACK button
    PostJobComponent.prototype.back = function () {
        this.router.navigate(['/compDashboard']);
    };
    //on Return key press push degrees into the ACADEMIC QUALIFICATIONS box
    PostJobComponent.prototype.degreeKeyFunction = function (event) {
        if (event.keyCode == 13) {
            this.hasDegrees = true;
            this.degrees.push(this.degree);
        }
    };
    PostJobComponent.prototype.closeDegree = function () {
        this.hasDegrees = false;
        this.degrees = [];
    };
    //on Return key press push skills into the SKILLS box
    PostJobComponent.prototype.skillKeyFunction = function (event) {
        if (event.keyCode == 13) {
            this.hasSkills = true;
            if (this.skills.indexOf(this.skill) !== -1) {
                var index = this.skills.indexOf(this.skill);
                this.scales[index] = this.scale;
                this.skillSet[index] = this.skill + " " + this.scale;
            }
            else {
                this.skills.push(this.skill);
                this.scales.push(this.scale);
                this.skillSet.push(this.skill + " " + this.scale);
            }
        }
    };
    //Handler for closing the SKILL box
    PostJobComponent.prototype.closeSkill = function () {
        this.hasSkills = false;
        this.skills = [];
        this.scales = [];
        this.skillSet = [];
    };
    //listener for scale radios
    PostJobComponent.prototype.radioSkill = function (event) {
        this.scale = event.target.value;
    };
    //Listerner for Job type radios
    PostJobComponent.prototype.radioType = function (event) {
        this.type = event.target.value;
    };
    //handler for warning bar
    PostJobComponent.prototype.warnClose = function () {
        this.isEmpty = false;
        this.router.navigate(['/compDashboard']);
    };
    //handler for LOGOUT button
    PostJobComponent.prototype.logout = function () {
        this.sessionKey = "";
        this.auth.setCookie(this.sessionKey);
        sessionStorage.setItem('uname', "");
        this.router.navigate(['/']);
    };
    return PostJobComponent;
}());
PostJobComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-post-job',
        template: __webpack_require__("../../../../../src/app/company/post-job/post-job.component.html"),
        styles: [__webpack_require__("../../../../../src/app/company/post-job/post-job.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_3__post_job_service__["a" /* PostJobService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__post_job_service__["a" /* PostJobService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__post_job_service__["a" /* PostJobService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__authenticate_component__["a" /* AuthenticateComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__authenticate_component__["a" /* AuthenticateComponent */]) === "function" && _c || Object])
], PostJobComponent);

var _a, _b, _c;
//# sourceMappingURL=post-job.component.js.map

/***/ }),

/***/ "../../../../../src/app/company/post-job/post-job.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostJobService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var PostJobService = (function () {
    function PostJobService(httpClient) {
        this.httpClient = httpClient;
    }
    //add Job
    PostJobService.prototype.addJob = function (job) {
        var url = 'http://localhost:9090/api/company/addjob';
        return this.httpClient.post(url, job).toPromise();
    };
    ;
    //add Requirements
    PostJobService.prototype.addReq = function (req) {
        var url = 'http://localhost:9090/api/company/addreq';
        return this.httpClient.post(url, req).toPromise();
    };
    ;
    return PostJobService;
}());
PostJobService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], PostJobService);

var _a;
//# sourceMappingURL=post-job.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map