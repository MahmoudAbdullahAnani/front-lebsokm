// filld input
// input 1
let firstName = document.getElementById("firstName");
let nagma_1 = document.getElementById("nagma_1");
let notValue = firstName.value
let first_reg = new RegExp("[abc]","ig")
firstName.oninput=function  () {
  if (firstName === first_reg) {
    nagma_1.style.display = "inline-block"
  }
  else {
    nagma_1.style.display = "none" 
  }
}
// input 2
let lastName = document.getElementById("lastName");
let nagma_2 = document.getElementById("nagma_2");
let last_reg = new RegExp("[abc]","ig")
lastName.oninput=function  () {
  if (lastName === last_reg) {
    nagma_2.style.display = "inline-block"
  }
  else {
    nagma_2.style.display = "none" 
  }
}
// input 3
let street_address = document.getElementById("street_address");
let nagma_3 = document.getElementById("nagma_3");
let last_reg_1 = new RegExp("[abc]","ig")
street_address.oninput=function  () {
  if (street_address === last_reg_1) {
    nagma_3.style.display = "inline-block"
  }
  else {
    nagma_3.style.display = "none" 
  }
}
// input 4
let phone = document.getElementById("phone");
let nagma_4 = document.getElementById("nagma_4");
let last_reg_2 = new RegExp("[abc]","ig")
phone.oninput=function  () {
  if (phone === last_reg_2) {
    nagma_4.style.display = "inline-block"
  }
  else {
    nagma_4.style.display = "none" 
  }
}
// input 5
let in_state = document.getElementById("in_state");
let nagma_5 = document.getElementById("nagma_5");
let last_reg_3 = new RegExp("[abc]","ig")
in_state.oninput=function  () {
  if (in_state === last_reg_3) {
    nagma_5.style.display = "inline-block"
  }
  else {
    nagma_5.style.display = "none" 
  }
}
// input 5
let zip = document.getElementById("zip");
let nagma_6 = document.getElementById("nagma_6");
let last_reg_4 = new RegExp("[abc]","ig")
zip.oninput=function  () {
  if (zip === last_reg_4) {
    nagma_6.style.display = "inline-block"
  }
  else {
    nagma_6.style.display = "none" 
  }
}
// input 6
let town_city = document.getElementById("town_city");
let nagma_7 = document.getElementById("nagma_7");
let last_reg_5 = new RegExp("[abc]","ig")
town_city.oninput=function  () {
  if (town_city === last_reg_5) {
    nagma_7.style.display = "inline-block"
  }
  else {
    nagma_7.style.display = "none" 
  }
}
// input 7
let email_address = document.getElementById("email_address");
let nagma_8 = document.getElementById("nagma_8");
let last_reg_6 = new RegExp("[abc]","ig")
email_address.oninput=function  () {
  if (email_address === last_reg_6) {
    nagma_8.style.display = "inline-block"
  }
  else {
    nagma_8.style.display = "none" 
  }
}
