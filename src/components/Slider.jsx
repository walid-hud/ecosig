import { useRef, useEffect, memo, useState } from 'react'
import { FadeLoader } from 'react-spinners'
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
        className="*:w-full -px-4 flex overflow-x-auto *:rounded-xl rounded-xl my-4 backdrop-blur-2xl scrollbar-hide"
        style={{
          scrollbarWidth: 'none', 
          msOverflowStyle: 'none', 
        }}
      >
        {images.map((value, index) => (
          <>
            <img
              onLoad={() => setLoading(false)}
              key={index}
              src={value}
              alt=""
              className={`object-cover aspect-video ${index > 0 ? "mr-4" : ""}`}
              onError={(e)=>{e.target.style.display = "none"}}
            />
            {loading && (
              <div  className="flex justify-center items-center aspect-video">
                <FadeLoader loading={loading} color="var(--color-blue-600)" radius={"10px"} />
              </div>
            )}
          </>
        ))}
      </div>
    </>
  )
}

const ImageSlider = memo(Slider)
export default ImageSlider

