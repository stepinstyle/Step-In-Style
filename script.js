// ----- CONFIG -----
// Put your uncle's WhatsApp number here in international format without "+" or spaces.
// Example India: 919538285129
// WhatsApp number (no + or spaces)
const PHONE = "919538285129"; 
const PRICE = 1599;

// 5 Product entries
const products = [
  { id: 1, name: "Classic White Sneakers", category: "Sneakers", image: "images/Shoes1.jpg" },
  { id: 2, name: "Black Formal Lace-ups", category: "Formal", image: "images/Shoes2.jpg" },
  { id: 3, name: "Brown Leather Loafers", category: "Loafers", image: "images/Shoes3.jpg" },
  { id: 4, name: "Premium Brown Sandals", category: "Sandals", image: "images/Shoes4.jpg" },
  { id: 5, name: "Grey Casual Slip-ons", category: "Slip-ons", image: "images/Shoes5.jpg" }
];
  { id: 6, name: "Navy Run Sneakers", category: "Sneakers", image: "https://via.placeholder.com/600x400?text=Navy+Sneakers" },
  { id: 7, name: "Tan Brogues", category: "Formal", image: "https://via.placeholder.com/600x400?text=Tan+Brogues" },
  { id: 8, name: "Black Chelsea Boots", category: "Boots", image: "https://via.placeholder.com/600x400?text=Chelsea+Boots" },
  { id: 9, name: "Espresso Loafers", category: "Loafers", image: "https://via.placeholder.com/600x400?text=Espresso+Loafers" },
  { id: 10, name: "Tan Slip Sandals", category: "Sandals", image: "https://via.placeholder.com/600x400?text=Tan+Sandals" },
  { id: 11, name: "White Low-top Sneakers", category: "Sneakers", image: "https://via.placeholder.com/600x400?text=White+LowTop" },
  { id: 12, name: "Formal Derby Black", category: "Formal", image: "https://via.placeholder.com/600x400?text=Derby+Black" },
  { id: 13, name: "Comfort Memory Loafers", category: "Loafers", image: "https://via.placeholder.com/600x400?text=Memory+Loafers" },
  { id: 14, name: "Beach Leather Sandals", category: "Sandals", image: "https://via.placeholder.com/600x400?text=Beach+Sandals" },
  { id: 15, name: "Canvas Slip-ons", category: "Slip-ons", image: "https://via.placeholder.com/600x400?text=Canvas+Slipons" },
  { id: 16, name: "Sport Runner Sneakers", category: "Sneakers", image: "https://via.placeholder.com/600x400?text=Sport+Runner" },
  { id: 17, name: "Classic Monk Strap", category: "Formal", image: "https://via.placeholder.com/600x400?text=Monk+Strap" },
  { id: 18, name: "Dark Brown Boots", category: "Boots", image: "https://via.placeholder.com/600x400?text=Dark+Brown+Boots" },
  { id: 19, name: "Soft Loafer Black", category: "Loafers", image: "https://via.placeholder.com/600x400?text=Soft+Loafer" },
  { id: 20, name: "Comfort Slide Sandals", category: "Sandals", image: "https://via.placeholder.com/600x400?text=Comfort+Slides" },
  { id: 21, name: "Black Street Sneakers", category: "Sneakers", image: "https://via.placeholder.com/600x400?text=Street+Sneakers" },
  { id: 22, name: "Brown Lace Derby", category: "Formal", image: "https://via.placeholder.com/600x400?text=Brown+Derby" },
  { id: 23, name: "Casual Suede Slip-ons", category: "Slip-ons", image: "https://via.placeholder.com/600x400?text=Suede+Slipons" },
  { id: 24, name: "Traveler Sandals", category: "Sandals", image: "https://via.placeholder.com/600x400?text=Traveler+Sandals" },
  { id: 25, name: "Everyday Classic Sneakers", category: "Sneakers", image: "https://via.placeholder.com/600x400?text=Everyday+Classic" }
];

// sizes array
const sizes = ["6","7","8","9","10","11","12"];

// utilities
function urlEncode(str){
  return encodeURIComponent(str);
}

// render year
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('phone-placeholder').textContent = PHONE;

// render products
const productsContainer = document.getElementById('products');

products.forEach(p => {
  const card = document.createElement('div');
  card.className = 'card';

  card.innerHTML = `
    <img src="${p.image}" alt="${p.name}">
    <div>
      <div class="name">${p.name}</div>
      <div class="price">₹${PRICE}</div>
    </div>
    <div class="controls">
      <select class="select-size" aria-label="Select size">
        ${sizes.map(s => `<option value="${s}">Size ${s}</option>`).join('')}
      </select>
      <a class="btn-whatsapp" href="#" data-id="${p.id}">Order on WhatsApp</a>
    </div>
  `;

  productsContainer.appendChild(card);
});

// handle click -> WhatsApp
productsContainer.addEventListener('click', function(e){
  if(e.target.matches('.btn-whatsapp')){
    e.preventDefault();
    const card = e.target.closest('.card');
    const name = card.querySelector('.name').textContent;
    const img = card.querySelector('img').src;
    const size = card.querySelector('.select-size').value;
    const message = `Hello!%0AI'm%20interested%20in%20this%20product%20from%20STEP%20IN%20STYLE:%0A%0A*Product:*%20${urlEncode(name)}%0A*Size:*%20${urlEncode(size)}%0A*Price:*%20₹${PRICE}%0A%0AImage:%20${urlEncode(img)}%0A%0APlease%20confirm%20availability.%20Thanks!`;
    // WhatsApp web link
    const waLink = `https://wa.me/${PHONE}?text=${message}`;
    // open in new tab
    window.open(waLink, '_blank');
  }
});