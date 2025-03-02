"use client";

import Image from "next/image";
import NavbarComponent from "@/components/NavbarComponent";
import { Avatar } from "flowbite-react";
import { friends } from "@/scripts/data";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

const AboutMe = () => {
  return (
    <div>
      <NavbarComponent />
      <section className="mx-auto max-w-[1000px] flex flex-col md:flex-row md:justify-around p-8 gap-6">
        <div className="max-w-[500px]">
          <h1 className="myFont2 text-3xl mb-4 text-[#69b3a2] font-medium">
            Hi. I'm Gabriel
          </h1>
          <p className="max-w-300px myFont text-justify">
            I'm a software developer with a strong passion for technology and
            innovation, and I will soon be a software engineer. I specialize in
            web development technologies, both frontend and backend, skills that
            you can explore in the Skills section. When programming, I focus on
            implementing best practices, creating code that is scalable and easy
            to maintain.As for my social skills, punctuality has characterized
            me since I was young, something I learned from my family. I'm a
            sociable person and enjoy working in teams, as I firmly believe in
            the value of mutual growth: I like to share my knowledge and learnno
            from others. Additionally, I am open-minded, always respecting
            everyone’s tastes and opinions.
          </p>
        </div>
        <Avatar
          img={(props) => (
            <Image
              alt=""
              height="248"
              referrerPolicy="no-referrer"
              src="/myFace.jpg"
              width="248"
              {...props}
            />
          )}
          size="2xl"
        />
      </section>

      <div className="my-32 px-4 lg:px-0">
        <div className="grid grid-rows-3 mx-auto max-w-[1000px] grid-cols-2 md:gap-12 gap-3 w-full lg:grid-cols-3">
          <img
            src="./dogs.jpeg"
            alt=""
            className="rounded-lg s border row-span-2"
          />
          <img
            src="./dogs.jpeg"
            alt=""
            className="rounded-lg row-span-2 row-start-2 col-start-2 "
          />
          <img
            src="./dogs.jpeg"
            alt=""
            className="hidden lg:block rounded-lg row-span-2 row-start-1 col-start-3 "
          />
        </div>
      </div>

      <div className="flex px-4 flex-col mx-auto max-w-[1000px] gap-12 lg:mb-6 lg:mt-[100px]">
        <div>
          <h1 className="myFont2 text-3xl text-[#3d655c] font-medium">
            EDUCATION
          </h1>
        </div>
        <div className="gap-12 mx-auto myFont flex flex-col lg:mb-6 lg:mt-[30px]">
          <div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[100px] max-w-[1000] lg:mb-16">
            <div className="flex sm:mx-auto lg:mx-0 flex-col gap-4">
              <img src="./match.jpeg" alt="" className="rounded-lg" />
              <p className="text-end md:text-lg myFont2 text-[#3d655c] ">
                UCSP Campus
              </p>
            </div>
            <div className="space-y-2">
              <h1 className="text-3xl myFont2 text-[#69b3a2] font-black">
                San Pablo Catholic University (UCSP)
              </h1>
              <h2 className="text-2xl text-gray-600">
                Computer Science Degree
              </h2>
              <p className=" text-gray-400">2021 - 2023</p>
              <p className=" text-gray-400">
                Bachelor's degree in computer science - not completed
              </p>
            </div>
          </div>

          <div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[100px] max-w-[1000] ">
            <div className="flex sm:mx-auto lg:mx-0 flex-col gap-4 lg:col-start-2 lg:col-span-1">
              <img src="./codeableEgre.jpeg" alt="" className="rounded-lg" />
              <p className="text-end md:text-lg myFont2 text-[#3d655c]">
                Linkedin Post Codeable
              </p>
            </div>
            <div className="space-y-2 lg:col-span-1 lg:row-start-1">
              <h1 className="text-3xl myFont2 text-[#69b3a2] font-black">
                {"{"} Codeable {"}"}
              </h1>
              <h2 className="text-2xl text-gray-600">
                Full Stack Web Programming Bootcamp
              </h2>
              <p className=" text-gray-400">2023 - 2023</p>
              <p className=" text-gray-400">
                Full stack web developer - Graduate
              </p>
            </div>
          </div>

          <div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[100px] max-w-[1000] lg:mb-16">
            <div className="flex sm:mx-auto lg:mx-0 flex-col gap-4">
              <img src="./campusTecsup.jpeg" alt="" className="rounded-lg" />
              <p className="text-end md:text-lg myFont2 text-[#3d655c]">
                Tecsup Campus In Afternoon
              </p>
            </div>
            <div className="space-y-2">
              <h1 className="text-3xl myFont2 text-[#69b3a2] font-black">
                Tecsup Technological Institute
              </h1>
              <h2 className="text-2xl text-gray-600">
                Software design and development Degree
              </h2>
              <p className=" text-gray-400">2024 - Now</p>
              <p className=" text-gray-400">
                technical bachelor in software development - Current
              </p>
            </div>
          </div>

          <div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[100px] max-w-[1000] ">
            <div className="flex sm:mx-auto lg:mx-0 flex-col gap-4 lg:col-start-2 lg:col-span-1">
              <img src="./upc.jpg" alt="" className="rounded-lg" />
              <p className="text-end md:text-lg myFont2 text-[#3d655c] ">
                UPC Campus{" "}
              </p>
            </div>
            <div className="space-y-2 lg:col-span-1 lg:row-start-1">
              <h1 className="text-3xl myFont2 text-[#69b3a2] font-black">
                Peruvian University of Applied Sciences (UPC)
              </h1>
              <h2 className="text-2xl text-gray-600">
                Software Engineering Degree
              </h2>
              <p className=" text-gray-400">Soon</p>
              <p className=" text-gray-400">Coming Soon</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1000px] my-20 mx-auto px-4 lg:p-0">
        <h1 className="myFont2 text-3xl text-[#3d655c] font-medium mb-14">
          FRIENDS
        </h1>
        <div className="flex flex-wrap gap-14">
          {friends.map((friend, key) => {
            return (
              <div key={key} className="mx-auto">
                <h1 className="text-3xl myFont2 text-[#69b3a2] font-black">
                  {friend.name}
                </h1>
                <h2 className="text-lg text-gray-600">{friend.work}</h2>
                <Link
                  href={friend.webSite}
                  className="flex gap-3 justify-center items-center"
                >
                  <p className="text-gray-400">{friend.webSite}</p>
                  <FaExternalLinkAlt color="#a9a3b7" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
