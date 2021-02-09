import { Client } from 'pg';

import config from '/config';
import logger from './logger';

export default async () => {

	const client = new Client({
		database: 'postgres',
		host: config.pg.db_host,
		port: config.pg.db_port,
		user: config.pg.db_username,
		password: config.pg.db_password
	})

	client.connect()
		.then(() => {
			client.query(`CREATE DATABASE ${ config.pg.db_name }`,
				(err) => logger.debug(`${ config.pg.db_name } db already exists`)
			)
		})
		.then( async () => {
			client.end();
		})
		.catch(err => logger.error(err))

}