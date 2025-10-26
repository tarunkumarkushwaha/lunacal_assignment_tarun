"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [images, setImages] = useState([
    "/image.png",
    "/image.png",
    "/image.png",
    "/image.png",
  ]);

  const scrollRef = useRef(null);

  const visibleCount = 3;
  const itemWidth = 160 + 16;

  const scrollRight = () => {
    if (index + visibleCount < images.length) {
      setIndex((prev) => prev + visibleCount);
      scrollRef.current.scrollBy({
        left: itemWidth * visibleCount,
        behavior: "smooth",
      });
    }
  };

  const scrollLeft = () => {
    if (index > 0) {
      setIndex((prev) => prev - visibleCount);
      scrollRef.current.scrollBy({
        left: -itemWidth * visibleCount,
        behavior: "smooth",
      });
    }
  };

  const addImage = (e) => {
    if (e.target.files && e.target.files[0]) {
      const url = URL.createObjectURL(e.target.files[0]);
      setImages((prev) => [...prev, url]);
      e.target.value = "";
    }
  };

  return (
    <div className="bg-[#363C43] flex justify-center  rounded-2xl px-2 py-4 shadow-[0_0_25px_rgba(0,0,0,0.4)] w-[720px] h-[316px] mx-auto transition-all duration-300">
      <div className="flex flex-col justify-between items-center py-4 h-full px-2 min-h-40">
        <div title="any questions"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.3846 18C13.3846 18.2738 13.3034 18.5415 13.1513 18.7692C12.9991 18.9969 12.7829 19.1744 12.5299 19.2792C12.2769 19.384 11.9985 19.4114 11.7299 19.358C11.4613 19.3046 11.2146 19.1727 11.0209 18.9791C10.8273 18.7854 10.6954 18.5387 10.642 18.2701C10.5886 18.0015 10.616 17.7231 10.7208 17.4701C10.8256 17.2171 11.0031 17.0009 11.2308 16.8487C11.4585 16.6966 11.7262 16.6154 12 16.6154C12.3672 16.6154 12.7194 16.7613 12.9791 17.0209C13.2387 17.2806 13.3846 17.6328 13.3846 18ZM12 5.53846C9.45462 5.53846 7.38462 7.40192 7.38462 9.69231V10.1538C7.38462 10.3987 7.48187 10.6334 7.65498 10.8066C7.82809 10.9797 8.06288 11.0769 8.3077 11.0769C8.55251 11.0769 8.7873 10.9797 8.96041 10.8066C9.13352 10.6334 9.23077 10.3987 9.23077 10.1538V9.69231C9.23077 8.42308 10.4735 7.38461 12 7.38461C13.5265 7.38461 14.7692 8.42308 14.7692 9.69231C14.7692 10.9615 13.5265 12 12 12C11.7552 12 11.5204 12.0972 11.3473 12.2704C11.1742 12.4435 11.0769 12.6783 11.0769 12.9231V13.8462C11.0769 14.091 11.1742 14.3258 11.3473 14.4989C11.5204 14.672 11.7552 14.7692 12 14.7692C12.2448 14.7692 12.4796 14.672 12.6527 14.4989C12.8258 14.3258 12.9231 14.091 12.9231 13.8462V13.7631C15.0277 13.3765 16.6154 11.6977 16.6154 9.69231C16.6154 7.40192 14.5454 5.53846 12 5.53846ZM24 12C24 14.3734 23.2962 16.6934 21.9776 18.6668C20.6591 20.6402 18.7849 22.1783 16.5922 23.0865C14.3995 23.9948 11.9867 24.2324 9.65892 23.7694C7.33115 23.3064 5.19295 22.1635 3.51472 20.4853C1.83649 18.807 0.693605 16.6689 0.230582 14.3411C-0.232441 12.0133 0.00519941 9.60051 0.913451 7.4078C1.8217 5.21508 3.35977 3.34094 5.33316 2.02236C7.30655 0.703788 9.62663 0 12 0C15.1816 0.00335979 18.2319 1.26872 20.4816 3.51843C22.7313 5.76814 23.9966 8.81843 24 12ZM22.1538 12C22.1538 9.99176 21.5583 8.02861 20.4426 6.35882C19.3269 4.68903 17.7411 3.38759 15.8857 2.61907C14.0303 1.85055 11.9887 1.64947 10.0191 2.04126C8.04943 2.43305 6.24019 3.40011 4.82015 4.82015C3.40011 6.24019 2.43305 8.04943 2.04126 10.0191C1.64947 11.9887 1.85055 14.0303 2.61907 15.8857C3.38759 17.7411 4.68904 19.3269 6.35883 20.4426C8.02862 21.5583 9.99176 22.1538 12 22.1538C14.692 22.1508 17.2729 21.08 19.1765 19.1765C21.08 17.2729 22.1508 14.692 22.1538 12Z" fill="url(#paint0_linear_1_107)" />
          <defs>
            <linearGradient id="paint0_linear_1_107" x1="19.5" y1="27.5" x2="3.5" y2="2" gradientUnits="userSpaceOnUse">
              <stop stopColor="#4A4E54" />
              <stop offset="1" stopColor="#A3ADBA" />
            </linearGradient>
          </defs>
        </svg></div>
        <div><svg width="24" height="31" viewBox="0 0 24 31" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="9.31217" height="9.31217" rx="1.16402" fill="#4A4E54" />
          <rect x="10.6878" width="9.31217" height="9.31217" rx="1.16402" fill="#4A4E54" />
          <rect y="10.6878" width="9.31217" height="9.31217" rx="1.16402" fill="#4A4E54" />
          <rect x="10.6878" y="10.6878" width="9.31217" height="9.31217" rx="1.16402" fill="#4A4E54" />
          <rect y="21.3757" width="9.31217" height="9.31217" rx="1.16402" fill="#4A4E54" />
          <rect x="10.6878" y="21.3757" width="9.31217" height="9.31217" rx="1.16402" fill="#4A4E54" />
        </svg></div>
        <div></div>
      </div>

      <div className="px-2 flex flex-col justify-between w-[611px]">
        <div className="flex justify-between mb-5">
          <div className="flex justify-center items-center bg-[#0f1114] px-1 text-center w-[149px] h-14 rounded-2xl opacity-100 top-[37px] left-5">
            <h2 className="font-poppins font-medium text-[20px] leading-[100%] text-gray-200">Gallery</h2>
          </div>
          <div className="flex justify-center items-center gap-8">
            <label
              className="flex justify-center items-center gap-2 w-[174px] h-12
                bg-[#41474E] text-gray-200 font-poppins font-medium text-[15px]
                rounded-full cursor-pointer
                shadow-[6px_6px_10px_rgba(0,0,0,0.5),-4px_-4px_8px_rgba(255,255,255,0.2)]
                hover:shadow-[8px_8px_14px_rgba(0,0,0,0.6),-6px_-6px_10px_rgba(255,255,255,0.25)]
                transition-all duration-300 border border-transparent
                hover:border-gray-500"
            >
              + ADD IMAGE
              <input
                type="file"
                accept="image/*"
                onChange={addImage}
                className="hidden"
              />
            </label>


            <div className="flex justify-center items-center gap-2">

              <button
                onClick={scrollLeft}
                disabled={index === 0}
                className="flex justify-center items-center h-12 w-12 rounded-full hover:bg-[#0f1114]
                 bg-linear-to-b from-[#202326] to-[#0f1114] cursor-pointer
                 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_4px_10px_rgba(0,0,0,0.6)]
                 hover:shadow-[0_0_12px_rgba(255,255,255,0.15),inset_0_1px_1px_rgba(255,255,255,0.1)]
                 transition-all duration-300 ease-in-out"
              >
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-colors duration-300 group-hover:stroke-[#cfd2d4]"
                >
                  <path
                    d="M1 7.99999H15.1944"
                    stroke="#6F787C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 15L1 8L8 1"
                    stroke="#6F787C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <button
                onClick={scrollRight}
                disabled={index + visibleCount >= images.length}
                className="flex justify-center items-center h-12 w-12 rounded-full cursor-pointer
                bg-linear-to-b from-[#202326] to-[#0f1114] hover:bg-[#0f1114]
                shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_4px_10px_rgba(0,0,0,0.6)]
                hover:shadow-[0_0_12px_rgba(255,255,255,0.15),inset_0_1px_1px_rgba(255,255,255,0.1)]
                transition-all duration-300 ease-in-out"
              >
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-colors duration-300 group-hover:stroke-[#cfd2d4]"
                >
                  <path
                    d="M15.1945 8.00001L1.00001 8.00001"
                    stroke="#6F787C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.19446 1L15.1945 8L8.19446 15"
                    stroke="#6F787C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

          </div>
        </div>


        <div className="flex gap-4 scroll-smooth overflow-hidden w-full" ref={scrollRef}>
          {images.map((img, i) => (
            <div key={i} className="relative flex justify-center items-center p-2">
              <motion.img
                // key={i}
                src={img}
                alt={`gallery-${i}`}
                className="h-[171px] w-[175px] rounded-3xl object-cover shrink-0 cursor-pointer
                   shadow-[0_4px_15px_rgba(0,0,0,0.3)]"
                whileHover={{
                  scale: 1.07,
                  rotate: -3,
                  filter: "sepia(1) hue-rotate(180deg) brightness(1.15)",
                  boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.4)",
                  zIndex: 10,
                }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                }}
              />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
