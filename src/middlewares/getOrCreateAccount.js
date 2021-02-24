import sequelize from '/models'
import logger from '/loaders/logger';

const getOrCreateAccount = async (req, res, next) => {

	const Account = sequelize.models.Account;
    if (!req.userContext.userinfo.sub) {
    	return next();
    }

	try {
	    const [user, created] = await Account.findOrCreate({
	    	where: { userId: req.userContext.userinfo.sub },
	    	defaults: {
	    		coins: 0
	    	}
	    })
	    next()
	} catch(err) {
		next(err)
	}

}

export default getOrCreateAccount;