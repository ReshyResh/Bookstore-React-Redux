/* eslint-disable */
import propTypes from 'prop-types';

const ProgressBar = (props) => {
  const { progress } = props;
  const radius = 50;
  const stroke = 5;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - progress / 100 * circumference;
  return (
    <div className="percent">
    <svg
      height={radius * 2}
      width={radius * 2}
    >
      <circle
        stroke="#20d2fa"
        fill="transparent"
        strokeWidth={stroke}
        strokeDasharray={`${circumference} ${circumference}`}
        style={{ strokeDashoffset }}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
    </svg>
    <p className="percentage"> {progress}%<span className="percentage-text">Completed</span></p>
    </div>
  );
};

ProgressBar.propTypes = {
  progress: propTypes.number.isRequired,
};
export default ProgressBar;
