/*
Escreva um programa que leia um valor inteiro N. Este N é a quantidade de linhas de saída que serão apresentadas na execução do programa.
Entrada

O arquivo de entrada contém um número inteiro positivo N.
Saída

Imprima a saída conforme o exemplo fornecido.

Exemplo de Entrada
7

Exemplo de Saída
1 2 3 PUM
5 6 7 PUM
9 10 11 PUM
13 14 15 PUM
17 18 19 PUM
21 22 23 PUM
25 26 27 PUM
*/

// import * as fs from "node:fs"
import { readFileSync } from "node:fs"

// para uso no beecrowd
// const value = fs.readFileSync("/dev/stdin", "utf-8")
const value = readFileSync("./entrada.txt", "utf-8")

const valueNumber = Number(value)
let sum = 1

for (let x = 1; x <= valueNumber; x += 1) {
	console.log(`${sum} ${sum + 1} ${sum + 2} PUM`)
	sum += 4
}
