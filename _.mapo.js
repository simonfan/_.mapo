define(['underscore'], function(undef) {
	_.mixin({
		mapo: function(obj, iter) {
			var res = {};
			
			_.each(obj, function(value, name) {
				res[ name ] = iter(value, name);
			});

			return res;
		}
	})
});