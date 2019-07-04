'use strict';

const accounts: any[] = [
    { clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
    { clientName: 'Vladimir', accountNumber: 43546731, balance: 5204100071.23 },
    { clientName: 'Sergei', accountNumber: 23456311, balance: 1353600.0 }
];

// Create function that returns the name and balance of cash on an account in a list

let getNameAndBalance = (accNum: number): any[] => {
    let clientObj: any = accounts.find((element: { accountNumber: number }) => {
        return element.accountNumber == accNum;
    });
    let clientDataArr: [string, number] = [clientObj.clientName, clientObj.balance];
    return clientDataArr;
}

// getNameAndBalance(11234543);
// should return: ['Igor', 203004099.2]

console.log(getNameAndBalance(11234543));

// Create function that transfers an amount of cash from one account to another
// it should have four parameters:
//  - the accounts
//  - from accountNumber
//  - to accountNumber
//  - amount of cash to transfer
//
// Log "404 - account not found" if any of the account numbers don't exist to the console.

let transferAmount = (arr: any[], acc1: number, acc2: number, amount: number) => {

    let clientObjFrom: any = accounts.find((element: { accountNumber: number }) => {
        return element.accountNumber == acc1;
    });
    let clientObjTo: any = accounts.find((element: { accountNumber: number }) => {
        return element.accountNumber == acc2;
    });

    if (!clientObjFrom || !clientObjTo) {
        console.log("404 - account not found");
    }
    else {


        clientObjFrom.balance -= amount;
        clientObjTo.balance += amount;
    }
}

// transferAmount(accounts, 43546731, 23456311, 500.0);
//After printing the "accounts" it should look like:
// const accounts = [
//	{ clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
//	{ clientName: 'Vladimir', accountNumber: 43546731, balance: 5204099571.23 },
//	{ clientName: 'Sergei', accountNumber: 23456311, balance: 1354100.0 }
//]

transferAmount(accounts, 43546731, 23456311, 500.0);

console.log(accounts);


export = {
    getNameAndBalance,
    // transferAmount,
    accounts
};