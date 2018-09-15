const mongoose = require('mongoose');

const mongoUrl = 'mongodb://AlihSilva13:Djbinho123@ds121945.mlab.com:21945/bookks';

const connect = () => mongoose.connect(mongoUrl);

module.exports = { connect };