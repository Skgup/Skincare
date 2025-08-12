import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import feelBeauty from '../assets/images/feelBeauty.png'
const Feel = () => {
  const buttonRef = useRef(null);

  useEffect(() => {
    const btn = buttonRef.current;
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
    <section
      className="relative w-full flex justify-center items-end h-screen bg-[#FAFAF3] overflow-hidden rounded-3xl mt-8 mb-8 hidden lg:flex px-12 max-w-7xl mx-auto"
      style={{ boxShadow: '0 2px 16px 0 rgba(0,0,0,0.04)' }}
    >
      <img
        src={feelBeauty}
        alt="Feel Beautiful Inside and Out"
        className="absolute inset-0 w-full h-full object-cover object-center rounded-3xl"
        draggable="false"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent rounded-3xl" />
      <div className="relative z-10 flex flex-col items-center justify-end w-full pb-16">
        <h2 className="text-white text-6xl font-normal text-center mb-8 drop-shadow-lg leading-snug">
          Feel Beautiful Inside and Out<br />with Every Product.
        </h2>
        <button
          ref={buttonRef}
          className="px-7 py-2 bg-white text-black rounded-full shadow-md text-sm font-medium transition hover:bg-neutral-100 focus:outline-none"
        >
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default Feel; 