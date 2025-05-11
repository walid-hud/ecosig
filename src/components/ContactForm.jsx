import { IoMdSend as Send} from "react-icons/io";
const ContactForm = () => {
  return (
    <div>
      <h1 className='text-3xl mb-2 border-l-4 border-blue-600 rounded-sm px-1'>Posez vos questions.</h1>
      <form className='flex flex-col '>
        <label htmlFor="name" className='text-xl invisible'>Nom</label>
        <input type="text" required name="name" placeholder="Nom" id="name" className='outline-1 focus:outline-sky-600 rounded-md p-2' />

        <label htmlFor="email" className='text-xl invisible'>Email</label>
        <input type='email' required name="Email" placeholder="Email" id="email" className='outline-1 focus:outline-blue-700  rounded-md p-2' />

        <label htmlFor="subject" className='text-xl invisible'>Sujet</label>
        <input type="text" required name="subject" placeholder="Sujet (optional)" id="subject" className='outline-1 focus:outline-sky-600 rounded-md p-2' />

        <label htmlFor="message" className='text-xl invisible'>Message</label>
        <textarea name="message" id="message" rows="5" placeholder="Message..." className='outline-1 mb-6 focus:outline-blue-600 rounded-md p-2'></textarea>
  
        <button type="submit" className='outline-1 outline-black bg-blue-500 active:scale-90 active:animate-bounce focus:outline-red-600 text-xl text-white flex items-center justify-center gap-4 py-2 px-4 rounded-md mb-10 hover:bg-blue-700 transition duration-300'>Envoyer <Send className=""/></button>
      </form>
    </div>
  )
}

export default ContactForm 
