const form1 = document.querySelector('#form_error');

form1.addEventListener('submit', valForm1);

function valForm1 (form){
    form.preventDefault();

    const con = "hola"; 
    if (con !== "hola") {
        const div = document.createElement('div');
        const h1 = document.createElement('h1');
        
    }

}