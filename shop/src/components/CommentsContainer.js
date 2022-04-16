import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { apiCall } from "../redux/comments/actionComments";

const CommentsContainer = ({ apiData, apiComment }) => {
  useEffect(() => {
    apiComment();
  }, [apiComment]);

  const displayApiDate = apiData.isLoading ? (
    <p>Loading...</p>
  ) : apiData.error ? (
    <p>{apiData.error}</p>
  ) : (
    apiData.comments.map((comment) => {
      return (
        <div key={comment.id}>
          <p>{comment.body}</p>
        </div>
      );
    })
  );
  return (
    <Fragment>
      <h2>Commentaires: </h2>
      <hr />
      {displayApiDate}
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    apiData: state.comments,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    apiComment: () => dispatch(apiCall()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer);
