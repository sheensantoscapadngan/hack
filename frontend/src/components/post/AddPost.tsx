import React, { useState } from "react";
import { connect } from "react-redux";
import PostInterface from "../../interfaces/PostInterface";
import { createPost } from "../../actions/post";

const AddPost = ({ accessToken, authId, createPost }: PostInterface) => {
  const [formData, setFormData] = useState({
    language: "",
    description: "",
    content: "",
  });
  const { language, description, content } = formData;

  const onFormChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <input
        placeholder="Language"
        type="text"
        name="language"
        value={language}
        onChange={(e) => onFormChange(e)}
      ></input>
      <input
        placeholder="Description"
        type="text"
        name="description"
        value={description}
        onChange={(e) => onFormChange(e)}
      ></input>
      <textarea
        className="row"
        cols={100}
        placeholder="Source Code"
        name="content"
        value={content}
        onChange={(e) => onFormChange(e)}
      ></textarea>
      <button
        onClick={() =>
          createPost({
            accessToken,
            authId,
            ...formData,
          })
        }
      >
        Add post
      </button>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  accessToken: state.auth.accessToken,
  authId: state.auth.authId,
});

export default connect(mapStateToProps, { createPost })(AddPost);
