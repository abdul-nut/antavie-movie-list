import PropTypes from 'prop-types';

const PersonDetails = ({ details }) => {
    return (
        <div className="mt-6">
            <h2 className="text-xl font-bold text-white mb-4">Tentang</h2>
            <ul className="space-y-4">
                {details?.map((detail, index) => (
                    <li key={index} className="flex">
                        <span className="font-bold text-white w-40">{detail.label}</span>
                        <span className="text-neutral-300 ml-2">{detail.value || "N/A"}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

PersonDetails.propTypes = {
    details: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired, // Label teks (wajib)
            value: PropTypes.string, // Nilai detail (opsional)
        })
    ).isRequired,
};

export default PersonDetails;
