// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// 1. Create a variable to keep track of all the filters as an object.
let filters = [];

// 3. Use this function to update the filters. 
function updateFilters() {

    let UpdateFilterValue = function(key, value) {
      let entryIdx = filters.indexOf(entry => entry.key === key);
      if(entryIdx === -1) filters.push({key: key, value: value});
      else filters[entryIdx].value = value;
    }
    let DeleteFilterValue = function(key) {
      filters.splice(filters.findIndex(entry => entry.key === key), 1);
    }

    // 4a. Save the element that was changed as a variable.
    let changedElement = d3.select(this);

    // 4b. Save the value that was changed as a variable.
    let elementValue = changedElement.property("value");
    
    // 4c. Save the id of the filter that was changed as a variable.
    let elementId = changedElement.attr("id");
  
    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
    if(elementValue) {
      UpdateFilterValue(elementId, elementValue);
    }
    else {
      DeleteFilterValue(elementId);
    }
    
    // 6. Call function to apply all filters and rebuild the table
    filterTable();
  
  }
  
  // 7. Use this function to filter the table when data is entered.
  function filterTable() {
    // 8. Set the filtered data to the tableData.
    let filteredData = tableData;  
  
    // 9. Loop through all of the filters and keep any data that
    // matches the filter values
    try {
      filters.forEach(filter => {
        filteredData = filteredData.filter(tData => {
          return tData[filter.key] === filter.value
        });
      });
    }
    catch(ex) {
      console.log("encountered error when attempting to filter table: ", ex)
    }
  
    // 10. Finally, rebuild the table using the filtered data
    buildTable(filteredData);
  }
  
  // 2. Attach an event to listen for changes to each filter
  
  d3.selectAll("input.filterField").on("change", updateFilters);

  // Build the table when the page loads
  buildTable(tableData);
  updateFilters();
