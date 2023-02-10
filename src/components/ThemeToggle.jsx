import React, { useContext } from "react";
import { BsFillSunFill, BsMoonFill } from "react-icons/bs";
import { ThemeContext } from "./../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div>
      <div>
        <div>
          <BsFillSunFill
            onClick={() => setTheme("dark")}
            className={theme !== "light" ? "hidden" : "block"}
          />
          <BsMoonFill
            onClick={() => setTheme("light")}
            className={theme === "light" ? "hidden" : "block"}
          />
        </div>
      </div>
    </div>
  );
};

export default ThemeToggle;
