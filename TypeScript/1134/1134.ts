/*

Um Posto de combustíveis deseja determinar qual de seus produtos tem a preferência de seus 
clientes. Escreva um algoritmo para ler o tipo de combustível abastecido 
(codificado da seguinte forma: 1.Álcool 2.Gasolina 3.Diesel 4.Fim). 
Caso o usuário informe um código inválido (fora da faixa de 1 a 4) 
deve ser solicitado um novo código (até que seja válido). 
O programa será encerrado quando o código informado for o número 4.
Entrada

A entrada contém apenas valores inteiros e positivos.
Saída

Deve ser escrito a mensagem: "MUITO OBRIGADO" e a quantidade de clientes 
que abasteceram cada tipo de combustível, conforme exemplo.

Exemplo de Entrada:
8
1
7
2
2
4

Exemplo de Saída:
Alcool: 1
Gasolina: 2
Diesel: 0

*/

// import * as fs from "node:fs"

import { readFileSync } from "node:fs"

//Para o beecrowd, use: const input = fs.readFileSync("/dev/stdin", "utf-8")
const input = readFileSync("./entrada.txt", "utf-8")
const intValues = input.trim().split(/\r?\n/)

let qtd_alcool = 0
let qtd_gasolina = 0
let qtd_diesel = 0

function validacaoCombustivel() {
	for (const value of intValues) {
		const codFuel = Number(value)

		switch (codFuel) {
			case 1:
				qtd_alcool += 1
				break
			case 2:
				qtd_gasolina += 1
				break
			case 3:
				qtd_diesel += 1
				break
			default:
				break
		}
	}

	console.log("MUITO OBRIGADO")
	console.log(`Alcool: ${qtd_alcool}`)
	console.log(`Gasolina: ${qtd_gasolina}`)
	console.log(`Diesel: ${qtd_diesel}`)
}

validacaoCombustivel()
