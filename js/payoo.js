//step-1: set Event handlar
document.getElementById('btn-login').addEventListener('click',function(event){

    //step-2: prevent default behavior( prevent relodint browser)
    event.preventDefault();//form sumbit stop reloding the page

    //step-3: get the phone number
    const phoneNumber = document.getElementById('phone-number').value;

    //step-4: get the pin number
    const pinNumber = document.getElementById('pin-number').value;

    if(phoneNumber === '01812444115' && pinNumber === '2497'){
        console.log("Login Successfully");
        window.location.href = '/home.html';
    }
    else{
        alert("Your phone number or pin is wrong");
    }



})