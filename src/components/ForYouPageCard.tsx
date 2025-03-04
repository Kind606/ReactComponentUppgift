import { Link } from "react-router";
import styled from "styled-components";


const CardContainer = styled.div`
  background-color: ${({ theme }) => theme.secondBackground};
  border-radius: 8px;
  transition: background-color 0.3s ease;
    transition: ease-in 150ms;

  &:hover {
    background-color: ${({ theme }) => theme.hovercolor};
  }
`;


const CatImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
`;


const StyledLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: ${({ theme }) =>
    theme.secondText}; // Ensure text color is theme dependent
  padding: 16px;
  transition: ease-in 150ms;


  &:hover h3 {
    color: ${({ theme }) => theme.primary};
  }
`;


type CatCardProps = {
  cat: { id: string; url: string };
};


export default function CatCard({ cat }: CatCardProps) {
  return (
    <CardContainer>
      <StyledLink to={`/`}>
        <CatImage src={cat.url} alt="Cat" />
      </StyledLink>
    </CardContainer>
  );
}
