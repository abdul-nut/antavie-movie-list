import { useParams } from "react-router-dom";
import useFetchDetail from "../hooks/useFetchDetail";
import HorizontalScrollCard from "../components/HorizontalScrollCard";
import { useSelector } from "react-redux";
import { useState } from "react";
import PersonDetails from "../components/PersonDetail";

const PersonDetailPage = () => {
    const { id } = useParams();
    const { data } = useFetchDetail(`/person/${id}`);
    const { data: movieCredits } = useFetchDetail(`/person/${id}/movie_credits`);
    const { data: tvCredits } = useFetchDetail(`/person/${id}/tv_credits`);
    const imageUrl = useSelector((state) => state.movieData.imageUrl);
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded((prev) => !prev);
    };

    console.log(data);

    const details = [
        { label: "Peran", value: "Riwayat Perfilman" },
        { label: "Jumlah Reputasi", value: data?.popularity?.toFixed(0) },
        { label: "Jenis kelamin", value: data?.gender === 2 ? "Pria" : "Wanita" },
        { label: "Kelahiran", value: `${data?.birthday} (${data?.age} years old)` },
        { label: "Lokasi Kelahiran", value: data?.place_of_birth },
        { label: "Juga Dikenal Sebagai", value: data?.also_known_as?.join(", ") },
    ];

    const getBiographyClass = () => {
        return isExpanded ? "line-clamp-none" : "line-clamp-4";
    };

    const biographyParagraphs = data?.biography ? data.biography.split("\n") : [];

    return (
        <div className="mt-24">
            <div className="container mx-auto px-4 py-16 lg:py-0 flex flex-col lg:flex-row items-start gap-8">
                <div className="relative w-full max-w-[300px] mx-auto lg:mx-0 lg:max-w-[350px] min-w-[300px]">
                    <img
                        src={imageUrl + data?.profile_path}
                        alt={data?.name || "Profile"}
                        className="object-cover rounded-lg shadow-md w-full h-auto"
                    />
                </div>

                <div className="flex-grow">
                    <h1 className="text-4xl font-bold text-white mb-4">
                        {data?.name}
                    </h1>
                    <p className="text-lg font-semibold text-neutral-300 mb-2">Biography</p>
                    <div className={getBiographyClass()}>
                        {biographyParagraphs.map((paragraph, index) => (
                            <p
                                key={index}
                                className="text-neutral-300 text-justify mb-2"
                            >
                                {paragraph}
                            </p>
                        ))}
                    </div>
                    {biographyParagraphs.length > 3 && (
                        <button
                            onClick={toggleExpand}
                            className="text-blue-500 mt-2"
                        >
                            {isExpanded ? "Show Less" : "Read More"}
                        </button>
                    )}
                </div>
            </div>
            <div className="container mx-auto px-4 ">
                <PersonDetails details={details} />
            </div>
            <HorizontalScrollCard
                data={movieCredits?.cast}
                heading="Movies"
                media_type="movie"
            />
            <HorizontalScrollCard
                data={tvCredits?.cast}
                heading="TV Shows"
                media_type="tv"
            />
        </div>
    );
};

export default PersonDetailPage;
