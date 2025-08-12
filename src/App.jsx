import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Feature'
import Feel from './components/Feel'
import BestSelling from './components/BestSelling'
import Footer from './components/Footer'
import FAQ from './components/FAQ'
import ProductCatogory from './components/ProductCatogory'
import LoadingScreen from './components/LoadingScreen';



export default function App() {
    const pageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      pageRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1.2, ease: 'power2.out' }
    );
  }, []);
  return (
   <><LoadingScreen/>
   <div ref={pageRef} className="min-h-screen w-full">
     <Navbar/>
     <main>
      <Hero/>
      <Features/>
      <BestSelling/>
      <Feel/>
      <ProductCatogory/>
      <FAQ/>
      <Footer/>
     </main>
   </div>
  
   </>
  )
}
