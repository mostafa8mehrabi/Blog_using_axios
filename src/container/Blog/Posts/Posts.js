import React from "react";

import { Link } from "react-router-dom";

import axios from "axios";

import Post from "../../../components/Post/Post";

import "./Posts.css";

class Posts extends React.Component {
  state = {
    posts: [],
    postID: null,
    error: false,
  };
  componentDidMount() {
    axios
      .get("/posts")
      .then((response) => {
        // this.setState({ posts: response.data });
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map((item) => {
          return {
            ...item,
            author: "مصطفی",
          };
        });
        this.setState({ posts: updatedPosts });
      })
      .catch((error) => {
        this.setState({ error: true });
        console.log(error);
      });
  }
  selectPostHandler = (id) => {
    this.setState({ postID: id });
  };
  render() {
    let posts = (
      <p style={{ textAlign: "center" }}>دریافت اطلاعات با خطا مواجه شده است</p>
    );
    if (!this.state.error) {
      posts = this.state.posts.map((item) => {
        return (
          <Link to={`/${item.id}`} key={item.id}>
            <Post
              key={item.id}
              title={item.title}
              author={item.author}
              clickedPost={() => this.selectPostHandler(item.id)}
            />
          </Link>
        );
      });
    }
    return <section className="posts">{posts}</section>;
  }
}

export default Posts;
