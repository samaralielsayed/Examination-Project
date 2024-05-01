let input=document.getElementsByClassName('checkVaildution');
let errorMessage=document.getElementsByClassName('error-message');
let registrationForm=document.getElementById('submit');
let password=document.getElementById('password');
let firstName=document.getElementById('firstName');
let lastName=document.getElementById('lastName');
let email=document.getElementById('email');
let flag=false;
let login=document.getElementById('loginLink')
// Rna=/^[a-zA-Z]+$/;
let regeler=[/^[a-zA-Z]+$/,/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+(@gmail\.com)$/,/^.{8,}$/]
document.querySelector("form").addEventListener("submit",(e)=>{
    e.preventDefault();
    for(let i=0;i<input.length;i++){        
        if(input[i].value==''){
            errorMessage[i].innerHTML="*This field is required.";
            errorMessage[i].style.display = "block";
             flag=false;

        }else if(input[i].name=='firstName' && (!regeler[0].test(input[i].value))){
            errorMessage[i].innerHTML="*Enter a Vaild First Name.";
            // errorMessage[i].innerHTMl = "*Enter a Vaild First Name.";  
            errorMessage[i].style.display = "block";
            flag=false;
        

        }else if(input[i].name=='lastName'&&(!regeler[0].test(input[i].value))){
            errorMessage[i].innerHTML = "*Enter a Vaild Last Name.";  
            errorMessage[i].style.display = "block";
            flag=false;

        }else if(input[i].name=='email'&&(!regeler[1].test(input[i].value))){
            errorMessage[i].innerHTML = "*Please Enter a Vaild Email.";  
            errorMessage[i].style.display = "block";
            flag=false;

        }else if(input[i].name=='password'&&(!regeler[2].test(input[i].value))){
            errorMessage[i].innerHTML = "*Password must be at least 8 characters in length, at least contains (one digit, one lowercase letter, one uppercase letter).";  
            errorMessage[i].style.display = "block";
            flag=false;

        }else if(input[i].name=='confirmPassword' &&(input[i].value!=password.value)){
            errorMessage[i].innerHTML = "*Password  Not Match.";  
            errorMessage[i].style.display = "block";
            flag=false;

        }
        else{
            errorMessage[i].style.display = "none";          
            flag=true;       
        }
    }
    // return flag;
    if(flag){
        saveData();
        
    }
    

})

function saveData(){
  let userRecords=JSON.parse(localStorage.getItem('users'))||[];
  console.log(userRecords)
  console.log( email)
  if(userRecords.some((v)=>{
    return v.email==email.value;
  })){
    $('.alert-error').slideDown();
    
  }else{
    $('.alert-error').hide();
    userRecords.push({
        'firstName':firstName.value,
        'lastName':lastName.value,
        'email':email.value,
        'password':password.value
    })

    localStorage.setItem('users',JSON.stringify(userRecords));
    window.location.replace("login.html");
  }

}

$('.margin-icon').on('click',function(){
    $('.alert-error').hide();
})

login.addEventListener('click',function(){
    window.location.replace('login.html');
})