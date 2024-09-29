import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate()
  return (
    <div className="home-container page">
      <div className="center-content">
        <div className="content">
          <div className="text">
            <h3 className="text-5">So, you want to travel to</h3>
            <h1 className="text-1">Space</h1>
            <p className="text-9">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <div className="button-container">
            <button className="text-4" onClick={()=> navigate('destination')}>Explore</button>
          </div>

        </div>
      </div>
    </div>
  );
}
