function biggerText() {
    alert("Hello, world!");
    document.getElementById("Text").style.fontSize = "24pt";
}

  function fancyText() {
    document.getElementById("boring").checked  = false;  
    document.getElementById("Text").style.fontWeight = "bold";
    document.getElementById("Text").style.color = "blue";
    document.getElementById("Text").style.textDecoration = "underline";
}

function boringText() {
    document.getElementById("fancy").checked  = false; 
    document.getElementById("Text").style.fontWeight = "normal";
    document.getElementById("Text").style.color = "black";
    document.getElementById("Text").style.textDecoration = "none";
}

function letsMoo() {  
    let str = document.getElementById("Text");
    str.style.textTransform = "uppercase";
    let parts = str.value.split(".");
    str.value = parts.join("-Moo");
}