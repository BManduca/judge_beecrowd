/*


Escreva um programa que leia um valor inteiro N. N * 2 linhas de saída serão apresentadas na execução do programa, seguindo a lógica do exemplo abaixo. Para valores com mais de 6 dígitos, todos os dígitos devem ser apresentados.
Entrada

O arquivo de entrada contém um número inteiro positivo N (1 < N < 1000).
Saída

Imprima a saída conforme o exemplo fornecido.

Exemplo de Entrada
5

Exemplo de Saída
1 1 1
1 2 2
2 4 8
2 5 9
3 9 27
3 10 28
4 16 64
4 17 65
5 25 125
5 26 126
*/

// import * as fs from "node:fs"
// const input = fs.readFileSync("/dev/stdin", "utf-8")

import { readFileSync } from "node:fs"

const input = readFileSync("./entrada.txt", "utf-8")
const lines = input.trim().split(/\s+/)
const n = Number(lines[0])

for (let i = 1; i <= n; i += 1) {
	const quad = i * i
	const cub = i * i * i

	console.log(`${i} ${quad} ${cub}`)
	console.log(`${i} ${quad + 1} ${cub + 1}`)
}
