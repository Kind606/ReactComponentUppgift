import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { fetchCatImages } from "../data";
import CatCard from "./ForYouPageCard";


const CatList = styled.div`
  display: flex;
  gap: 16px;
  padding: 12px;
  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.background};
  transition: ease-in 150ms;
`;


export default function ForYouPage() {
  const { isPending, error, data } = useQuery({
    queryKey: ["AllCats"],
    queryFn: fetchCatImages,
  });


  if (isPending) return "Loading...";


  if (error) return "An error has occurred: " + error.message;


  return (
    <CatList>
      {data.map((cat) => (
        <CatCard key={cat.id} cat={cat} />
      ))}
    </CatList>
  );
}
