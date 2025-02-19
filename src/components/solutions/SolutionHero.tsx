import SolutionStepper from "./SolutionStepper";
import SupportText from "./SupportText";

const SolutionHero = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-10 ">
      <div className="w-full lg:w-1/2">
        <SupportText />
      </div>
      <div className="w-full lg:w-1/2">
        <SolutionStepper />
      </div>
    </div>
  );
};

export default SolutionHero;
