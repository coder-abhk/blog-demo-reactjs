import React, { useState, useEffect } from "react";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import axios from "axios";
import "./App.css";
import Update from "./components/Update";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./auth/Login";
import Register from "./auth/Register";

function App() {
  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [blogId, setBlogId] = useState("");

  // blog delete handler
  const onDeleteHandler = (id) => {
    try {
      axios.delete(`/delete/${id}`);
    } catch (err) {
      console.log(err.message);
    }
    setBlogs(
      blogs.filter((blog) => {
        return blog.id !== id;
      })
    );
  };

  // blogs handler
  useEffect(() => {
    const getBlogHandler = async () => {
      try {
        await axios.get("/data").then((res) => {
          setBlogs(res.data);
        });
      } catch (err) {
        console.error(err.message);
      }
    };
    getBlogHandler();
  }, []);

  // blog update handler
  const updateHandler = (id) => {
    try {
      axios.put(`/update/${id}`, {
        id: id,
        title: title,
        content: content,
      });
    } catch (err) {
      console.log(err);
    }

    setBlogs(
      blogs.map((blog) => {
        return blog.id === id
          ? {
              id: blog.id,
              title: blog.title,
              content: blog.content,
              author: blog.author,
              readmin: blog.readmin,
            }
          : blog;
      })
    );

    setContent("");
    setTitle("");
  };

  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <div className="wrap">
          <Main
            blogs={blogs}
            blogId={blogId}
            title={title}
            content={content}
            setTitle={setTitle}
            setContent={setContent}
            setBlogId={setBlogId}
            updateHandler={updateHandler}
            onDeleteHandler={onDeleteHandler}
          />
          <div className="route__views">
            <Route exact path="/update/:id">
              <Update
                blogId={blogId}
                title={title}
                setTitle={setTitle}
                content={content}
                setContent={setContent}
                updateHandler={updateHandler}
              />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
