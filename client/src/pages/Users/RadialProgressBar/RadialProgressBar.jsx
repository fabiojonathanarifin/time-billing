import "./RadialProgressBar.css";
function RadialProgressBar() {
  return (
    <div
      role="progressbar"
      aria-valuenow={78}
      aria-valuemin="0"
      aria-valuemax="100"
      style={{ "--value": 78 }}
    ></div>
  );
}
export default RadialProgressBar;
