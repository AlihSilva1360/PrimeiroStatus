const express = require('express');
const Book = require('../models/book');
const BooksController = require('../controllers/books')

const booksController = new BooksController(Book)
const router = express.Router();

router.get('/', (req, res) => booksController.get(req, res));
router.get('/:id', (req, res) => booksController.getById(req, res));
router.post('/', (req, res) => booksController.create(req, res));
router.put('/:id', (req,res) => booksController.update(req, res));
router.delete('/:id', (req, res) => booksController.remove(req, res));

module.exports = router;