import { useRef, useEffect, memo, useState } from 'react'
const Slider = () => {
  const [loading, setLoading] = useState(true)
  const images = Array.from({ length: 13 }, (_, index) => `/${index}.jpg`)
  const slider = useRef(null)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (slider.current) {
        slider.current.scrollLeft = window.scrollY * 2

      }
    })
    return () => {
      window.removeEventListener('scroll', window)
    }
  }, [])
  return (
    <>
      <div
        ref={slider}
        className={`*:w-full h-fit text-blue-600 border-2 hidden  md:w-screen 
        md:gap-2 *:rounded-xl md:*:rounded-sm rounded-xl my-4 backdrop-blur-2xl md:backdrop-blur-none gap-2`}
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        <img loading="lazy" src="./1.jpg" alt="" className="inline " onError={e => { e.target.style.display = "none" }} />
        <img loading="lazy" src="./8.jpg" alt="" className="inline -auto " onError={e => { e.target.style.display = "none" }} />
        <img loading="lazy" src="./2.jpg" alt="" className="inline -auto" onError={e => { e.target.style.display = "none" }} />
        <img loading="lazy" src="./3.jpg" alt="" className="inline -auto" onError={e => { e.target.style.display = "none" }} />
        <img loading="lazy" src="./4.jpg" alt="" className="inline -auto" onError={e => { e.target.style.display = "none" }} />
        <img loading="lazy" src="./5.jpg" alt="" className="inline -auto" onError={e => { e.target.style.display = "none" }} />
        <img loading="lazy" src="./6.jpg" alt="" className="inline -auto" onError={e => { e.target.style.display = "none" }} />
        <img loading="lazy" src="./7.jpg" alt="" className="inline -auto" onError={e => { e.target.style.display = "none" }} />
    
        <img loading="lazy" src="./9.jpg" alt="" className="inline -auto" onError={e => { e.target.style.display = "none" }} />
        <img loading="lazy" src="./10.jpg" alt="" className="inline -auto" onError={e => { e.target.style.display = "none" }} />
        <img loading="lazy" src="./11.jpg" alt="" className="inline -auto" onError={e => { e.target.style.display = "none" }} />
      </div>
    </>
  )
}

const ImageSlider = memo(Slider)
export default ImageSlider

