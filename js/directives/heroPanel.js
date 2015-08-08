app.directive('heroPanel', function() { 
  return { 
    restrict: 'E',
		scope: {
			info: '='	
		},
    templateUrl: '/js/directives/heroPanel.html'
  }; 
});
