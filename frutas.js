function agregarFruta() {
  if (document.getElementById("fruta").value === "banana") {
    document.getElementById("div").textContent += "🍌";
  } else if (document.getElementById("fruta").value === "uva") {
    document.getElementById("div").textContent += "🍇";
  } else if (document.getElementById("fruta").value === "manzana") {
    document.getElementById("div").textContent += "🍎";
  }
}

function comer() {
  let tumama = document.getElementById("div").textContent.split("");
  tumama.splice(2, 2);
  tumama = tumama.join("");
  document.getElementById("div").textContent = tumama
}
