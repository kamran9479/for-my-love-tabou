document.getElementById('log-in-button')
.addEventListener('click', function(event){
    event.preventDefault();


    const phoneNumber = document.getElementById('number-input').value;
    const pinNumber = document.getElementById('pin-input').value;

    if(phoneNumber === '017' && pinNumber === "tabou"){
        
        window.location.href = "./home.html";
        
    }
    else{
        alert('Invalid pin or number');
    }

})



