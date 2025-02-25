import { useState } from "react";
import { Outlet } from "react-router";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styleComponents/globalStyle";
import { darkTheme, lightTheme } from "./styleComponents/theme";

const SideBar = styled.aside`
  background-color: ${({ theme }) =>
    theme.background}; // Background color based on theme
  padding: 40px;
  width: 200px;
  color: white;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  background: ${({ theme }) =>
    theme.secondBackground}; // Background changes based on theme
  display: flex;
  justify-content: space-between;
`;

const MainContent = styled.main`
  background-color: ${({ theme }) => theme.background};
  padding: 16px;
  flex: 1;
`;

const ThemeButton = styled.button`
  padding: 5px 10px 5px 10px;
  background: red;
  border: none;
  cursor: pointer;
`;

export default function App() {
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <div>
          <Header>
            <h1>Test Header</h1>
            <ThemeButton onClick={themeToggler}>Theme</ThemeButton>
          </Header>
          <div style={{ display: "flex", gap: "16px" }}>
            <SideBar>
              <p>Aside</p>
            </SideBar>
            <MainContent>
              <Outlet />
            </MainContent>
          </div>
        </div>
      </>
    </ThemeProvider>
  );
}
