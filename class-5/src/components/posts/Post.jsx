/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Comments from "../comments/Comments";

function Post({ post, users }) {
  const user = users.filter(u => u.ID == post.authorId)[0];

  return (
    <>
      <div className="border">
        <h2>{post.title}</h2>
        <p>Author: {user.fullname} ({user.username}) | Created On: {post.createdOn}</p>
        <p>{post.content}</p>
        <hr/>
        <Comments />
      </div>
    </>
  );
}

export default Post;
