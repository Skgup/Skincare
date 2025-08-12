import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import product1 from '../assets/images/product1.jpg'
import product2 from '../assets/images/product2.jpg'
import product3 from '../assets/images/product3.jpg'
// import product4 from '../assets/images/product4.jpg'
import cart from '../assets/svgs/cart.svg'
import leftarrow from '../assets/svgs/leftarrow.svg'
import rightarrow from '../assets/svgs/rightarrow.svg'
const products = [
  {
    image: product3,
    name: 'ALYA SKIN CLEANSER.',
    price: 'FROM $29.99',
  },
  {
    image:product1,
    name: 'RITUAL OF SAKURA.',
    price: 'FROM $27.99',
  },
  {
    image: product2,
    name: 'THE BODY LOTION.',
    price: 'FROM $19.99',
  },

];

function BestSelling() {
  // For mobile/tablet slider
  const [current, setCurrent] = useState(0);
  const sliderRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);
  // Refs for all product cart buttons
  const buttonRefs = useRef([]);

  useEffect(() => {
    function handleResize() {
      setIsDesktop(window.innerWidth >= 1024);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // GSAP hover/tap animation handlers
  useEffect(() => {
    buttonRefs.current.forEach((btn) => {
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
  }, [isDesktop, products.length]);

  // For mobile/tablet: 1 card fully visible, no peek
  const maxIndex = products.length - 1;
  const canGoLeft = current > 0;
  const canGoRight = current < maxIndex;

  // Slide logic for mobile/tablet
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
        width: `calc(${products.length} * (${cardVW}vw + ${gapVW}vw))`
      }
    : {};

  return (
    <section className="w-full bg-[#FEFFF4] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Tablet/Mobile Layout */}
        <div className="flex flex-col gap-6 lg:hidden">
          {/* Row 1: Pill */}
          <div className="flex items-center border border-[#2D3B36] rounded-full px-6 py-2 bg-white text-[#2D3B36] text-base font-medium w-fit ml-0">
            <span className="inline-block w-3 h-3 bg-[#2D3B36] rounded-full mr-2"></span>
            Best Selling Products
          </div>
          {/* Row 2: Heading */}
          <h2 className="text-left text-[#2D3B36] text-2xl xs:text-3xl sm:text-4xl font-semibold leading-tight">
            Skincare That Brings Out<br />Your Natural Radiance
          </h2>
          {/* Row 3: Product Slider */}
          <div className="relative w-full overflow-x-hidden">
            <div
              ref={sliderRef}
              className="flex gap-x-[3vw]"
              style={trackStyle}
            >
              {products.map((product, idx) => (
                <div
                  key={idx}
                  className={`relative rounded-2xl overflow-hidden bg-transparent h-[500px] sm:h-[750px] min-w-[80vw] max-w-[80vw]`}
                  style={isDesktop ? {} : {}}
                >
                  <img src={product.image} alt={product.name} className="absolute inset-0 w-full h-full object-cover" />
                  {/* Overlay at bottom center */}
                  <div className="absolute left-0 right-0 bottom-0 flex flex-col items-center px-6 pb-6">
                    <div className="flex flex-row bg-[#ffffffbe] px-5 py-3 rounded-xl items-center justify-center gap-4 w-full">
                      <div className="flex flex-col items-start flex-1">
                        <div className="text-[#2D3B36] text-base font-medium leading-tight mb-1">{product.name}</div>
                        <div className="text-xs text-[#2D3B36] opacity-60">{product.price}</div>
                      </div>
                      <button ref={el => buttonRefs.current[idx] = el} className="w-14 h-12 flex items-center justify-center rounded-xl bg-white/80 border border-[#E6E9E2]">
                        <img src={cart} alt="Cart" className="w-7 h-7" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Row 4: Arrow Buttons */}
          <div className="flex items-center justify-center gap-6 mt-2">
            <button
              className={`w-14 h-14 flex items-center justify-center rounded-full border border-[#2D3B36] bg-transparent ${!canGoLeft ? 'opacity-30 cursor-not-allowed' : ''}`}
              onClick={() => handleArrow('left')}
              disabled={!canGoLeft}
              aria-label="Previous"
            >
              <img src={leftarrow} alt="Left Arrow" className="h-full" />
            </button>
            <button
              className={`w-14 h-14 flex items-center justify-center rounded-full bg-[#2D3B36] ${!canGoRight ? 'opacity-30 cursor-not-allowed' : ''}`}
              onClick={() => handleArrow('right')}
              disabled={!canGoRight}
              aria-label="Next"
            >
              <img src={rightarrow

              } alt="Right Arrow" className="h-full" />
            </button>
          </div>
        </div>
        {/* Desktop Layout (unchanged) */}
        <div className="hidden lg:block">
          <div className="flex items-center justify-between mb-10 flex-wrap gap-y-4">
            {/* Left: Best Selling Products */}
            <div className="flex items-center border border-[#2D3B36] rounded-full px-6 py-2 bg-white text-[#2D3B36] text-base font-medium">
              <span className="inline-block w-3 h-3 bg-[#2D3B36] rounded-full mr-2"></span>
              Best Selling Products
            </div>
            {/* Center: Heading */}
            <h2 className="flex-1 text-center text-[#2D3B36] text-4xl md:text-5xl font-semibold leading-tight">
              Skincare That Brings Out<br className="hidden md:block" />
              Your Natural Radiance
            </h2>
            {/* Right: Arrows */}
            <div className="flex items-center gap-6">
              <button className="w-14 h-14 flex items-center justify-center rounded-full border border-[#2D3B36] bg-transparent">
                <img src={leftarrow} alt="Left Arrow" className="h-full" />
              </button>
              <button className="w-14 h-14 flex items-center justify-center rounded-full bg-[#2D3B36]">
                <img src={rightarrow} alt="Right Arrow" className="h-full" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {products.map((product, idx) => (
              <div key={idx} className="relative rounded-2xl overflow-hidden flex flex-col h-full bg-transparent">
                <img src={product.image} alt={product.name} className="object-cover w-full h-full" />
                {/* Overlay at bottom center */}
                <div className="absolute left-0 right-0 bottom-0 flex flex-col items-center px-6 pb-6">
                  <div className="flex flex-row bg-[#ffffffbe] px-5 py-3 rounded-xl items-center justify-center gap-4 w-full">
                    <div className="flex flex-col items-start flex-1">
                      <div className="text-[#2D3B36] text-base font-medium leading-tight mb-1">{product.name}</div>
                      <div className="text-xs text-[#2D3B36] opacity-60">{product.price}</div>
                    </div>
                    <button ref={el => buttonRefs.current[idx + products.length] = el} className="w-14 h-12 flex items-center justify-center rounded-xl bg-white/80 border border-[#E6E9E2]">
                      <img src={cart} alt="Cart" className="w-7 h-7" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BestSelling;