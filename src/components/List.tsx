import {
  ListItem,
  ListItemText,
  List as MuiList,
  TextField,
  Typography,
} from "@mui/material";

import { PlaylistSchema, SongSchema } from "schema";

import style from "./List.module.scss";

interface ListProps {
  title: PlaylistSchema["title"];
  items: PlaylistSchema["songs"];
  handleTitleChange: () => void;
}

export function List({
  title,
  handleTitleChange,
}: // items,
ListProps): JSX.Element {
  return (
    <>
      <Typography variant="h2" className={style.list_title}>
        <TextField value={title} onChange={handleTitleChange} />
      </Typography>
      {/* <MuiList>
                {items.map((item: SongSchema, idx: number) => {
                    return (
                        <ListItem key={idx}>
                            <ListItemText>{item.title} | {item.artist}</ListItemText>
                        </ListItem>
                    );
                })}
            </MuiList> */}
    </>
  );
}
