let toDo = [10];
console.log('Enter the To-Do list max can be added is 10');
    for(var i = 0; i<=10; i++){
        let userInput = prompt(`Enter the to-do list ${i + 1}: `);
        toDo.push(userInput)
}
console.log('the todo list',toDo);