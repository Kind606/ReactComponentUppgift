import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.secondtext};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: ease-in 150ms;
   
  }
`;
