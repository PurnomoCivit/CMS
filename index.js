const express = require('express');
require('./services/authServices');

const route = require('./routes/authRoutes');

const app = new express();

route(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);


