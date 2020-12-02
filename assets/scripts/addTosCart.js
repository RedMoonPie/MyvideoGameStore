videoList = {...JSON.parse(sessionStorage.getItem("MyVideogames")) }

if (videoList.myList == undefined || videoList == null) {
    videoList = { myList: [] }
}

function addToCart(id, action) {
    console.log(videoList);


    var added = false
    videoGames.VideoGamesList.forEach(element => {

        if (element.id == id) {
            if (videoList.myList.length > 0) {
                videoList.myList.forEach(game => {

                    if (element.id == game.id) {
                        if (action == null) {
                            game.quantity = game.quantity + 1
                            added = true;
                            
                        } else if (action == 1) {
                            game.quantity = game.quantity + 1
                            added = true;
                            swal("Enjoy!", `The item "${element.title}" has been added to your cart!`, "success").then(function() {
                                window.location = window.location
                            });


                        } else if (action == -1) {
                            if (game.quantity - 1 > 0) {
                                game.quantity = game.quantity - 1
                                added = true;
                                swal("!", `The item "${element.title}" has been Removed of your cart!`, "success").then(function() {
                                    window.location = window.location
                                });;
                            } else {
                                game.quantity = game.quantity - 1
                                added = true
                                videoList.myList = videoList.myList.filter(({ quantity }) => quantity > 0);
                                swal("!", `The item "${element.title}" has been Removed of your cart!`, "success").then(function() {
                                    window.location = window.location
                                });;

                            }


                        }
                    }


                })
            }

            if (!added) {
                videoList.myList.push({

                    id: element.id,
                    title: element.title,
                    console: element.console,
                    src: element.src,
                    price: element.price,
                    featured: element.featured,
                    quantity: 1


                })
                swal("Enjoy!", `The item "${element.title}" has been added to your cart!`, "success")
            }


        }

    })

    sessionStorage.setItem('MyVideogames', JSON.stringify(videoList));


}