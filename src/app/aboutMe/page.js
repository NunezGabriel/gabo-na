"use client";

import Image from "next/image";
import NavbarComponent from "@/components/NavbarComponent";
import { Avatar } from "flowbite-react";

const AboutMe = () => {
  return (
    <div>
      <NavbarComponent />
      <section className="mx-auto max-w-[1000px] flex flex-col md:flex-row md:justify-around p-8 gap-6">
        <div className="max-w-[500px]">
          <h1 className="myFont2 text-3xl mb-4 text-[#69b3a2] font-medium">
            Hi. I'm Gabriel
          </h1>
          <p className="max-w-300px">
            I'm a software developer with a strong passion for technology and
            innovation, and I will soon be a software engineer. I specialize in
            web development technologies, both frontend and backend, skills that
            you can explore in the Skills section. When programming, I focus on
            implementing best practices, creating code that is scalable and easy
            to maintain.As for my social skills, punctuality has characterized
            me since I was young, something I learned from my family. I'm a
            sociable person and enjoy working in teams, as I firmly believe in
            the value of mutual growth: I like to share my knowledge and learn
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
    </div>
  );
};

export default AboutMe;
