/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useContext } from "react";
import { PostContext } from "../../context/PostContext";

function PostCreate({ users }) {
  const { posts, setPosts } = useContext(PostContext);
  const [title, setTitle] = useState("");
  const [authorId, setAuthorID] = useState("");
  const [content, setContent] = useState("");
  const [isPublished, setIsPublished] = useState(false);

  const getValue = (e) => {
    console.log(e.target.value);
    if (e.target.id == "title") setTitle((value) => e.target.value);
    if (e.target.id == "userId") setAuthorID((value) => e.target.value);
    if (e.target.id == "content") setContent((value) => e.target.value);
    if (e.target.id == "isPublished")
      setIsPublished((value) => (e.target.value == "1" ? true : false));
  };
  const post_create = (e) => {
    e.preventDefault();

    let post = {
      ID: posts.length + 1,
      title: title,
      authorId: authorId,
      content: content,
      createdOn: new Date().getUTCDate(),
      isPublished: isPublished,
    };
    setPosts((posts) => [...posts, post]);
    //posts.push(post);
  };
  return (
    <>
      <h2>New Post</h2>
      <form method="get">
        <label htmlFor="title">Post Title</label>
        <input
          onChange={getValue}
          type="text"
          name="title"
          id="title"
          placeholder="Post Title"
        />
        <label htmlFor="userId">Author</label>
        <select onChange={getValue} name="userId" id="userId">
          <option value="0">--select--</option>
          {users.map((user, index) => (
            <option key={index} value={user.id}>
              {user.fullname} ({user.username})
            </option>
          ))}
        </select>
        <label htmlFor="content">Post Content</label>
        <textarea
          onChange={getValue}
          name="content"
          id="content"
          placeholder="Post Content"
          rows={5}
        />
        <label htmlFor="isPublished">Publish</label>
        <select onChange={getValue} name="isPublished" id="isPublished">
          <option value="1">Publish</option>
          <option value="0">Draft</option>
        </select>
        <button onClick={post_create} type="submit" className="success">
          Create Post
        </button>
      </form>
    </>
  );
}

export default PostCreate;
