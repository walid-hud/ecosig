import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

const Transition = ({children , distination = "formation"}) => {
    return (
        <>
            {children}
            <motion.div id="enter-animation" className="fixed top-0 left-0 origin-bottom w-full h-screen z-[9999]"
            initial={
                {background:"#262626", transform: "scaleY(0)"}
            }
            animate={
                {background:"#262626", transform: "scaleY(0)"}
                
            }
            exit={
                {background:"#262626", transform: "scaleX(1)"}
                
            }
            transition={
                {duration:1, ease:[1,0.9,1,0.9]}
            }    
            >
                <p>{distination}</p>
            </motion.div>
            
            <motion.div id="exit-animation" className="fixed top-0 left-0 origin-top w-full h-screen z-[9999]"
            initial={
                {background:"#262626", transform: "scaleX(1)"}
                
            }
            animate={
                {background:"#262626", transform: "scaleY(0)"}
                // {scaleX:0}
            }
            exit={
                // {scaleX:0}
                {background:"#262626", transform: "scaleY(0)"}

            }
            transition={
                {duration:1, ease:[1,0.9,1,0.9]}
            }
            >
                <p>{distination}</p>
                
            </motion.div>

        </>

    )
}

export default Transition