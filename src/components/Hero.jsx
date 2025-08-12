import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import hero from '../assets/images/skincareimg.png'
import product from '../assets/images/skincare.jpg'
gsap.registerPlugin(ScrollTrigger);

const heroText = "Transform your skincare routine with premium products that restore, protect, and enhance your natural glow every day.";
const highlightText = `Experience the ultimate in skincare with our expertly formulated products, crafted to nourish, protect, and rejuvenate your skin. Combining the finest natural ingredients with advanced science, our collection ensures every skin type can achieve a radiant, healthy glow. Embrace your beauty with confidence every day. Experience the ultimate in skincare with our expertly formulated products, crafted to nourish, protect, and rejuvenate your skin.`;

const Hero = () => {
  // Ref for all word spans (first paragraph)
  const wordsRef = useRef([]);
  const paraRef = useRef(null);
  // Ref for all word spans (highlighted paragraph)
  const highlightWordsRef = useRef([]);
  const highlightParaRef = useRef(null);

  useEffect(() => {
    if (wordsRef.current.length && paraRef.current) {
      gsap.fromTo(
        wordsRef.current,
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.07,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: paraRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );
    }
    if (highlightWordsRef.current.length && highlightParaRef.current) {
      gsap.fromTo(
        highlightWordsRef.current,
        { opacity: 0, y: 10, color: "#BFC8B8" },
        {
          opacity: 1,
          y: 0,
          color: "#2D3B36",
          stagger: 0.07,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: highlightParaRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );
    }
    if (highlightParaRef.current) {
      gsap.fromTo(
        highlightParaRef.current,
        { opacity: 0.3 },
        {
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: highlightParaRef.current,
            start: "top 90%",
            end: "top 60%",
            scrub: true,
          },
        }
      );
    }
  }, []);

  return (
    <>
      <section className="relative w-full bg-[#EFF5E1] overflow-hidden pt-28 mx-auto pb-20 max-sm:pb-72">
        {/* Desktop (lg+) view: only visible on lg and up */}
        <div className="hidden lg:grid grid-cols-3 items-start relative z-10 px-4 sm:px-6 lg:px-8 min-h-[600px]">
          {/* Left: Description and Shop Now button (top-aligned) */}
          <div className="flex flex-col items-center  h-full  pt-8">
            <p ref={paraRef} className="text-[#2D3B36] text-lg mt-10 font-normal leading-relaxed text-left max-w-xs mb-6">
              {heroText.split(" ").map((word, i) => (
                <span
                  key={i}
                  ref={el => (wordsRef.current[i] = el)}
                  className="inline-block opacity-0 "
                  style={{ marginRight: "0.25em" }}
                >
                  {word}
                </span>
              ))}
            </p>
            <button className="bg-[#232D1A] translate-y-65 text-white mx-25 px-6  py-2 rounded-full text-base font-semibold shadow hover:bg-[#3A6B7A] transition">
              Shop Now
            </button>
          </div>
          {/* Center: Heading (top-aligned) + Hero image and notification bubble below */}
          <div className="flex flex-col items-center justify-start h-full pt-8">
            <h1 className="text-[#2D3B36] text-6xl font-extrabold text-start leading-tight mb-6">
              GLOW<br />NATUR-<br />ALLY
            </h1>
            <div className="relative mt-2">
              <img
                src={hero}
                alt="Hero"
                className="w-72 h-80 translate-y-15 md:w-auto md:h-auto object-cover rounded-2xl shadow-lg"
              />
              {/* Notification bubble */}
              <div className="absolute left-1/2 bottom-[-40px] transform -translate-x-1/2 bg-white/80 backdrop-blur-lg rounded-full px-2 py-2 flex items-center gap-4 shadow-xl border border-[#E6E9E2] min-w-[350px] max-w-[90vw]">
                <span className="inline-block w-15 h-15 bg-[#EFF5E1] rounded-full flex items-center justify-center border-2 border-dotted border-[#2D3B36] overflow-hidden">
                  <img
                    src={product}
                    alt="Product"
                    className="w-16 h-16 object-contain"
                  />
                </span>
                <span className="text-[#2D3B36] text-base font-medium leading-snug">
                  While giving you an invigorating
                  <br className="hidden md:block" /> cleansing experience.
                </span>
              </div>
            </div>
          </div>
          {/* Right: Bottle Image (top-aligned) */}
          <div className="flex flex-col items-center justify-start h-full pt-8">
            <img
              src={product}
              alt="Product Bottle"
              className="w-39 h-39 rounded-xl shadow-md bg-white/60 object-contain"
            />
          </div>
        </div>
        {/* Tablet/Mobile (md and below) view: ONLY visible below lg */}
        <div className="lg:hidden block max-w-7xl mx-auto w-full px-4 sm:px-6 relative z-10 mt-8">
          {/* Top row: text and bottle image */}
          <div className="w-full flex flex-col md:flex-row md:items-start md:justify-between gap-8 md:gap-8 mb-6">
            {/* Left: Description */}
            <div className="flex-1 flex justify-start md:justify-end md:items-start">
              <p className="text-[#2D3B36]  text-base md:text-lg font-normal leading-relaxed text-left max-w-xs md:max-w-xs pl-6 md:pl-0 md:pr-4 md:mt-8">
                {heroText.split(" ").map((word, i) => (
                  <span
                    key={i}
                    ref={el => (wordsRef.current[i + 100] = el)}
                    className="inline-block opacity-0"
                    style={{ marginRight: "0.25em" }}
                  >
                    {word}
                  </span>
                ))}
              </p>
            </div>
            {/* Right: Bottle Image (tablet: right of text, much larger) */}
           <div className="flex-1 w-full max-sm:items-center  max-sm:absolute bottom-[-300px] max-sm:left-0 flex justify-center md:justify-start md:items-start">
  <img
    src={product}
    alt="Product Bottle"
    className="w-full h-auto md:w-[350px] md:h-[320px] shadow-lg object-cover bg-white mt-4 md:mt-0"
  />
</div>

          </div>
          {/* Center: Main Heading (tablet: below text and bottle, extra large, fills width) */}
          <div className=" flex justify-center mb-4 md:mb-8 ">
            <h1 className="text-[#2D3B36] max-sm:absolute top-5 text-[17vw] font-extrabold text-center -translate-y-35 leading-[0.9]  break-words">
              GLOWWWW
              <br />
              NATURALLY
            </h1>
          </div>
          {/* Hero image and notification bubble (tablet: below heading) */}
          <div className="w-full flex  max-sm:items-center   flex-col md:flex-row md:items-center md:justify-center gap-6 md:gap-8">
            <div className="flex justify-center   md:justify-end w-full md:w-auto ">
              <div className="relative mt-4 md:mt-0 -translate-y-10 -translate-x-10">
                <img
                  src={hero}
                  alt="Hero"
                  className="w-full max-sm:w-screen   h-72 max-sm:h-full md:w-100 md:h-100 object-cover  shadow-lg"
                />
                {/* Notification bubble */}
                <div className="absolute left-1/2 bottom-[-36px] transform -translate-x-1/2 -translate-y-15 bg-white/80 backdrop-blur-lg rounded-full px-2 py-2 flex items-center gap-4 shadow-xl border border-[#E6E9E2] min-w-[250px] md:min-w-[350px] max-w-[90vw]">
                  <span className="inline-block object- w-20 h-12 md:w-15 md:h-15 bg-[#EFF5E1] rounded-full flex items-center justify-center border-2 border-dotted border-[#2D3B36] overflow-hidden">
                    <img
                      src={product}
                      alt="Product"
                      className="w-12 h-12 md:w-16 md:h-16"
                    />
                  </span>
                  <span className="text-[#2D3B36] text-xs md:text-base font-medium leading-snug">
                    While giving you an invigorating
                    <br className="hidden md:block" /> cleansing experience.
                  </span>
                </div>
              </div>
            </div>
            {/* Shop Now button (tablet: right of hero image) */}
            <div className="flex justify-center md:justify-start items-center w-full md:w-auto mt-8 md:mt-0">
              <button className="bg-[#232D1A] max-sm:absolute bottom-[-350px] text-white px-6 py-2 rounded-full text-base font-semibold shadow hover:bg-[#3A6B7A] transition">
                Shop Now
              </button>
            </div>
          </div>
        </div>
        {/* Full-width SKINCARE text with no gap at bottom */}
        <div className="  flex justify-center mb-4 md:mb-8  ">
          <h1 className="text-[#2D3B36] text-[20vw]  font-extrabold text-center -translate-y-33 leading-[0.9]  break-words">
            SKINCARE{" "}
          </h1>
        </div>
      </section>

      {/* Highlighted text block with half 100% opacity and half 30% opacity at the bottom */}
      <section className="w-full bg-[#FEFFF4] py-10">
        <div className=" px-2 max-w-4xl mx-auto">
          <p ref={highlightParaRef} className="text-[#2D3B36] text-2xl md:text-3xl font-normal leading-relaxed">
            {highlightText.split(" ").map((word, i) => (
              <span
                key={i}
                ref={el => (highlightWordsRef.current[i] = el)}
                className="inline-block opacity-0"
                style={{ marginRight: "0.25em" }}
              >
                {word}
              </span>
            ))}
          </p>
        </div>
      </section>
    </>
  );
};

export default Hero;