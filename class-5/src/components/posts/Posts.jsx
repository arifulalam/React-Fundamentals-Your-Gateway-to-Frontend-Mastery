/* eslint-disable no-unused-vars */
import React from 'react';
import PostCreate from './PostCreate';
import Post from './Post';

function Posts() {
  return (
    <>
      <PostCreate/>
      <h2>Posts</h2>
      <Post/>
    </>
  )
}

export default Posts