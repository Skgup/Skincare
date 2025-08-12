import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import skincaregirl from '../assets/images/skincaregirl.png'
const features = [
  {
    number: "01",
    title: "Bio Ingredients",
    desc: "Get naturally beautiful and transform with our bio ingredients creams for healthy, radiant skin.",
  },
  {
    number: "02",
    title: "Everything Natural",
    desc: "Pure ingredients for pure skin. The Perfect solution for your skin care needs.",
  },
  {
    number: "03",
    title: "All Handmade",
    desc: "Made with love and care. Just for you. Give your skin the tender loving care it deserves.",
  },
];

const Features = () => {
  const whyBtnRef = useRef(null);

  useEffect(() => {
    const btn = whyBtnRef.current;
    if (!btn) return;
    const onEnter = () => {
      gsap.to(btn, { scale: 1.08, boxShadow: '0 4px 24px 0 rgba(44,62,80,0.10)', duration: 0.2, ease: 'power2.out' });
    };
    const onLeave = () => {
      gsap.to(btn, { scale: 1, boxShadow: '0 0px 0px 0 rgba(44,62,80,0)', duration: 0.2, ease: 'power2.out' });
    };
    const onDown = () => {
      gsap.to(btn, { scale: 0.95, duration: 0.1, ease: 'power2.in' });
    };
    const onUp = () => {
      gsap.to(btn, { scale: 1.08, duration: 0.1, ease: 'power2.out' });
    };
    btn.addEventListener('mouseenter', onEnter);
    btn.addEventListener('mouseleave', onLeave);
    btn.addEventListener('mousedown', onDown);
    btn.addEventListener('mouseup', onUp);
    btn.addEventListener('touchstart', onDown);
    btn.addEventListener('touchend', onUp);
    return () => {
      btn.removeEventListener('mouseenter', onEnter);
      btn.removeEventListener('mouseleave', onLeave);
      btn.removeEventListener('mousedown', onDown);
      btn.removeEventListener('mouseup', onUp);
      btn.removeEventListener('touchstart', onDown);
      btn.removeEventListener('touchend', onUp);
    };
  }, []);

  return (
    <section className="w-full bg-[#FEFFF4]  py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-4 sm:px-6">
        {/* Left: Text and Features */}
        <div className="flex flex-col justify-center">
          <button ref={whyBtnRef} className="mb-6 w-fit px-6 py-2 rounded-full border border-[#2D3B36] bg-white text-[#2D3B36] font-medium flex items-center gap-2 shadow-sm">
            <span className="inline-block w-3 h-3 bg-[#2D3B36] rounded-full mr-2"></span>
            Why Our Products
          </button>
          <h2 className="text-[#2D3B36] text-4xl md:text-5xl mb-4 leading-tight">
            YOUR SKIN DESERVES<br />THE BEST CARE.
          </h2>
          <p className="text-[#2D3B36] text-base md:text-lg font-normal mb-10 max-w-lg">
            Discover a curated collection of skincare products designed to rejuvenate, protect, and pamper your skin. Explore our rage crafted with love backed by science, and inspired by nature.
          </p>
          <div className="flex flex-col gap-8">
            {features.map((f) => (
              <div key={f.number} className="flex items-start gap-6">
                <span className="text-4xl md:text-5xl font-light min-w-[48px] select-none bg-gradient-to-b from-[#2D3B36] to-[#FEFFF4] text-transparent bg-clip-text">
                  {f.number}
                </span>
                <div>
                  <h3 className="text-2xl md:text-3xl font-normal text-[#2D3B36] mb-1">{f.title}</h3>
                  <p className="text-[#2D3B36] text-base opacity-70 max-w-xs">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Right: Image and Award Badge */}
        <div className="flex items-center justify-center relative">
          <img
            src={skincaregirl}
            alt="Mask Girl"
            className="rounded-3xl w-full lg:max-w-[600px] lg:max-h-[800px] h-auto object-cover shadow-xl"
          />
          {/* Award badge overlay for tablet/desktop */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 lg:-translate-y-15 bg-[#f3f7e7] border border-[#E6E9E2] rounded-full px-6 py-3 hidden sm:flex items-center gap-3 shadow-md">
            <span className="inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-dotted border-[#2D3B36]">
              <span className="flex items-center justify-center w-13 h-13 bg-[#2D3B36] rounded-full">
                <svg width="32" height="32" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.87451 22.9583V33.3124C8.87451 37.1041 8.87451 37.1041 12.4578 39.5208L22.3121 45.2082C23.7912 46.0624 26.2079 46.0624 27.6871 45.2082L37.5412 39.5208C41.1246 37.1041 41.1246 37.1041 41.1246 33.3124V22.9583C41.1246 19.1667 41.1246 19.1667 37.5412 16.75L27.6871 11.0625C26.2079 10.2083 23.7912 10.2083 22.3121 11.0625L12.4578 16.75C8.87451 19.1667 8.87451 19.1667 8.87451 22.9583Z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path opacity="0.4" d="M36.4583 15.8957V10.4165C36.4583 6.24984 34.375 4.1665 30.2083 4.1665H19.7916C15.625 4.1665 13.5416 6.24984 13.5416 10.4165V15.7498" stroke="#ffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path opacity="0.4" d="M26.3121 22.896L27.4996 24.7502C27.6871 25.0418 28.1038 25.3335 28.4163 25.4168L30.5413 25.9585C31.8538 26.2918 32.208 27.4168 31.3538 28.4585L29.958 30.146C29.7496 30.4168 29.583 30.896 29.6038 31.2293L29.7288 33.4168C29.8121 34.771 28.8538 35.4585 27.6038 34.9585L25.5621 34.146C25.2496 34.021 24.7288 34.021 24.4163 34.146L22.3746 34.9585C21.1246 35.4585 20.1662 34.7502 20.2496 33.4168L20.3746 31.2293C20.3954 30.896 20.2287 30.396 20.0204 30.146L18.6246 28.4585C17.7704 27.4168 18.1246 26.2918 19.4371 25.9585L21.5621 25.4168C21.8955 25.3335 22.3121 25.021 22.4788 24.7502L23.6663 22.896C24.4163 21.771 25.583 21.771 26.3121 22.896Z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </span>
            <span className="text-[#2D3B36] text-base font-medium">Best Skin Care Product<br />Award Wining</span>
          </div>
          {/* Award badge overlay for mobile only */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center items-center px-4 sm:hidden">
            <div className="flex flex-row items-center w-full bg-[#F3F7E7] border border-[#E6E9E2] rounded-full px-4 py-2 shadow-md">
              <span className="inline-flex items-center justify-center w-14 h-14 rounded-full border-2 border-dotted border-[#2D3B36] bg-[#2D3B36]">
                <span className="flex items-center justify-center w-10 h-10 bg-[#2D3B36] rounded-full">
                  <svg width="24" height="24" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.87451 22.9583V33.3124C8.87451 37.1041 8.87451 37.1041 12.4578 39.5208L22.3121 45.2082C23.7912 46.0624 26.2079 46.0624 27.6871 45.2082L37.5412 39.5208C41.1246 37.1041 41.1246 37.1041 41.1246 33.3124V22.9583C41.1246 19.1667 41.1246 19.1667 37.5412 16.75L27.6871 11.0625C26.2079 10.2083 23.7912 10.2083 22.3121 11.0625L12.4578 16.75C8.87451 19.1667 8.87451 19.1667 8.87451 22.9583Z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path opacity="0.4" d="M36.4583 15.8957V10.4165C36.4583 6.24984 34.375 4.1665 30.2083 4.1665H19.7916C15.625 4.1665 13.5416 6.24984 13.5416 10.4165V15.7498" stroke="#ffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path opacity="0.4" d="M26.3121 22.896L27.4996 24.7502C27.6871 25.0418 28.1038 25.3335 28.4163 25.4168L30.5413 25.9585C31.8538 26.2918 32.208 27.4168 31.3538 28.4585L29.958 30.146C29.7496 30.4168 29.583 30.896 29.6038 31.2293L29.7288 33.4168C29.8121 34.771 28.8538 35.4585 27.6038 34.9585L25.5621 34.146C25.2496 34.021 24.7288 34.021 24.4163 34.146L22.3746 34.9585C21.1246 35.4585 20.1662 34.7502 20.2496 33.4168L20.3746 31.2293C20.3954 30.896 20.2287 30.396 20.0204 30.146L18.6246 28.4585C17.7704 27.4168 18.1246 26.2918 19.4371 25.9585L21.5621 25.4168C21.8955 25.3335 22.3121 25.021 22.4788 24.7502L23.6663 22.896C24.4163 21.771 25.583 21.771 26.3121 22.896Z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </span>
              <span className="text-[#2D3B36] text-base font-medium pl-4">Best Skin Care Product<br />Award Wining</span>
            </div>
          </div>
          {/* Since 2001 and Learn More for mobile */}
          <div className="absolute bottom-2 left-0 right-0 flex justify-between items-center px-4 text-[#2D3B36] font-normal text-lg translate-y-10">
            <span>SINCE 2001</span>
            <span className="">LEARN MORE</span>
          </div>
         
        </div>
      </div>
    </section>
  );
};

export default Features; 