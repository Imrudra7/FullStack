import axios from "axios";
import React, { useState } from "react";
import useUser from "../Hooks/useUser";

const AddCommentForm = ({ articleName, onArticleUpdated }) => {
  const [name, setName] = useState("");
  const [commentText, setCommentText] = useState("");
  const { user } = useUser();

  const addComment = async () => {
    const token = user && (await user.getIdToken());
    const headers = token ? { authtoken: token } : {};

    const response = await axios.post(
      `http://localhost:8000/api/articles/${articleName}/comments`,
      {
        postedBy: name,
        text: commentText,
      },
      {
        headers,
      }
    );
    const updatedArticle = response.data;
    onArticleUpdated(updatedArticle);
    setName("");
    setCommentText("");
  };

  return (
    <div id="add-comment-form">
      <h3>AddCommentForm</h3>
      {user && <p>You are posting as {user.email}</p>}

      <textarea
        name=""
        id=""
        cols="50"
        rows="4"
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
      />

      <button onClick={addComment}>Add Comment</button>
    </div>
  );
};

export default AddCommentForm;
