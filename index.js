var overlay = document.querySelector(".popup-overlay"); //selecting popupoverlay
var popbox = document.querySelector(".popup-box"); // select popup box
var plusbutton = document.querySelector(".plus-button"); //plus box

// when click plus btn, overlay n popup box showng
plusbutton.addEventListener("click", function () {
  overlay.style.display = "block";
  popbox.style.display = "block";
});

//select container,addbook btn, booktitle inputs, textarea
var container = document.querySelector(".container");
var booktitleinput = document.getElementById("book-title-input");
var bookauthorinput = document.getElementById("book-author-input");
var bookdescriptioninput = document.getElementById("book-description-input");
var addbook = document.getElementById("add-book");

addbook.addEventListener("click", function (event) {
  event.preventDefault();
  var div = document.createElement("div");
  div.setAttribute("class", "book-container");
  div.innerHTML = `<h2>${booktitleinput.value}</h2> 
                   <h5>${bookauthorinput.value}</h5>
                   <p>${bookdescriptioninput.value}</p> 
                   <button class="deletebtn" onclick="clickdelete(event)">Delete</button>`;
  container.append(div);
  overlay.style.display = "none";
  popbox.style.display = "none";
});

var cancelpopup = document.getElementById("cancel-popup");

cancelpopup.addEventListener("click", function (event) {
  event.preventDefault();
  overlay.style.display = "none";
  popbox.style.display = "none";
});

var deleteall = document.querySelector(".deletebtn");

function clickdelete() {
  event.target.parentElement.remove();
}
