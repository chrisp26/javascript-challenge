// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the ufo data from data.js
console.log(data);

// Loop Through `data` and console.log each ufo sighting object
// data.forEach(function(ufoSightings) {
//     console.log(ufoSightings);
//     var row = tbody.append("tr"); //Use d3 to append one table row `tr` for each ufo sighting object
//     // Use `Object.entries` to console.log each ufo sighting value
//     Object.entries(ufoSightings).forEach(function([key, value]) {
//       console.log(key, value);
//       // Append a cell to the row for each value
//       // in the ufo sighting object
//       var cell = row.append("td");
//       cell.text(value);
//     });
//   });


// Alternative using arrows function
data.forEach((ufoSightings) => {
    var row = tbody.append("tr");
    Object.entries(ufoSightings).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

// Event listener for date input field
// var inputField = d3.select("#filters");
var button = d3.select("#filter-btn");
button.on("click", runEnter);

function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input date and get the raw HTML node
  var inputElement = d3.select("#filters");
  var inputValue = inputElement.property("value");

  var dateInput = d3.select("#datetime");
  var dateValue = dateInput.property("value")

  var cityInput = d3.select("#idCity");
  var cityValue = cityInput.property("value");

  var stateInput = d3.select("#idState");
  var stateValue = stateInput.property("value");

  var countryInput = d3.select("#idCountry");
  var countryValue = countryInput.property("value");
  
  var shapeInput = d3.select("#idShape");
  var shapeValue = shapeInput.property("value");

  // console.log(inputElemValue
  console.log(inputValue);  
  // console.log(cityValue);

  var filteredData = tableData.filter(crazy => crazy.datetime === dateValue || crazy.city === cityValue || crazy.state === stateValue || crazy.country === countryValue || crazy.shape === shapeValue);

  console.log(filteredData);

  // Clear the rows in the table
  tbody.html("");

  // Enter filtered date to new table rows
  filteredData.forEach((ufoSighting) => {
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

}