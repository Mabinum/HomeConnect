import Car from "../features/ParkingManagement/Car";
import FoodSidebar from "../features/food/FoodSidebar";
import FoodList from "../features/food/FoodList";
import { Outlet } from "react-router-dom";
function Menu4() {
  return (
    <>
      <div>

      <FoodSidebar />
      </div>

        <Outlet />
    </>
  );
};

export default Menu4;