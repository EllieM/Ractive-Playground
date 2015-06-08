
var Config = (function () {

  // *** private fields
  var _something = null;

  // *** private methods
  var _privateMethod = function (param) {
  		_something = 'abc';
  		console.log('param: ', param + ' ' + _something);
  };

  // *** public api
  var getBentleyConfig = function (param) {
  		console.log('param: ', param);

       $.get('config/' + param)
	        .done(function (data) {
	            
	            console.log('File load complete');
	            console.log(jsyaml.load(data));

	            var jsonString = JSON.stringify(data);
	            console.log(jsonString);
	            console.log($.parseJSON(jsonString));        
	        });  		

  };

  var getGISConfig = function (param) {
  		_privateMethod(param);
  };


  var init = function () {

    var ractive = new Ractive({
      el: '#container',
      template: '#template',

      data: { greeting: 'Hello', name: 'world', desc: 'desc',  title: 'title'}
    });    		

  };  
  
  return {
     initModule: init,
     getBentleyConfig: getBentleyConfig,
     getGISConfig: getGISConfig
  };

})();