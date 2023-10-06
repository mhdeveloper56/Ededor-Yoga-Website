let menuBar = document.querySelector(".li_items");
let crossBtn = document.querySelector(".x_icon");
let backDrop = document.querySelector(".backDrop");

document.querySelector(".menu_icon").addEventListener("click", () => {
  menuBar.classList.add("show");
  crossBtn.classList.add("showbtn");
  backDrop.classList.add("active");
});

crossBtn.addEventListener("click", () => {
  menuBar.classList.remove("show");
  crossBtn.classList.remove("showbtn");
  backDrop.classList.remove("active");
});

backDrop.addEventListener("click", () => {
  menuBar.classList.remove("show");
  crossBtn.classList.remove("showbtn");
  backDrop.classList.remove("active");
});

document.addEventListener("scroll", () => {
  menuBar.classList.remove("show");
  crossBtn.classList.remove("showbtn");
  backDrop.classList.remove("active");
});
