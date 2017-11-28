import React from "react";

const YoutubeItem = ({ item, changeSelected }) => {
  const { url } = item.snippet.thumbnails.default;
  const { title } = item.snippet;
  const handleClick = () => changeSelected(item);

  return (
    <div className="four wide column">
      <div className="ui relaxed items">
        <div className="item">
          <div className="ui small image">
            <img src={url} alt="" onClick={handleClick} />
          </div>
          <div className="content">{title}</div>
        </div>
      </div>
    </div>
  );
};

export default YoutubeItem;
