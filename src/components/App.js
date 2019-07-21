import React, { Component } from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

export default class App extends Component {
    state = {
        videos: []
    };
    onTermSubmit = async term => {
        const response = await youtube.get("/search", {
            params: {
                q: term
            }
        });
        this.setState({ videos: response.data.items });
    };
    render() {
        const { videos } = this.state;

        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <VideoList videos={videos} />
            </div>
        );
    }
}
