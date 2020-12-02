const result = document.querySelector('#result');
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
var matchedSearch = []
var temp = []



const searchResult = urlParams.get('search');
const consoleType = urlParams.get('console');

const price = urlParams.get('price');
const alph_order = urlParams.get('alphabetic');
const ggenre = urlParams.get('genre');

//sort and filter
// name 
if (searchResult != null) {
    const searchRegex = new RegExp(`${searchResult}`, 'i');
    matchedSearch = videoGames.VideoGamesList.filter(({ title }) => new RegExp(searchRegex).test(title));

}
// console

if (consoleType != " " && consoleType != null) {

    matchedSearch = matchedSearch.filter(({ console }) => console == consoleType);
    console.log(matchedSearch)
}

// prices filter
if (price != " " && price != null) {

    if (price == "expensive") {
        matchedSearch = matchedSearch.sort(function(a, b) {
            if (parseInt(a.price, 10) > (parseInt(b.price, 10))) {
                return -1;
            }
            if (parseInt(a.price, 10) < (parseInt(b.price, 10))) {
                return 1;
            }
            // a must be equal to b
            return 0;

        })
    }
    if (price == "cheap") {
        matchedSearch = matchedSearch.sort(function(a, b) {
            if (parseInt(a.price, 10) < (parseInt(b.price, 10))) {
                return -1;
            }
            if (parseInt(a.price, 10) > (parseInt(b.price, 10))) {
                return 1;
            }
            // a must be equal to b
            return 0;

        })
    }
}
//alphabetic order
if (alph_order != " " && alph_order != null) {

    if (alph_order == "Z_A") {
        matchedSearch = matchedSearch.sort(compare)
    }
    if (alph_order == "A_Z") {
        matchedSearch = matchedSearch.sort((a, b) => a.title.localeCompare(b.title))
    }

}

function compare(a, b) {
    const titlea = a.title.toUpperCase();
    const titleb = b.title.toUpperCase();

    if (titlea > titleb) {
        return -1;
    }
    if (titlea < titleb) {
        return 1;
    }
    // a must be equal to b
    return 0;

}
//genre search
if (ggenre != " " && ggenre != null) {

    matchedSearch = matchedSearch.filter(({ genre }) => genre == ggenre)

}


matchedSearch.forEach(videoGame => {

    var game = document.createElement("div");
    game.classList.add("product-item");


    game.innerHTML = `
 
             
    <img class="product-img" src="${videoGame.src}">
    <div class="product-title">${videoGame.title}</div>
    <button onclick="addToCart(${videoGame.id},${null})" class="product-cart" title="Buy"> <img src="../assets/static/red-cart.png" /></button>
    <div class = "product-genre" > ${videoGame.genre} </div>
    <div class = "product-price" > $ ${videoGame.price}  </div>
    <div class = "product-console" > ${videoGame.console} </div>
              
  
    `
    result.appendChild(game);


})