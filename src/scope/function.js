// Function Scope
const greeting = () => {
    let userName = 'ariel';
    console.log(userName);

    if (userName === 'ariel') console.log(`Hello ${userName}`);
}

greeting()
console.log(userName); // variable local no esta al alcanze fuera de la funcion