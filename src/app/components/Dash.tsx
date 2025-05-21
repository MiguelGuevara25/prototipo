import BodyDash from "./BodyDash";
import FilterDash from "./FilterDash";

const Dash = () => {
  return (
    <div className="flex-1 flex flex-col overflow-hidden h-full">
      <FilterDash />
      <BodyDash />
    </div>
  );
};

export default Dash;
