const currentNum = document.getElementById('number');
const increseBtn = document.getElementById('increase');
const resetBtn = document.getElementById('reset');
const decreaseBtn = document.getElementById('decrease');

let newNum;

increseBtn.addEventListener('click',function(){
    newNum = Number(currentNum.innerHTML)+1;
    currentNum.innerHTML = newNum;
    if(newNum > 0){
        document.getElementById('number').style.color = 'green';
    }
    if(newNum == 0){
        document.getElementById('number').style.color = 'white';
    }
});

resetBtn.addEventListener('click',function(){
    currentNum.innerHTML = 0 , document.getElementById('number').style.color = 'white';
});

decreaseBtn.addEventListener('click',function(){
    newNum = Number(currentNum.innerHTML)-1;
    currentNum.innerHTML = newNum;
    if(newNum < 0){
        document.getElementById('number').style.color = 'red';
    }
    if(newNum == 0){
        document.getElementById('number').style.color = 'white';
    }
});