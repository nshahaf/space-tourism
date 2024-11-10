import {Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import CrewPage from './pages/CrewPage';
import DestinationPage from './pages/DestinationPage';
import TechnologyPage from './pages/TechnologyPage';

import data from './../data/data.json'
 
function App() {
  return (
    <>
      <div className="app-container">
        <NavBar/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/crew" element={<CrewPage crew={data.crew}/>}/> 
          <Route path="/destination" element={<DestinationPage dest={data.destinations}/>}/> 
          <Route path="/technology" element={<TechnologyPage tech={data.technology}/>}/> 
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </>
  );
}

function NotFoundPage() {
  return <div>404 - Page Not Found</div>;
}

export default App;
