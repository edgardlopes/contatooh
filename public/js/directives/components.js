angular.module('contatooh');

angular.module('contatooh').run(function ($templateCache) {
	$templateCache.put('views/panel.html', '<div class="panel panel-default"><div class="panel-heading"><h3 class="panel-title">{{title}}</h3></div><div class="panel-body" ng-transclude></div></div>');
});


angular.module('contatooh').directive('panel', function(){
	var directive = {};

	directive.restrict = 'EA';
	directive.scope = {title: '@'};
	directive.transclude = true;
	directive.templateUrl = 'views/panel.html';

	return directive;
});

angular.module('contatooh').directive('buttonWarning', function () {
		
	var directive = {};

	directive.restrict = 'E';
	directive.scope = {
		name: '@',
		action: '&'
	};
	directive.template = '<button ng-click="action()" class="btn btn-warning">{{name}}</button>';

	return directive;
});

