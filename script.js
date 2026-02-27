function addNumbers() {
    var n1 = document.getElementById("num1").value;
    var n2 = document.getElementById("num2").value;

    var sum = Number(n1) + Number(n2);

    document.getElementById("result").innerHTML = 
        "Result: " + sum;
}

