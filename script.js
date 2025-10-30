const products = [
  {
    name: "White Classic Sneaker",
    image: "Shoes1",
    price: 1599,
    description: "Timeless white sneakers with a clean, modern finish."
  },
  {
    name: "Urban Street Sneaker",
    image: "Shoes2",
    price: 1599,
    description: "Comfort-driven style for everyday streetwear."
  },
  {
    name: "Sporty White Runner",
    image: "Shoes3",
    price: 1599,
    description: "Built for comfort and performance — perfect all-rounder."
  },
  {
    name: "Minimal Luxe Sneaker",
    image: "Shoes4",
    price: 1599,
    description: "Sleek and minimal sneaker to elevate your daily fit."
  },
  {
    name: "Bold White Edge",
    image: "Shoes5",
    price: 1599,
    description: "High-quality sneaker that defines premium street fashion."
  }
];

const phoneNumber = "919538285129";
const productContainer = document.getElementById("products");

products.forEach(product => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h4 class="name">${product.name}</h4>
    <p>${product.description}</p>
    <span class="price">₹${product.price}</span>
    <a href="https://wa.me/${phoneNumber}?text=Hi! I'm interested in ${product.name}. Price: ₹${product.price}" 
       target="_blank" class="btn-whatsapp">Order on WhatsApp</a>
  `;
  productContainer.appendChild(card);
});

document.getElementById("year").textContent = new Date().getFullYear();