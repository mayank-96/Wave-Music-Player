import { useState } from "react";
// Importing Components
import Song from "./components/Song";
import Player from "./components/Player";
// Import Styles
import "./styles/app.scss";
// Import Util
import data from "./util";

function App() {
  const [songs, setsongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
      />
    </div>
  );
}

export default App;
