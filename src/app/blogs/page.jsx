"use client";

import Image from "next/image";
import React from "react";

export default function BlogSection() {
  const blogs = [
    {
      id: 1,
      image: "/assets/images/products/1.png",
      title: "Integer Maecenas Eget Viverra",
      author: "Joanna Wellick",
      date: "June 28, 2018",
      shares: "1k shares",
      description:
        "Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum...",
    },
    {
      id: 2,
      image: "/assets/images/products/2.png",
      title: "Integer Maecenas Eget Viverra",
      author: "Joanna Wellick",
      date: "June 28, 2018",
      shares: "1k shares",
      description:
        "Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum...",
    },
    {
      id: 3,
      image: "/assets/images/products/3.png",
      title: "Integer Maecenas Eget Viverra",
      author: "Joanna Wellick",
      date: "June 28, 2018",
      shares: "1k shares",
      description:
        "Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum...",
    },
    {
      id: 4,
      image: "/assets/images/products/4.png",
      title: "Integer Maecenas Eget Viverra",
      author: "Joanna Wellick",
      date: "June 28, 2018",
      shares: "1k shares",
      description:
        "Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum...",
    },
    {
      id: 5,
      image: "/assets/images/products/5.png",
      title: "Integer Maecenas Eget Viverra",
      author: "Joanna Wellick",
      date: "June 28, 2018",
      shares: "1k shares",
      description:
        "Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum...",
    },
    {
      id: 6,
      image: "/assets/images/products/6.png",
      title: "Integer Maecenas Eget Viverra",
      author: "Joanna Wellick",
      date: "June 28, 2018",
      shares: "1k shares",
      description:
        "Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum...",
    },
  ];

  return (
    <div className="w-full">
      {/* Top Section */}
      <div className="relative h-[200px] md:h-[300px] flex items-center justify-center text-center text-white">
        <Image
          src="/assets/bg/bg-blog.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="absolute z-0"
        />
        <div className="relative z-10 max-w-xl">
          <p className="uppercase text-sm tracking-wide mb-2">Our Blog</p>
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            News & Article
          </h2>
          <p className="text-sm md:text-base">
            Our secret sauce ensures scalability and attracts talented, creative
            people who aspire to achieve incredible things together.
          </p>
        </div>
      </div>

      {/* Blogs Section */}
      <div className="max-w-10/12 mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col h-full"
          >
            <Image
              src={blog.image}
              alt={blog.title}
              width={500}
              height={300} // Shorter height for rectangle
              className="object-cover w-full h-[200px] md:h-[180px] lg:h-[160px]"
            />
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="font-semibold text-lg mb-2">{blog.title}</h3>
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <span>{blog.author}</span>
                <span className="mx-2">·</span>
                <span>{blog.date}</span>
                <span className="mx-2">·</span>
                <span>{blog.shares}</span>
              </div>
              <p className="text-sm text-gray-600 flex-grow">
                {blog.description}
              </p>
              <a
                href="#"
                className="text-blue-600 text-sm mt-4 inline-block font-medium"
              >
                View Post
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
