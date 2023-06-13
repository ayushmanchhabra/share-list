import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  Route,
  HashRouter as Router,
  Routes,
  useNavigate,
  useParams,
} from "react-router-dom";

new EventSource("/esbuild").addEventListener("change", () => location.reload());

type Item = {
  content: string;
  focus: boolean;
};

type AppSchema = {
  name: Item;
  items: Item[];
};

function App() {
  const [name, setName] = useState<Item>({ content: "", focus: true });
  const [items, setItems] = useState<Item[]>([]);
  const [keyState, setKeyState] = useState<string>("");

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id !== undefined) {
      const appState: AppSchema = JSON.parse(decompress(atob(id)));
      setName(appState.name);
      setItems(appState.items);
    }
  }, [id]);

  function compress(data: string): string {
    return data;
  }

  function decompress(data: string): string {
    return data;
  }

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
          const url = btoa(compress(JSON.stringify({ name, items })));
          navigate(`/${url}`);
        }
      }}
    >
      <input
        autoFocus={name.focus}
        className={"title"}
        onChange={(e) => setName({ content: e.target.value, focus: true })}
        onKeyDown={(event) => {
          if (event.key === "Enter" && items.length === 0) {
            setName({ ...name, content: name.content + " " });
            setItems([{ content: "", focus: true }]);
          }
        }}
        placeholder={"Untitled"}
        type="text"
        value={name.content}
      />
      {items.map((item: Item, idx: number) => {
        return (
          <input
            autoFocus={item.focus}
            className={"item"}
            key={idx}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                let tempItems = [...items];
                tempItems[idx].content += " ";
                setItems([...tempItems, { content: "", focus: true }]);
              }
              if (event.key === "Backspace") {
                let tempItems = [...items];
                let item = tempItems[idx];
                if (item.content.length === 0 && idx >= 0) {
                  event.currentTarget.blur();
                  const prev = event.currentTarget
                    .previousSibling as HTMLElement;
                  prev.focus();
                  tempItems.splice(idx, 1);
                  setItems([...tempItems]);
                }
              }
            }}
            onChange={(event) => {
              let tempItems = [...items];
              tempItems[idx].content = event.target.value;
              tempItems[idx].focus = true;
              setItems([...tempItems]);
            }}
            value={item.content}
          />
        );
      })}
    </div>
  );
}

const root: HTMLElement | null = document.getElementById("root");

if (root !== null) {
  createRoot(root).render(
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/:id" element={<App />} />
      </Routes>
    </Router>
  );
}
