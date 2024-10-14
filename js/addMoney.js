/*
s1: event handlers
prevent page reload after from submit
s2: get money to the added at account
s3:  
*/
//step-1: get event handlers
document.getElementById('added-money').addEventListener('click',function(event){
    
    event.preventDefault();

    const amountAdd = document.getElementById('amount-add').value;
    console.log(amountAdd);
    const pinNumber = document.getElementById('pin-number').value;
    console.log(pinNumber);

    
})