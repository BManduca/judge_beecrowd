/*


Leia uma quantidade indeterminada de duplas de valores inteiros X e Y. Escreva para cada X e Y uma mensagem que indique se estes valores foram digitados em ordem crescente ou decrescente.
Entrada

A entrada contém vários casos de teste. Cada caso contém dois valores inteiros X e Y. A leitura deve ser encerrada ao ser fornecido valores iguais para X e Y.
Saída

Para cada caso de teste imprima “Crescente”, caso os valores tenham sido digitados na ordem crescente, caso contrário imprima a mensagem “Decrescente”.

Exemplo de Entrada

5 4
7 2
3 8
2 2


Exemplo de Saída

Decrescente
Decrescente
Crescente
*/

import { readFileSync } from "node:fs"

// import * as fs from "node:fs"

// const input = fs.readFileSync("/dev/stdin", "utf-8")

const input = readFileSync("./entrada.txt", "utf-8")
const lines = input.trim().split(/\r?\n/)

for (const line of lines) {
	const [x, y] = line.split(" ").map(Number)

	if (x > y) {
		console.log("Decrescente")
	} else if (x < y) {
		console.log("Crescente")
	} else if (x === y) {
		break
	}

	// console.log(`x = ${x} | y = ${y}`)
}
