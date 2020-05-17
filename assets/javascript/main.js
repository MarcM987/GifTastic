var topics = ["Keanue Reeves", 
            "The Matrix", 
            "John Wick",
            "Point Break",
            "Bill & Ted",
            "Replicas",
            "The Lake House"];
/*NEEDS FIX, extremely redundant code due to scope errors when resolved to an external function*/ 
$("#submit").on("click", function(){
    topics.push($("#InputKeanu").val().trim());
    var newButton = $("<button type='button' class='btn btn-info m-1' id='button" + topics.length+1 + "'>" + $("#InputKeanu").val().trim() + "</button>");
    $("#keanuButtons").append(newButton);

    $("#button"+topics.length+1).on("click", function() {
        var keanu = $(this).text();
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        keanu + "&api_key=p4RXbxmmvc768XYEMyoktT6G4ckgKyU5&limit=10";
    
        $.ajax({
        url: queryURL,
        method: "GET"
        })
        .then(function(response) {
            var results = response.data;

            //removes previous topic gifs before appending different topic gifs
            $("#keanus").html("");

            for (let j = 0; j < results.length; j++) {
                //
                var gifDiv = $("<div>");
                var rating = results[j].rating;
                var p = $("<p>").text("Rating: " + rating);
                var keanuImage = $("<img class='gif' paused='true'>").attr("src", results[j].images.fixed_height_still.url);
    
                //
                gifDiv.prepend(p);
                gifDiv.append(keanuImage);
                
                //
                $("#keanus").prepend(gifDiv);
            }

            //pause/play gif
            $(".gif").on("click", function(){
                var tempsrc = $(this).attr("src");;
                if($(this).attr("paused") == "true"){
                    $(this).attr("src", tempsrc.replace("_s.gif", ".gif"));
                    $(this).attr("paused", "false");
                }else{
                    $(this).attr("src", tempsrc.replace(".gif", "_s.gif"));
                    $(this).attr("paused", "true");
                }
                
            });
        });
    });


});

for(let i=0; i < topics.length; ++i){
    var newButton = $("<button type='button' class='btn btn-info m-1' id='button" + i + "'>" + topics[i] + "</button>");
    $("#keanuButtons").append(newButton);

    $("#button"+i).on("click", function() {
        var keanu = $(this).text();
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        keanu + "&api_key=p4RXbxmmvc768XYEMyoktT6G4ckgKyU5&limit=10";
    
        $.ajax({
        url: queryURL,
        method: "GET"
        })
        .then(function(response) {
            var results = response.data;

            //removes previous topic gifs before appending different topic gifs
            $("#keanus").html("");

            for (let j = 0; j < results.length; j++) {
                console.log(results[0]);
                //
                var gifDiv = $("<div>");
                var rating = results[j].rating;
                var p = $("<p>").text("Rating: " + rating);
                var keanuImage = $("<img class='gif' paused='true'>").attr("src", results[j].images.fixed_height_still.url);
                console.log(results[j].images.fixed_height_still.url);
    
                //
                gifDiv.prepend(p);
                gifDiv.append(keanuImage);
                
                //
                $("#keanus").prepend(gifDiv);
            }

            //pause/play gif
            $(".gif").on("click", function(){
                var tempsrc = $(this).attr("src");;
                if($(this).attr("paused") == "true"){
                    $(this).attr("src", tempsrc.replace("_s.gif", ".gif"));
                    $(this).attr("paused", "false");
                }else{
                    $(this).attr("src", tempsrc.replace(".gif", "_s.gif"));
                    $(this).attr("paused", "true");
                }
                
            });
        });
    });
}

