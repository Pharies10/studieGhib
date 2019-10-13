// javascript behind the page





//make initial promise

var moviePromise = d3.json("GET", "https://ghibliapi.herokuapp.com/films")


//make success
//make fail
var success = function(data)
{
    
    console.log("works");
    d3.select("#title").text("working")
    
}



var fail = function(data)
{
    
    console.log("didnt work");
    d3.select("#title").text("not working")

}


moviePromise.then(success, fail);