/* eslint-disable no-unused-vars */
import React from "react";

function PostCreate() {
  return (
    <>
      <h2>New Post</h2>
      <form method="get">
        <label htmlFor="title">Post Title</label>
        <input type="text" name="title" id="title" placeholder="Post Title" />
        <label htmlFor="userId">Author</label>
        <select name="userId" id="userId">
          <option value="0">--select--</option>
        </select>
        <label htmlFor="content">Post Content</label>
        <textarea
          name="content"
          id="content"
          placeholder="Post Content"
          rows={5}
        />
        <label htmlFor="isPublished">Publish</label>
        <select name="isPublished" id="isPublished">
          <option value="1">Publish</option>
          <option value="0">Draft</option>
        </select>
        <button type="submit" className="success">
          Create Post
        </button>
      </form>
    </>
  );
}

export default PostCreate;
