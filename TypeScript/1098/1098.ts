/*


Você deve fazer um programa que apresente a sequencia conforme o exemplo abaixo.
Entrada

Não há nenhuma entrada neste problema.
Saída

Imprima a sequencia conforme exemplo abaixo.

Exemplo de Saída
	

I=0 J=1
I=0 J=2
I=0 J=3
I=0.2 J=1.2
I=0.2 J=2.2
I=0.2 J=3.2
.....
I=2 J=?
I=2 J=?
I=2 J=? 

*/

let i = 0

while (i <= 2) {
	let j = 1

	while (j <= 3) {
		const printI = Number(i.toFixed(1))
		const printJ = Number((j + i).toFixed(1))

		console.log(`I=${printI} J=${printJ}`)
		j += 1
	}
	i += 0.2
}
