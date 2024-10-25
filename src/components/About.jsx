import { ABOUT_TEXT } from "../constants"
import { motion } from "framer-motion"

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1 
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 1.5}}
        className="my-20 text-center text-4xl font-bold bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent">
        About Me
      </motion.h1>
      
      <div className="flex flex-wrap">
        <motion.div
          initial={{x: -100, opacity: 0}}
          animate={{x: 0, opacity: 1}}
          transition={{duration: 0.5}} 
          className="w-full lg:w-1/2 lg:p-8 flex items-center justify-center">
          <img className="rounded-2xl h-full w-full object-cover max-h-[400px] lg:max-h-[500px]" src="src/assets/about.jpg" alt="About Me" />
        </motion.div>

        <motion.div
          initial={{x: 100, opacity: 0}}
          animate={{x: 0, opacity: 1}}
          transition={{duration: 0.5, delay: 0.2}}
          className="w-full lg:w-1/2 flex items-center">
          <div className="flex justify-center lg:justify-start max-w-xl w-full py-6">
            <p className="my-2 text-lg lg:text-xl">{ABOUT_TEXT}</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About;
