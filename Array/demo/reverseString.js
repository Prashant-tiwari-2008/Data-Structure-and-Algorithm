//Reverse  a string
// i/p => hi i am prashant
// o/p => tnahsarp ma i ih

/**
 * Approch 
 * first we have to check whether i/p is changable or not
 * we have to convert string into array
 * b/c we have to access every element of string
 * now have to run a loop from the length of arry to 0
 * and have to store in to new arry
 * and finalay convert the new arry to sting
 * 
 */

//MY ANSWER
class ReverseString {
    constructor() {
        this.string = "";
    }
    rever(str) {
        if (!str || typeof str != 'string' || str.length < 2) { return str }
        else {
            const convertedArry = [];
            let i = str.length - 1;
            for (i; i >= 0; i--) {
                convertedArry.push(str[i])

            }
            console.log(convertedArry.join(''));
        }
    }
}
const reverseSting = new ReverseString();
reverseSting.rever(" hi my name is Prashant tiwari");

//TUTOR ANSWER
// function reverse(str) {
//     if (!str || typeof str != 'string' || str.length < 2) return str;

//     const backwards = [];
//     const totalItems = str.length - 1;
//     for (let i = totalItems; i >= 0; i--) {
//         backwards.push(str[i]);
//     }
//     return backwards.join('');
// }

// function reverse2(str) {
//     //check for valid input
//     return str.split('').reverse().join('');
// }

const reverse3 = str => [...str].reverse().join('');

reverse('Timbits Hi')
reverse('Timbits Hi')
reverse3('Timbits Hi')