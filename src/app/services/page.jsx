import NavbarComponent from "@/components/NavbarComponent";
import { CarrouselComponent } from "@/components/Carousel";
import SkillsComponent from "@/components/SkillsComponent";

const Services = () => {
  return (
    <div className="">
      <NavbarComponent />
      <div className="w-100% mb-8 mt-140">
        <h1 className="text-center myFont2 text-5xl">
          What People Say About Me
        </h1>
      </div>
      <div className="max-w-[800px] mx-auto mb-14">
        <CarrouselComponent />
      </div>
      <div className="w-100% mb-16">
        <h1 className="text-center myFont2 text-5xl">Skills</h1>
      </div>
      <SkillsComponent />
    </div>
  );
};

export default Services;
