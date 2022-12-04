//Sustituye /***/ por las instrucciones adeacuadas que cumplan las operaciones 
//y salidas indicadas en los comentarios.


function printArray(array:Array<number>):void{
	//code to print the array on console
       console.log(array.toString());
}

let array:number[]=[2,3,4];
console.log(array.shift()); //2
printArray(array); // 3,4
array.push(5);
printArray(array); // 3,4,5
console.log(array.pop()); //5
printArray(array); // 3,4
array.push(1);
printArray(array); // 3,4,1
array.unshift(8);
printArray(array); // 8,3,4,1
/** check if every number is greater than 3 */
function greaterThan3(array:Array<number>){
       let comptador:number = 0;
       for (let i=0; i < array.length; i++){
              if (array[i] <= 3){
                     comptador += 1;
              }
       }
       if (comptador === 0 ){
              return true;
       }else{return false};
}
let everyisgreater = greaterThan3(array);
console.log(everyisgreater);  //false
/** check if every number is less than 10 */
function lessThan10(array:Array<number>){
       let comptador:number = 0;
       for (let i=0; i < array.length; i++){
              if (array[i] >= 10){
                     comptador += 1;
              }
       }
       if (comptador === 0 ){
              return true;
       }else{return false};
}
let everyisless = lessThan10(array);
console.log(everyisless);  //true
console.log((array.sort()).toString()); //1,3,4,8
console.log((array.sort(function(a, b){return b - a})).toString()); //8,4,3,1
