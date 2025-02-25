import { Link } from "react-router";

type CatCardProps = {
  cat: { id: string; url: string };
};

export default function CatCard({ cat }: CatCardProps) {
  return (
    <div>
      <Link to={`/`}>
        <img src={cat.url} alt="Cat" />
      </Link>
      <span>{cat.id}</span>
    </div>
  );
}
