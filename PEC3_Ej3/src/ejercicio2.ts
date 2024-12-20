Sustituye /***/ por las instrucciones adecuadas que cumplan las operaciones 
y salidas indicadas en los comentarios.


interface Plane{
    model:string,
    npassengers:number
}

interface HangarHash {
    [key: string]: Plane; // Definimos el tipo del objeto HangarHash
}

let myHangar:HangarHash = {}

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

for (const key in myHangar) {
    const plane = myHangar[key];
    console.log(`${key}:${plane.model}(${plane.npassengers})`); // Imprime el formato requerido
}