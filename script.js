// 1. Validating the form

let form = document.getElementById("signupForm");
let formMsg = document.getElementById("formMsg");

// stops the form from submitting
form.addEventListener("submit",function (event){
    event.preventDefault(); 



//defining functions in js 
// .value grabs the text input, 
// .trim removes spaces in the beggining and the end of a string
let Username = document.getElementById("name").value.trim();
let email = document.getElementById("email").value.trim();
let password= document.getElementById("password").value.trim();

// check if fielsd are empty
if (Username===""||email===""||password===""){
    formMsg.textContent="All fields are required!";
    return;
}
//check email formart
if(!email.includes('@')||!email.includes('.')){
    formMsg.textContent="please enter valid email adress";
    return;
}

//check password lenth
if(password.length <8){
    formMsg.textContent="password must be atleast 8 characters";
    return;
}
//if all things check out
formMsg.style.colour="green";
formMsg.textContent="Form submitted succesfully!";
});

// 2. Toggle Password Visibility

let togglePwd = document.getElementById("tooglePwd");
togglePwd.addEventListener("click", function() {
  let pwd = document.getElementById("password");
  if (pwd.type === "password") {
    pwd.type = "text";
    togglePwd.textContent = " Hide";
  } else {
    pwd.type = "password";
    togglePwd.textContent = "Show";
  }
});


// 3 :Modal Functionality

let openModal = document.getElementById("openModal");
let closeModal = document.getElementById("closeModal");
let modal = document.getElementById("myModal");

// Show modal bydisplaying it in block
openModal.addEventListener("click", function() {
  modal.style.display = "block"; 
});

// Hide modal by displaying none
closeModal.addEventListener("click", function() {
  modal.style.display = "none"; 
});

// Close modal when clicking outside content
window.addEventListener("click", function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});


// 4. Button Hover Effect
//first we define function hoverBtn
let hoverBtn = document.getElementById("hoverBtn");

//then we call the function and use it to enable the hover effect
hoverBtn.addEventListener("mouseover", function() {
  hoverBtn.style.backgroundColor = "lightgreen";
  hoverBtn.textContent = "You hovered! ";
});

hoverBtn.addEventListener("mouseout", function() {
  hoverBtn.style.backgroundColor = "";
  hoverBtn.textContent = "Hover over me!";
});