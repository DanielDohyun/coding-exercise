var button = document.querySelector('button');
// ! tells this will never yield null 
var input1 = document.getElementById('num1');
var input2 = document.getElementById('num2');
function add(num1, num2) {
    return num1 + num2;
    // if (typeof num1 == 'number' && typeof num2 == 'number') {
    //     return num1 + num2;
    // } else {
    //     //+ turns the value into num 
    //     return +num1 + +num2;
    // }
}
;
button.addEventListener("click", function () {
    //value of the input element returns the type of string 
    console.log(add(+input1.value, +input2.value));
});
