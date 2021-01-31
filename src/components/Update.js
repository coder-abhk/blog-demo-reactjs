import React from "react";
import "./Update.css";
import axios from "axios";
import { useContext } from "react";
import { UpdateContext } from "./UpdateContext";
import App from "../App";
import { Switch, Link, Route } from "react-router-dom";

const Update = () => {
  const [title, content, setTitle, setContent, blogId] = useContext(
    UpdateContext
  );
  // blog update handler
  const updateHandler = async (id) => {
    await axios
      .put(`/update/${id}`, {
        id: id,
        title: title,
        content: content,
      })
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
    setContent("");
    setTitle("");
  };
  return (
    <div className="update__section">
      <form>
        <p>Title</p>
        <input
          type="text"
          value={title}
          placeholder="blog title..."
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <br />
        <p>Content</p>
        <textarea
          value={content}
          placeholder="blog content..."
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
        <br />
        <p>
          <Link to="/">
            <button
              type="submit"
              onClick={(e) => {
                updateHandler(blogId);
              }}
            >
              Update
            </button>
          </Link>
        </p>
      </form>
      <Switch>
        <Route exact path="/" component={App} />
      </Switch>
    </div>
  );
};

export default Update;
