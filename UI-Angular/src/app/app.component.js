"use strict";var __decorate=this&&this.__decorate||function(e,t,o,r){var n,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,o,r);else for(var c=e.length-1;0<=c;c--)(n=e[c])&&(i=(s<3?n(i):3<s?n(t,o,i):n(t,o))||i);return 3<s&&i&&Object.defineProperty(t,o,i),i};Object.defineProperty(exports,"__esModule",{value:!0});var core_1=require("@angular/core"),AppComponent=function(){function e(e){this.loginService=e,this.title="Itaca",this.UserModel={id:null,username:"",password:"",confirmationPassword:"",firstName:"",lastName:"",email:"",companyCode:"",description:"",blockedUser:!1,activeUser:!0,userLanguage:{id:3,code:"NL",value:"Dutch"}}}return e.prototype.ngOnInit=function(){this.isLoggedIn=this.loginService.isLoggedIn,this.UserModel.username=sessionStorage.getItem("username"),this.UserModel.password=sessionStorage.getItem("password")},e.prototype.onLogout=function(){this.loginService.logout()},e=__decorate([core_1.Component({selector:"app-root",templateUrl:"./app.component.html",styleUrls:["./app.component.css"]})],e)}();exports.AppComponent=AppComponent;