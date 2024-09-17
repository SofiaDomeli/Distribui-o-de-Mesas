const data = new Date().toLocaleDateString();
document.getElementById("data").innerHTML = data;
document.getElementById("distribuidor").addEventListener("click", () => {
  fetch("http://localhost:3000/distribute")
    .then((response) => response.json())
    .then((data) => {
      const tablesContainer = document.getElementById("tablesContainer");
      tablesContainer.innerHTML = "";

      data.forEach((table, index) => {
        const tableDiv = document.createElement("div");
        tableDiv.className = "table";
        tableDiv.innerHTML =
          `<h2>Mesa ${index + 1}</h2>` +
          table.map((person) => `<p>${person}</p>`).join("");
        tablesContainer.appendChild(tableDiv);
      });
    });
});
