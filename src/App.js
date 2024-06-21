import './App.css';
import Main from './pages/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import { createGlobalStyle } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';
import Health from './features/Health';
import HealthList from './features/HealthList';
import Layout from './components/Layout';
import Menu4 from './components/Menu4';
import Menu1 from './components/Menu1';
import Menu2 from './components/Menu2';
import Menu3 from './components/Menu3';
import MyPage from './components/MyPage';
import SignUp from './pages/SignUp';

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
          <Route path='login' element={<Login/>}/>
          <Route path='signup' element={<SignUp/>}/>
          <Route path='/' element={<Layout/>} >
            <Route index element={<Main/>}/>
            <Route path='menu1' element={<Menu1/>}/>
            <Route path='menu2' element={<Menu2/>}/>
            <Route path='menu3' element={<Menu3/>}/>
            <Route path='menu4' element={<Menu4/>}/>
            <Route path='mypage' element={<MyPage/>}/>
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
