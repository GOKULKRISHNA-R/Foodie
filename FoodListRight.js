function FoodListMainRight () {
    return(
        <div className="main-right">
        <div className="food-cart">
          <div className="cart-head">My Cart</div>

          <div className="cart-food-card">
            <div className="cart-card-left">
              <div className="cart-food-name">Mutton Briyani</div>
              <div className="food-count">
                <button className="btn minus-btn">-</button>
                <div className="food-cnt-no">
                  <p>2</p>
                </div>
                <button className="btn plus-btn">+</button>
              </div>
            </div>
            <div className="cart-card-right">
              <div className="food-amt">₹ 400</div>
            </div>
          </div>

          <div className="cart-food-card">
            <div className="cart-card-left">
              <div className="cart-food-name">Fish Briyani</div>
              <div className="food-count">
                <button className="btn minus-btn">-</button>
                <div className="food-cnt-no">
                  <p>2</p>
                </div>
                <button className="btn plus-btn">+</button>
              </div>
            </div>
            <div className="cart-card-right">
              <div className="food-amt">₹ 300</div>
            </div>
          </div>

        </div>

        <div className="food-bill">
          <div className="tot-wrapper">
            <div className="tot">Sub Total</div>
            <div className="tot-amt">₹ 700</div>
          </div>
          <div className="additional-amt-wrapper">
            <div className="additional-amt-txt">Delivery Charge</div>
            <div className="additional-amt-amt">45</div>
          </div>
          <div className="additional-amt-wrapper">
            <div className="additional-amt-txt">Coupen(SUPER)</div>
            <div className="additional-amt-amt">-90</div>
          </div>
          <div className="tot-wrapper">
            <div className="tot">Grand Total</div>
            <div className="tot-amt">₹ 655</div>
          </div>
        </div>

        <div className="pay-now">
          <button className="pay-now-btn">PAY NOW</button>
        </div>
      </div>

    );
}

export default FoodListMainRight ;