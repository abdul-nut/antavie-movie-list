import { useSelector } from "react-redux"
import BannerHome from "../components/BannerHome"
import HorizontalScrollCard from "../components/HorizontalScrollCard"
import UseFetch from "../hooks/UseFetch"

const Home = () => {
    const trendingData = useSelector(state => state.movieData.bannerData)
    const { data: nowPlayingData } = UseFetch('/movie/now_playing')
    const { data: topRatedData } = UseFetch('/movie/top_rated')
    const { data: upcomingData } = UseFetch('/movie/upcoming')
    const { data: popularTVShowsData } = UseFetch('/tv/popular')


    return (
        <div>
            <BannerHome />
            <HorizontalScrollCard data={trendingData} heading="Trending Now" trending={true} isArtisCard={false} />
            <HorizontalScrollCard data={nowPlayingData} heading="Now Playing" trending={false} media_type={"movie"} isArtisCard={false} />
            <HorizontalScrollCard data={topRatedData} heading="Top Rated" trending={false} media_type={"movie"} isArtisCard={false} />
            <HorizontalScrollCard data={upcomingData} heading="Upcoming" trending={false} media_type={"movie"} isArtisCard={false} />
            <HorizontalScrollCard data={popularTVShowsData} heading="Popular Tv Shows" trending={false} media_type={"tv"} isArtisCard={false} />
        </div>
    )
}

export default Home