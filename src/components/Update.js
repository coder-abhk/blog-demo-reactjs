import React from "react";
import "./Update.css";
import App from "../App";
import { Switch, Link, Route} from "react-router-dom";

const Update = ({
  blogId,
  title,
  setTitle,
  content,
  setContent,
  updateHandler,
}) => {
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
          <button
            type="submit"
            onClick={(e) => {
              updateHandler(blogId);
              e.preventDefault()
            }}
          >
            Update
          </button>
          <Link to="/">
            <button style={{marginLeft: 16}}>Home</button>
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
