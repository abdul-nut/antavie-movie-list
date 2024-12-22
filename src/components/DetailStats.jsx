import PropTypes from "prop-types";

const DetailStats = ({ rating, views, duration }) => {
    return (
        <div className="flex items-center gap-3">
            <p>Rating: {Number(rating).toFixed(1)}+</p>
            <span>|</span>
            <p>View: {views}</p>
            <span>|</span>
            <p>Duration: {duration[0]}h {duration[1]}m</p>
        </div>
    );
};

DetailStats.propTypes = {
    rating: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    duration: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default DetailStats;
