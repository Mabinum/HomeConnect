import Car from "../features/ParkingManagement/Car";
import FoodSidebar from "../features/food/FoodSidebar";
import FoodList from "../features/food/FoodList";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import styled from "styled-components";


function Menu4() {
  return (
    <>
      <FoodSidebar />
      <Outlet />
    </>
  );
};

export default Menu4;