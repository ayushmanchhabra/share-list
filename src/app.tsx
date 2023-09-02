import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { UserDialog, UserStatus } from "components";
import { deserialise, serialise, spotifyOauth } from "providers";
import { PlaylistSchema, SongSchema, UserStatusSchema } from "schema";

export function App() {
  const [playlist, setPlaylist] = useState<PlaylistSchema>({
    title: "",
    songs: [],
    focus: true,
  } as PlaylistSchema);
  const [keyState, setKeyState] = useState<string>("");
  const [userDialogStatus, setUserDialogStatus] = useState<boolean>(false);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id !== undefined) {
      const appState: PlaylistSchema = deserialise<PlaylistSchema>(id);
      setPlaylist(appState);
    }
  }, [id]);

  const handleUserDialogOpen = (_: any) => {
    setUserDialogStatus(true);
  };

  const handleUserDialogClose = (_: any) => {
    setUserDialogStatus(false);
  };

  const handleSpotifyClick = async (_: any) => {
    await spotifyOauth();
  }; 

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
      <UserStatus handleOpen={handleUserDialogOpen} status={UserStatusSchema.LOG_IN} />
      <input
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
      />

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
    <UserDialog
      onClose={handleUserDialogClose}
      open={userDialogStatus}
      onSpotifyClick={handleSpotifyClick}
    />
    </div>
  );
}
