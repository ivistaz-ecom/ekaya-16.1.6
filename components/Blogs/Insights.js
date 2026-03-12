"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import configData from "../../config.json";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { LuArrowRight } from "react-icons/lu";

function Insights() {
  const [Blogs, setData] = useState([]);

  const fetchPost = async () => {
    try {
      const postResponse = await fetch(
        `${configData.SERVER_URL}posts?_embed&categories[]=2&&production[]=${configData.SERVER}&status[]=publish&per_page=10`
      );
      const postData = await postResponse.json();

      if (postResponse.ok) {
        setData(postData);
      } else {
        console.error(`Failed to fetch post. Status: ${postResponse.status}`);
      }
    } catch (error) {
      console.error("Error fetching post:", error);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <>
      <div className="text-center mt-[0px] container mx-auto">
        {/* <h2 className="lg:text-5xl text-4xl poppins-regular py-10">Blogs</h2> */}
        {/* <p className="poppins-light text-[18px]">
          Gain valuable insights into the world of luxury real estate and what
          makes an Ekaya home the right choice for discerning buyers.
        </p> */}
      </div>
      <div className="mx-auto mt-10 justify-center container px-4 lg:px-0 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Blogs.map((items, index) => {
            // Safely get featured media image URL
            const featuredImageUrl = items["_embedded"]?.["wp:featuredmedia"]?.[0]?.["source_url"] || "/blogs/banner.png";
            
            return (
            <div
              className={`z-10 dark:bg-gray-800 dark:border-gray-700 ${items.acf?.css || ""}`}
              key={index}
            >
              <div className="bg-gray-100 p-5">
                <Image
                  className="rounded-0 w-full"
                  src={featuredImageUrl}
                  alt={items.title?.rendered || "Blog post"}
                  width={300}
                  height={300}
                />
                <div className="py-5">
                  <h5 className="mb-2 text-start text-2xl font-light tracking-tight poppins-regular text-gray-900 dark:text-white post-content-title">
                    {items.title.rendered}
                  </h5>
                  <p
                    className="mb-3 text-start font-normal text-base poppins-regular text-gray-700 dark:text-gray-400 post-content"
                    dangerouslySetInnerHTML={{ __html: items.excerpt.rendered }}
                  />
                  <div>
                    <Link href={`/blogs/${items.slug}`}>
                      <p className="text-start font-normal flex items-center w-40 gap-2 text-base poppins-regular bg-white shadow-md rounded-full dark:text-gray-400 px-5 py-1 border hover:bg-e-green hover:text-white transition-all duration-300 text-e-green">
                        Read More <LuArrowRight className="text-2xl" />
                      </p>
                    </Link>
                  </div>
                   {" "}
                </div>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Insights;
