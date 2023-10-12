let name = document.querySelector(".inputName");
let secondName = document.querySelector(".inputSurname");
let position = document.querySelector(".inputLvl");
let contact = document.querySelector(".inputContact");
let add = document.querySelector(".btn");
let close = document.querySelectorAll(".close");
const form = document.querySelector(".formInput");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

let arr = [];
let editingIndex = null;

function plas() {
  let obj = {
    name: name.value,
    secondName: secondName.value,
    position: position.value,
    contact: contact.value,
  };

  if (editingIndex !== null) {
    arr[editingIndex].name = name.value;
    arr[editingIndex].secondName = secondName.value;
    arr[editingIndex].position = position.value;
    arr[editingIndex].contact = contact.value;
    editingIndex = null;

    console.log(arr);
    createTasks();
  } else {
    arr.push(obj);
    createTasks();
  }

  name.value = "";
  secondName.value = "";
  position.value = "";
  contact.value = "";
}

let createTasks = () => {
  const table = document.querySelector(".table");
  document.querySelectorAll("#tasks").forEach((item) => {
    if (item) item.remove();
  });

  arr.map((item, idx) => {
    const tasks = document.createElement("tr");

    tasks.setAttribute("class", `${idx}_item`);

    tasks.id = "tasks";
    tasks.innerHTML = `
    
      <th class ="box">${item.name}</th>
      <th class ="box">${item.secondName}</th>
      <th class ="box">${item.position}</th>    
      <th class ="box">${item.contact}</th>
      <button onclick="Edit(${idx})" class="edit">edit</button>
      <button onClick="onClick(${idx})" class="close">delete</button>
    `;

    table.append(tasks);
  });
};

function Edit(idx) {
  let element = arr[idx];

  name.value = element.name;
  secondName.value = element.secondName;
  position.value = element.position;
  contact.value = element.contact;

  editingIndex = idx;
}
function onClick(idx) {
  const elem = document.getElementsByClassName(`${idx}_item`);
  document.parentElement().remove();
  console.log(elem);
  console.log(arr);
}
