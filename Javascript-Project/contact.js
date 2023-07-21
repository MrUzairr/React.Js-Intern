class Contact{
    constructor(name,email,message) {
        this.name = name;
        this.email = email;
        this.message = message;
    }
}
function deleted(){
    localStorage.removeItem("contacts");
    alert("Successfully Deleted");
}
function contactData(){
    event.preventDefault();

    let name = document.getElementById("contactnameID").value;
    let email = document.getElementById("contactemailID").value;
    let message = document.getElementById("contactmessageID").value;

    let contactArray = JSON.parse(localStorage.getItem("contacts")) || [];

    let contactObject = new Contact(name,email,message);
    if(name!='' && email !='' && message != ''){
        contactArray.push(contactObject);

        localStorage.setItem("contacts", JSON.stringify(contactArray));
        console.log(contactArray);
        if (contactArray != null) {
          alert("Your message is received");
          contactCheck();
        } else {
          alert("Wrong Attempt");
        }
    }
    else{
        alert("Fill Input boxes");
    }
}

function contactCheck(){
    var getData = JSON.parse(localStorage.getItem("contacts"));
    let text = "";
  
    getData.forEach((element,index) => {
    
      text += `
      <tr>
          <td>${index+1}</td>
          <td>${element.name}</td>
          <td>${element.email}</td>
          <td>${element.message}</td>
      </tr>
      `;
    });
    
    document.getElementById("contactData").innerHTML = text;
}