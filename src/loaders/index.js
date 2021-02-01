import expressLoader from './express';
import sequelizeLoader from './sequelize';
import logger from './logger';

export default async ( app ) => {
	const sequelize = await sequelizeLoader();
	logger.info('✌️ DB loaded and connected!');

	await expressLoader( app );
	logger.info('✌️ Express loaded');
}