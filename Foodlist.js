import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import NavBar from "../components/Nav";
import mock from "../data/mock.json";
import FoodListMainLeft from "./../components/FoodlistLeft.js";
import FoodListMainRight from "./../components/FoodListRight.js";
import "./../css/foodlist.css";

function FoodList() {
  var [hotel, setHotel] = useState({});
  var data = useParams();
  useEffect(() => {
    const hotelData = mock.find((el) => el.id == data.id);
    setHotel(hotelData);
  }, []);
  console.log("-->", hotel);

  if (hotel != null) {
    console.log("elle", hotel);

    return (
      <main>
        <NavBar />
        <div className="main-block">
          {/* <FoodListMainLeft hotel={hotel} /> */}
          <FoodListMainRight />
        </div>
      </main>
    );
  }
}

export default FoodList;
