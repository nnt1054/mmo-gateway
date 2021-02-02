import { Router } from 'express';
import oktaRoutes from './okta';
import publicRoutes from './public';
import dashboardRoutes from './dashboard';
import userRoutes from './users';

export default () => {
	const app = Router();

	oktaRoutes(app);
	publicRoutes(app);
	dashboardRoutes(app);
	userRoutes(app);

	return app
}