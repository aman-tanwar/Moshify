const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

window.onload = function () {
  setTimeout(function () {
    document.getElementById("loader").remove();
  }, 1000);
};
