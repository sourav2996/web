module.exports = function() {

	return {
		home: function(req, res, next) {
			res.render('basic/index');
		},
		signup: function(req, res, next) {
			res.render('basic/signup');
		}
	}

}
