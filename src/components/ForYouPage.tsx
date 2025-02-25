import { useQuery } from "@tanstack/react-query";
import { fetchCatImages } from "../data";
import CatCard from "./ForYouPageCard";

export default function ForYouPage() {
  const { isPending, error, data } = useQuery({
    queryKey: ["AllCats"],
    queryFn: fetchCatImages,
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      {data.map((cat) => (
        <CatCard key={cat.id} cat={cat} />
      ))}
    </div>
  );
}
