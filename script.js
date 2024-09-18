pessoasTurma = [
  "Carlos",
  "Vetoreti",
  "Fernanda",
  "Gabriel",
  "Gabrieli",
  "Giovana",
  "Guibs",
  "Lanzoni",
  "Heitor",
  "Inaldo",
  "Leonardo",
  "Letícia",
  "Luca",
  "Melissa",
  "Murilo",
  "Natalia",
  "Neife",
  "Olivia",
  "Sofia",
];

const mesas = 5;

const data = new Date().toLocaleDateString();
document.getElementById("data").innerHTML = data;

function distribuirPesssoas() {
  let pessoasEmbaralhadas = pessoasTurma.sort(() => 0.5 - Math.random());
  let pessoasMesa = Math.floor(pessoasTurma.length / mesas);
  let resto = pessoasTurma.length % mesas;

  let distribuicao = [];
  let inicio = 0;

  for (let i = 0; i < mesas; i++) {
    let fim = inicio + pessoasMesa + (i < resto ? 1 : 0);
    distribuicao.push(pessoasEmbaralhadas.slice(inicio, fim));
    inicio = fim;
  }

  return distribuicao;
}

document.getElementById("distribuidor").addEventListener("click", () => {
  const data = distribuirPesssoas();
  const tablesContainer = document.getElementById("tablesContainer");
  tablesContainer.innerHTML = "";
  data.forEach((table, index) => {
    const tableDiv = document.createElement("div");
    tableDiv.className = "table";
    tableDiv.innerHTML =
      `<h2>Mesa ${index + 1}</h2>` +
      table.map((person) => `<p>${person}</p>`).join("");
    tablesContainer.append(tableDiv);
  });
});
