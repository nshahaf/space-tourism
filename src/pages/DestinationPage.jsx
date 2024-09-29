import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';

export default function DestinationPage({ dest }) {
  const [idx, setIdx] = useState(0);

  const data = dest[idx];
  return (
    <div className="destination-container page">
      <div className="content">
        <h2 className="text-5">
          <span>01</span>Pick your destination{" "}
        </h2>
        <AnimatePresence mode="wait">
          <div className="destination">
            <div className="img-container">
              <motion.img src={data.images.png} alt="destination image" key={data.images.png} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0}} transition={{ duration: 0.5, ease: "easeInOut" }}/>
            </div>
            <div className="content-container">
              <div className="destination-nav text-8">
                <a
                  href="#moon"
                  onClick={() => setIdx(0)}
                  className={idx === 0 ? "active" : ""}
                >
                  Moon
                </a>
                <a
                  href="#mars"
                  onClick={() => setIdx(1)}
                  className={idx === 1 ? "active" : ""}
                >
                  Mars
                </a>
                <a
                  href="#europa"
                  onClick={() => setIdx(2)}
                  className={idx === 2 ? "active" : ""}
                >
                  Europa
                </a>
                <a
                  href="#titan"
                  onClick={() => setIdx(3)}
                  className={idx === 3 ? "active" : ""}
                >
                  Titan
                </a>
              </div>

              <motion.div key={data.name} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0}} transition={{ duration: 0.5, ease: "easeInOut" }}>
                <h1 className="text-2">{data.name}</h1>
                <p className="text-9">{data.description}</p>
                <div className="line"></div>

                <div className="info">
                  <div className="distance">
                    <p className="text-7">Avg. distance</p>
                    <p className="text-6">{data.distance}</p>
                  </div>
                  <div className="time">
                    <p className="text-7">Est. travel time</p>
                    <p className="text-6">{data.travel}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </AnimatePresence>
      </div>
    </div>
  );
}
