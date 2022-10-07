import React from "react";
import { useLoaderData } from "@remix-run/react";
import { loader as postsApi } from "../api/posts";

export default function Post(props) {
  const data = useLoaderData();

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
    </div>
  );
}

export const loader = (props) => {
  console.log(postsApi());
  const post = postsApi().find((post) => post.slug === props.params.post);
  return post;
};
