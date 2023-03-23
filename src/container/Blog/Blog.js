import React from "react";

import { Route, Routes, Link } from "react-router-dom";

import "./Blog.css";
import Posts from "./Posts/Posts";
import NewPost from "./NewPost/NewPost";
import FullPost from "./FullPost/FullPost";

// import Posts from "./Posts/Posts";

class Blog extends React.Component {
  render() {
    return (
      <div className="blog">
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">خانه</Link>
              </li>
              <li>
                <Link
                  to={{
                    pathname: "/new-post",
                    search: "?sort=post",
                  }}
                >
                  ایجاد پست
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/" exact element={<Posts />} />
          <Route path="/new-post" element={<NewPost />} />
          <Route path="/:id" exact element={<FullPost />} />
        </Routes>
      </div>
    );
  }
}

export default Blog;
