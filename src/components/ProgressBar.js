const Progressbar = ({ value = 0 }) => {
  return (
    <div className="progress">
      <span>{value.toFixed()}%</span>
    </div>
  );
};

export default Progressbar;
