// Write your solution in this file!
var customerName = "bob";
const leastFavoriteCustomer = "jim";

function upperCaseCustomerName(){
    customerName= customerName.toUpperCase();
}

function setBestCustomer(){
    window.bestCustomer="not bob";
    return bestCustomer;
}

function overwriteBestCustomer(){
    bestCustomer = "maybe bob";
}

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer="bob";
}