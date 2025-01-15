import Link from "next/link";

const NavbarComponent = () => {
  return (
    <div className="w-full h-20 bg-red-500 grid items-center">
      <div className="w-full h-full max-w-[1500px] text-lg flex items-center justify-between mx-auto px-10 tracking-widest myFont bg-gray-500">
        <Link href="/">ABOUT ME</Link>
        <Link href="/">MY WORK</Link>
        <Link href="/">SERVICIOS</Link>
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
