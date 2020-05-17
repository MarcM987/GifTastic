var topics = ["Keanue Reeves", 
            "The Matrix", 
            "John Wick",
            "Point Break",
            "Bill & Ted",
            "Replicas",
            "The Lake House"];

for(let i=0; i < topics.length; ++i){
    var newButton = $("<button type='button' class='btn btn-info m-1' id='button" + i + "'>" + topics[i] + "</button>");
    $("#keanuButtons").append(newButton);

    $("#button"+i).on("click", function() {
        var keanu = $(this).text();
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        keanu + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10"; //change key to my own
    
        $.ajax({
        url: queryURL,
        method: "GET"
        })
        .then(function(response) {
            var results = response.data;
    
            for (var i = 0; i < results.length; i++) {
                //
                var gifDiv = $("<div>");
                var rating = results[i].rating;
                var p = $("<p>").text("Rating: " + rating);
                var keanuImage = $("<img class='gif'>").attr("src", results[i].images.fixed_height.url.slice(0,-4)+"_s.gif");
    
                //
                gifDiv.prepend(p);
                gifDiv.append(keanuImage);
                
                //
                $("#keanus").prepend(gifDiv);
            }
        });
    });
}

