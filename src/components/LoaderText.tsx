/* eslint-disable react/prop-types */
interface LoaderTextProps {
  className?: string;
}

const LoadingText: React.FC<LoaderTextProps> = ({ className }) => {
  return <div className={` rounded-[0.313rem] bg-gray-400  ${className}`}>{}</div>;
};

LoadingText.defaultProps = {
  className: '',
};

export default LoadingText;
