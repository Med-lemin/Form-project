window.onload = function () {
  const dialog = document.querySelector("#error");
  const form = document.querySelector("#send");
  const fields = document.querySelectorAll("input,textarea,select");
  dialog.classList.add("d-none");
  form.addEventListener("click", function (e) {
    dialog.classList.remove("d-none");
    fields.forEach(function (field) {
      field.style.backgroundColor = "#f8d7da";
    });
  });
};

let name = prompt("Enter your name", "John Doe");
console.log(name);
