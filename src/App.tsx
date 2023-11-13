import HeadMenu from './Component/Header/HeadMenu';
import Footer from './Component/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import MainSearch from './Component/Main/MainSearch';
import MainDBsee from './Component/Main/MainDBsee';
import MainTaps from './Component/Main/MainTaps';
import MainDBseeManager from './Component/Main/MainDBseeManager';
import MainCustomUrl from './Component/Main/MainCustomUrl';

function App() {
  return (
    <div className="App">
      <HeadMenu></HeadMenu>
      <Routes>
        <Route path='/Search'
        element={<MainSearch/>}/>
        <Route path='/DBSeePage'
        element={<MainDBsee/>}/>
        <Route path='/Taps'
        element={<MainTaps/>}>
          <Route path='1'></Route>
          <Route path='2'></Route>
          <Route path='3'></Route>
        </Route>
        <Route path='/DBManager'
        element={<MainDBseeManager/>}>
            
        </Route>
        <Route path='/DBSeeCustom' element={<MainCustomUrl/>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
