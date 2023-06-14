import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  Route,
  HashRouter as Router,
  Routes,
  useNavigate,
  useParams,
} from "react-router-dom";

const RELEASE: boolean = false;

if (RELEASE === false) {
  new EventSource("/esbuild").addEventListener("change", () =>
    location.reload()
  );
}

type Item = {
  content: string;
  focus: boolean;
};

function App() {
  const [items, setItems] = useState<Item[]>([{ content: "", focus: true }]);
  const [keyState, setKeyState] = useState<string>("");

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id !== undefined) {
      const appState: Item[] = JSON.parse(decompress(atob(id)));
      setItems(appState);
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
          const url = btoa(compress(JSON.stringify(items)));
          navigate(`/${url}`);
        }
      }}
    >
      {items.map((item: Item, idx: number) => {
        if (idx === 0) {
          return (
            <input
              autoFocus={item.focus}
              className={"title"}
              onChange={(event) => {
                let tempItems = [...items];
                tempItems[idx].content = event.target.value;
                tempItems[idx].focus = true;
                setItems([...tempItems]);
              }}
              onKeyDown={(event) => {
                if (event.key === "Enter" && items.length === 1) {
                  let tempItems = [...items];
                  tempItems[idx].content += " ";
                  setItems([...tempItems, { content: "", focus: true }]);
                }
              }}
              placeholder={"Untitled"}
              type="text"
              value={item.content}
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
        }
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
