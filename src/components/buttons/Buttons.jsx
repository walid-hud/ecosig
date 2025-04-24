
const ButtonMain = ({text , icon , classes}) =>{
    return( 
        <div className="flex  ">
        <button id="button-main" title="Rejoignez-nous" 
        className={`flex items-center text-lg md:text-xl border-1 min-sm:px-4 max-sm:px-2  py-1  bg-white active:text-red-600 active:scale-110 
         transition-all duration-200
         hover:text-red-600 hover:border-1 hover:px-6
          border-blue-600 rounded-full ${classes} `}>
            <span style={{fontFamily:"var(--font-serif)"} }>{text}</span>
            {icon}  
        </button>
        </div>
    )
}


const ButtonSecondary = ({text, icon}) =>{
    return(
        <button id="button-secondary">
            {icon}
            <p>{text}</p>
        </button>
    )
}

export {ButtonMain, ButtonSecondary}