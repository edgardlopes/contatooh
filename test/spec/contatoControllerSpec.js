describe('contatoController', function () {
	var $scope;
	var $httpBackend;

	beforeEach(function () {
		module('contatooh');
		inject(function ($injector, _$httpBackend_) {
			$scope = $injector.get('$rootScope').$new();
			$httpBackend = _$httpBackend_;
			$httpBackend.when('GET', '/contatos/1').respond({_id: '1'});
			$httpBackend.when('GET', '/contatos').respond([{}]);
		});
	});

	//teste
	it('Deve criar um contato vazio' +
		' quando nenhum parametro de rota for passado', inject(function ($controller) {
		$controller('contatoController', {'$scope': $scope});
		expect($scope.contato._id).toBeUndefined();			
	}));

	//teste
	it('Deve preencher o contato quando o parametro de rota for passado', inject(function ($controller) {
		var params = {
			'$routeParams': {id: 1},
			'$scope': $scope
		};
		
		$controller('contatoController', params);
		$httpBackend.flush();
		expect($scope.contato._id).toBeDefined();
	}));

});