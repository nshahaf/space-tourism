import { useEffect, useState } from "react"

export default function DestinationPage({ dest }) {
  const [idx, setIdx] = useState(0)
  const [data, setData] = useState(dest[idx])
  const baseUrl = import.meta.env.VITE_BASE_URL

  useEffect(() => {
    setData(dest[idx])

  }, [idx, dest])
  return (
    <div className="destination-container page">
      <div className="content">
        <h2 className="text-5">
          <span>01</span>Pick your destination
        </h2>
        <div className="destination">
          <div className="img-container">
            <img src={baseUrl + data.images.png + ''} alt="destination image" key={data.images.png} />
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

            <div key={data.name} className="content-info">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
