import React from 'react'

export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                          React development is carried out by passionate developers
                      </h2>
                      <p className="mt-6 text-gray-600">
                        As a passionate React Developer, I aim to use my skills in JavaScript and React to build
                        user-friendly and efficient web applications. I am committed to learning and keeping up 
                        with the latest trends to create innovative solutions. I am looking for a role in a dynamic 
                        company where I can work on exciting projects and collaborate with a talented team to 
                        deliver excellent web experiences.
                      </p>
                      <p className="mt-4 text-gray-600">
                        As a React Developer, I love making smooth and engaging web applications. I'm always 
                        learning new things and solving problems. My goal is to work on exciting projects that make a difference.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}