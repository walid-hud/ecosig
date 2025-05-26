import { IoMdSend as Send} from "react-icons/io";
const ContactForm = () => {
  return (
    <div className="">
      <h1 className='text-3xl mb-2 border-l-4 border-blue-600 rounded-sm px-1'>Posez vos questions.</h1>
      <form className='flex flex-col mt-4 '>
        <label htmlFor="full name" className="text-sm px-2 mb-[-2px] w-fit backdrop-opacity-0">
              Prénom et nom<span className="text-red-600">*</span>
        </label>
        <input type="text" required name="full name" placeholder="Prénom et nom" id="name" className='outline-1 focus:outline-sky-600 rounded-md p-2' />


        <label htmlFor="email" className="text-sm mt-4 px-2 mb-[-2px] w-fit backdrop-opacity-0">
              Email<span className="text-red-600">*</span>
        </label>
        <input type='email' required name="Email" placeholder="Email" id="email" className='outline-1 focus:outline-blue-700  rounded-md p-2' />

       <label htmlFor="subject" className="text-sm mb-[-2px] mt-4 px-2 w-fit backdrop-opacity-0">sujet</label>
        <input type="text"  name="subject" placeholder="Sujet (optional)" id="subject" className='outline-1 focus:outline-sky-600 rounded-md p-2' />

        
        <label htmlFor="message" className="text-sm mt-4 mb-[-2px] px-2 w-fit backdrop-opacity-0">
              Message<span className="text-red-600">*</span>
        </label>
        <textarea name="message" required id="message" rows="6" placeholder="Je souhaite poser une question concernant..." className='outline-1 mb-6 focus:outline-blue-600 rounded-md p-2'></textarea>
  
        <button type="submit" className='outline-1 outline-black bg-blue-500 active:scale-90 active:animate-bounce focus:outline-red-600 text-xl text-white flex items-center justify-center gap-4 py-2 px-4  rounded-md mb-10 md:mb-0 hover:bg-blue-700 transition duration-300  '>Envoyer <Send className=""/></button>
      </form>
    </div>
  )
}

export default ContactForm 
