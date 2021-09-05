//alert("hi");
// var num1=prompt("enter the num1");
// var num2=prompt("enter the num2");

// sum();
function sum()
{
    var num1=parseInt (document.getElementById("num1").value);
    var num2=parseInt (document.getElementById("num2").value);
    var k=num1+num2;
   
    document.getElementById("res").innerHTML =k;
}
function sub()
{
    var num1=parseInt (document.getElementById("num1").value);
    var num2=parseInt (document.getElementById("num2").value);
    var k=num1-num2;
    document.getElementById("res").innerHTML =k;
}
function mul()
{
    var num1=parseInt (document.getElementById("num1").value);
    var num2=parseInt (document.getElementById("num2").value);
    var k=num1*num2;
    document.getElementById("res").innerHTML =k;
}
function div()
{
    var num1=parseInt (document.getElementById("num1").value);
    var num2=parseInt (document.getElementById("num2").value);

    var k=num1/num2;
   
   
    document.getElementById("res").innerHTML =k;
}

