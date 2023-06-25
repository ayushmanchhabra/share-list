import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IconButton, Typography } from "@mui/material";
import {
  FileUpload as FileUploadIcon,
  GetApp as GetAppIcon,
  Login as LoginIcon,
  Share as ShareIcon,
} from "@mui/icons-material";

import { deserialise, serialise } from "providers";
import { PlaylistSchema, SongSchema } from "schema";

export function App() {
  const [playlist, setPlaylist] = useState<PlaylistSchema>({
    title: "",
    songs: [],
    focus: true,
  } as PlaylistSchema);
  const [keyState, setKeyState] = useState<string>("");

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id !== undefined) {
      const appState: PlaylistSchema = deserialise<PlaylistSchema>(id);
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
          const url = serialise<PlaylistSchema>(playlist);
          navigate(`/${url}`);
        }
      }}
    >
      {/* <input
        autoFocus={playlist.focus}
        className={"title"}
        onChange={(event) => {
          setPlaylist({ ...playlist, title: event.target.value, focus: true });
        }}
        onKeyDown={(event) => {
          if (event.key === "Enter" && playlist.songs.length === 0) {
            setPlaylist({
              ...playlist,
              title: playlist.title + " ",
              songs: [{ title: "", artist: "", focus: true }],
            });
          }
        }}
        placeholder={"Untitled"}
        type="text"
        value={playlist.title}
      /> */}
      <Typography className="title">Share List</Typography>
      <Typography>
        <IconButton style={{ height: 40, width: 40 }}>
          <LoginIcon style={{ height: 25, width: 25 }} />
        </IconButton>
        Create playlist
      </Typography>
      <Typography>
        <IconButton style={{ height: 40, width: 40 }}>
          <ShareIcon style={{ height: 25, width: 25 }} />
        </IconButton>
        Share playlist
      </Typography>
      <Typography>
        <IconButton style={{ height: 40, width: 40 }}>
          <GetAppIcon style={{ height: 25, width: 25 }} />
        </IconButton>
        Import playlist
      </Typography>
      <Typography>
        <IconButton style={{ height: 40, width: 40 }}>
          <FileUploadIcon style={{ height: 25, width: 25 }} />
        </IconButton>
        Export playlist
      </Typography>

      {playlist.songs.map((item: SongSchema, idx: number) => {
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
                  songs: [...tempItems, { title: "", artist: "", focus: true }],
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
            placeholder="Search..."
          />
        );
      })}
    </div>
  );
}
