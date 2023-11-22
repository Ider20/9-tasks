// task Create a List
const ul = document.getElementById("ul");
const items = 5;
for (let i = 0; i < items; i++) {
  const li = document.createElement("li");
  li.tecContent = `Item${i} `;
  ul.appendChild(li);
}
