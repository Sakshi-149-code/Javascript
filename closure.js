function account()
{
    let balance=1000000;

    function Deposit(v)
    {
        balance=balance+v;
        console.log("Deposit balance:"+balance);
        
    }

    function Withdraw(v)
    {
        if(balance<v)
        {
            console.log("Insufficient balance");
        }
        else{
            balance=balance-v;
             console.log("Remaining balance:"+balance);     
        }
    }

    function returnbalance()
    {
        console.log(balance);
        
    }

    return[Deposit,Withdraw,returnbalance];
}

let[Deposit,Withdraw,returnbalance]=account();


Deposit(30000);
Withdraw(10000);
returnbalance();
