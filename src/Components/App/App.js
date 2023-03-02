import React from "react";
import './App.css';
import { SearchBar } from "../SearchBar/SearchBar.js";
import { SearchResults } from "../SearchResults/SearchResults.js";
import { Playlist } from "../Playlist/Playlist.js";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchResults: [
              {name: "Hallowed Be Thy Name", artist: "Iron Maiden", album: "Number of the Beast", id: 666},
              {name: "Angel of Death", artist: "Slayer", album: "Reign in Blood", id: 1},
              {name: "song3", artist: "arist3", album: "album3", id: 3}
            ],
            playlistName: "Bongo, bongo playlist",
            playlistTracks: [
              {name: "Hanger 18", artist: "Megadeth", album: "Rust in Peace", id: 4},
              {name: "song5", artist: "artist5", album: "album5", id: 5},
              {name: "Jungle Party", artist: "Donkey Kong", album: "Party in the Jungle", id: 6}
            ]
        }

    }

    render() {
        return (
          <div>
            <h1><em>Triple</em> ja<span className="highlight">MMM</span></h1>
            <div className="App">
              <SearchBar />
              <div className="App-playlist">
                <SearchResults searchResults={this.state.searchResults}/>
                <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}/>
              </div>
            </div>
          </div>
        );
    }
}

export default App;