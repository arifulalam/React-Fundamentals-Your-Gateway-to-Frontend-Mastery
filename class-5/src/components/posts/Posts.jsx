/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import PostCreate from './PostCreate';
import Post from './Post';
import { PostContext } from '../../context/PostContext';

function Posts({users}) {
  const {posts, setPosts} = useContext(PostContext);

  return (
    <>
      <PostCreate users={users}/>
      <h2>Posts</h2>
      {posts.map((post, index) => (
        <Post key={index} post={post} users={users}/>
      ))}      
    </>
  )
}

export default Posts