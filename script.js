let cart = [];

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(productName + " added to cart!");
}

function loadCart() {
    let cartData = localStorage.getItem("cart");
    if (cartData) {
        cart = JSON.parse(cartData);
    }

    let cartItemsDiv = document.getElementById("cart-items");
    let cartTotal = 0;
    cartItemsDiv.innerHTML = "";

    cart.forEach(item => {
        let div = document.createElement("div");
        div.innerHTML = `<p>${item.name} - $${item.price}</p>`;
        cartItemsDiv.appendChild(div);
        cartTotal += item.price;
    });

    document.getElementById("cart-total").innerText = cartTotal;
}

function checkout() {
    alert("Proceeding to payment...");
    window.location.href = "checkout.html";
}
