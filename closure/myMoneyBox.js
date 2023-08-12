/* const alcancia = (salario) => {            sin closure
    let dinero = 0
    dinero += salario
    console.log(`Has Ahorrado: $${dinero}`);
}

alcancia(5);
alcancia(5); */



// con Closure

const alcancia = () => {
    let saveMoney = 0;
    const alcancia2 = (coins) => {
        saveMoney += coins;
        console.log(`Has Ahorrado: $${saveMoney}`);
    }
    return alcancia2;
}

const miAlcancia = alcancia();

miAlcancia(5);
miAlcancia(5);
miAlcancia(25);

const alcanciaDeAna = alcancia()

alcanciaDeAna(5);
alcanciaDeAna(6);
alcanciaDeAna(6);