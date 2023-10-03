import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const blogs = [
  {
    src: "https://tinyurl.com/2xxbfbf6",
    title: "Parent-Child Book Club",
  },
  {
    src: "https://tinyurl.com/yk7udql6",
    title: "General Book Club",
  },
  {
    src: "https://tinyurl.com/ytcqh4md",
    title: "Author-Specific Book Club",
  },
];

function About() {
  return (
    <div>
      <Navbar />
      <div className="text-center mt-10 mx-auto p-4">
        <h2 className="font-bold text-2xl mt-4 ">Why Choose Us?</h2>
        <p className="mt-2 text-gray-600 text-sm">
          With Over a Decade of Expertise, an Array of Book Club Offerings,
          Unbeatable Value, and Tailored Reading Experiences
        </p>
        <div className=" flex flex-wrap justify-center items-center gap-10 mt-10">
          <div className="flex flex-wrap flex-col justify-center items-center md:flex-row gap-10">
            <img
              src="https://www.tourmyindia.com/imgnew/experience.svg"
              alt="not found"
              width={80}
            />
            <p className="lg:w-[800px] md:w-[600px] w-fit p-2 text-left">
              Choose our book club for an enriching literary experience like no
              other. Join a passionate community of readers, explore diverse
              genres, and engage in thought-provoking discussions. Discover new
              friends, new perspectives, and a deeper love for books. Elevate
              your reading journey with us.
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center flex-col md:flex-row gap-10">
            <img
              src="https://www.tourmyindia.com/imgnew/positive-customer-feedback.svg"
              alt="not found"
              width={80}
            />
            <p className="lg:w-[800px] md:w-[600px] w-fit p-2 text-left">
              Fostering a vibrant community of readers, our mission is to
              inspire, connect, and enrich lives through the joy of books.
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center flex-col md:flex-row gap-10">
            <img
              src="https://www.tourmyindia.com/imgnew/recognition-tour-01.svg"
              alt="not found"
              width={80}
            />
            <p className="lg:w-[800px] md:w-[600px] w-fit p-2 text-left">
              Our vision is to create a thriving book club that unites readers
              worldwide, encourages diverse literary exploration, and fosters
              meaningful connections through the love of literature.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-10 mb-10 mx-auto text-center">
        <h2 className="font-bold text-2xl mt-4 mb-4">
          Discover Your Community.
        </h2>
        <div className="mx-auto p-4 flex flex-wrap gap-2 justify-evenly items-center">
          {blogs.map(function (item, index) {
            return (
              <div
                key={index}
                className="w-[400px] min-h-[300px] shadow-xl p-2 flex flex-col justify-center items-center"
              >
                <img
                  src={item.src}
                  className="mt-2 rounded-md cursor-pointer hover:scale-105 transition-all duration-300 mb-2 hover:shadow-lg"
                  alt="not found"
                  key={item.index}
                  loading="lazy"
                  width={350}
                />
                <p>{item.bio}</p>
                <h2>{item.title}</h2>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
