import React from "react";

const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = React.useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  console.log("ThemeProvider rendered with theme:", theme);
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`${theme}-theme`}>{children}</div>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => React.useContext(ThemeContext);

export default ThemeProvider;
