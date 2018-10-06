import React, { Component } from "react";
import App from "./presenter";
import nophoto from "../../images/no-photo.svg";

class container extends Component {
  state = {
    photoURL: "",
    movieId: "",
    photo: "",
    message: ""
  };

  handlePhotoURL = e => {
    this.setState({
      photoURL: e.target.value
    });
  };

  handleNoPhoto = e => {
    e.target.onerror = null;
    e.target.src = nophoto;
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    const { user, handleUpload, closeUpload } = this.props;
    e.preventDefault();
    handleUpload({
      movieId: this.state.movieId,
      photo: this.state.photo,
      message: this.state.message,
      userId: user.id,
      like: "0"
    });
    this.setState({
      photoURL: "",
      movieId: "",
      photo: "",
      message: ""
    });
    closeUpload();
  };

  render() {
    return (
      <App
        {...this.props}
        {...this.state}
        handlePhotoURL={this.handlePhotoURL}
        handleNoPhoto={this.handleNoPhoto}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default container;