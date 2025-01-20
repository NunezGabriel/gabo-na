import {
  FaCode,
  FaDatabase,
  FaCodeBranch,
  FaGears,
  FaCloud,
} from "react-icons/fa";

const SkillsComponent = () => {
  return (
    <div className="w-100% mb-8">
      <div className="mx-auto flex px-16 flex-wrap justify-center">
        <div className="max-w-[300px] flex flex-col items-center">
          <div className="rounded-full p-4 bg-gray-200 hover:bg-[#69b3a2] transition duration-150 w-32 h-32 ease-out hover:ease-in whiteColorContainer flex justify-center items-center mb-10">
            <FaCode size={55} className="whiteColor" />
          </div>
          <h1 className="text-2xl text-[#69b3a2] myFont">Frontend Developer</h1>
          <section className=" flex flex-wrap justify-center p-10 gap-2">
            <div className="text-white myFont2 px-4 rounded-2xl bg-[#3d655c]">
              <h1 className="text-lg">Testing</h1>
            </div>
            <div className="text-white myFont2 px-4 rounded-2xl bg-[#3d655c]">
              <h1 className="text-lg">UX/UI</h1>
            </div>
            <div className="text-white myFont2 px-4 rounded-2xl bg-[#3d655c]">
              <h1 className="text-lg">React</h1>
            </div>
            <div className="text-white myFont2 px-4 rounded-2xl bg-[#3d655c]">
              <h1 className="text-lg">NextJS</h1>
            </div>
            <div className="text-white myFont2 px-4 rounded-2xl bg-[#3d655c]">
              <h1 className="text-lg">Jest</h1>
            </div>
            <div className="text-white myFont2 px-4 rounded-2xl bg-[#3d655c]">
              <h1 className="text-lg">JavaScript</h1>
            </div>
            <div className="text-white myFont2 px-4 rounded-2xl bg-[#3d655c]">
              <h1 className="text-lg">TypeScript</h1>
            </div>
            <div className="text-white myFont2 px-4 rounded-2xl bg-[#3d655c]">
              <h1 className="text-lg">Tailwind</h1>
            </div>
            <div className="text-white myFont2 px-4 rounded-2xl bg-[#3d655c]">
              <h1 className="text-lg">HTML</h1>
            </div>
            <div className="text-white myFont2 px-4 rounded-2xl bg-[#3d655c]">
              <h1 className="text-lg">CSS</h1>
            </div>
          </section>
        </div>
        <div className="max-w-[300px] flex flex-col items-center">
          <div className="rounded-full p-4 bg-gray-200 hover:bg-[#69b3a2] transition duration-150 w-32 h-32 ease-out hover:ease-in whiteColorContainer flex justify-center items-center mb-10">
            <FaCodeBranch size={55} className="whiteColor" />
          </div>
          <h1 className="text-2xl text-[#69b3a2] myFont">Backend Developer</h1>
          <section className=" flex flex-wrap justify-center p-10 gap-2">
            <div className="text-white myFont2 px-4 rounded-2xl bg-[#3d655c]">
              <h1 className="text-lg">CRUD</h1>
            </div>
            <div className="text-white myFont2 px-4 rounded-2xl bg-[#3d655c]">
              <h1 className="text-lg">Restful API</h1>
            </div>
            <div className="text-white myFont2 px-4 rounded-2xl bg-[#3d655c]">
              <h1 className="text-lg">NodeJS</h1>
            </div>
            <div className="text-white myFont2 px-4 rounded-2xl bg-[#3d655c]">
              <h1 className="text-lg">ExpressJS</h1>
            </div>
            <div className="text-white myFont2 px-4 rounded-2xl bg-[#3d655c]">
              <h1 className="text-lg">Python</h1>
            </div>
            <div className="text-white myFont2 px-4 rounded-2xl bg-[#3d655c]">
              <h1 className="text-lg">Insomnia</h1>
            </div>
            <div className="text-white myFont2 px-4 rounded-2xl bg-[#3d655c]">
              <h1 className="text-lg">Postman</h1>
            </div>
          </section>
        </div>
        <div className="max-w-[300px] flex flex-col items-center">
          <div className="rounded-full p-4 bg-gray-200 hover:bg-[#69b3a2] transition duration-150 w-32 h-32 ease-out hover:ease-in whiteColorContainer flex justify-center items-center mb-10">
            <FaDatabase size={55} className="whiteColor" />
          </div>
          <h1 className="text-2xl text-[#69b3a2] myFont">Databases</h1>
          <section className=" flex flex-wrap justify-center p-10 gap-2">
            <div className="text-white myFont2 px-4 rounded-2xl bg-[#3d655c]">
              <h1 className="text-lg">SQL</h1>
            </div>
            <div className="text-white myFont2 px-4 rounded-2xl bg-[#3d655c]">
              <h1 className="text-lg">NoSQL</h1>
            </div>
            <div className="text-white myFont2 px-4 rounded-2xl bg-[#3d655c]">
              <h1 className="text-lg">PostgreSQL</h1>
            </div>
            <div className="text-white myFont2 px-4 rounded-2xl bg-[#3d655c]">
              <h1 className="text-lg">MySQL</h1>
            </div>
            <div className="text-white myFont2 px-4 rounded-2xl bg-[#3d655c]">
              <h1 className="text-lg">MongoDB</h1>
            </div>
            <div className="text-white myFont2 px-4 rounded-2xl bg-[#3d655c]">
              <h1 className="text-lg">Mongoose</h1>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SkillsComponent;
