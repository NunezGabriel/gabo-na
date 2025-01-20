import {
  FaCode,
  FaDatabase,
  FaCodeBranch,
  FaCloud,
  FaTools,
} from "react-icons/fa";
import { services } from "@/scripts/data";

const SkillsComponent = () => {
  return (
    <div className="w-100% mb-8">
      <div className="mx-auto flex px-16 flex-wrap justify-center">
        {services.map((service, index) => {
          return (
            <div
              key={index}
              className="max-w-[300px] flex flex-col items-center"
            >
              <div
                className={`rounded-full p-4 bg-gray-200 ${
                  service.state === "true"
                    ? "hover:bg-[#69b3a2]"
                    : "hover:bg-[#ff9837]"
                } transition duration-150 w-32 h-32 ease-out hover:ease-in whiteColorContainer flex justify-center items-center mb-10`}
              >
                {service.indicator === "Front" ? (
                  <FaCode size={50} className="whiteColor" />
                ) : service.indicator === "Back" ? (
                  <FaCodeBranch size={50} className="whiteColor" />
                ) : service.indicator === "Data" ? (
                  <FaDatabase size={50} className="whiteColor" />
                ) : service.indicator === "Extra" ? (
                  <FaTools size={50} className="whiteColor" />
                ) : (
                  <FaCloud size={50} className="whiteColor" />
                )}
              </div>
              <h1
                className={`text-2xl ${
                  service.state === "true" ? "text-[#69b3a2]" : "text-[#ff9837]"
                } myFont`}
              >
                {service.Name}
              </h1>
              <section className=" flex flex-wrap justify-center p-10 gap-2">
                {service.Skills.map((skill, indexTwo) => {
                  return (
                    <div
                      key={indexTwo}
                      className={`text-white myFont2 px-4 rounded-2xl ${
                        service.state === "true"
                          ? "bg-[#3d655c]"
                          : "bg-[#ff9837]"
                      } `}
                    >
                      <h1 className="text-lg">{skill}</h1>
                    </div>
                  );
                })}
              </section>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillsComponent;
