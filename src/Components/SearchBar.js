import React, { Component } from "react";

export default class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      input: ""
    };
  }

  handleChange = e => {
    const input = e.target.value;
    this.setState({ input }, () => this.props.performSearch(this.state.input));
  };

  render() {
    return (
      <div className="sixteen wide column">
        <div className="ui segment secondary">
          <div className="ui huge fluid input">
            <input
              type="text"
              value={this.state.input}
              onChange={this.handleChange}
            />
          </div>
        </div>
      </div>
    );
  }
}
