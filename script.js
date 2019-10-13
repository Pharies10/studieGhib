// javascript behind the page





//make initial promise

var moviePromise = d3.json("https://ghibliapi.herokuapp.com/films")


//make success
//make fail
var success = function(data)
{
    
    console.log(data);
    d3.select("#title").text("working")
    makeList(data)
    
}



var fail = function(data)
{
    
    console.log("didnt work");
    d3.select("#title").text("not working")

}


moviePromise.then(success, fail);




var makeList = function(data)
{
    d3.select("#titleholder")
        .selectAll("div")
        .data(data)
        .enter()
        .append("div")
        .attr("class", "movieTitle")
        .text(function(d){ return d.title;})
        .on("click", function(data) {display(data)})
    
    
    
}

var remove = function()
{
    
    d3.selectAll("#infoholder *").remove()
    
    
    
    
}

// makes the display data
var display = function(data)
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
        .text(data.director)
    
    d3.select("#infoholder").append("div")
        .attr("class", "produce")
        .text(data.producer)
    
    d3.select("#infoholder").append("div")
        .attr("class", "release")
        .text(data.release_date)
    
    d3.select("#infoholder").append("div")
        .attr("class", "rt")
        .text(data.rt_score)
    
    
    
    
    
    
    
    
}