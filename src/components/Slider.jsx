import {useRef , useEffect , memo}from 'react'
const Slider = () => {
    const images = Array.from({length:12}, (_, index)=>`/${index}.jpg`)
    const slider = useRef(null)
    useEffect(()=>{
      window.addEventListener('scroll' , ()=>{
        if(slider.current){
          slider.current.scrollLeft = window.scrollY
          
        }
      })
      return ()=>{
        window.removeEventListener('scroll' , window)
      }
    } ,[])
  return (
    <>
      <div
          ref={slider}
          className="*:w-full -px-4 *:aspect-auto flex overflow-x-auto *:rounded-xl my-4  
           
          backdrop-blur-2xl 
        ">
          {images.map((value , index) => (
            <img
              key={index}
              src={value}
              alt=""
              className={` object-cover ${index > 0 ? "mr-4":""}`}
            />)
          )}
        </div>
    </>
  )
}

const ImageSlider = memo(Slider)
export default ImageSlider

