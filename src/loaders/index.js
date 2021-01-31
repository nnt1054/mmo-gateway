import expressLoader from './express';
import logger from './logger';

export default async ( app ) => {
	await expressLoader( app );
	logger.info('✌️ Express loaded');
}