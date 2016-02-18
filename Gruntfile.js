module.exports = function (grunt) {

	grunt.initConfig({
		//configuracoes da task contrib-copy
		copy: {
			project: {
				//indica que vai copiar o diretorio de trabalho (cwd)
				expand: true,
				//o diretorio de trabalho é onde esta o arquivo Gruntfile.js
				cwd: '.',
				src: ['**', '!Gruntfile.js', '!package.json', '!bower.json'],
				dest: 'dist'
			}
		},
		//configuracao da task contrib-clean
		clean: {
			dist: {
				src: 'dist'
			}
		},
		//configurando task usemin
		//usemin: faz os arquivos html apontarem para os novos arquivos min.js e min.css
		usemin: {
			html: 'dist/app/views/**/*.ejs'
		},
		//useminPrepare: gera configuracoes dinamicas para concat, uglify e cssmin
		useminPrepare: {
			//aponta para o novo diretorio que os arquivos serao criados
			options: {
				root: 'dist/public',
				dest: 'dist/public'
			},
			html: 'dist/app/views/**/*.ejs'
		},
		//configuracao de ng-annotate
		ngAnnotate: {
			scripts:{
				expand: true,
				src: ['dist/public/js/**/*.js']
			}
		}
	});	
	

	//registrando task default, executao usando grunt sem paramentro
	grunt.registerTask('default', ['dist', 'minifica']);
	//registrando novas tasks, criando uma especie de atalho para as tasks
	grunt.registerTask('dist', ['clean', 'copy']);
	//registrando as tasks de concatenacao e minificacao
	grunt.registerTask('minifica', ['ngAnnotate', 'useminPrepare', 'concat', 'uglify', 'cssmin', 'usemin']);


	//plugin para fazer copia do diretorio
	grunt.loadNpmTasks('grunt-contrib-copy');
	//plugin para apagar um diretorio
	grunt.loadNpmTasks('grunt-contrib-clean');
	//plugin para concatenar arquivos js e css
	grunt.loadNpmTasks('grunt-contrib-concat');
	//plugin para minificar arquivos js
	grunt.loadNpmTasks('grunt-contrib-uglify');
	//plugin para minificar arquivos css
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	//plugin que analisa pagina html e gera configuracoes para concatenacao e minificacao dos arquivos
	grunt.loadNpmTasks('grunt-usemin');
	//plugin que anota as dependencias do angularJS
	grunt.loadNpmTasks('grunt-ng-annotate');

};