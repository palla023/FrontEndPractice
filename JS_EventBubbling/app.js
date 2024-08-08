document.querySelector("#btn").onclick = function (event) {
    event.stopPropagation();
    alert("Button")
}

document.querySelector("#section").onclick = function (event) {
    event.stopPropagation();
    alert("div section")
}

document.querySelector("#parentSection").onclick = function (event) {
    alert("parentSection section")
}

document.getElementById("anch").onclick = function(event) {
    event.preventDefault();

    window.location.href = "http://www.yahoo.com"
}