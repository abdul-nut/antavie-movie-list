import { useSelector } from "react-redux"
import BannerHome from "../components/BannerHome"
import Card from "../components/Card"

const Home = () => {
    const trendingData = useSelector(state => state.movieData.bannerData)
    return (
        <div>
            <BannerHome />
            <div className="container mx-auto px-3 my-10">
                <h2 className="text-xl lg:text-2xl font-bold mb-3 text-white">Trending Show</h2>
                <div className="overflow-hidden">
                    <div
                        className="grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] grid-flow-col gap-6 overflow-x-scroll">
                        {
                            trendingData?.map((data, index) => {
                                return (
                                    <Card key={data.id} data={data} index={index + 1} trending={true} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home