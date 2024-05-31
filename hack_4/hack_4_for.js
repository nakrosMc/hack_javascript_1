/**
 * mediante el loop for agregar los números 1,3,5,7
 * dentro del array result 
 * 
 * 
 * output => [1,3,5,7]
 */
let result = [];
let nun = [1,2,3,4,5,6,7];

for (i=0; i<nun.length; i++ ) {
    if (nun[i] % 2 !== 0) {
        result.push(nun[i])
    }
}

//export result
module.exports = result;