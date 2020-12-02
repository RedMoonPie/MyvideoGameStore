var products = document.querySelector(".product-page");
//loads games into product page
videoGames.VideoGamesList.forEach(videoGame => {
    var container = document.createElement("div");
    container.classList.add("product-item");

    container.innerHTML = `

              <img class="product-img" src="${videoGame.src}">
              <div class="product-title">${videoGame.title}</div>
              <button onclick="addToCart(${videoGame.id},${null})" class="product-cart" title="Buy"> <img src="../assets/static/red-cart.png" /></button>
              <div class = "product-genre" > ${videoGame.genre} </div>
              <div class = "product-price" > $ ${videoGame.price}  </div>
              <div class = "product-console" > ${videoGame.console} </div>
    `

    products.appendChild(container);




})