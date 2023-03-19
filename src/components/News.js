import React, { Component } from 'react'
import Newsitem from './Newsitem'

export default class News extends Component {
  render() {
    return (
      <div className='container my-3'>
        <h2>NewsBucket - Top Headlines</h2>
        <div className="row">
            <div className="col-md-4">
                <Newsitem title = 'NewsData' description = "fghjk "/>
            </div>
            <div className="col-md-4">
                <Newsitem title = 'NewsData' description = "fghjk "/>
            </div>
            <div className="col-md-4">
                <Newsitem title = 'NewsData' description = "fghjk "/>
            </div>
        </div>
        <div className="row">
            <div className="col-md-4">
                <Newsitem title = 'NewsData' description = "fghjk "/>
            </div>
            <div className="col-md-4">
                <Newsitem title = 'NewsData' description = "fghjk "/>
            </div>
            <div className="col-md-4">
                <Newsitem title = 'NewsData' description = "fghjk "/>
            </div>
        </div>
      </div>
    )
  }
}
