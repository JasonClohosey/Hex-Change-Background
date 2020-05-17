document.getElementById("colorBtn").addEventListener("click", function() {

    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    
   
        document.getElementById("color").innerHTML = ("#" + randomColor);

    document.body.style.background = "#" + randomColor;
});