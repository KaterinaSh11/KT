/*// const array = [1,2,3,4,46]
// const arrayString = ['a', 'b', 'c']
// console.log(array.length)
// console.log(arrayString)

// Создайте переменную a, присвоив в нее любое число. 

// Если значение переменной четное:
// выведите в консоль “Четное”
// Если значение переменной нечетное:
// выведите в консоль “Нечетное”
// Прибавьте к a + 1.
// Выведите обновленное значение a.


// const b = a%2
// console.log(b)
let a = 21
a%2 == 0 ? console.log("четное") : console.log("нечетное"); a+=1; console.log(a)
// if(a%2 == 0){
//     console.log("четное")
//     }
//     else{
//         console.log("нечетное")
//         a+=1
//         console.log(a)
//     }*/

// const inputElement = document.getElementById('title')
// const createBtn = document.getElementById('create')
// const listElement = document.getElementById('list')

//console.log(inputElement.value)
//const notes = ['записать блок про массивы','рассказать теорию объектов',42]

// function render(){
//     // for(let i = 0; i < notes.length; i++){
//     //     listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i]))
//     // }

//     for(let note of notes){
//         listElement.insertAdjacentHTML('beforeend', getNoteTemplate(note))
//     }
// }
// render() //передать оказать испольнить

// createBtn.onclick = function () {
//     if (inputElement.value.length === 0){
//         return
//     }
//     //listElement.innerHTML = 
//     listElement.insertAdjacentHTML(
//     'beforeend', getNoteTemplate(inputElement.value)
//     )
//     inputElement.value = ''
// }

// function getNoteTemplate (title){
//     return  `
//     <li
//          class="list-group-item d-flex justify-content-between align-items-center"
//     >
//         <span>${title}</span>
//         <span>
//             <span class="btn btn-small btn-success">&check;</span>
//             <span class="btn btn-small btn-danger">&times;</span>
//         </span>
//     </li>
// `
// }


// const person = {
//     name: 'Ekaterina',
//     year: 1986,
//     language: ['ru','en'],
//     hashusband: true,
//     getFull: function(){
//         console.log(person.name + ' ' + person.language)
//     }
// }
// console.log(person.name, person.year, person.getFull)
// const key = 'hashusband'
// console.log(person[key])
// person.getFull()

const inputElement = document.getElementById('title')
const createBtn = document.getElementById('create')
const listElement = document.getElementById('list')

const notes = [
    {
        title: 'записать блок про массивы',
        completed: false,
    },
    {
        title: 'рассказать терию объектов',
        completed: true,
    },
]

function render(){
    for(let note of notes){
        listElement.insertAdjacentHTML('beforeend', getNoteTemplate(note))
    }
}
render() //передать оказать испольнить

createBtn.onclick = function () {
    if (inputElement.value.length === 0){
        return
    }
    const newNote = {
        title: inputElement.value,
        completed: false,
        }

    listElement.insertAdjacentHTML('beforeend', getNoteTemplate(newNote)
    )
    inputElement.value = ''
}

function getNoteTemplate (note){
    return  `
    <li
         class="list-group-item d-flex justify-content-between align-items-center"
    >
        <span>${note.title}</span>
        <span>
            <span class="btn btn-small btn-success">&check;</span>
            <span class="btn btn-small btn-danger">&times;</span>
        </span>
    </li>
`
}
