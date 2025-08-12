import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function LoadingScreen(){
  const ref = useRef()
  useEffect(()=>{
    gsap.to(ref.current, { opacity: 0, duration: 0.9, delay: 0.8, pointerEvents: 'none' })
  },[])
  return (
    <div ref={ref} className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="text-xl font-semibold">Loading...</div>
    </div>
  )
}
