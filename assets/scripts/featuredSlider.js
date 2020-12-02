var featureVideoGames = [];
const sliderContainer = document.querySelector('#slider_container');
const dotContainer = document.querySelector('#dot');
const discount = 0.20;
var i = 0;
videoGames.VideoGamesList.forEach(videoGame => {

    if (videoGame.featured == true) {
        featureVideoGames.push(videoGame);
    }

});

featureVideoGames.forEach(feature => {
    i++;
    const wrapper = document.createElement('div');
    wrapper.classList.add("post-wrapper");
    wrapper.innerHTML = `
            <div class="mySlides fade">
              <div class="numbertext">${i} / ${featureVideoGames.length}</div>
              <img src="${feature.src}">
              <div class="text">${feature.title}</div>
              <p> &nbsp;&nbsp;&nbsp;&nbsp; Now: ${parseInt(feature.price) - (parseInt((feature.price) * discount))}$ ${discount * 100}% OFF </p>
              <button onclick="addToCart(${feature.id},${null})" class="slide-cart" title="Buy"> <img src="./assets/static/red-cart.png" /></button>
            </div> 
    `
    sliderContainer.appendChild(wrapper);

    const dot = document.createElement("span");

    dot.classList.add("dot");

    dotContainer.appendChild(dot);

})