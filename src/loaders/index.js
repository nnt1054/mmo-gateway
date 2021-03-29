import expressLoader from './express';
import databaseLoader from './database';
import logger from './logger';

export default async ( app ) => {

	// databaseLoader() // enable when running with pg instead of sqlite
	const sequelize = require('/models');
	logger.info('✌️ DB loaded and connected!');

	await expressLoader( app );
	logger.info('✌️ Express loaded');

}