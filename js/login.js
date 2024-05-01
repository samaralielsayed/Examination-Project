let password=document.getElementById('password');
let email=document.getElementById('email');
let errorMessage=document.getElementsByClassName('error-message');
let input=document.getElementsByClassName('checkVaildution');
let flag=false;
document.querySelector("form").addEventListener("submit",(e)=>{
  e.preventDefault();
  
  for(let i=0;i<input.length;i++){        
    if(input[i].value==''){
        errorMessage[i].innerHTML="*This field is required.";
        errorMessage[i].style.display = "block";
         flag=false;

    }else{
      errorMessage[i].style.display = "none";          
      flag=true;  
    }
  }
  if(flag){
    saveData();
    
}


})
function saveData(){
  let userRecords=JSON.parse(localStorage.getItem('users'))||[];
  console.log(userRecords)
  console.log( email)
  if(userRecords.some((v)=>{
    return v.email==email.value&&v.password==password.value;
  })){
    // alert('Login Successfull');
    let currentUser=userRecords.filter((v)=>{
        return v.email==email.value&&v.password==password.value;
    })[0]
    let fName=currentUser.firstName;
    let lName=currentUser.lastName;
    localStorage.setItem('name',`${fName.charAt(0).toUpperCase()+fName.slice(1)} ${lName.charAt(0).toUpperCase()+lName.slice(1)}`);
    localStorage.setItem('email',currentUser.email);
    window.location.replace('quiz.html')
  }else{
    $('.alert-error').slideToggle();
    // document.querySelector('.alert-error').style.display='block';

  }

}
$('.margin-icon').on('click',function(){
    $('.alert-error').hide();
})
// document.querySelector('.margin-icon').addEventListener('click',function(){
//     $('.alert-error').hide();
//     // document.querySelector('.alert-error').style.display='none';
// })
