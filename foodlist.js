var docFrag = document.createDocumentFragment();

for (let i = 0; i < 12; i++) {
    var divElement = document.createElement('div');
    divElement.className = "hotel-card"
    divElement.innerHTML = `
    <div class="hotel-img">
      <img src="./src/dessert.jpg" alt="Hotel Image" />
    </div>
    <div class="hotel-details">
      <div class="hotel-name">BBQ Nation</div>
      <div class="hotel-add">Mettur Dam, Salem</div>
      <div class="hotel-loc">
        <i class="fa-solid fa-location-dot"></i>
        <div class="hotel-dist">4.2 kms</div>
      </div>
      <div class="hotel-reviews">122 reviews</div>
    </div>
  `;
  docFrag.appendChild(divElement);
}

document.getElementsByClassName(
    "hotel-list"
  )[0].appendChild(docFrag);