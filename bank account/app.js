class bankAccount {
    constructor(name, balance) {
        this.name = name;
        this.balance = balance;
    }
    deposit(amount){
        if (amount>0) {
            this.balance += amount;
            document.getElementById("msg").innerHTML=`hello ${this.name}, your new balance after depositing ${amount} is ${this.balance}`;
        } else {
            `please Enter A valid Amount`
        }
    }
    withdraw(amount){
        if (amount>0 && amount <= this.balance) {
            this.balance -= amount;
            document.getElementById("msg").innerHTML=`hello ${this.name}, your new balance after withdrawing ${amount} is ${this.balance}`;
        } else {
            `please Enter A valid Amount`
        }
    }
}
let userAccount = []
let currentAccount = null;
document.getElementById("deposit").onclick = createAccount(){
    let name = document.getElementById("name").value;
    let balance = parseFloat(document.getElementById("amount").value);
    let newAccount = new bankAccount(name, balance);
    newAccount = currentAccount;
    userAccount.push(currentAccount)    
}