// $(document).ready(function(){
//     $('.select').each(function(){
//             $('.tabStyle ul li a').removeClass('active');
//             $('.tabStyle').find(`[href="#${id}" ]`).addClass('active');
            
//     })
// })
// $(document).ready(function(){
//     $('.tabStyle ul li a').click(function() {
//         $('.tabStyle ul li a').removeClass('active');
//         $(this).addClass('active');
//     });
// });

// $(document).ready(function() {
//     $('.select .tabStyle a').click(function() {
//       // Remove the "active" class from all anchor tags
//       $('.select .tabStyle a').removeClass('active');
//       // Add the "active" class to the clicked anchor tag
//       $(this).addClass('active');
//       // Change the text color to yellow for the clicked anchor tag
//       $(this).css('color', 'yellow');
//     });
//   });
  
// document.addEventListener('DOMContentLoaded', function() {
//     const anchors = document.querySelectorAll('.tabStyle a');
  
//     anchors.forEach(function(anchor) {
//       anchor.addEventListener('click', function(event) {
//         event.preventDefault();
//         const selectedAnchor = this;
  
//         // Remove the "active" class from all anchor tags
//         anchors.forEach(function(anchor) {
//           anchor.classList.remove('active');
//         });
  
//         // Add the "active" class to the clicked anchor tag
//         selectedAnchor.classList.add('active');

//       });
//     });
//   });


// tabs animation

document.addEventListener('DOMContentLoaded', function() {
    const tabStyle = document.querySelector('.navbar');
  
    tabStyle.addEventListener('click', function(event) {
      const target = event.target;
      if (target.tagName === 'A') {
        event.preventDefault();
  
        // Remove the "active" class from all anchor tags
        const anchorTags = this.querySelectorAll('a');
        anchorTags.forEach(function(anchor) {
          anchor.classList.remove('active');
          anchor.style.color = 'white'
        });
  
        // Add the "active" class to the clicked anchor tag
        target.classList.add('active');
        target.style.color = 'yellow';
      }
    });
  });

  // Tabs links
  function loginFunc(){
    window.open('login.html','_self');
  }
  function signupFunc(){
    window.open('register.html','_self');
  }
  function aboutFunc(){
    window.open('about.html','_self');
  }
  function homeFunc(){
    window.open('index.html','_self');
  }
  function serviceFunc(){
    window.open('service.html','_self');
  }
  function assessmentFunc(){
    if(localStorage.getItem("displayitem") == "true" || localStorage.getItem("displayitem1") == "true"){
      window.open('assessment.html','_self');
    }
    else{
      alert('Login or Signup is required');
    }
  }
  function checkFunc(){
    window.open('check.html','_self');
  }
  function contactFunc(){
    window.open('contact.html','_self');
  }
  function contactInfoFunc(){
    window.open('contactInfornation.html','_self');
  }

  // assessment animation
  window.addEventListener('load', function() {
    var animatedDiv = document.getElementById('assessment-id');
    setTimeout(function() {
      animatedDiv.style.left =  '0px';
    }, 200);
  });
  

// Signup Data

class UserSignUp{
  constructor(username,email,password,confirmPassword){
    this.username = username;
    this.email = email;
    this.password = password;
    this.confirmPassword = confirmPassword;
  }
}

function signUp(){
  
  event.preventDefault();

  let username = document.getElementById('username').value;
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  let confirmPassword = document.getElementById('cPassword').value;

  let userObject = new UserSignUp(username,email,password,confirmPassword);
  let userArray = JSON.parse(localStorage.getItem("userSignup")) || [];
  let count = 0;
  let count1 = 0;

  userArray.forEach(element => {
    if(element.username == username){
          count++;
          
      }
      else if(element.email == email){
        count1++;
      }
  });

  if(count>0){
    alert('Already contained username');
  }
  else if(count1>0){
    alert('Choose another email');
  }
  else{
    userArray.push(userObject);
    localStorage.setItem("userSignup", JSON.stringify(userArray));
    if(password == confirmPassword){
      alert('Successful SignUp');
      window.open("index.html","_self");
      displayitem1=true;
      localStorage.setItem("displayitem1","true");
    }
    else{
      alert('password doesn\'t match');
    }
  }



}

function userSignup(){
  var getData = JSON.parse(localStorage.getItem("userSignup"));    
  let text = '';
  getData.forEach(element => {
      text += 
      `
          <h2>${element.username}</h2>
          <h3>${element.email}</h3>
          <h4>${element.password}</h4>
          <h5>${element.confirmPassword}</h5>
          </br>
      `;
  });
  
  document.getElementById("totalData").innerHTML = text;
}

// Login Data
var displayitem=false;
var displayitem1=false;
class UserLogin{
  constructor(username,password,email){
    this.username = username;
    this.password = password;
    this.email = email;
  }
}
function login(){
  
  event.preventDefault();

  let username = document.getElementById('usernameLogin').value;
  let password = document.getElementById('passwordLogin').value;

  var getData = JSON.parse(localStorage.getItem("userSignup"));  
  let count = 0;
  
  if (getData === null) {
    alert('Your login doesn\'t exist, Please SignUp');
  } else {
    getData.forEach(element => {
 if (element.username === username && element.password === password) {
        count++;
        let userObject = new UserLogin(username,password,element.email);
        let userArray = JSON.parse(localStorage.getItem("userLogin")) || [];
        userArray.push(userObject);
        localStorage.setItem("userLogin", JSON.stringify(userArray));
      }
    });
  }

  if(count > 0){
    alert('Successful Login');
    window.location.href="index.html";
    displayitem=true;
    localStorage.setItem("displayitem","true");
  }
  else{
    alert('Wrong Attempt');
  }
}

if(localStorage.getItem("displayitem")=="true" || localStorage.getItem("displayitem1")=="true"){
  // For index file
  document.getElementById("contactStatusID").style.display = "inline-flex";
  document.getElementById("checkStatusID").style.display = "inline-flex";
  document.getElementById('loginID').style.display = "none";
  document.getElementById('signupID').style.display = "none";
  document.getElementById('logoutID').style.display = "inline-flex";

}

// Logout
function logoutFunc(){
  event.preventDefault();
  localStorage.removeItem('userLogin');

  document.getElementById("contactStatusID").style.display = "none";
  document.getElementById("checkStatusID").style.display = "none";
  document.getElementById('loginID').style.display = "inline-flex";
  document.getElementById('signupID').style.display = "inline-flex";
  document.getElementById('logoutID').style.display = "none";



  localStorage.removeItem("displayitem");
  localStorage.removeItem("displayitem1");

}