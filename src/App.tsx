import { useState } from "react";
import { Link, Outlet } from "react-router";
import styled, { ThemeProvider } from "styled-components";
import ThemeToggler from "./components/Themebutton";
import { GlobalStyles } from "./styleComponents/globalStyle";
import { darkTheme, lightTheme } from "./styleComponents/theme";

const Container = styled.div`
position: relative;
display: flex;
gap: 16px;
`

const SideBar = styled.aside`
  background-color: ${({ theme }) => theme.background};
  padding: 40px;
  width: 200px;
  color: white;
  display: flex;
  flex-direction: column;
  transition: ease-in 150ms;
  position: sticky;
  top: 0;
  left: 0;
  height: 300px;
  border-bottom-right-radius: 15px;
`;

const Header = styled.header`
  background: ${({ theme }) => theme.secondBackground};
  display: flex;
  justify-content: space-between;
  transition: background 150ms ease-in;
  height: 12vh;
`;

const H1 = styled.h1`
  padding: 0px 0px 0px 10px;
`;

const MainContent = styled.main`
  background-color: ${({ theme }) => theme.background};
  min-height: 88vh;
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
            <H1>CATalog</H1>
            <ThemeToggler onToggle={themeToggler} />
          </Header>
          <Container>
            <SideBar>
              <H2>Links</H2>
              <NavLink to={"/"}>Home</NavLink>
              <NavLink to={"/About"}>About</NavLink>
            </SideBar>
            <MainContent>
              <Outlet />
            </MainContent>
          </Container>
        </div>
      </>
    </ThemeProvider>
  );
}
