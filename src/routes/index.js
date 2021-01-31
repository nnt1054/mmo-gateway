import { Router } from 'express';
import oktaRoutes from './okta';
import publicRoutes from './public';
import dashboard from './dashboard';
import users from './users';

export default () => {
	const app = Router();
	oktaRoutes(app);
	publicRoutes(app);
	dashboard(app);
	users(app);
	return app
}