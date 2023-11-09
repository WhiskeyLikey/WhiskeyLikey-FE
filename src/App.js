import { Route, Routes } from 'react-router-dom';
import './App.css';
import Start from './pages/Start';
import Test from './pages/Test';
import Result from './pages/Result';
import Loading from './pages/Loading';
import Mag1 from './pages/Mag1';
import Mag2 from './pages/Mag2';
import Mag3 from './pages/Mag3';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/test" element={<Test />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/result" element={<Result />} />
        <Route path="/magazine_1" element={<Mag1 />} />
        <Route path="/magazine_2" element={<Mag2 />} />
        <Route path="/magazine_3" element={<Mag3 />} />
      </Routes>
    </>
  );
}

export default App;
