const read = require('readline')
const rl = read.createInterface({
	input: process.stdin,
	output: process.stdout
})
const color = require('color')
//variable from txt 
const fs = require('fs')
const sec = 1-1

if(!fs.existsSync('./.list.txt')){
	fs.writeFileSync('./.list.txt', '0')
}
const nic = fs.readFileSync('./.list.txt', 'utf-8')
const noc = Number(nic)
let nec = noc

console.log('nec')
if(!fs.existsSync('./.laci.json')){
	fs.writeFileSync('./.laci.json', '[]')
}


//close

if(!fs.existsSync('./.wiki.json')){
	fs.writeFileSync('./.wiki.json', '[]')
}
const menu = ()=>{
	console.clear()
	console.log('WIKI ARIZ BOT')
	console.log('1.new\n'
			+'2.cari\n'
			+'3.lihat laci\n'
			+'4.exit')
	rl.question(': ',(choose)=>{
		if(choose == '1'){
			cek()

		}
		else if(choose == '2') {
			newWiki()
		}
		else if(choose == '3'){
			lihat()
		}
		else{
			console.clear()
			rl.close()
		}
	})
}

//betrtanya
const cek = ()=>{
console.clear()
rl.question('=>name : ',(nama)=>{
		rl.question('=>isi : ',(isi)=>{
			// make a new wiki
			nec++
			console.log(nec)
			let  nec2 = nec.toString()
			fs.writeFileSync('./.list.txt', nec2)
			const ter = {
				nec, nama
			}
			const int = fs.readFileSync('./.laci.json', 'utf-8')
			const newa = JSON.parse(int)
			newa.push(ter)
			fs.writeFileSync('./.laci.json', JSON.stringify(newa))
			//end list

			//make a wiki
			const obj = {nama, isi}
			const file = fs.readFileSync('.wiki.json', 'utf-8')
			const files = JSON.parse(file)
			files.push(obj)
			fs.writeFileSync('.wiki.json', JSON.stringify(files))
			console.clear()
			rl.question('ingin memasukan new wiki or exit ? (y/n) :',(confirm)=>{
				if(confirm == 'y'){
					console.clear()
					cek()
				}
				else{
					console.clear()
					menu()
				}	
			})


		})

})
}
// mencari kata
const newWiki = ()=>{
	console.clear()
	let ncb = fs.readFileSync('./.list.txt', 'utf-8')
	const string = fs.readFileSync('./.wiki.json', 'utf-8')
	const object = JSON.parse(string)
	rl.question(`pilih nec laci 1-${ncb} : `, (numB)=>{
		let num = Number(numB)
		num--
		console.clear()
		console.log('nama => '+object[num].nama)
		console.log('')
		console.log('isi => ' +object[num].isi)
		console.log(' ')
		console.log('cari yang lain ? (y/n) ')
		rl.question(':',(conrm)=>{
				if(conrm == 'y'){
					console.clear()
					newWiki()
				}
				else{
					console.clear()
					menu()
				}	
			})

	})
	
	
}
//lihat laci 
const lihat = ()=>{
	console.clear()
	let baca = fs.readFileSync('./.laci.json', 'utf-8')
	let baca2 = JSON.parse(baca)

	console.log(baca2.map((item)=>`${item.nec}.${item.nama}`).join('\n'))
	
	console.log(' ')
		console.log('ingin mencari ? (y/n) ')
		rl.question(':',(conr)=>{
				if(conr == 'y'){
					console.clear()
					newWiki()
				}
				else{
					console.clear()
					menu()
				}	
			})



}


menu()


