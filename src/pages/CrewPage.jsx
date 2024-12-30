import { useEffect, useState } from "react"

export default function CrewPage({ crew }) {
  const [idx, setIdx] = useState(0)
  const [data, setData] = useState(crew[idx])
  const baseUrl = import.meta.env.VITE_BASE_URL

  useEffect(() => {
    setData(crew[idx])
  }, [idx, crew])


  const { role, name, bio, images: { png: img }, } = data
  return (
    <div className="crew-container page">
      <main>
        <div className="content">
          <div className="text-5">
            <span>02</span> Meet your crew
          </div>
          <div className="crew" >
            <div className="info-container">
              <div className="info" key={name}>
                <h4 className="text-4">{role}</h4>
                <h3 className="text-3">{name}</h3>
                <p className="text-9">{bio}</p>
              </div>
              <nav>
                <a href="#douglas" onClick={() => setIdx(0)} className={idx === 0 ? "active" : ""}></a>
                <a href="#mark" onClick={() => setIdx(1)} className={idx === 1 ? "active" : ""}></a>
                <a href="#victor" onClick={() => setIdx(2)} className={idx === 2 ? "active" : ""}></a>
                <a href="#anousheh" onClick={() => setIdx(3)} className={idx === 3 ? "active" : ""}></a>
              </nav>
            </div>
            <div className="img-container">
              <img src={baseUrl + img} alt="crew member image" key={img} />
            </div>
          </div>

        </div>
      </main>
    </div>
  )
}
