import { useState } from "react";
import { Link, Outlet } from "react-router";
import styled, { ThemeProvider } from "styled-components";
import ThemeToggler from "./components/Themebutton";
import { GlobalStyles } from "./styleComponents/globalStyle";
import { darkTheme, lightTheme } from "./styleComponents/theme";

const SideBar = styled.aside`
  background-color: ${({ theme }) => theme.background};
  padding: 40px;
  width: 200px;
  color: white;
  display: flex;
  flex-direction: column;
  transition: ease-in 150ms;
`;

const Header = styled.header`
  background: ${({ theme }) => theme.secondBackground};
  display: flex;
  justify-content: space-between;
  transition: background 150ms ease-in;
`;

const H1 = styled.h1`
  padding: 0px 0px 0px 10px;
`;

const MainContent = styled.main`
  background-color: ${({ theme }) => theme.background};
  height: 88vh;
  transition:background ease-in 150ms;
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.secondtext};
  text-decoration: none;
  padding-top: 10px;
  transition: ease-in 150ms;
  &:hover {
    color: red;
  }
  padding: ;
`;

const H2 = styled.h2`
  color: ${({ theme }) => theme.secondtext};
  transition: ease-in 150ms;
`;

export default function App() {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <div>
          <Header>
            <H1>Catalog</H1>
            <ThemeToggler onToggle={themeToggler} />
          </Header>
          <div style={{ display: "flex", gap: "16px" }}>
            <SideBar>
              <H2>Links</H2>
              <NavLink to={"/"}>Home</NavLink>
              <NavLink to={"/About"}>About</NavLink>
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
