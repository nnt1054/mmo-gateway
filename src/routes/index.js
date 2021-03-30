import path from 'path'
import express from 'express';

import oktaRoutes from './okta';
import publicRoutes from './public';
import blogRoutes from './blog';

export default () => {
	const app = express.Router();

	oktaRoutes(app);
	publicRoutes(app);
	blogRoutes(app);

	app.use('/play', express.static(path.join(__dirname, '../client-build')));
	app.get('/play', (req, res) => {
	  res.sendFile(path.join(__dirname, '../client-build', 'index.html'))
	})

	return app
}