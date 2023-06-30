var customerName = 'bob'; 

function upperCaseCustomerName(customerName) { 
    return customerName.toUpperCase();
}

function setBestCustomer() {
    bestCustomer = 'not bob';
}

function overwriteBestCustomer(newBestCustomer) {
    bestCustomer = newBestCustomer;
}

const leastFavoriteCustomer = 'initial value';

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'new value';
}