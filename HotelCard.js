import { useNavigate } from "react-router-dom";


function HotelCard(props) {
  const navigate  = useNavigate();
  const cardClickHandler = (id) => {navigate("/foodlist/" + id); }
  return (
    <div className="hotel-card" onClick={() => cardClickHandler(props.id)}>
      <div className="hotel-img">
        <img src={props.thumbnail_image} alt="Hotel Image" />
      </div>
      <div className="hotel-details">
        <div className="hotel-name">{props.name}</div>
        <div className="hotel-add">{props.cusines}</div>
        <div className="hotel-loc">
          <i className="fa-solid fa-star"></i>
          <div className="hotel-dist">{props.rating}</div>
        </div>
        <div className="hotel-reviews">{props.reviews}</div>
      </div>
    </div>
  );
}

export default HotelCard;
