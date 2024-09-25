import { Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import CrewPage from './pages/CrewPage';
import DestinationPage from './pages/DestinationPage';
import TechnologyPage from './pages/TechnologyPage';
function App() {
 
  return (
    <>
      <div className="app-container">
        <NavBar/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/crew" element={<CrewPage/>}/> 
          <Route path="/dest" element={<DestinationPage/>}/> 
          <Route path="/tech" element={<TechnologyPage/>}/> 
        </Routes>
      </div>
    </>
  );
}

export default App;
