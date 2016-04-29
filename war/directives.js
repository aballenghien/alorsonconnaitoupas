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
