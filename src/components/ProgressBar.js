/* eslint-disable */
import propTypes from 'prop-types';

const ProgressBar = (props) => {
  const { progress } = props;
  const radius = 50;
  const stroke = 10;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - progress / 100 * circumference;
  return (
    <svg
      height={radius * 2}
      width={radius * 2}
    >
      <circle
        stroke="blue"
        fill="transparent"
        strokeWidth={stroke}
        strokeDasharray={`${circumference} ${circumference}`}
        style={{ strokeDashoffset }}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
    </svg>
  );
};

ProgressBar.propTypes = {
  progress: propTypes.number.isRequired,
};
export default ProgressBar;
