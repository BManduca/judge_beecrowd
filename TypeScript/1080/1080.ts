/*
Desafio Maior e Posição (1080 Beecrowd)

Leia 100 valores inteiros. Apresente então o maior
valor lido e a posição dentre os 100 valores lidos.

Entrada:
O arquivo de entrada contém 100 números inteiros, positivos e distintos.

Saída:
Apresente o maior valor lido e a posição de entrada, conforme o exemplo abaixo

Exemplo de entrada: 2 113 45 34565 ... 8

Exemplo de saída:
34565
4

*/

// para envio no beecrowd
// import * as fs from 'fs';

// Se o editor acusar aviso local, descomente apenas para testes locais
import { readFileSync } from "node:fs"

// encontrar o maior valor e a posição
function encontrarMaiorValorEPosicao(nums: number[]): {
	maiorValor: number
	posMaiorValor: number
} {
	let maiorValor: number = nums[0]
	let posMaiorValor = 1

	for (let i = 1; i < nums.length; i += 1) {
		if (nums[i] > maiorValor) {
			maiorValor = nums[i]
			posMaiorValor = i + 1
		}
	}

	return { maiorValor, posMaiorValor }
}

// Para o Beecrowd (Manter descomentado/ativo ao enviar)
// const input = fs.readFileSync("/dev/stdin", "utf-8")

// Opção B: Testar lendo de um arquivo local 'entrada.txt' (descomente para usar)
const input = readFileSync("./entrada.txt", "utf-8")

// divide o input por espaços ou quebra de linhas e converte em um array de numeros
const numsEntrada: number[] = input.trim().split(/\s+/).map(Number)

// encontra o maior valor e a posição
const rst = encontrarMaiorValorEPosicao(numsEntrada)

console.log(rst.maiorValor)
console.log(rst.posMaiorValor)
