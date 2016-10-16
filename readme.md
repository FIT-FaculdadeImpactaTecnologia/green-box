#Workify Dashboard#

##Requisitos##

##Configurações##

Crie o seguinte arquivo *public/assets/js/env.js*

	var env = {
	        ENV: 'local',
	        API_URL: 'http://api.workify.com.br/',
	        ASSETS_URL: 'https://s3-sa-east-1.amazonaws.com/lab123-workify/local/assets/',
	        UPLOADS_URL: 'https://s3-sa-east-1.amazonaws.com/lab123-workify/local/uploads/'
	};

## Start! ##
Instale as depências do projeto usando o Bower:

	bower install
	
Para compilar as depências use o Gulp

	gulp
	
Se quiser, deixe que o gulp compile automáticamente após alteração em algum script ou estilo

	gulp watch
	
## Resource Factory ##

Foi desenvolvida uma fábrica de recursos para já vir por padrão alguns recursos de consulta, autocomplete e consulta or filhos. Basta adicionar a propriedade *resource* e enviar para a fábrica.
	
    $wkRiskAnalysis.service('RiskService', ['Risk', 'ServiceFactory',
    function(Risk, ServiceFactory) {
	    var _this = this;
	    
	    _this.resource = Risk;
	    
	    /* Seu código */
	    
	    return new ServiceFactory(_this);
	}]);
	
## Service Factory ##

A fábrica de serviços trás por padrão alguns recursos de consulta, autocomplete e consulta or filhos. Basta adicionar a propriedade *resource* e enviar para a fábrica.
	
    $wkRiskAnalysis.service('RiskService', ['Risk', 'ServiceFactory',
    function(Risk, ServiceFactory) {
	    var _this = this;
	    
	    _this.resource = Risk;
	    
	    /* Seu código */
	    
	    return new ServiceFactory(_this);
	}]);