import Link from "next/link";

const NavbarComponent = () => {
  return (
    <div className="w-full h-20 grid items-center mb-12">
      <div className="w-full h-full max-w-[1500px] text-sm md:text-lg flex items-center justify-between mx-auto px-10 tracking-widest myFont gap-2 md:gap-0 text-center">
        <Link
          className="pb-3 grid items-center hover:text-[#69b3a2] hover:border-b-[3px] border-[#69b3a2] hover:backdrop-blur-sm hover:bg-opacity-70 transition duration-150 ease-out hover:ease-in"
          href="/"
        >
          HOME
        </Link>
        <Link
          className="pb-3 grid items-center hover:text-[#69b3a2] hover:border-b-[3px] border-[#69b3a2] hover:backdrop-blur-sm hover:bg-opacity-70 transition duration-150 ease-out hover:ease-in"
          href="/aboutMe"
        >
          ABOUT ME
        </Link>
        <Link
          className="pb-3 grid items-center hover:text-[#69b3a2] hover:border-b-[3px] border-[#69b3a2] hover:backdrop-blur-sm hover:bg-opacity-70 transition duration-150 ease-out hover:ease-in"
          href="/myWork"
        >
          MY WORK
        </Link>
        <Link
          className="pb-3 grid items-center hover:text-[#69b3a2] hover:border-b-[3px] border-[#69b3a2] hover:backdrop-blur-sm hover:bg-opacity-70 transition duration-150 ease-out hover:ease-in"
          href="/services"
        >
          SERVICES
        </Link>
      </div>
    </div>
  );
};

export default NavbarComponent;

/*
About me: sobre mi

my work: proyectos y experiencia

Services: educación y tecnologías
*/
