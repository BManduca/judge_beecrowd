/*


Escreva um algoritmo que leia 2 valores inteiros X e Y calcule a soma dos números que não são múltiplos de 13 entre X e Y, incluindo ambos.
Entrada

O arquivo de entrada contém 2 valores inteiros quaisquer, não necessariamente em ordem crescente.
Saída

Imprima a soma de todos os valores não divisíveis por 13 entre os dois valores lidos na entrada, inclusive ambos se for o caso.

Sample Output
13954

*/

// import * as fs from "node:fs"
// const input = fs.readFileSync("/dev/stdin", "utf-8")

import { readFileSync } from "node:fs"

const input = readFileSync("./entrada.txt", "utf-8")

const lines = input.trim().split(/\s+/)

const x = Number(lines[0])
const y = Number(lines[1])

const min = Math.min(x, y)
const max = Math.max(x, y)

let sum = 0

for (let i = min; i <= max; i += 1) {
	if (i % 13 !== 0) {
		sum += i
	}
}
console.log(sum)
