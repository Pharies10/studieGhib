// javascript behind the page





//make initial promise


var moviePromise = d3.json(src="https://ghibliapi.herokuapp.com/films")



//make success
//make fail
var success = function(data)
{
    
    console.log(data);
    var mean = getMean(data)
    d3.select("#title").text("Click a Title")
    makeList(data, mean)
    
}



var fail = function(data)
{
    
    console.log("didnt work");
    d3.select("#title").text("not working")

}


moviePromise.then(success, fail);




var makeList = function(data, mean)
{
    d3.select("#titleholder")
        .selectAll("div")
        .data(data)
        .enter()
        .append("div")
        .attr("class", "movieTitle")
        .text(function(d){ return d.title;})
        .on("click", function(data) {display(data, mean)})
    
    
    
}

var remove = function()
{
    
    d3.selectAll("#infoholder *").remove()
    
    
    
    
}

// makes the display data
var display = function(data, mean)
{
    remove()
    d3.select("#infoholder").append("div")
        .attr("class", "titleOfMovie")
        .text(data.title)
    
    d3.select("#infoholder").append("div")
        .attr("class", "descript")
        .text(data.description)
    
    d3.select("#infoholder").append("div")
        .attr("class", "direct")
        .text("Director: " + data.director)
    
    d3.select("#infoholder").append("div")
        .attr("class", "produce")
        .text("Producer: " + data.producer)
    
    d3.select("#infoholder").append("div")
        .attr("class", "release")
        .text("Release Date: " + data.release_date)
    
    d3.select("#infoholder").append("div")
        .attr("class", "rt")
        .text("Click here for comparison of Rotten Tomato Scores: " + data.rt_score).on("click", function(){alert("The average score of all movies is: " + mean + ", while the score of this movie is: " + data.rt_score)    })
     
    
}


var getScore = function(movie)
{
    
    return movie.rt_score

}


var getMean = function(data)
{
    
    return d3.mean(data.map(getScore))

    
    
    
    
}