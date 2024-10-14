document.getElementById('cash-out').addEventListener('click', function(event) {
    event.preventDefault();

    const withdrawMoney = document.getElementById('withdraw-amount').value;
    const pinNumber = document.getElementById('pin-number').value;
    
    if(pinNumber === '2497'){
        const accountBanlance = document.getElementById('account-balance').innerText;
        const withdrawMoneyNumber = parseFloat(withdrawMoney);
        const accountBalanceNumber = parseFloat(accountBanlance);

        if(accountBalanceNumber>withdrawMoneyNumber){
            const updatedBalances = accountBalanceNumber - withdrawMoneyNumber;

            //step-6: update the balance to DOM/UI
        document.getElementById('account-balance').innerText = updatedBalances;
        }
        else{
            alert('Failed Cash Out.Please try again Later...');
        }
    }
    else{
        alert('Failed Cash Out.Please try again Later...');
    }
});

document.getElementById('log-out').addEventListener('click',function(){
    window.location.href = '/index.html';
});

