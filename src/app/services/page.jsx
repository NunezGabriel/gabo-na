import NavbarComponent from "@/components/NavbarComponent";
import { FaCode } from "react-icons/fa";

const Services = () => {
  return (
    <div>
      <NavbarComponent />
      <div className="w-100% mb-8">
        <div className="mx-auto flex gap-20 px-16 flex-wrap justify-center items-center">
          <div className="max-w-[300px] flex flex-col justify-center items-center bg-slate-500">
            <div className="rounded-full p-4 bg-gray-200 hover:bg-[#69b3a2] transition duration-150 w-32 h-32 ease-out hover:ease-in whiteColorContainer flex justify-center items-center">
              <FaCode size={55} className="whiteColor" />
            </div>
            <h1 className="text-2xl text-[#69b3a2] myFont">
              Frontend Developer
            </h1>
            <section className=" flex flex-wrap justify-center p-10">
              <div className="text-white myFont2 px-4 rounded-2xl bg-[#3d655c]">
                <h1 className="text-lg">React</h1>
              </div>
              <div className="text-white myFont2 px-4 rounded-2xl bg-[#3d655c]">
                <h1 className="text-lg">React</h1>
              </div>
              <div className="text-white myFont2 px-4 rounded-2xl bg-[#3d655c]">
                <h1 className="text-lg">React</h1>
              </div>
              <div className="text-white myFont2 px-4 rounded-2xl bg-[#3d655c]">
                <h1 className="text-lg">React</h1>
              </div>
            </section>
            {}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
