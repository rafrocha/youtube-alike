import React from "react";

const VideoDetail = ({ selectedVideo }) => {
    if (!selectedVideo) {
        return <div>loading...</div>;
    }
    const videoSrc = `https://www.youtube.com/embed/${
        selectedVideo.id.videoId
    }`;
    return (
        <div>
            <div className="ui embed">
                <iframe title={selectedVideo.snippet.title} src={videoSrc} />
            </div>
            <div className="ui segment">
                <h4 className="ui header">{selectedVideo.snippet.title}</h4>
                <p className="">{selectedVideo.snippet.description}</p>
            </div>
        </div>
    );
};

export default VideoDetail;
