function myFunction() {
    event.preventDefault();
    let nam = document.getElementById("Sname").value;
    let result =
    ( document.getElementById("matric").value / 1100) * 20 + (document.getElementById("inter").value / 1100) * 30 + (document.getElementById("ecat").value / 400) * 50;
    document.getElementById("name").innerHTML=`Student Name is: ${nam}`;
    document.getElementById("aggregate").innerHTML=`Total Aggregate is: ${result}`;
    if (result >= 60) {
        window.alert("Eligible Student");

    } else {
        window.alert("Not Eligible");

    }
}