import React, { useState } from "react";
import "./Main.css";
import DeleteIcon from "@material-ui/icons/Delete";
import Update from "./Update";
import { UpdateContext } from "./UpdateContext";
import { Route, Link, Switch } from "react-router-dom";

const Main = ({ blogs, onDeleteHandler }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [blogId, setBlogId] = useState("");

  return (
    <main className="main__section">
      <div>
        {blogs.map((blog) => {
          return (
            <div key={blog.id} className="blog">
              <div className="blog__title">
                <h1>{blog.title}</h1>
                <DeleteIcon
                  onClick={(e) => {
                    e.preventDefault();
                    onDeleteHandler(blog.id);
                  }}
                />
              </div>
              <div className="blog__content">
                <p className="blog__desc">{blog.content}</p>
                <address className="blog__footer">
                  <p>
                    author: <em>{blog.author}</em>
                  </p>
                  <p>read: {blog.readmin}</p>
                </address>
                <Link to={`/update/${blog.id}`}>
                  <button
                    className="read__more"
                    onClick={() => {
                      setBlogId(blog.id);
                    }}
                  >
                    update
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <div className="update__panel">
        <Switch>
          <Route exact path="/update/:id">
            <UpdateContext.Provider
              value={[title, content, setTitle, setContent, blogId]}
            >
              <Update />
            </UpdateContext.Provider>
          </Route>
        </Switch>
      </div>
    </main>
  );
};

export default Main;
