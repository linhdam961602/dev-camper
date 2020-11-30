const express = require('express');
const dotenv = require('dotenv');
const logger = require('./middleware/logger');
const morgan = require('morgan');
const connectDB = require('./config/db');

//Load env vars
dotenv.config({ path: './config/config.env' });

// Connect to database
connectDB();

//Route files
const bootcamps = require('./routes/bootcamps');

const app = express();

//Dev logging middleware
if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

app.use(logger);

//Mount routers
app.use('/api/v1/bootcamps', bootcamps);

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server running in http://localhost:${PORT}`));

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
	console.log(`Error: ${err.message}`);

	//Close server & exit process
	server.close(() => process.exit(1));
});
