import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { dummy, decompress, compress } from "providers";
import { PlaylistSchema, SongSchema } from "schema";

export function App() {
  const [playlist, setPlaylist] = useState<PlaylistSchema>({
    title: "",
    songs: [],
  } as PlaylistSchema);
  const [keyState, setKeyState] = useState<string>("");

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id !== undefined) {
      const appState: PlaylistSchema = JSON.parse(decompress(atob(id)));
      setPlaylist(appState);
    }
  }, [id]);

  return (
    <div
      onKeyDown={(event) => {
        if (event.key === "Control") {
          setKeyState(event.key);
        }
        if (keyState === "Control" && event.key !== "s") {
          setKeyState("");
        }
        if (keyState === "Control" && event.key === "s") {
          event.preventDefault();
          const url = btoa(compress(JSON.stringify(playlist.songs)));
          navigate(`/${url}`);
        }
      }}
    >
      {/* <List /> */}
      {playlist.songs.map((item: SongSchema, idx: number) => {
        if (idx === 0) {
          return (
            <input
              autoFocus={item.focus}
              className={"title"}
              key={idx}
              onChange={(event) => {
                let tempItems = [...playlist.songs];
                tempItems[idx].title = event.target.value;
                tempItems[idx].focus = true;
                setPlaylist({ ...playlist, songs: tempItems });
              }}
              onKeyDown={(event) => {
                if (event.key === "Enter" && playlist.songs.length === 1) {
                  let tempItems = [...playlist.songs];
                  tempItems[idx].title += " ";
                  setPlaylist({
                    ...playlist,
                    songs: [
                      ...tempItems,
                      { title: "", artist: "", focus: true },
                    ],
                  });
                }
              }}
              placeholder={"Untitled"}
              type="text"
              value={item.title}
            />
          );
        } else {
          return (
            <input
              autoFocus={item.focus}
              className={"item"}
              key={idx}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  let tempItems = [...playlist.songs];
                  tempItems[idx].title += " ";
                  setPlaylist({
                    ...playlist,
                    songs: [
                      ...tempItems,
                      { title: "", artist: "", focus: true },
                    ],
                  });
                }
                if (event.key === "Backspace") {
                  let tempItems = [...playlist.songs];
                  let item = tempItems[idx];
                  if (item.title.length === 0 && idx >= 0) {
                    event.currentTarget.blur();
                    const prev = event.currentTarget
                      .previousSibling as HTMLElement;
                    prev.focus();
                    tempItems.splice(idx, 1);
                    setPlaylist({ ...playlist, songs: [...tempItems] });
                  }
                }
              }}
              onChange={(event) => {
                let tempItems = [...playlist.songs];
                tempItems[idx].title = event.target.value;
                tempItems[idx].focus = true;
                setPlaylist({ ...playlist, songs: [...tempItems] });
              }}
              value={item.title}
            />
          );
        }
      })}
    </div>
  );
}
