import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import PropTypes from 'prop-types'

const ArtisCard = ({ data }) => {
    const imageUrl = useSelector(state => state.movieData.imageUrl)
    return (
        <Link to={`/person/${data?.id}`} className="w-full min-w-[230px] max-w-[230px] h-[400px] overflow-hidden block rounded relative hover:scale-105 transition-all">
            {
                data?.profile_path ? (<div className="">
                    <img src={imageUrl + data?.profile_path} className="w-full" alt="" />
                </div>) : (
                    <div className='bg-neutral-600 h-full w-full flex justify-center items-center '>
                        Profile Image Not Found
                    </div>
                )
            }
            <div className="absolute bottom-0 h-22 backdrop-blur-3xl w-full bg-black/60 p-2">
                <h2 className="text-ellipsis line-clamp-1 text-lg font-semibold">{data?.original_name}</h2>
                <p>{data?.character || data?.job}</p>
                <p>{data?.known_for_department || data?.department}</p>
            </div>
        </Link>
    )
}

ArtisCard.propTypes = {
    data: PropTypes.object.isRequired
}

export default ArtisCard