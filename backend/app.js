const app = require('express')();
const { Model } = require('sequelize');
const {User} = require('./routes/UserRoute')
app.use(require('express').json());
app.use(urlencoded({ extended: true }));

app.use('/api',User);

Model.exports = app;