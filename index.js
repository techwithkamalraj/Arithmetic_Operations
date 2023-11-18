// Addition Operation
let add = document.getElementById('add');
add.addEventListener('click',()=>{
    let firstVal = parseInt(document.getElementById('firstAdd').value);
    let secondVal = parseInt(document.getElementById('secondAdd').value);
    let addResult = firstVal + secondVal;
    document.getElementById('addRes').value = addResult;
})

// Subtraction
let sub = document.getElementById('sub');
sub.addEventListener('click',()=>{
    let firstSub = parseInt(document.getElementById('firstsub').value);
    let secondSub = parseInt(document.getElementById('secondsub').value);
    let subResult = firstSub - secondSub;
    document.getElementById('subRes').value = subResult;
})

// Multiplication
let mul = document.getElementById('mul');
mul.addEventListener('click',()=>{
    let firstmul = parseInt(document.getElementById('firstmul').value);
    let secondmul = parseInt(document.getElementById('secondmul').value);
    let subResult = firstmul * secondmul;
    document.getElementById('mulRes').value = subResult;
})

// Division
let div = document.getElementById('divide');
div.addEventListener('click',()=>{
    let firstdiv = parseInt(document.getElementById('firstdiv').value);
    let seconddiv = parseInt(document.getElementById('seconddiv').value);
    let divResult = firstdiv / seconddiv;
    document.getElementById('divRes').value = divResult;
})

// Exponentiation
let mod = document.getElementById('modulus');
mod.addEventListener('click',()=>{
    let firstMod = parseInt(document.getElementById('firstMod').value);
    let secondMod = parseInt(document.getElementById('secondMod').value);
    let modResult = firstMod % secondMod;
    document.getElementById('modRes').value = modResult;
})

//Modulus - Remainder
let expo = document.getElementById('expo');
expo.addEventListener('click',()=>{
    let number = parseInt(document.getElementById('number').value);
    let power = parseInt(document.getElementById('power').value);
    let expoResult = number ** power;
    document.getElementById('expoRes').value = expoResult;
})

// Increment
let incre = document.getElementById('incre');
let increValue = document.getElementById('increVal'); 

incre.addEventListener('click', () => {
    let value = parseInt(increValue.value); 

    if (!isNaN(value)) {
        value++; 
        increValue.value = value; 
        document.getElementById('increRes').value = value; 
    } else {
        
        document.getElementById('increRes').value = 'Invalid Input';
    }
});


// Decrement

let decre = document.getElementById('dec');
let decreValue = document.getElementById('decreVal'); 

decre.addEventListener('click', () => {
    let value = parseInt(decreValue.value); 

    if (!isNaN(value)) {
        value--; 
        decreValue.value = value; 
        document.getElementById('decreRes').value = value; 
    } else {
    
        document.getElementById('decreRes').value = 'Invalid Input';
    }
});






