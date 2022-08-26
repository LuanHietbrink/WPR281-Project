const username = "admin";
const password = "ilovebugtracking1234";



const myForm = document.getElementById('myForm');
myForm.addEventListener('submit', function(e) {
    e.preventDefault();
    if (document.getElementById("username") == "admin" && document.getElementById("pass") =="ilovebugtracking1234") {
        window.location="http://127.0.0.1:5501/home.html";
    }
    else{
        alert("Invalid username or password");
    }
});



