
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
