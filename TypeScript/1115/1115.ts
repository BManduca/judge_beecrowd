/*


Escreva um programa para ler as coordenadas (X,Y) de uma quantidade indeterminada de pontos no sistema cartesiano. Para cada ponto escrever o quadrante a que ele pertence. O algoritmo será encerrado quando pelo menos uma de duas coordenadas for NULA (nesta situação sem escrever mensagem alguma).
Entrada

A entrada contém vários casos de teste. Cada caso de teste contém 2 valores inteiros.
Saída

Para cada caso de teste mostre em qual quadrante do sistema cartesiano se encontra a coordenada lida, conforme o exemplo.

Exemplo de Entrada
2 2
3 -2
-8 -1
-7 1
0 2 

Exemplo de Saída
primeiro
quarto
terceiro
segundo

*/

// import * as fs from "node:fs"
// const input = fs.readFileSync("/dev/stdin","utf-8")

import { readFileSync } from "node:fs"

const input = readFileSync("./entrada.txt", "utf-8")
const lines = input.trim().split(/\r?\n/)

for (const line of lines) {
	const [x, y] = line.split(" ").map(Number)

	switch (true) {
		case x > 0 && y > 0:
			console.log("primeiro")
			break
		case x < 0 && y > 0:
			console.log("segundo")
			break
		case x < 0 && y < 0:
			console.log("terceiro")
			break
		case x > 0 && y < 0:
			console.log("quarto")
			break
		default:
			break
	}

	// console.log(`[x] = ${x} | [y] = ${y}`)
}
