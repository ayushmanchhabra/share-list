import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Scopes } from "@spotify/web-api-ts-sdk";

import { LoginDialog, LogoutDialog, UserStatus } from "components";
import { deserialise, serialise } from "providers";
import { PlaylistSchema, SongSchema, UserStatusSchema } from "schema";
import { useSpotify } from "providers";

export function App() {
  const [playlist, setPlaylist] = useState<PlaylistSchema>({
    title: "",
    songs: [],
    focus: true,
  } as PlaylistSchema);
  const [keyState, setKeyState] = useState<string>("");
  const [isLoginDialogOpen, setIsLoginDialogOpen] = useState<boolean>(false);
  const [isLogoutDialogOpen, setIsLogoutDialogOpen] = useState<boolean>(false);
  const [userStatus, setUserStatus] = useState<UserStatusSchema>(UserStatusSchema.LOG_IN);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const { id } = useParams();
  const navigate = useNavigate();
  const {
    api,
    authenticate,
  } = useSpotify(
    import.meta.env.VITE_SPOTIFY_CLIENT_ID,
    import.meta.env.VITE_SPOTIFY_REDIRECT_URI,
    Scopes.userDetails,
  );

  useEffect(() => {
    if (api !== null) {
      setIsLoggedIn(true);
    }
  }, [api]);

  useEffect(() => {
    if (isLoggedIn) {
      setUserStatus(UserStatusSchema.LOG_OUT);
    }
  }, [isLoggedIn])

  useEffect(() => {
    if (id !== undefined) {
      const appState: PlaylistSchema = deserialise<PlaylistSchema>(id);
      setPlaylist(appState);
    }
  }, [id]);

  const handleLoginDialogOpen = (_: any) => {
    setIsLoginDialogOpen(true);
  };

  const handleLoginDialogClose = () => {
    setIsLoginDialogOpen(false);
  };

  const handleLogoutDialogOpen = (_: any) => {
    setIsLogoutDialogOpen(true);
  };

  const handleLogoutDialogClose = () => {
    setIsLogoutDialogOpen(false);
  };

  const handleSpotifyLogin = (_: any) => {
    return authenticate()
      .then(() => {
        setUserStatus(UserStatusSchema.LOG_OUT);
        setIsLoginDialogOpen(false);
      })
      .catch((error) => console.error(error))
  };

  const handleLogout = () => {
    if (api !== null) {
      api.logOut();
      localStorage.removeItem("ACCESS_TOKEN");
    }
    setUserStatus(UserStatusSchema.LOG_IN);
    setIsLogoutDialogOpen(false);
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
      <UserStatus
        handleOpen={userStatus === UserStatusSchema.LOG_OUT ? handleLogoutDialogOpen : handleLoginDialogOpen}
        status={userStatus}
      />
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
      <LoginDialog
        onClose={handleLoginDialogClose}
        open={isLoginDialogOpen}
        onSpotifyLogin={handleSpotifyLogin}
      />
      <LogoutDialog
        onClose={handleLogoutDialogClose}
        open={isLogoutDialogOpen}
        onLogout={handleLogout}
      />
    </div>
  );
}
