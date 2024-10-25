import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion"

const container = (delayTime) => ({
    hidden: {x: -100, opacity: 0},
    visible: {x: 0,
              opacity: 1,
              transition: {duration: 0.5, delay: delayTime}}
})

const Hero = () => { 
  return (
    <div className="border-b border-neutral-900 pb-4 mx-10 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1 
                      variants={container(0)}
                      initial="hidden"
                      animate="visible"
                      className="pb-6 text-6xl font-thin tracking-tight lg:mt-16 lg:text-7xl">
                      Tarun Kumar</motion.h1>

                    <motion.span
                     variants={container(0.5)}
                     initial="hidden"
                     animate="visible"
                     className="lg:text-center bg-gradient-to-r from-pink-300 via-slate-500
                        to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
                        Full Stack Developer
                    </motion.span>

                        
                    <motion.p
                         variants={container(1)}
                         initial="hidden"
                         animate="visible"
                         className="my-2 max-xl py-6 font-light tracking-tighter">
                            {HERO_CONTENT}
                    </motion.p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:pb-8">
            <div className="flex justify-center">
                <motion.img
                    initial={{x:100, opacity:0}}
                    animate={{x:0, opacity:1}}
                    transition={{duration: 0.5, delay: 1.2}}
                src="src\images\profile.png"/>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Hero;