var topics = ["Keanue Reeves", 
            "The Matrix", 
            "John Wick",
            "Point Break",
            "Bill & Ted",
            "Replicas",
            "The Lake House"];

for(let i=0; i < topics.length; ++i){
    var newButton = $("<button type='button' class='btn btn-info m-1' id='" + topics[i] + "'>" + topics[i] + "</button>");
    $("#keanuButtons").append(newButton);
}

$("button").on("click", function() {
    var keanu = $(this).attr("id");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    keanu + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10"; //change key to my own

    $.ajax({
    url: queryURL,
    method: "GET"
    })
    .then(function(response) {
        var results = response.data;

        for (var i = 0; i < results.length; i++) {
        var gifDiv = $("<div>");

        var rating = results[i].rating;

        var p = $("<p>").text("Rating: " + rating);

        var personImage = $("<img>");
        personImage.attr("src", results[i].images.fixed_height.url);

        gifDiv.prepend(p);
        gifDiv.prepend(personImage);

        $("#animals").prepend(gifDiv);
        }
    });
});