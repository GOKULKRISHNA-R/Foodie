var fooditems = [
    {
        name:"Mutton Briyani",
        variety:"Halal style Briyani with Raitha , Mutton Chukka",
        amt:200
    },
    {
        name:"Fish Briyani",
        variety:"Chettinad Briyani with Raitha , Fish Fry",
        amt:150
    },
    {
        name:"Chicken Briyani",
        variety:"Hyderabad Briyani with Raitha , BoneLess Chicken 65",
        amt:100
    },
    {
        name:"Veg Briyani",
        variety:"Iyangar Briyani with Raitha , BoneLess Chicken 65 and Fish Fry",
        amt:100
    },
    {
        name:"Full Meals",
        variety:"Rice , Sambar , Varth Kolambu , Rasam , Curd , Poriyal , Pickle",
        amt:100
    }
]

var docFrag = document.createDocumentFragment();

for (fooditem of fooditems) {
    var divElement = document.createElement('div');
    divElement.className = "food-card"
    divElement.innerHTML = `<div class="food-details">
    <div class="food-name">${fooditem.name}</div>
    <div class="food-varieties">${fooditem.variety}</div>
    <div class="food-amt">${fooditem.amt}</div>
  </div>
  <div class="food-add-btn">
    <button class="add-btn">ADD</button>
  </div>`;
  docFrag.appendChild(divElement);
}

document.getElementsByClassName(
    "food"
  )[0].appendChild(docFrag);