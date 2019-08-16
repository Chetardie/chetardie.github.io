(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/home/home.component */ "./src/app/core/home/home.component.ts");
/* harmony import */ var _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/auth-guard.service */ "./src/app/auth/auth-guard.service.ts");
/* harmony import */ var _quotes_quotes_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./quotes/quotes-list.component */ "./src/app/quotes/quotes-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var appRoutes = [
    { path: '', component: _core_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], pathMatch: 'full', canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]] },
    { path: 'quotes', component: _quotes_quotes_list_component__WEBPACK_IMPORTED_MODULE_4__["QuotesListComponent"], canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"] })
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container>\r\n  <mat-sidenav #sidenav role=\"navigation\">\r\n    <gook-side-nav (closeSidenav)=\"sidenav.close()\"></gook-side-nav>\r\n  </mat-sidenav>\r\n  <mat-sidenav-content>\r\n    <gook-header (sidenavToggle)=\"sidenav.toggle()\"></gook-header>\r\n    <main>\r\n      <router-outlet></router-outlet>\r\n    </main>\r\n  </mat-sidenav-content>\r\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-sidenav-container, mat-sidenav-content, mat-sidenav {\n  height: 100%; }\n\nmat-sidenav {\n  width: 250px; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
        firebase__WEBPACK_IMPORTED_MODULE_1__["initializeApp"](_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].firebaseConfig);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'gook-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/router-store */ "./node_modules/@ngrx/router-store/fesm5/router-store.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth/auth.module */ "./src/app/auth/auth.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _books_books_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./books/books.module */ "./src/app/books/books.module.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _core_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./core/side-nav/side-nav.component */ "./src/app/core/side-nav/side-nav.component.ts");
/* harmony import */ var _store_app_reducers__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./store/app.reducers */ "./src/app/store/app.reducers.ts");
/* harmony import */ var _auth_store_auth_effects__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./auth/store/auth.effects */ "./src/app/auth/store/auth.effects.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _quotes_quotes_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./quotes/quotes.module */ "./src/app/quotes/quotes.module.ts");
/* harmony import */ var _books_store_book_list_effects__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./books/store/book-list.effects */ "./src/app/books/store/book-list.effects.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _core_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_16__["SideNavComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_14__["MaterialModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_15__["FlexLayoutModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"],
                _auth_auth_module__WEBPACK_IMPORTED_MODULE_11__["AuthModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_9__["CoreModule"],
                _books_books_module__WEBPACK_IMPORTED_MODULE_13__["BooksModule"],
                _quotes_quotes_module__WEBPACK_IMPORTED_MODULE_20__["QuotesModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forRoot(_store_app_reducers__WEBPACK_IMPORTED_MODULE_17__["reducers"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["EffectsModule"].forRoot([_auth_store_auth_effects__WEBPACK_IMPORTED_MODULE_18__["AuthEffects"], _books_store_book_list_effects__WEBPACK_IMPORTED_MODULE_21__["BookListEffects"]]),
                _ngrx_router_store__WEBPACK_IMPORTED_MODULE_6__["StoreRouterConnectingModule"],
                !_environments_environment__WEBPACK_IMPORTED_MODULE_19__["environment"].production ? _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_7__["StoreDevtoolsModule"].instrument() : []
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth-form/auth-form.component.html":
/*!*********************************************************!*\
  !*** ./src/app/auth/auth-form/auth-form.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form\r\n    fxLayout=\"column\"\r\n    fxLayoutAlign=\"center center\"\r\n    fxLayoutGap=\"10px\"\r\n    [formGroup]=\"authForm\"\r\n    (ngSubmit)=\"onSubmit()\">\r\n    <ng-content select='h2'></ng-content>\r\n    <mat-form-field>\r\n      <input\r\n        type=\"email\"\r\n        matInput\r\n        placeholder=\"Your email\"\r\n        formControlName=\"email\">\r\n      <mat-hint *ngIf=\"authForm.controls['email'].errors\">Please enter a valid email.</mat-hint>\r\n      <mat-error>Invalid or missing email.</mat-error>\r\n      <mat-hint *ngIf=\"!authForm.controls['email'].errors\" style=\"color: green;\">Looks great</mat-hint>\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <input\r\n        type=\"password\"\r\n        matInput\r\n        placeholder=\"Your password\"\r\n        formControlName=\"password\">\r\n      <mat-hint *ngIf=\"authForm.controls['email'].errors\">Please enter your password</mat-hint>\r\n      <mat-error>Invalid or missing password.</mat-error>\r\n      <mat-hint *ngIf=\"!authForm.controls['password'].errors\" style=\"color: green;\">Looks great</mat-hint>\r\n    </mat-form-field>\r\n    <ng-content select='button'></ng-content>\r\n    <!-- <mat-spinner *ngIf=\"isLoading\"></mat-spinner> -->\r\n  </form>"

/***/ }),

/***/ "./src/app/auth/auth-form/auth-form.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/auth/auth-form/auth-form.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\n  width: 300px; }\n\n@media (max-width: 599px) {\n  mat-form-field {\n    width: 250px; } }\n"

/***/ }),

/***/ "./src/app/auth/auth-form/auth-form.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/auth/auth-form/auth-form.component.ts ***!
  \*******************************************************/
/*! exports provided: AuthFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthFormComponent", function() { return AuthFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthFormComponent = /** @class */ (function () {
    function AuthFormComponent() {
        this.submitted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    AuthFormComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    AuthFormComponent.prototype.onSubmit = function () {
        this.submitted.emit(this.authForm);
    };
    AuthFormComponent.prototype.initForm = function () {
        this.authForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)])
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AuthFormComponent.prototype, "submitted", void 0);
    AuthFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'gook-auth-form',
            styles: [__webpack_require__(/*! ./auth-form.component.scss */ "./src/app/auth/auth-form/auth-form.component.scss")],
            template: __webpack_require__(/*! ./auth-form.component.html */ "./src/app/auth/auth-form/auth-form.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], AuthFormComponent);
    return AuthFormComponent;
}());



/***/ }),

/***/ "./src/app/auth/auth-guard.service.ts":
/*!********************************************!*\
  !*** ./src/app/auth/auth-guard.service.ts ***!
  \********************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(store, router) {
        this.store = store;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        var _this = this;
        return this.store.select('auth')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (authState) {
            if (!authState.authenticated) {
                _this.router.navigate(['/login']);
            }
            return authState.authenticated;
        }));
    };
    AuthGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/auth/auth-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register/register.component */ "./src/app/auth/register/register.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var authRoutes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] }
];
var AuthRoutingModule = /** @class */ (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(authRoutes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "./src/app/auth/register/register.component.ts");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/auth/auth-routing.module.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _auth_form_auth_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth-form/auth-form.component */ "./src/app/auth/auth-form/auth-form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"],
                _auth_form_auth_form_component__WEBPACK_IMPORTED_MODULE_8__["AuthFormComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                _auth_routing_module__WEBPACK_IMPORTED_MODULE_5__["AuthRoutingModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"]
            ]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\r\n  <gook-auth-form (submitted)='onLogin($event)'>\r\n    <h2>Login into your account</h2>\r\n     <button type=\"submit\" mat-raised-button color=\"primary\" [disabled]=\"authFormComponent?.authForm.invalid\">Login</button>\r\n  </gook-auth-form> \r\n</section>\r\n"

/***/ }),

/***/ "./src/app/auth/login/login.component.scss":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section {\n  padding-top: 40px; }\n"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_auth_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/auth.actions */ "./src/app/auth/store/auth.actions.ts");
/* harmony import */ var _auth_form_auth_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth-form/auth-form.component */ "./src/app/auth/auth-form/auth-form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(store) {
        this.store = store;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLogin = function (event) {
        var _a = event.value, email = _a.email, password = _a.password;
        this.store.dispatch(new _store_auth_actions__WEBPACK_IMPORTED_MODULE_2__["TrySignin"]({ username: email, password: password }));
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])(_auth_form_auth_form_component__WEBPACK_IMPORTED_MODULE_3__["AuthFormComponent"]),
        __metadata("design:type", _auth_form_auth_form_component__WEBPACK_IMPORTED_MODULE_3__["AuthFormComponent"])
    ], LoginComponent.prototype, "authFormComponent", void 0);
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'gook-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/auth/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/register/register.component.html":
/*!*******************************************************!*\
  !*** ./src/app/auth/register/register.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\r\n\t<gook-auth-form (submitted)='onSignup($event)'>\r\n\t\t<h2>Create an acoount</h2>\r\n\t\t<button  type=\"submit\" mat-raised-button color=\"primary\" [disabled]=\"authFormComponent?.authForm.invalid\">Create account</button>\r\n\t</gook-auth-form>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/auth/register/register.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/auth/register/register.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section {\n  padding-top: 40px; }\n"

/***/ }),

/***/ "./src/app/auth/register/register.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/auth/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_auth_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/auth.actions */ "./src/app/auth/store/auth.actions.ts");
/* harmony import */ var _auth_form_auth_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth-form/auth-form.component */ "./src/app/auth/auth-form/auth-form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(store) {
        this.store = store;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onSignup = function (event) {
        var _a = event.value, email = _a.email, password = _a.password;
        this.store.dispatch(new _store_auth_actions__WEBPACK_IMPORTED_MODULE_2__["TrySignup"]({ username: email, password: password }));
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])(_auth_form_auth_form_component__WEBPACK_IMPORTED_MODULE_3__["AuthFormComponent"]),
        __metadata("design:type", _auth_form_auth_form_component__WEBPACK_IMPORTED_MODULE_3__["AuthFormComponent"])
    ], RegisterComponent.prototype, "authFormComponent", void 0);
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'gook-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/auth/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/auth/register/register.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/auth/store/auth.actions.ts":
/*!********************************************!*\
  !*** ./src/app/auth/store/auth.actions.ts ***!
  \********************************************/
/*! exports provided: TRY_SIGNUP, SIGNUP, TRY_SIGNIN, SIGNIN, LOGOUT, SET_TOKEN, TrySignup, TrySignin, Signup, Signin, Logout, SetToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRY_SIGNUP", function() { return TRY_SIGNUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNUP", function() { return SIGNUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRY_SIGNIN", function() { return TRY_SIGNIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNIN", function() { return SIGNIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT", function() { return LOGOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_TOKEN", function() { return SET_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrySignup", function() { return TrySignup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrySignin", function() { return TrySignin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Signup", function() { return Signup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Signin", function() { return Signin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logout", function() { return Logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetToken", function() { return SetToken; });
var TRY_SIGNUP = 'TRY_SIGNUP';
var SIGNUP = 'SIGNUP';
var TRY_SIGNIN = 'TRY_SIGNIN';
var SIGNIN = 'SIGNIN';
var LOGOUT = 'LOGOUT';
var SET_TOKEN = 'SET_TOKEN';
var TrySignup = /** @class */ (function () {
    function TrySignup(payload) {
        this.payload = payload;
        this.type = TRY_SIGNUP;
    }
    return TrySignup;
}());

var TrySignin = /** @class */ (function () {
    function TrySignin(payload) {
        this.payload = payload;
        this.type = TRY_SIGNIN;
    }
    return TrySignin;
}());

var Signup = /** @class */ (function () {
    function Signup() {
        this.type = SIGNUP;
    }
    return Signup;
}());

var Signin = /** @class */ (function () {
    function Signin() {
        this.type = SIGNIN;
    }
    return Signin;
}());

var Logout = /** @class */ (function () {
    function Logout() {
        this.type = LOGOUT;
    }
    return Logout;
}());

var SetToken = /** @class */ (function () {
    function SetToken(payload) {
        this.payload = payload;
        this.type = SET_TOKEN;
    }
    return SetToken;
}());



/***/ }),

/***/ "./src/app/auth/store/auth.effects.ts":
/*!********************************************!*\
  !*** ./src/app/auth/store/auth.effects.ts ***!
  \********************************************/
/*! exports provided: AuthEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthEffects", function() { return AuthEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _auth_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth.actions */ "./src/app/auth/store/auth.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthEffects = /** @class */ (function () {
    function AuthEffects(actions$, router) {
        var _this = this;
        this.actions$ = actions$;
        this.router = router;
        this.authSignup = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_auth_actions__WEBPACK_IMPORTED_MODULE_6__["TRY_SIGNUP"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (action) {
            return action.payload;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (authData) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(firebase__WEBPACK_IMPORTED_MODULE_5__["auth"]().createUserWithEmailAndPassword(authData.username, authData.password));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(firebase__WEBPACK_IMPORTED_MODULE_5__["auth"]().currentUser.getIdToken());
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (token) {
            return [
                {
                    type: _auth_actions__WEBPACK_IMPORTED_MODULE_6__["SIGNUP"]
                },
                {
                    type: _auth_actions__WEBPACK_IMPORTED_MODULE_6__["SET_TOKEN"],
                    payload: token
                }
            ];
        }));
        this.authSignin = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_auth_actions__WEBPACK_IMPORTED_MODULE_6__["TRY_SIGNIN"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (action) {
            return action.payload;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (authData) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(firebase__WEBPACK_IMPORTED_MODULE_5__["auth"]().signInWithEmailAndPassword(authData.username, authData.password));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(firebase__WEBPACK_IMPORTED_MODULE_5__["auth"]().currentUser.getIdToken());
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (token) {
            _this.router.navigate(['/books']);
            return [
                {
                    type: _auth_actions__WEBPACK_IMPORTED_MODULE_6__["SIGNIN"]
                },
                {
                    type: _auth_actions__WEBPACK_IMPORTED_MODULE_6__["SET_TOKEN"],
                    payload: token
                }
            ];
        }));
        this.authLogout = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_auth_actions__WEBPACK_IMPORTED_MODULE_6__["LOGOUT"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
            _this.router.navigate(['/']);
        }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], AuthEffects.prototype, "authSignup", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], AuthEffects.prototype, "authSignin", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])({ dispatch: false }),
        __metadata("design:type", Object)
    ], AuthEffects.prototype, "authLogout", void 0);
    AuthEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthEffects);
    return AuthEffects;
}());



/***/ }),

/***/ "./src/app/auth/store/auth.reducers.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/store/auth.reducers.ts ***!
  \*********************************************/
/*! exports provided: authReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authReducer", function() { return authReducer; });
/* harmony import */ var _auth_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.actions */ "./src/app/auth/store/auth.actions.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var initialState = {
    token: null,
    authenticated: false
};
function authReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case (_auth_actions__WEBPACK_IMPORTED_MODULE_0__["SIGNUP"]):
        case (_auth_actions__WEBPACK_IMPORTED_MODULE_0__["SIGNIN"]):
            return __assign({}, state, { authenticated: true });
        case (_auth_actions__WEBPACK_IMPORTED_MODULE_0__["LOGOUT"]):
            return __assign({}, state, { token: null, authenticated: false });
        case (_auth_actions__WEBPACK_IMPORTED_MODULE_0__["SET_TOKEN"]):
            return __assign({}, state, { token: action.payload });
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/books/book-routing.module.ts":
/*!**********************************************!*\
  !*** ./src/app/books/book-routing.module.ts ***!
  \**********************************************/
/*! exports provided: BooksRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksRoutingModule", function() { return BooksRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _books_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./books.component */ "./src/app/books/books.component.ts");
/* harmony import */ var _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/auth-guard.service */ "./src/app/auth/auth-guard.service.ts");
/* harmony import */ var _containers_book_edit_book_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./containers/book-edit/book-edit.component */ "./src/app/books/containers/book-edit/book-edit.component.ts");
/* harmony import */ var _containers_book_details_book_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./containers/book-details/book-details.component */ "./src/app/books/containers/book-details/book-details.component.ts");
/* harmony import */ var _containers_book_book_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./containers/book/book.component */ "./src/app/books/containers/book/book.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var booksRoutes = [
    { path: '', redirectTo: '/books', pathMatch: 'full' },
    { path: 'books', component: _books_component__WEBPACK_IMPORTED_MODULE_2__["BooksComponent"], canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]], children: [
            { path: 'new', component: _containers_book_book_component__WEBPACK_IMPORTED_MODULE_6__["BookComponent"] },
            { path: ':id', component: _containers_book_details_book_details_component__WEBPACK_IMPORTED_MODULE_5__["BookDetailsComponent"] },
            { path: ':id/edit', component: _containers_book_edit_book_edit_component__WEBPACK_IMPORTED_MODULE_4__["BookEditComponent"] }
        ] },
];
var BooksRoutingModule = /** @class */ (function () {
    function BooksRoutingModule() {
    }
    BooksRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(booksRoutes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], BooksRoutingModule);
    return BooksRoutingModule;
}());



/***/ }),

/***/ "./src/app/books/books.component.html":
/*!********************************************!*\
  !*** ./src/app/books/books.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutGap=\"30px\" fxLayoutAlign=\"start stretch\">\r\n  <div [fxFlexOrder]=\"1\" fxFlex=\"1 1 50%\">\r\n    <gook-book-list></gook-book-list>\r\n  </div>\r\n  <div [fxFlexOrder]=\"1\" fxFlex=\"1 1 50%\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</section>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/books/books.component.scss":
/*!********************************************!*\
  !*** ./src/app/books/books.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section {\n  width: 100%;\n  height: 100%; }\n"

/***/ }),

/***/ "./src/app/books/books.component.ts":
/*!******************************************!*\
  !*** ./src/app/books/books.component.ts ***!
  \******************************************/
/*! exports provided: BooksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksComponent", function() { return BooksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BooksComponent = /** @class */ (function () {
    function BooksComponent() {
    }
    BooksComponent.prototype.ngOnInit = function () { };
    BooksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'gook-books',
            template: __webpack_require__(/*! ./books.component.html */ "./src/app/books/books.component.html"),
            styles: [__webpack_require__(/*! ./books.component.scss */ "./src/app/books/books.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BooksComponent);
    return BooksComponent;
}());



/***/ }),

/***/ "./src/app/books/books.module.ts":
/*!***************************************!*\
  !*** ./src/app/books/books.module.ts ***!
  \***************************************/
/*! exports provided: BooksModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksModule", function() { return BooksModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _book_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./book-routing.module */ "./src/app/books/book-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _containers_book_list_book_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./containers/book-list/book-list.component */ "./src/app/books/containers/book-list/book-list.component.ts");
/* harmony import */ var _books_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./books.component */ "./src/app/books/books.component.ts");
/* harmony import */ var _containers_book_edit_book_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./containers/book-edit/book-edit.component */ "./src/app/books/containers/book-edit/book-edit.component.ts");
/* harmony import */ var _containers_book_list_book_item_book_item_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./containers/book-list/book-item/book-item.component */ "./src/app/books/containers/book-list/book-item/book-item.component.ts");
/* harmony import */ var _containers_book_details_book_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./containers/book-details/book-details.component */ "./src/app/books/containers/book-details/book-details.component.ts");
/* harmony import */ var _components_book_form_book_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/book-form/book-form.component */ "./src/app/books/components/book-form/book-form.component.ts");
/* harmony import */ var _containers_book_book_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./containers/book/book.component */ "./src/app/books/containers/book/book.component.ts");
/* harmony import */ var _components_book_content_book_content_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/book-content/book-content.component */ "./src/app/books/components/book-content/book-content.component.ts");
/* harmony import */ var _components_book_actions_book_actions_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/book-actions/book-actions.component */ "./src/app/books/components/book-actions/book-actions.component.ts");
/* harmony import */ var _components_book_header_book_header_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/book-header/book-header.component */ "./src/app/books/components/book-header/book-header.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// third-party modules




// components










var BooksModule = /** @class */ (function () {
    function BooksModule() {
    }
    BooksModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _containers_book_list_book_list_component__WEBPACK_IMPORTED_MODULE_7__["BookListComponent"],
                _books_component__WEBPACK_IMPORTED_MODULE_8__["BooksComponent"],
                _containers_book_edit_book_edit_component__WEBPACK_IMPORTED_MODULE_9__["BookEditComponent"],
                _containers_book_list_book_item_book_item_component__WEBPACK_IMPORTED_MODULE_10__["BookItemComponent"],
                _containers_book_details_book_details_component__WEBPACK_IMPORTED_MODULE_11__["BookDetailsComponent"],
                _components_book_header_book_header_component__WEBPACK_IMPORTED_MODULE_16__["BookHeaderComponent"],
                _components_book_content_book_content_component__WEBPACK_IMPORTED_MODULE_14__["BookContentComponent"],
                _components_book_actions_book_actions_component__WEBPACK_IMPORTED_MODULE_15__["BookActionsComponent"],
                _containers_book_book_component__WEBPACK_IMPORTED_MODULE_13__["BookComponent"],
                _components_book_form_book_form_component__WEBPACK_IMPORTED_MODULE_12__["BookFormComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                _book_routing_module__WEBPACK_IMPORTED_MODULE_5__["BooksRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"]
            ],
            providers: []
        })
    ], BooksModule);
    return BooksModule;
}());



/***/ }),

/***/ "./src/app/books/components/book-actions/book-actions.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/books/components/book-actions/book-actions.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card-actions {\n  position: absolute;\n  bottom: 30px;\n  left: 40px; }\n"

/***/ }),

/***/ "./src/app/books/components/book-actions/book-actions.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/books/components/book-actions/book-actions.component.ts ***!
  \*************************************************************************/
/*! exports provided: BookActionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookActionsComponent", function() { return BookActionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BookActionsComponent = /** @class */ (function () {
    function BookActionsComponent() {
        this.edited = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.deleted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    BookActionsComponent.prototype.onEdit = function () {
        this.edited.emit(this.bookIndex);
    };
    BookActionsComponent.prototype.onDelete = function () {
        this.deleted.emit(this.bookIndex);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], BookActionsComponent.prototype, "bookIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], BookActionsComponent.prototype, "edited", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], BookActionsComponent.prototype, "deleted", void 0);
    BookActionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'gook-book-actions',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./book-actions.component.scss */ "./src/app/books/components/book-actions/book-actions.component.scss")],
            template: "\n    <mat-card-actions>\n      <button mat-raised-button color=\"accent\" (click)=\"onEdit()\">Edit book info</button>\n      <button mat-raised-button color=\"warn\" (click)=\"onDelete()\">Delete</button>\n    </mat-card-actions>\n  "
        })
    ], BookActionsComponent);
    return BookActionsComponent;
}());



/***/ }),

/***/ "./src/app/books/components/book-content/book-content.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/books/components/book-content/book-content.component.ts ***!
  \*************************************************************************/
/*! exports provided: BookContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookContentComponent", function() { return BookContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_book_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/book.model */ "./src/app/books/models/book.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BookContentComponent = /** @class */ (function () {
    function BookContentComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_book_model__WEBPACK_IMPORTED_MODULE_1__["Book"])
    ], BookContentComponent.prototype, "book", void 0);
    BookContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'gook-book-content',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            template: "\n    <mat-card-content>\n      <p>\n        {{ book.description }}\n      </p>\n    </mat-card-content>\n    "
        })
    ], BookContentComponent);
    return BookContentComponent;
}());



/***/ }),

/***/ "./src/app/books/components/book-form/book-form.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/books/components/book-form/book-form.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"bookForm\" (ngSubmit)=\"onSubmit()\">\r\n  <mat-form-field>\r\n    <input \r\n      matInput \r\n      placeholder=\"Book title\"\r\n      formControlName=\"title\">\r\n  </mat-form-field>\r\n\r\n  <mat-form-field>\r\n    <textarea \r\n      matInput \r\n      placeholder=\"Description\"\r\n      formControlName=\"description\"></textarea>\r\n  </mat-form-field>\r\n  <h3>Author</h3>\r\n  <div id=\"author\" formGroupName=\"author\">\r\n      <mat-form-field>\r\n          <input\r\n          matInput\r\n          id=\"firstName\"\r\n          formControlName=\"firstName\"\r\n          placeholder=\"Name\"\r\n          type=\"text\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n          <input\r\n          matInput\r\n          id=\"lastName\"\r\n          formControlName=\"lastName\"\r\n          type=\"text\"\r\n          placeholder=\"Last name\">\r\n        </mat-form-field>\r\n    </div>\r\n    <mat-card-actions>\r\n      <ng-content select='button'></ng-content>\r\n      <a mat-raised-button color=\"warn\" [routerLink]=\"['../']\">Cancel</a>\r\n    </mat-card-actions>\r\n</form>"

/***/ }),

/***/ "./src/app/books/components/book-form/book-form.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/books/components/book-form/book-form.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\n  width: 100%; }\n\nmat-card-actions {\n  position: absolute;\n  bottom: 0;\n  left: 40px; }\n\n@media (max-width: 768px) {\n  mat-card {\n    min-height: 35vh; } }\n\n@media (max-width: 599px) {\n  section {\n    padding: 30px 15px 30px 15px; }\n  mat-card {\n    min-height: 70vh; } }\n"

/***/ }),

/***/ "./src/app/books/components/book-form/book-form.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/books/components/book-form/book-form.component.ts ***!
  \*******************************************************************/
/*! exports provided: BookFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookFormComponent", function() { return BookFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_book_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/book.model */ "./src/app/books/models/book.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookFormComponent = /** @class */ (function () {
    function BookFormComponent(fb) {
        this.fb = fb;
        this.submitted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.bookForm = this.fb.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            author: this.fb.group({
                firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            }),
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    BookFormComponent.prototype.ngOnInit = function () { };
    BookFormComponent.prototype.ngOnChanges = function (simpleChanges) {
        if (this.book) {
            this.bookForm.patchValue(this.book);
        }
    };
    BookFormComponent.prototype.onSubmit = function () {
        this.submitted.emit({ group: this.bookForm, bookIndex: this.bookIndex });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_book_model__WEBPACK_IMPORTED_MODULE_2__["Book"])
    ], BookFormComponent.prototype, "book", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], BookFormComponent.prototype, "bookIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], BookFormComponent.prototype, "submitted", void 0);
    BookFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'gook-book-form',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./book-form.component.scss */ "./src/app/books/components/book-form/book-form.component.scss")],
            template: __webpack_require__(/*! ./book-form.component.html */ "./src/app/books/components/book-form/book-form.component.html")
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], BookFormComponent);
    return BookFormComponent;
}());



/***/ }),

/***/ "./src/app/books/components/book-header/book-header.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/books/components/book-header/book-header.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card-title {\n  font-size: 20px; }\n"

/***/ }),

/***/ "./src/app/books/components/book-header/book-header.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/books/components/book-header/book-header.component.ts ***!
  \***********************************************************************/
/*! exports provided: BookHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookHeaderComponent", function() { return BookHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_book_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/book.model */ "./src/app/books/models/book.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BookHeaderComponent = /** @class */ (function () {
    function BookHeaderComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_book_model__WEBPACK_IMPORTED_MODULE_1__["Book"])
    ], BookHeaderComponent.prototype, "book", void 0);
    BookHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'gook-book-header',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./book-header.component.scss */ "./src/app/books/components/book-header/book-header.component.scss")],
            template: "\n    <mat-card-header>\n        <mat-card-title><h2>{{ book.title }}</h2></mat-card-title>\n        <mat-card-subtitle><h3>{{ book.author.firstName}} {{ book.author.lastName}}</h3></mat-card-subtitle>\n    </mat-card-header>\n    "
        })
    ], BookHeaderComponent);
    return BookHeaderComponent;
}());



/***/ }),

/***/ "./src/app/books/containers/book-details/book-details.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/books/containers/book-details/book-details.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\r\n  <mat-card *ngIf=\"(bookList$ | async) as state; else loading;\">\r\n    <gook-book-header\r\n      [book]=\"state.selectedBook\">\r\n    </gook-book-header>\r\n    <button mat-icon-button fxHide.gt-xs class=\"close-btn\">\r\n      <!-- <mat-icon (click)=\"onCloseDetails()\">close</mat-icon> -->\r\n    </button>\r\n    <gook-book-content\r\n      [book]=\"state.selectedBook\">\r\n    </gook-book-content>\r\n    <gook-book-actions\r\n      [bookIndex]=\"state.selectedBookIndex\"\r\n      (edited)=\"onEditBook($event)\"\r\n      (deleted)=\"onDeleteBook($event)\">\r\n    </gook-book-actions>\r\n  </mat-card>\r\n\r\n  <ng-template #loading>Fetching books...</ng-template>\r\n</section>"

/***/ }),

/***/ "./src/app/books/containers/book-details/book-details.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/books/containers/book-details/book-details.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section {\n  position: relative;\n  padding: 140px 15px 30px 15px; }\n\nmat-card {\n  position: relative;\n  min-height: 300px;\n  padding: 24px 24px 60px 24px; }\n\n.close-btn {\n  position: absolute;\n  top: 10px;\n  right: 10px; }\n\n@media (max-width: 599px) {\n  section {\n    padding: 30px 15px 30px 15px; }\n  mat-card {\n    min-height: 70vh; } }\n"

/***/ }),

/***/ "./src/app/books/containers/book-details/book-details.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/books/containers/book-details/book-details.component.ts ***!
  \*************************************************************************/
/*! exports provided: BookDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookDetailsComponent", function() { return BookDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_book_list_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/book-list.actions */ "./src/app/books/store/book-list.actions.ts");
/* harmony import */ var _shared_decorators_autounsubscribe_decorator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/decorators/autounsubscribe.decorator */ "./src/app/shared/decorators/autounsubscribe.decorator.ts");
/* harmony import */ var _shared_decorators_class_logger_decorator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/decorators/class.logger.decorator */ "./src/app/shared/decorators/class.logger.decorator.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BookDetailsComponent = /** @class */ (function () {
    function BookDetailsComponent(route, router, store) {
        this.route = route;
        this.router = router;
        this.store = store;
    }
    BookDetailsComponent.prototype.ngOnInit = function () {
        this.bookList$ = this.store.select('bookList');
    };
    BookDetailsComponent.prototype.ngOnDestroy = function () { };
    BookDetailsComponent.prototype.onEditBook = function (selectedBookIndex) {
        this.store.dispatch(new _store_book_list_actions__WEBPACK_IMPORTED_MODULE_3__["StartEdit"](selectedBookIndex));
        this.router.navigate(['edit'], { relativeTo: this.route });
    };
    BookDetailsComponent.prototype.onDeleteBook = function (selectedBookIndex) {
        this.store.dispatch(new _store_book_list_actions__WEBPACK_IMPORTED_MODULE_3__["DeleteBook"](selectedBookIndex));
        this.router.navigate(['/books']);
    };
    BookDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'gook-book-details',
            template: __webpack_require__(/*! ./book-details.component.html */ "./src/app/books/containers/book-details/book-details.component.html"),
            styles: [__webpack_require__(/*! ./book-details.component.scss */ "./src/app/books/containers/book-details/book-details.component.scss")]
        }),
        Object(_shared_decorators_autounsubscribe_decorator__WEBPACK_IMPORTED_MODULE_4__["AutoUnsubscribe"])(),
        Object(_shared_decorators_class_logger_decorator__WEBPACK_IMPORTED_MODULE_5__["NgLog"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], BookDetailsComponent);
    return BookDetailsComponent;
}());



/***/ }),

/***/ "./src/app/books/containers/book-edit/book-edit.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/books/containers/book-edit/book-edit.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\r\n  <mat-card>\r\n    <h1>Edit book</h1>\r\n    <gook-book-form \r\n      [book]='(storeData$ | async)?.editedBook'\r\n      [bookIndex]='(storeData$ | async)?.editedBookIndex'\r\n      (submitted)='onEditBook($event)'>\r\n      <button mat-raised-button color=\"accent\" type=\"submit\" [disabled]=\"bookFormComponent?.bookForm.invalid\">Save</button>\r\n    </gook-book-form>\r\n  </mat-card>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/books/containers/book-edit/book-edit.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/books/containers/book-edit/book-edit.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section {\n  position: relative;\n  padding: 140px 15px 30px 15px; }\n\nmat-card {\n  position: relative;\n  min-height: 300px;\n  padding: 24px 24px 80px 24px; }\n\nh1 {\n  margin-bottom: 20px; }\n"

/***/ }),

/***/ "./src/app/books/containers/book-edit/book-edit.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/books/containers/book-edit/book-edit.component.ts ***!
  \*******************************************************************/
/*! exports provided: BookEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookEditComponent", function() { return BookEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_book_list_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/book-list.actions */ "./src/app/books/store/book-list.actions.ts");
/* harmony import */ var _models_book_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/book.model */ "./src/app/books/models/book.model.ts");
/* harmony import */ var _shared_decorators_autounsubscribe_decorator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/decorators/autounsubscribe.decorator */ "./src/app/shared/decorators/autounsubscribe.decorator.ts");
/* harmony import */ var _components_book_form_book_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/book-form/book-form.component */ "./src/app/books/components/book-form/book-form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// third-party imports





var BookEditComponent = /** @class */ (function () {
    function BookEditComponent(route, router, store) {
        this.route = route;
        this.router = router;
        this.store = store;
    }
    BookEditComponent.prototype.ngOnInit = function () {
        this.storeData$ = this.store.select('bookList');
    };
    BookEditComponent.prototype.ngOnDestroy = function () {
        this.store.dispatch(new _store_book_list_actions__WEBPACK_IMPORTED_MODULE_3__["StopEdit"]());
    };
    BookEditComponent.prototype.onEditBook = function (event) {
        var newBook = new _models_book_model__WEBPACK_IMPORTED_MODULE_4__["Book"](event.group.value);
        this.store.dispatch(new _store_book_list_actions__WEBPACK_IMPORTED_MODULE_3__["UpdateBook"]({ index: event.bookIndex, book: newBook }));
        this.store.dispatch(new _store_book_list_actions__WEBPACK_IMPORTED_MODULE_3__["GetBook"](event.bookIndex));
        this.router.navigate(['../'], { relativeTo: this.route });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])(_components_book_form_book_form_component__WEBPACK_IMPORTED_MODULE_6__["BookFormComponent"]),
        __metadata("design:type", _components_book_form_book_form_component__WEBPACK_IMPORTED_MODULE_6__["BookFormComponent"])
    ], BookEditComponent.prototype, "bookFormComponent", void 0);
    BookEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'gook-book-edit',
            template: __webpack_require__(/*! ./book-edit.component.html */ "./src/app/books/containers/book-edit/book-edit.component.html"),
            styles: [__webpack_require__(/*! ./book-edit.component.scss */ "./src/app/books/containers/book-edit/book-edit.component.scss")]
        }),
        Object(_shared_decorators_autounsubscribe_decorator__WEBPACK_IMPORTED_MODULE_5__["AutoUnsubscribe"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], BookEditComponent);
    return BookEditComponent;
}());



/***/ }),

/***/ "./src/app/books/containers/book-list/book-item/book-item.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/books/containers/book-list/book-item/book-item.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card \r\n  [routerLink]=\"[index]\"\r\n  routerLinkActive=\"active\"\r\n  style=\"cursor: pointer\">\r\n  <gook-book-header\r\n      [book]=\"book\">\r\n  </gook-book-header>\r\n  <gook-book-content\r\n    [book]=\"book\">\r\n  </gook-book-content>\r\n</mat-card>\r\n\r\n"

/***/ }),

/***/ "./src/app/books/containers/book-list/book-item/book-item.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/books/containers/book-list/book-item/book-item.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\n  margin-bottom: 20px;\n  outline: none; }\n\nmat-card:hover {\n  background-color: #f7f7f7; }\n"

/***/ }),

/***/ "./src/app/books/containers/book-list/book-item/book-item.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/books/containers/book-list/book-item/book-item.component.ts ***!
  \*****************************************************************************/
/*! exports provided: BookItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookItemComponent", function() { return BookItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_book_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/book.model */ "./src/app/books/models/book.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BookItemComponent = /** @class */ (function () {
    function BookItemComponent() {
    }
    BookItemComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_book_model__WEBPACK_IMPORTED_MODULE_1__["Book"])
    ], BookItemComponent.prototype, "book", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], BookItemComponent.prototype, "index", void 0);
    BookItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'gook-book-item',
            template: __webpack_require__(/*! ./book-item.component.html */ "./src/app/books/containers/book-list/book-item/book-item.component.html"),
            styles: [__webpack_require__(/*! ./book-item.component.scss */ "./src/app/books/containers/book-list/book-item/book-item.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BookItemComponent);
    return BookItemComponent;
}());



/***/ }),

/***/ "./src/app/books/containers/book-list/book-list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/books/containers/book-list/book-list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\r\n  <button class=\"add-btn\" mat-raised-button color=\"primary\" (click)=\"onNewBookAdd()\">Add new book</button>\r\n  <mat-form-field class=\"search\">\r\n    <input type=\"text\" matInput placeholder=\"Search by title or author\" aria-label=\"Search by title or author\" aria-describedby=\"basic-addon2\" [(ngModel)]=\"searchText\">\r\n  </mat-form-field>\r\n  <div \r\n    class=\"book-list\"\r\n    *ngIf=\" (bookListState$ | async).books as books;\">\r\n    <gook-book-item (click)=\"onBookSelected(i)\"\r\n      *ngFor=\"let bookItem of books | filter: searchText; index as i\"\r\n      [book]=\"bookItem\"\r\n      [index]='i'>\r\n    </gook-book-item>\r\n  </div>\r\n</section>"

/***/ }),

/***/ "./src/app/books/containers/book-list/book-list.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/books/containers/book-list/book-list.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section {\n  padding: 20px 15px; }\n\n.add-btn {\n  display: block; }\n\n.search {\n  display: block;\n  margin: 15px 0 5px 0;\n  width: 90%; }\n\n.book-list {\n  overflow: scroll;\n  max-height: 70vh; }\n"

/***/ }),

/***/ "./src/app/books/containers/book-list/book-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/books/containers/book-list/book-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: BookListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookListComponent", function() { return BookListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_book_list_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/book-list.actions */ "./src/app/books/store/book-list.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BookListComponent = /** @class */ (function () {
    function BookListComponent(router, activeRoute, store) {
        this.router = router;
        this.activeRoute = activeRoute;
        this.store = store;
    }
    BookListComponent.prototype.ngOnInit = function () {
        this.store.dispatch(new _store_book_list_actions__WEBPACK_IMPORTED_MODULE_3__["TryGetBooks"]());
        this.bookListState$ = this.store.select('bookList');
    };
    BookListComponent.prototype.onBookSelected = function (index) {
        this.store.dispatch(new _store_book_list_actions__WEBPACK_IMPORTED_MODULE_3__["GetBook"](index));
    };
    BookListComponent.prototype.onNewBookAdd = function () {
        this.router.navigate(['new'], { relativeTo: this.activeRoute });
    };
    BookListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'gook-book-list',
            template: __webpack_require__(/*! ./book-list.component.html */ "./src/app/books/containers/book-list/book-list.component.html"),
            styles: [__webpack_require__(/*! ./book-list.component.scss */ "./src/app/books/containers/book-list/book-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], BookListComponent);
    return BookListComponent;
}());



/***/ }),

/***/ "./src/app/books/containers/book/book.component.html":
/*!***********************************************************!*\
  !*** ./src/app/books/containers/book/book.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\r\n  <mat-card>\r\n    <h1>Create new book</h1>\r\n    <gook-book-form\r\n      (submitted)='onCreateBook($event)'>\r\n      <button mat-raised-button color=\"accent\" type=\"submit\" [disabled]=\"bookFormComponent?.bookForm.invalid\">Add book</button>\r\n    </gook-book-form>\r\n  </mat-card>\r\n</section>"

/***/ }),

/***/ "./src/app/books/containers/book/book.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/books/containers/book/book.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section {\n  position: relative;\n  padding: 140px 15px 30px 15px; }\n\nmat-card {\n  position: relative;\n  min-height: 300px;\n  padding: 24px 24px 80px 24px; }\n\nh1 {\n  margin-bottom: 20px; }\n"

/***/ }),

/***/ "./src/app/books/containers/book/book.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/books/containers/book/book.component.ts ***!
  \*********************************************************/
/*! exports provided: BookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookComponent", function() { return BookComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_book_list_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/book-list.actions */ "./src/app/books/store/book-list.actions.ts");
/* harmony import */ var _models_book_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/book.model */ "./src/app/books/models/book.model.ts");
/* harmony import */ var _components_book_form_book_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/book-form/book-form.component */ "./src/app/books/components/book-form/book-form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// third-party imports

// app store



var BookComponent = /** @class */ (function () {
    function BookComponent(store) {
        this.store = store;
    }
    BookComponent.prototype.onCreateBook = function (event) {
        var book = new _models_book_model__WEBPACK_IMPORTED_MODULE_3__["Book"](event.group.value);
        this.store.dispatch(new _store_book_list_actions__WEBPACK_IMPORTED_MODULE_2__["TryAddBook"](book));
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])(_components_book_form_book_form_component__WEBPACK_IMPORTED_MODULE_4__["BookFormComponent"]),
        __metadata("design:type", _components_book_form_book_form_component__WEBPACK_IMPORTED_MODULE_4__["BookFormComponent"])
    ], BookComponent.prototype, "bookFormComponent", void 0);
    BookComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'gook-book',
            styles: [__webpack_require__(/*! ./book.component.scss */ "./src/app/books/containers/book/book.component.scss")],
            template: __webpack_require__(/*! ./book.component.html */ "./src/app/books/containers/book/book.component.html")
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], BookComponent);
    return BookComponent;
}());



/***/ }),

/***/ "./src/app/books/models/book.model.ts":
/*!********************************************!*\
  !*** ./src/app/books/models/book.model.ts ***!
  \********************************************/
/*! exports provided: Book */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Book", function() { return Book; });
var Book = /** @class */ (function () {
    function Book(bookInfo) {
        this.rate = 0;
        this.quotes = [];
        this.uid = bookInfo.uid ? bookInfo.uid : null;
        this.rate = bookInfo.rate ? bookInfo.rate : 0;
        this.quotes = bookInfo.quotes ? bookInfo.quotes.slice() : [];
        this.title = bookInfo.title;
        this.description = bookInfo.description;
        this.author = bookInfo.author;
    }
    return Book;
}());



/***/ }),

/***/ "./src/app/books/store/book-list.actions.ts":
/*!**************************************************!*\
  !*** ./src/app/books/store/book-list.actions.ts ***!
  \**************************************************/
/*! exports provided: TRY_ADD_BOOK, ADD_BOOK, UPDATE_BOOK, DELETE_BOOK, TRY_GET_BOOKS, GET_BOOK_BY_ID, SET_BOOKS, START_EDIT, STOP_EDIT, TryAddBook, AddBook, UpdateBook, DeleteBook, TryGetBooks, GetBook, SetBooks, StartEdit, StopEdit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRY_ADD_BOOK", function() { return TRY_ADD_BOOK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_BOOK", function() { return ADD_BOOK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_BOOK", function() { return UPDATE_BOOK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_BOOK", function() { return DELETE_BOOK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRY_GET_BOOKS", function() { return TRY_GET_BOOKS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_BOOK_BY_ID", function() { return GET_BOOK_BY_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_BOOKS", function() { return SET_BOOKS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "START_EDIT", function() { return START_EDIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STOP_EDIT", function() { return STOP_EDIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TryAddBook", function() { return TryAddBook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBook", function() { return AddBook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateBook", function() { return UpdateBook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteBook", function() { return DeleteBook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TryGetBooks", function() { return TryGetBooks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetBook", function() { return GetBook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetBooks", function() { return SetBooks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartEdit", function() { return StartEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StopEdit", function() { return StopEdit; });
var TRY_ADD_BOOK = 'TRY_ADD_BOOK';
var ADD_BOOK = 'ADD_BOOK';
var UPDATE_BOOK = 'UPDATE_BOOK';
var DELETE_BOOK = 'DELETE_BOOK';
var TRY_GET_BOOKS = 'TRY_GET_BOOKS';
var GET_BOOK_BY_ID = 'GET_BOOK_BY_ID';
var SET_BOOKS = 'SET_BOOKS';
var START_EDIT = 'START_EDIT';
var STOP_EDIT = 'STOP_EDIT';
var TryAddBook = /** @class */ (function () {
    function TryAddBook(payload) {
        this.payload = payload;
        this.type = TRY_ADD_BOOK;
    }
    return TryAddBook;
}());

var AddBook = /** @class */ (function () {
    function AddBook(payload) {
        this.payload = payload;
        this.type = ADD_BOOK;
    }
    return AddBook;
}());

var UpdateBook = /** @class */ (function () {
    function UpdateBook(payload) {
        this.payload = payload;
        this.type = UPDATE_BOOK;
    }
    return UpdateBook;
}());

var DeleteBook = /** @class */ (function () {
    function DeleteBook(payload) {
        this.payload = payload;
        this.type = DELETE_BOOK;
    }
    return DeleteBook;
}());

var TryGetBooks = /** @class */ (function () {
    function TryGetBooks() {
        this.type = 'TRY_GET_BOOKS';
    }
    return TryGetBooks;
}());

var GetBook = /** @class */ (function () {
    function GetBook(payload) {
        this.payload = payload;
        this.type = GET_BOOK_BY_ID;
    }
    return GetBook;
}());

var SetBooks = /** @class */ (function () {
    function SetBooks(payload) {
        this.payload = payload;
        this.type = SET_BOOKS;
    }
    return SetBooks;
}());

var StartEdit = /** @class */ (function () {
    function StartEdit(payload) {
        this.payload = payload;
        this.type = START_EDIT;
    }
    return StartEdit;
}());

var StopEdit = /** @class */ (function () {
    function StopEdit() {
        this.type = STOP_EDIT;
    }
    return StopEdit;
}());



/***/ }),

/***/ "./src/app/books/store/book-list.effects.ts":
/*!**************************************************!*\
  !*** ./src/app/books/store/book-list.effects.ts ***!
  \**************************************************/
/*! exports provided: BookListEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookListEffects", function() { return BookListEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _book_list_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./book-list.actions */ "./src/app/books/store/book-list.actions.ts");
/* harmony import */ var _models_book_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/book.model */ "./src/app/books/models/book.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var BookListEffects = /** @class */ (function () {
    function BookListEffects(actions$, router) {
        var _this = this;
        this.actions$ = actions$;
        this.router = router;
        this.addBook = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_book_list_actions__WEBPACK_IMPORTED_MODULE_6__["TRY_ADD_BOOK"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (data) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(_this.addNewBook(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(firebase__WEBPACK_IMPORTED_MODULE_5__["database"]().ref('/books/' + _this.postKey).once('value')); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (snapshot) {
            _this.router.navigate(['/books']);
            return new _book_list_actions__WEBPACK_IMPORTED_MODULE_6__["AddBook"](new _models_book_model__WEBPACK_IMPORTED_MODULE_7__["Book"](snapshot.val()));
        }));
        this.getBooks = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_book_list_actions__WEBPACK_IMPORTED_MODULE_6__["TRY_GET_BOOKS"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(_this.fetchBooks()); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (snapshot) { return snapshot.val(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) {
            var keyValuePairs = Object.entries(value);
            var books = [];
            for (var _i = 0, keyValuePairs_1 = keyValuePairs; _i < keyValuePairs_1.length; _i++) {
                var keyValuePair = keyValuePairs_1[_i];
                keyValuePair[1].uid = keyValuePair[0];
                books = books.concat([new _models_book_model__WEBPACK_IMPORTED_MODULE_7__["Book"](keyValuePair[1])]);
            }
            return books;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (books) { return new _book_list_actions__WEBPACK_IMPORTED_MODULE_6__["SetBooks"](books); }));
    }
    BookListEffects.prototype.fetchBooks = function () {
        return firebase__WEBPACK_IMPORTED_MODULE_5__["database"]().ref('books/').once('value');
    };
    BookListEffects.prototype.addNewBook = function (book) {
        // Get a key for a new book.
        this.postKey = firebase__WEBPACK_IMPORTED_MODULE_5__["database"]().ref().child('books').push().key;
        return firebase__WEBPACK_IMPORTED_MODULE_5__["database"]().ref('books/' + this.postKey).set(book);
    };
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], BookListEffects.prototype, "addBook", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], BookListEffects.prototype, "getBooks", void 0);
    BookListEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], BookListEffects);
    return BookListEffects;
}());



/***/ }),

/***/ "./src/app/books/store/book-list.reducer.ts":
/*!**************************************************!*\
  !*** ./src/app/books/store/book-list.reducer.ts ***!
  \**************************************************/
/*! exports provided: bookListReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bookListReducer", function() { return bookListReducer; });
/* harmony import */ var _book_list_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./book-list.actions */ "./src/app/books/store/book-list.actions.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var initialState = {
    books: [],
    selectedBook: null,
    selectedBookIndex: -1,
    editedBook: null,
    editedBookIndex: -1
};
function bookListReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _book_list_actions__WEBPACK_IMPORTED_MODULE_0__["ADD_BOOK"]:
            return __assign({}, state, { books: [action.payload].concat(state.books) });
        case _book_list_actions__WEBPACK_IMPORTED_MODULE_0__["UPDATE_BOOK"]:
            var book = state.books[action.payload.index];
            var updatedBook = __assign({}, book, action.payload.book);
            var books = state.books.slice();
            books[action.payload.index] = updatedBook;
            return __assign({}, state, { books: books });
        case _book_list_actions__WEBPACK_IMPORTED_MODULE_0__["DELETE_BOOK"]:
            var oldBooks = state.books.slice();
            oldBooks.splice(action.payload, 1);
            return __assign({}, state, { books: oldBooks });
        case _book_list_actions__WEBPACK_IMPORTED_MODULE_0__["GET_BOOK_BY_ID"]:
            var selectedBook = __assign({}, state.books[action.payload]);
            return __assign({}, state, { selectedBook: selectedBook, selectedBookIndex: action.payload });
        case _book_list_actions__WEBPACK_IMPORTED_MODULE_0__["SET_BOOKS"]:
            return __assign({}, state, { books: state.books.concat(action.payload) });
        case _book_list_actions__WEBPACK_IMPORTED_MODULE_0__["START_EDIT"]:
            var editedIngredient = __assign({}, state.books[action.payload]);
            return __assign({}, state, { editedBook: editedIngredient, editedBookIndex: action.payload });
        case _book_list_actions__WEBPACK_IMPORTED_MODULE_0__["STOP_EDIT"]:
            return __assign({}, state, { editedBook: null, editedBookIndex: -1 });
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth-guard.service */ "./src/app/auth/auth-guard.service.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "./src/app/core/header/header.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/core/home/home.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_auth_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/auth.interceptor */ "./src/app/shared/auth.interceptor.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
            ],
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
            ],
            exports: [
                _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"]
            ],
            providers: [
                _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
                    useClass: _shared_auth_interceptor__WEBPACK_IMPORTED_MODULE_6__["AuthInterceptor"],
                    multi: true
                }
            ]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/header/header.component.html":
/*!***************************************************!*\
  !*** ./src/app/core/header/header.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" fxLayout=\"row\"  fxLayoutAlign=\"space-between center\"  role=\"heading\">\r\n  <div fxHide.gt-xs>\r\n    <button mat-icon-button (click)=\"onToggleSidenav()\">\r\n      <mat-icon>menu</mat-icon>\r\n    </button>\r\n  </div>\r\n  <div class=\"logo-container\">\r\n    <a routerLink=\"/\">\r\n      <img src=\"/assets/code-brackets.png\" class=\"logo\"  alt=\"LOGO\">\r\n    </a>\r\n  </div>\r\n  <div fxFlex fxLayout fxLayoutAlign=\"flex-end\" fxHide.xs>\r\n    <ul fxLayout fxLayoutGap=\"10px\" class=\"navigation-items\">\r\n      <li *ngIf=\"!(authState | async).authenticated\">\r\n        <button mat-button routerLink=\"/register\" routerLinkActive=\"active-link\">Signup</button>\r\n      </li>\r\n      <li *ngIf=\"!(authState | async).authenticated\">\r\n        <button mat-button routerLink=\"/login\" routerLinkActive=\"active-link\">Login</button>\r\n      </li>\r\n      <li *ngIf=\"(authState | async).authenticated\">\r\n        <button mat-button routerLink=\"/books\" routerLinkActive=\"active-link\">Books</button>\r\n      </li>\r\n      <li *ngIf=\"(authState | async).authenticated\">\r\n        <button mat-button routerLink=\"/quotes\" routerLinkActive=\"active-link\">Quotes</button>\r\n      </li>\r\n      <li *ngIf=\"(authState | async).authenticated\">\r\n        <button mat-button style=\"cursor: pointer\" (click)=\"onLogout()\">Logout</button>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</mat-toolbar>"

/***/ }),

/***/ "./src/app/core/header/header.component.scss":
/*!***************************************************!*\
  !*** ./src/app/core/header/header.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo-container {\n  width: 60px;\n  height: 60px; }\n\n.logo-container a {\n  width: 100%;\n  height: 100%; }\n\n.logo {\n  width: 100%;\n  height: auto; }\n\na {\n  text-decoration: none;\n  color: white; }\n\nbutton {\n  font-size: 20px; }\n\na:hover,\na:active {\n  color: lightgray; }\n\n.navigation-items {\n  list-style: none;\n  padding: 0;\n  margin: 0; }\n\n.nav-caption {\n  display: inline-block;\n  padding-left: 6px; }\n\n.active-link {\n  color: lightgray; }\n"

/***/ }),

/***/ "./src/app/core/header/header.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/header/header.component.ts ***!
  \*************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _auth_store_auth_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth/store/auth.actions */ "./src/app/auth/store/auth.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(store) {
        this.store = store;
        this.sidenavToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.authState = this.store.select('auth');
    };
    HeaderComponent.prototype.onLogout = function () {
        this.store.dispatch(new _auth_store_auth_actions__WEBPACK_IMPORTED_MODULE_2__["Logout"]());
    };
    HeaderComponent.prototype.onToggleSidenav = function () {
        this.sidenavToggle.emit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "sidenavToggle", void 0);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'gook-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/core/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/core/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/core/home/home.component.html":
/*!***********************************************!*\
  !*** ./src/app/core/home/home.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  home works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/core/home/home.component.scss":
/*!***********************************************!*\
  !*** ./src/app/core/home/home.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/home/home.component.ts":
/*!*********************************************!*\
  !*** ./src/app/core/home/home.component.ts ***!
  \*********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'gook-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/core/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/core/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/core/side-nav/side-nav.component.html":
/*!*******************************************************!*\
  !*** ./src/app/core/side-nav/side-nav.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-nav-list>\r\n  <a mat-list-item routerLink=\"/register\" routerLinkActive=\"active-link\" (click)=\"onClose()\" *ngIf=\"(authState | async).authenticated\">\r\n    <mat-icon>face</mat-icon>\r\n    <span class=\"nav-caption\">Signup</span>\r\n  </a>\r\n  <a mat-list-item routerLink=\"/login\" routerLinkActive=\"active-link\" (click)=\"onClose()\" *ngIf=\"(authState | async).authenticated\">\r\n    <mat-icon>input</mat-icon>\r\n    <span class=\"nav-caption\">Login</span>\r\n  </a>\r\n  <a mat-list-item routerLink=\"/books\" routerLinkActive=\"active-link\" (click)=\"onClose()\" *ngIf=\"(authState | async).authenticated\">\r\n    <mat-icon>book</mat-icon>\r\n    <span class=\"nav-caption\">Books</span>\r\n  </a>\r\n  <a mat-list-item routerLink=\"/\" routerLinkActive=\"active-link\" [routerLinkActiveOptions]=\"{exact: true}\" (click)=\"onClose()\" *ngIf=\"(authState | async).authenticated\"></a>\r\n  <a mat-list-item routerLink=\"/register\" routerLinkActive=\"active-link\" (click)=\"onClose()\" *ngIf=\"!(authState | async).authenticated\">\r\n    <mat-icon>face</mat-icon>\r\n    <span class=\"nav-caption\">Signup</span>\r\n  </a>\r\n  <a mat-list-item routerLink=\"/login\" routerLinkActive=\"active-link\" (click)=\"onClose()\" *ngIf=\"!(authState | async).authenticated\">\r\n    <mat-icon>input</mat-icon>\r\n    <span class=\"nav-caption\">Login</span>\r\n  </a>\r\n  <a mat-list-item routerLink=\"/books\" routerLinkActive=\"active-link\" (click)=\"onClose()\" *ngIf=\"(authState | async).authenticated\">\r\n    <mat-icon>book</mat-icon>\r\n    <span class=\"nav-caption\">Books</span>\r\n  </a>\r\n  <a mat-list-item \r\n    routerLink=\"/\" \r\n    routerLinkActive=\"active-link\" \r\n    (click)=\"onClose()\" \r\n    [routerLinkActiveOptions]=\"{exact: true}\"\r\n    *ngIf=\"(authState | async).authenticated\">\r\n    <mat-icon>aspect_ratio</mat-icon>\r\n    <span class=\"nav-caption\">Qoutes</span>\r\n  </a>\r\n  <mat-list-item  *ngIf=\"(authState | async).authenticated\" routerLink=\"/\">\r\n    <button class=\"logout-btn\" mat-icon-button (click)=\"onLogout()\">\r\n      <mat-icon>eject</mat-icon>\r\n      <span class=\"nav-caption\">Logout</span>\r\n    </button>\r\n  </mat-list-item>\r\n</mat-nav-list>\r\n"

/***/ }),

/***/ "./src/app/core/side-nav/side-nav.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/core/side-nav/side-nav.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-icon-button {\n  display: block;\n  width: 100%;\n  height: 100%;\n  text-align: left; }\n\n.active-link {\n  background: lightgray; }\n"

/***/ }),

/***/ "./src/app/core/side-nav/side-nav.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/side-nav/side-nav.component.ts ***!
  \*****************************************************/
/*! exports provided: SideNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavComponent", function() { return SideNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _auth_store_auth_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth/store/auth.actions */ "./src/app/auth/store/auth.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SideNavComponent = /** @class */ (function () {
    function SideNavComponent(store) {
        this.store = store;
        this.closeSidenav = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    SideNavComponent.prototype.ngOnInit = function () {
        this.authState = this.store.select('auth');
    };
    SideNavComponent.prototype.onClose = function () {
        this.closeSidenav.emit();
    };
    SideNavComponent.prototype.onLogout = function () {
        this.store.dispatch(new _auth_store_auth_actions__WEBPACK_IMPORTED_MODULE_2__["Logout"]());
        this.onClose();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SideNavComponent.prototype, "closeSidenav", void 0);
    SideNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'gook-side-nav',
            template: __webpack_require__(/*! ./side-nav.component.html */ "./src/app/core/side-nav/side-nav.component.html"),
            styles: [__webpack_require__(/*! ./side-nav.component.scss */ "./src/app/core/side-nav/side-nav.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], SideNavComponent);
    return SideNavComponent;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/quotes/models/quote.model.ts":
/*!**********************************************!*\
  !*** ./src/app/quotes/models/quote.model.ts ***!
  \**********************************************/
/*! exports provided: Quote */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Quote", function() { return Quote; });
var Quote = /** @class */ (function () {
    function Quote(quoteInfo) {
        this.description = quoteInfo.description;
        this.author = quoteInfo.author;
    }
    return Quote;
}());



/***/ }),

/***/ "./src/app/quotes/quote-item/quote-item.component.html":
/*!*************************************************************!*\
  !*** ./src/app/quotes/quote-item/quote-item.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card \r\nfxLayout=\"row\" \r\nfxLayout.xs=\"column\" \r\nfxLayoutAlign=\"space-between ceter\">\r\n<mat-card-header>\r\n  <mat-card-title><mat-icon>format_quote</mat-icon>{{ quote.description }}<mat-icon>format_quote</mat-icon></mat-card-title>\r\n  <mat-card-subtitle>- {{ quote.author.firstName }} {{ quote.author.lastName }}</mat-card-subtitle>\r\n</mat-card-header>\r\n<mat-card-actions>\r\n  <button mat-button>Other quotes</button>\r\n  <button mat-button>Delete</button>\r\n</mat-card-actions>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/quotes/quote-item/quote-item.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/quotes/quote-item/quote-item.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\n  margin: 15px; }\n  mat-card mat-card-title {\n    font-size: 24px; }\n  mat-card mat-card-subtitle {\n    font-size: 18px; }\n"

/***/ }),

/***/ "./src/app/quotes/quote-item/quote-item.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/quotes/quote-item/quote-item.component.ts ***!
  \***********************************************************/
/*! exports provided: QuoteItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteItemComponent", function() { return QuoteItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_quote_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/quote.model */ "./src/app/quotes/models/quote.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuoteItemComponent = /** @class */ (function () {
    function QuoteItemComponent() {
    }
    QuoteItemComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_quote_model__WEBPACK_IMPORTED_MODULE_1__["Quote"])
    ], QuoteItemComponent.prototype, "quote", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], QuoteItemComponent.prototype, "index", void 0);
    QuoteItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'gook-quote-item',
            template: __webpack_require__(/*! ./quote-item.component.html */ "./src/app/quotes/quote-item/quote-item.component.html"),
            styles: [__webpack_require__(/*! ./quote-item.component.scss */ "./src/app/quotes/quote-item/quote-item.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], QuoteItemComponent);
    return QuoteItemComponent;
}());



/***/ }),

/***/ "./src/app/quotes/quotes-list.component.html":
/*!***************************************************!*\
  !*** ./src/app/quotes/quotes-list.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group>\r\n  <mat-tab label=\"All qoutes\">\r\n    <section>\r\n      <gook-quote-item\r\n        *ngFor=\"let quoteItem of (quotesListState | async).quotes; let i = index\"\r\n        [quote]=\"quoteItem\"></gook-quote-item>\r\n    </section>\r\n  </mat-tab>\r\n  <mat-tab label=\"Add new qoute\">\r\n      Content 3 \r\n  </mat-tab>\r\n  <mat-tab label=\"Qoutes by book\">\r\n      Content 2 \r\n  </mat-tab>\r\n</mat-tab-group>\r\n\r\n"

/***/ }),

/***/ "./src/app/quotes/quotes-list.component.scss":
/*!***************************************************!*\
  !*** ./src/app/quotes/quotes-list.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\n  margin: 10px 15px 0 15px; }\n"

/***/ }),

/***/ "./src/app/quotes/quotes-list.component.ts":
/*!*************************************************!*\
  !*** ./src/app/quotes/quotes-list.component.ts ***!
  \*************************************************/
/*! exports provided: QuotesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotesListComponent", function() { return QuotesListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuotesListComponent = /** @class */ (function () {
    function QuotesListComponent(store) {
        this.store = store;
    }
    QuotesListComponent.prototype.ngOnInit = function () {
        this.quotesListState = this.store.select('quotesList');
    };
    QuotesListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'gook-quotes-list',
            template: __webpack_require__(/*! ./quotes-list.component.html */ "./src/app/quotes/quotes-list.component.html"),
            styles: [__webpack_require__(/*! ./quotes-list.component.scss */ "./src/app/quotes/quotes-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], QuotesListComponent);
    return QuotesListComponent;
}());



/***/ }),

/***/ "./src/app/quotes/quotes.module.ts":
/*!*****************************************!*\
  !*** ./src/app/quotes/quotes.module.ts ***!
  \*****************************************/
/*! exports provided: QuotesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotesModule", function() { return QuotesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _quotes_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./quotes-list.component */ "./src/app/quotes/quotes-list.component.ts");
/* harmony import */ var _quote_item_quote_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./quote-item/quote-item.component */ "./src/app/quotes/quote-item/quote-item.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var QuotesModule = /** @class */ (function () {
    function QuotesModule() {
    }
    QuotesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"]
            ],
            declarations: [
                _quotes_list_component__WEBPACK_IMPORTED_MODULE_5__["QuotesListComponent"],
                _quote_item_quote_item_component__WEBPACK_IMPORTED_MODULE_6__["QuoteItemComponent"]
            ]
        })
    ], QuotesModule);
    return QuotesModule;
}());



/***/ }),

/***/ "./src/app/quotes/store/quotes-list.reducer.ts":
/*!*****************************************************!*\
  !*** ./src/app/quotes/store/quotes-list.reducer.ts ***!
  \*****************************************************/
/*! exports provided: quotesListReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quotesListReducer", function() { return quotesListReducer; });
/* harmony import */ var _models_quote_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/quote.model */ "./src/app/quotes/models/quote.model.ts");

var initialState = {
    quotes: [
        new _models_quote_model__WEBPACK_IMPORTED_MODULE_0__["Quote"]({
            description: 'Don\'t cry because it\'s over, smile because it happened',
            author: { firstName: 'Mark', lastName: 'Twain' }
        }),
        new _models_quote_model__WEBPACK_IMPORTED_MODULE_0__["Quote"]({
            description: 'Don\'t cry because it\'s over, smile because it happened',
            author: { firstName: 'Theodore', lastName: 'Dreiser' }
        }),
        new _models_quote_model__WEBPACK_IMPORTED_MODULE_0__["Quote"]({
            description: 'Don\'t cry because it\'s over, smile because it happened',
            author: { firstName: 'Mark', lastName: 'Twain' }
        }),
        new _models_quote_model__WEBPACK_IMPORTED_MODULE_0__["Quote"]({
            description: 'Don\'t cry because it\'s over, smile because it happened',
            author: { firstName: 'Mark', lastName: 'Twain' }
        }),
        new _models_quote_model__WEBPACK_IMPORTED_MODULE_0__["Quote"]({
            description: 'Don\'t cry because it\'s over, smile because it happened',
            author: { firstName: 'Mark', lastName: 'Twain' }
        }),
        new _models_quote_model__WEBPACK_IMPORTED_MODULE_0__["Quote"]({
            description: 'Don\'t cry because it\'s over, smile because it happened',
            author: { firstName: 'Mark', lastName: 'Twain' }
        }),
    ]
};
function quotesListReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/shared/auth.interceptor.ts":
/*!********************************************!*\
  !*** ./src/app/shared/auth.interceptor.ts ***!
  \********************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(store) {
        this.store = store;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        return this.store.select('auth')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (authState) {
            var copiedReq = req.clone({ params: req.params.set('auth', authState.token) });
            return next.handle(copiedReq);
        }));
    };
    AuthInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/shared/decorators/autounsubscribe.decorator.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/decorators/autounsubscribe.decorator.ts ***!
  \****************************************************************/
/*! exports provided: AutoUnsubscribe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoUnsubscribe", function() { return AutoUnsubscribe; });
function AutoUnsubscribe() {
    return function (constructor) {
        var original = constructor.prototype.ngOnDestroy;
        constructor.prototype.ngOnDestroy = function () {
            for (var prop in this) {
                if (this.hasOwnProperty(prop)) {
                    var property = this[prop];
                    if (property && (typeof property.unsubscribe === 'function')) {
                        property.unsubscribe();
                    }
                }
            }
            original && typeof original === 'function' && original.apply(this, arguments);
        };
    };
}


/***/ }),

/***/ "./src/app/shared/decorators/class.logger.decorator.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/decorators/class.logger.decorator.ts ***!
  \*************************************************************/
/*! exports provided: NgLog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgLog", function() { return NgLog; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");

function NgLog() {
    return function (constructor) {
        if (!_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].production) {
            // You can add/remove events for your needs
            var LIFECYCLE_HOOKS = [
                'ngOnInit',
                'ngOnChanges',
                'ngOnDestroy'
            ];
            var component_1 = constructor.name;
            LIFECYCLE_HOOKS.forEach(function (hook) {
                var original = constructor.prototype[hook];
                constructor.prototype[hook] = function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    console.log.apply(console, ["%c " + component_1 + " - " + hook, "color: #4CAF50; font-weight: bold"].concat(args));
                    original && original.apply(this, args);
                };
            });
        }
    };
}


/***/ }),

/***/ "./src/app/shared/filter.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/shared/filter.pipe.ts ***!
  \***************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, searchText) {
        if (!items) {
            return [];
        }
        if (!searchText) {
            return items;
        }
        searchText = searchText.toLowerCase();
        return items.filter(function (item) {
            return item.title.toLowerCase().includes(searchText)
                || (item.author.firstName + " " + item.author.lastName).toLowerCase().includes(searchText);
        });
    };
    FilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _filter_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter.pipe */ "./src/app/shared/filter.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_filter_pipe__WEBPACK_IMPORTED_MODULE_2__["FilterPipe"]],
            imports: [],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _filter_pipe__WEBPACK_IMPORTED_MODULE_2__["FilterPipe"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/store/app.reducers.ts":
/*!***************************************!*\
  !*** ./src/app/store/app.reducers.ts ***!
  \***************************************/
/*! exports provided: reducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony import */ var _books_store_book_list_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../books/store/book-list.reducer */ "./src/app/books/store/book-list.reducer.ts");
/* harmony import */ var _quotes_store_quotes_list_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../quotes/store/quotes-list.reducer */ "./src/app/quotes/store/quotes-list.reducer.ts");
/* harmony import */ var _auth_store_auth_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/store/auth.reducers */ "./src/app/auth/store/auth.reducers.ts");



var reducers = {
    bookList: _books_store_book_list_reducer__WEBPACK_IMPORTED_MODULE_0__["bookListReducer"],
    auth: _auth_store_auth_reducers__WEBPACK_IMPORTED_MODULE_2__["authReducer"],
    quotesList: _quotes_store_quotes_list_reducer__WEBPACK_IMPORTED_MODULE_1__["quotesListReducer"]
};


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: false,
    firebaseConfig: {
        apiKey: 'AIzaSyCwziy3qqY_9CCTX2n06N7lC8quH3Tc1vQ',
        authDomain: 'gook-books.firebaseapp.com',
        databaseURL: 'https://gook-books.firebaseio.com',
        projectId: 'gook-books',
        storageBucket: 'gook-books.appspot.com',
        messagingSenderId: '64648774438'
    }
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Дизайнер\Desktop\gook\Gook-books\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map