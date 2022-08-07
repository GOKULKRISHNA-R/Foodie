import NavBar from "../components/Nav";
import HotelCard from "../components/HotelCard";
import "./../css/hotellist.css";
import { HotelService } from "../services/HotelServices";
import { useEffect, useState } from "react";

function HotelList() {

  var [data, setData] = useState([]);
  
  useEffect(() => {
    console.log("sdfas");
    const fetchHotelData = async () => {
      let data = await HotelService.getHotelList() ;
      console.log(data);
      setData(data);
    };
    fetchHotelData();
  }, []);

  return (
    <main>
      <NavBar />
      <div className="hotel-list">
        {data.map( (e) => (
          <HotelCard {...e} />
        ))}
      </div>
    </main>
  );
}

export default HotelList;
