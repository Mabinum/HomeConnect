import logo from './logo.svg';
import './App.css';
import Main from './pages/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import { createGlobalStyle } from 'styled-components';
import FoodSidebar from './features/FoodSidebar';
import Foodmain from './features/Foodmain';

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
          <Route path='/' element={<Main/>}/>
          <Route path='login' element={<Login/>}/>

          <Route path='foodsidebar' element={<FoodSidebar />}>
              <Route path='foodmain' element={<Foodmain />}/>
          </Route>

        </Routes>
      </BrowserRouter> 
    </>
  );
}

export default App;
