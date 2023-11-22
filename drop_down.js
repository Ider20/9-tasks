const labelRef = document.createElement("label");
labelRef.textContent = "Сонголтууд: ";
const dropdownRef = document.createElement("select");
const optionsRef = document.createElement("option");
document.body.appendChild(labelRef);
document.body.appendChild(dropdownRef);
const options = ["Option01", "Option02", "Option03", "Option04", "Option05"];

for (let i = 0; i < options.length; i++) {
  let optionRef = document.createElement("option");
  optionRef.textContent = options[i];
  dropdownRef.appendChild(optionRef);
}
