var ContatoPage = require('./pages/contatoPage');

describe('Cadastro de contatos', function () {
	var pagina = new ContatoPage();

	beforeEach(function () {
		pagina.visitar();
	});


	it('Deve cadastrar um contato', function() {
		var random = Math.floor((Math.random() * 10000000) + 1);
		var nome = 'teste' + random;
		var email = 'teste@email' + random;

		pagina.digitarNome(nome);
		pagina.digitarEmail(email);
		pagina.selecionarPrimeiraEmergenciaDaLista();
		pagina.salvar();

		expect(pagina.obterMensagem()).toContain('sucesso');

	});

});