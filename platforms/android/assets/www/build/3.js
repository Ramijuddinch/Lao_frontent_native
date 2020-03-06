webpackJsonp([3],{

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThankyouPageModule", function() { return ThankyouPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__thankyou__ = __webpack_require__(353);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ThankyouPageModule = /** @class */ (function () {
    function ThankyouPageModule() {
    }
    ThankyouPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__thankyou__["a" /* ThankyouPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__thankyou__["a" /* ThankyouPage */]),
            ],
        })
    ], ThankyouPageModule);
    return ThankyouPageModule;
}());

//# sourceMappingURL=thankyou.module.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThankyouPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ThankyouPage = /** @class */ (function () {
    function ThankyouPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.orderid = this.navParams.get("orderID");
    }
    ThankyouPage.prototype.gotohome = function () {
        this.navCtrl.setRoot('TabPage');
    };
    ThankyouPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-thankyou',template:/*ion-inline-start:"C:\Users\CSS\Desktop\LAO\src\pages\thankyou\thankyou.html"*/'\n\n\n\n<ion-content padding>\n\n<img class="orderimage" src="assets/imgs/order.png">\n\n<span>\n\n    <p class="order">Order Id : {{orderid }}</p>\n\n    <p class="title" >Order Placed Successfully </p>\n\n</span>\n\n</ion-content>\n\n<ion-footer no-border>\n\n    <button ion-button full text-uppercase  class="footer-button" (click)=\'gotohome()\'>Go to home</button>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\CSS\Desktop\LAO\src\pages\thankyou\thankyou.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], ThankyouPage);
    return ThankyouPage;
}());

//# sourceMappingURL=thankyou.js.map

/***/ })

});
//# sourceMappingURL=3.js.map