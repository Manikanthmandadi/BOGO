function selectUnit(box, radio, price) {
  document.querySelectorAll(".box").forEach((b) => {
    b.classList.remove("selected", "expanded");
    b.querySelector("input[type=radio]").checked = false;
  });
  box.classList.add("selected", "expanded");
  radio.checked = true;
  document.getElementById("total-price").textContent = price;
}
