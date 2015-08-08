app.directive('talChoice', function() { 
  return { 
    restrict: 'E',
		scope: {
			info: '='	
		},
    templateUrl: '/js/directives/talentChoice.html'
  }; 
});
