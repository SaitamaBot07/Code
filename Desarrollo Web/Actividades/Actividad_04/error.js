const form1 = document.querySelector('#form_error');

form1.addEventListener('submit', valForm1);

function valForm1 (form){
    form.preventDefault();

    const con = "hola"; 
    const pass = form.target[1].value;

    if ( pass !== con) {
        const div = document.createElement('div');
        div.classList.add('div_error');
        const h1 = document.createElement('h1');
        h1.textContent = "ERROR";
        div.appendChild(h1);
        document.body.appendChild(div);

    }

}