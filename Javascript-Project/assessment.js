function logoutFunc1() {
  event.preventDefault();
  document.getElementById("checkStatusID1").style.display = "none";
  document.getElementById("logoutID1").style.display = "none";
  localStorage.removeItem("displayitem1");
  localStorage.removeItem("displayitem");
  window.open("index.html", "_self");
}

function deleted(){
  localStorage.removeItem("assessment");
}

class Assessment {
  constructor(username,email,bmi, gender, age, chest, abdominal, thigh, pushup, situp, bench) {
    this.username = username;
    this.email = email;
    this.bmi = bmi;
    this.gender = gender;
    this.age = age;
    this.chest = chest;
    this.abdominal = abdominal;
    this.thigh = thigh;
    this.pushup = pushup;
    this.situp = situp;
    this.bench = bench;
  }
}
function checkData() {
  event.preventDefault();

  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let gender = document.querySelector('input[name="gender"]:checked').value;
  let age = document.getElementById("age").value;
  let chest = document.getElementById("chest").value;
  let abdominal = document.getElementById("abdominal").value;
  let thigh = document.getElementById("thigh").value;
  let pushup = document.getElementById("pushup").value;
  let situp = document.getElementById("situp").value;
  let bench = document.getElementById("bench").value;
  let bmi = weight / height ** 2;
  
  let assessmentArray = JSON.parse(localStorage.getItem("assessment")) || [];

  var getDataLogin = JSON.parse(localStorage.getItem("userLogin"));
  var getDataSignup = JSON.parse(localStorage.getItem("userSignup"));
  let user;
  let useremail;
  let length=0;

  if(localStorage.getItem("displayitem")=="true"){
    length = getDataLogin.length;
    user = getDataLogin[length-1].username;
    useremail = getDataLogin[length-1].email;
    let assessmentObject = new Assessment(user,useremail,
      bmi,
      gender,
      age,
      chest,
      abdominal,
      thigh,
      pushup,
      situp,
      bench
    );
    assessmentArray.push(assessmentObject);
  }
  else if(localStorage.getItem("displayitem1")=="true"){
      length = getDataSignup.length;
      user = getDataSignup[length-1].username;
      useremail = getDataSignup[length-1].email;
      let assessmentObject = new Assessment(user,useremail,
        bmi,
        gender,
        age,
        chest,
        abdominal,
        thigh,
        pushup,
        situp,
        bench
      );
      assessmentArray.push(assessmentObject);
  }
  localStorage.setItem("assessment", JSON.stringify(assessmentArray));
  if (assessmentArray != null) {
    window.open("check.html","_self");
  } else {
    alert("Wrong Attempt");
  }
}

function assessmentCheck() {
  var getData = JSON.parse(localStorage.getItem("assessment"));
  let text = "";

  getData.forEach((element,index) => {
  
    text += `
    <tr>
        <td><h1>${index+1}</h1></td>
        <td>${element.username}</td>
        <td>${element.email}</td>
        <td>${element.bmi}</td>
        <td>${element.gender}</td>
        <td>${element.age}</td>
        <td>${element.chest}</td>
        <td>${element.abdominal}</td>
        <td>${element.thigh}</td>
        <td>${element.pushup}</td>
        <td>${element.situp}</td>
        <td>${element.bench}</td>
    </tr>
    `;
  });
  
  document.getElementById("assessmentData").innerHTML = text;
}
