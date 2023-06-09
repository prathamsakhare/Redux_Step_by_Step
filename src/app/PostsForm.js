import React from "react";
import { useState } from "react";
import { postAdded } from "./postsSlice";
import { useDispatch } from "react-redux";
const PostsForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const onTitleChange = (e) => setTitle(e.target.value);
  const onContentChange = (e) => setContent(e.target.value);
  const onSubmitChanges = () => {
    if (title && content) {
      dispatch(
        postAdded({
          id: title,
          title,
          content,
        })
      );
      setTitle("");
      setContent("");
    }
  };
  return (
    <section>
      <h2>Add Post</h2>
      <div>

      <label htmlFor="postTitle">Title</label>
      <input id="postTitle" name="postTitle" value={title} onChange={onTitleChange} />
      </div>
      <div>

      <label htmlFor="postContent">Content</label>
      <input id="postContent" name="postTitle" value={content} onChange={onContentChange} />
      </div>
      <button type="button" onClick={onSubmitChanges}>
        Add Post
      </button>
    </section>
  );
};

export default PostsForm;
