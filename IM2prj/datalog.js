fetch('datalog.php')
  .then(response => response.json())
  .then(data => {
    const salesData = data.sales;
    const inventoryData = data.inventory;
    const productionData = data.production;

    function populateTables() {
      // sales
      const salesTableBody = document.getElementById("sales-table-body");
      salesData.forEach((row) => {
        const tableRow = document.createElement("tr");
        tableRow.innerHTML = `
          <td>${row.time}</td>
          <td>${row.employeeId}</td>
          <td>${row.employeeName}</td>
          <td>${row.task}</td>
        `;
        salesTableBody.appendChild(tableRow);
      });

      // inventory
      const inventoryTableBody = document.getElementById("inventory-table-body");
      inventoryData.forEach((row) => {
        const tableRow = document.createElement("tr");
        tableRow.innerHTML = `
          <td>${row.time}</td>
          <td>${row.employeeId}</td>
          <td>${row.employeeName}</td>
          <td>${row.task}</td>
        `;
        inventoryTableBody.appendChild(tableRow);
      });

      // production
      const productionTableBody = document.getElementById("production-table-body");
      productionData.forEach((row) => {
        const tableRow = document.createElement("tr");
        tableRow.innerHTML = `
          <td>${row.time}</td>
          <td>${row.employeeId}</td>
          <td>${row.employeeName}</td>
          <td>${row.task}</td>
        `;
        productionTableBody.appendChild(tableRow);
      });
    }

    populateTables();
  })
  .catch(error => console.error('Error:', error));
