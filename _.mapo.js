define(['underscore'], function(undef) {

	function iterArray(res, iter, value, name) {
		res[ value ] = iter(value, name);
	}

	function iterObject(res, iter, value, name) {
		res[ name ] = iter(value, name);
	}

	_.mixin({
		mapo: function(obj, iter) {
			var res = {},
				_iter = _.isArray(obj) ? iterArray : iterObject;
			
			_.each(obj, _.partial(_iter, res, iter));

			return res;
		}
	})
});