import { useState } from "react"
import { motion, AnimatePresence } from 'framer-motion';


export default function TechnologyPage({ tech }) {
  const [idx, setIdx] = useState(0)
  const { name, images, description: desc } = tech[idx]

  const animationProps = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.5, ease: "easeInOut" },
  }
  
  return (
    <div className="technology-container page">
      <div className="content-container">
        <h2 className="text-5">
          <span>03</span>Space launch 101
        </h2>
        <AnimatePresence mode="wait">
          <div className="content">
            <nav className="text-4">
              <a href="#" onClick={() => setIdx(0)} className={idx === 0 ? "active" : ""}>1</a>
              <a href="#" onClick={() => setIdx(1)} className={idx === 1 ? "active" : ""}>2</a>
              <a href="#" onClick={() => setIdx(2)} className={idx === 2 ? "active" : ""}>3</a>
            </nav>
            <div className="info" >
              <h4 className="text-4">The terminology...</h4>
              <motion.h3 className="text-3" key={name} {...animationProps}>{name}</motion.h3>
              <motion.p className="text-9" key={desc} {...animationProps}>{desc}</motion.p>
            </div>
            <div className="img-container">
              {/* <img src={''} alt="" /> */}
              <motion.img src={images.portrait} alt="" key={images.portrait} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5, ease: "easeInOut" }} />
            </div>
          </div>
        </AnimatePresence>
      </div>

    </div>
  )
}

