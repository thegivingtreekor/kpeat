import React, { useEffect, useState, useCallback } from 'react'
import img1 from '../../assets/peat_bog1.png'
import img2 from '../../assets/peat_bog2.png'
import img3 from '../../assets/peat_bog3.png'
import img4 from '../../assets/peat_bog4.png'
function Hero() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 4
  const autoPlayTime = 5000;

  // 다음 슬라이드로 이동
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === totalSlides ? 1: prev + 1))
  }, [totalSlides])

  // 이전 슬라이드 이동
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 1 ? totalSlides : prev - 1))
  }

  // 자동 타이머
  useEffect(() => {
    const element = document.getElementById(`slide-${currentSlide}`);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start'
      })
    }
  }, [currentSlide])
  return (
    <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full overflow-hidden h-100">
    <img
      src={img1}
      className="w-full object-cover" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full overflow-hidden h-100">
    <img
      src={img2}
      className="w-full object-cover" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full overflow-hidden h-100">
    <img
      src={img3}
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full overflow-hidden h-100">
    <img
      src={img4}
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
  )
}

export default Hero