// Starter Code
var tableData = data;


//References
var $tbody = d3.select("tbody");
var inputFieldDate = d3.select("#datetime");
var inputFieldCity = d3.select("#city");
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]
var button = d3.select("#filter-btn");




// add the data to HTML
var addData = (data_input) => {
    data_input.forEach(sighting => {
        var row = $tbody.append("tr");
        columns.forEach(column => row.append("td").text(sighting[column])
        )
    });
}

addData(tableData);


//Event Listener for the Button

button.on("click", () => {

    d3.event.preventDefault();
    

    var inputDate = inputFieldDate.property("value").trim();
    
    

    var filterDate = tableData.filter(tableData => tableData.datetime === inputDate);
    

    $tbody.html("");

    let response = {
        filterDate
    }


    if(response.filterDate.length !== 0) {
        addData(filterDate);
    }

})