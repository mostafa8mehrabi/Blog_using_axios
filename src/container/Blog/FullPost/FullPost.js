import React from "react";

import axios from "axios";

import { Navigate } from "react-router-dom";

import withRouter from "../../../components/hoc/withRouter";

import "./FullPost.css";

class FullPost extends React.Component {
  state = {
    loadedPost: null,
    removedPost: false,
  };
  componentDidMount() {
    console.log(this.props.params.id);
    if (this.props.params.id) {
      if (
        !this.state.loadedPost ||
        (this.state.loadedPost &&
          this.state.loadedPost.id !== this.props.params.id)
      )
        axios
          .get(`/posts/${this.props.params.id}`)
          .then((response) => this.setState({ loadedPost: response.data }));
    }
  }
  deletePostHandler = () => {
    axios.delete(`/posts/${this.props.params.id}`).then((response) => {
      console.log(response);
      this.setState({ removedPost: true });
    });
  };
  render() {
    let removedPost = null;
    if (this.state.removedPost) {
      removedPost = <Navigate to="/" />;
    }
    let post = (
      <p style={{ textAlign: "center" }}>لطفا یک پست را انتخاب کنید</p>
    );

    if (this.props.params.id) {
      post = <p style={{ textAlign: "center" }}>لطفا کمی صبر کنید...</p>;
    }

    if (this.state.loadedPost) {
      post = (
        <div className="full-post">
          <h2>{this.state.loadedPost.title}</h2>
          <p>{this.state.loadedPost.body}</p>
          <div>
            <button onClick={this.deletePostHandler} className="delete">
              حذف
            </button>
          </div>
          {removedPost}
        </div>
      );
    }

    return post;
  }
}

export default withRouter(FullPost);
