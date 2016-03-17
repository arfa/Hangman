"use strict";var underscore=angular.module("underscore",[]);underscore.factory("_",function(){return window._}),angular.module("hangmanApp",["ngAnimate","ngRoute","underscore"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).otherwise({redirectTo:"/"})}]),angular.module("hangmanApp").filter("letters",["_",function(a){return function(b){return a.map(b.split(""),function(a){return{name:a,chosen:!1}})}}]),angular.module("hangmanApp").controller("MainCtrl",["lettersFilter","dictionaryProvider","_",function(a,b,c){this.missesAllowed=b.getMissesAllowed(),this.revealSecret=function(){c.each(this.secretWord,function(a){a.chosen=!0})},this.checkForEndOfGame=function(){this.win=c.reduce(this.secretWord,function(a,b){return a&&b.chosen},!0),this.win||this.numMisses!==this.missesAllowed||(this.lost=!0,this.revealSecret())},this.reset=function(){c.each(this.letters,function(a){a.chosen=!1}),this.secretWord=a(b.getRandomWord()),this.numMisses=0,this.win=!1,this.lost=!1},this.reset(),this["try"]=function(a){a.chosen=!0;var b=!1;c.each(this.secretWord,function(c){a.name.toUpperCase()===c.name.toUpperCase()&&(c.chosen=!0,b=!0)}),b||this.numMisses++,this.checkForEndOfGame()},this.letters=a("abcdefghijklmnopqrstuvwxyz")}]),angular.module("hangmanApp").provider("dictionaryProvider",function(){function a(){this.getMissesAllowed=function(){return b},this.getRandomWord=function(){var a=Math.floor(Math.random()*c.length);return c[a]}}var b=7,c=["Rails","AngularJS","Bootstrap","Ruby","JavaScript","authentication","function","array","object","sublime","github","agile","route","database","model","view","controller","terminal","array","data","inheritance","Heroku","scope","closure"];this.setMissesAllowed=function(a){b=a},this.setMissesAllowed=function(a){a=a},this.$get=function(){return new a}}),angular.module("hangmanApp").run(["$templateCache",function(a){a.put("views/main.html",'<div class="container-fluid"> <div class="well"> <div class="secretWord"> <ul class="list-inline"> <li ng-repeat="letter in main.secretWord"> <span ng-hide="letter.chosen">_</span> <span ng-show="letter.chosen">{{ letter.name }}</span> </li> </ul> <div class="letters"> <ul class="list-inline"> <li ng-repeat="letter in main.letters"> <button class="btn btn-primary letter-button" ng-disabled="letter.chosen || main.lost" ng-click="main.try(letter);">{{letter.name}}</button> </li> </ul> </div> <p> <span ng-hide="main.win || main.lost">Il vous reste {{ main.missesAllowed - main.numMisses }} coups.</span> <span ng-show="main.win">Bien joué!</span> <span ng-show="main.lost">Vous avez perdu, essaiez encore une fois!</span> </p> </div> </div> </div> <button ng-click="main.reset();" class="btn btn-success btn-large">New Game</button>')}]);