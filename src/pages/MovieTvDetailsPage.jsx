import { useParams } from "react-router-dom";
import useFetchDetail from "../hooks/useFetchDetail";
import DetailStats from "../components/DetailStats";
import HorizontalScrollCard from "../components/HorizontalScrollCard";
import Backdrop from "../components/Backdrop";
import { useSelector } from "react-redux";
import UseFetch from "../hooks/UseFetch";
import Divider from "../components/Divider";
import moment from "moment";

const MovieTvDetailPage = () => {
    const params = useParams();
    const imageUrl = useSelector((state) => state.movieData.imageUrl);
    const { data } = useFetchDetail(`/${params.explore}/${params?.id}`);
    const { data: similarData } = UseFetch(`/${params?.explore}/${params?.id}/similar`);
    const { data: recommendationsData } = UseFetch(`/${params?.explore}/${params?.id}/recommendations`);
    const { data: castData } = useFetchDetail(`/${params.explore}/${params.id}/credits`);
    const duration = (Number(data?.runtime) / 60).toFixed(1).split(".");

    return (
        <div>
            <Backdrop imageUrl={imageUrl} backdropPath={data?.backdrop_path} title={data?.title} name={data?.name} />
            <div className="container mx-auto px-2 py-16 lg:py-0 flex flex-col lg:flex-row gap-5 lg:gap-10 ">
                <div className="relative mx-auto lg:-mt-28 lg:mx-0 w-fit min-w-60">
                    <img
                        src={data?.poster_path ? imageUrl + data?.poster_path : imageUrl + data?.profile_path}
                        alt=""
                        className="lg:h-[60vh] lg:w-[30vw] h-80 w-60 object-contain rounded"
                    />
                </div>
                <div className="flex-grow">
                    <h2>{data?.title || data?.name}</h2>
                    <p className="text-neutral-400">{data?.tagline}</p>
                    <Divider />
                    <DetailStats
                        rating={data?.vote_average}
                        views={data?.vote_count}
                        duration={duration}
                    />
                    <Divider />
                    <div>
                        <h3 className="text-xl font-bold text-white">Overview</h3>
                        <p>{data?.overview}</p>
                        <Divider />
                        <div className="flex items-center text-center gap-5">
                            <p>Status : {data?.status}</p>
                            <span>|</span>
                            <p>Release Date : {moment(data?.release_date).format("MMM Do YYYY")}</p>
                            <span>|</span>
                            <p>Revenue : {Number(data?.revenue)}</p>
                        </div>
                        <Divider />
                    </div>
                </div>
            </div>
            <HorizontalScrollCard
                data={castData?.cast}
                heading="Series Cast"
                trending={false}
                isArtisCard={true}
            />
            {!castData?.cast?.length && (
                <p className="text-center text-neutral-400 mt-4">There are no cast.</p>
            )}

            <HorizontalScrollCard
                data={castData?.crew}
                heading="Series Crew"
                trending={false}
                isArtisCard={true}
            />
            {!castData?.crew?.length && (
                <p className="text-center text-neutral-400 mt-4">There are no crew.</p>
            )}
            <HorizontalScrollCard
                data={similarData}
                heading="Similar Movies/TV Shows"
                media_type={params?.explore}
            />
            <HorizontalScrollCard
                data={recommendationsData}
                heading="Recommendations"
                media_type={params?.explore}
            />
        </div>
    );
};

export default MovieTvDetailPage;
