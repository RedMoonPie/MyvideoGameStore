var cartElements = document.querySelector(".cart");

MyVideogames = JSON.parse(sessionStorage.getItem("MyVideogames"));



MyVideogames.myList.forEach(videoGame => {

    var element = document.createElement("div");
    element.classList.add("myVideogames-element");
    element.id="refresh"



    element.innerHTML = `
      
              <div class="element-id"> Id: ${videoGame.id}</div>
              <img class="element-img" src="${videoGame.src}">
              <div class="element-title">${videoGame.title}</div>
              <div class = "quantity" > Quantity: ${videoGame.quantity} </div>
              <div class = "element-console" > Console: ${videoGame.console} </div>
              <div class = "price" > Price: ${videoGame.price} $ </div>
              <div class = "total-price" > Total Price: ${videoGame.quantity * videoGame.price} $ </div>
              <button  onclick="addToCart(${videoGame.id},${1})" class="element-add"> + </button>
              <button  onclick="addToCart(${videoGame.id},${-1})" class="element-remove">  - </button>
    
    `

    //console.log(MyVideogames.myList)
    cartElements.appendChild(element);

})

