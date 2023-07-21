class Student {
    constructor(name, aggregate) {
        this.name = name;
        this.aggregate = aggregate;
    }
}

function myFunction() {
    event.preventDefault();
    let name = document.getElementById("Sname").value;
    let aggregate = (document.getElementById("matric").value / 1100) * 20 + (document.getElementById("inter").value / 1100) * 30 + (document.getElementById("ecat").value / 400) * 50;
    
    let studentData = new Student(name, aggregate);
    
    // Retrieve existing data from localStorage
    let existingData = JSON.parse(localStorage.getItem("Students")) || [];
    
    // Append the new student data to the existing array
    existingData.push(studentData);
    
    // Store the updated array back into localStorage
    localStorage.setItem("Students", JSON.stringify(existingData));
    
    
    if (aggregate >= 60) {
        window.alert("Eligible Student");
    } else {
        window.alert("Not Eligible");
    }
    
    window.open("record.html");
}

function studentRecord() {
    var getData = JSON.parse(localStorage.getItem("Students"));    
    let text = '';
    getData.forEach(element => {
        text += 
        `
        <tr>
            <td>${element.name}</td>
            <td>${element.aggregate}</td>
        </tr>
        `;
    });
    
    document.getElementById("totalData").innerHTML = text;
}
