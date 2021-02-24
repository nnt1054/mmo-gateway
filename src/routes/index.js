import { Router } from 'express';
import oktaRoutes from './okta';
import publicRoutes from './public';
import blogRoutes from './blog';

export default () => {
	const app = Router();

	oktaRoutes(app);
	publicRoutes(app);
	blogRoutes(app);

	return app
}