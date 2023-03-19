import React, { Component } from "react";

export default class Newsitem extends Component {
  render() {
    let {title, description} = this.props ;
    return (
      <div>
        <div className="card" style= {{width: "18rem"}}>
          <img src="https://krcrtv.com/resources/media/7f26f6c7-07b7-4236-a991-ed17318b1a4d-large16x9_JamieFinchDirectUploader18thMar202304_47UTC.jpeg?1679115923519" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {description}
            </p>
            <a href="/" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  }
}
