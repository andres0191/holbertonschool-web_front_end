/* VARIABLES
	NUMBER = cantidad de numeros que tendrá el vector definido por el usuario
	ARREGLO = vector introducido por el usuario
	AUXILIAR = variable auxiliar para el ordenamiento del arreglo
	RANDOMNUMBER = numeros aleatorios

INICIO
	MIENTRAS arreglo.tamaño < number
		randomNumber = generador de numeros aleatorios
		arreglo[arreglo.tamaño] = randomNumber

	PARA i = 1 hasta i < arreglo.tamaño, incremento en 1
		PARA j = 0 hasta j < arreglo.tamaño - i, inremento en 1
			SI arreglo[j] > arreglo[j+1]
				auxiliar = arreglo[j]
				arreglo[j] = arreglo[j+1]
				arreglo[j+1] = auxiliar
			FIN-SI
		FIN-PARA
	FIN-PARA
FIN*/

let arr = []
const vector = (number) => {
    while(arr.length < number){
        let randomNumber = Math.ceil(Math.random()*number);
        arr[arr.length] = randomNumber
        console.log(arr)
    }
    let n = arr.length, aux = 0;
    for(let i = 1; i < n; i++){
        for(let j = 0; j < (n- i); j++){
            if(arr[j] > arr[j+1]){
                aux = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = aux
            }
        }
    }
        console.log(`El mayor numero del vector es: ${arr[arr.length-1]}`)
}

vector(5)
/* [ 3 ]
[ 3, 2 ]
[ 3, 2, 2 ]
[ 3, 2, 2, 4 ]
[ 3, 2, 2, 4, 1 ]

4 */
