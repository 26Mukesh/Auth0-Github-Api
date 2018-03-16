import React, { Component } from 'react';

class Profile extends Component {

  render(){
    let userdata = this.props.userData;
    let followers = `${userdata.homeURL}/followers`;
    let following = `${userdata.homeURL}/following`;
    let repos = `${userdata.homeURL}/repositories`;
    let avatar = `${userdata.homeURL}/avatar`;
    let alt = "github-profile-image";

    if(userdata.messages === "Not Found"){
      return(
          <p>Are you sure, for whom you are looking for ???</p>
      )
    }

    else {
      return(
        <div className="container">
        <div className="jumbotron">
        <section >
          <div>
            <a href={userdata.homeURL} target="_blank" title={userdata.name || userdata.username}><img src={userdata.avatar} alt={alt}/></a>
            <h3><a href={userdata.homeURL} title={userdata.username} target="_blank">{userdata.name || userdata.username}</a></h3>
            <h4>{userdata.location}</h4>
          </div>
          <div className="github-profile-state">
            <ul>
              <li>
                <a href={followers} target="_blank" title="Number of follower"><i>{userdata.follwers}</i><span>followers</span></a>
              </li>
              <li>
                <a href={repos} target="_blank" title="Number of respositoriy"><i>{userdata.repos}</i><span>respositoriy</span></a>
              </li>
              <li>
                <a href={following} target="_blank" title="Number of following"><i>{userdata.following}</i><span>following</span></a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>

      );
    }
  }
}

export default Profile;
