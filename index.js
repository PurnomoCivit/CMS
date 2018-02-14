const express = require('express');
const mongoose = require('mongoose');
require('./services/authServices');

mongoose.connect();

const route = require('./routes/authRoutes');

const app = new express();

route(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);


