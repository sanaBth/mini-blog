const signUp = e => {
    let fname = document.getElementById('fname').value,
        
        email = document.getElementById('email').value,
        pwd = document.getElementById('pwd').value;

    let formData = JSON.parse(localStorage.getItem('formData')) || [];

    let exist = formData.length && 
        JSON.parse(localStorage.getItem('formData')).some(data => 
            data.fname.toLowerCase() == fname.toLowerCase()
        );

    if(!exist){
        formData.push({ fname, email, pwd });
        localStorage.setItem('formData', JSON.stringify(formData));
        document.querySelector('form').reset();
        document.getElementById('fname').focus();
        alert("Compte crée.\n\nS'il vous plait, Veuillez se connecter.");
    }
    else
    {
        alert("Ooopppssss... !!!\nVotre nom existe déja!");
    }
    e.preventDefault();
}