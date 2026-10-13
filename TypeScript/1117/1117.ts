/*


Faça um programa que leia as notas referentes às duas avaliações de um aluno. Calcule e imprima a média semestral. Faça com que o algoritmo só aceite notas válidas (uma nota válida deve pertencer ao intervalo [0,10]). Cada nota deve ser validada separadamente.
Entrada

A entrada contém vários valores reais, positivos ou negativos. O programa deve ser encerrado quando forem lidas duas notas válidas.
Saída

Se uma nota inválida  for lida, deve ser impressa a mensagem "nota invalida".
Quando duas notas válidas forem lidas, deve ser impressa a mensagem "media = " seguido do valor do cálculo. O valor deve ser apresentado com duas casas após o ponto decimal.

Exemplo de Entrada
-3.5
3.5
11.0
10.0

Exemplo de Saída
nota invalida
nota invalida
media = 6.75
*/

// import * as fs from "node:fs"
// const input = fs.readFileSync("/dev/stdin", "utf-8")

import { readFileSync } from "node:fs"

const input = readFileSync("./entrada.txt", "utf-8")
const values = input.trim().split(/\r?\n/)

let total = 0
let count = 0

for (const line of values) {
	const score = Number(line)
	if (score >= 0 && score <= 10) {
		total += score
		count += 1
	} else {
		console.log("nota invalida")
	}

	if (count === 2) {
		break
	}
}

const rst = (total / count).toFixed(2)

console.log(`media = ${rst}`)
