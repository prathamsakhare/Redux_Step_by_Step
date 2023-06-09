import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postRemoved, selectAllPosts } from './postsSlice';

const PostList = () => {
    const dispatch = useDispatch();
    const posts = useSelector(selectAllPosts);
    const renderedPosts = posts.map((post, index) => (
        <>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
        <button onClick={() => dispatch(postRemoved(index))}>Delete Post</button>
        </>
    ))
  return (
    <div>
        <h1>Posts</h1>
        {renderedPosts}
    </div>
  )
}

export default PostList