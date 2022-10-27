const tableData = data;

var tbody = d3.select('tbody');

function buildTable(data) {
    tbody.html('');

    data.forEach((dataRow) => {
        let row = tbody.append('tr'); //html
        Object.values(dataRow).forEach((val) =>{
            let cell = row.append('td'); //html
            cell.text(val);
        });
    });

};

// function handleClick() {
//     // Grab the datetime value from the filter
//     let date = d3.select("#datetime").property("value");
//     let filteredData = tableData;
  
//      // Check to see if a date was entered and filter the
//     // data using that date.
//     if (date) {
//       // Apply `filter` to the table data to only keep the
//       // rows where the `datetime` value matches the filter value
//       filteredData = filteredData.filter(row => row.datetime === date);
//     }
  
//      // Rebuild the table using the filtered data
//     // @NOTE: If no date was entered, then filteredData will
//     // just be the original tableData.
//     buildTable(filteredData);
//   }
  
//   // Attach an event to listen for the form button
//   d3.selectAll("#filter-btn").on("click", handleClick);
  
//   // Build the table when the page loads
//   buildTable(tableData);

var clearEntries = d3.select("#clear-btn");
clearEntries.on("click", function() {
  location.reload();
});

var filters = {
};

function updateFilters() {
    let inputElement = d3.select(this);
    let inputValue = inputElement.property("value");
    let inputID = inputElement.attr("id");
      if (inputValue) {
        filters[inputID] = inputValue;
    } else{filters ={};};
    filterTable(filters);
};

function filterTable(obj) {
  
    let filteredData = tableData;
    Object.entries(obj).forEach(([fkey, fval]) =>{
      filteredData = filteredData.filter((row) => row[fkey] === fval)
        
  });
  
    buildTable(filteredData);
};

  d3.selectAll("input").on("change",updateFilters);
  buildTable(tableData);