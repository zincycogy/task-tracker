import PropTypes from "prop-types";

export const Button = ({ color, text, onClick }) => {
	return (
		<button
			style={{ backgroundColor: color }}
			className="btn"
			onClick={onClick}
		>
			{text}
		</button>
	);
};
Button.defaultProps = {
	color: "stealblue",
};
Button.propTypes = {
	text: PropTypes.string,
	color: PropTypes.string,
	onCLick: PropTypes.func,
};
