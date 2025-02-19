import SolutionHero from "../../components/solutions/SolutionHero";
// import TechnicalContact from "../../components/solutions/TechnicalContact";
import TechnicalSupport from "../../components/solutions/TechnicalSupport";

const TechnicalSolutions = () => {
  return (
    <div className="my-10 px-[10%] flex flex-col gap-36">
      <SolutionHero />
      <TechnicalSupport />
      {/* <TechnicalContact /> */}
    </div>
  );
};

export default TechnicalSolutions;
