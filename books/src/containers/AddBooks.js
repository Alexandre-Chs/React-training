import React, { useState } from "react";
import { connect } from "react-redux";
import { addBook, deleteBook, deleteAllBooks } from "../redux/actions/actionAddBooks"
import FlipMove from "react-flip-move";

const AddBooks = ({ libraryData, addBook , deleteBook, deleteAll}) => {
  console.log(addBook);

  const initialState = {
    title: "",
    author: "",
  };

  const [newData, setNewData] = useState(initialState);

  //ON SUBMIT FORM
  const handleSubmit = (e) => {
    e.preventDefault();
    addBook(newData);

    // VIDER INPUT
    setNewData(initialState);
  };

  const displayData =
    libraryData.length > 0 ? (
      <FlipMove>
        {libraryData.map((data) => {
          console.log(data);
          return (
            <li
              key={data.id}
              className="list-group-item list-group-item-light d-flex justify-content-between "
            >
              <span>
                <strong>Titre:</strong> {data.titre}
              </span>
              <span>
                <strong>Auteur:</strong> {data.author}{" "}
              </span>
              <span  onClick={() => deleteBook(data.id)} className="btn btn-danger">X</span>
            </li>
          );
        })}
      </FlipMove>
    ) : (
      <p className="text-center">Aucune data à afficher</p>
    );

  const deleteAllBooks = libraryData.length > 0 && (
    <button onClick={() => deleteAll()} className="btn btn-danger mt-4 mb-5">
      Effacer tout les livres
    </button>
  );

  return (
    <main role="main">
      <div className="jumbotron jumbotron-fluid">
        <div className="container text-center">
          <h1 className="display-4">BOOKS</h1>
          <p>Ajouter un livre à votre bibliothèque</p>

          <form
            className=" d-flex form-inline justify-content-center"
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <input
                value={newData.title}
                type="text"
                className="form-control"
                placeholder="Titre"
                required
                onChange={(e) =>
                  setNewData({ ...newData, title: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <input
                value={newData.author}
                type="text"
                className="form-control ml-3"
                placeholder="Auteur"
                required
                onChange={(e) =>
                  setNewData({ ...newData, author: e.target.value })
                }
              />
            </div>

            <div className="form-group">
              <button className="btn btn-outline-secondary ml-3">
                Ajouter un livre
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="container" style={{ minHeight: "200px" }}>
        <div className="row">
          <div className="col-md-12">
            <ul className="list-group mt-4">{displayData}</ul>
            <div className="d-flex justify-content-center">
              {deleteAllBooks}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

const mapStateToProps = (state) => {
  return {
    libraryData: state.library,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addBook: (param) => dispatch(addBook(param)),
    deleteBook: (id) => dispatch(deleteBook(id)),
    deleteAll: () => dispatch(deleteAllBooks())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddBooks);
