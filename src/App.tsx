import { useState } from "react";
import { Outlet } from "react-router";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styleComponents/theme";

const Header = styled.header`
  background: ${({ theme }) =>
    theme.secondBackground}; // Background changes based on theme
  display: flex;
  justify-content: space-between;
`;

export default function App() {
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <div>
          <Header>
            <h1>Hello World</h1>
          </Header>
          <aside>
            <p>SideBar</p>
          </aside>
          <main>
            <Outlet />
          </main>
        </div>
      </>
    </ThemeProvider>
  );
}
