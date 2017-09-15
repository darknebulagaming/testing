webpackJsonp([1,4],{

/***/ 111:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 111;


/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(129);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(189),
            styles: [__webpack_require__(184)]
        })
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_module__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routes__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__my_new_component_my_new_component_component__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_component__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser_animations__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_hammerjs__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_hammerjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__login_component__["b" /* Youtubes */],
                __WEBPACK_IMPORTED_MODULE_7__my_new_component_my_new_component_component__["a" /* MyNewComponentComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__app_routes__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_component__ = __webpack_require__(76);
/* unused harmony export appRoutingProviders */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });


var appRoutes = [
    {
        path: '',
        redirectTo: '/login', pathMatch: 'full'
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_1__login_component__["a" /* LoginComponent */],
    },
];
var appRoutingProviders = [];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(75);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MdButtonModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdCheckboxModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdAutocompleteModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDatepickerModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MdInputModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MdRadioModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MdSelectModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MdSliderModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MdSlideToggleModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MdMenuModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MdSidenavModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MdToolbarModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MdListModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MdGridListModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MdCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MdTabsModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MdExpansionModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MdButtonToggleModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MdChipsModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MdIconModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MdProgressSpinnerModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["v" /* MdProgressBarModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["w" /* MdDialogModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["x" /* MdTooltipModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["y" /* MdSnackBarModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["z" /* MdTableModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MdSortModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MdPaginatorModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MdButtonModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdCheckboxModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdAutocompleteModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDatepickerModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MdInputModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MdRadioModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MdSelectModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MdSliderModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MdSlideToggleModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MdMenuModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MdSidenavModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MdToolbarModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MdListModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MdGridListModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MdCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MdTabsModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MdExpansionModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MdButtonToggleModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MdChipsModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MdIconModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MdProgressSpinnerModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["v" /* MdProgressBarModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["w" /* MdDialogModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["x" /* MdTooltipModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["y" /* MdSnackBarModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["z" /* MdTableModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MdSortModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MdPaginatorModule */]],
        })
    ], MaterialModule);
    return MaterialModule;
}());

//# sourceMappingURL=material.module.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyNewComponentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MyNewComponentComponent = /** @class */ (function () {
    function MyNewComponentComponent() {
    }
    MyNewComponentComponent.prototype.ngOnInit = function () {
    };
    MyNewComponentComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
            selector: 'app-my-new-component',
            template: __webpack_require__(191),
            styles: [__webpack_require__(186)]
        }),
        __metadata("design:paramtypes", [])
    ], MyNewComponentComponent);
    return MyNewComponentComponent;
}());

//# sourceMappingURL=my-new-component.component.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)(false);
// imports


// module
exports.push([module.i, ".floor{\r\n  width:100%;\r\n  height:100%;\r\n  background: #c94b4b;  /* fallback for old browsers */  /* Chrome 10-25, Safari 5.1-6 */\r\n  background: linear-gradient(to right, #4b134f, #c94b4b); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\r\n  overflow: hidden;\r\n  position:fixed;\r\n}\r\n\r\n\r\n.watermark{\r\n  margin-left: 10px;\r\n  position: fixed;\r\n  bottom:0;\r\n  height: 100px;\r\n  width: 100px;\r\n  opacity: 0;\r\n  -webkit-animation-name: fadeOut;\r\n          animation-name: fadeOut;\r\n  -webkit-animation-duration: .5s;\r\n          animation-duration: .5s;\r\n  z-index: 20;\r\n}\r\n\r\n.watermark:hover{\r\n  opacity:1;\r\n  -webkit-animation-name: fadeIn;\r\n          animation-name: fadeIn;\r\n  -webkit-animation-duration: 1s;\r\n          animation-duration: 1s;\r\n}\r\n\r\n.wide{\r\n  display: block;\r\n}\r\n\r\n.wide.mat-form-field{\r\n  width:unset;\r\n}\r\n\r\n.lighter{\r\n\r\n  margin-top: 40%;\r\n  padding: 0;\r\n}\r\n\r\n.welcome{\r\n  margin-top: 15%;\r\n  text-align: center;\r\n  color: white;\r\n}\r\n\r\n.welcome span{\r\n  color:pink;\r\n}\r\n\r\n.welcome p{\r\n  font-weight: bold;\r\n}\r\n\r\n.logo{\r\n  position: relative;\r\n  bottom:0;\r\n}\r\n\r\n.biggerButton{\r\n  \r\n  font-size: xx-large;\r\n}\r\n\r\n@-webkit-keyframes fadeIn {\r\n  0%   {opacity:0}\r\n  100% {opacity:1}\r\n}\r\n\r\n@keyframes fadeIn {\r\n  0%   {opacity:0}\r\n  100% {opacity:1}\r\n}\r\n@-webkit-keyframes fadeOut {\r\n  0%   {opacity:1}\r\n  100% {opacity:0}\r\n}\r\n@keyframes fadeOut {\r\n  0%   {opacity:1}\r\n  100% {opacity:0}\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 189:
/***/ (function(module, exports) {

module.exports = "<title>{{title}}</title>\n<router-outlet></router-outlet>"

/***/ }),

/***/ 190:
/***/ (function(module, exports) {

module.exports = "<div class='floor'></div>\r\n<div *ngIf='!rolling'  (mousemove)='mouseMove($event)' >\r\n\r\n    <div class='desk' [ngStyle]=\"shadowStyle\" *ngIf  ='!test'>\r\n        <div class='left'>\r\n                <div class='welcome'>\r\n                        <h1>Welcome</h1>\r\n                        <p>My name is <span>Spencer J Richardson</span>. I am a web developer\r\n                            in the <span>Baltimore MD</span> area. I built this site from scratch using Angular4, take a look around!</p> \r\n                    </div>\r\n            <img class='logo' src='./assets/altlogo2.svg'>\r\n\r\n\r\n        </div>\r\n        <div class='right'>\r\n                        <div class='lighter'>\r\n                        <table class=\"example-full-width\" cellspacing=\"0\">\r\n                            <tr>\r\n                                <td>\r\n                                    <md-input-container class='wide'>\r\n                                        <input mdInput placeholder=\"username\">\r\n                                    </md-input-container>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>\r\n                                    <md-input-container class='wide' >\r\n                                        <input mdInput placeholder=\"password\" [(ngModel)]='password'>\r\n                                    </md-input-container>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>\r\n                                        <button class='biggerButton' (click)='login()' md-button color=\"primary\"> Login</button>\r\n                                </td>\r\n                            </tr>\r\n                        </table>\r\n                    </div>\r\n                    \r\n            <img style='max-height:45%;margin:auto;opacity:.1;float:left;' src='./assets/Work-in-progress.svg'>\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <div class='centerDesk' *ngIf = 'test'>\r\n            <md-card class=\"example-card\" *ngFor='let card of cards'>\r\n                    <md-card-header>\r\n                      <div md-card-avatar class=\"example-header-image\"></div>\r\n                      <md-card-title>Shiba Inu</md-card-title>\r\n                      <md-card-subtitle>Dog Breed</md-card-subtitle>\r\n                    </md-card-header>\r\n                    <img md-card-image src=\"./assets/altlogo.svg\" >\r\n                    <md-card-content>\r\n                      <p>\r\n                        The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\r\n                        A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\r\n                        bred for hunting.\r\n                      </p>\r\n                    </md-card-content>\r\n                    <md-card-actions>\r\n                      <button md-button>LIKE</button>\r\n                      <button md-button>SHARE</button>\r\n                    </md-card-actions>\r\n                  </md-card>\r\n                </div>\r\n</div>\r\n\r\n<div *ngIf='rolling' >\r\n        <youtube></youtube>        \r\n</div>\r\n\r\n   \r\n\r\n\r\n\r\n<img class='watermark' src='./assets/altlogo3.svg' (click)='reset()'>"

/***/ }),

/***/ 191:
/***/ (function(module, exports) {

module.exports = "<p>\n  my-new-component works!\n</p>\n"

/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(112);


/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(10);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Youtubes; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(snackBar) {
        this.snackBar = snackBar;
        this.shadowStyle = { 'box-shadow': '10px 10px 500px rgba(0, 0, 0, .5)' };
        this.loginTry = false;
        this.preRolling = false;
        this.rolling = false;
        this.test = false;
        this.position = 'right';
        this.cards = [1, 2, 3, 4, 5];
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        if (this.password == 'admin') {
            this.test = true;
        }
        else if (!this.loginTry && !this.preRolling) {
            this.loginTry = true;
            this.snackBar.open('Invalid Login Credentials', 'Try Again', {
                duration: 3000
            });
        }
        else if (this.loginTry && !this.preRolling) {
            this.preRolling = true;
            this.snackBar.open('Just kidding, you can\'t log in yet', 'ಠ_ಠ', {
                duration: 3000
            });
        }
        else {
            this.rolling = true;
            this.timeout = setTimeout(function () {
                _this.rolling = false;
                _this.preRolling = false;
                _this.loginTry = false;
            }, 212000);
        }
    };
    LoginComponent.prototype.reset = function () {
        clearTimeout(this.timeout);
        this.rolling = false;
        this.preRolling = false;
        this.loginTry = false;
        this.test = false;
    };
    LoginComponent.prototype.mouseMove = function (event) {
        var yVal = -1 * (event.screenY - (event.view.window.innerHeight / 2)) / 10;
        var xVal = -1 * (event.screenX - (event.view.window.innerWidth / 2)) / 10;
        var spread = Math.abs(yVal) + Math.abs(xVal) / 100;
        this.shadowStyle = {
            'box-shadow': xVal + 'px ' + yVal + 'px 500px ' + spread + 'px rgba(0, 0, 0, .5)'
        };
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__(190),
            styles: [__webpack_require__(185)],
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["C" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["C" /* MdSnackBar */]) === "function" && _a || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a;
}());


var Youtubes = /** @class */ (function () {
    function Youtubes(sanitizer) {
        this.sanitizer = sanitizer;
        this.video = { id: 'dQw4w9WgXcQ?autoplay=1' };
        this.baseUrl = 'https://www.youtube.com/embed/';
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl + this.video.id);
    }
    Youtubes = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
            selector: 'youtube',
            template: "    \n    <iframe width=\"100%\" height=\"100%\" [src]=\"url\" frameborder=\"0\" allowfullscreen></iframe>\n  ",
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["f" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["f" /* DomSanitizer */]) === "function" && _a || Object])
    ], Youtubes);
    return Youtubes;
    var _a;
}());

//# sourceMappingURL=login.component.js.map

/***/ })

},[229]);
//# sourceMappingURL=main.bundle.js.map