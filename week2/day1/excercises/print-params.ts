// -  Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)

'use strict'

function printParams(params: Array<any>){
    params.forEach(element => console.log(element));
}

printParams([3, "Bunny", true, undefined, null]);