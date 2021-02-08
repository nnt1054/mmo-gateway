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

	router.get("/authorization-code/callback", (req, res) => {
		res.redirect("/dashboard");
	});

	router.get("/logout/callback", (req, res) => {
		req.logout();
		res.redirect("/");
	});

}