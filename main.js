function checkpass() {
    password = prompt("Enter the password:")

    if (password == "josh") {
        window.location.href = "secret.html";
    }
    else {
        alert("Intruder");
    }
}

function changeHeadingColour() {
    col = document.getElementById("col").style.color
    if (col == "cyan") {
        col = document.getElementById("col").style.color ="green";
    }
    else {
        col = document.getElementById("col").style.color = "cyan"
    }
}

function reveal() {
    if (document.getElementById("hide").style.display == "none") {
        document.getElementById("hide").style.display = "block";
        document.getElementById("revealer").textContent = "Hide hidden button";
    }
    else {
        document.getElementById("hide").style.display = "none";
        document.getElementById("revealer").textContent = "Reveal hidden button";
    }
}