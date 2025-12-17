import "./styles.css";
import { useState } from "react";

function ThemeSwitch({ onClick }) {
  return <button onClick={onClick}>Swith Theme</button>;
}

export default function App() {
  const [theme, setTheme] = useState("darkTheme");
  return (
    <>
      <main className={theme}>
        <ThemeSwitch
          onClick={() =>
            setTheme(
              theme === "theme1"
                ? "theme2"
                : theme === "theme2"
                ? "theme3"
                : "theme1"
            )
          }
        />
        <h2>Hello world!</h2>
      </main>
    </>
  );
}
