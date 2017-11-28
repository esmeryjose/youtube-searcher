import React from "react";
import YoutubeItem from "./YoutubeItem";

const YoutubeItemList = ({ changeSelected, videoList }) => {
  const renderVideoItem = (item, id) => (
    <YoutubeItem key={id} item={item} changeSelected={changeSelected} />
  );

  return (
    <div className="four wide column">
      <div className="ui relaxed items">{videoList.map(renderVideoItem)}</div>
    </div>
  );
};

export default YoutubeItemList;
