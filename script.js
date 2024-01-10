let inputs = document.querySelectorAll("input");

let nameinput = document.querySelector(".name");
let lastNameinput = document.querySelector(".lastName");
let ageInput = document.querySelector(".age");
let saveBtn = document.querySelector(".save");

let list = document.querySelector(".list");
getInfo();
saveBtn.addEventListener("click", () => {
  addInfo();
});

function addInfo() {
  let obj = {
    name: nameinput.value,
    lastName: lastNameinput.value,
    age: ageInput.value,
  };
  let data = JSON.parse(localStorage.getItem("card")) || [];
  data.push(obj);
  localStorage.setItem("card", JSON.stringify(data));
  for (let i of inputs) {
    i.value = "";
  }
  getInfo();
}

function getInfo() {
  list.innerHTML = "";
  let data = JSON.parse(localStorage.getItem("card")) || [];
  data.forEach((el, index) => {
    let name1 = document.createElement("h1");
    let lastName1 = document.createElement("h2");
    let age1 = document.createElement("h2");
    let delBtn = document.createElement("button");
    let edit = document.createElement("button");
    let div2 = document.createElement("div");
    let div3 = document.createElement("div");

    name1.classList.add("name1");
    lastName1.classList.add("last");
    age1.classList.add("age1");
    div2.classList.add("div2");
    delBtn.classList.add('btn')

    name1.innerText = el.name;
    lastName1.innerHTML = el.lastName;
    age1.innerHTML = el.age;
    delBtn.innerText = "delete";
    edit.innerText = "edit";

    div2.append(name1);
    div2.append(lastName1);
    div2.append(age1);
    div2.append(delBtn);
    div3.append(div2);
    list.append(div3);

    delBtn.addEventListener("click", () => {
      remove(index);
    });
  });
}
function remove(index) {
  let data = JSON.parse(localStorage.getItem("card")) || [];
  data.splice(index, 1);
  localStorage.setItem("card", JSON.stringify(data));
  getInfo();
}
