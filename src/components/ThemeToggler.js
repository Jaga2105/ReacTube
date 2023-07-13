import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkSide from "../hooks/useDarkMode";

const ThemeToggler=()=> {
    console.log("1st")
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
    <>
      <DarkModeSwitch
        style={{ marginBottom: "2rem", marginTop: "1rem" }}
        checked={darkSide}
        onChange={toggleDarkMode}
        size={25}
      />
    </>
  );
}

export default ThemeToggler;