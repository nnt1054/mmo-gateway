var okta = require("@okta/okta-sdk-nodejs");

var oktaClient = new okta.Client({
	orgUrl: process.env.OKTA_ORG_URL,
	token: process.env.OKTA_TOKEN
});

const attachCurrentUser = (req, res, next) => {
    if (!req.userinfo) {
    	return next();
    }

    oktaClient.getUser(req.userinfo.sub)
		.then(user => {
			req.user = user;
			res.locals.user = user;
			next();
		}).catch(err => {
			next(err);
		});
}

export default attachCurrentUser;