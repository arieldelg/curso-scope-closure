const greetings = () => {
    let userName = 'ariel';

    const displayUserName = () => {
        return `Hello ${userName}`;
    }
    return displayUserName;
}

const g = greetings();

console.log(g);
console.log(g());

