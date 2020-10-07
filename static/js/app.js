// Import the data from data.js
const tableData = data;

// Reference the HTML table using D3
var tbody = d3.select("tbody");

function buildTable(data) {
    // Clean out the table
    tbody.html("");
    // Loop through each object in the data array
    data.forEach((dataRow) => {
        // Append a row to the HTML table
        let row = tbody.append("tr");
        // Add each value from the object into a cell
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);    
        });
    });
}