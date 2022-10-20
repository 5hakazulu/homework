class bankAccount {
    constructor(balance, accountType){
        this.balance = balance;
        this.accountType = accountType;
    }
}
let myBankAccount = new bankAccount(500, "savings")

console.log(myBankAccount);

function deposit(amount, bankAccount){
    bankAccount.balance += amount 
    // console.log(bankAccount.balance)
    return bankAccount.balance;
}
function withdraw(amount, bankAccount) {
    bankAccount.balance -= amount 
    // console.log(bankAccount.balance)
    return bankAccount.balance;
}
console.log(deposit(100, myBankAccount))
console.log(withdraw(35, myBankAccount))
console.log(deposit(150, myBankAccount))
console.log(withdraw(50, myBankAccount))
console.log(withdraw(5, myBankAccount))
console.log(withdraw(50, myBankAccount))
console.log(deposit(150, myBankAccount))















