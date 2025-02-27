import styled from "styled-components";

const ThemeButton = styled.button`
  background: ${({ theme }) => theme.secondBackground};
  border: none;
  cursor: pointer;
  font-size: 30px;
  transition: ease-in 150ms;
`;

interface ThemeTogglerProps {
  onToggle: () => void;
}

const ThemeToggler: React.FC<ThemeTogglerProps> = ({ onToggle }) => {
  return <ThemeButton onClick={onToggle}>🌔</ThemeButton>;
};

export default ThemeToggler;
