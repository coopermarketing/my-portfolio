import React from "react";
import { CodeIcon , ServerIcon, DatabaseIcon, ChartBarIcon} from "@heroicons/react/solid";
import { coding_skills, data_skills, digital_analytics } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="text-gray-800 body-font">
      <div className="container px-8 py-10 mx-auto text-center lg:px-8 w-full">
        <div className="flex flex-col w-full mb-20">
          <ServerIcon className="mx-auto inline-block w-10 mb-4 text-white" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills
          </h1>
        </div>
        <div class="flex flex-col bg-gray-800 bg-opacity-40 m-4 p-4 mb-10 rounded">
          <div className="p-2 md:w-1/1 w-full inline-flex items-center">
              <span className="title-font font-medium text-white">
                  <CodeIcon className="block w-8 text-gray-400 mb-4 mr-4"/>
              </span>
              <h2 className="sm:text-2xl font-medium title-base mb-4 text-base">
                Front End Engineering
              </h2>
          </div>
          <div className ="flex overflow-x-scroll pb-10 scrollbar-hide">
            <div className="flex flex-nowrap lg:ml-10 md:ml-20 ml-10 ">
            {coding_skills.map((coding_skills) => (
                <div className="inline-block px-3">
                  <div className="py-10 border-4 border-gray-800 bg-gray-900 w-60 h-60 max-w-xs overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
                    <div className="flex-grow flex flex-col pl-2 content-center">
                      <div className="flex justify-center items-center mb-4">
                        <img
                        alt="code_icon"
                        src={coding_skills.image}
                        className="w-16"
                      />
                      </div>
                      <span className="flex-grow flex flex-col pl-2">
                        <span className="title-font text-lg font-medium text-white mb-1">
                          {coding_skills.title}
                        </span>
                        <span className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                          {coding_skills.subtitle}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
            ))}
            </div>
          </div>
        </div>
        <div class="flex flex-col bg-gray-800 bg-opacity-40 m-4 p-4 mb-10 rounded">
          <div className="p-2 md:w-1/1 w-full inline-flex items-center">
              <span className="title-font font-medium text-white">
                  <ChartBarIcon className="block w-8 text-gray-400 mb-4 mr-4"/>
              </span>
              <h2 className="sm:text-2xl font-medium title-base mb-4 text-base">
                Digital Analytics
              </h2>
          </div>
          <div className ="flex overflow-x-scroll pb-10 scrollbar-hide">
            <div className="flex flex-nowrap lg:ml-10 md:ml-20 ml-10 ">
            {digital_analytics.map((digital_analytics) => (
                <div className="inline-block px-3">
                  <div className="py-10 border-4 border-gray-800 bg-gray-900 w-60 h-60 max-w-xs overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
                    <div className="flex-grow flex flex-col pl-2 content-center">
                      <div className="flex justify-center items-center mb-4">
                        <img
                        alt="code_icon"
                        src={digital_analytics.image}
                        className="w-16"
                      />
                      </div>
                      <span className="flex-grow flex flex-col pl-2">
                        <span className="title-font text-lg font-medium text-white mb-1">
                          {digital_analytics.title}
                        </span>
                        <span className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                          {digital_analytics.subtitle}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
            ))}
            </div>
          </div>
        </div>
        <div class="flex flex-col bg-gray-800 bg-opacity-40 m-4 p-4 mb-10 rounded">
          <div className="p-2 md:w-1/1 w-full inline-flex items-center">
              <span className="title-font font-medium text-white">
                  <DatabaseIcon className="block w-8 text-gray-400 mb-4 mr-4"/>
              </span>
              <h2 className="sm:text-2xl font-medium title-base mb-4 text-base">
                Data
              </h2>
          </div>
          <div className ="flex overflow-x-scroll pb-10 scrollbar-hide">
            <div className="flex flex-nowrap lg:ml-10 md:ml-20 ml-10 ">
            {data_skills.map((data_skills) => (
                <div className="inline-block px-3">
                  <div className="py-10 border-4 border-gray-800 bg-gray-900 w-60 h-60 max-w-xs overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
                    <div className="flex-grow flex flex-col pl-2 content-center">
                      <div className="flex justify-center items-center mb-4">
                        <img
                        alt="code_icon"
                        src={data_skills.image}
                        className="w-16"
                      />
                      </div>
                      <span className="flex-grow flex flex-col pl-2">
                        <span className="title-font text-lg font-medium text-white mb-1">
                          {data_skills.title}
                        </span>
                        <span className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                          {data_skills.subtitle}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
            ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}