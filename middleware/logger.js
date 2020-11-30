// @desc    Logs request to console
const logger = (req, res, next) => {
	req.hello = 'Hello World';
	console.log('🚀 ~ file: server.js ~ line 12 ~ logger ~ Middleware ran');
	next();
};

module.exports = logger;
