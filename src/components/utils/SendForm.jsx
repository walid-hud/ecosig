
import { IoMdSend as Send, } from "react-icons/io";
import { toast } from "react-toastify";
import { FadeLoader } from "react-spinners";
import { mockFetchPost } from ".";
import { MdCheck, MdWarning } from "react-icons/md";

async function sendForm(e) {
    e.preventDefault();
    setIsSubmitting(true);
    setBtnContent(<><span>envoi en cours</span><FadeLoader style={{ transform: "scale(0.5)", display: "inline-block" }} color="white" loading size={90} className="ml-2 mt-[-8px] " /></>);
    setBtnStyle("bg-blue-600 cursor-not-allowed");
    // const formData = new FormData();
    // formData.append("name", nameRef.current.value);
    // formData.append("email", emailRef.current.value);
    // formData.append("message", messageRef.current.value);
    // formData.forEach((val,key,parent)=>console.log(`${parent} : ${key} : ${val} \n`))
    try {
        // Simulate sending data
        const res = await mockFetchPost();
        if (!res.ok) {
            setBtnStyle("bg-red-500 hover:bg-red-600");
            throw new Error()
        }

        const data = await res.json()

        if (!data || data.message == "Mock post failed") {
            setBtnStyle("bg-red-500 hover:bg-red-600");
            throw new Error()
        }

        if (data.message == "Mock post succeeded") {
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