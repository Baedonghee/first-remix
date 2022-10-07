import React from "react";
import { Form, Link, useActionData, useTransition } from "@remix-run/react";
export default function Compo() {
  const data = useActionData();
  const transition = useTransition();
  console.log(transition);

  const loadText = {
    actionSubmission: "submit!!",
    actionReload: "loading",
  };

  const btnText = loadText[transition.type] || "submit";

  return (
    <div>
      <h1>useActionData</h1>
      <Link to="/blog">blog</Link>
      <Form method="post" replace>
        <p>firstname:</p>
        <input type="text" name="firstname" />
        <br />
        <p>lastname:</p>
        <input type="text" name="lastname" />
        <br />
        <p>years:</p>
        <input type="number" name="years" />
        <br />
        <button type="submit">{btnText}</button>
        <br />
        <p>{data ? data.message : "none"}</p>
      </Form>
    </div>
  );
}

function timeout(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function action(props) {
  const { request } = props;
  const body = await request.formData();
  const firstname = body.get("firstname");
  const lastname = body.get("lastname");
  const years = body.get("years");

  // await timeout(5000);

  return { message: `Hola ${firstname} ${lastname}, tienes ${years}` };
}
