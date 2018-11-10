"use strict";var __decorate=this&&this.__decorate||function(t,e,r,o){var s,n=arguments.length,i=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,r,o);else for(var a=t.length-1;0<=a;a--)(s=t[a])&&(i=(n<3?s(i):3<n?s(e,r,i):s(e,r))||i);return 3<n&&i&&Object.defineProperty(e,r,i),i};Object.defineProperty(exports,"__esModule",{value:!0});var core_1=require("@angular/core"),http_1=require("@angular/common/http"),LoginService=function(){function t(t,e){this.http=t,this.router=e,this.REST_SERVICE_URI="http://localhost:8081/itaca/user",this.factory={getAllUsers:this.getAllUsers,getLanguages:this.getLanguages,createUser:this.createUser,updateUser:this.updateUser,deleteUser:this.deleteUser,doLogin:this.doLogin,changePassword:this.changePassword},this.url="http://localhost:8081/itaca/odata/PER_BANK"}return Object.defineProperty(t.prototype,"isLoggedIn",{get:function(){return"true"===sessionStorage.getItem("sessionActive")&&(this.loggedIn=!0),this.loggedIn},enumerable:!0,configurable:!0}),t.prototype.logout=function(){this.loggedIn=!1,sessionStorage.clear(),localStorage.clear(),this.router.navigate([""])},t.prototype.getAllUsers=function(){return this.http.get(this.REST_SERVICE_URI+"/")},t.prototype.getLanguages=function(){this.http.get(this.REST_SERVICE_URI+"/getLanguages").subscribe(function(t){return t})},t.prototype.createUser=function(t){this.http.get(this.REST_SERVICE_URI+"/",t).subscribe(function(t){return t})},t.prototype.updateUser=function(t,e){this.http.put(this.REST_SERVICE_URI+"/"+e,t).subscribe(function(t){return t})},t.prototype.deleteUser=function(t){this.http.delete(this.REST_SERVICE_URI+"/"+t).subscribe(function(t){return t})},t.prototype.doLogin=function(t,e){this.logout();var r=new http_1.HttpHeaders,o="username="+t+"&password="+e+"&grant_type=password";return r=(r=r.append("Authorization","Basic aXRhY2EtY2xpZW50OiQyYSQwNCRlL2MxL1Jmc1d1VGhhV0ZDcmNDdUplb3l2d0NWMFVSTi82UG45WkZscnRJV2FVL3ZqL0JmRw==")).append("Content-Type","application/x-www-form-urlencoded"),this.http.post("http://localhost:8081/itaca/oauth/token",o,{headers:r})},t.prototype.changePassword=function(t){this.http.delete(this.REST_SERVICE_URI+"/changePassword",t).subscribe(function(t){return t})},t=__decorate([core_1.Injectable()],t)}();exports.LoginService=LoginService;