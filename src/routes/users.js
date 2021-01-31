import { Router } from 'express';
import middlewares from '/middlewares';

const router = Router();

export default (app) => {
	app.use('/users', router);

	// Log a user out
	router.get("/logout", (req, res) => {
		req.logout();
		res.redirect("/");
	});
}