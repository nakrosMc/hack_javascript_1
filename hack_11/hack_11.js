/**
 * [1,2,3,4,5]
 * ["foo","bar","baz","qux","echo"]
 * 
 * 1) incluir los 2 array en 1 solo array
 * 2) los items del number array 1,3,5 se reescriben one,three,five
 * del string array todos sus items mutan de acuerdo a lo siguiente:
 * foo => f00
 * bar => Bar
 * baz => b@z   
 * qux => quX
 * echo => 3ch0
 * 3) anexar al inicio, al final y entre la unión de los array el string "h@ck"
 * 
 * 
 * output => ["h@ck","one",2,"three",4,"five","h@ck","f00","Bar","b@z","quX","3ch0","h@ck"]   
 */
let numberArray = [1,2,3,4,5];
let stringArray = ["foo","bar","baz","qux","echo"]
let result = [];

result = result.concat(numberArray, stringArray);

for (let i = 0; i < result.length; i++) {
    if (result[i] === numberArray[0]){
        result[i] = 'one';
    } 
    
    else if (result[i] === numberArray[2]){
        result[i] = 'three'
    } 

    else if (result[i] === numberArray[4]){
        result[i] = 'five'
    } 
}

for (let i = 0; i < result.length; i++) {
    if (result[i] === 'foo'){
        result[i] = 'f00';
    } 
    
    else if (result[i] === 'bar'){
        result[i] = 'Bar'
    } 

    else if (result[i] === 'baz'){
        result[i] = 'b@z'
    } 

    else if (result[i] === 'qux'){
        result[i] = 'quX'
    }

    else if (result[i] === 'echo'){
        result[i] = '3ch0'
    } 
}

result.unshift('h@ck')
result.push('h@ck')
result.splice(numberArray.length + 1, 0, "h@ck");


//export result
module.exports = result;