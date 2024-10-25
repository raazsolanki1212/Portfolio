import { RiReactjsLine } from "react-icons/ri"
import { SiMongodb } from "react-icons/si"
import { RiHtml5Line } from "react-icons/ri"
import { RiCss3Fill } from "react-icons/ri"
import { RiJavascriptLine } from "react-icons/ri"
import { RiTailwindCssLine } from "react-icons/ri"
import { RiNodejsLine } from "react-icons/ri"
import { SiExpress } from "react-icons/si"
import { motion } from "framer-motion";

const iconVariant = (duration) => ({
    initial: {y: -10},
    animate: {
        y: [10,-10],
        transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
    },
    },
})

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h1 
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration: 1.5}}
        className="my-20 text-center text-4xl font-bold bg-gradient-to-r from-pink-300 via-slate-500
                to-purple-500 bg-clip-text tracking-tight text-transparent">Technologies</motion.h1>
        
        <motion.div 
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x: -100}}
        transition={{duration: 1.5}}
        className="flex flex-wrap items-center text-4xl justify-center gap-2">
            
           
            <motion.div 
            variants={iconVariant(2.5)} 
            initial="initial" animate="animate"
            className="rounded-2xl border-2 text-7xl border-neutral-800 p-3">
                <RiHtml5Line className="text-orange-600"/>
            </motion.div>

            <motion.div 
            variants={iconVariant(3)} 
            initial="initial" animate="animate"
            className="rounded-2xl border-2 text-7xl border-neutral-800 p-3">
                <RiCss3Fill className="text-blue-600"/>
            </motion.div>

            <motion.div
            variants={iconVariant(2.5)} 
            initial="initial" animate="animate"
            className="rounded-2xl border-2 text-7xl border-neutral-800 p-3">
                <RiJavascriptLine className="text-yellow-500"/>
            </motion.div>

            <motion.div
            variants={iconVariant(3)} 
            initial="initial" animate="animate"
            className="rounded-2xl border-2 text-7xl border-neutral-800 p-3">
                <RiTailwindCssLine className="text-teal-500"/>
            </motion.div>

            <motion.div
            variants={iconVariant(2.5)} 
            initial="initial" animate="animate"
            className="rounded-2xl border-2 text-7xl border-neutral-800 p-3">
                <SiMongodb className="text-green-700"/>
            </motion.div>

            <motion.div
            variants={iconVariant(3)} 
            initial="initial" animate="animate"
            className="rounded-2xl border-2 text-7xl border-neutral-800 p-3">
                <SiExpress />
            </motion.div>

            <motion.div
            variants={iconVariant(2.5)} 
            initial="initial" animate="animate"
            className="rounded-2xl border-2  text-7xl border-neutral-800 p-3">
                <RiReactjsLine className=" text-cyan-400"/>
            </motion.div>

            <motion.div
            variants={iconVariant(3)} 
            initial="initial" animate="animate"
            className="rounded-2xl border-2 text-7xl border-neutral-800 p-3">
                <RiNodejsLine className="text-green-500"/>
            </motion.div>
        </motion.div>    
    </div>
  )
}

export default Technologies