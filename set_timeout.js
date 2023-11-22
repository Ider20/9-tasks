for (let i = 0; i < 5; i++) {
  let delay = i * 3000;
  setTimeout(alertFunction, delay);
  function alertFunction() {
    alert("Hello!" + i);
  }
}
