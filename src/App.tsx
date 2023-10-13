import HeadMenu from './Component/Header/HeadMenu';
import Footer from './Component/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import MainSearch from './Component/Main/MainSearch';
import MainDBsee from './Component/Main/MainDBsee';

function App() {
  return (
    <div className="App">
      <HeadMenu></HeadMenu>
      <Routes>
        <Route path='/'
        element={<MainSearch/>}/>
        <Route path='/DBSeePage'
        element={<MainDBsee/>}/>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;