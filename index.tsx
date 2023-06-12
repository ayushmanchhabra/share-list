import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";

new EventSource("/esbuild").addEventListener("change", () => location.reload());

type Item = {
  content: string;
  focus: boolean;
};

function App() {
  const [name, setName] = useState<Item>({} as Item);
  const [items, setItems] = useState<Item[]>([]);

  return (
    <div>
      <input
        autoFocus={name.focus}
        className={"title"}
        onChange={(e) => setName({ content: e.target.value, focus: true })}
        onKeyDown={(event) => {
          if (event.key === "Enter" && items.length === 0) {
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
                setItems([...items, { content: "", focus: true }]);
              }
              if (event.key === "Backspace") {
                let tempItems = [...items];
                let item = tempItems[idx];
                if (item.content.length === 0 && idx > 0) {
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
    <StrictMode>
      <App />
    </StrictMode>
  );
}
