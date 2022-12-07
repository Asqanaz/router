import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./loader.css"

export const SinglePostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((post) => setPost(post));
    setLoading(false);
  }, [id]);

  console.log(post);
  return (
    <div>
      {loading && <div className="lds-ring"><div></div><div></div><div></div><div></div></div>}
      {post && (
        <div>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      )}
    </div>
  );
};
