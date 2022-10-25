const todos = [
{
    id: 1,
    text: 'Take out trash',
    isCompleted: true
},
{
    id: 2,
    text: 'Meeting with boss',
    isCompleted: true
},
{
    id: 3,
    text: 'Dentist appt',
    isCompleted: false
},
]

// for
/* for(let todo of todos) {
    console.log(todo.text);
} */


//* for each
/* todos.forEach(function(todo) {
    console.log(todo.text);
}); */

// map
const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === false;
}).map(function(todo) {
    return todo.text;
})

console.log(todoCompleted);

