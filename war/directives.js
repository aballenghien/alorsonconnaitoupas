app.directive('jeu', function() { 
  return { 
    restrict: 'E', 
    scope: {
      prod: '=',
      user: '='
    }, 
    templateUrl: 'jeu.html',
    link: function(scope, element, attrs){
      scope.resultat = 0,
      scope.resultatBoire = function(){
        if (scope.prod.answer === 1){
          scope.resultat = 1;
          scope.user.score += 1;
        }else{
          scope.resultat = 0;
        }
      },
      
      scope.resultatManger = function(){
        if (scope.prod.answer === 0){
         scope.resultat = 1;
         scope.user.score +=1;
        }else{
          scope.resultat = 0;
        }
      }
    } 
  }
});

app.directive('geo', ['$compile', function($compile) { 
	  return { 
	    restrict: 'E', 
	    scope: {}, 
	    templateUrl: 'geo.svg',
	    link: function (scope, element, attrs) {

	    	var deps = element[0].children;
	    	for (var i = 0; i < deps.length; i++) {
	    	      deps[i].setAttribute("ng-click", "clickHandler()");

	    	    }
	    	scope.clickHandler=function(){
	    		console.log('test');
	    	}
	    	
	    	}
	  }
}]);


