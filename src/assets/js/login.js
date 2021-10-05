function signIn(e) {
    let email = document.getElementById('email').value, 
    pwd = document.getElementById('pwd').value;
    let users = JSON.parse(localStorage.getItem('users')) || [];
    let exist = users.length && 
    users.some(data => data.email.toLowerCase() == email && data.pwd.toLowerCase() == pwd);
    if(!exist){
        alert("Veuillez vérifier vos données");
    }
    else{

    let userconnected = users.find((user)=> user.email.toLowerCase() == email && user.pwd.toLowerCase() == pwd)
    localStorage.setItem('userconnected', JSON.stringify(userconnected));  
    
    location.href = "home";
        
    }
    e.preventDefault();
}