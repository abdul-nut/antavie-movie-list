import PropTypes from 'prop-types'

const Backdrop = ({ imageUrl, backdropPath, title, name }) => {
    return (
        <div className="w-full h-[280px] relative hidden lg:block">
            <div className="w-full h-full">
                {backdropPath && (
                    <img
                        src={imageUrl + backdropPath}
                        alt={title || name || "Backdrop Image"}
                        className="w-full h-full object-cover"
                    />
                )}
            </div>
            <div className="absolute w-full h-full top-0 bg-gradient-to-t from-neutral-900/90 to-transparent"></div>
        </div>
    );
};


Backdrop.PropTypes = {
    imageUrl: PropTypes.string.isRequired,
    backdropPath: PropTypes.string,
    title: PropTypes.string,
    name: PropTypes.string,
};

export default Backdrop;
