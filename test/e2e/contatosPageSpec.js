var ContatosPage = require('./pages/contatosPage');

describe('Pagina principal', function () {
	var pagina = new ContatosPage();

	beforeEach(function () {
		pagina.visitar();
	});

	it('Deve estar logado', function() {
		pagina.getUsuarioLogado().then(function (texto) {
			expect(texto.trim().length).toBeGreaterThan(0);
		});
	});

	it('Deve remover um contato da lista', function() {
		var _totalAntes = pagina.getTotalDeItensDaLista();
		pagina.removerPrimeiroItemDaLista();
		var _totalDepois = pagina.getTotalDeItensDaLista();

		expect(_totalDepois).toBeLessThan(_totalAntes);
	});
});