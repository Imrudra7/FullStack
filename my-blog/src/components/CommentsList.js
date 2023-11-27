import React from "react";

const CommentsList = ({ comments }) => {
  return (
    <>
      <h3>Comments: </h3>
      {comments ? (
        comments.map((comment) => (
          <div className="comment" key={comment.postedBy + ": " + comment.text}>
            <h4>{comment.postedBy}</h4>
            <p>{comment.text}</p>
          </div>
        ))
      ) : (
        <p>No comments available.</p>
      )}
    </>
  );
};

export default CommentsList;
