import { Router } from 'express';
import articlePath from '/articles';

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
		res.render('pages/index', context);
	});

	router.get('/players', function(req, res, next) {
		var context = {
			title: 'Express',
			isAuthenticated: req.isAuthenticated(),
			user: req.userContext,
		}
		res.render('pages/players', context);
	});

	router.get('/skills', function(req, res, next) {
		var context = {
			title: 'Express',
			isAuthenticated: req.isAuthenticated(),
			user: req.userContext,
		}
		res.render('pages/skills', context);
	});

}