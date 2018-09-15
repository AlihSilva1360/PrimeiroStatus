const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name:String
});

const Book = mongoose.model('book', schema);

module.exports = Book;
