![Alt text](TE_code1.png)

# Ejercicio 2

## Parte 1 - Code1.ts

1. Modificación para el TypeError: en la constante 'a', he modificado la operación de su interior de dos enteros (1 y 2, lo que permite a TS inferir el tipo de variable de 'a' como 'number') a un entero y un string (1 y '2', que permite a TS inferir el tipo de varialbe de 'a' como un String.) 
2. TypeError: La modificación anterior proboca que posteriormente, en la operación para asignarle valor a la constante 'd', salte el error devido a que no se puede realizar una operación aritmética con la parte izquierda siendo un String. 
3. Ventajas: Se nos indica que el valor no es del tipo esperado para el tipo de variable, operación etc. Dependiendo de la casuistica. Esto se traduce a un 'consejo', por aprte del código, de corrección donde se nos indica el error, la causa y las posible soluciones para una correcta implementación. 

## Parte 2 - Preguntas

1. (1 punto) Para cada uno de los valores del fichero code2.ts, ¿Qué tipo de datos inferirá TypeScript? Explica por qué se ha inferido este tipo de datos.

- a -> Number (:number): Numeros enteros o flotantes. Al no estar entre commilas y ser numeros TS inferira como tipo number.
- b -> String (:string): Carácteres y entre commilas, TS inferira como tipo string.
- c -> String(:string): Carácteres y entre commilas, TS inferira como tipo string. También podria tiparlo del tipo any, dependiendo de como se le asigne el valor.
- d -> Array de booleanos (:boolean[]): El array esta compuesto unicamente de booleanos, TS inferira como tipo array de booleanos.
- e -> Objecto con una propiedad (type) de tipo String (type:string =): La propiedad tiene un valor de caracteres entre comillas, TS inferira como tipo string la propiedad.
- f -> Tupla de Numbers y Booleanos (:[number, boolean]): Al detectar que el primer valor de la tupla es un numero entero y el segundo elementu un bolleano, TS inferira como tipo una tupla que puede contener solamente numbers y booleanos.
- g -> Array de numbers (:number[]): al haber unicamente un valor entero dentro del array, TS inferira como tipo array de numbers.
- h -> Null (:null): Se le asigna Null al valor de h, TS inferira como tipo null.

2. (1 punto) ¿Por qué se dispara cada uno de los errores del fichero code3.ts?

- i: Se trata de una constante que tiene que mantener en todo el código el valor que se le ha asigando al declararla. No se le puede asignar el valor de 4 a i.
- j: Al haber creado/declarado j como un array que únicamente contiene números enteros, a posteriori se espera que únciamente se le asignen numbers. TS la ha tipado de un array de tipo numbers.
- k: Un tipo never solo puede ser asignado con el valor never
- m: Al tratarse de una operación aritmética, la parte izquierda tiene que ser si o si un number, y en este caso no se sabe el tipo, por lo tanto, TS da un error.


3. (0.5 puntos) ¿Cuál es la diferencia entre una clase y una interface en TypeScript?

- Las interfaces solo se utilizan para contener la información de tipo de varios atributos correspondientes a un objeto, en cambio, una clase es necesaria para contener la implementación de diferentes objetos con diferentes propiedades de un tipo y métodos.