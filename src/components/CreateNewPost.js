import React from "react";

const CreateNewPost = (props) => {
  return (
    <>
      <form onSubmit={props.savePost}>
        <h1>Create New Post</h1>
        <input
          type="text"
          //callback to parent component
          onChange={props.savePostTitleToState}
          placeholder="Title"
          size="39"
          required
          ref={props.getTitle}
        ></input>
        <br />
        <br />
        <textarea
          //callback to parent component
          onChange={props.savePostContentToState}
          placeholder="Content"
          rows="8"
          cols="41"
          required
          ref={props.getContent}
        ></textarea>
        <br />
        <br />
        <button>SAVE POST</button>
      </form>
    </>
  );
};

export default CreateNewPost;
