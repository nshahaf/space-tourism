import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';

export default function CrewPage({ crew }) {
  const [idx, setIdx] = useState(0);

  const { role, name, bio, images: { png: img }, } = crew[idx];
  return (
    <div className="crew-container page">
      <main>
        <div className="content">
          <div className="text-5">
            <span>02</span> Meet your crew
          </div>
          <AnimatePresence mode="wait">
            <div className="crew" >
              <div className="info-container">
                <motion.div className="info" key={name} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0}} transition={{ duration: 0.5, ease: "easeInOut" }}>
                  <h4 className="text-4">{role}</h4>
                  <h3 className="text-3">{name}</h3>
                  <p className="text-9">{bio}</p>
                </motion.div>
                <nav>
                  <a href="#douglas" onClick={() => setIdx(0)} className={idx === 0 ? "active" : ""}></a>
                  <a href="#mark" onClick={() => setIdx(1)} className={idx === 1 ? "active" : ""}></a>
                  <a href="#victor" onClick={() => setIdx(2)} className={idx === 2 ? "active" : ""}></a>
                  <a href="#anousheh" onClick={() => setIdx(3)} className={idx === 3 ? "active" : ""}></a>
                </nav>
              </div>
              <div className="img-container">
                <motion.img src={img} alt="crew member image" key={img} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0}} transition={{ duration: 0.5, ease: "easeInOut" }}/>
              </div>
            </div>
          </AnimatePresence>

        </div>
      </main>
    </div>
  );
}
