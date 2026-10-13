// import * as fs from "node:fs"
// const input = fs.readFileSync("/dev/stdin", "utf-8")

import { readFileSync } from "node:fs"

const input = readFileSync("./entrada.txt", "utf-8")
const value = Number(input)

for (let i = 1; i <= value; i += 1) {
	const sqr = i ** 2
	const cube = i ** 3
	console.log(`${i} ${sqr} ${cube}`)
}
