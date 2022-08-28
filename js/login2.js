const myForm = document.getElementById("myForm");

localStorage.setItem("username","admin");
localStorage.setItem("password","ilovebugtracking1234");


myForm.addEventListener("submit", function(e) {
    e.preventDefault();

    let user = document.getElementById("userName").value;
    let pswd = document.getElementById("passCode").value;

    if (user == localStorage.getItem("username") && pswd == localStorage.getItem("password")) {
        window.location = "home.html";
    }
    else {
        alert("invalid username or password");
    }
  
})