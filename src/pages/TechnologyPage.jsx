import { useState } from "react"

export default function TechnologyPage({ tech }) {
  const [idx, setIdx] = useState(0)
  const { name, images, description: desc } = tech[idx]
  return (
    <div className="technology-container page">
      <div className="content-container">
        <h2 className="text-5">
          <span>03</span>Space launch 101
        </h2>

        <div className="content">
            <nav className="text-4">
              <a href="#" onClick={() => setIdx(0)} className={idx === 0 ? "active" : ""}>1</a>
              <a href="#" onClick={() => setIdx(1)} className={idx === 1 ? "active" : ""}>2</a>
              <a href="#" onClick={() => setIdx(2)} className={idx === 2 ? "active" : ""}>3</a>
            </nav>
            <div className="info">
              <h4 className="text-4">The terminology...</h4>
              <h3 className="text-3">{name}</h3>
              <p className="text-9">{desc}</p>
            </div>
          <div className="img-container">
            {/* <img src={''} alt="" /> */}
            <img src={images.portrait} alt="" />
          </div>
        </div>
      </div>

    </div>
  )
}

