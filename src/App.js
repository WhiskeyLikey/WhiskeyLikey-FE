import { Route, Routes } from 'react-router-dom';
import './App.css';
import Start from './pages/Start';
import Test from './pages/Test';
import Result from './pages/Result';
import Loading from './pages/Loading';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/test" element={<Test />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </>
  );
}

export default App;
