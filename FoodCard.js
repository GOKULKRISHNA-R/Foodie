function FoodCard(props) {
  return (
    <div className="food-card">
      <div class="food-details">
        <div class="food-name">{props.food.name}</div>
        <div class="food-varieties">{props.food.desc}</div>
        <div class="food-amt">{props.food.price}</div>
      </div>
      <div class="food-add-btn">
        <button class="add-btn">ADD</button>
      </div>
    </div>
  );
}

export default FoodCard;
