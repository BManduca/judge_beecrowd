/*


Leia um valor inteiro N que é a quantidade de casos de teste que vem a seguir. Cada caso de teste consiste de dois inteiros X e Y. Você deve apresentar a soma de todos os ímpares existentes entre X e Y.
Entrada

A primeira linha de entrada é um inteiro N que é a quantidade de casos de teste que vem a seguir. Cada caso de teste consiste em uma linha contendo dois inteiros X e Y.
Saída

Imprima a soma de todos valores ímpares entre X e Y.

Entrada de Exemplo
7
4 5
13 10
6 4
3 3
3 5
3 4
3 8

Saída de Exemplo
0
11
5
0
0
0
12

*/

// import * as fs from "node:fs"
//const input = fs.readFileSync("/dev/stdin", "utf-8")

import { readFileSync } from "node:fs"

const input = readFileSync("./entrada.txt", "utf-8")

const values = input.trim().split(/\r?\n/)

const [_, ...lines] = values

for (const line of lines) {
	const [x, y] = line.split(" ").map(Number)

	const min = Math.min(x, y)
	const max = Math.max(x, y)

	let sum_total = 0

	for (let i = min + 1; i < max; i += 1) {
		if (i % 2 !== 0) {
			sum_total += i
		}
	}

	console.log(sum_total)
}
