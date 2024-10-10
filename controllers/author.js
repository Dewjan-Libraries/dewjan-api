import { AuthorModel } from "../models/author.js";

// add author
export const addAuthor = async (req, res, next) => {
  try {
    const newAuthor = await AuthorModel.create(req.body);

    res.status(201).json(newAuthor);
  } catch (error) {
    next(error);
  }
};

//
export const getAuthor = async (req, res, next) => {
  try {
    const author = await AuthorModel.findById();

    res.status(201).json(author);
  } catch (error) {
    next(error);
  }
};

export const getAuthors = async (req, res, next) => {
  try {
    const authors = await AuthorModel.find();

    res.status(201).json(authors);
  } catch (error) {
    next(error);
  }
};

export const updateAuthor = async (req, res, next) => {
  try {
    const authorupdate = await AuthorModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.status(201).json(authorupdate);
  } catch (error) {
    next(error);
  }
};

export const deleteAuthor = async (req, res, next) => {
  try {
    const authordelete = await AuthorModel.findByIdAndUpdate();

    res.status(201).json(authordelete);
  } catch (error) {
    next(error);
  }
};
