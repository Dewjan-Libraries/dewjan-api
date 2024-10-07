import { BookModel } from "../models/book.js";

//
export const addBook = async (req, res, next) => {
  try {
    // fetch books from database
    await BookModel.create(req.body);
    // return response
    res.status(201).json("book was added");
  } catch (error) {
    next(error);
  }
};

export const getBook = async (req, res, next) => {
  try {
    // fetch books from database
    const book = await BookModel.findById(book);
    // return response
    res.status(201).json("book was added");
  } catch (error) {
    next(error);
  }
};
export const getBooks = async (req, res, next) => {
  try {
    // fetch books from database
    const books = await BookModel.find(books);
    // return response
    res.status(201).json("book was added");
  } catch (error) {
    next(error);
  }
};

export const updateBook = async (req, res, next) => {
  try {
    // fetch books from database
    const update = await BookModel.updateOne(update);
    // return response
    res.status(201).json("book was updated");
  } catch (error) {
    next(error);
  }
};
export const deleteBook = async (req, res, next) => {
  try {
    // fetch books from database
    const bookdelete = await BookModel.deleteOne(bookdelete);
    // return response
    res.status(201).json("book was updated");
  } catch (error) {
    next(error);
  }
};
