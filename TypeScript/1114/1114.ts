/*


Escreva um programa que repita a leitura de uma senha até que ela seja válida. Para cada leitura de senha incorreta informada, escrever a mensagem "Senha Invalida". Quando a senha for informada corretamente deve ser impressa a mensagem "Acesso Permitido" e o algoritmo encerrado. Considere que a senha correta é o valor 2002. 
Entrada

A entrada é composta por vários casos de testes contendo valores inteiros.
Saída

Para cada valor lido mostre a mensagem correspondente à descrição do problema.

Exemplo de Entrada:
2200
1020
2022
2002

Exemplo de Saída:
Senha Invalida
Senha Invalida
Senha Invalida
Acesso Permitido

*/

// para envio no beecrowd
// import * as fs from "fs"
import { readFileSync } from "node:fs"

const senhaCorreta = 2002

// Para o Beecrowd (descomente a linha abaixo e comente a leitura do ./entrada.txt ao enviar):
// const input = fs.readFileSync("/dev/stdin", "utf-8")
const input = readFileSync("./entrada.txt", "utf-8")
const passwords = input.trim().split(/\r?\n/)

function validarSenha(senha: number) {
	if (senha === senhaCorreta) {
		return "Acesso Permitido"
	}
	return "Senha Invalida"
}

for (const password of passwords) {
	const result = validarSenha(Number.parseInt(password, 10))
	console.log(result)
	if (result === "Acesso Permitido") {
		break
	}
}
