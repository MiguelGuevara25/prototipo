import DateBodyDash from "./DateBodyDash";
import SideBodyDash from "./SideBodyDash";

const BodyDash = () => {
  return (
    <div className="flex-1 overflow-auto relative">
      <div className="h-[calc(100vh-100px)] w-full overflow-auto border border-border rounded-md bg-card text-card-foreground relative">
        <div className="flex min-w-max">
          <SideBodyDash />
          <DateBodyDash />
          
        </div>
      </div>
    </div>
  );
};

export default BodyDash;
