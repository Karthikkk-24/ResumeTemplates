import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Resume1 from './pages/Resume1';
import Resume2 from './pages/Resume2';

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Resume1 />} />
                    <Route path="/resume1" element={<Resume1 />} />
                    <Route path="/resume2" element={<Resume2 />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
