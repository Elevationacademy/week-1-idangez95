const genes = ["ACADM", "GLMN", "RLF", "AZIN2", "CRYZ"]
const newStrand = []


const twoWords = genes.splice(0,2)
const lastWord = genes.splice(genes.length-1)

//now the array genes is: ["RLF", "AZIN2"]

newStrand.unshift('FXT')
newStrand.push(...twoWords)
newStrand.push(...lastWord)
newStrand.push(genes[0])
newStrand.push(genes[1], genes[1])

console.log(newStrand)
//[ 'FXT', 'ACADM', 'GLMN', 'CRYZ', 'RLF', 'AZIN2', 'AZIN2' ]


