var app = angular.module('app',['ngRoute', 'ui.bootstrap']);
	 app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/viewMain.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

app.run(function($rootScope, $templateCache) {
   $rootScope.$on('$viewContentLoaded', function() {
      $templateCache.removeAll();
   });
});

app.controller('ModalCtrl', ['$scope', '$modalInstance', 'heroService', function($scope, $modal, heroService){ 
	$scope.heroes = heroService;
	$scope.changeTrue = function(){
		for (var i = 0, len = $scope.heroes.length; i < len; i++){
			$scope.heroes[i].show = true;
		}
	};
}]);


//Other information
var assassin = {
	name: 'Assassin',
	image: '/img/roleImage/IconAssassin.png'
}
var specialist = {
	name: 'Specialist',
	image: '/img/roleImage/IconSpecialist.png'
}
var support = {
	name: 'Support',
	image: '/img/roleImage/IconSupport.png'
}
var warrior = {
	name: 'Warrior',
	image: '/img/roleImage/IconWarrior.png'
}



var map = [
	{
		name: 'Battlefield of Eternity',
		image: '/img/mapImage/bg_battlefield-of-eternity.jpg'
	},
	{
		name: 'Tomb of the Spider Queen',
		image: '/img/mapImage/bg_tomb-of-the-spider-queen.jpg'
	},
	{
		name: 'Sky Temple',
		image: '/img/mapImage/bg_sky-temple.jpg'
	},
	{
		name: 'Garden of Terror',
		image: '/img/mapImage/garden-of-terror.jpg'
	},
	{
		name: "Blackheart's Bay",
		image: '/img/mapImage/bg_blackhearts-bay.jpg'
	},
	{
		name: 'Dragon Shire',
		image: '/img/mapImage/bg_dragon-shire.jpg'
	},
	{
		name: 'Haunted Mines',
		image: '/img/mapImage/bg_haunted-mines.jpg'
	},
	{
		name: 'Cursed Hollow',
		image: '/img/mapImage/bg_cursed-hollow.jpg'
	}
];