import React, { Component } from "react";
import SearchBar from "./SearchBar";
import YoutubeDisplay from "./YoutubeDisplay";
import YoutubeItemList from "./YoutubeItemList";
import Key from "./Keys";

export default class YoutubeApp extends Component {
  constructor() {
    super();
    this.state = {
      selected: "",
      videoList: []
    };
  }

  performSearch = searchInput => {
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${
        Key.API_KEY
      }&q=${searchInput}&type=video`
    )
      .then(res => res.json())
      .then(res => {
        this.setState({
          selected: res.items[0],
          videoList: res.items
        });
      });
  };

  changeSelected = selected => {
    this.setState({ selected });
  };

  componentDidMount() {
    this.performSearch("puppy");
  }

  renderComponents() {
    return (
      <div className="ui grid container">
        <YoutubeDisplay video={this.state.selected} />
        <YoutubeItemList
          videoList={this.state.videoList}
          changeSelected={this.changeSelected}
        />
      </div>
    );
  }

  render() {
    return (
      <div>
        <SearchBar performSearch={this.performSearch} />
        {this.state.selected ? this.renderComponents() : null}
      </div>
    );
  }
}
