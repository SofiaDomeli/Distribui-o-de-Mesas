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

duplasTurma = [
  ["Carlos", "Murilo"],
  ["Vetoreti", "Inaldo"],
  ["Fernanda", "Guibs"],
  ["Gabriel", "Gabrieli"],
  ["Giovana", "Lanzoni"],
  ["Heitor", "Natalia"],
  ["Leonardo", "Melissa"],
  ["Letícia", "Neife"],
  ["Luca", "Olivia"],
  ["Sofia"],
];

const mesas = 5;

const data = new Date().toLocaleDateString();
document.getElementById("data").innerHTML = data;

function distribuirPessoas(pessoas) {
  let pessoasEmbaralhadas = pessoas.sort(() => 0.5 - Math.random());
  let pessoasMesa = Math.floor(pessoas.length / mesas);
  let resto = pessoas.length % mesas;

  let distribuicao = [];
  let inicio = 0;

  for (let i = 0; i < mesas; i++) {
    let fim = inicio + pessoasMesa + (i < resto ? 1 : 0);
    distribuicao.push(pessoasEmbaralhadas.slice(inicio, fim));
    inicio = fim;
  }

  return distribuicao;
}

document.getElementById("distribuidorD").addEventListener("click", () => {
  const data = distribuirPessoas(duplasTurma);
  const tablesContainer = document.getElementById("tablesContainer");
  tablesContainer.innerHTML = "";
  data.forEach((table, index) => {
    const tableDiv = document.createElement("div");
    tableDiv.className = "table";
    tableDiv.innerHTML =
      `<h2>Mesa ${index + 1}</h2>` +
      table.map((person) => `<p>${person.join("<br>")}</p>`).join("");
    tablesContainer.append(tableDiv);
  });
});

document.getElementById("distribuidorA").addEventListener("click", () => {
  const data = distribuirPessoas(pessoasTurma);
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
