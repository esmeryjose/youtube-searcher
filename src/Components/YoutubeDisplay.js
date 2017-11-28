import React from "react";

const YoutubeDisplay = ({ video }) => {
  const { videoId } = video.id;
  const url = `https://www.youtube.com/embed/${videoId}`;
  const { description, title } = video.snippet;

  return (
    <div className="twelve wide column">
      <div className="ui raised segments">
        <div className="ui segment">
          <div className="ui embed">
            <iframe title={videoId} src={url} frameBorder="1" />
          </div>
        </div>
        <div className="ui segment">
          <h4>{title}</h4>
        </div>
        <div className="ui secondary segment">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default YoutubeDisplay;
