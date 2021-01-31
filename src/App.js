import React, { useState, useEffect } from "react";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import axios from "axios";
import "./App.css";

function App() {
  const [blogs, setBlogs] = useState([]);

  // blog delete handler
  const onDeleteHandler = async (id) => {
    await axios
      .delete(`/delete/${id}`)
      .then((res) => {
        setBlogs((prevBlogs) => {
          return prevBlogs.filter((blog) => blog.id !== id);
        });
      })
      .catch((err) => console.error(err.message));
  };

  // blogs handler
  useEffect(() => {
    const dbHandler = async () => {
      try {
        await axios.get("/data").then((res) => {
          setBlogs(res.data);
        });
      } catch (err) {
        console.error(err.message);
      }
    };
    dbHandler();
  }, []);

  return (
    <div className="app">
      <Navbar />
      <Main blogs={blogs} onDeleteHandler={onDeleteHandler} />
    </div>
  );
}

export default App;
