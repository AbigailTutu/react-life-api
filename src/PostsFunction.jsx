// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function PostsFunction() {
  let posts = [];
  const [post, setPost] = useState(posts);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res);
        setPost(res.data)
      })
      .catch((err) => console.log(err));
  });

  return (
    <div>
      <h1>Posts</h1>
      <hr />
      {post.map((post) => (
        // eslint-disable-next-line react/jsx-key
        <div>
          <p>{post.id}</p>
          <p>{post.body}</p>
          <p>{post.title}</p>
          <p>{post.userId}</p>
        </div>
      ))}
    </div>
  );
}

export default PostsFunction;
