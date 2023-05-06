import React, { Component } from "react";
import Newsitem from "./Newsitem";

export default class News extends Component {
  constructor() {
    super();
    console.log("hello im in constroctur");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    console.log("hii im in component did mount");
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=0401cd61fdd14301a4faf08f54e38cd3&pageSize=20";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }

  handlePrevClick = async () => {
    console.log("prev");

    console.log("hii im in handle prev clcik");
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=0401cd61fdd14301a4faf08f54e38cd3&page=${
      this.state.page - 1
    }&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
    });
  };

  handleNextClick = async () => {
    console.log("Next");
    console.log("hii im in handle next clcik");

    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
      /* here 20 s the page size */
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=0401cd61fdd14301a4faf08f54e38cd3&page=${
        this.state.page + 1
      }&pageSize=20`;
      let data = await fetch(url);
      let parsedData = await data.json();

      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
      });
    }
  };

  render() {
    console.log("hii im in render");
    return (
      <div className="container my-3">
        <h2>NewsBucket - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <Newsitem
                  title={element.title ? element.title : ""}
                  description={element.description ? element.publishedAt : ""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="buttons d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            class="btn btn-primary"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            class="btn btn-primary"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}
