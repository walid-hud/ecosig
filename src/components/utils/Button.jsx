const Button = ({text , icon , styles, border, bg}) => {
    return (
        <button  style={{border:border}} className={`button-56 flex items-center justify-center gap-2 bg-neutral-100  border-solid border-2 border-neutral-700 rounded-full box-border text-[#111] cursor-pointer text-xl md:text-xl h-12 leading-6 px-3 relative text-center no-underline select-none user-select-none touch-manipulation ${styles} ${bg == "neutral" ?  "after:bg-blue-600 " : "after:bg-neutral-900 text-neutral-100" }`} role="button">{text}{icon}</button>
    )
}

export default Button
