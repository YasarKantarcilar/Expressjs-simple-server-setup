const api_url = "http://localhost:3000/todos";
const d = document;

function dataLoop(data) {
  const list = d.getElementById("list");
  for (let i = 0; i < data.length; i++) {
    const newLi = d.createElement("li");
    newLi.innerText = data[i];
    list.appendChild(newLi);
  }
}

async function getData() {
  const response = await fetch(api_url);
  const data = await response.json();
  dataLoop(data.todos);
}

getData();
