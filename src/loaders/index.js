import expressLoader from './express';
import databaseLoader from './database';
import logger from './logger';

export default async ( app ) => {

	databaseLoader()
	const sequelize = require('/models');
	logger.info('✌️ DB loaded and connected!');

	await expressLoader( app );
	logger.info('✌️ Express loaded');

}