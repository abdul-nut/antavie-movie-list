import { useRef } from "react";
import Card from "./Card";
import PropTypes from 'prop-types';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import '../index.css';
import ArtisCard from "./ArtisCard";


const HorizontalScrollCard = ({ data = [], heading, trending, media_type, isArtisCard }) => {
    const containerRef = useRef();

    const smoothScroll = (direction) => {
        let start = containerRef.current.scrollLeft;
        let end = start + direction * 300;
        let step = 10;

        const animateScroll = () => {
            start += step * direction;
            if ((direction > 0 && start < end) || (direction < 0 && start > end)) {
                containerRef.current.scrollLeft = start;
                requestAnimationFrame(animateScroll);
            } else {
                containerRef.current.scrollLeft = end;
            }
        };
        animateScroll();
    };

    const handleNext = () => smoothScroll(1);
    const handlePrevious = () => smoothScroll(-1);

    return (
        <div className="container mx-auto px-3 my-10">
            <h2 className="text-xl lg:text-2xl font-bold mb-3 text-white capitalize">{heading}</h2>
            <div className="relative ">
    <div
        ref={containerRef}
        className="grid grid-cols-[repeat(auto-fit,230px)] grid-flow-col gap-6 overflow-hidden overflow-x-scroll relative z-10 no-scrollbar">
        {data.map((item, index) => (
            isArtisCard
                ? <ArtisCard key={index} data={item} />
                : <Card key={item.id + "heading" + index} data={item} index={index + 1} trending={trending} media_type={media_type} />
        ))}
    </div>
    {data.length > 0 && (
        <div className="absolute top-0 hidden lg:flex justify-between w-full h-full items-center">
            <button onClick={handlePrevious} className="bg-white p-1 text-black rounded-full -ml-2 z-10">
                <FaAngleLeft />
            </button>
            <button onClick={handleNext} className="bg-white p-1 text-black rounded-full -mr-2 z-10">
                <FaAngleRight />
            </button>
        </div>
    )}
</div>

        </div>
    );
};

HorizontalScrollCard.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    heading: PropTypes.string.isRequired,
    trending: PropTypes.bool.isRequired,
    media_type: PropTypes.string,
    isArtisCard: PropTypes.bool.required
};

export default HorizontalScrollCard;
