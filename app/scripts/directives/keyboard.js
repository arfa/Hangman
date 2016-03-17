'use strict';

/**
 * @ngdoc directive
 * @name hangmanApp.directive:keyboard
 * @description
 * # keyboard
 */
angular.module('hangmanApp')
  .directive('keyboard', function () {
    return {
    	restrict: 'A',
    	link: function postLink(scope, element, attrs) {
	    	document.onkeyup = function(e) {
	    		console.log(e);
			    var whichkey = String.fromCharCode(e.keyCode);
			    if (whichkey.match(/^[a-zA-Z]*$/)) {
				    var btns = angular.element(element).find('button');
				    for (var i = btns.length - 1; i >= 0; i--) {
				    	var btn = angular.element(btns[i]);
				    	if (btn.text().toLowerCase()===whichkey.toLowerCase()) {
				    		btn.triggerHandler('click');	
				    		break;
				    	}
				    }
				}
			};
		}
    };
  });
