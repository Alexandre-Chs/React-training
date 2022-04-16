import { ADD_BOOKS, DELETE_BOOK,DELETE_ALL__BOOKS } from "../reducers/constants";

export const addBook = (data) => {
  return {
    type: ADD_BOOKS,
    payload: data // OBJECTS
  };
};


export const deleteBook = (id) => {
  return {
    type: DELETE_BOOK,
    payload: id
  }
}

export const deleteAllBooks = (id) => {
  return {
    type: DELETE_ALL__BOOKS,
  }
}
