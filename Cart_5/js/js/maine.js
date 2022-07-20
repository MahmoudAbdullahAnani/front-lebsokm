// Remove One
let remove_3 = document.getElementById("remove_3");
let car_3 = document.getElementById("car_3");
let hr_3 = document.getElementById("hr_3");
remove_3.onclick = function () {
  car_3.style.display = 'none'
  hr_3.style.display = 'none'
}
// Remove Two
let remove_2 = document.getElementById("remove_2");
let car_2 = document.getElementById("car_2");
let hr_2 = document.getElementById("hr_2");
remove_2.onclick = function () {
  car_2.style.display = 'none'
  hr_2.style.display = 'none'
}
// Remove Three
let remove_1 = document.getElementById("remove_1");
let car_1 = document.getElementById("car_1");
let hr_1 = document.getElementById("hr_1");
remove_1.onclick = function () {
  car_1.style.display = 'none'
  hr_1.style.display = 'none'
}
// Clear All
let clear = document.getElementById("clear");
clear.onclick = function () {
  car_1.style.display = 'none'
  hr_1.style.display = 'none'
  
  car_2.style.display = 'none'
  hr_2.style.display = 'none'
  
  car_3.style.display = 'none'
  hr_3.style.display = 'none'
}
// 