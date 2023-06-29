const express = require("express");
require('express-async-errors');

const helmet = require("helmet");
const xss = require('xss-clean');
const compression = require('compression');
const cors = require('cors');

const errorHandler = require('./middlewares/error')
const morgan = require('./middlewares/morgan')


const app = express();
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(xss());
app.use(compression());
app.use(cors());
app.options('*', cors());

app.use(morgan)
app.use(sessionHandler)
// app.use(passport.initialize());
// app.use(passport.session());
// app.post('/v1/passport-login', passport.authenticate('local'));

app.use('/v1', authRouter);
app.use('/v1', userRouter);
app.use('/v1', roleRouter);
app.use('/v1', docsRouter);
app.use('/v1', testRouter);

app.use(errorHandler)


module.exports = app;