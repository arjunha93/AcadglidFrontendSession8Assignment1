/*
this is the global variable n
*/
var n = 0;
document.getElementById("var").innerHTML = n;
/*
Function to increment the value to 1
*/
function increment(){

  n++;
  return n;
}

/*
function to be called on button click
*/
function displayN(){
    //alert(n);
    for(var i = 1; i <=3 ; i++){
        var newN = increment();
        alert("Function called and n = "+newN);
    }
    document.getElementById("var").innerHTML = n;
}