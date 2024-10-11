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


export const searchBooks = async (req, res, next) => {
  try {
    // Destructure query parameters from request
    const { title, author, genre } = req.query;

    // Build the query object
    let query = {};

    // Add filters to the query object if any query parameter is provided
    if (title) {
      query.title = { $regex: title, $options: "i" }; // Case-insensitive search
    }

    if (author) {
      query["author.name"] = { $regex: author, $options: "i" }; // Case-insensitive search on the author's name
    }

    if (genre) {
      query.genre = { $regex: genre, $options: "i" }; // Case-insensitive search on genre
    }

    // Fetch books from database based on the query
    const books = await BookModel.find(query).populate("author");

    // Return the response
    res.status(200).json(books);
  } catch (error) {
    next(error);
  }
};
