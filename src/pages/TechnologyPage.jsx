import {useEffect, useState } from "react"
import useBreakpoint from "../hooks/useBreakpoint";
const baseUrl = import.meta.env.VITE_BASE_URL;

export default function TechnologyPage({ tech }) {
  const [idx, setIdx] = useState(0)
  const { name, images, description: desc } = tech[idx]
  const [imgSrc, setImgSrc] = useState(images.portrait); // Initialize with default image
  const breakpoint = useBreakpoint(); // Get the current breakpoint
  

  useEffect(() => {
    const newImgSrc = breakpoint === 'desktop' ? images.portrait : images.landscape;
    setImgSrc(newImgSrc);
  }, [breakpoint,images]); 

  return (
    <div className="technology-container page">
      <div className="content-container">
        <h2 className="text-5">
          <span>03</span>Space launch 101
        </h2>
          <div className="content">
            <nav className="text-4">
              <a href="#vehicle" onClick={() => setIdx(0)} className={idx === 0 ? "active" : ""}>1</a>
              <a href="#spaceport" onClick={() => setIdx(1)} className={idx === 1 ? "active" : ""}>2</a>
              <a href="#capsule" onClick={() => setIdx(2)} className={idx === 2 ? "active" : ""}>3</a>
            </nav>
            <div className="info" >
              <h4 className="text-4">The terminology...</h4>
              <h3 className="text-3" key={name}>{name}</h3>
              <p className="text-9" key={desc} >{desc}</p>
            </div>
            <div className="img-container">
              <img src={baseUrl + imgSrc +''} alt="" key={imgSrc} />
            </div>
          </div>
      </div>

    </div>
  )
}

