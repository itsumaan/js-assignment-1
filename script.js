document.getElementById("ali").onclick = function(){
    let fullName = "Umaan"
    alert(fullName)

    let statement = "alert('Umaan')"
    document.getElementById("statement").innerHTML = statement;
}

document.getElementById("ah").onclick = function() {
    alert(216691)
    let statement = "alert('216691')"
    document.getElementById("statement").innerHTML = statement;
}



document.getElementById("aaaa").onclick = function(){
  
    let www = "<ul><li>A variable name contain</li><li>A variable can contain only letters, numbers , dollars and sign</li><li>Through a Variable can't be any of Javascript keywords. For example <code>userAlert</code> and <code>myVar</code></li></ul>"
    document.getElementById("www").innerHTML = www;
}



document.getElementById("camel").onclick = function (){
    let www = "<h3>Example</h3><ul><li><code>user</code></li><li><code>userResponse</code></li><li><code>userResponseTime</code></li></ul>"
    document.getElementById("www").innerHTML = www;
}



document.getElementById("sum").onclick = function (){

    document.getElementById("www").innerHTML = "";
    document.getElementById("statement").innerHTML = "";

    let num1 = 10;
    let num2 = 10;

    let sum = num1 + num2;

    document.getElementById("www").innerHTML = "<p class='text-center'>20</p>"
    let statement = "let num1 =" + num1 +";<br>let num2 = "  + num2 +";<br> let sum = num1 + num2;"
    document.getElementById("statement").innerHTML = statement ;
}


    



document.getElementById("sub").onclick = function (){

    // document.getElementById("www").innerHTML = "";
    // document.getElementById("statement").innerHTML = "";

    let num1 = 10;
    let num2 = 6;

    let sub = num1 - num2;

    document.getElementById("www").innerHTML = "<p class='text-center'>4</p>"
    let statement = "let num1 =" + num1 +";<br>let num2 = "  + num2 +";<br> let sub = num1 - num2;"
    document.getElementById("statement").innerHTML = statement ;
}

 
    
document.getElementById("multi").onclick = function (){

    // document.getElementById("www").innerHTML = "";
    // document.getElementById("statement").innerHTML = "";

    let num1 = 10;
    let num2 = 5;

    let Multiply = num1 * num2;

    document.getElementById("www").innerHTML = "<p class='text-center'>50</p>"
    let statement = "let num1 =" + num1 +";<br>let num2 = "  + num2 +";<br> let Multiply = num1 * num2;"
    document.getElementById("statement").innerHTML = statement ;
}

document.getElementById("divide").onclick = function (){

    // document.getElementById("www").innerHTML = "";
    // document.getElementById("statement").innerHTML = "";

    let num1 = 10;
    let num2 = 5;

    let divide = num1 / num2;

    document.getElementById("www").innerHTML = "<p class='text-center'>2</p>"
    let statement = "let num1 =" + num1 +";<br>let num2 = "  + num2 +";<br> let divide = num1 / num2;"
    document.getElementById("statement").innerHTML = statement ;
}


document.getElementById("cal").onclick = function(){

let www = 36/6 * 3 + 2**4 - (3+5);
document.getElementById("www").innerHTML = www;

document.getElementById("statement").innerHTML= "<p class='text-center'>36/6 * 3 + 2**4 -(3+5)</p>"
}



document.getElementById("Clear").onclick = function(){
    document.getElementById("www").innerHTML = "";
}

document.getElementById("s").onclick = function(){
    document.getElementById("statement").innerHTML = "";
}