import { motion } from "framer-motion";
import React from "react";
import { fadeIn } from "../variants";

const Services = () => {
  const data = [
    {
      img: "/blog app.png",
      name: "blog app",
      skills: "Next.js node.js mongo-db tailwind css",
      link: "https://blog-app-puce-eta.vercel.app",
    },
    {
      img: "/Screenshot.png",
      name: "airbnb clone",
      skills: "react.js express.js mongo-db node.js",
      link: "https://abdelrhmanebian.github.io/Booking-app/",
    },
    {
      img: "/Screenshot (13).png",
      name: "E commerce",
      skills: "react.js react-hooks firebase",
      link: "https://abdlerhman-ebian-e-commerce.vercel.app/",
    },
    {
      img: "/promptopia.png",
      name: "promptopia",
      skills: "Next.js tailwindcss",
      link: "https://as-salam-college.netlify.app/",
    },
    {
      img: "/IMG_٢٠٢٢١٢٢٤_٢٣١٢٥٧.jpg",
      name: "School website",
      skills: "html css js bootstrap ",
      link: "https://as-salam-college.netlify.app/",
    },
    {
      img: "/Quizzical.png",
      name: "Quizzical",
      skills: "react.js react-hooks css react-hooks ",
      link: "https://abdelrhmanebian.github.io/Quiziccal/",
    },
    {
      img: "/IMG_٢٠٢٢١٢٢٤_٢١٣٦٢٧.jpg",
      name: "pets shop",
      skills: "html css",
      link: "https://abdelrhmanebian.github.io/project-2/",
    },
    {
      img: "/game and 4 more pages - Profile 1 - Microsoft​ Edge 25_12_2022 10_03_02 م.png",
      name: "Ps service",
      skills: "html bootstrap js",
      link: "https://abdelrhmanebian.github.io/PS-SEEVICE/",
    },
    {
      img: "/IMG_٢٠٢٢١٢٢٤_٢٣١٠٣٣.jpg",
      name: "image filter",
      skills: "html css js ",
      link: "https://abdelrhmanebian.github.io/filter/",
    },
    {
      img: "IMG_٢٠٢٢١٢٢٤_٢٣١١٢٠.jpg",
      name: "X O game",
      skills: "html css js",
      link: "https://abdelrhmanebian.github.io/X-O-Game/",
    },
  ];
  return (
    <section id="work" className="py-10">
      <div className="container mx-auto">
        <h2 className="h2 text-accent">Projects</h2>
        <div className="py-3 my-6 gap-y-5 flex flex-wrap justify-start ">
          {data.map((service, index) => {
            return (
              <motion.div
                variants={fadeIn("right", 0.5)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false }}
                key={index}
                className=" px-5 w-full md:w-1/2 lg:w-1/4  flex flex-col overflow-hidden rounded-2xl"
              >
                <a href={service.link}>
                  <div>
                    <img
                      src={`${service.img}`}
                      className="h-[200px] w-full rounded-lg"
                      alt=""
                    />
                  </div>
                  <div>
                    <h3 className=" font-bold ">{service.name}</h3>
                    <p>{service.skills}</p>
                  </div>
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
