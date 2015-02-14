;(function($){

	function pluginName(el, options){

		var base = this;

		base.$el = $(el);
		base.defaultOptions = {
			propertyName: 'value'
		};
        
		base.options = $.extend({}, base.defaultOptions, options);

		base.init = function(){
			// initialization logic here
		};

		base.init();

	};
    
	$.fn.pluginName = function(options){
		return this.each(function(){
			(new pluginName(this, options));
		});
	};

})(jQuery);
