import sequelize from '/models'
import logger from '/loaders/logger';

const getOrCreateUser = async (req, res, next) => {

	const User = sequelize.models.User;
    if (!req.userContext.userinfo.sub) {
    	return next();
    }

	try {
	    const [user, created] = await User.findOrCreate({
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

export default getOrCreateUser;