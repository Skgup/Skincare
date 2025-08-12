import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import Product2 from '../assets/images/product2.jpg'
import headphone from '../assets/svgs/headphone.svg'
const faqs = [
  {
    question: 'Are your products safe for sensitive skin?',
    answer: 'Yes, our products are formulated to be gentle and safe for sensitive skin. We recommend patch testing before full use.',
  },
  {
    question: 'Are your products cruelty-free?',
    answer:
      'Absolutely! All our products are cruelty-free, and most are vegan. Check individual product details for specifics.',
  },
  {
    question: `What's your return policy?`,
    answer: 'We offer a 30-day return policy on all unused and unopened products. Please contact our support for assistance.',
  },
  {
    question: 'Do you ship internationally?',
    answer: 'Yes, we ship to most countries worldwide. Shipping fees and delivery times vary by location.',
  },
  {
    question: 'How do i choose the right product?',
    answer: 'You can use our product finder quiz or contact our support team for personalized recommendations.',
  },
];

function FAQ() {
  const [openIdx, setOpenIdx] = useState(1); // 2nd question open by default
  const faqButtonRefs = useRef([]);

  useEffect(() => {
    faqButtonRefs.current.forEach((btn) => {
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
  }, []);

  return (
    <section className="w-full bg-[#FEFFF4] pt-12 lg:pt-0 lg:py-16 flex justify-center items-center min-h-screen">
      <div className="max-w-[1280px] w-full mx-auto flex flex-col-reverse lg:flex-row gap-12 items-stretch px-0 lg:px-8">
        {/* Left: Image and badge */}
        <div className="flex-1 flex flex-col items-center lg:items-start justify-center min-h-[650px] max-h-[700px] lg:min-h-[800px] lg:max-h-[800px] block md:hidden lg:block">
          <div className="relative rounded-3xl overflow-hidden w-full aspect-square max-w-[600px] min-h-[600px] max-h-[700px] lg:min-h-[700px] lg:max-h-[700px] flex-1 flex items-center justify-center bg-white">
            <img
              src={Product2}
              alt="Product"
              className="w-full h-full object-cover object-center"
              style={{ minHeight: '100%', height: '100%' }}
            />
            <div className="absolute left-1/2 bottom-0 -translate-x-1/2 -translate-y-10 flex items-center gap-3 bg-[#EAF2D7] border border-[#C7D7B5] rounded-full px-7 py-3 shadow-md min-w-[260px] z-20">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full border-2 border-dotted border-[#2D3B36]  ">
                <img src={headphone} alt="Headphone" className="w-10 h-10 "  />
              </span>
              <span className="text-[#2D3B36] text-[17px] font-medium leading-tight">24/7 We’re Here<br />to Help You</span>
            </div>
          </div>
        </div>
        {/* Right: FAQ content */}
        <div className="flex-1 flex flex-col justify-center min-h-[650px] max-h-[700px] px-4 lg:px-0">
          <div className="flex flex-col gap-8 w-full max-w-[600px] mx-auto">
            <div className="flex justify-start mb-2">
              <span className="flex items-center border border-[#2D3B36] rounded-full px-7 py-2 bg-white text-[#2D3B36] text-[18px] font-medium w-fit shadow-sm">
                <span className="inline-block w-3 h-3  bg-[#2D3B36] rounded-full mr-2"></span>
                Frequently Asked Question
              </span>
            </div>
            <h2 className="text-[#2D3B36] text-[44px] lg:text-[52px] font-normal text-left mb-8 leading-[1.1]" style={{ fontWeight: 400, letterSpacing: '-0.02em' }}>
              Answers to Your<br />Skincare Questions, All<br />in One Place.
            </h2>
            <div className="flex flex-col gap-3">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className={`border border-[#BFC8B8] rounded-md bg-white transition-all duration-200 overflow-hidden`}
                >
                  <button
                    ref={el => faqButtonRefs.current[idx] = el}
                    className="w-full flex items-center justify-between px-7 py-4 text-[18px] text-[#2D3B36] font-normal focus:outline-none"
                    onClick={() => setOpenIdx(idx === openIdx ? -1 : idx)}
                    aria-expanded={openIdx === idx}
                  >
                    <span>{faq.question}</span>
                    <span className="ml-4 text-2xl">
                      {openIdx === idx ? '\u2212' : '+'}
                    </span>
                  </button>
                  {faq.answer && (
  <div
    className={`px-7 pb-0 text-[#2D3B36] text-[15px] opacity-80 transition-all duration-300 ease-in-out`}
    style={{
      maxHeight: openIdx === idx ? '500px' : '0',
      overflow: 'hidden',
      paddingBottom: openIdx === idx ? '1rem' : '0',
    }}
  >
    {faq.answer}
  </div>
)}

                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;