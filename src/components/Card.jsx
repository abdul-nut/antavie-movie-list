import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import moment from 'moment'
import { Link } from 'react-router-dom'

const Card = ({ data, trending, index, media_type }) => {
  const imageUrl = useSelector(state => state.movieData.imageUrl)
  const dateFormat = 'MMM Do YYYY'
  const mediaType = data.media_type ?? media_type
  return (
    <Link to={"/" + mediaType + "/" + data.id} className='w-full min-w-[230px] max-w-[230px] h-80 overflow-hidden block rounded relative hover:scale-105 transition-all'>
      {
        data?.poster_path ? (
          <img src={imageUrl + data?.poster_path} className="w-full" alt="" />
        ) : (
          <div className='bg-neutral-600 h-full w-full flex justify-center items-center '>
            Image Not Found
          </div>
        )
      }
      <div className='absolute top-4'>
        {trending && (
          <div className='py-1 px-4 backdrop-blur-3xl rounded-r-full bg-black/60 overflow-hidden'>
            #{index} Trending
          </div>
        )}
      </div>
      <div className='absolute bottom-0 h-16 backdrop-blur-3xl w-full bg-black/60 p-2'>
        <h2 className='text-ellipsis line-clamp-1 text-lg font-semibold'>{data?.title || data?.name}</h2>
        <div className='text-sm text-neutral-400 flex justify-between '>
          <p>
            {moment(data?.release_date).format(dateFormat) ||
              moment(data?.release_date).format(dateFormat)}</p>
          <p className='bg-black px-1 rounded-full text-xs text-white' >
            Rating: {Number(data?.vote_average).toFixed(1)}</p>
        </div>
      </div>
    </Link>
  )
}

Card.propTypes = {
  data: PropTypes.object.isRequired,
  trending: PropTypes.bool,
  index: PropTypes.number,
  media_type: PropTypes.string
}

export default Card