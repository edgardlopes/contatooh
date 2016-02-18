exports.config = {
	specs: ['../test/e2e/**/*.js'],
	onPrepare: function () {
		//para testar em paginas que usar o angular nao usa driver
		browser.get('http://localhost:3000');
		browser.findElement(by.id('entrarGit')).click();
		
		browser.driver.findElement(by.id('login_field')).sendKeys('edgard-rodrigo@hotmail.com');
		browser.driver.findElement(by.id('password')).sendKeys('erl120895');
		browser.driver.findElement(by.name('commit')).click();
	}
};