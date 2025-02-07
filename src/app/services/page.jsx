import NavbarComponent from "@/components/NavbarComponent";
import ProgresBar from "@/components/ProgressBar";
import SkillsComponent from "@/components/SkillsComponent";

const Services = () => {
  return (
    <div>
      <NavbarComponent />
      <div className="w-100% mb-16">
        <h1 className="text-center myFont2 text-5xl">Skills</h1>
      </div>
      <SkillsComponent />
      <div className="w-100% mb-16 mt-140">
        <h1 className="text-center myFont2 text-5xl">Education Progress</h1>
      </div>
      <ProgresBar progress={0} />
    </div>
  );
};

export default Services;
