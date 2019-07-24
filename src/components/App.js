import React, { Component } from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

export default class App extends Component {
    state = {
        videos: [],
        selectedVideo: null
    };

    componentDidMount() {
        this.onTermSubmit("javascript");
    }

    onTermSubmit = async term => {
        const response = await youtube.get("/search", {
            params: {
                q: term
            }
        });
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
    };

    onSelectVideo = video => {
        this.setState({
            selectedVideo: video
        });
    };

    render() {
        const { videos, selectedVideo } = this.state;

        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail selectedVideo={selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList
                                onSelectVideo={this.onSelectVideo}
                                videos={videos}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
