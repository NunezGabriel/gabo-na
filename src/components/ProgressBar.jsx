import { Progress } from "flowbite-react";

const ProgresBar = ({ progress }) => {
  return (
    <div className="m-10">
      <Progress progress={progress} size="md" color="green" />
    </div>
  );
};

export default ProgresBar;
