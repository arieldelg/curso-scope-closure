const myGlobal = 0;

const myFunction = () => {
    const myNumber = 1;
    console.log(myGlobal);

    const parent = () => {  //funcion interna esta funcion es un closure
        const inner = 2;
        console.log(myNumber, myGlobal);

        const child = () => {
            console.log(inner, myGlobal, myNumber);
            
        }
        return child();
    }
    return parent();
}

myFunction();



