import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import product1 from '../assets/images/product1.jpg'
import product2 from '../assets/images/product2.jpg'
import product3 from '../assets/images/product3.jpg'

import cart from '../assets/svgs/cart.svg'
import leftarrow from '../assets/svgs/leftarrow.svg'
import rightarrow from '../assets/svgs/rightarrow.svg'
const products = [
  {
    image: product3,
    name: 'ALYA SKIN CLEANSER.',
    price: 'FROM $29.99',
    tags: ['NEW ARRIVAL', 'CLEANSING'],
  },
  {
    image: product1,
    name: 'RITUAL OF SAKURA.',
    price: 'FROM $27.99',
    tags: ['NEW ARRIVAL', 'ACNE FIGHTER'],
  },
  {
    image: product2,
    name: 'THE BODY LOTION.',
    price: 'FROM $19.99',
    tags: ['NEW ARRIVAL', 'ANTI AGING'],
  },
];

const filters = [
  { label: 'NEW ARRIVAL' },
  { label: 'CLEANSING' },
  { label: 'ACNE FIGHTER' },
  { label: 'ANTI AGING' },
];

const ProductCatogory = () => {
  const [activeFilter, setActiveFilter] = useState('NEW ARRIVAL');
  const [current, setCurrent] = useState(0);
  const sliderRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);
  const filterButtonRefs = useRef([]);
  const cartButtonRefs = useRef([]);
  const leftArrowRef = useRef(null);
  const rightArrowRef = useRef(null);

  useEffect(() => {
    function handleResize() {
      setIsDesktop(window.innerWidth >= 1024);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const filteredProducts =
    activeFilter === 'NEW ARRIVAL'
      ? products
      : products.filter((product) => product.tags.includes(activeFilter));

  // For mobile/tablet slider
  const maxIndex = filteredProducts.length - 1;
  const canGoLeft = current > 0;
  const canGoRight = current < maxIndex;

  const handleArrow = (dir) => {
    if (dir === 'left' && canGoLeft) setCurrent(current - 1);
    if (dir === 'right' && canGoRight) setCurrent(current + 1);
  };

  // For smooth sliding
  const gapVW = 9;
  const cardVW = 80;
  const centerOffset = (100 - cardVW) / 2; // 10vw
  const trackStyle = !isDesktop
    ? {
        transform:
          current === 0
            ? 'translateX(0)'
            : current === maxIndex
            ? `translateX(calc(-${current * (cardVW + gapVW)}vw + ${(100 - cardVW)}vw))`
            : `translateX(calc(-${current * (cardVW + gapVW)}vw + ${centerOffset}vw))`,
        transition: 'transform 0.5s cubic-bezier(0.4,0,0.2,1)',
        width: `calc(${filteredProducts.length} * (${cardVW}vw + ${gapVW}vw))`
      }
    : {};

  // Reset slider index when filter changes
  useEffect(() => {
    setCurrent(0);
  }, [activeFilter]);

  useEffect(() => {
    // Filter buttons
    filterButtonRefs.current.forEach((btn) => {
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
      // Cleanup
      return () => {
        btn.removeEventListener('mouseenter', onEnter);
        btn.removeEventListener('mouseleave', onLeave);
        btn.removeEventListener('mousedown', onDown);
        btn.removeEventListener('mouseup', onUp);
        btn.removeEventListener('touchstart', onDown);
        btn.removeEventListener('touchend', onUp);
      };
    });
    // Cart buttons
    cartButtonRefs.current.forEach((btn) => {
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
      // Cleanup
      return () => {
        btn.removeEventListener('mouseenter', onEnter);
        btn.removeEventListener('mouseleave', onLeave);
        btn.removeEventListener('mousedown', onDown);
        btn.removeEventListener('mouseup', onUp);
        btn.removeEventListener('touchstart', onDown);
        btn.removeEventListener('touchend', onUp);
      };
    });
    // Arrow buttons
    [leftArrowRef.current, rightArrowRef.current].forEach((btn) => {
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
      // Cleanup
      return () => {
        btn.removeEventListener('mouseenter', onEnter);
        btn.removeEventListener('mouseleave', onLeave);
        btn.removeEventListener('mousedown', onDown);
        btn.removeEventListener('mouseup', onUp);
        btn.removeEventListener('touchstart', onDown);
        btn.removeEventListener('touchend', onUp);
      };
    });
  }, [filteredProducts.length]);

  return (
    <section className="w-full bg-[#FEFFF4] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-[#2D3B36] text-4xl md:text-5xl font-semibold text-center mb-8 leading-tight">
          Feel Beautiful Inside and Out<br />with Every Product.
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter, i) => (
            <button
              key={filter.label}
              ref={el => filterButtonRefs.current[i] = el}
              onClick={() => setActiveFilter(filter.label)}
              className={`px-6 py-2 rounded-full border text-base font-medium transition-all duration-150 ${
                activeFilter === filter.label
                  ? 'bg-[#2D3B36] text-white border-[#2D3B36]'
                  : 'bg-white text-[#2D3B36] border-[#2D3B36]'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
        {/* Mobile/Tablet Slider */}
        <div className="flex flex-col gap-6 lg:hidden">
          <div className="relative w-full overflow-x-hidden">
            <div
              ref={sliderRef}
              className="flex gap-x-[3vw]"
              style={trackStyle}
            >
              {filteredProducts.map((product, idx) => (
                <div
                  key={idx}
                  className={`relative rounded-2xl overflow-hidden bg-transparent h-[500px] sm:h-[750px] min-w-[80vw] max-w-[80vw]`}
                >
                  <img src={product.image} alt={product.name} className="absolute inset-0 w-full h-full object-cover" />
                  {/* Overlay at bottom center */}
                  <div className="absolute left-0 right-0 bottom-0 flex flex-col items-center px-6 pb-6">
                    <div className="flex flex-row bg-[#ffffffbe] px-5 py-3 rounded-xl items-center justify-center gap-4 w-full">
                      <div className="flex flex-col items-start flex-1">
                        <div className="text-[#2D3B36] text-base font-medium leading-tight mb-1">{product.name}</div>
                        <div className="text-xs text-[#2D3B36] opacity-60">{product.price}</div>
                      </div>
                      <button ref={el => cartButtonRefs.current[idx] = el} className="w-14 h-12 flex items-center justify-center rounded-xl bg-white/80 border border-[#E6E9E2]">
                        <img src={cart} alt="Cart" className="w-7 h-7" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Arrow Buttons */}
          <div className="flex items-center justify-center gap-6 mt-2">
            <button
              ref={leftArrowRef}
              className={`w-14 h-14 flex items-center justify-center rounded-full border border-[#2D3B36] bg-transparent ${!canGoLeft ? 'opacity-30 cursor-not-allowed' : ''}`}
              onClick={() => handleArrow('left')}
              disabled={!canGoLeft}
              aria-label="Previous"
            >
              <img src={leftarrow} alt="Left Arrow" className="h-full" />
            </button>
            <button
              ref={rightArrowRef}
              className={`w-14 h-14 flex items-center justify-center rounded-full bg-[#2D3B36] ${!canGoRight ? 'opacity-30 cursor-not-allowed' : ''}`}
              onClick={() => handleArrow('right')}
              disabled={!canGoRight}
              aria-label="Next"
            >
              <img src={rightarrow} alt="Right Arrow" className="h-full" />
            </button>
          </div>
        </div>
        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredProducts.map((product, idx) => (
            <div key={idx} className="relative rounded-2xl overflow-hidden flex flex-col h-full bg-transparent">
              <img src={product.image} alt={product.name} className="object-cover w-full h-full" />
              {/* Overlay at bottom center */}
              <div className="absolute left-0 right-0 bottom-0 flex flex-col items-center px-6 pb-6">
                <div className="flex flex-row bg-[#ffffffbe] px-5 py-3 rounded-xl items-center justify-center gap-4 w-full">
                  <div className="flex flex-col items-start flex-1">
                    <div className="text-[#2D3B36] text-base font-medium leading-tight mb-1">{product.name}</div>
                    <div className="text-xs text-[#2D3B36] opacity-60">{product.price}</div>
                  </div>
                  <button className="w-14 h-12 flex items-center justify-center rounded-xl bg-white/80 border border-[#E6E9E2]">
                    <img src={cart} alt="Cart" className="w-7 h-7" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCatogory; 