import { Router } from 'express';
import middlewares from '/middlewares';

const router = Router();

export default (app) => {
	app.use('/dashboard', middlewares.loginRequired, router);

	/* GET users listing. */
	router.get('/', function(req, res, next) {
		var context = {
			title: 'Express',
			isAuthenticated: req.isAuthenticated(),
			user: req.userContext,
		}
		res.render('index', context);
	});
}