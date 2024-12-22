import { useParams } from "react-router-dom";
import PersonDetailPage from "./PersonDetailsPage";
import MovieTvDetailPage from "./MovieTvDetailsPage";

const DetailsPage = () => {
  const { explore } = useParams();

  if (explore === "person") {
    return <PersonDetailPage />;
  }
  if (explore === "movie" || explore === "tv") {
    return <MovieTvDetailPage />;
  }
};

export default DetailsPage;
