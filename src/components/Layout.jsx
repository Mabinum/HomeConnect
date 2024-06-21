
import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import FoodSidebar from "../features/food/FoodSidebar";
import { Outlet } from "react-router-dom";
import { IoIosHome } from "react-icons/io";
import Header from "./Header";

function Layout() {

  const navigate = useNavigate();

  return (
    <>
      <Header/>

      {/* 자식컴포넌트들이 나올 자리들 */}
      <Outlet />
 
      <footer>
        <p className="py-5 mb-0 bg-dark text-white text-center">
          &copy; 코딩하는오합지졸. All Rights Reserved.
        </p>
      </footer>
    </>
  );
};

export default Layout;

// 홈버튼, 메인페이지 껍데기, 메뉴 컴포넌트