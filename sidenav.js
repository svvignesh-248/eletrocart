var sidenav= document.getElementById("sidenav");
function opennav(){

sidenav.style.display="block";
}

function closenav(){
    sidenav.style.display="none";
}
let cart = [];


window.onload = function () {
  const cartItemsContainer = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");

  if (cartItemsContainer && cartTotal) {
    let storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    cartItemsContainer.innerHTML = storedCart
      .map(item => `<li>${item.product} - ₹${item.price}</li>`)
      .join("");
    const total = storedCart.reduce((sum, item) => sum + item.price, 0);
    cartTotal.textContent = "Total: ₹" + total;
  }
};
function checkoutCart() {
  if (confirm("Thank you for your purchase! Do you want to clear the cart now?")) {
    localStorage.removeItem("cart");
    alert("Your cart has been cleared.WELCOME");
    window.location.reload(); // Refresh to update UI
  }
}
  function loadCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    cartItems.innerHTML = "";

    let total = 0;

    if (cart.length === 0) {
      cartItems.innerHTML = "<li>Your cart is empty</li>";
      cartTotal.innerHTML = "";
      return;
    }

    cart.forEach(item => {
      const li = document.createElement("li");
      li.style.margin = "10px 0";
      li.style.listStyle = "none";
      li.innerHTML = `<strong>${item.name}</strong> - ₹${item.price.toLocaleString()}`;
      cartItems.appendChild(li);
      total += item.price;
    });

    cartTotal.innerHTML = `<hr><h3>Total: ₹${total.toLocaleString()}</h3>`;
  }

  function checkoutCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart.length === 0) {
      alert("Cart is empty. Please add items.");
      return;
    }
    alert("Thank you for your purchase!");
    localStorage.removeItem("cart");
    document.getElementById("cart-items").innerHTML = "";
    document.getElementById("cart-total").innerHTML = "";
  }

  function addToCart(name, price, image,) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ name, price, image });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(name + " added to cart!");
  window.location.href = "cart.html";
}
