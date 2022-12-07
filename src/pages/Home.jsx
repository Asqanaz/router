import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((posts) => setPosts(posts));

    setLoading(false);
  }, []);

  return (
    <>
      <h1>BlogPage</h1>

      {loading && (
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
      <section>
        {posts?.map((item) => (
          <Link to={`/home/${item.id}`} key={item.id}>
            <li>{item.title}</li>
          </Link>
        ))}
      </section>
    </>
  );
};
