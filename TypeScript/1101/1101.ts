/* 

Leia um conjunto não determinado de pares de valores M e N (parar quando algum dos valores for menor ou igual a zero). Para cada par lido, mostre a sequência do menor até o maior e a soma dos inteiros consecutivos entre eles (incluindo o N e M).
Entrada

O arquivo de entrada contém um número não determinado de valores M e N. A última linha de entrada vai conter um número nulo ou negativo.
Saída

Para cada dupla de valores, imprima a sequência do menor até o maior e a soma deles, conforme exemplo abaixo.

Exemplo de Entrada
5 2
6 3
5 0

Exemplo de Saída
2 3 4 5 Sum=14
3 4 5 6 Sum=18

*/

// import * as fs from "node:fs"

import { readFileSync } from "node:fs"

// Para o beecrowd, use:
// const input = fs.readFileSync("/dev/stdin", "utf-8")
const input = readFileSync("./entrada.txt", "utf-8")
const lines = input.trim().split(/\r?\n/)

for (const line of lines) {
	const [m, n] = line.split(" ").map(Number)

	if (m <= 0 || n <= 0) {
		break
	}

	const menor = Math.min(m, n)
	const maior = Math.max(m, n)

	let soma = 0

	const numeros: number[] = []

	for (let x = menor; x <= maior; x += 1) {
		numeros.push(x)
		soma += x
	}

	console.log(`${numeros.join(" ")} Sum=${soma}`)
}
