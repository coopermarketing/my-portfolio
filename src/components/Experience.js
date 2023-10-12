import React from "react";
import { experience } from "../data";
import { ChipIcon, PaperAirplaneIcon } from "@heroicons/react/solid";

export default function Skills() {
  return (
    <section id="experience">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Experience
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
          Highly driven, adaptable professional with experience in scaling startups and multinational corporations. Seeking to expand participation in higher level management within a global setting, augment professional knowledge and enhance multicultural awareness.
          </p>
        </div>
        <div className="flex flex-wrap m-4">
          {experience.map((experience) => (
            <div className="p-4 md:w-1/1 w-full">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded items-center">
                <div className= "inline-flex items-center justify-between w-full">
                  <div className="p-4 md:w-1/2 w-full inline-flex items-center">
                      <span className="title-font font-medium text-white">
                        <PaperAirplaneIcon className="block w-8 text-gray-100 mb-4 mr-4"/>
                      </span>
                      <span className="sm:text-2xl text-3xl font-medium title-font text-white mb-4">
                        {experience.title}
                      </span>
                  </div>
                  <div className="inline-flex items-center">
                    <img
                      alt="company_logo"
                      src={experience.image}
                      className="w-12 rounded-full flex-shrink-0 object-cover object-center"
                    />
                    <span className="flex-grow flex flex-col pl-4">
                      <span className="title-font font-medium text-white">
                        {experience.company}
                      </span>
                      <span className="text-gray-300 text-sm">
                        {experience.date}
                      </span>
                    </span>
                  </div>
                </div>
                <p className="leading-relaxed mb-6">{experience.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}