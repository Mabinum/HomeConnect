import './App.css';
import Main from './pages/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import { createGlobalStyle } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';
import Layout from './components/Layout';
import Menu4 from './components/Menu4';
import Menu1 from './components/Menu1';
import Menu2 from './components/Menu2';
import Menu3 from './components/Menu3';
import MyPage from './components/MyPage';
import SignUp from './pages/login/SignUp';
import HealthList from './features/health/HealthList';
import Health from './features/health/Health';
import Foodmain from "./features/food/Foodmain";
import FoodList from './features/food/FoodList';

import Register from './pages/login/Register';
import NoMatchPage from './pages/NoMatchPage';
import SignUp1 from './pages/login/SignUp1';
import SignUp2 from './pages/login/SignUp2';
import SignUp3 from './pages/login/SignUp3';
import Signup4 from './pages/login/Signup4';
import HealthDetail from './features/health/HealthDetail';

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
          <Route path='/login' element={<Login/>}>
            <Route index element={<Register/>} />
            <Route path='signup' element={<SignUp/>}/>  
            <Route path='signup1' element={<SignUp1/>}/>  
            <Route path='signup2' element={<SignUp2/>}/>  
            <Route path='signup3' element={<SignUp3/>}/>  
            <Route path='signup4' element={<Signup4/>}/>  
          </Route>
          <Route path='/' element={<Layout/>} >
            <Route index element={<Main/>}/>
            <Route path='menu1' element={<Menu1/>}/>
            <Route path='menu2' element={<Menu2/>}/>
            <Route path='menu3' element={<Menu3/>}/>
            <Route path='menu4' element={<Menu4/>}/>
            <Route path='mypage' element={<MyPage/>}/>
            <Route path='healthlist' element={<HealthList/>}/>
            <Route path='health' element={<Health/>}/>
            <Route path='healthdetail' element={<HealthDetail/>}/>
            <Route path='foodmain' element={<Foodmain />}/>
            <Route path='foodlist' element={<FoodList />}/>
            
            {/* 나중에 메뉴바에 해당하는 것들 수정하기 */}
            {/* <Route path='menu/:menuID' element={<MenuDetail/>}/> */}

            {/* 나중에 params로 아이디에 맞는 메뉴화면 나오도록 하기 */}
            {/* <Route path='health' element={<Health/>}/> */}
          </Route>
          <Route path="*" element = {<NoMatchPage/>}/>
        </Routes>
      </BrowserRouter> 
    </>
  );
}

export default App;
