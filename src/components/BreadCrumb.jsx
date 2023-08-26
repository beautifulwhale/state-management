import { useMatches } from "react-router-dom";

export default function BreadCrumb() {
  const matches = useMatches()
  console.log('matches', matches);
}

