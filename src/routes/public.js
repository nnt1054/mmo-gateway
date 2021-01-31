import { Router } from 'express';

const router = Router();

export default (app) => {
	app.use('/', router);

	/* GET home page. */
	router.get('/', function(req, res, next) {
		var context = {
			title: 'Express',
			isAuthenticated: req.isAuthenticated(),
			user: req.userContext,
		}
		res.render('index', context);
	});
}