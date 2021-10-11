const signUp = e => {
    let fname = document.getElementById('fname').value,
        email = document.getElementById('email').value,
        pwd = document.getElementById('pwd').value;
    let users = JSON.parse(localStorage.getItem('users')) || [];
    let exist = users.length && 
        users.some(data => 
            data.fname.toLowerCase() == fname.toLowerCase()
        );
    if(!exist){
        users.push({ fname, email, pwd });
        localStorage.setItem('users', JSON.stringify(users));
        document.querySelector('form').reset();
        document.getElementById('fname').focus();
        alert("Compte crée.\n\nS'il vous plait, Veuillez se connecter.");
        location.href = "";
    }
    else
    {
        alert("Ooopppssss... !!!\nVotre nom existe déja!");
        
    }
    e.preventDefault();
}