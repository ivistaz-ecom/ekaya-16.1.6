"use client";
import React, { useState, useRef, useEffect } from "react";
import configData from "../../config.json";

function Content() {
  const [Page, setData] = useState();

  const fetchPost = async () => {
    try {
      const postResponse = await fetch(`${configData.SERVER_URL}pages/30`);
      const postData = await postResponse.json();

      if (postResponse.ok) {
        setData(postData.content.rendered);
        //console.log(postData.content.rendered)
      } else {
        console.error(`Failed to fetch post. Status: ${postResponse.status}`);
      }
    } catch (error) {
      console.error("Error fetching post:", error);
    } finally {
      //setLoading(false);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <div className="lg:mt-[100px] mt-5 mx-auto w-[80%] max-w-7xl" data-aos="fade-up">
      {/* Block-level wrapper: WP content includes <p>/<div> — must not nest inside <p> */}
      <div
        className="about-us-content poppins-light text-[18px] text-start pb-5 [&_p]:mb-4 [&_a]:text-e-green [&_a]:underline"
        dangerouslySetInnerHTML={{ __html: Page ?? "" }}
      />
    </div>
  );
}

export default Content;
