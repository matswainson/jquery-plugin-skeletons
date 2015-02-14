;(function($){

	$.pluginName = function(options){

		var base = this;

		base.defaultOptions = {
			propertyName: 'value'
		};
        
		base.options = $.extend({}, base.defaultOptions, options);

		base.init = function(){
			// initialization logic here
		};

		base.init();

	};

})(jQuery);
