// var str = '';
// for(var a = 1; a <= 5; a++)
// {
//     for(var s = 5; s<= a; s-- ){
//         str += '*';
     
//     }
//     str += '\n';
// }
// console.log(str);

//------------------------------------------------------------------------

// var a =[8,17,16,20,14,19,17,19,15,20];
// var r =0;
// for( var i=0; i<=9; i++){
//     r += a[i];
// }
// var t= r/9;
// console.log(t);

//------------------------------------------------------------------------

// var a = [8,17,16,20,14,19,17,19,15,20];
// var max = 0;
// for( var i =0 ; i<a.length ; i++){
//     if( a[i] > max){
//         max = a[i];
//     }
// }
// console.log(max);

//------------------------------------------------------------------------

// var a =[1,['t','r'],'mahdi',20];
// console.log(a);
// console.log(a[1][0]);

//------------------------------------------------------------------------

// var add = function(name1,name2){
//     return(name1 + name2);
// }
// var r = add(10,10);
// console.log(r);

//------------------------------------------------------------------------


// function nomre (nomre1,nomre2,nomre3,nomre4,nomre5){
//     var jam = nomre1+nomre2+nomre3+nomre4+nomre5;
//     var tagsim = jam/5;

//     if(tagsim >= 10){
//          return'قبول';
//      }
//      else{
//          return"مشروط";
//      }
//  }
//   var mahdi = nomre(10,20,20,10,11);
//   console.log(nomre (10,20,20,10,11));
//   console.log(nomre (10,20,2,10,1));
  
//------------------------------------------------------------------------

// تابع بامقدار بینهایت دو روش

// function sum(){
//     var total =0;
//     var w =0;
//     for(var i = 0; i < arguments.length ; i++){
//         total += arguments[i];
//         w = total/arguments.length;
//     }
//     return total,w;
// }
// console.log(sum(10,20));


// function sum(...nambers){
//     var total =0;
//     var w =0;
//     for(var i = 0; i < nambers.length ; i++){
//         total += nambers[i];
//         w = total/nambers.length;
//     }
//     return total,w;
// }
// console.log(sum(10,20));

//------------------------------------------------------------------------

//تابع توان

// function power( base , exponent){
//     var result = 1;
//     for(var i= 1; i <=exponent ; i++){
//         result *= base ;
//     }
//     return result;
// }
// console.log(power(2,3));

//------------------------------------------------------------------------

//Arrow Function Expression 

// var power = (num) => num * num;
// console.log(power(10));

// var power = (a,b) => a + b;
// console.log(power(10,10));

// var power = () => console.log('mahdi mohammadi'); 
// power();

//------------------------------------------------------------------------

// const mahdi = {
//     firstName : 'mahdi',
//     lastName : 'mohammadi',
//     age : '16',
//     fullName : function(){
//         return this.firstName + ' ' + this.lastName;

//     }

// };
// console.log(mahdi.fullName());

//------------------------------------------------------------------------

//for-of

//   let myarray = [5,7,8,9,1,3];

//     for(let j of myarray){
//         console.log(j);
//     }



// let str = 'mahdi mohammadi'
    
// for(let j of str){
//     console.log(j);
// }

//------------------------------------------------------------------------

//for-in

// const mahdi = {
//     firstName : 'mahdi',
//     lastName : 'mohammadi',
//     age : '16',
// }
// for ( let key in mahdi){
//     console.log(mahdi[key]);
// }
// for ( let key in mahdi){
//     console.log(key + ' => ' + mahdi[key]);
// }  

//------------------------------------------------------------------------

//keydown  keyup  keypress

// let Input = document.querySelector('input');
// let P = document.querySelector('p');
// let v = document.getElementsByClassName('V')

// Input.addEventListener('keypress', ()=>{

// })

// Input.addEventListener('keydown', ()=>{
//     P.innerHTML += 'keydowm';
    
// })
// Input.addEventListener('keyup', ()=>{
//     P.innerHTML += 'keyup';
    
// })
//------------------------------------------------------------------------
