const nav = document.querySelector(".nav"),
// searchIcon = document.querySelector("#searchIcon"),
navOpenBtn = document.querySelector(".navOpenBtn"),
navCloseBtn = document.querySelector(".navCloseBtn");

// searchIcon.addEventListener("click", () => {
// nav.classList.toggle("openSearch");
// nav.classList.remove("openNav");
// if (nav.classList.contains("openSearch")) {
//   return searchIcon.classList.replace("uil-search", "uil-times");
// }
// searchIcon.classList.replace("uil-times", "uil-search");
// });

navOpenBtn.addEventListener("click", () => {
nav.classList.add("openNav");
nav.classList.remove("openSearch");
searchIcon.classList.replace("uil-times", "uil-search");
});
navCloseBtn.addEventListener("click", () => {
nav.classList.remove("openNav");
});



function openform(){
    document.getElementById("add-project").style.display = "block";
    document.getElementById("project").style.display = "none";
}
function closeform(){
    document.getElementById("add-project").style.display = "none";
    document.getElementById("project").style.display = "block";
}

function openeditform(){
    document.getElementById("editform").style.display = "block";
    document.getElementById("project").style.display = "none";
}
function closeeditform(){
    document.getElementById("editform").style.display = "none";
    document.getElementById("project").style.display = "block";
}