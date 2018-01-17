var header2 = document.querySelector("h2");
header2.textContent = "js in action";
header2.setAttribute("style","color:black");
header2.onclick = function() {
  header2.textContent = "you clicked me!";
}