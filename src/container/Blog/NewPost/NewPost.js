import React from "react";

import { Navigate } from "react-router-dom";

import axios from "axios";

import "./NewPost.css";

class NewPost extends React.Component {
  state = {
    title: "",
    content: "",
    author: "مصطفی",
    submited: false,
  };

  postDataHandler = () => {
    const data = {
      title: this.state.title,
      body: this.state.content,
      author: this.state.author,
    };
    axios.post("/posts", data).then((response) => {
      console.log(response);
      this.setState({ submited: true });
    });
  };
  render() {
    let submited = null;
    if (this.state.submited) {
      submited = <Navigate to="/" />;
    }
    return (
      <div className="new-Post">
        <h2>افزودن پست</h2>
        <label htmlFor="">عنوان</label>
        <input
          className="myInput"
          type="text"
          value={this.state.title}
          onChange={(event) => this.setState({ title: event.target.value })}
        />
        <label htmlFor="">محتوا</label>
        <textarea
          name=""
          id=""
          cols="90"
          rows="10"
          value={this.state.content}
          onChange={(event) => this.setState({ content: event.target.value })}
        ></textarea>
        <label>نویسنده</label>
        <select
          className="myoption"
          value={this.state.author}
          onChange={(event) => this.setState({ author: event.target.value })}
        >
          <option value="مصطفی">مصطفی</option>
        </select>
        <button className="submit" onClick={this.postDataHandler}>
          افزودن پست
        </button>
        {submited}
      </div>
    );
  }
}

export default NewPost;
