$(document).ready(function () {
    //search for alcohol

    $("#find-drink").on("click", function (event) {

        event.preventDefault();

        
        var drink = $("#drink-input").val();

        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://the-cocktail-db.p.rapidapi.com/search.php?i=" + drink,
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
                "x-rapidapi-key": "666caa2618msh64e5a09c9984d6cp1d6d08jsn711c7459d6d7"
            }
        }

        $.ajax(settings).done(function (response) {
            console.log(response);

            // $("#drink-view").text(JSON.stringify(response, null, 3));

            for (var i = 0; i < response.ingredients.length; i++) {
                var drinkDiv = $("<div>");
                var name = $("<h2>").html(response.ingredients[0].strIngredient);
                var ABV = $("<h5>").html("Alcohol by Volume: " + response.ingredients[0].strABV + "%");
                var description = $("<p>").html("<b>History: </b>" + response.ingredients[0].strDescription);
                drinkDiv.append(name, ABV, description);
                $("#drink-view").html(drinkDiv);
            }
            // $("#drink-view").text(JSON.stringify(response, null, 3));
            // $("#drink-view").text(JSON.stringify(response.ingredients[0].strDescription));
        });

    });


    //pick random drink

    $("#find-random").on("click", function (event) {
        event.preventDefault();

        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://the-cocktail-db.p.rapidapi.com/filter.php?i=Gin",
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
                "x-rapidapi-key": "666caa2618msh64e5a09c9984d6cp1d6d08jsn711c7459d6d7"
            }
        }

        $.ajax(settings).done(function (response) {
            console.log(response);

            


            var randomDrink = Math.floor(Math.random() * response.drinks.length);
            console.log(randomDrink);
            var drinkDiv = $("<div>");
            var name = $("<h3>").html(randomDrink);
            var image = $("<img>").attr("src", randomDrink);
            drinkDiv.append(name, image);
            $("#drink-view").html(drinkDiv);

            //this will display number and photo outline
            // var randomDrink = Math.floor(Math.random() * response.drinks.length);
            // console.log(randomDrink);
            // var drinkDiv = $("<div>");
            // var name = $("<h3>").html(randomDrink);
            // var image = $("<img>").attr("src", randomDrink);
            // drinkDiv.append(name, image);
            // $("#drink-view").html(drinkDiv);


            //this for loop displays all drinks with pictures
            // for (var i = 0; i < response.drinks.length; i++) {
            //     var randomDrink = Math.floor(Math.random() * response.drinks[i].strDrink.length);
            //     console.log(randomDrink);
            //     var drinkDiv = $("<div>");
            //     var name = $("<h3>").html(response.drinks[i].strDrink);
            //     var image = $("<img>").attr("src", response.drinks[i].strDrinkThumb);
            //     drinkDiv.append(name, image);
            //     $("#drink-view").append(drinkDiv);
            // }




        });





    });
})
