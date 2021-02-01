import "./styles.css";
import { useState, useEffect } from "react";
import Player from "./components/Player";
import Upload from "./components/upload/upload";

export default function App() {
  const [songs] = useState([
    {
      title: "yoo",
      artist: "fgvhbkj",
      img_src:
        "https://thumbs.dreamstime.com/b/woman-praying-free-birds-to-nature-sunset-background-woman-praying-free-birds-enjoying-nature-sunset-99680945.jpg",
      src: "./music/13.01.mp3"
    },
    {
      title: "2",
      artist: "fgkj",
      img_src: "e",
      src: "./music/t.mp3"
    }
  ]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 0);
  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);
  return (
    <div className="App">
      <Upload />
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
  );
}
