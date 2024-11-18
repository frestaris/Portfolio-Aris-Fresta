import { useSelector } from "react-redux";

function ThemeProvider({ children }) {
  const { theme } = useSelector((state) => state.theme);

  const themeClasses =
    theme === "dark" ? "bg-dark text-light" : "bg-white text-dark";

  return <div className={themeClasses}>{children}</div>;
}

export default ThemeProvider;
