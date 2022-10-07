import React, { Fragment } from "react";
import { Link, useLoaderData } from "@remix-run/react";
import { loader as posts } from "../api/posts";

export default function Blog() {
  const posts = useLoaderData();

  return (
    <div>
      <h1>Blog!!</h1>
      <Link to="/blog/categories/remix">Remix</Link>

      <hr />
      {posts.map((post, index) => (
        <Fragment key={index}>
          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
          <br />
        </Fragment>
      ))}
    </div>
  );
}

export const loader = (props) => {
  return posts();
};
