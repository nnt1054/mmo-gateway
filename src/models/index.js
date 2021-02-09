import { Sequelize } from 'sequelize';

import config from '/config';
import logger from '/loaders/logger';

import User from './user'

// const sequelize = new Sequelize(config.pg.db_name, config.pg.db_username, config.pg.db_password, {
// 	host: config.pg.db_host,
// 	port: config.pg.db_port,
// 	dialect: 'postgres',
// 	// logging: logger.debug.bind(logger)
// })

const sequelize = new Sequelize('sqlite::memory:')

const models = [
	User,
];

// We define all models according to their files.
models.forEach((model) => {
	model.init(sequelize);
})
models.forEach((model) => {
	model.associate(models);
})
models.forEach((model) => {
	model.sync({ force: true });
})

export default sequelize