/*


Escreva um programa que leia 2 valores X e Y e que imprima todos os valores entre eles cujo resto da divisão dele por 5 for igual a 2 ou igual a 3.
Entrada

O arquivo de entrada contém 2 valores positivos inteiros quaisquer, não necessariamente em ordem crescente.
Saída

Imprima todos os valores conforme exemplo abaixo, sempre em ordem crescente.

Exemplo de Entrada
10
18

Exemplo de Saída
13
18

*/

// import * as fs from "node:fs"
// const input = fs.readFileSync("/dev/stdin", "utf-8")

import { readFileSync } from "node:fs"

const input = readFileSync("./entrada.txt", "utf-8")
const lines = input.trim().split(/\s+/)

const min = Math.min(Number(lines[0]), Number(lines[1]))
const max = Math.max(Number(lines[0]), Number(lines[1]))

for (let i = min + 1; i < max; i += 1) {
	if (i % 5 === 2 || i % 5 === 3) {
		console.log(i)
	}
}
