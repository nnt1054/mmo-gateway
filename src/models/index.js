import { Sequelize } from 'sequelize';

import config from '/config';

import Account from './account'

// const sequelize = new Sequelize(config.pg.db_name, config.pg.db_username, config.pg.db_password, {
// 	host: config.pg.db_host,
// 	port: config.pg.db_port,
// 	dialect: 'postgres',
// })

const sequelize = new Sequelize('sqlite::memory:')

const models = [
	Account,
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