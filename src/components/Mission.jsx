import { useLocation } from "react-router-dom";

const Mission = () => {
  const location = useLocation();
  console.log(location);

  return <div>Mission</div>;
};

export default Mission;
