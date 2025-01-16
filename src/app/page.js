import NavbarComponent from "@/components/NavbarComponent";
import ParticleBg from "@/components/ParticleBg";
import Image from "next/image";
import { FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <ParticleBg id="particles" />
      <NavbarComponent />
      <section className="w-100% mb-8">
        <div className="mx-auto mt-12 flex flex-col gap-10 items-center justify-center">
          <div className="text-center myFont2 grid gap-7">
            <h1 className="text-6xl">Gabriel Nunez</h1>
            <p className="text-gray-500 text-2xl">
              Software Developer, Crafting nice solutions through code.
            </p>
          </div>
          <Image
            src="/logo.png" // Ruta relativa desde la carpeta public
            alt="logo"
            width={200} // Opcional: Ancho de la imagen
            height={350} // Opcional: Alto de la imagen
            className="rotating-image "
          />
          <div className="flex gap-5">
            <Link
              href="/"
              className="rounded-full p-4 bg-gray-200 hover:bg-[#69b3a2] transition duration-150 ease-out hover:ease-in whiteColorContainer"
            >
              <FaTwitter size={25} className="whiteColor" />
            </Link>
            <Link
              href="/"
              className="rounded-full p-4 bg-gray-200 hover:bg-[#69b3a2] transition duration-150 ease-out hover:ease-in whiteColorContainer"
            >
              <FaGithub size={25} className="whiteColor" />
            </Link>

            <Link
              href="/"
              className="rounded-full p-4 bg-gray-200 hover:bg-[#69b3a2] transition duration-150 ease-out hover:ease-in whiteColorContainer"
            >
              <FaLinkedinIn size={25} className="whiteColor" />
            </Link>
          </div>
          <div className="flex flex-col md:flex-row gap-10">
            <button className="p-6 font-semibold border-4 rounded-lg border-[#69b3a2] text-[#69b3a2] hover:text-white hover:bg-[#69b3a2] transition duration-150 ease-out hover:ease-in whiteColorContainer">
              DOWLOAD CV
            </button>
            <button className="p-6 font-semibold  border-4 rounded-lg border-[#69b3a2] text-[#69b3a2] hover:text-white hover:bg-[#69b3a2] transition duration-150 ease-out hover:ease-in whiteColorContainer">
              LET'S TALK
            </button>
          </div>
          <p className="text-[#69b3a2] text-xl font-semibold">
            gabriel.nunez.arenas@gmail.com
          </p>
        </div>
      </section>
    </div>
  );
}
