import { useState, useEffect } from "react";

export default function useDarkSide() {
  const [theme, setTheme] = useState(localStorage.theme);
  console.log(theme)
  console.log("2nd")
  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
    console.log("3rd")
  }, [theme, colorTheme]);

  return [colorTheme, setTheme];
}