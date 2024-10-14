/*
s1: event handlers
prevent page reload after from submit
s2: get money to the added at account
s3: verifay the pin number
*/
//step-1: get event handlers
document.getElementById('added-money').addEventListener('click',function(event){
    
    event.preventDefault();

    const amountAdd = document.getElementById('amount-add').value;

    const pinNumber = document.getElementById('pin-number').value;

    if(pinNumber === '2497'){
        const accountBanlance = document.getElementById('account-balance').innerText;
        //convert to the string to number
        const addMoneyNumber = parseFloat(amountAdd);
        const accountBanlanceNumber = parseFloat(accountBanlance);
        const updatedBalance = addMoneyNumber+accountBanlanceNumber;
        
        console.log(accountBanlanceNumber)
        console.log(addMoneyNumber);
        console.log(updatedBalance);
        //step-6: update the balance to DOM/UI
        document.getElementById('account-balance').innerText = updatedBalance;
    }

    
})
document.getElementById('log-out').addEventListener('click',function(){
    window.location.href = '/index.html';
})