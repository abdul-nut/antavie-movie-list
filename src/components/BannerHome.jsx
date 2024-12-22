import { useSelector } from "react-redux"
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { useEffect, useState } from "react";

const BannerHome = () => {
    const bannerData = useSelector(state => state.movieData.bannerData)
    const imageUrl = useSelector(state => state.movieData.imageUrl)
    const [currentImage, setCurrentImage] = useState(0)

    const handleNext = () => {
        if (currentImage < bannerData.length - 1) {
            setCurrentImage(prev => prev + 1)
        }
    }

    const handlePrevious = () => {
        if (currentImage > 0) {
            setCurrentImage(prev => prev - 1)
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if (currentImage < bannerData.length - 1) {
                handleNext()
            } else {
                setCurrentImage(0)
            }
        }, 5000)
        return () => clearInterval(interval)
    }, [bannerData, currentImage])


    return (
        <section className="w-full h-full z-40">
            <div className="flex min-h-full max-h-[95vh] overflow-hidden">
                {bannerData.map((data, index) => {
                    return (
                        <div key={data.id + "bannerHome" + index}
                            className="min-w-full min-h-[450px] lg:min-h-full overflow-hidden relative group transition-all"
                            style={{ transform: `translateX(-${currentImage * 100}%)` }}>
                            <div className="h-full w-full">
                                <img src={imageUrl + data.backdrop_path}
                                    className=" h-full w-full object-cover" />
                            </div>

                            {/* button next and previous image */}
                            <div className="absolute top-0 w-full h-full hidden items-center justify-between px-4 group-hover:lg:flex">
                                <button onClick={handlePrevious} className="bg-white p-1 rounded-full text-xl z-10 text-black">
                                    <FaAngleLeft />
                                </button>
                                <button onClick={handleNext} className="bg-white p-1 rounded-full text-xl z-10 text-black">
                                    <FaAngleRight />
                                </button>

                            </div>
                            <div className="
                            absolute top-0 w-full h-full bg-gradient-to-t from-neutral-900 to-transparent">
                            </div>
                            <div className="container mx-auto">
                                <div className=" w-full absolute bottom-0 max-w-md px-3 my-2">
                                    <h2 className="font-bold text-2xl lg:text-4xl text-white drop-shadow-3xl">{data?.name || data?.title}</h2>
                                    <p className="text-ellipsis line-clamp-3">{data.overview}</p>
                                    <div className="flex items-center gap-4">
                                        <p>Rating : {Number(data.vote_average).toFixed(1)}+</p>
                                        <span>|</span>
                                        <p>View : {Number(data.popularity).toFixed(0)}+</p>
                                    </div>
                                    <button
                                        className="px-4 py-2 mt-4 rounded font-bold text-black bg-white shadow-md transition-all 
                                        hover:text-gray-300 hover:bg-gradient-to-l hover:from-red-800 hover:to-black hover:scale-105">
                                        Play Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section >
    )
}

export default BannerHome