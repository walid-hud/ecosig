import { useState } from "react";
import { IoMdSend as Send, } from "react-icons/io";
import { FadeLoader } from "react-spinners";
import { mockFetchPost, postToAPI } from "./utils";
import { MdCheck, MdWarning } from "react-icons/md";
import { toast } from "react-toastify";
import { useRef } from "react";
const ContactForm = () => {
  // questionable implementation but, don't judge me :}
  const [btnContent, setBtnContent] = useState(() => <>Envoyer <Send className="" /></>)
  const [btnStyle, setBtnStyle] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [nameRef,emailRef,messageRef] = [useRef(),useRef(),useRef()] // I don't know what i'm even doing man

  async function sendForm(e) {
    e.preventDefault();
    setIsSubmitting(true);
    setBtnContent(<><span>envoi en cours</span><FadeLoader style={{ transform: "scale(0.5)", display: "inline-block" }} color="white" loading size={90} className="ml-2 mt-[-8px] " /></>);
    setBtnStyle("bg-blue-600 cursor-not-allowed");
    const formData = {};
    formData.append("name", nameRef.current.value);
    formData.append("email", emailRef.current.value);
    formData.append("message", messageRef.current.value);
    console.log(formData)
    try {
      const {ok, message} = await postToAPI(formData);
      if (!ok) {
        setBtnStyle("bg-red-500 hover:bg-red-600");
        throw new Error()
      }

      if(!message || message == "Mock post failed"){
        setBtnStyle("bg-red-500 hover:bg-red-600");
        throw new Error()
      }

      if(data.message == "Mock post succeeded"){
        setBtnContent(<>Envoyé <MdCheck /></>);
        setBtnStyle("bg-green-500 hover:bg-green-600");
        toast.success("Envoyé")
        e.target.reset();
      }

    } catch (error) {
      setBtnContent(<> Erreur <MdWarning /></>);
      setBtnStyle("bg-red-500 hover:bg-red-600");
      toast.error("envoi échoué")
      e.target.reset();
    }
    setTimeout(() => {
      setBtnContent(() => <>Envoyer <Send className="" /></>);
      setBtnStyle("bg-blue-600")
      setIsSubmitting(false);
    }, 3000);
  }

  return (
    <div className="">
      <h1 className='text-3xl md:text-5xl mb-2 border-l-4 md:border-l-6 border-blue-600 md:rounded-md rounded-sm px-2'>Posez vos questions</h1>
      <form className='flex flex-col mt-4 ' onSubmit={sendForm}>
        <label htmlFor="full name" className="text-sm px-2 mb-[-2px] w-fit backdrop-opacity-0">
          Prénom et nom<span className="text-red-600">*</span>
        </label>
        <input
        ref={nameRef}
          type="text"
          required
          name="full name"
          placeholder="Prénom et nom"
          inputMode="text"
          id="name"
          className='outline-1 focus:outline-sky-600 rounded-md p-2'
          maxLength={50}
        />

        <label htmlFor="email" className="text-sm mt-4 px-2 mb-[-2px] w-fit backdrop-opacity-0">
          Email<span className="text-red-600">*</span>
        </label>
        <input
        ref={emailRef}
          type="email"
          required
          name="email"
          placeholder="Email"
          id="email"
          className='outline-1 focus:outline-sky-600 rounded-md p-2'
          maxLength={50}
        />

        <label htmlFor="message" className="text-sm mt-4 mb-[-2px] px-2 w-fit backdrop-opacity-0">
          Message<span className="text-red-600">*</span>
        </label>
        <textarea
        ref={messageRef}
          name="message"
          required
          id="message"
          rows="6"
          placeholder="Je souhaite poser une question concernant..."
          className='outline-1 mb-6 focus:outline-blue-600 rounded-md p-2'
          
          maxLength={1000}
        ></textarea>

        <button disabled={isSubmitting}  onClick={()=>{document.querySelector("form").submit = ()=>sendForm()}} className={`outline-1 outline-black bg-blue-500 active:scale-90 active:animate-bounce text-xl  text-white flex items-center justify-center gap-4 py-2 px-4  rounded-md mb-10 md:mb-0 hover:bg-blue-700 transition duration-300 ${btnStyle}`}>
          {btnContent}
        </button>
      </form>
    </div>
  )
}

export default ContactForm 
