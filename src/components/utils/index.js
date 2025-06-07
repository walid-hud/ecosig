
import { useEffect, useState } from "react";
export function ScrollToTop() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'instant'
        });
    }, []);
}

export async function Register(formData) {
    let formState = {success:false,message:""}
    try {
        let res = await fetch("http://localhost:5000/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        res = await res.json()
        if(!res.ok){
            formState.message = "L'enregistrement a échoué, veuillez réessayer."
        }
        if(res.body && res.body.message === "registation succeeded"){
            formState.success = true
            formState.message = "Votre demande a été reçue."
        }
    } catch (error) {

    }
    finally{
        return formState
    }

}



export async function postToAPI(data) {
    try {
        const response = await fetch("http://localhost:5000/api/mock", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        const result = await response.json();
        return {
            ok: response.ok,
            message: result.message || "Request completed"
        };
    } catch (error) {
        return {
            ok: false,
            message: "An error occurred while making the request"
        };
    }
}

export const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
};
