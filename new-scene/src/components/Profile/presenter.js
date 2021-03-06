import React, { Component } from "react";
import Ionicon from "react-ionicons";
import ProfileUpdate from "../ProfileUpdate";

import "./styles.css";

export default class presenter extends Component {
  render() {
    const {
      user,
      isUpdateOpen,
      openUpdate,
      closeUpdate,
      handleProfileUpdate,
      posts,
      currentUser,
      movies
    } = this.props;

    return (
      <div className="profile__columns">
        <div className="profile__column">
          <img src={user.profilePhoto} alt="" className="profile__pic" />
        </div>
        <div className="profile__column">
          <span className="profile__name">
            {user.name}
            <Ionicon
              icon="md-settings"
              className="profile__setting"
              onClick={openUpdate}
            />
          </span>
          <div className="profile__count">
            게시물
            <span className="profile__count-post"> {user.postCount}</span>
            클립
            <span className="profile__count-like">
              {" "}
              {user.likePosts.length}
            </span>
            <span className="profile__count-poster">
              포스터{" "}
              {
                posts
                  .filter(post => {
                    return post.userId === currentUser.id;
                  })
                  .map(post => {
                    return post.movieId;
                  })
                  .filter(
                    (value, index, array) => array.indexOf(value) === index
                  ).length
              }
              /{movies.length}
            </span>
          </div>
          <div className="profile__introduce">{user.message}</div>
        </div>

        <ProfileUpdate
          user={user}
          isUpdateOpen={isUpdateOpen}
          closeUpdate={closeUpdate}
          handleProfileUpdate={handleProfileUpdate}
        />
      </div>
    );
  }
}
