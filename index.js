const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/config');
require('./models/User');
require('./services/authServices');

mongoose.connect(keys.mongodbSetting);

const route = require('./routes/authRoutes');

const app = new express();

app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [ keys.cookieKey ]
	}),
	passport.initialize(),
	passport.session()
);

route(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);