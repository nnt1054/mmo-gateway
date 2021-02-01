import dotenv from 'dotenv';

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const env_found = dotenv.config();
if (env_found.error) {
	// This error should crash whole process
	throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

export default {

	port: parseInt(process.env.PORT, 10),
	host_url: process.env.HOST_URL,
	root_dir: process.env.NODE_ENV,

	// Express Config
	sessionSecret: process.env.SESSION_SECRET,

	// OKTA Config
	okta: {
		org_url: process.env.OKTA_ORG_URL,
		client_id: process.env.OKTA_CLIENT_ID,
		client_secret: process.env.OKTA_CLIENT_SECRET,
		token: process.env.OKTA_TOKEN,
	},

	// Postgres Config
	pg: {
		db_name: process.env.PG_DB_NAME,
		db_host: process.env.PG_DB_HOST,
		db_port: process.env.POG_DB_PORT,
		db_username: process.env.PG_DB_USERNAME,
		db_password: process.env.PG_DB_PASSWORD
	}
}