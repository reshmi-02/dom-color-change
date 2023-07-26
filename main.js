var colorname=document.getElementById("color");
function colorchange(){

    colorname.style.backgroundColor=colorname.value;
    colorname.style.fontfamily="arial";
    colorname.style.borderRadius="10px 0px 10px 0px";
    colorname.style.textAlign="center";
}

var bodycolorname=document.getElementById("bodycolor");

function bodycolorchange(){
    document.body.style.backgroundColor=bodycolorname.value;
    
}

