document.getElementById("account").onclick = function (){
    window.location.href = "ASSETS/signIn.html"
}

document.getElementById("seeMore").onclick = function (){
    window.location.href = "ASSETS/Therapist.html"
}
document.getElementById("sign").onclick = function (){
    window.location.href = "ASSETS/signIn.html"
}
document.getElementById("blog").onclick = function (){
    window.location.href = "ASSETS/blog.html"
}
document.getElementById("services").onclick = function (){
    window.location.href = "ASSETS/Services.html"
}

function locateFunction(){
    let currentLocation = document.getElementById("location").value;
    if(currentLocation === 'Nairobi' || currentLocation === 'nairobi'){
        window.location.href = 'ASSETS/Services.html'
    }else{
        window.location.href = 'ASSETS/error.html'
    }
}
document.getElementById("Services").onclick = locateFunction