const names = ['Владилен', 'Алёна', 'Игорь', 'Ксения']

// names.push('Алёнаka')
// names.unshift('Алёнаka')

// const name = names.shift()
// const name = names.pop()
// console.log('names:', names, name)

// console.log(names.reverse())
// const reversed = names.toReversed()
// const letters = ['e', 'c', 'd', 'b', 'a']
// console.log(letters.toSorted())
// console.log(letters)

// console.log(names.splice(0, 2))
// console.log(names.toSpliced(0, 2))
// console.log(names)

// const greateWoman = 'Алёна'
// const index = names.indexOf(greateWoman)
// console.log(index)
// const newNames = names.with(index, 'Алёна Великая')
// names[index] = 'Алёна Великая'
// console.log(names[index])
// console.log(names)
// console.log(newNames)

// const capitalNames = names.map(function(name, index) {
//     if (index === 1) {
//         return 'Алёна Великая'}
//     return name
//     // return name.toUpperCase()
//     // return name.toLowerCase() 
//     })
// console.log(capitalNames)

// console.log(names.includes('Алёна'))
// console.log(names.indexOf('Алёна') !== -1)

const people = [
    {name: 'Abdullo', budget: 4200 },
    {name: 'Алёна', budget: 15100 },
    {name: 'Игорь', budget: 300 },
    {name: 'Ксения', budget: 7520 },
]

// console.log(people.indexOf({name: 'Ксения', budget: 7520}))

// let findedPerson 
// for (let person of people) {
//     if (person.budget === 7520) {
//         findedPerson = person
//     }
// }

// const finded = people.find((p) => p.budget === 7520)

// const findedPerson = people.find(function(person) {
//     return person.budget === 7520
// })

// const finded = people.findIndex(function(person) {
//     return person.budget === 7520
// })

// console.log(people.with(finded, 42))

// let sumBudget = 0
// const filtered = people.filter(function (p) {
//     return p.budget > 5000
// })
// filtered.forEach(function(p) {
//     // sumBudget = sumBudget + p.budget
//     sumBudget += p.budget
// })

// const byBudget = p => p.budget > 5000
// const pickBudget = p => p.budget
// const sumBudget = people
// .filter(byBudget)
// .map(pickBudget)
// .reduce((acc, p) => acc + p, 0)

// console.log(sumBudget)

const string = 'Привет, как дела?'
const revetsed = string
.split('')
.toReversed()
.join('!')
.split('')
// .filter((c) => c !== 'а')
.filter((c) => c !== '!')
.toReversed()
.join('')


// console.log(string)
console.log(revetsed)