/*


A Federação Gaúcha de Futebol contratou você para escrever um programa para 
fazer uma estatística do resultado de vários GRENAIS. Escreva um programa 
para ler o número de gols marcados pelo Inter e pelo Grêmio em um GRENAL.
Logo após escrever a mensagem "Novo grenal (1-sim 2-nao)" e solicitar uma 
resposta. Se a resposta for 1, o algoritmo deve ser executado novamente 
solicitando o número de gols marcados pelos times em uma nova partida, 
caso contrário deve ser encerrado imprimindo:

- Quantos GRENAIS fizeram parte da estatística.
- O número de vitórias do Inter.
- O número de vitórias do Grêmio.
- O número de Empates.
- Uma mensagem indicando qual o time que venceu o maior número de GRENAIS 
(ou "Nao houve vencedor", caso termine empatado).
Entrada

O arquivo de entrada contém 2 valores inteiros, correspondentes aos gols 
marcados pelo Inter e pelo Grêmio respectivamente. Em seguida háverá um 
inteiro (1 ou 2), correspondente à repetição do programa.
Saída

Após cada leitura dos gols, deve ser impressa a mensagem "Novo grenal (1-sim 2-nao)". 
Quando o algoritmo for encerrado devem ser mostradas as estatísticas conforme 
a descrição apresentada acima. Obs: a palavra "Gremio" deve ser impressa sem acento, 
conforme o exemplo abaixo.

*/

// import * as fs from "node:fs"

import { readFileSync } from "node:fs"

//Para o beecrowd, use: const input = fs.readFileSync("/dev/stdin", "utf-8")
const input = readFileSync("./entrada.txt", "utf-8")
const lines = input.trim().split(/\r?\n/)

let grenais = 0
let vitoriasInter = 0
let vitoriasGremio = 0
let empates = 0

let i = 0

while (i < lines.length) {
	const [golsInter, golsGremio] = lines[i].split(" ").map(Number)
	grenais += 1

	if (golsInter > golsGremio) {
		vitoriasInter += 1
	} else if (golsInter < golsGremio) {
		vitoriasGremio += 1
	} else {
		empates += 1
	}

	console.log("Novo grenal (1-sim 2-nao)")
	i += 1

	const opt = Number(lines[i])
	i += 1
	if (opt === 2) {
		break
	}
}

if (grenais <= 1) {
	console.log(`${grenais} grenal`)
} else {
	console.log(`${grenais} grenais`)
}
console.log(`Inter:${vitoriasInter}`)
console.log(`Gremio:${vitoriasGremio}`)
console.log(`Empates:${empates}`)

if (vitoriasInter > vitoriasGremio) {
	console.log("Inter venceu mais")
} else if (vitoriasGremio > vitoriasInter) {
	console.log("Gremio venceu mais")
} else {
	console.log("Nao houve vencedor")
}
