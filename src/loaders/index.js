import expressLoader from './express';
import sequelizeLoader from './sequelize';
import logger from './logger';

export default async ( app ) => {

	sequelizeLoader()
	const sequelize = require('/models');
	logger.info('✌️ DB loaded and connected!');

	await expressLoader( app );
	logger.info('✌️ Express loaded');

}