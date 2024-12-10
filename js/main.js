let elements = document.querySelectorAll(".b-content__inline_item")
elements.forEach((el) => {
  let btn = document.createElement("div")
  btn.classList.add("btn")
  btn.innerHTML = "Download picture"
  btn.onclick = function() { return false };
  el.appendChild(btn)
})