import React, { Component } from 'react';
import './Search.css';

class SearchBox extends Component {

  handleChange(event) {
    event.target.select();
  }
  render() {
    return (
        <div className="row">
          <div className="searchbox">
            <form className="searchbox">
              <input ref="search teams" onClick={this.handleChange} type="text" placeholder="Search teams..." id="q" />
            </form>
          </div>
        </div>
    )
  }
}
export default SearchBox;
