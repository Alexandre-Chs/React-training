import {
  FETCH_BOOKS_LOADING,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_ERROR,
} from "../reducers/constants";

import axios from "axios";

const fetchBooksLoading = () => {
  return {
    type: FETCH_BOOKS_LOADING,
  };
};

const fetchBooksSuccess = (data) => {
  return {
    type: FETCH_BOOKS_SUCCESS,
    payload: data,
  };
};

const fetchBooksError = (data) => {
  return {
    type: FETCH_BOOKS_ERROR,
    payload: data,
  };
};

const GOOGLE_API_KEY = "AIzaSyDlgD2Dq74E00Exk4kfW99ea-aiaHA5Jqo";

export const fetchBooks = (title) => {
  return (dispatch) => {
    dispatch(fetchBooksLoading());

    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${title}&key=${GOOGLE_API_KEY}&maxResults=20`
      )
      .then((response) => {
        dispatch(fetchBooksSuccess(response.data.items));
      })
      .catch((error) => {
        dispatch(fetchBooksError(error.message));
      });
  };
};
