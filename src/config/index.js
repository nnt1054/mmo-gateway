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
	}
}