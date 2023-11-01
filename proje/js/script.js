
// console.log ("Kontrol et çalışıyormu.")

let searchForm = document.querySelector(".search-form")
let cartForm = document.querySelector(".cart-items-container")
// console.log(searchForm)

//! buttons
let searchBtn = document.querySelector("#search-btn")
// swpwt
let cartBtn = document.querySelector(".cart-btn");

searchBtn.addEventListener("click", function () {
    searchForm.classList.toggle("active")

})

cartBtn.addEventListener("click", function () {
    console.log("Cart button clicked");
    cartForm.classList.toggle("active");
});