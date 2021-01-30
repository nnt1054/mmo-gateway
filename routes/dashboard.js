var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.render('dashboard', {
		title: req.userContext.userinfo.name,
	});
});

module.exports = router;
