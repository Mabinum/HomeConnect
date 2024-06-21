import './App.css';
import Main from './pages/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import { createGlobalStyle } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';
<<<<<<< HEAD
import Health from './features/health/Health';
=======
import Health from './features/Health';
import HealthList from './features/HealthList';
import Layout from './components/Layout';
import Menu4 from './components/Menu4';
<<<<<<< HEAD
import Foodmain from "./features/food/Foodmain";
=======
>>>>>>> develop
>>>>>>> a424f179a3010c7bf0abce4bff374b17cd4e1ef6

const GlobalStyle = createGlobalStyle`
  
  body{
    box-sizing: border-box;
  }

  * {
    box-sizing: inherit;
  }

  .cursor-pointer{
    cursor: pointer;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='login' element={<Login/>}/>
          {/* 나중에 메뉴바에 해당하는 것들 수정하기 */}
          {/* <Route path='menu/:menuID' element={<MenuDetail/>}/> */}
          {/* 나중에 params로 아이디에 맞는 메뉴화면 나오도록 하기 */}
          {/* <Route path='health' element={<Health/>}/> */}

          <Route path='/' element={<Layout/>} >
            <Route path='/main' element={<Main/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/menu4' element={<Menu4/>}/>
            {/* 나중에 메뉴바에 해당하는 것들 수정하기 */}
            {/* <Route path='menu/:menuID' element={<MenuDetail/>}/> */}
            {/* 나중에 params로 아이디에 맞는 메뉴화면 나오도록 하기 */}
            {/* <Route path='health' element={<Health/>}/> */}
          </Route>

        </Routes>
      </BrowserRouter> 
    </>
  );
}

export default App;
