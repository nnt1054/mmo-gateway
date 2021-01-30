var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	context = {
		title: 'Express',
		isAuthenticated: req.isAuthenticated(),
		user: req.userContext,
	}
	res.render('index', context);
});

module.exports = router;
