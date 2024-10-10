import { addBookValidator } from "../middleware/validate-books.js";
import { BookModel } from "../models/book.js";

//
export const addBook = async (req, res, next) => {
  try {
    // validate book, if someones response produces an error, it'll end at line 9
    const { error, value } = addBookValidator.validate(req.body);
    if (error) {
      return res.status(422).json(error);
    }

    const newBook = new BookModel(req.body);
    const savedBook = await newBook.save();
    // return response
    res.status(201).json(savedBook);
  } catch (error) {
    next(error);
  }
};

export const getBook = async (req, res, next) => {
  try {
    // fetch books from database
    const book = await BookModel.findById(req.params.id);
    // return response
    res.status(201).json(book);
  } catch (error) {
    next(error);
  }
};
export const getBooks = async (req, res, next) => {
  try {
    // fetch books from database
    const books = await BookModel.find().populate("author");
    // return response
    res.status(201).json(books);
  } catch (error) {
    next(error);
  }
};

export const updateBook = async (req, res, next) => {
  try {
    // fetch books from database
    const update = await BookModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    // return response
    res.status(201).json(update);
  } catch (error) {
    next(error);
  }
};
export const deleteBook = async (req, res, next) => {
  try {
    // fetch books from database
    const bookdelete = await BookModel.findByIdAndDelete(req.params.id);
    // return response
    res.status(201).json(bookdelete);
  } catch (error) {
    next(error);
  }
};
