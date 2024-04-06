
var btn = document.getElementById("icon");

btn.onclick = function(){
    document.body.classList.toggle("light-theme")
    if(document.body.classList.contains("light-theme")){
        btn.src = "image/moon.png"
    }
    else{
        btn.src = "image/sun.png"
    }
}


function checkForm(event){
    event.preventDefault(); 
    let fnameInput = document.querySelector("#fname").value;
    if (fnameInput == ""){
        alert("Name must be filled");
        return false; 
    }

    let phoneInput = document.querySelector("#phone").value;
    const phoneCheck = /^\d{10}$/;//this pattern is learned from youtube below is the link
    //https://www.youtube.com/watch?v=nCuRb4X7Ytg&ab_channel=TJWEBDEV
    if (!phoneCheck.test(phoneInput)){
        alert("Not a valid number");
        return false; 
    }

    return true; 
}

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    alert("Form submitted successfully!");
});

function showNotification() {
    alert('Currently project is unavailable');
}


