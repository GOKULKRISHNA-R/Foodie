import FoodCard from "./FoodCard";

function FoodListMainLeft(props) {
  console.log("ddd-",props);
  return (

    <div className="main-left">
      <header class="hotel">
        <div class="hotel-all-details">
          <div class="extra-bold hotel-name">{props.hotel.name}</div>
          <div class="hotel-details">
            <div>{props.hotel.cuisines}</div>
            <div>{props.hotel.address}</div>
          </div>
        </div>
      </header>

      <div class="food">
        <div class="extra-bold order-now">Order Now</div>
        { props.hotel.menu.map( (e) => <FoodCard food = {e} /> ) }
      </div>
    </div>
  );
}

export default FoodListMainLeft;
