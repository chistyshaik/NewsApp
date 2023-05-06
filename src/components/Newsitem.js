import React, { Component } from "react";

export default class Newsitem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl} = this.props ;
    return (
      <div className="my-3">
        <div className="card" style= {{width: "18rem"}}>
          <img src={imageUrl ? imageUrl : 'https://www.livemint.com/lm-img/img/2023/05/05/600x338/3-0-86449917-iStock-1167137273-0_1679792587527_1683259177314.jpg'} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {description}
            </p>
            <a href={newsUrl} target="-blank" className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
