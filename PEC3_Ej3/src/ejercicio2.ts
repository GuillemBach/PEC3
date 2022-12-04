//Sustituye /***/ por las instrucciones adecuadas que cumplan las operaciones 
//y salidas indicadas en los comentarios.


interface Plane{
    model:string,
    npassengers:number
}
interface HangarHash{
    [hangar:string]:Plane;
}
//let HangarHash:string[] = ['123Z','H789'];
let myHangar:HangarHash = {};

myHangar['123Z']={
    model:'airbus',
    npassengers:200
}
myHangar['H789']={ 
    model:'boeing',
    npassengers:151
}

/** Print following lines (going through the object)
 * 123Z:airbus(200)
 * H789:boeing(151)
 */

console.log('123Z:'+myHangar['123Z'].model + '(' + myHangar['123Z'].npassengers + ')');
console.log('H789:'+myHangar['H789'].model + '(' + myHangar['H789'].npassengers + ')');

