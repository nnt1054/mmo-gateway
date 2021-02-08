import { Router } from 'express';
import middlewares from '/middlewares';

const router = Router();

export default (app) => {
	app.use('/users', middlewares.loginRequired, router);

	// // Log a user out
	// router.get("/logout", (req, res) => {
	// 	res.redirect("/");
	// });

	router.get('/profile', (req, res) => {
		res.json(req.userContext)
	})

}