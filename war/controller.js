app.controller('MainCtrl', function($scope, $window) {
  
  // chaine de caractère accueil
  $scope.name = 'aoc';
  $scope.title = 'Alors on connait ou pas ?';
  $scope.jouer = 'Jouer';
  $scope.score = 'Afficher les Scores';
  $scope.regle = "Règle du jeu";
  $scope.connexion = "Se Connecter";
  $scope.aocs = aocs;
  
  //affichage des div
  $scope.affichageaccueil = 1;
  $scope.jeuencours = 0;
  $scope.scoreencours = 0;
  
  //définition du joueur
  $scope.user = {
    name: 'Audrey',
    score: 0
  };
  
  $scope.lancerJeu = function(){
    $scope.affichageaccueil = 0;
    $scope.jeuencours = 1;
  };
  
  $scope.lancerScore = function(){
    $scope.affichageaccueil = 0;
    $scope.scoreencours = 1;
  };
  
   $scope.random = function() {
    return Math.floor(Math.random() * (2 - 0));
  };


  // récupérer les scores
  // little hack to be sure that apis.google.com/js/client.js is loaded
  // before calling
  // onload -> init() -> window.init() -> then here
  $window.init = function() {
    console.log("windowinit called");
    var rootApi = 'http://1-dot-alorsonconnaitoupas.appspot.com/_ah/api/';
    gapi.client.load('scoreendpoint', 'v1', function() {
      console.log("score api loaded");
      gapi.client.scoreendpoint.listScore().execute(
        function(resp) {
          $scope.scores=resp.items;
          $scope.$apply();
          console.log(resp);
        });
    }, rootApi);
  }
  
  

  
});

var aocs = [
  {
    name: 'Camembert',
    type: 0,
    description: '',
    localisation: '',
    answer:0
  },
  {
    name: 'Morbier',
    type: 0,
    description: '',
    localisation: '',
    answer:0
  },
  {
    name: 'Vin',
    type: 0,
    description: '',
    localisation: '',
    answer:1
  },
  ];