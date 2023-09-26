import logo from './logo.svg';
import Header from './common/Header'
import Footer from './common/Footer';
import SubmitURL from './pages/SubmitURL'
import JsonPage from './pages/JsonPage'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<SubmitURL />}></Route>
        <Route path='/jsonReader' element={<JsonPage />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
