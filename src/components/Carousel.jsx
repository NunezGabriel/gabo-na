"use client";

import { Carousel } from "flowbite-react";

export function CarrouselComponent() {
  return (
    <div className="h-56 sm:h-64 xl:h-64 2xl:h-72 m-4 drop-shadow-lg rounded-lg">
      <Carousel pauseOnHover>
        <div className="px-20 py-10 text-white h-full bg-[#3d655c]">
          <h1 className="text-3xl myFont2 font-semibold">Bill Gates</h1>
          <p className="text-xl myFont2">
            Working with Gabriel has been an inspiring experience. His ability
            to solve problems with creativity and efficiency is impressive. He
            is always one step ahead in innovation and best development
            practices.
          </p>
          <p className="text-xl myFont2 font-semibold">
            Microsoft – Co-founder
          </p>
        </div>

        <div className="px-20 py-10 text-white h-full bg-[#3d655c]">
          <h1 className="text-3xl myFont2 font-semibold">Steve Jobs</h1>
          <p className="text-xl myFont2">
            Gabriel has a clear vision and an attention to detail that few
            developers possess. His code not only works but is also elegant and
            scalable. Without a doubt, a brilliant mind in the software world.
          </p>
          <p className="text-xl myFont2 font-semibold">
            Apple – Co-founder & Former CEO
          </p>
        </div>

        <div className="px-20 py-10 text-white h-full bg-[#3d655c]">
          <h1 className="text-3xl myFont2 font-semibold">Gabe Newell</h1>
          <p className="text-xl myFont2">
            Gabriel's ability to optimize systems and enhance user experience is
            exceptional. He not only understands the backend but also has great
            intuition for design and user experience.
          </p>
          <p className="text-xl myFont2 font-semibold">
            Valve – Co-founder & CEO
          </p>
        </div>
      </Carousel>
    </div>
  );
}
