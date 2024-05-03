// test functionality 


function infoFunction() {
    alert('no hay informacion de momento')
}




function contactFunction() {

    const nametxt = document.getElementById('name');
    const emailtxt = document.getElementById('email');

    if (nametxt.value && emailtxt.value != '' ) {
        alert(nametxt.value + ' su correo: ' + emailtxt.value + ' fueron enviado exitosamente!')
    }
    else {
        alert('FAvor de llenar los datos de contacto')
    }
}

