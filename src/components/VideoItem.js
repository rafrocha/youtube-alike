import React from "react";
import "./VideoItem.css";

const VideoItem = ({ video, onSelectVideo }) => {
    const makeOnVideoSelect = () => {
        onSelectVideo(video);
    };
    return (
        <div className="video-item item" onClick={makeOnVideoSelect}>
            <img
                className="ui image"
                alt="video"
                src={video.snippet.thumbnails.medium.url}
            />
            <div className="content">
                <div className="header">{video.snippet.title}</div>
            </div>
        </div>
    );
};

export default VideoItem;
