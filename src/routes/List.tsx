import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Scopes } from "@spotify/web-api-ts-sdk";

import {
  LoginDialog,
  LogoutDialog,
  Notification,
  UserStatus,
} from "components";
import {
  NotificationSchema,
  PlaylistSchema,
  SongSchema,
  UserStatusSchema,
  deserialiseService,
  serialiseService,
} from "providers";
import { useSpotify } from "providers";

export function List() {
  const [playlist, setPlaylist] = useState<PlaylistSchema>({
    title: "",
    songs: [],
    focus: true,
  } as PlaylistSchema);
  const [keyState, setKeyState] = useState<string>("");
  const [isLoginDialogOpen, setIsLoginDialogOpen] = useState<boolean>(false);
  const [isLogoutDialogOpen, setIsLogoutDialogOpen] = useState<boolean>(false);
  const [userStatus, setUserStatus] = useState<UserStatusSchema>(
    UserStatusSchema.LOGGED_OUT,
  );
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isNotificationOpen, setisNotificationOpen] = useState<boolean>(false);
  const [notificationMessage, setNotificationMessage] = useState<string>("");
  const [notificationType, setNotificationType] = useState<NotificationSchema>(
    NotificationSchema.INFO,
  );

  const { id } = useParams();
  const navigate = useNavigate();
  const { api, authenticate } = useSpotify(
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
      setUserStatus(UserStatusSchema.LOGGED_IN);
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (id !== undefined) {
      const appState: PlaylistSchema = deserialiseService<PlaylistSchema>(id);
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
        setUserStatus(UserStatusSchema.LOGGED_IN);
        setIsLoginDialogOpen(false);
        setisNotificationOpen(true);
        setNotificationMessage("Successfully logged in via Spotify");
        setNotificationType(NotificationSchema.SUCCESS);
      })
      .catch((error) => {
        setisNotificationOpen(true);
        setNotificationMessage(error.message);
        setNotificationType(NotificationSchema.ERROR);
      });
  };

  const handleLogout = () => {
    if (api !== null) {
      api.logOut();
      localStorage.removeItem("ACCESS_TOKEN");
    }
    setUserStatus(UserStatusSchema.LOGGED_OUT);
    setIsLogoutDialogOpen(false);
    setisNotificationOpen(true);
    setNotificationMessage("Successfully logged out via Spotify");
    setNotificationType(NotificationSchema.INFO);
  };

  const handleNotificationClose = () => {
    setisNotificationOpen(false);
    setNotificationMessage("");
    setNotificationType(NotificationSchema.INFO);
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
          const url = serialiseService<PlaylistSchema>(playlist);
          navigate(`/list/${url}`);
        }
      }}
    >
      <UserStatus
        handleOpen={
          userStatus === UserStatusSchema.LOGGED_IN
            ? handleLogoutDialogOpen
            : handleLoginDialogOpen
        }
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
      <Notification
        onClose={handleNotificationClose}
        open={isNotificationOpen}
        message={notificationMessage}
        type={notificationType}
      />
    </div>
  );
}
