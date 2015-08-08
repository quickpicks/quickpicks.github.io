app.controller('MainCtrl', ['$scope', '$location', '$route', '$modal', 'heroService', function($scope, $location, $route, $modal, heroService){ 
	$scope.curPath = $location.path();
	$scope.getPath = function(){
		$scope.curPath = $location.path();
	};
	$scope.goto = function (path){
		$location.path(path);
	};
	
	var savedHeroes = [];
	$scope.heroes = heroService;
	$scope.selected = false;
	$scope.curHero = '';
	$scope.lastUpdate = new Date(2015, 7, 8, 1, 24);
	
	$scope.setHero = function(hero){
			$scope.curHero = hero;
		$scope.selected = true;
	};	
	
	$scope.open = function (size) {	
    $scope.modalInstance = $modal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'views/viewModal.html',
      controller: 'ModalCtrl',
      size: size,
      resolve: {
        items: function () {
        }
      }
    });	
		$scope.modalInstance.result.finally(function(){
			saveCookie();
		});
	};
	
	//Handle Cookies
	var saveCookie = function(){
		for (var i = 0, len = $scope.heroes.length; i < len; i++){
			savedHeroes.push($scope.heroes[i].show);
		}
			Cookies.set('Heroes', savedHeroes);
	};
	
	var loadCookie = function(){
		var cook = Cookies.getJSON('Heroes');
		if (typeof cook != 'undefined'){
			for (var i = 0, len = $scope.heroes.length; i < len; i++){
				$scope.heroes[i].show = cook[i];	
			}
		} else {
			 console.log('COOKIES UNDEFINED');	
			}
	};
	
	loadCookie();
}]);
//functions
