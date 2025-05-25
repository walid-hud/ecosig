import { useState } from "react"
import { FadeLoader } from "react-spinners"


function ImageLoader({imgSrc , title , styleClasses}){
    const [loading , setLoading] = useState(true)
    const [isError , setError] = useState(false)
    return(<>
    
    {(loading || isError) &&  <div className="flex justify-center items-center aspect-video">
    <FadeLoader loading={loading} color="var(--color-blue-600)" radius={"10px"}  />
    </div>}

    <img src={imgSrc} onLoad={()=>setLoading(false)} onError={()=>{setError(true);setLoading(true)}} alt={title} className={`my-4 aspect-video ${isError ? "hidden" : " "} ${styleClasses}`} />
    
    </>)

}

export default ImageLoader